// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true, // e.g. /de/about or /en/about
    },
  },
  server: {
    host: true, // binds to 0.0.0.0
  },

  integrations: [react()],

  vite: {
    server: {
      allowedHosts: ['portfolio-project.ddev.site'],
    },
    plugins: [tailwindcss()],
  },
});
