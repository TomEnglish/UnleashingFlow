import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://unleashingflow.com',
  integrations: [sitemap()],
  output: 'static',
});
