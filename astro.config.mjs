// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    server: {
    host: true // binds to 0.0.0.0
  },
  
  integrations: [react()],

  vite: {
    server: {
      allowedHosts: ["portfolio-project.ddev.site"],
    },
    plugins: [tailwindcss()]
  }
});