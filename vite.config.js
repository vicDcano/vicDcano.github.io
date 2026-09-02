import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './', 
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {

        index: resolve(import.meta.dirname, 'index.html'), 
        home: resolve(import.meta.dirname, 'home.html'), 
        project: resolve(import.meta.dirname, 'project.html'),
        bio: resolve(import.meta.dirname, 'bio.html'),
      },
    },
  },
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
