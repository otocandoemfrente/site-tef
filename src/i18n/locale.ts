import type { Locale } from './nav';

/**
 * Idioma pela URL: tudo sob /en/ é inglês. Os componentes (mapas, cartões, player de vídeo…) usam isto
 * em vez de receber `locale` por prop — assim a mesma marcação serve às duas versões do site.
 */
export function localeFromUrl(url: URL): Locale {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'pt';
}

/** Escolhe o texto do idioma: L(locale, 'texto em português', 'English text'). */
export function L<T>(locale: Locale, pt: T, en: T): T {
  return locale === 'en' ? en : pt;
}

/** Prefixo de rota do idioma ('' para pt, '/en' para en) — pra links internos entre páginas. */
export function prefix(locale: Locale): string {
  return locale === 'en' ? '/en' : '';
}
