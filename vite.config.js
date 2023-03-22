import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import forgetti from 'vite-plugin-forgetti';

export default defineConfig({
  plugins: [
    react(),
    forgetti({ preset: 'react' })
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
