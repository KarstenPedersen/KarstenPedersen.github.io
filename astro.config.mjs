// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://karstenpedersen.github.io',
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    })
  ]
});