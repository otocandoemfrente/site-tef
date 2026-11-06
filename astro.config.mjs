// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/site-tef',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
