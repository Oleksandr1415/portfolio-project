// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-project-gilt-kappa.vercel.app',
  output: 'static',
  adapter: vercel(),
  i18n: {
    locales: ['en', 'de', 'ua'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true, // e.g. /de/about or /en/about
    },
  },
  server: {
    host: true, // binds to 0.0.0.0
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],

  vite: {
    server: {
      allowedHosts: ['portfolio-project.ddev.site'],
    },
    plugins: [tailwindcss()],
  },
});
