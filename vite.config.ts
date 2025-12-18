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
        // Manual chunks for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react/jsx-runtime'],
          'vendor-router': ['react-router-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-gsap': ['gsap']
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
    chunkSizeWarningLimit: 500,

    // CSS code splitting
    cssCodeSplit: true,

    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096
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
