import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), WindiCSS()],
  base: process.env.NODE_ENV === 'dev' ? '/' : '/whirl/',
  build: {
    outDir: 'build',
  },
});
