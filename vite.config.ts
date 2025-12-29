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
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            // Lazy load heavy libraries
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            // Other node_modules
            return 'vendor-other';
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
