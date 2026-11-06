# Site Tocando Em Frente

Site institucional da Tocando Em Frente (TEF), construído em [Astro](https://astro.build).
Briefing completo em [prompt-claude-code-site-tef.md](./prompt-claude-code-site-tef.md).

## Rodando localmente

```sh
npm install
npm run dev
```

Servidor em `http://localhost:4321`.

## Estrutura

```text
/src
  /components   → Header, Footer e outros blocos de UI compartilhados
  /i18n         → rótulos de menu e strings de interface (PT/EN)
  /layouts      → Layout.astro (head, header, footer, meta tags)
  /pages        → uma rota por página (e /en/ para as páginas com versão em inglês)
  /styles       → global.css — tokens de cor e tipografia da identidade visual
/public         → assets estáticos (favicon; imagens reais entram depois)
```

O conteúdo editável (textos, números, listas de escolas etc.) ainda vai morar em `/conteudo`,
fora do código, conforme a "Estrutura de conteúdo" do briefing — essa pasta é criada junto
com cada página, na próxima etapa.

## Idiomas

PT é o idioma padrão (rotas sem prefixo). EN vive em `/en/*` e, por enquanto, só existe para
Home e Reconhecimentos — o seletor "PT | EN" no menu cai de volta para a versão em português
(ou para a Home em inglês) quando a página atual não tem tradução ainda.

## Status

Só a base do projeto está pronta: tipografia (DM Sans, com Poppins reservada ao wordmark do
logo), variáveis de cor da identidade visual, e o layout compartilhado (menu fixo, botão de
doação, seletor de idioma, rodapé). As 5 páginas do site ainda não têm conteúdo — cada uma tem
apenas uma página-esqueleto para a navegação funcionar.

## Pendências fora do escopo desta primeira versão

Sinalizadas no briefing, não bloqueiam a v1:

- Mapeamento de URLs do site atual e redirecionamentos 301
- Domínio `.com` duplicado — decidir qual é oficial
- Analytics e definição de métrica de sucesso por objetivo
- Política de privacidade / LGPD completa
- Salvar o conteúdo do site atual antes de tirá-lo do ar
