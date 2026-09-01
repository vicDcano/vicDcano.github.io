import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/', 
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'home.html'), 
        project: resolve(import.meta.dirname, 'project.html'), 
      },
    },
  },
  // This native configuration automatically rewrites clean paths while you test locally!
  server: {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/project') {
          req.url = '/project.html';
        }
        next();
      });
    },
  },
});