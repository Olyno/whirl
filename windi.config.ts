import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#000B49',
        secondary: '#FF7272',
        accent: '#FFB5B5',
      },
    },
  },
});
