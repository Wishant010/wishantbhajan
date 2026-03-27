import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, relative } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const QUALITY = 80;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFiles(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function compressImage(filePath) {
  const relPath = relative(PUBLIC_DIR, filePath);
  const ext = extname(filePath).toLowerCase();
  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  try {
    const originalStats = await stat(filePath);
    const originalSize = originalStats.size;

    // Skip small files (< 50KB)
    if (originalSize < 50 * 1024) {
      console.log(`  SKIP (small): ${relPath} (${(originalSize / 1024).toFixed(0)}KB)`);
      return { skipped: true };
    }

    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();

    // Resize if larger than max dimensions
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpPath);

    const newStats = await stat(webpPath);
    const savings = ((1 - newStats.size / originalSize) * 100).toFixed(1);
    const oldMB = (originalSize / 1024 / 1024).toFixed(1);
    const newMB = (newStats.size / 1024 / 1024).toFixed(1);

    console.log(`  ✓ ${relPath}: ${oldMB}MB → ${newMB}MB (${savings}% smaller)`);
    return { original: originalSize, compressed: newStats.size };
  } catch (err) {
    console.error(`  ✗ ${relPath}: ${err.message}`);
    return { error: true };
  }
}

async function main() {
  console.log('Scanning for images...\n');
  const files = await getFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} images to compress\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  let converted = 0;

  for (const file of files) {
    const result = await compressImage(file);
    if (result.original) {
      totalOriginal += result.original;
      totalCompressed += result.compressed;
      converted++;
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Converted: ${converted} images`);
  console.log(`Total original: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Total compressed: ${(totalCompressed / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Total saved: ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(1)}MB (${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%)`);
}

main();
