import { readFile, writeFile, access } from 'fs/promises';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const PUBLIC = join(ROOT, 'public');

// Files to update
const FILES = [
  'src/data/portfolioData.ts',
  'src/data/pathsData.ts',
  'src/data/eventData.ts',
  'src/pages-components/Event/EventPage.tsx',
  'src/pages-components/Homescreenpage/FeaturedProjectsAndSkills.tsx',
  'src/pages-components/Homescreenpage/AboutSection.tsx',
  'src/pages-components/Portfolio/NewPortfolioPage.tsx',
  'src/components/ProfileCard.tsx',
];

// Match image extensions in string literals
const IMAGE_REGEX = /(["'])([^"']*)\.(png|jpg|jpeg|JPG)(["'])/g;

async function webpExists(imagePath) {
  const webpPath = join(PUBLIC, imagePath.replace(/\.(png|jpg|jpeg|JPG)$/, '.webp'));
  try {
    await access(webpPath);
    return true;
  } catch {
    return false;
  }
}

async function processFile(relPath) {
  const filePath = join(ROOT, relPath);
  let content;
  try {
    content = await readFile(filePath, 'utf-8');
  } catch {
    console.log(`  SKIP: ${relPath} not found`);
    return;
  }

  let changes = 0;
  const matches = [...content.matchAll(IMAGE_REGEX)];

  for (const match of matches) {
    const fullMatch = match[0];
    const imagePath = `${match[2]}.${match[3]}`;

    // Only update if webp version exists
    if (await webpExists(imagePath)) {
      const newRef = `${match[1]}${match[2]}.webp${match[4]}`;
      content = content.replace(fullMatch, newRef);
      changes++;
      console.log(`  ✓ ${imagePath} → .webp`);
    } else {
      console.log(`  ○ ${imagePath} (no webp, keeping original)`);
    }
  }

  if (changes > 0) {
    await writeFile(filePath, content, 'utf-8');
    console.log(`  → ${changes} references updated in ${relPath}\n`);
  } else {
    console.log(`  → No changes needed in ${relPath}\n`);
  }
}

async function main() {
  console.log('Updating image references to .webp...\n');
  for (const file of FILES) {
    console.log(`Processing: ${file}`);
    await processFile(file);
  }
  console.log('Done!');
}

main();
