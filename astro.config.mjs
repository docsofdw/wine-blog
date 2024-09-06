import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: 'public',
  site: 'https://drinksofdw.com',
  // Add other configurations as needed
  vite: {
    define: {
      'import.meta.env.PUBLIC_STRAPI_URL': JSON.stringify(process.env.PUBLIC_STRAPI_URL),
    },
  },
});