// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
