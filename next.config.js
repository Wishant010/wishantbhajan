/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable SWC minification for better performance
  swcMinify: true,

  // Optimize images
  images: {
    domains: ['wishantbhajan.nl'],
    formats: ['image/avif', 'image/webp'],
  },

  // Optimize production builds
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Output directory for static export (if needed for GitHub Pages)
  output: 'export',
  distDir: 'dist',

  // Base path for GitHub Pages (if needed)
  // basePath: process.env.NODE_ENV === 'production' ? '' : '',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure webpack
  webpack: (config, { isServer }) => {
    // Handle canvas module for server-side rendering
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
      };
    }

    // Handle GLSL shaders for Three.js
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },

  // Custom headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
