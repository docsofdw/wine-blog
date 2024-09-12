import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'dist', // Change this to a directory outside of 'public'
  vite: {
    define: {
      'import.meta.env.PUBLIC_STRAPI_URL': JSON.stringify(process.env.PUBLIC_STRAPI_URL),
    },
  },
  // ... other config options
});