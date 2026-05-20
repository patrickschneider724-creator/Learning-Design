import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built bundle works whether it's served from
// a domain root or a GitHub Pages subpath (e.g. /Learning-Design/).
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    open: true,
  },
});
