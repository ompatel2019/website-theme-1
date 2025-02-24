import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // Compress output files using Brotli for improved delivery speed
    compression({
      algorithm: 'brotliCompress'
    }),
    // Generate a bundle analysis report to help identify unused code
    visualizer({
      open: true,
      filename: 'bundle-analysis.html'
    })
  ],
  resolve: {
    alias: {
      // Create an alias for 'src' as '@'
      '@': path.resolve(__dirname, 'src')
    }
  }
});
