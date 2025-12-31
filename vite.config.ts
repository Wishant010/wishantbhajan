import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],

  // Build optimizations
  build: {
    // Use esbuild for faster minification (default in Vite)
    minify: 'esbuild',

    // Code splitting configuration
    rollupOptions: {
      output: {
        // Manual chunks for better caching and lazy loading
        manualChunks: (id) => {
          // Core vendor chunks
          if (id.includes('node_modules')) {
            // React core - keep together to avoid circular deps
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            // 3D libraries together
            if (id.includes('three') || id.includes('@react-three') || id.includes('ogl')) {
              return 'vendor-three';
            }
            // Animation libraries together
            if (id.includes('framer-motion') || id.includes('gsap') || id.includes('postprocessing')) {
              return 'vendor-animation';
            }
            // Smaller utility libraries together
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('lucide-react')) {
              return 'vendor-utils';
            }
            // Don't force other node_modules into a single chunk
            // Let Vite handle the rest automatically to avoid circular deps
          }
          
          // Split pages into separate chunks for better code splitting
          if (id.includes('/pages-components/')) {
            if (id.includes('LandinPage')) return 'page-landing';
            if (id.includes('About')) return 'page-about';
            if (id.includes('Portfolio')) return 'page-portfolio';
            if (id.includes('Event')) return 'page-event';
            if (id.includes('ProjectDetail')) return 'page-project';
          }
        },
        // Smaller chunk size for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff2?|ttf|eot|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },

    // Target modern browsers for smaller bundle
    target: 'es2020',

    // Disable source maps for smaller builds in production
    sourcemap: false,

    // Report compressed size
    reportCompressedSize: true,

    // Chunk size warning limit
    chunkSizeWarningLimit: 600,

    // CSS code splitting per page
    cssCodeSplit: true,

    // Asset inlining threshold (2kb for more aggressive inlining)
    assetsInlineLimit: 2048
  },

  // Development optimizations
  server: {
    // Enable HMR
    hmr: true,
    // Pre-bundle dependencies
    warmup: {
      clientFiles: [
        './src/main.tsx',
        './src/routes.tsx',
        './src/pages-components/Homescreenpage/index.tsx'
      ]
    }
  },

  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'clsx',
      'tailwind-merge'
    ]
  },

  // CSS optimizations
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase'
    }
  },

  // Enable JSON tree-shaking
  json: {
    stringify: true
  },

  // Preview server (for testing production builds)
  preview: {
    port: 4173,
    strictPort: true
  },

  // Esbuild options for dropping console in production
  esbuild: {
    drop: ['console', 'debugger']
  }
});
