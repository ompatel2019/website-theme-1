import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  // Ensure you import 'path' to use it for resolving paths

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Create an alias for 'src' as '@' or any other name you prefer
      '@': path.resolve(__dirname, 'src')
    }
  }
});
