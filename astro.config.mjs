import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://unleashingflow.com',
  integrations: [
    sitemap({
      // Unlinked pages stay out of the sitemap. /flow is an evaluation build
      // and is not linked from the site yet — drop this exclusion once it has
      // a home in the navigation.
      filter: (page) => !page.includes('/flyer') && !page.includes('/flow'),
    }),
  ],
  output: 'static',
});
