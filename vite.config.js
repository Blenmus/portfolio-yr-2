import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/your-repo-name/', // Replace 'your-repo-name' with your actual repository name
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default output directory for your build
  },
});
