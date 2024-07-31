import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': 'http://localhost:5001', // Proxy API requests to your backend server
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  build: {
    // Minify code
    minify: 'terser',
    // Optionally use the 'esbuild' minifier for faster builds
    // minify: 'esbuild',
    // Compress the code further and remove console logs
    terserOptions: {
      compress: {
        drop_console: true,
      },
      mangle: true,
    },
    // Define how chunks are created
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: Split vendor code into a separate chunk
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Ensure the output directory is clean before build
    emptyOutDir: true,
  },
  optimizeDeps: {
    // Pre-bundle dependencies
    include: ['react', 'react-dom'],
  },
});
