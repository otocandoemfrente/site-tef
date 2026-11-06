export type Locale = 'pt' | 'en';
const BASE = import.meta.env.BASE_URL;

function withBase(path: string): string {
  return `${BASE}${path.replace(/^\/+/, '')}`;
}

export interface NavItem {
  key: string;
  labelPt: string;
  labelEn: string;
  hrefPt: string;
  /** null = ainda não existe versão em inglês desta página (hoje todas têm). */
  hrefEn: string | null;
}

// Mapa do site — prompt-claude-code-site-tef.md, seção "Mapa do site e elementos fixos".
// Rótulos PT curtos (Jornada / Contato) conforme o protótipo aprovado v2 — a página
// em si continua sendo "Jornada Pedagógica" / "Faça Parte", só o rótulo do menu mudou.
export const navItems: NavItem[] = [
  { key: 'home', labelPt: 'Home', labelEn: 'Home', hrefPt: withBase('/'), hrefEn: withBase('/en/') },
  { key: 'atuacao', labelPt: 'Atuação', labelEn: 'Our Work', hrefPt: withBase('/atuacao/'), hrefEn: withBase('/en/atuacao/') },
  { key: 'jornada', labelPt: 'Jornada', labelEn: 'Learning Journey', hrefPt: withBase('/jornada/'), hrefEn: withBase('/en/jornada/') },
  { key: 'reconhecimentos', labelPt: 'Reconhecimentos', labelEn: 'Recognition', hrefPt: withBase('/reconhecimentos/'), hrefEn: withBase('/en/reconhecimentos/') },
  { key: 'faca-parte', labelPt: 'Contato', labelEn: 'Get Involved', hrefPt: withBase('/faca-parte/'), hrefEn: withBase('/en/faca-parte/') },
];

export const uiStrings = {
  pt: {
    skipToContent: 'Pular para o conteúdo',
    donate: 'Doar',
    donateHref: '/faca-parte#doacao',
    languageLabel: 'Idioma',
    // Mostrado no seletor PT|EN quando a página atual não tem versão em inglês.
    localeSwitchFallbackTitle: 'Esta página ainda não tem versão em inglês — o seletor leva para a Home em inglês.',
    // Mostrado num item do menu quando ele não tem tradução no idioma atual.
    navItemFallbackTitle: 'Esta página ainda não tem versão em inglês.',
  },
  en: {
    skipToContent: 'Skip to content',
    donate: 'Donate',
    donateHref: '/en/faca-parte#doacao',
    languageLabel: 'Language',
    localeSwitchFallbackTitle: 'This page has no English version — the switcher goes to the English Home.',
    navItemFallbackTitle: "This page hasn't been translated yet — the link goes to the Portuguese version.",
  },
} as const;

function normalize(path: string): string {
  // Ignora a âncora (#contato) — dois hrefPt podem apontar pra rotas diferentes só por causa
  // dela, mas para fins de comparação de rota é a mesma página.
  const withoutHash = path.split('#')[0];
  if (withoutHash === '/') return withoutHash;
  return withoutHash.replace(/\/$/, '');
}

/** Calcula o link do seletor PT|EN para o idioma oposto ao informado, ciente da página atual. */
export function getLocaleSwitchHref(locale: Locale, currentPath: string): string {
  const current = normalize(currentPath);
  if (locale === 'pt') {
    const item = navItems.find((i) => normalize(i.hrefPt) === current);
    return item?.hrefEn ?? '/en/';
  }
  const item = navItems.find((i) => i.hrefEn && normalize(i.hrefEn) === current);
  return item?.hrefPt ?? '/';
}
