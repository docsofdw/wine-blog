/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_STRAPI_URL: string;
    readonly PUBLIC_STRAPI_API_TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }