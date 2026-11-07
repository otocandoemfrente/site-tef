## Direção visual

Referências de acabamento e cuidado editorial para consultar ao construir qualquer página —
nunca copiar cor, tipografia ou o sistema de identidade da TEF, que já está fechado em
[src/styles/global.css](src/styles/global.css). O que essas referências emprestam é
composição, hierarquia e nível de polimento, não a paleta nem a estética experimental.

- **[obamaoralhistory.columbia.edu](https://obamaoralhistory.columbia.edu/)** — credibilidade
  e narrativa institucional. Fundo off-white, título editorial de peso serifado, cards de
  pessoas sempre com retrato + nome + papel/cargo como legenda, grade de "temas" e "histórias"
  curada com legenda curta e um link secundário do tipo "ver todas". Navegação alternativa por
  linha do tempo/mapa. Seção de imprensa/notícias separada e discreta.
- **[eldersproject.incite.columbia.edu](https://eldersproject.incite.columbia.edu/)** —
  storytelling e protagonismo de quem é retratado. Hero com frase de abertura grande e direta,
  estatística de impacto escrita como frase corrida com números embutidos (não só cartões de
  KPI soltos), "coleções" que agrupam histórias por tema, retrato sempre com nome + papel logo
  abaixo, bastante respiro entre blocos.
- **[huncwot.com](https://huncwot.com/)** — acabamento, direção de arte e animação (é a agência
  que construiu os dois sites acima). Usar como referência de *qualidade de execução*: microinterações
  discretas (hover com leve escala/opacidade, transições suaves ao rolar a página), não de
  estrutura visual — a estética experimental/agência do Huncwot **não deve** ser reproduzida.
  Qualquer animação precisa ser sutil, rápida, e nunca a única forma de transmitir informação
  (ver `prefers-reduced-motion` em `global.css`), e não pode depender de bibliotecas pesadas —
  o site é estático em Astro, com o mínimo de JS possível. **Refinada pela seção abaixo** — a
  ideia de acabamento/polimento continua valendo, mas o vocabulário visual concreto (cantos,
  grade, alinhamento) agora é o descrito em "Refinamento: reto, elegante, institucional".

### Refinamento: reto, elegante, institucional

Camada de acabamento sobre tudo o que já existia — não muda paleta, tipografia base (DM Sans)
nem a estrutura de seções já definida, só o vocabulário visual. Vale para a Home e para toda
página nova.

- **Sem arredondamento, em lugar nenhum.** `--radius-sm` e `--radius-md` (`global.css`) são
  `0`. Isso já cobre botões, cards, tags e molduras de imagem automaticamente, porque tudo
  referencia essas variáveis — nunca usar um valor de `border-radius` fixo num componente novo.
- **A grade é um elemento gráfico, não um espaço invisível.** Linhas finas de 1px
  `var(--color-border)` marcam divisórias estruturais: entre seções, e dentro de grids (colunas
  do "Quem somos", os três números de impacto, colunas do rodapé). A referência mental é planta
  arquitetônica, não whitespace solto.
- **Alinhamento a uma grade fixa de 12 colunas**, não centralização solta. Título, números,
  rótulos e imagens de seções diferentes devem alinhar verticalmente entre si (mesma borda
  esquerda) — nada "flutuando" no meio do espaço em branco.
- **Toda imagem (hero, placeholder, retrato) leva moldura reta**: borda de 1px
  `var(--color-border)`, cantos vivos. Reforça peça institucional, não post de rede social.
- **Kickers numerados são "legendas técnicas"**, tratadas como sistema: mesmo peso, tamanho e
  letter-spacing (bem aberto, ~0.12em) em toda seção numerada — não um detalhe decorativo
  variável por seção. Classe `.kicker` em `global.css` (não mais duplicada por página).
- **Botões**: cantos retos, sem sombra, hover com leve `scale()` + mudança de cor (já no `.btn`
  base de `global.css` — não redefinir hover por variante).
- **Motion**: mesma curva de easing e duração já definidas em todo o site, mas a *trajetória*
  do movimento é sempre reta (translateY ou translateX em eixo único) — nunca bounce, elástico
  ou curva. Dinamismo vem do ritmo/timing, não do caminho percorrido.

**Como aplicar isso na TEF, concretamente:**

- Toda pessoa nomeada (Kauan, Diretores Regionais, liderança) aparece com retrato (ou
  placeholder) + nome + papel como legenda direta abaixo da imagem — nunca só texto corrido.
- Números de impacto (14.272 estudantes, 34 escolas, 26 estados) ganham destaque tipográfico
  como no Elders Project — numeral grande, frase de contexto ao lado — em vez de cartões de KPI
  genéricos isolados.
- Listas de conteúdo (histórias, prêmios, mídia, áreas da Jornada) seguem o padrão editorial:
  card com imagem, título curto, 1 linha de legenda, e um link "ver todas/os" quando a lista for
  longa — igual ao padrão de "Explore all stories/topics" do Obama Oral History.
- Motion é reforço, não decoração: fade/slide sutil ao entrar na viewport, hover com feedback
  discreto. Nunca sacrificar legibilidade, contraste ou a percepção de seriedade institucional
  por causa de efeito visual — o visitante principal é imprensa.

### Padrões definidos na Home (v2, protótipo aprovado em `/referencia/`)

A Home foi reconstruída a partir de fotos de um protótipo aprovado. Os padrões abaixo já são
o "sistema" e devem se repetir nas próximas páginas, não são exclusivos da Home:

- **Cabeçalho**: fundo `--color-bg` (off-white), como era antes — uma v6 testou fundo azul
  cheio pra combinar com o hero, mas foi revertida (decisão v7: cabeçalho sempre claro,
  independente da cor do hero). Wordmark de novo bicolor ("Tocando" `--color-text` / "Em Frente"
  `--color-primary`), link da página atual em `--color-primary`. O que ficou da v6: rótulos do
  menu **centralizados** de verdade — `.primary-nav-group` vira `display: contents` no desktop,
  então nav e ações são colunas irmãs de um grid de 3 (`auto 1fr auto`), não duas colunas dentro
  de uma única (que só "sobra espaço", não centraliza de fato). Ver [Header.astro](src/components/Header.astro).
- **Hero da Home**: véu sobre a foto é `--color-primary-dark` (o azul mais escuro, mesmo tom do
  bloco da Jornada Pedagógica), não `--color-primary` — trocado a pedido depois de testar as
  duas opções. Ver `.hero__veil` em [index.astro](src/pages/index.astro).
- **Botões sólidos de CTA (Doar, Doar agora)** usam `.btn-dark` (fundo `--color-text`, que já é
  escuro o bastante para ler como "preto" sem inventar um hex novo), não `.btn-primary` (azul).
  Secundário/contorno é `.btn-outline-dark`. Todo `.btn` é uppercase com letter-spacing — ver
  `global.css`.
- **Exceção documentada à regra "acento nunca como texto"**: `.accent-text-on-dark` permite
  `--color-accent` como cor de letra, mas *só* em título grande sobre fundo
  `--color-primary-dark` (contraste ~8:1). Sobre `--color-bg` ou qualquer fundo claro continua
  proibido — ali o marca-texto (`.accent-mark`) é a única forma permitida (o cabeçalho já testou
  e reverteu um fundo azul cheio com link ativo em amarelo — ver nota do Cabeçalho acima). Ver
  comentário em `global.css` junto de `.accent-text-on-dark`. Exceção à parte, também usado como numeral
  decorativo "fantasma" no fundo claro (`.movement__number` em `index.astro`) — ali é proposital
  ter contraste baixo (~1,3:1, o mesmo nível que o cinza que ele substituiu), não é texto de
  leitura, então a regra de contraste AA não se aplica.
- **Menu**: rótulos curtos — "Jornada" (não "Jornada Pedagógica") e "Contato" (não "Faça
  Parte") — só o rótulo do menu mudou, a página em si continua sendo Jornada Pedagógica /
  Faça Parte. Ver [src/i18n/nav.ts](src/i18n/nav.ts).
- **Fotos reais** (quando já existirem, substituindo `MediaPlaceholder`): salvar em
  `src/assets/images/` (nunca em `/public/`) e importar com `import img from '../assets/images/arquivo.jpg'`,
  renderizando com `<Image src={img} ... />` de `astro:assets` — o Astro redimensiona, converte
  pra WebP e gera `srcset` automaticamente no build, sem precisar otimizar a imagem manualmente
  antes. Primeiro uso: foto real da Home (`hero-estudantes-oficina.jpg`), que resolveu o
  `[PENDENTE: imagem ou vídeo?]` do briefing — 1MB de origem virou 33–108KB em WebP. Segunda
  foto real: hero da Atuação (`atuacao-hero-grupo.jpg`). Tentativa inicial usou a mesma altura do
  hero da Home (`min(82vh, 44rem)`), mas na prática não cobria a tela — o hero da Home tem um
  título de 3 linhas que empurra a seção além desse piso, o da Atuação é mais compacto e parava
  exatamente nele, sobrando tela sem foto. Corrigido para `min-height: 100dvh` (com fallback
  `100vh`) — um hero novo que precise garantir tela cheia independente do conteúdo deve usar
  `100dvh`/`100vh`, não necessariamente copiar o valor do hero da Home.
- **Logo real** (`src/assets/images/logo-tocando-azul.png`, `logo-tocando-branco.png`,
  `logo-aviao-branco.png`): resolve o `[PENDENTE: arquivo SVG do logo]` do briefing — o wordmark
  de texto "Tocando Em Frente" (que usava a fonte Poppins) foi substituído pela logo de verdade
  em [Header.astro](src/components/Header.astro) e [Footer.astro](src/components/Footer.astro),
  ambos com fundo claro, então sempre a versão **azul**. A fonte Poppins e `--font-logo` foram
  removidas do projeto inteiro (`@fontsource/poppins` desinstalado) — não sobrou nenhum texto
  estilizado como logo pra precisar dela. As versões **branca** (logo completa e o avião
  reduzido, ambas PNG com fundo transparente) ainda não têm uso no site — ficam disponíveis pra
  quando um contexto de fundo escuro precisar de uma marca (o cabeçalho é sempre claro, então não
  é candidato). Favicon/ícone mobile dedicado (`public/favicon.svg`) ainda é o padrão genérico do
  Astro — não foi trocado, seria um bom próximo passo com a logo real em mãos.
- **Mapa do Brasil** ([BrazilMap.astro](src/components/BrazilMap.astro), usado na seção de
  Números da Home): imagem real do Brasil (`public/imagens/mapa-brasil.svg`, enviada por
  Isabella via MapChart — o arquivo é tecnicamente um SVG, mas por dentro é um PNG raster
  embrulhado com máscara/filtro, **sem** os estados como caminhos vetoriais separados, então não
  dá pra colorir cada estado individualmente por CSS). Os 26 estados com Diretor Regional já vêm
  azul-claro na própria imagem (Roraima, sem DR, vem num tom mais claro) — o componente só
  sobrepõe as **siglas** e os **pins amarelos** (17 estados com escola parceira) por cima, cada
  um posicionado por `left/top` em porcentagem. As posições foram estimadas a partir da
  localização geográfica aproximada de cada estado (não é medição pixel a pixel) e verificadas
  programaticamente — desenhei a imagem num `<canvas>` e conferi que as 27 posições caem em
  cima do território (não do fundo branco); vale checar visualmente e ajustar `x`/`y` se algum
  rótulo parecer deslocado. Lê `/conteudo/escolas.json` para saber quais 17 estados ganham pin —
  mesma fonte de dados que a página de Atuação vai usar para o mapa completo por cidade (com
  hover/legenda, descrito no briefing). `/conteudo/estados-dr.json` não é mais usado por este
  componente (a cor já vem pronta na imagem), mas continua sendo a lista de referência dos 26
  estados — não duplicar em outro lugar.
  **Recalibração de siglas e pins do BrazilMap**, a pedido explícito depois que várias siglas e
  pins amarelos apareceram fora do território correto do estado (a estimativa geográfica
  genérica da primeira versão, embora verificada por amostragem de pixel contra o fundo branco,
  não garantia estar dentro do estado CERTO, só dentro de Brasil). Processo pedido e seguido à
  risca: analisar a imagem real → identificar as fronteiras visíveis → ajustar coordenada →
  verificar visualmente → corrigir de novo se necessário — nunca recalcular geografia de memória.
  - **Método**: a imagem embutida no SVG (`public/imagens/mapa-brasil.svg`) foi extraída como
    PNG bruto (`node` + regex no `xlink:href` base64) só para confirmar a resolução nativa
    (5096×4807) — mas a análise visual de verdade foi feita renderizando o próprio
    `.brazil-map__frame` (a mesma marcação/CSS do componente real) numa página de depuração
    temporária (`public/mapa-debug.html`, removida ao final) com uma grade percentual sobreposta
    (linhas a cada 1%, rótulos "x,y" a cada 5%) e navegando por ela com `window.scrollTo` +
    screenshots em sequência (o pane de teste não suporta recorte de zoom de verdade — a ação
    `zoom` com `region` sempre devolve a screenshot inteira, então "zoom" aqui significou reduzir
    a largura da viewport pedida por tela e aumentar a largura do próprio frame via um parâmetro
    `w` na URL, até 20000px pros estados minúsculos do Nordeste). Cada fronteira estadual
    visível (linhas finas claras entre estados do mesmo tom de azul) foi lida diretamente da
    imagem, não calculada — só preenchendo os poucos trechos onde a linha realmente não aparece
    (ver Sergipe, abaixo) com geografia real conhecida.
  - **Segunda ferramenta de depuração, para validar o resultado**: uma página Astro temporária
    (`src/pages/mapa-verify.astro`, removida ao final) renderizava o `<BrazilMap />` de verdade
    (não uma recriação) com um parâmetro `?scale=N` (`transform: scale()` na página inteira, só
    para depuração — nunca no componente de produção) para ampliar sigla+pin+fronteira ao mesmo
    tempo e conferir cada um contra o território real, sigla por sigla, nas mesmas coordenadas já
    usadas na etapa de calibração.
  - **Quatro correções reais, achadas só na validação visual (não na primeira leitura da
    imagem)**: (1) **AC** — a sigla "Acre" estava acima da fronteira com o Amazonas, dentro do
    território errado; corrigida descendo pra dentro da faixa estreita entre essa fronteira e a
    borda com o Peru. (2) **DF** — o pequeno quadrado do Distrito Federal é bem menor que o
    "espaço aparente" ao seu redor dentro de Goiás; a posição original caía visivelmente ao
    NORTE do quadrado real, dentro de Goiás. (3) **ES** — a sigla caía do lado ERRADO (oeste) da
    fronteira com Minas Gerais, em vez do lado leste (litorâneo) que é o Espírito Santo de
    verdade. (4) **RS** — a posição original caía inteiramente FORA do território (na área
    branca à esquerda do Rio Grande do Sul, fora do Brasil) — o estado é mais estreito e mais a
    leste do que a estimativa geográfica original presumia.
  - **Sergipe — limitação real da imagem-fonte, não do processo**: mesmo em zoom extremo
    (frame de 20000px de largura, cada 1% de x/y subdividido em quartos), nenhuma linha de
    fronteira visível separa Sergipe da Bahia nesta imagem específica — ao contrário de todas as
    outras 26 fronteiras, que aparecem nitidamente. A sigla foi posicionada o mais perto possível
    da única fronteira confirmada (Sergipe/Alagoas, bem nítida) e da faixa litorânea real de
    Sergipe, é o melhor esforço possível dado que a arte-fonte não desenha essa linha em
    específico — não uma aproximação genérica como antes, mas também não 100% confirmável do
    jeito que as outras 26 foram.
  - **Nada na estrutura/CSS mudou** — mesmo `left/top` em porcentagem relativa ao
    `.brazil-map__frame`, mesmo tamanho de fonte, cor, pin amarelo, legenda; só os 27 pares
    `x`/`y` no array `POSITIONS` foram recalculados. Confirmado que a responsividade "sigla
    acompanha o estado em qualquer tamanho" já era garantida pela arquitetura existente (`%`
    sempre relativo ao frame, `aspect-ratio` idêntico ao viewBox da imagem) — testado medindo
    `getBoundingClientRect()` do frame em 1280px e 400px (mobile): proporção idêntica
    (0.800 nos dois), sem overflow horizontal em nenhuma largura.
  - Verificado visualmente, sigla por sigla e pin por pin, com atenção extra aos estados pequenos
    pedidos explicitamente (DF, AL, SE, PB, RN, ES, RJ) — todos dentro do território certo depois
    das correções, exceto a limitação documentada de Sergipe. Conferido também que nenhuma outra
    seção da Home foi tocada e que o mapa em si (a imagem/arte) permanece exatamente o mesmo
    arquivo, sem nenhuma edição.
  **Segunda rodada — a recalibração inteira acima foi abandonada e substituída por mapas prontos**,
  a pedido explícito ("desiste disso, já fiz o mapa por fora"): a Isabella mesma desenhou os
  mapas no MapChart (com as siglas e os pins amarelos já posicionados corretamente por ela) e
  mandou os arquivos prontos, então todo o mecanismo de overlay (siglas/pins posicionados por `%`
  a partir de `POSITIONS`) deixou de fazer sentido — a informação já está na própria imagem.
  - **Dois arquivos, um por mapa** (nomeados pela própria Isabella como onde cada um seria usado):
    `HOME.svg` (mapa "Números de impacto" da Home, com Roraima em tom mais claro sem DR + pins
    amarelos nos 17 estados com escola parceira) e `CONTATO.svg` (mapa da seção Contato de Faça
    Parte, todo no mesmo azul, sem pins — usado só como base pro hover por macrorregião). Ambos
    movidos pra `public/imagens/` com nome kebab-case (`mapa-home.svg`, `mapa-contato.svg`),
    mesmo padrão do `mapa-brasil.svg` original que substituem.
  - **Confusão real no meio do caminho — três idas e vindas até achar o arquivo certo**: (1) a
    primeira entrega tinha os nomes certos (`HOME.svg`/`CONTATO.svg`) mas, ao extrair a imagem
    embutida pra conferir visualmente, ela não mostrava nenhuma sigla nem pin — só o mapa colorido
    liso. (2) A pedido ("procura dnv, coloquei eles em png"), apareceram `HOME.png`/`CONTATO.png`
    com tudo certo (siglas + pins visíveis) — mas com fundo BRANCO opaco em vez de transparente
    (visível como uma caixa branca contra o off-white da página). (3) A correção final voltou a
    ser SVG (`HOME.svg`/`CONTATO.svg` de novo, sobrescrevendo os mesmos nomes) — só que essa
    versão tem uma estrutura mais parecida com o `mapa-brasil.svg` original: **duas imagens
    embutidas** (uma máscara em preto/branco + a camada de cor), combinadas via `<mask>` do
    próprio SVG pra dar transparência de verdade, **mais as siglas como `<path>` vetoriais** (150
    `<path>`, contorno de cada letra — não `<text>` — mais 19 `<rect>` pros pins), não como parte
    de nenhuma das duas imagens raster. **Isso muda a forma de usar o arquivo**: só funciona
    corretamente renderizando o `.svg` INTEIRO num `<img>` — extrair "a imagem de dentro" (o que
    eu tentei nas duas primeiras rodadas de investigação) sempre vai perder a máscara de
    transparência e as siglas, que só existem como elementos SVG próprios, não dentro do raster.
  - **`BrazilMap.astro` reescrito do zero, bem mais simples**: sem `POSITIONS`, sem
    `escolas.json`, sem `<div class="brazil-map__overlay">` — só `<img src="/imagens/mapa-home.svg">`
    (plain `<img>`, não `astro:assets`: SVG não passa pelo pipeline de otimização de raster do
    Astro mesmo, e extrair/reprocessar esse SVG específico quebraria a máscara/siglas como acima)
    mais a legenda de sempre (mantida, porque a imagem ainda mostra as duas informações que ela
    descreve: azul-claro vs. Roraima, e os pins amarelos).
  - **`VoluntariosMap.astro` só trocou a fonte da imagem** (`/imagens/mapa-brasil.svg` →
    `/imagens/mapa-contato.svg`), mantendo 100% da lógica de hover por macrorregião
    (`clip-path: polygon()`, painel de info, tudo). Conferido que valia a pena manter: a nova
    imagem tem uma margem de território ligeiramente diferente da antiga (esquerda 1.94% vs.
    2.78%, direita 95.37% vs. 97.41%, topo 13.41% vs. 12.15%, base 88.89% vs. 89.63% — medido
    varrendo os pixels não-brancos/não-transparentes de cada arquivo) — a diferença é pequena o
    bastante (≤2,5 pontos percentuais) que os polígonos de macrorregião, já documentados como
    "aproximação de leitura" e não um traçado exato, continuam funcionando sem precisar
    recalcular; confirmado testando o hover de uma região (`nordeste`) programaticamente e
    conferindo que o painel de informação abre com o conteúdo certo.
  - **Bug de cache do dev server, achado no meio da troca**: depois de reescrever
    `BrazilMap.astro`, a imagem renderizava ocupando a tela inteira (largura ~100vw, altura
    ~100vh) em vez do tamanho da própria coluna — `getComputedStyle` confirmou `position:
    absolute` no `<img>`, um resíduo da regra CSS de uma versão anterior do componente (que usava
    `astro:assets` com posicionamento absoluto), mesmo com o arquivo já salvo em disco sem
    nenhuma menção a `position: absolute`. Mesmo bug de HMR/cache do Vite já documentado antes
    neste projeto (ver nota da Frente 02) — resolvido reiniciando o servidor dev
    (`preview_stop`/`preview_start`), não editando código nenhum.
  - **Screenshot do pane de teste ficou em branco a sessão inteira nesta rodada** — só descoberto
    o motivo ao final: `tabs_context` revelou `"O painel do navegador está oculto no momento"` —
    nada a ver com o código, o pane simplesmente não estava visível pro usuário, então o
    navegador não estava compondo/pintando frames pra capturar. Verificação final feita por
    `getBoundingClientRect()`/`naturalWidth` (proporção 0.800 batendo com o `viewBox` nas duas
    páginas, sem overflow horizontal) e `read_network_requests` (200 OK nos dois `.svg`) em vez
    de inspeção visual — vale lembrar dessa mensagem específica da próxima vez que screenshots
    voltarem em branco de forma persistente, mesmo trocando de aba.
- **Mapa completo da Atuação** ([AtuacaoMap.astro](src/components/AtuacaoMap.astro)): evolução do
  BrazilMap da Home — mesma imagem-base, mas com um pin por cidade (29 cidades, agrupando escolas
  da mesma cidade num só pino) em vez de rótulo por estado. Cada pin é um `<button>` com área de
  toque 44×44px (o ponto visível é bem menor, a "almofada" invisível que preenche 44px), balão
  de tooltip que abre no hover (desktop) e no clique/toque (mobile, fecha ao clicar fora ou Esc —
  só um aberto por vez, `z-index` sobe só em quem está aberto, senão o pin seguinte na lista
  cobria o balão anterior — bug real já corrigido uma vez). `/conteudo/escolas.json` guarda
  `lat`/`lng` reais por escola (fornecidos por Isabella — a pendência de coordenadas foi
  resolvida, não é mais estimativa); o componente projeta lat/lng em x/y direto no frontmatter
  (`project()`, mesma técnica do BrazilMap: extremos do Brasil reescalados pro retângulo real do
  território medido num `<canvas>`) — não existe mais uma tabela `CITY_POS` hardcoded, a posição
  vem só da coordenada. Verificado por amostragem de pixel (as 29 caem em cima do território).
  Perto da borda do mapa (litoral do Nordeste, várias cidades entre 80–94% da largura) um balão
  centralizado no pin vazava da tela no mobile — cada pin tem uma variante de alinhamento
  (`edgeAlign()`: `left`/`center`/`right`, via custom property `--tooltip-x`) que abre o balão
  pra dentro do mapa nesses casos, em vez de sempre centralizado. **Não existe mais lista "Escolas
  por estado" abaixo do mapa** — removida a pedido explícito ("deixar apenas o mapa"), o que
  reduz a alternativa acessível ao mapa a só o `aria-label`/texto oculto de cada pin (tabulável
  um a um), sem uma versão em lista fácil de escanear; ciente da tensão com o briefing original,
  que pedia manter as duas juntas.
- **Bloco de citação** ([QuoteBlock.astro](src/components/QuoteBlock.astro) +
  [QuoteIcon.astro](src/components/QuoteIcon.astro)): ícone de aspas em SVG (cor
  `--color-accent`) + citação + retrato opcional (`withPortrait={false}` para uma frase de
  destaque solta, sem atribuição pessoal — ex.: "Todo DR é um voluntário..." na Atuação) +
  atribuição opcional. Usado no depoimento da Home e nas duas histórias da Atuação — qualquer
  citação nova no site deveria reaproveitar este componente, não recriar blockquote na mão.
- **Revelação de título palavra por palavra** (script em [Layout.astro](src/layouts/Layout.astro),
  CSS em `global.css`): qualquer título com o atributo `data-reveal-words` tem o texto quebrado
  em palavras que entram em sequência (opacidade + leve deslocamento) quando o título cruza a
  viewport — puro progressive enhancement, sem JS ou com `prefers-reduced-motion` o texto nunca
  é tocado, fica estático desde o primeiro render. Usado nos títulos da Atuação. Evitar aplicar
  em títulos que já têm `<span>` de destaque embutido (ex.: o "Quem somos" da Home, com
  `.accent-mark` no meio do texto, e o "Seis áreas" da Jornada, com `.accent-text-on-dark`) — o
  script reescreve `textContent`, o que apagaria esse destaque; nem a Home nem a Jornada aplicam
  `data-reveal-words` nesses dois títulos por causa disso (erro real cometido e corrigido ao
  construir a Jornada, repetindo a mesma pendência já anotada na Home).
- **Módulo de frente** ([FrenteModule.astro](src/components/FrenteModule.astro)): usado pelas
  duas frentes de atuação (Escolas Públicas / Diretores Regionais) — título, tagline, contexto,
  uma `<dl>` de campos (Onde/Desde/Quem participa/Parceiros + métricas específicas, cada campo
  aceitando um valor real ou um `pending` que vira `PendingNote`) e uma grade de fotos-placeholder
  em quantidade variável (`fotos={N}`). Reaproveitar para qualquer "módulo" parecido no futuro em
  vez de duplicar a marcação.
- **Abas da Jornada** ([JornadaTabs.astro](src/components/JornadaTabs.astro)): componente único
  compartilhado pela prévia condensada da Home (`jornada-preview`, só título + "o que leva") e
  pela versão completa da página [Jornada Pedagógica](src/pages/jornada.astro) (mesmas abas, mas
  cada painel também leva a grade de fotos-placeholder da área — `fotos`/`fotosPendente`, vindos
  direto de `/conteudo/jornada/areas/*.md` — ou, só no caso do OVO, um placeholder de vídeo em vez
  da grade, via `videoPendente`). Os dois usos passam pelas mesmas props `AreaItem`; `fotos` e
  `videoPendente` são opcionais para não afetar a prévia da Home. Bug real encontrado ao adicionar
  a grade de fotos: `.jornada-tabs__panel` usava `grid-template-columns: 1fr` (e o painel de 12
  colunas do desktop, `repeat(12, 1fr)`) sem `minmax(0, 1fr)` — uma trilha `1fr` sozinha herda
  `min-width: auto`, então quando um filho (a grade de fotos) não conseguia encolher o bastante, a
  trilha "estourava" ~37px além do container em vez de deixar o conteúdo quebrar linha, causando
  scroll horizontal no mobile. Qualquer grid novo no site que use `repeat(N, 1fr)` (ou `1fr`
  sozinho) com filhos de largura variável deveria usar `minmax(0, 1fr)` por padrão, não só `1fr`.
  - **Vídeo real do OVO** — o teaser deixou de ser um `<MediaPlaceholder kind="Vídeo">` +
    `PendingNote` e virou o vídeo de verdade, embutido via
    [YoutubeEmbed.astro](src/components/YoutubeEmbed.astro) (componente novo, genérico —
    recebe só `videoId` + `title`, reaproveitável por qualquer área que ganhe vídeo no futuro).
    `AreaItem` ganhou um campo `videoId?: string`; quando presente, `JornadaTabs.astro` renderiza
    o embed real e IGNORA `videoPendente` — o placeholder só volta a aparecer se um dia existir
    uma área com vídeo pendente e sem `videoId` ainda. `conteudo/jornada/areas/ovo.md` trocou
    `teaserPendente` por `videoId: '6GKlvNh0sHU'` (o ID extraído de
    `https://youtu.be/6GKlvNh0sHU`). O embed usa o domínio `youtube-nocookie.com` (não
    `youtube.com`) — mesmo vídeo, só não carrega cookie de rastreamento até o visitante
    interagir com o player, um padrão de privacidade por default, não um pedido explícito.
  - **A pendência de "o que a sigla/nome 'OVO' significa" saiu junto** (`pendenteNome` removido
    de `ovo.md`, a pedido explícito) — não foi substituída por uma explicação inventada (contra
    a regra de nunca supor dado real); o campo simplesmente deixou de existir pra essa área.
    `pending`/`PendingNote` continuam existindo normalmente no componente pra qualquer outra área
    que precise no futuro — só o valor específico do OVO foi removido do conteúdo.
- **Seções numeradas** ("01 · Quem somos", "03 · Os três movimentos", "04 · Jornada Pedagógica",
  "06 · Reconhecimentos") usam a classe `.kicker`, agora em `global.css` (uppercase, cor
  primária por padrão; variantes `.kicker--muted` cinza e `.kicker--dark` sobre fundo escuro —
  sempre como seletor encadeado `.kicker.kicker--x`, nunca a modificadora sozinha, porque
  especificidade igual + ordem no arquivo já causou bug uma vez).
- **Destaque "marca-texto"**: um único componente visual para isso — `.accent-mark` (bloco
  reto de `--color-accent` com texto escuro por cima, `box-decoration-break: clone` para
  acompanhar quebra de linha). Não existe mais uma variante "irregular" (`.marker-highlight`) —
  foi testada e descartada a favor do bloco reto, que é a linha do refinamento institucional.
- **PendingNote tem variante `dark`** (`<PendingNote variant="dark" />`) para uso sobre
  `--color-primary-dark` — a variante padrão (bordas/texto claros) fica ilegível em fundo
  escuro. Também tem `compact` (sem moldura/preenchimento, só o chip + detalhe — para célula de
  tabela ou lista densa, usado nas duas tabelas de Reconhecimentos) e trata `"[PENDENTE]"` bare
  (sem `:` nem detalhe, como vários itens de `midia.json`) sem deixar um colchete sobrando — bug
  real: a regex de limpeza só removia o prefixo quando havia `:`, então um `"[PENDENTE]"` sozinho
  virava `"[PENDENTE"` no chip.
- **Palavra sozinha maior que a tela em `--text-hero`** (bug real, achado no h1 "Reconhecimentos e
  Transparência" no mobile — a palavra "Reconhecimentos" sozinha passava da largura da viewport):
  `overflow-wrap: break-word` no `h1` (`global.css`) não bastava, porque cada palavra revelada por
  `data-reveal-words` é um `<span class="reveal-word">` com `display: inline-block` — um
  inline-block sem `max-width` calcula a largura pelo conteúdo (shrink-to-fit) e ignora o
  `overflow-wrap` do pai. Precisou de `max-width: 100%` direto na regra `.reveal-word` (também em
  `global.css`) para a palavra realmente quebrar dentro de si mesma. Vale para qualquer título
  novo com `data-reveal-words` em `--text-hero` — títulos mais curtos (Home, Atuação, Jornada)
  nunca bateram nesse limite, mas o fix é geral, não por página.
- **Regra de conteúdo do briefing vs. protótipo**: o protótipo é referência de *layout e
  comportamento*; números, datas e fatos sempre vêm do briefing/`/conteudo/`, nunca da foto do
  protótipo (o protótipo tinha números provisórios errados — 18 estados, 36 escolas — que não
  foram usados).
- Todo conteúdo reutilizável (frentes de Atuação, áreas da Jornada, prêmios/mídia de
  Reconhecimentos) já vive em `/conteudo/atuacao/`, `/conteudo/jornada/areas/` e
  `/conteudo/reconhecimentos/` mesmo antes de essas páginas existirem — a Home só importa os
  campos que precisa. Ao construir essas páginas, reaproveitar os mesmos arquivos em vez de
  duplicar conteúdo. A página [Jornada Pedagógica](src/pages/jornada.astro) segue essa regra: usa
  os mesmos `/conteudo/jornada/areas/*.md` da prévia da Home (agora também lendo `fotos` e
  `fotosPendente`, que já existiam nesses arquivos mas a prévia não usava) e reaproveita o array
  `movements` de `/conteudo/home.md` para "Os três movimentos" em vez de duplicar os três textos —
  só o conteúdo de página específico da Jornada (fundamentos, duração, avaliação) tem um arquivo
  novo, `/conteudo/jornada/jornada.md`.
- **Reconhecimentos e Transparência** ([reconhecimentos.astro](src/pages/reconhecimentos.astro)):
  novo arquivo `/conteudo/reconhecimentos/equipe.json` (não existia — criado seguindo o mesmo
  padrão dos outros `/conteudo/`) com a lista de pessoas (fundadora + liderança atual) e as duas
  pendências (bio por pessoa, conselho consultivo). `midia.json` ganhou um campo `lideranca: true`
  nos itens Forbes e G1, pra a página mostrar o selo "Sobre nossa liderança" sem precisar de lista
  hardcoded no componente. A linha do Watson Institute na tabela de mídia não duplica dado: vem
  direto do segundo item de `premios.json` (mesmo `titulo`/`pendente` usados no card de prêmio da
  Home), só reposicionada dentro do array de mídia no frontmatter da página. A ONU aparece como
  card de destaque (não na tabela) — filtrada por `veiculo !== 'ONU — Web TV'` antes de montar as
  linhas. Datas em ISO (`"2025-02-02"`) em `midia.json` são convertidas para `DD/MM/AAAA` na
  renderização (`displayDate()`), não armazenadas dois formatos. **Não linkei a consulta pública
  de CNPJ da Receita Federal** — o texto pede o link, mas a URL exata não é algo que deveria vir
  de memória/adivinhação; fica como `PendingNote` (`consultaLinkPendente`) até alguém confirmar o
  link oficial.
- **Faça Parte** ([faca-parte.astro](src/pages/faca-parte.astro), conteúdo em
  `/conteudo/faca-parte.md` — não existia, criado agora): o item "Contato" do menu não é mais uma
  página própria — `hrefPt` em [nav.ts](src/i18n/nav.ts) aponta para `/faca-parte#contato`, a
  seção final desta página. Isso quebrava a marcação de "página atual" do Header (comparava
  `href === currentPath`, e `currentPath` nunca tem `#`) e o fallback do seletor PT|EN
  (`normalize()` só tirava a barra final, não o `#`) — os dois foram corrigidos para ignorar tudo
  depois do `#` na comparação antes desse link com âncora existir; qualquer outro `hrefPt` com
  âncora no futuro já usa o mesmo tratamento. Botão "Copiar chave Pix" usa
  `navigator.clipboard.writeText()` com fallback de erro visível (texto do botão + região
  `aria-live`) — testado e confirmado que só falha neste ambiente de teste automatizado por o
  documento não estar focado (`NotAllowedError: Document is not focused`), não é bug do código.
  `MediaPlaceholder` ganhou o `kind="QR Code"` (além de Foto/Vídeo/Retrato) pro placeholder do QR
  Pix. A frase solta da Diretoria Regional ("É uma oportunidade de transformar...") reaproveita
  `QuoteBlock` com `withPortrait={false}`, mesmo padrão já usado na Atuação — não recriar
  blockquote na mão. **Padrão para link/CTA sem destino real ainda** (ex.: pré-inscrição do
  formulário, que só existe como placeholder no briefing): nunca um `<a href="#">` ou similar que
  pareça funcional e não faça nada — aqui é um `<span class="btn">` com `aria-disabled="true"`,
  `pointer-events: none` e opacidade reduzida, com o `PendingNote` ao lado explicando o que falta;
  mesmo padrão já usado no link de download do logo em Reconhecimentos.
- **Primeira foto + bio real na grade "Quem somos" (Milanna Rebelatto)**: até aqui as 8 pessoas
  da equipe (`/conteudo/reconhecimentos/equipe.json`, lida por `faca-parte.astro`) usavam só
  `<MediaPlaceholder>` + o `PendingNote` genérico (`bioPendente`) — nenhuma tinha foto ou bio
  própria. A Milanna ganhou as duas, enviada como `Mila.PNG` (renomeada pro padrão kebab-case dos
  outros assets: `mila-retrato.png`) e uma bio de uma frase adicionada direto no JSON
  (`pessoas[].bio`, campo novo e opcional). Como o JSON não pode importar um asset do Astro, a
  foto é resolvida à parte: um dicionário `fotos: Record<string, ImageMetadata>` no frontmatter
  de `faca-parte.astro` mapeia nome da pessoa → imagem importada (só a Milanna está nesse mapa
  hoje). O template escolhe `<Image>` real quando `fotos[p.nome]` existe, senão cai no
  `MediaPlaceholder` de sempre — mesmo padrão condicional já usado em `FrenteModule`,
  `reconhecimentosBands` e nos "três movimentos": as outras 7 pessoas continuam exatamente como
  estavam, só a Milanna mudou. Mesma lição de sempre aplicada de novo:
  `.pessoa-card__foto` precisa de `height: auto` explícito antes do `aspect-ratio`, senão o
  atributo HTML `height` do `<img>` gerado por `astro:assets` vence.
- **Kicker acima do H1, removido das páginas internas**: Atuação, Jornada, Reconhecimentos e Faça
  Parte tinham um rótulo numerado ("02 · Atuação", "04 · Reconhecimentos e Transparência" etc.)
  acima do título do hero — removido a pedido nas quatro. O campo `kicker` continua existindo nos
  respectivos `.md` (não usado em lugar nenhum agora, mas inofensivo manter caso volte).
- **Logo do rodapé esticada** (bug real): `.site-footer__col` é `flex-direction: column`, e o
  `align-items` padrão de um flex container (stretch) força um filho com `width: auto` a ocupar a
  largura inteira da coluna — mesmo com `height: 3rem` fixo, a logo esticava horizontalmente bem
  além da proporção real (2069×783 do PNG original). Corrigido com `align-self: flex-start` na
  própria imagem. A logo do cabeçalho não tinha esse problema por acaso: `.wordmark` é
  `flex-direction: row` (o padrão), então o eixo cross é a altura — e a altura já era fixa por
  CSS, não `auto`. Qualquer imagem nova dentro de um flex container em coluna com só uma dimensão
  fixa deveria levar `align-self` (ou `align-items` no pai) explícito, não confiar em `width/height: auto` sozinho.
- **H1 quebrando mal em título mais longo** (bug real, Reconhecimentos): `max-width: 34rem` no
  `.hero h1` (copiado do padrão da Jornada/Faça Parte, títulos mais curtos) deixava "Reconhecimentos
  e Transparência" quebrar com o "e" sozinho numa linha. Corrigido para `44rem` — cada página com
  hero simples usa o teto que fizer sentido pro comprimento do próprio título, não precisa ser o
  mesmo valor sempre.
- **Esquema visual de 3 etapas da Frente 02** ([FrenteVisualSteps.astro](src/components/FrenteVisualSteps.astro),
  usado só na Atuação): substitui o parágrafo de contexto corrido da Frente 02 (Diretores
  Regionais) — `FrenteModule.astro` ganhou um `<slot name="contexto">` que cai de volta pro
  parágrafo padrão quando nada é passado (Frente 01 continua igual), e `contexto`/`fotos` viraram
  props opcionais. Três colunas (Seleção → Formação → Impacto), cada uma com um indicador de
  progresso abaixo do título — seta "→" nas duas primeiras, ponto preenchido na última ("chegada").
  Ícones outline novos em [Icon.astro](src/components/Icon.astro) (`documento`, `quadro`,
  `conversa`, `lupa`, `escola`, `livro` — um componente só, por `name`, não seis arquivos
  separados como o `QuoteIcon` antigo). Palavras-chave em negrito vêm do próprio conteúdo com uma
  marcação leve `**assim**` (`boldParts()` no frontmatter do componente — não é markdown de
  verdade, só um split por regex, não precisa de parser pra isso). Os números de impacto (34
  escolas, 14.272 estudantes) não estão hardcoded no conteúdo da frente — vêm de
  `/conteudo/numeros.json` (fonte única já estabelecida) via `numeroKey` no frontmatter de
  `atuacao.astro`, pra nunca haver dois valores diferentes no site caso os números mudem.
- **Frente 02, segunda rodada de ajustes**: o `h3` da Frente 02 na página de Atuação usa
  `frente02.pergunta` ("Como chegamos nas escolas?"), um campo novo e separado de `titulo`
  ("Diretores Regionais") — a Home continua usando `titulo` no card compacto de prévia, que não
  deveria virar uma pergunta. `.frente-module__tagline` (compartilhado pelas duas frentes) ficou
  menor (`--text-h3` → `--text-body`, cor secundária) — mudança vale para Frente 01 também, por
  consistência entre as duas (não fazia sentido uma tagline grande do lado de uma pequena). Os
  campos "Onde" / "Quem participa" / "Parceiros" da Frente 02 saíram do `<dl>` — já cobertos pelo
  esquema visual (etapa 1 = quem participa, etapa 3 = os parceiros/escolas); "Onde" continua em
  `frente-02.md` porque a Home usa esse campo em outro lugar (card de prévia), só não é mais
  renderizado aqui.
  **Dois bugs reais de CSS escopado, achados nos ícones da Frente 02:**
  1. As regras de tamanho em `FrenteVisualSteps.astro` não usavam `:global()` e nunca alcançavam
     o `<svg>` — ele vive dentro do componente filho `Icon.astro`, e o atributo de escopo do
     Astro (`data-astro-cid-*`) só é aplicado a elementos que o PRÓPRIO componente renderiza
     diretamente, nunca a elementos de dentro de um filho. Sem o seletor bater, o SVG caía no
     tamanho padrão do navegador (~300px), só espremido pelo espaço disponível no flex — daí os
     ícones "gigantes" (e de tamanhos inconsistentes entre um lugar e outro, porque o espaço
     disponível variava). Mesmo padrão de escape já em uso: `.historia :global(.media-placeholder)`
     na Atuação.
  2. Depois de adicionar `:global()`, um segundo bug: `:global(.frente-step__icon)` sozinho tem
     especificidade (0,1,0), mas o próprio `Icon.astro` também define um tamanho padrão nele
     mesmo (rede de segurança contra ficar gigante se alguém esquecer de estilizar), num seletor
     `svg[data-astro-cid-X]` de especificidade (0,1,1) — maior. Esse padrão interno vencia
     silenciosamente onde o seletor do pai não tinha um ancestral extra (`.frente-step__icon`
     sozinho perdia; `.frente-step__impact .frente-step__icon` ganhava, por acidente, só por já
     ter uma classe a mais). Corrigido garantindo que TODO seletor de tamanho no componente pai
     seja composto (`.frente-step__list :global(.frente-step__icon)`, não `:global(.frente-step__icon)`
     sozinho) — qualquer `<Icon>` usado em outro componente no futuro deve seguir o mesmo cuidado,
     nunca confiar num `:global()` de uma classe só pra vencer o padrão interno do Icon.astro.
  **Bug de ambiente, não de código**: depois de editar `FrenteVisualSteps.astro`, o servidor dev
  continuou servindo a folha de estilo antiga por um tempo (o seletor no navegador ainda mostrava
  o hash de escopo velho) mesmo com o arquivo já salvo corretamente — HMR/cache do Vite ficou
  para trás. Reiniciar o servidor dev resolveu; vale lembrar disso se um ajuste de CSS parecer
  "não aplicado" mesmo depois de conferir o arquivo fonte.
  **Seta única animada por scroll** (substituindo os indicadores fixos por coluna — seta/seta/
  ponto — de antes): `.frente-steps__connector` é uma barra horizontal só visível no desktop
  (as 3 colunas lado a lado), com um preenchimento (`data-connector-fill`) e uma seta
  (`data-connector-arrow`) que se movem de 0% a 100% via `getBoundingClientRect()` + listener de
  `scroll` — mesma técnica das gavetas dos "três movimentos" da Home, sem `IntersectionObserver`
  (não dá granularidade contínua). Com `prefers-reduced-motion`, pula direto pra 100% (parada,
  sem depender de scroll pra "chegar"). No mobile o conector nem renderiza — a ordem de leitura
  empilhada já basta.
  **Fórmula do progresso, ajustada numa segunda rodada** — bug real: a primeira versão tinha uma
  folga extra embutida (`progress=1` só quando a base do bloco chegava a ~25% do topo da tela,
  bem depois de o bloco já ter passado), então quem rolava só até o fim visível da Frente 02
  nunca via a seta completar. Trocada por `progress = (vh - rect.top) / (vh + rect.height)`,
  clampado em [0,1] — 0 quando o topo do bloco encosta na base da tela, 1 exatamente quando a
  base do bloco encosta no topo, sem folga. Verificado simulando `getBoundingClientRect()` (o
  scroll real não funciona neste pane de teste, limitação já conhecida): a seta chega em 100%
  no instante exato em que `bottom` cruza 0, nunca antes nem exigindo rolagem extra depois.
  **Terceira rodada — a fórmula "chega no fim quando a base cruza 0" ainda não bastava na
  prática**, a pedido explícito ("a seta não chega até o final ao scrollar"), só descoberto
  rolando a página de verdade (não simulando `getBoundingClientRect()` parado): o conector fica
  no TOPO do bloco, e o bloco inteiro (conector + as 3 colunas de texto, bem mais alto que a
  barra em si) só termina de passar quando a BASE cruza `y=0` — nesse instante o conector, que
  vive no topo, já tinha saído da tela fazia tempo, então a seta nunca chegava a 100% enquanto
  visível (congelava num valor menor e sumia). Trocado por uma fórmula baseada só no TOPO do
  bloco contra a altura da viewport (`progress = (vh - rect.top) / vh`) — mas isso esbarrou num
  segundo problema, o cabeçalho do site é `position: sticky; top: 0` (`.site-header`, ~73px de
  altura) e cobre o topo real da tela: sem descontar essa altura, a seta ainda completava
  exatamente no instante em que o cabeçalho passava a cobrir o conector. Fórmula final:
  `progress = (vh - rect.top) / (vh - headerHeight)`, com `headerHeight` lido do próprio
  `.site-header` (`getBoundingClientRect().height`, não um valor hardcoded) — a seta agora
  completa com o conector ainda inteiramente visível, logo abaixo do cabeçalho, verificado
  rolando a página de verdade (`window.scrollBy`) até o topo do bloco tocar a base do
  cabeçalho e conferindo `fillWidth === '100%'` nesse instante.
  **As duas fotos-placeholder da Frente 02 (etapa 1 "Seletiva de novos Diretores Regionais" e
  etapa 3 "Estudantes impactados pela Jornada") saíram** — a pedido explícito de tirar o espaço
  reservado pra elas. Os campos `fotoLabel` continuam em `frente-02.md` (conteúdo real, só sem
  uso agora), mesmo padrão já usado em outros campos que ficaram "órfãos" depois de mudanças de
  layout (ex.: `frente01.onde`, abaixo).
  **A legenda "Frente 02"/"Complemento" acima do título saiu por completo** — `FrenteModule.astro`
  só renderiza essa linha (`label`/`numero`) quando pelo menos uma das duas props é passada; a
  chamada da Frente 02 em `atuacao.astro` parou de passar `label="Complemento"`, então a seção
  fica só com o `<h3>` "Como chegamos nas escolas?" como identificação, sem rótulo redundante
  acima.
  **Quarta rodada — título maior**: sem a legenda "Complemento" acima (rodada anterior) e ainda
  em `--text-h3` (22–26px, o padrão do elemento), "Como chegamos nas escolas?" lia como um
  subtítulo, não como o título da seção — a pedido explícito, `.frente-module h3` ganhou
  `font-size: var(--text-h2)` (2–2.5rem), o mesmo tamanho de título usado em seções reais do
  resto do site, em vez do tamanho de subtítulo que o elemento tinha por padrão.
- **Campos da Frente (Onde/Quem participa/etc.) centralizados como grupo**: `.frente-module__fields`
  trocou de `grid` com colunas de largura igual por `display:flex; flex-wrap:wrap; justify-content:center`
  — a pedido, depois que a Frente 02 ficou com só 3 campos (Onde/Quem participa/Parceiros saíram)
  e sobrava uma "coluna vazia" na grade de 4 usada antes. Como grupo centralizado funciona pra
  Frente 01 (4 campos) e Frente 02 (3) sem precisar de uma variante por frente — quando o texto
  de uma pendência é longo (ex.: "DRs formados"/"DRs ativos"), o grupo quebra em mais de uma
  linha, mas cada linha continua centralizada dentro do container.
  **Atualização seguinte: a lista inteira saiu da Frente 01** (Onde/Quem participa/Parceiros/
  Números) — `fields` virou prop opcional em `FrenteModule.astro` (o `<dl>` só renderiza se
  `fields` existir e tiver itens), então a Frente 01 ficou só com título + tagline + parágrafo de
  contexto + fotos. A Frente 02 continua com seus 3 campos centralizados, sem mudança.
  `frente01.onde` continua em `frente-01.md` mesmo sem uso na Atuação — a Home ainda lê esse
  campo pro card de prévia (`index.astro`), então não pode sumir do conteúdo, só não é mais
  renderizado aqui.
  **Terceira rodada — faixa de destaque nos três campos da Frente 02** (DRs formados/DRs
  ativos/Estados cobertos), a pedido explícito. Nova prop `fieldsHighlight` (booleana, só usada
  por essa chamada) troca a linha divisória de 1px por um retângulo de fundo sólido
  `--color-primary-dark` e recolore os valores (`<dd>`) em `--color-accent`, negrito, num
  tamanho de numeral (não mais texto de corpo) — reaproveitando a mesma exceção já documentada
  em `global.css` ("`--color-accent` como texto só é permitido sobre `--color-primary-dark`"),
  não uma regra nova. Como dois dos três valores ainda são `[PENDENTE]`, o `<PendingNote>`
  dentro da faixa precisou trocar pra `variant="dark"` (a variante padrão, com texto/borda
  claros, fica ilegível sobre fundo escuro — já documentado) e `compact` (o chip amarelo já se
  vira sozinho contra qualquer fundo, não precisa da moldura tracejada extra dentro de uma faixa
  que já é, em si, um destaque).
- **Pendências da ONU e do Watson Institute resolvidas** (`premios.json`, `midia.json`,
  `reconhecimentos.md`): as duas fontes de dados ganharam a informação real (instituição, texto
  completo, link, data) e perderam o campo `pendente`. Como as duas alimentam tanto a prévia
  "06 · Reconhecimentos" da Home (`index.astro`) quanto a página
  [Reconhecimentos](src/pages/reconhecimentos.astro), a atualização se propagou nos dois
  lugares a partir da mesma fonte, sem duplicar texto. Na Home, os dois itens perderam o chip
  "Pendente" no lugar do ano e ganharam o rótulo "Assistir →" com link real (Watson não aponta
  mais para `/reconhecimentos`, agora tem vídeo próprio). **Decisão/interpretação**: como o
  Watson Institute passou a ter descrição completa no mesmo formato do Prêmio LED (instituição +
  texto + link "Assistir →"), ele foi promovido de linha da tabela "Mídia e aparições" para um
  terceiro card em `.destaques__grid` na página de Reconhecimentos — reaproveitando a mesma
  estrutura de card já usada pelo Prêmio LED e pela ONU (não foi inventado layout novo, só um
  terceiro card que quebra pra uma nova linha na mesma grade de 2 colunas). Consequência: Watson
  não aparece mais na tabela de mídia (mesmo padrão do Prêmio LED, que também nunca apareceu lá).
  Se essa não for a leitura certa, é fácil reverter — os dados de `premios.json` continuam
  intactos, só a decisão de "onde mostrar" mudou.
- **The Wall também virou destaque** (a pedido explícito de "também estar em destaque na Home"):
  mesmo tratamento do Watson — saiu da tabela de mídia, entrou em `premios.json` (terceiro item)
  com `instituicao`/`texto`/`link`, virou o 4º card em `.destaques__grid` (fecha limpo em 2×2,
  sem card órfão) e o 4º item na prévia "06 · Reconhecimentos" da Home. Rótulo do card: "TV ·
  2024" (categoria curta, mesmo padrão de "Prêmio ·", "Discurso ·", "Summit ·").
- **Ciclo de Atuação** ([CicloAtuacao.astro](src/components/CicloAtuacao.astro), conteúdo em
  `/conteudo/atuacao/ciclo.json`): componente único com `variant="mini"` (Home, substituindo o
  antigo grid de 2 cards "Escolas Públicas"/"Diretores Regionais" em `.atuacao-preview`) e
  `variant="expandida"` (Atuação, substituindo a Frente 01 por inteiro — a Frente 02 continua
  logo abaixo, com `label="Complemento"` no lugar de "Frente 02" já que não há mais uma "Frente
  01" pra contrastar). Nasceu de uma proposta visual/técnica trabalhada primeiro como protótipo
  num Artifact antes de virar componente real — ver histórico da conversa.
  - Mini: círculo com 6 etapas (Recrutamento → Formação → Escolas → Aplicação → Avaliação →
    Aprendizado — "Time Pedagógico e de Pesquisa" fica implícito dentro de Avaliação nessa
    versão condensada), bolinha girando sozinha (`requestAnimationFrame`, ~26s/volta, só roda com
    `prefers-reduced-motion: no-preference`), hover/foco/toque num rótulo mostra um tooltip.
  - Expandida: círculo com as 7 etapas, `position: sticky` + `getBoundingClientRect()` — mesma
    técnica (não `IntersectionObserver`) já usada no conector da Frente 02 e nas gavetas dos
    "três movimentos" da Home — controla o progresso pelo **scroll real da página**, não uma
    caixa de rolagem interna (diferente do protótipo no Artifact, que usava uma caixa de scroll
    contida só porque estava embutido numa página de proposta). Clique numa etapa chama
    `setActive()` **na hora**, sem esperar o evento de scroll (`window.scrollTo` só acompanha
    visualmente) — mais robusto a qualquer atraso do navegador em disparar o evento depois de um
    scroll suave.
  - Multiplicação: botão solta uma bolinha extra que viaja de "Aplicação" até "Recrutamento" via
    `Element.animate()` (Web Animations API) — não o combo antigo
    reset+reflow-forçado+`requestAnimationFrame` do protótipo, que se mostrou frágil.
  - Ícones novos em `Icon.astro` nessa época: `recrutamento`, `grupo`, `grafico`, `retorno` (os
    demais reaproveitavam `quadro`/`escola`/`lupa`, já existentes) — **removidos na quarta
    rodada** (ver abaixo) por ficarem sem nenhum uso depois que o painel de conteúdo da expandida
    (que os usava) deixou de existir; `IconName` hoje só tem os 6 nomes que `FrenteVisualSteps`
    ainda usa. `Icon.astro` **não repassa** props extras tipo `hidden`/`data-*` pro `<svg>` — quem
    precisar alternar visibilidade de um `<Icon>` por CSS/JS deve envolvê-lo num `<span>` que
    carrega esses atributos, não passar a prop direto no componente (bug real, encontrado
    originalmente ao tentar alternar visibilidade dos ícones do painel expandido por etapa).
  - Um filho de fragmento em ternário do Astro/JSX precisa de um único elemento — a versão
    expandida tem dois blocos irmãos (`.ciclo-expandida__wrap` e o bloco de multiplicação), então
    o branch `: (...)` do ternário de variante precisou de `<>...</>` ao redor dos dois (erro de
    build real, "Expected `,` or `)` but found `{`", até adicionar o fragment).
  **Segunda rodada — reformulação de composição visual completa**, a pedido explícito depois que
  a primeira versão pareceu "wireframe técnico": as etapas eram botões HTML visíveis abaixo do
  círculo, o centro era um símbolo inventado + texto, e não havia microinteração nenhuma na
  chegada de cada etapa. Reescrito do zero:
  - **Etapas fazem parte da circunferência**: cada uma agora é um ponto pequeno desenhado em SVG
    (`.ciclo-mark`) sobre a própria trilha, com o rótulo (`.ciclo-label`) sendo só tipografia —
    `background:none; border:none`, sem nenhuma aparência de botão — posicionado por HTML/CSS em
    cima do SVG (mesmo padrão de overlay do `AtuacaoMap.astro`: imagem/SVG de fundo + `<button>`
    invisível por cima só pra manter o hit-target acessível). O card com borda que existia pro
    conteúdo da etapa ativa (`.ciclo-panel`) foi removido — o conteúdo agora é tipografia solta
    (numeral "fantasma" + ícone + título + texto), sem moldura, integrado ao mesmo respiro da
    página.
  - **Avião de papel oficial no centro**: `src/assets/images/logo-aviao-branco.png` (o mesmo
    asset já catalogado no CLAUDE.md, nunca usado até agora) via `astro:assets`, com
    `loading="eager"` — sem isso ficava lazy e não carregava a tempo por ser um elemento sempre
    acima da dobra. Como é a versão *branca* do avião (pensada pra fundo escuro) e o ciclo fica
    sobre `--color-bg` claro nas duas páginas, ele senta num disco `--color-primary-dark` sólido
    (`.ciclo__badge::before`) — não é uma logo nova nem redesenhada, só um fundo de contraste
    pro mesmo arquivo oficial, tratado como selo/hub de onde a trilha "parte".
  - **Burst nas etapas**: cada marca tem seu próprio grupo `<g data-burst>` de 6 traços radiais,
    dormente (`opacity:0`) até a etapa virar ativa — `replay()` remove e re-adiciona a classe
    `.is-bursting` com um `getBoundingClientRect()` no meio pra forçar reflow e garantir que a
    `@keyframes` sempre reinicie do zero, mesmo se a mesma etapa for ativada duas vezes seguidas
    (bug clássico de CSS: só remover+adicionar a classe no mesmo tick pode não retriggar a
    animação sem esse reflow forçado no meio).
  - **Bolinha com desaceleração**: `targetT` (o alvo — vem do scroll ou de um clique) e `displayT`
    (o que é desenhado) são dois valores separados; um laço de `requestAnimationFrame` aproxima
    `displayT` de `targetT` a cada frame (`displayT += (targetT - displayT) * 0.12`), dando a
    sensação de "chegar e desacelerar" em vez de saltar junto com o scroll 1:1.
  - **Bug real de arquitetura, achado e corrigido nessa segunda rodada**: a etapa "ativa"
    (nome/texto/numeral/burst) não pode vir do `displayT` suavizado — como esse valor "atrasa" de
    propósito atrás do alvo, um clique que chama `setActive()` na hora era revertido no frame
    seguinte pelo próprio laço de easing (que ainda calculava a etapa a partir do `displayT`
    antigo). Corrigido separando de vez: `activeIndexFor(targetT)` decide qual etapa está acesa
    (chamado direto no clique e no scroll, nunca dentro do laço de desenho),
    `updateDotPosition(displayT)` só desenha — os dois nunca mais competem pelo mesmo estado.
  - **Fluxo de dado/aprendizado, agora como arco de verdade**: dois `<path>` concêntricos por
    dentro do anel principal, com `pathLength="1"` (normaliza `stroke-dasharray`/`stroke-dashoffset`
    pra sempre 0–1 independente do comprimento real do arco) — o arco "avaliação → pesquisa"
    (cor de acento) e o arco "aprendizado → formação" (cor primária, o caminho mais longo de
    volta) desenham a si mesmos (`stroke-dashoffset` 1→0) só quando a etapa correspondente está
    ativa.
  - **Multiplicação integrada ao círculo, não mais uma seção separada**: nessa rodada, o gatilho
    era um link de texto dentro do conteúdo da etapa "Aplicação"; a terceira rodada (logo abaixo)
    substituiu esse clique por um mecanismo 100% controlado por scroll — ver essa seção para o
    comportamento atual.
  - **`window.scrollTo()` é instável neste ambiente de teste automatizado** — funciona na maior
    parte das vezes, mas falhou silenciosamente (scroll não se move, sem erro) em pelo menos duas
    ocasiões distintas nesta sessão e na seguinte, sem relação com nenhum código deste componente
    (reproduzido numa página em branco). Rolagem real (roda do mouse via
    `computer{action:"scroll"}`) sempre funcionou de forma confiável — é o método usado pra
    verificar o comportamento de scroll-progress ponta a ponta neste projeto, não
    `window.scrollTo()` a partir de um script de teste.
  **Terceira rodada — layout de duas colunas e multiplicação controlada por scroll**, a pedido
  explícito só para a versão expandida (Atuação); a mini da Home não muda:
  - **Duas colunas no desktop**: `.ciclo__layout` (novo wrapper em volta de `.ciclo__frame` e
    `.ciclo__content`/legenda) vira `display: grid` com duas colunas iguais só em
    `.ciclo--expandida` a partir de 720px (mesmo breakpoint já usado em `.sustentacao__layout` e
    `.historia` nesta página) — círculo fixo à esquerda, explicação da etapa à direita, os dois
    dentro do mesmo `.ciclo__sticky`. Sem CSS extra no mobile: os dois filhos são blocos normais,
    então já empilham (círculo em cima, texto embaixo) só pela ordem do markup.
  - **Três estados por etapa, não só ativo/inativo**: `is-past` (já percorrida — ponto sólido em
    `--color-text-secondary`, rótulo com mais peso) além do `is-active` (ponto cheio na cor
    primária + halo) que já existia; etapas futuras continuam com o tratamento "quieto" de
    sempre, e na expandida ganham `opacity: 0.55` a mais pra ficarem visivelmente mais discretas
    que as já percorridas — pedido explícito ("etapas futuras... mais discretas", "etapas
    anteriores... marcadas de maneira sutil").
  - **Rótulos deixaram de ser `<button>` na expandida** — viraram `<span>` sem `cursor: pointer`
    nem listener de clique. O círculo não é mais navegável por clique nessa versão (só a mini da
    Home manteve o clique, que já existia e continua fazendo sentido lá pro tooltip). Motivo:
    pedido explícito "o círculo não é um carrossel" — sem setas, sem botões, sem controles
    artificiais; o scroll é o único controle.
  - **Transição editorial do texto**: `.ciclo__content-body` ganhou uma classe `is-swapping`
    (opacity 0 + `translateY(6px)`) alternada pelo script — ao trocar de etapa, o texto atual
    desaparece por ~180ms antes do novo texto ser escrito por baixo, depois reaparece. Um timer
    é sempre cancelado antes de agendar o próximo (`clearTimeout`), porque um scroll rápido que
    passa por várias etapas em sequência poderia deixar um texto antigo "vencer" um mais novo se
    os dois `setTimeout` não fossem serializados.
  - **Multiplicação: de clique para automática, amarrada ao fim do scroll** — o pedido explícito
    foi "quando o ciclo chega novamente ao Recrutamento" gerar a ramificação, não um botão. O
    wrapper de scroll ganhou uma "batida" extra além das 7 etapas (`--seg` no CSS, calculado como
    `n + 1` etapas × 60vh cada) só quando existe `multiplicacao`: durante essa última fração do
    scroll, a bolinha permanece parada em Recrutamento (não haveria um 8º ponto na trilha pra ela
    ocupar) enquanto três pequenas trajetórias (`<g data-branch>`, cada uma com uma linha
    `pathLength="1"` + um ponto) nascem do ponto de Recrutamento em ângulos e alcances diferentes,
    reveladas em proporção direta a quanto falta rolar (`multProgress`, 0–1, com o mesmo lerp de
    suavização já usado na posição da bolinha) — três, não uma, pra não parecer "um satélite
    repetido" e sim múltiplos novos ciclos nascendo. O painel de conteúdo à direita troca pro
    texto de `multiplicacao` (badge como um kicker pequeno acima do título, texto, e uma frase de
    fecho) e o numeral "fantasma" (01, 02...) some nessa batida, já que não é uma etapa numerada
    da trilha. O ponto de Recrutamento ganha uma classe extra `is-multiplying` (cor de acento em
    vez de primária) pra diferenciar esse reencontro do início do ciclo de uma ativação comum.
    Isso substitui de vez o mecanismo de clique + `Element.animate()` + satélite orbitando da
    rodada anterior, que não fazia sentido reversível junto de um scroll que o usuário pode rolar
    pra frente e pra trás livremente — o campo `cta` (texto do antigo botão) saiu de
    `/conteudo/atuacao/ciclo.json` por ficar sem uso.
  **Quarta rodada — hero e ciclo fundidos numa única experiência, componente novo**: a pedido
  explícito de fundir o hero fotográfico da Atuação com o ciclo (menos texto, menos etapas, mais
  movimento/cor), o hero com foto de fundo saiu por completo e virou
  [AtuacaoCicloHero.astro](src/components/AtuacaoCicloHero.astro) — um componente novo, só usado
  na Atuação. `CicloAtuacao.astro` **voltou a ser só a versão mini da Home** (`variant` saiu da
  interface de props — não tem mais um segundo modo pra servir): toda a lógica de scroll/sticky,
  duas colunas, arcos de dado/aprendizado, past/future e multiplicação da expandida foi removida
  do arquivo por ficar sem nenhum uso depois dessa troca (nenhum código morto mantido só porque
  "pode voltar a ser útil"). `multiplicacao` saiu de `/conteudo/atuacao/ciclo.json` pelo mesmo
  motivo. O conteúdo do novo ciclo vive em `/conteudo/atuacao/momentos.json` (4 itens: `id`,
  `nome`, `texto` — bem mais simples que o `ciclo.json` de 7 etapas, que continua intocado e
  alimentando só a Home). `abertura` em `/conteudo/atuacao/atuacao.md` foi drasticamente
  encurtado (de um parágrafo institucional pra uma frase) — a animação agora é a forma principal
  de explicar o modelo, não o texto.
  - **Só quatro momentos, "Diretor Regional" em vez de "Recrutamento"**: Diretor Regional →
    Formação → Aplicação → Avaliação de Impacto → Diretor Regional. A escolha do nome não é
    estética — representa a jornada do próprio Diretor Regional dentro do TeF (entrada E retorno
    do ciclo), não o processo seletivo isolado. Isso só vale pra essa experiência nova; a versão
    mini da Home continua com as 6 etapas de sempre (incluindo "Recrutamento") — o pedido era
    específico da página Atuação, não mudou o vocabulário do site inteiro.
  - **Sem numeral fantasma, sem ícone, sem rótulo na própria trilha**: a pedido explícito (nada
    de "01" grande, nada do ícone de pessoa "+" ao lado do título). Os quatro pontos na
    circunferência são só marcas geométricas quietas (SVG puro) — o nome de cada etapa existe
    *apenas* no painel de texto à direita, não duplicado como rótulo sobre o círculo (diferente
    da rodada anterior). Isso também elimina de vez o problema de rótulo longo estourando no
    mobile que a rodada anterior teve que resolver com `max-width`/wrap — aqui não existe texto
    nenhum sobre o SVG.
  - **O avião de papel desenha o próprio ciclo**: em vez de uma trilha pré-desenhada com uma
    bolinha girando por cima (padrão das três rodadas anteriores), agora a trilha nasce do
    movimento — cada quarto de círculo é um `<path pathLength="1">` independente, dormente
    (`stroke-dashoffset:1`) até o avião atravessá-lo, e as 4 marcas dos momentos também começam
    invisíveis (`opacity:0`), reveladas (`.is-revealed`) só quando o avião realmente chega ali.
    Nenhum círculo completo existe antes do scroll começar — só o avião parado sobre o ponto de
    Diretor Regional.
  - **Avião oficial recolorido só com `brightness(0)`, não um filtro adivinhado**: o asset
    (`logo-aviao-branco.png`) é a versão branca (pensada pra fundo escuro); sobre o `--color-bg`
    claro daqui ele precisa ficar escuro, mas voando livre, sem o disco de contraste sólido do
    selo central das rodadas anteriores. Uma primeira tentativa usou uma cadeia de filtros CSS
    (`sepia`/`saturate`/`brightness` combinados) tentando mirar um hex exato — abandonada por ser
    frágil e impossível de verificar sem inspeção visual pixel a pixel. `brightness(0)` sozinho
    converte os pixels brancos opacos em preto sólido preservando o alfa (a silhueta exata),
    mesmo raciocínio já documentado em `.btn-dark`: "escuro o bastante pra ler como preto sem
    inventar um hex novo" — mas aqui é literalmente preto, não uma tentativa de mirar um hex.
  - **Orientação do avião verificada visualmente antes de calcular a rotação**: como o PNG é
    branco sobre transparente (ilegível sobre fundo branco), a única forma de conferir pra que
    lado o avião "aponta" foi compor a imagem sobre um fundo escuro com `sharp` (biblioteca já
    presente em `node_modules`) e olhar o resultado — o bico aponta pro alto-direita, ~45° a
    partir do topo. **Bug real cometido e corrigido nesta rodada**: a primeira versão do cálculo
    de rotação *somava* esse heading nativo ao ângulo tangente do movimento
    (`angleDeg + 90 + offset`), girando o avião 90° a mais do que devia; o certo é *subtrair*
    (`angleDeg + 90 - offset`), porque a rotação aplicada precisa ser a diferença entre o heading
    desejado e o heading que o asset já tem por padrão. Verificado numericamente depois da
    correção: em `angleDeg=0` (parado sobre Diretor Regional) a rotação calculada bate exatamente
    com os ~45° esperados.
  - **A "cauda" que fecha o ciclo sem parecer que acabou**: o wrapper de scroll tem 4.5 "unidades"
    de altura (`--seg`, mesmo padrão `height: calc(var(--seg) * 60vh)` de rodadas anteriores) —
    4 unidades pros 4 momentos e mais meia unidade de "cauda": o avião passa 45° do ponto de
    Diretor Regional e para por ali, com o ciclo já inteiramente desenhado e a etapa re-ativada.
    Nenhum código especial de "loop"/multiplicação foi adicionado (esse conceito não fazia parte
    do pedido desta vez) — é só a mesma lógica de ativação de etapa (`i % n`) reencontrando o
    índice 0 naturalmente quando o contador de quartos de volta passa de 4.
  - **Estado alvo (instantâneo) vs. estado desenhado (suavizado), mesmo princípio das rodadas
    anteriores**: `targetT` (scroll bruto) decide instantaneamente qual etapa está ativa e troca o
    texto; `displayT` (com lerp de 0.12/frame) só desenha a posição/rotação do avião e o quanto
    de cada arco já apareceu — os dois nunca disputam o mesmo estado, mesma lição já aprendida e
    documentada nas rodadas anteriores deste componente.
  - **Cores das quatro etapas, derivadas só da paleta existente, verificadas por contraste antes
    de fixar**: nunca uma cor nova — as quatro (`--m0`..`--m3` em `AtuacaoCicloHero.astro`) vêm
    de `color-mix()` só entre `--color-primary`, `--color-success` e `--color-accent` (misturado
    com `--color-text` o bastante pra ficar legível). Como a cor da etapa ativa também tinge o
    `<h2>` do nome (não só o SVG), cada uma foi conferida contra AA (4.5:1) com um script Node
    ad-hoc antes de escolher as proporções — `--color-accent` puro (amarelo) tem só 1.27:1 contra
    o fundo, então a etapa "dourada" (Avaliação de Impacto) usa `color-mix(accent 40%, text 60%)`
    (~4.72:1, um dourado-oliva, não o amarelo puro) em vez do acento cru. Ordem escolhida pra
    formar um arco tonal coerente ao redor do círculo (azul → verde-azulado → verde → dourado),
    não uma progressão arco-íris.
  - **Ambiente de teste, achado novo nesta rodada**: transições CSS (`transition: color 0.3s`)
    ficam "congeladas" no valor inicial quando a página não está sendo ativamente composta/pintada
    neste pane de teste (mesma causa-raiz do `requestAnimationFrame` suspenso documentado antes,
    agora confirmado que também trava transições) — até mudar `color` via inline style com
    `transition:none` explícito, `getComputedStyle` insistia em reportar a cor de fallback mesmo
    depois de forçar o valor. Não é bug de CSS nem do componente: forçar uma screenshot (que força
    o pane a compor de verdade) destrava tudo de uma vez. Vale lembrar isso da próxima vez que uma
    cor/transição "não aplicar" neste ambiente parecer um bug real.
  **Quinta rodada — a mini da Home passou a usar a mesma linguagem visual da expandida**: a
  pedido explícito ("usar a mesma circunferência"), `CicloAtuacao.astro` (agora só a versão da
  Home) foi reescrito pra reaproveitar exatamente a técnica de `AtuacaoCicloHero.astro` — arcos
  por quarto de volta que nascem do movimento do avião (não um anel pronto), quatro marcas quietas
  até serem alcançadas, mesmas quatro cores (`--m0`..`--m3`, mesmas fórmulas de `color-mix()`) e o
  mesmo avião oficial recolorido com `brightness(0)`. A trilha colorida se desenha só na
  **primeira volta** e depois fica permanentemente completa (sem isso, o círculo se apagaria e
  desenharia de novo a cada volta, estranho como fundo decorativo contínuo) — isso não mudou nas
  rodadas seguintes.
  - **Painel central/selo removido**: a versão antiga da mini tinha um avião parado num disco
    central — saiu, o avião agora se move de verdade, igual à expandida.
  - **Mini e expandida agora contam a mesma história**: a mini passou a ler
    `/conteudo/atuacao/momentos.json` (as mesmas 4 etapas — Diretor Regional, Formação, Aplicação,
    Avaliação de Impacto) em vez do antigo `/conteudo/atuacao/ciclo.json` (7 etapas, incluindo
    "Recrutamento"). Decisão consciente: como a prévia da Home existe pra resumir a página de
    Atuação, faria pouco sentido ela continuar contando uma versão diferente do ciclo depois que a
    própria Atuação mudou de modelo. `ciclo.json` ficou inteiramente sem uso depois dessa troca e
    foi apagado — os campos `icone`/`texto` por etapa (só usados pelo antigo painel de conteúdo da
    expandida, já removido na rodada anterior) não migraram pro `momentos.json`.
  **Sexta rodada — velocidade e layout, a pedido explícito ("o avião roda muito devagar")**: a
  rotação contínua da quinta rodada (uma volta completa a cada ~76s) virou, numa primeira
  tentativa, uma máquina de estados de "voo + pouso" (parar 5s em cada ponto, depois voar até o
  próximo) — **corrigida logo em seguida, ainda na mesma rodada**, a pedido explícito ("preciso
  que o aviãozinho siga sempre circulando, para não dar a impressão que a tela está travada"): a
  parada total foi removida de novo. O avião voltou a girar em movimento **contínuo e sem
  paradas** (`angleT` avançando sozinho via `requestAnimationFrame`, baseado em tempo decorrido
  real — `dt`, não incremento fixo por frame, robusto a variação de frame rate), só que num ritmo
  bem mais lento que o giro puro (`QUARTER_MS = 5500`, ~22s por volta completa) — rápido o
  bastante pra nunca parecer parado, devagar o bastante pra cada etapa ficar em destaque por
  pelo menos ~5s antes de passar pra próxima. O requisito "pelo menos 5 segundos em cada ponto" do
  pedido anterior acabou sendo satisfeito pelo *ritmo* do giro contínuo, não por uma parada
  literal — os dois pedidos pareciam conflitantes à primeira vista mas não eram.
  - **Ganhou um painel de texto, igual à expandida** — pedido explícito: "quero que o círculo
    fique na esquerda e as explicações na direita". `CicloAtuacao.astro` ganhou um
    `.ciclo__layout` em grid de duas colunas (`minmax(0,1fr) minmax(0,1fr)`, empilha no mobile
    abaixo de 720px, mesmo breakpoint do resto do site) — círculo à esquerda, nome (`<h3>`, não
    `<h2>`: a seção da Home já tem seu próprio `<h2>Atuação</h2>` acima, então o nome de cada
    etapa é subordinado a ele) + texto curto à direita, na mesma ordem de sempre (Diretor
    Regional, Formação, Aplicação, Avaliação de Impacto — a ordem já era essa em
    `momentos.json`, não precisou mudar). Mesmo mecanismo de crossfade (`is-swapping` + 180ms)
    e mesma cor tingindo o `<h3>` (`--active-color`) já usados na expandida.
  - **`miniCaption` saiu** — a legenda estática de uma linha que existia abaixo do círculo desde
    a primeira versão da mini ficou redundante depois que o painel de texto por etapa passou a
    fazer esse papel (e melhor, porque muda por etapa). Removida de `CicloAtuacao.astro`, do
    `<CicloAtuacao>` em `index.astro`, e do `momentos.json` (campo raiz que não tinha mais
    nenhum leitor).
  **Sétima rodada — textos reais das quatro etapas + animação de fechamento do ciclo**, a pedido
  explícito. `momentos.json` ganhou o texto definitivo de cada etapa (Diretor Regional, Formação,
  Aplicação, Avaliação de Impacto) no lugar dos textos-placeholder mais curtos de antes — como é
  a mesma fonte de dados lida tanto por `CicloAtuacao.astro` (mini, Home) quanto por
  `AtuacaoCicloHero.astro` (expandida, Atuação), a atualização já se propaga nos dois lugares sem
  duplicar conteúdo. Textos mais longos (2 frases na etapa de Avaliação de Impacto) verificados
  sem overflow nas duas versões, inclusive forçando o texto mais longo via DOM antes de medir.
  - **A animação de fechamento só existe na versão expandida (`AtuacaoCicloHero.astro`), não na
    mini da Home** — decisão deliberada, não custou perguntar: o pedido descreve o gatilho como
    "quando o usuário completar o SCROLL e a roda retornar... pela última vez", uma linguagem que
    só faz sentido pra versão de scroll finito (`SEG_N = 4.5`, uma volta e meia-cauda, sem loop).
    A mini gira sozinha pra sempre (`requestAnimationFrame` contínuo, sem fim natural) — tocar
    esse mesmo efeito a cada ~22s indefinidamente na Home destoaria do pedido de um "momento de
    fechamento emocional", que só faz sentido como evento único.
  - **Gatilho**: o script já rastreava `activeIndex` como o índice BRUTO (`Math.floor(q)`, não
    `% n`) antes de decidir qual dos 4 pontos destacar — quando esse índice bruto chega a `n`
    (4), significa que o avião completou a volta inteira e "Diretor Regional" (índice `4 % 4 =
    0`) acende pela segunda vez, exatamente o instante descrito no pedido. Uma função
    `maybePlayFinale(i)` nova, guardada por um `finalePlayed` booleano, dispara só nesse
    instante e só uma vez — scroll pra cima e pra baixo depois disso não replay a animação
    (é um momento de fechamento, não um efeito de hover repetível).
  - **O que a animação faz**: um brilho (`.ciclo-hero__finale-glow`) nasce sobre o próprio ponto
    de "Diretor Regional" e cresce/esvai (`r` 6px → 34px → 22px, `opacity` 0 → 0.32 → 0.1, curva
    `ease-out`), e um punhado de 6 pequenas marcas (`.ciclo-hero__finale-particle`) "desabrocham"
    ao redor dele com atraso escalonado entre uma e outra (`animation-delay` por partícula via
    custom property `--fp-delay`) — a leitura pretendida (não escrita literalmente em lugar
    nenhum, só visual) é a mensagem do pedido: "uma escola impactada pode dar origem a novos
    Diretores Regionais". Nenhuma das duas classes de elemento desaparece no final — ambas
    terminam num estado quieto porém visível (glow em `opacity:0.1`, partículas em
    `opacity:0.55`), porque a ideia é que o brilho e os "novos pontos" **fiquem**, reforçando que
    algo novo nasceu ali, em vez de um efeito passageiro que não deixa rastro.
  - **Decisão consciente (revertida na rodada seguinte): nenhum ícone literal de "escola" foi
    adicionado nesta rodada**. O pedido descrevia "a escola pode aparecer ou ganhar destaque" com
    a ressalva explícita de que a frase não precisa ser comunicada literalmente se a animação já
    passar a ideia — e esta seção já tinha uma regra própria e recente (quarta rodada,
    `AtuacaoCicloHero.astro`) de não usar nenhum ícone sobre a trilha ("Sem numeral fantasma, sem
    ícone, sem rótulo na própria trilha"). O ponto de "Diretor Regional" (já o "hub" de onde a
    trilha nasce) seguiu como o único proxy visual da escola/comunidade nesta rodada — mas o
    pedido seguinte pediu de volta o ícone e o texto literal (ver oitava rodada, logo abaixo), então
    essa decisão não é mais a versão final do componente.
  - **Posições das partículas — geometria, não CSS transform**: cada uma das 6 partículas tem uma
    posição SVG absoluta (`cx`/`cy`) calculada no frontmatter a partir do próprio ponto de
    "Diretor Regional" (`offsetFrom()`, um helper trigonométrico novo, deliberadamente separado
    do `polar()` já existente — este último sempre mede a partir do CENTRO do círculo, o que daria
    posições erradas para algo que precisa se espalhar a partir de um ponto na BORDA do círculo).
    Ângulos/distâncias escolhidos à mão (não grade nem distribuição regular) sempre apontando pra
    fora do anel (longe do centro), nunca pra dentro — onde ficariam por cima da trilha/avião.
  - **`r` (raio do SVG) em vez de `transform: scale()`, decisão técnica deliberada**: o "brilho"/
    "crescimento" das partículas e do glow usa `@keyframes` variando a propriedade CSS `r`
    (suportada como propriedade animável em navegadores modernos), não `transform: scale()`. Só
    `r` já era o mecanismo usado pelo halo normal de cada marca nesta mesma seção (`.is-active
    .ciclo-hero__mark-halo { r: 17 }`) — reaproveitar a mesma técnica evita qualquer ambiguidade
    de unidade entre um `transform: translate()/scale()` em CSS (que se comporta de forma
    inconsistente dentro do sistema de coordenadas de um SVG escalado por `viewBox`) e o sistema
    de coordenadas nativo do próprio SVG. Cada partícula usa uma custom property `--fp-r` (com
    unidade `px`, calculada a partir do próprio frontmatter) como alvo final da animação — permite
    que as 6 partículas, cada uma com um raio final ligeiramente diferente, compartilhem a mesma
    `@keyframes` genérica.
  - **`prefers-reduced-motion`**: sem animação nenhuma, o glow e as partículas aparecem direto no
    estado final de repouso (mesmos valores de `r`/`opacity` que a animação normal atinge no
    fim) — mesmo padrão já usado em todo o resto do componente (a seta, o avião, o crossfade de
    texto).
  - Verificado via scroll real (`computer{action:"scroll"}`, não `window.scrollTo()` — instável
    neste ambiente, já documentado antes) até o fim da seção: `finalePlayed` dispara no momento
    certo, as 6 partículas assentam em posições/raios distintos ao redor do ponto de origem, e o
    glow se mantém visível de forma sutil mesmo depois que o scroll já avançou para a próxima
    etapa ativa (Aplicação) — confirmando que o efeito persiste como pedido, não é um flash que
    desaparece assim que a próxima etapa acende.
  **Oitava rodada — marco literal "+1 escola impactada" no centro do círculo**, a pedido
  explícito ("quando completar uma volta completa aparecer no meio do círculo +1 escola
  impactada com um ícone de uma escola pequeno"). Reverte a decisão da rodada anterior de manter
  tudo só sugerido — desta vez o pedido é por texto e ícone literais, então os dois entraram:
  - **`<div class="ciclo-hero__milestone" data-milestone>`**, um overlay HTML (não SVG) irmão do
    `.ciclo-hero__plane` dentro do mesmo `.ciclo-hero__frame`, com `<Icon name="escola" />`
    (ícone que já existia em `Icon.astro`, reaproveitado — nenhum SVG novo desenhado) + o texto
    "+1 escola impactada". Centralizado com `top:50%; left:50%; transform:translate(-50%,-50%)`
    — o centro geométrico do círculo está sempre vazio (o avião viaja só pelo raio do anel,
    nunca cruza o centro), então não existe conflito de sobreposição com nada.
  - **Mesmo gatilho e mesma função `maybePlayFinale()` do brilho/partículas** — as duas classes
    (`.ciclo-hero__finale` e `.ciclo-hero__milestone`) recebem `.is-active` juntas, no mesmo
    `if`, então o marco central e o brilho na borda aparecem exatamente no mesmo instante, como
    duas leituras (uma literal, uma visual) do mesmo momento de fechamento.
  - **Animação com o mesmo vocabulário do resto do componente**: `opacity` 0→1 + `transform:
    scale(0.7)→scale(1)`, nunca removido depois (fica visível, mesmo espírito de "o que nasceu
    aqui permanece" já estabelecido pro brilho/partículas). `prefers-reduced-motion` só remove a
    transição, sem esconder o estado final.
  - **`aria-hidden="true"`** — o marco é reforço decorativo de um significado que a seção já
    comunica visualmente (mesmo tratamento do brilho/partículas, que também não têm texto
    alternativo); não é dado real/contável (os números de impacto de verdade — 34 escolas, etc.
    — já existem em `numeros.json` e aparecem de forma acessível em "Impacto nacional", na
    Frente 02). "+1" aqui é sempre literal e fixo, nunca um contador cumulativo, porque o
    `SEG_N=4.5` desta seção só permite esse fechamento acontecer uma vez por carregamento da
    página (diferente da mini da Home, que gira pra sempre — por isso esse marco não foi
    replicado lá, mesma decisão de escopo já tomada pro brilho/partículas na sétima rodada).
  - Verificado medindo `getBoundingClientRect()` do marco contra o frame (`left+width/2` e
    `top+height/2` batendo exatamente com o centro do frame nos dois eixos) e confirmando que
    `.is-active` liga no mesmo scroll exato em que `.ciclo-hero__finale` liga — não em momentos
    diferentes.
  **Nona rodada — a mini da Home ganhou uma variante "sobre foto"**, a pedido explícito de pôr
  uma foto real (`atuacao-preview-turma.jpg`, enviada por Isabella — renomeada do original
  "Atuaçao.jpg" pro padrão kebab-case) atrás da seção "Atuação" da Home, "no estilo da primeira
  foto da home" (o hero, com véu azul translúcido). Duas partes:
  - **A foto + véu vivem em `index.astro`, não em `CicloAtuacao.astro`** — a seção
    `.atuacao-preview` ganhou a mesma estrutura de três camadas do `.hero` (`<Image
    class="...__media">` absoluta preenchendo tudo, `<div class="...__veil">` absoluta por cima
    com `background: color-mix(in srgb, var(--color-primary-dark) 78%, transparent)` — a MESMA
    cor/opacidade do véu do hero, não uma mistura nova —, conteúdo com `position:relative;
    z-index:1` por cima dos dois) e o cabeçalho da seção (`<h2>Atuação</h2>` + link "Ver Atuação
    completa →") virou branco. `border-top` genérico saiu dessa seção (mesmo motivo já registrado
    pra `.sustentacao` na Atuação: a própria mudança de cor já divide as seções, uma borda cinza
    fina ali ficaria estranha) — e o `:hover` do link, que herdaria `--color-primary-dark` do
    estilo global de link (ilegível escuro-sobre-escuro), ganhou um override pra `--color-accent`
    (a mesma exceção accent-sobre-`--color-primary-dark` já documentada em `global.css`).
  - **`CicloAtuacao.astro` ganhou uma prop `dark?: boolean`** (default `false`, então o uso em
    qualquer lugar futuro sem essa prop continua idêntico a antes) — quando `true`: (1) o avião
    de papel para de usar o filtro `brightness(0)` que o escurecia pra ler sobre `--color-bg`
    claro — o PNG original já é branco (pensado pra fundo escuro), então na variante escura ele
    simplesmente voa "no natural", sem precisar inventar um filtro de recoloração; (2) o texto do
    nome da etapa ativa (`h3`, tingido por etapa via `--active-color` = `--m0`..`--m3`
    azul/verde-água/verde/dourado) passa a ser sempre branco — o script (`setActive()`) só troca
    o valor que atribui a essa custom property quando `dark`, então os PONTOS/ARCOS do SVG (que
    usam `--mc`, não `--active-color`) continuam coloridos por etapa normalmente; só a leitura em
    TEXTO muda, porque o azul da etapa "Diretor Regional" (`--m0` = `--color-primary`) some contra
    o véu azul-escuro da foto, mas como elemento gráfico pequeno (ponto/arco) essa perda de
    contraste é aceitável — como bloco de texto inteiro, não seria. Foi preciso também sobrescrever
    o *fallback* do `var(--active-color, ...)` pra `--color-bg` numa regra `.ciclo--dark`
    específica — sem isso, no instante antes do JS rodar (ou com JS desabilitado) o texto cairia
    no fallback antigo (`--color-text`, escuro), ilegível sobre a foto. Parágrafo de descrição e
    contorno dos pontos inativos (`.ciclo__mark-dot`) também ganharam uma cor clara/translúcida
    equivalente (mesmo "branco cru com alpha" já usado em outros textos secundários do projeto).
  - Verificado via `getComputedStyle` nas duas larguras (desktop e mobile): fundo do véu, cor do
    `h2`/link, classe `dark` aplicada, cor do `h3`/`p` do ciclo — todos batendo com os valores
    esperados — e `scrollWidth === clientWidth` nas duas, sem overflow introduzido pela foto.
  **Décima rodada — a primeira versão não agradou** ("odiei"), com três pedidos concretos de
  correção, mais a troca da própria foto:
  - **Foto trocada de novo** (`atuacao-preview-turma.jpg`) — a nova veio como `atuacao.heif`, um
    formato que **nem o `sharp`/`libheif` deste projeto conseguiu abrir**: `sharp(...).metadata()`
    falhou com `"Security limit exceeded: Number of references in iref box (28) exceeds... 16"` —
    um limite de segurança do `libheif` contra arquivos HEIF com estrutura incomum (comum em
    fotos de iPhone com múltiplas imagens auxiliares/preview embutidas), não um arquivo
    corrompido de verdade. Também não abriu via `System.Drawing` do .NET (GDI+ não suporta HEIF)
    nem via `BitmapDecoder` do WPF/WIC (retornou "nenhuma transformação adequada" — o codec HEIF
    da Microsoft Store não está instalado nesta máquina). Resolvido instalando `heic-convert`
    temporariamente (`npm install --no-save`, então não sobra no `package.json`/lockfile — só um
    pacote a mais em `node_modules`, sem rastro no projeto) — essa biblioteca usa `libheif-js`
    (um build WASM do libheif), que decodificou o arquivo sem esbarrar no mesmo limite de
    segurança. Script descartável, mesmo padrão de sempre; o `.heif` original foi removido depois
    de gerado o `.jpg` final, junto com o `.jpg` da rodada anterior (foto substituída de vez, não
    mantida ao lado da nova).
  - **Véu "mais fechado"**: opacidade subiu de 78% (a mesma do hero) pra 90% — a pedido explícito.
    A foto nova também é bem mais clara/iluminada que a anterior (teto branco, muita luz),
    reforçando a necessidade de mais azul sólido por cima pra manter contraste. Mesma cor-base
    (`--color-primary-dark`), só a opacidade mudou — não foi inventado um azul mais escuro à
    parte, porque não existe um token de azul mais escuro que esse no design system.
  - **Círculo e avião brancos, pedido explícito e literal** ("a circunferência e o aviãozinho
    devem ser brancos para contrastar com o fundo") — na rodada anterior só o avião tinha
    deixado de ser escurecido (`filter: opacity(0.92)`, ainda levemente esmaecido), e o traço do
    círculo (`.ciclo__segment`) e os pontos/halos continuavam tingidos por etapa (`--m0..--m3`,
    a mesma progressão azul/verde-água/verde/dourado da versão clara) — bonito sobre
    `--color-bg`, mas de contraste inconsistente contra o véu azul-escuro (o `--m0`, quase a
    mesma família de azul do véu, é o pior caso). Nesta rodada, `.ciclo--dark` força tudo pra
    branco sólido: `.ciclo__segment` (traço), `.ciclo__mark-halo` (brilho) e
    `.ciclo__mark.is-active .ciclo__mark-dot` (ponto ativo) — a variação de cor por etapa
    continua existindo só no NOME da etapa ativa (que já ficava branco desde a rodada anterior,
    sem mudança aqui) e desaparece do desenho do SVG. O avião perdeu o `opacity(0.92)` residual
    (agora `filter: none`, branco puro).
  - **Espaço vazio**: dois ajustes, sem mexer no conteúdo em si. (1) `.atuacao-preview` ganhou um
    `padding-block` próprio, mais enxuto que o `section` genérico da página (o mesmo tipo de
    ajuste já feito antes pra `.sustentacao` na Atuação, por pedido parecido). (2) o círculo
    (`.ciclo__frame`) cresceu de `23rem` pra `30rem` só na variante `--dark` — 23rem deixava uma
    margem sobrando bem visível dentro da coluna do grid, ainda mais numa seção agora do tamanho
    do hero. As duas mudanças são só de estilo (nenhuma coordenada do círculo/trilha mudou) —
    medido antes/depois: a proporção do conteúdo (círculo + texto) em relação à altura da seção
    subiu de ~53% pra ~69%.
  **Décima primeira rodada — três ajustes finos**, ainda a pedido explícito depois de ver o
  resultado da rodada anterior ao vivo:
  - **"Branco" tinha exceções que ainda liam como esmaecidas** — dois resíduos que sobreviveram à
    passada anterior porque vinham de regras genéricas, não específicas da variante escura:
    `.ciclo__segment` tem uma `opacity: 0.85` de base (pensada pro traço colorido por etapa da
    versão clara, que precisa dessa transparência pra não brigar com o texto); em
    `.ciclo--dark`, essa opacidade genérica continuava se aplicando por cima do `stroke: var(--color-bg)`
    já branco, esmaecendo a trilha inteira a 85%. E `.ciclo--dark .ciclo__mark-dot` usava
    `stroke: rgba(250, 248, 244, 0.6)` pros pontos ainda-não-ativos — 60% de opacidade, a
    "leitura suave" de antes, mas contra o pedido literal de branco puro. Os dois foram para
    opacidade/alfa 100% (`opacity: 1` no segmento, `stroke: var(--color-bg)` sólido no ponto) —
    o avião já estava correto desde a rodada anterior (`filter: none`, sem resíduo de opacidade).
  - **Título "Atuação" saltou de `--text-h2` pra `--text-hero`**: a pedido explícito ("Atuação
    deve ser maior como um título"). Como a seção já tem o mesmo tratamento fotográfico de tela
    cheia do hero da própria Home, fazia sentido o título usar a MESMA escala tipográfica do
    hero (a mesma usada nos H1 das páginas internas), não o `--text-h2` genérico herdado de
    `.section-heading h2` — pensado originalmente pra um kicker de seção comum, pequeno demais
    aqui.
  - **Véu: mistura mais escura, opacidade mais baixa** — pedido explícito de "azul mais escuro,
    vibrante" mas "tentar deixar a imagem" (a rodada anterior, a 90% de opacidade, quase apagava
    a foto por trás). Em vez de continuar subindo a opacidade (que só cobre mais a foto, nunca
    deixa o azul em si mais rico), a MISTURA de cor ficou mais escura —
    `color-mix(in srgb, var(--color-primary-dark) 75%, var(--color-text) 25%)`, o azul-marinho
    mais escuro do site somado ao azul institucional, nenhuma cor nova — e a opacidade da camada
    desceu de 90% pra 84%, deixando a foto reaparecer por baixo. Resultado: um azul mais escuro e
    com mais contraste contra os elementos brancos por cima (círculo, avião, título) do que a
    rodada anterior, mas sem depender de encobrir a foto quase por inteiro pra alcançar isso —
    verificado visualmente rolando a seção de verdade: a cena de sala de aula continua
    claramente reconhecível através do véu.
  **Décima segunda rodada — a foto ganhou um leve desfoque**, a pedido explícito ("o texto ainda
    fica meio perdido na foto"): mesmo com o véu mais escuro da rodada anterior, a foto de turma
    tem bastante detalhe de alto contraste (quadros na parede, objetos coloridos, roupas)
    competindo visualmente com o texto/círculo brancos por cima. `filter: blur(4px)` em
    `.atuacao-preview__media` resolve isso na raiz — não é mais escuro nem mais opaco, é a
    própria imagem que perde nitidez o bastante pra parar de brigar com a tipografia, enquanto
    ainda se reconhece como foto de sala de aula. `transform: scale(1.04)` acompanha o blur — sem
    isso, a borda do elemento (que preenche a seção via `inset:0`) puxaria pixels de fora de si
    mesma ao desfocar, criando uma franja mais clara/transparente nas bordas; o leve zoom garante
    que a área desfocada nas bordas ainda venha de dentro da própria foto. Verificado que não
    introduziu overflow horizontal (`scrollWidth === clientWidth`).
  **Décima terceira rodada — a foto deixou de ser tela cheia e virou uma caixa com cantos
  arredondados**, a pedido explícito ("a foto ocupando a tela inteira é demais... deixar como se
  fosse um box com cantos arredondados... ajuda a dar a impressão de estar mais cheio").
  - **Exceção única e deliberada à regra "sem arredondamento em lugar nenhum"** (Direção visual →
    "Refinamento: reto, elegante, institucional") — antes de implementar, perguntei ao usuário
    como preferia resolver o conflito (caixa com moldura reta, no espírito do resto do site, vs.
    abrir uma exceção pontual) e a resposta foi explícita por abrir a exceção mesmo ciente do
    conflito. `.atuacao-preview__box` usa `border-radius: 1.75rem` como valor **literal**, não
    `--radius-sm`/`--radius-md` (ambos travados em `0` de propósito, compartilhados por todo
    botão/card/moldura do resto do site) — mudar qualquer um dos dois tokens arredondaria a
    página inteira; isso aqui é uma única exceção pontual, não uma mudança de sistema.
  - **Estrutura**: a seção (`<section class="atuacao-preview">`) voltou a ser uma seção comum —
    perdeu o `overflow:hidden`/`position:relative`/padding customizado que a faziam ocupar a
    seção inteira como o hero. Photo+véu+conteúdo (heading + `<CicloAtuacao dark>`) migraram pra
    dentro de um novo `.atuacao-preview__box` (`position:relative; overflow:hidden;
    border-radius`) aninhado dentro do `.container` normal da seção — o efeito de "mais cheio,
    menos vazio" pedido vem de conter a composição numa caixa do tamanho do próprio conteúdo
    (com respiro de página off-white visível ao redor, em vez de a foto preencher uma faixa do
    tamanho do hero com sobra de espaço vazio acima/abaixo do círculo).
  - `.atuacao-preview__content` ganhou padding próprio (não herda mais o padding-block da seção,
    que agora vale só pro espaço ACIMA/ABAIXO da caixa, não para o respiro do conteúdo por cima
    da foto) — mesmas medidas de fonte/cor/blur/véu das rodadas anteriores, só reposicionadas
    para dentro do escopo de `.atuacao-preview__box` em vez de `.atuacao-preview`.
  - Verificado nas três larguras de sempre (1280px, 640px, mobile 375px): `border-radius`
    aplicado e com `overflow:hidden` recortando a foto/véu nos quatro cantos, layout de duas
    colunas do `CicloAtuacao` intacto no desktop, empilhado no mobile, margem off-white visível
    ao redor da caixa nos dois casos, e `scrollWidth === clientWidth` (sem overflow horizontal)
    em todas as três larguras.
  saiu de Reconhecimentos e passou a viver dentro da seção Contato de
  [Faça Parte](src/pages/faca-parte.astro) — a pedido. Mesma fonte de dados
  (`/conteudo/reconhecimentos/equipe.json`), sem duplicar conteúdo; só o import e o markup
  mudaram de arquivo. Reconhecimentos não tem mais seção "Quem somos".
- **Mapa de voluntários por região** ([VoluntariosMap.astro](src/components/VoluntariosMap.astro),
  novo, usado só em Faça Parte/Contato, ao lado da liderança): mapa do Brasil com 5 zonas de
  hover (macrorregiões — Norte/Nordeste/Centro-Oeste/Sudeste/Sul), cada uma um `<button>`
  recortado com `clip-path: polygon()` reto (sem curva, mesma linha do refinamento
  institucional) por cima da mesma imagem-base do BrazilMap/AtuacaoMap. **Os polígonos são uma
  aproximação de leitura, não um traçado cartográfico oficial** — a imagem não tem as regiões
  como caminhos vetoriais separados (mesma limitação já documentada pro BrazilMap: é um PNG
  raster embrulhado em SVG), e não havia tempo/dado pra desenhar fronteiras reais; os 5
  centroides foram verificados por amostragem de pixel (caem todos em cima do território) e por
  ordem relativa (Norte mais ao norte que Sul, Nordeste mais a leste que Norte etc.), mas as
  bordas entre regiões são estimadas. Em vez de um tooltip flutuante por cima do polígono
  (difícil de posicionar direito num formato irregular), hover/foco/toque atualiza um painel de
  informação ao lado do mapa — funciona igual pra mouse, teclado e toque, sem duplicar lógica.
  **Nomes dos voluntários por região são `[PENDENTE]`** — não existe uma lista real ainda;
  `/conteudo/faca-parte/voluntarios-por-regiao.json` já guarda a nota "atualizada a cada 6
  meses" pedida, pronta pra receber os nomes reais quando existirem.
- **Tabela de mídia virou ticker horizontal** (Reconhecimentos, seção "Mídia e aparições"): a
  pedido, trocada de `<table>` por boxes passando na horizontal — mesma técnica do ticker de
  áreas da Jornada na Home (`@keyframes` + duas cópias da lista lado a lado, `translateX` até
  -50%, loop sem salto visível). Pausa no hover (`animation-play-state: paused`) pra dar tempo de
  ler/clicar. Diferença importante do ticker da Home: aquele é `aria-hidden` (decorativo,
  conteúdo redundante já acessível em outro lugar da página); este NÃO pode ser, porque veículos
  como "Podcast Orange Juice" só aparecem aqui — por isso só a *segunda* cópia (a duplicata
  usada pro loop) leva `aria-hidden="true"` e `tabindex={-1}` em cada link dela; a primeira cópia
  continua 100% navegável por teclado/leitor de tela, sem repetir a lista duas vezes no tab
  order. Bug real corrigido nessa troca: os campos de tema/data usavam `<PendingNote>` (que
  renderiza um `<p>` por padrão) dentro de outro `<p>` — HTML inválido, o navegador fecha o `<p>`
  externo antes da hora. Trocado pra `<div>` nesses dois wrappers.
- **Prévia de "Reconhecimentos" da Home virou arquivo editorial, não lista de currículo**
  ([index.astro](src/pages/index.astro), seção `.reconhecimentos-preview`): a pedido explícito —
  a versão anterior (`ano → nome → instituição → link`, uma linha por item com divisor de 1px)
  fazia LED/Watson/ONU/The Wall parecerem itens pequenos de lista; a nova versão são quatro
  **faixas horizontais grandes**, cada uma quase uma matéria de revista (foto grande + bloco de
  texto), empilhadas verticalmente, alternando o lado da foto: LED (foto→texto) → Watson
  (texto→foto) → ONU (foto→texto) → The Wall (texto→foto). Título grande da introdução reaproveita
  o mesmo padrão de destaque de "Quem somos" — `splitHighlight()` (já existente no frontmatter)
  aplicado de novo a `reconhecimentosPreview.title`/`titleHighlight` (novos campos em
  `conteudo/home.md`), com a palavra "longe" ganhando `.accent-mark`. **Sem `data-reveal-words`
  neste título** — como ele já tem um `<span class="accent-mark">` embutido, aplicar a revelação
  palavra-por-palavra reescreveria o `textContent` e apagaria o destaque (mesmo erro já documentado
  e evitado no "Quem somos" e no "Seis áreas" da Jornada).
  - **Sem fotos reais nem logos de terceiros** — nenhuma existia no projeto pra nenhum dos quatro
    reconhecimentos (verificado antes de implementar: `src/assets/images/` só tinha as duas fotos
    do hero da Home/Atuação e os arquivos da própria logo do TeF). Cada faixa usa
    `<MediaPlaceholder>` com um `label` descritivo do momento específico (ex.: "Entrega do Prêmio
    LED — Luz na Educação"), não um rótulo genérico. Os logos de Fundação Roberto Marinho/Rede
    Globo/Watson Institute/Western Union Foundation/ONU pedidos no briefing **não foram
    inventados** — não existe asset real pra nenhum, e desenhar um logo de memória seria pior que
    não ter nenhum (risco de representar errado a marca de terceiros); a credibilidade
    institucional fica só por conta da tipografia (instituição como legenda secundária), sem
    logo nenhum por enquanto.
  - **Primeira foto real de um reconhecimento: The Wall** (`src/assets/images/the-wall-equipe.jpg`
    — enviada pela Isabella, salva com o mesmo padrão kebab-case dos outros assets; o arquivo
    chegou como `TheWall.PNG` mas o conteúdo real já era JPEG, então foi renomeado pra bater com
    o formato de verdade, não só a extensão). Usada nos dois lugares que mostram esse
    reconhecimento: a faixa "wall" da prévia da Home (`index.astro`) e o card "The Wall" em
    `.destaques__grid` (`reconhecimentos.astro`) — mesmo arquivo importado duas vezes, sem
    duplicar asset.
    - **A foto original é vertical (1179×1474, proporção 0.8)**, mas os dois lugares onde ela é
      usada esperam recorte horizontal — a faixa da Home usava `21/9` (banner bem largo, pensado
      pro placeholder) e o card de Reconhecimentos usa `16/9` (mesma proporção dos outros três
      cards da grade, mantida por uniformidade visual). Nenhum dos dois recortes existentes
      cabia sem cortar os rostos — pedido explícito era "priorize deixar os rostos à mostra".
      Resolvido de duas formas complementares: a proporção da faixa da Home mudou de `21/9` pra
      `3/2` (bem menos larga, funciona melhor com uma foto vertical) e as duas usam
      `object-fit: cover` + `object-position` vertical calibrado (`41%` na faixa 3/2, `28%` no
      card 16/9) — nenhum dos dois valores foi só estimado: testados de antemão recortando
      programaticamente a imagem original (`sharp`, scripts descartáveis) em várias posições e
      conferindo visualmente antes de aplicar no CSS.
      **Ajuste numa segunda rodada, a pedido explícito** ("cortar parte do corpo pra aparecer o
      logo"): a primeira versão ancorava o recorte perto da base (`center bottom`/`center 92%`),
      o que deixava os rostos visíveis mas só mostrava a textura/círculo do telão de fundo, sem
      o texto "THE WALL" legível. Os dois valores subiram bem mais (41%/28%, bem mais perto do
      topo da foto) — o corpo abaixo dos ombros é quem sai do recorte agora (não era prioridade,
      confirmado explicitamente), em troca de mostrar o logo por inteiro e legível atrás dos três
      rostos, que continuam com folga nos dois recortes.
    - **Bug real de CSS, achado só depois de medir o retângulo renderizado**: no card de
      Reconhecimentos, a primeira versão só declarava `aspect-ratio: 16/9` sem `height: auto`
      explícito — o `<img>` gerado por `astro:assets` carrega os atributos HTML `width`/`height`
      do arquivo original como "dica de apresentação" (prioridade baixa, mas ainda maior que a
      ausência de qualquer regra CSS pra aquela propriedade); sem uma regra `height` própria, o
      atributo `height` (a altura real do arquivo, ~1474px) vencia silenciosamente sobre o
      `aspect-ratio`, e a foto renderizava com uma altura absurda (confirmado medindo
      `getBoundingClientRect()`: proporção 0.18 em vez de 1.78). A faixa da Home não teve esse
      problema porque já declarava `width: 100%; height: 100%;` explícitos desde o início (o
      container pai já tem altura definida) — lição geral: `aspect-ratio` sozinho não basta pra
      sobrepor um atributo HTML `height` num elemento substituído (`<img>`), precisa de um
      `height` explícito (mesmo que só `auto`) na mesma regra.
    - **Segunda rodada — as outras três fotos (Prêmio LED, Watson Institute, ONU)**, enviadas
      depois e nomeadas pela própria Isabella (`LED.jpeg`, `Watson.png`, `ONU.png` → renomeadas
      pro mesmo padrão kebab-case dos outros assets: `premio-led-equipe.jpg`,
      `watson-summit-slide.png`, `onu-discurso.png`). Diferente do "The Wall", as três já são
      naturalmente horizontais (LED 1.50, Watson 2.06, ONU 1.78 — quase 16/9 exato) e os
      assuntos (rostos/tela) já ficam bem centralizados no enquadramento original, então um
      recorte central simples (`object-position` padrão, sem desvio) já bastou pras quatro
      posições onde aparecem (faixa 4/3 e card 16/9 do LED, faixa 16/9 e card 16/9 do Watson,
      faixa 3/2 e card 16/9 da ONU) — confirmado do mesmo jeito que o "The Wall", recortando a
      imagem original em cada proporção com `sharp` antes de decidir, não só aplicando e
      torcendo. Como só a foto do "The Wall" precisa de um `object-position` fora do centro, o
      valor deixou de estar embutido na regra CSS compartilhada (`.reconhecimentos-band__photo`/
      `.destaque-card__photo`, que agora usam `object-position: center` como padrão) e passou a
      vir de um campo opcional por banda (`band.photoPosition`, só definido no objeto "wall") ou
      de um `style` inline direto no `<Image>` do card — evita que o valor específico de uma
      foto vaze pra afetar as outras três que não precisam dele.
      A Watson.png em si não é uma foto de pessoas — é a captura de um slide de apresentação (o
      "Bianca Bearare / Tocando em Frente" com o mapa do Brasil e uma selfie dela), já existente
      antes de qualquer decisão de crop; usada como está, sem tentar "melhorar" ou recompor.
  - **Cor de identidade só na faixa do Watson Institute** — pedido explícito ("área de fundo azul
    mais marcante" nesse bloco especificamente, pra dar ritmo, não repetir o mesmo fundo nas
    quatro). `.reconhecimentos-band--dark` usa `--color-primary-dark`, com o título em
    `--color-accent` — reaproveitando a exceção já documentada em `global.css`
    ("--color-accent como cor de texto só é permitido em título grande sobre fundo
    --color-primary-dark"), não uma regra nova. As outras três faixas ficam no `--color-bg` padrão.
  - **Proporção varia entre faixas, não é grid repetido**: `.reconhecimentos-band--media-first`
    (foto primeiro no DOM) usa colunas `minmax(0,0.9fr) minmax(0,1fr)`;
    `.reconhecimentos-band--text-first` usa `minmax(0,1fr) minmax(0,1.1fr)` — a foto sempre um
    pouco mais larga que o texto, mas a proporção exata muda conforme o lado, uma das várias
    pequenas diferenças pedidas entre as quatro faixas (junto de `photoRatio` variando por
    bloco: 4/3, 16/9, 3/2, 21/9).
  - **Bug real de CSS, achado e corrigido antes de considerar pronto**: a primeira versão forçava
    `height: 100%` no `<MediaPlaceholder>` dentro de cada faixa (pra foto preencher a altura
    inteira, não só sua própria proporção) sem travar a largura também — a combinação de
    `height:100%` + o `aspect-ratio` inline do componente + a largura implícita de item de grid
    (que depende do `min-width:auto` padrão) fazia a foto "vazar" da própria coluna, estourando a
    faixa em ~49px de scroll horizontal na página inteira (confirmado medindo
    `document.documentElement.scrollWidth` vs `clientWidth`, não só por inspeção visual). Corrigido
    travando as duas dimensões explicitamente (`width:100%; height:100%`) e adicionando
    `min-width:0` no item de grid — com as duas dimensões já definidas antes do `aspect-ratio`
    entrar em jogo, ele deixa de ter efeito (comportamento correto aqui: a foto deve preencher a
    faixa, não ficar presa à proporção original). Vale de lição geral: `height:100%` num filho com
    `aspect-ratio` próprio, dentro de um item de grid, precisa do `width` também travado
    explicitamente, senão o resultado é imprevisível.
  - **"Também faz parte da nossa história"**: lista compacta abaixo das quatro faixas, lendo os
    itens de `midia.json` que **não** viraram faixa grande (tudo exceto Jornal Nacional e ONU —
    Web TV, já usados acima) — não duplica os mesmos 4 reconhecimentos numa lista menor (a imagem
    de referência do pedido mostrava isso, mas não fazia sentido de dado; interpretado como
    "arquivo complementar" de verdade). Itens com `tema` pendente usam
    `<PendingNote text={...} compact />` em vez de mostrar `"[PENDENTE]"` cru.
    **Removida numa rodada seguinte** — a pedido explícito ("quero apenas as 4 de destaque"), a
    lista inteira (`reconhecimentosMore`, filtrada de `midia.json`) e seu rótulo (`moreLabel`)
    saíram do template. O link "Ver todos os reconhecimentos →" que vivia dentro dessa mesma
    `<div>` foi mantido (só reposicionado direto após as quatro faixas) — decisão própria, não
    pedida explicitamente: ele não mostra nenhuma "outra matéria", só é a porta de saída pra
    página completa de Reconhecimentos, então cortá-lo teria removido navegação sem necessidade.
    `moreLabel` continua em `home.md` (conteúdo real, sem uso agora).
  - **Introdução (kicker + título + texto) reduzida só ao kicker** — a pedido explícito de tirar
    o título "O trabalho do Tocando em Frente já chegou longe." e o parágrafo de apoio. O `<h2>`
    com `id="reconhecimentos-heading"` (usado pelo `aria-labelledby` da seção) saiu por completo
    — diferente do padrão usado no `SustentacaoMapa` (manter um `<h2 class="visually-hidden">`
    só pro nome acessível), aqui o `id` migrou pro próprio `<p class="caption kicker">` que já
    ficava visível, evitando duplicar o texto do título escondido no DOM sem necessidade (a seção
    já tem um rótulo visível de sobra). `reconhecimentosTitleParts`/`splitHighlight()` aplicado ao
    título saíram do frontmatter por ficarem sem uso; `title`/`titleHighlight`/`lede` continuam em
    `home.md` (conteúdo real).
  - **As quatro faixas viraram azuis com letras amarelas** — a pedido explícito. Antes só a faixa
    do Watson Institute usava fundo escuro (`--color-primary-dark`) pra dar ritmo cromático no
    meio de uma sequência majoritariamente clara; com as quatro na mesma cor, não sobrou nenhuma
    faixa clara pra contrastar, então a classe modificadora `.reconhecimentos-band--dark` foi
    removida por inteiro e seu estilo migrou pra virar o único estilo de `.reconhecimentos-band`.
    Diferente da versão anterior (que só o título ficava em `--color-accent`, o resto em tons
    claros/acinzentados), agora kicker, título, instituição e link usam todos `--color-accent` —
    pedido literal ("as letras amarelas"), contraste conferido a ~7,6:1 contra
    `--color-primary-dark` (bem acima do mínimo AA de 4.5:1), mesma exceção já documentada em
    `global.css` pra `--color-accent` como cor de texto sobre esse fundo.
  **Décima oitava rodada — de quatro faixas iguais pra um único grande destaque com vídeo real**,
  a pedido explícito ("o Prêmio LED é o reconhecimento mais importante... não apenas mais um item
  da lista... reconhecimento → credibilidade → história → impacto"). Mudança estrutural, não só
  visual:
  - **Watson/ONU/The Wall saíram da Home** — só o Prêmio LED continua, como destaque único, mais
    o link "Ver todos os reconhecimentos →" pra quem quiser o resto. Interpretação de um pedido
    que não listava isso item por item ("os demais reconhecimentos continuam podendo aparecer na
    página específica" foi lido como "não mais na Home") — as três faixas continuam 100% intactas
    em [reconhecimentos.astro](src/pages/reconhecimentos.astro), que lê `premios.json`/`midia.json`
    direto, sem depender do array que existia em `index.astro` (removido por inteiro, junto dos
    imports `watsonImage`/`onuImage`/`theWallImage`/`premioLedImage`, todos sem uso na Home
    depois disso — `premioLedImage` continua importada em `reconhecimentos.astro`, arquivo
    separado, intocado).
  - **Vídeo real da premiação, hospedado no próprio site — nunca um embed do YouTube/Instagram**,
    a pedido explícito. O arquivo enviado (`Prêmio LED.mov`, HEVC, 1920×1080, 4min50s,
    **315MB**) tinha dois problemas reais pra ir direto pro ar: HEVC não é suportado de forma
    confiável fora do Safari (Chrome/Firefox desktop, em geral, não tocam), e 315MB é grande
    demais pra qualquer estratégia de carregamento salvar sozinha. Sem `ffmpeg` disponível no
    ambiente, instalado `ffmpeg-static` temporariamente (`npm install --no-save`, mesmo padrão já
    usado antes pro `heic-convert` — confirmado depois que não sobrou rastro em
    `package.json`/lockfile) só pra rodar a conversão. Recodificado pra H.264/AAC
    (`libx264 -crf 23 -movflags +faststart`, o `faststart` move o índice do arquivo pro início —
    permite o vídeo começar a tocar antes de baixar por completo), resultando em **~108MB** — o
    vídeo original em `src/assets/images/` foi apagado depois (mesmo padrão de sempre: nunca
    manter o arquivo bruto ao lado do derivado final).
  - **Vídeo fora de `astro:assets`** — só imagem passa pelo pipeline de otimização do Astro;
    vídeo é um arquivo estático de verdade, então foi pra `public/videos/premio-led-luz-na-
    -educacao.mp4` (mesmo padrão já usado por `public/imagens/mapa-brasil.svg`), servido direto
    por URL, não importado no frontmatter.
  - **Novo componente [VideoPlayer.astro](src/components/VideoPlayer.astro)** — reutilizável,
    props `src`/`poster`/`posterAlt`/`title`/`ratio`. O `<video>` nasce com `preload="none"` e
    sem `controls` — o navegador não baixa NADA do arquivo até o clique (não é "lazy load ao
    rolar até a seção", é mais forte que isso: zero bytes do vídeo mesmo com a seção já visível,
    só a foto de capa, que passa pelo `astro:assets` normalmente). O clique no botão de play
    adiciona a classe `.is-playing` (esconde capa+botão), liga `video.controls = true` (só a
    partir daí aparecem os controles nativos de pausar/avançar/volume/tela cheia) e chama
    `.play()` — tudo dentro da própria `<section>`, nunca uma nova aba/página.
    - **Sem círculo no botão de play, de propósito** — um botão de play redondo é convenção
      quase universal, mas exigiria uma nova exceção à regra "sem arredondamento em lugar
      nenhum" (a mesma pergunta já feita duas vezes antes, pra caixa da Atuação e pro baralho
      dos "três movimentos"). Em vez de abrir mais uma exceção sem necessidade, o selo do play é
      um quadrado reto (`--color-bg` sólido, sem raio nenhum) com o triângulo dentro — lê como
      botão sem precisar arredondar nada, e ainda combina mais com a linha "reto, elegante,
      institucional" do que um círculo teria.
    - **`object-fit: contain`, não `cover`, no `<video>`** — pedido explícito de "não alterar a
      proporção original do vídeo"; `contain` garante isso sempre, mesmo se o box de exibição não
      bater pixel a pixel com a proporção real do arquivo (o vídeo é 16:9 exato, então na prática
      não sobra nenhuma barra preta, mas a escolha é deliberadamente a mais segura pra esse
      requisito, não a que "geralmente dá certo").
  - **Capa extraída do próprio vídeo, não uma imagem separada** — `sharp`/`ffmpeg` geraram vários
    frames candidatos (`-ss <tempo> -frames:v 1`) em pontos diferentes do vídeo; escolhido a
    dedo, depois de olhar cada um, um frame aos 2min38s (um garoto levando outro de moto pra
    escola, enquadrado por um portão) — não é o frame "correto" ou "padrão" (ex.: primeiro
    frame, que costuma vir em fade/preto), é uma escolha editorial de qual imagem melhor
    representa a história antes de alguém clicar em play. Salvo como
    `premio-led-video-poster.jpg` em `src/assets/images/` (imagem de verdade, passa pelo
    `astro:assets` normalmente, diferente do vídeo).
  - **Composição pedida literalmente, título aparece duas vezes com pesos diferentes**: um
    `<h2>` "Prêmio LED — Luz na Educação" fora/acima do card (mesma escala `--text-h2` de
    qualquer `<h2>` do site — nenhum tamanho novo inventado, já que a introdução da seção tinha
    perdido seu título numa rodada anterior) funciona como o título de verdade da seção; dentro
    do card, o mesmo nome volta como legenda institucional compacta (`--text-h3`, ao lado de
    "RECONHECIMENTO · 2024" e da instituição) — não é duplicação por engano, é o "reconhecimento
    → credibilidade" pedido: a manchete grande anuncia, a legenda pequena documenta.
  - **Novo campo `ledChamada`** em `home.md` (`reconhecimentosPreview.ledChamada`) — a frase de
    contexto sugerida ("Uma história que mostra por que o Tocando em Frente existe.") usada
    quase verbatim, com destaque visual (`--text-h3`, `--color-bg` sólido) acima do parágrafo
    institucional (`premioLed.texto`, de `premios.json` — já existia, real, nunca antes mostrado
    na Home) que seguem em tom secundário (`rgba(250, 248, 244, 0.85)`, o mesmo "branco cru com
    alpha" já usado em texto secundário sobre fundo escuro no resto do site).
  - **Link "Ver cobertura no Jornal Nacional →" continua existindo**, mas não é mais a única
    forma de "assistir" (antes era o único jeito de ver o vídeo, redirecionando pra fora) — agora
    é uma citação institucional secundária, `target="_blank"` (mesmo padrão de link externo do
    resto do site), coexistindo com o player embutido sem competir com ele.
  - Verificado: o clique no play realmente inicia a reprodução (`video.paused === false`,
    `currentTime` avançando, `controls` ligado só depois do clique), o layout de duas colunas no
    desktop empilha corretamente no mobile (vídeo primeiro, depois o texto), nenhuma das duas
    larguras testadas (900px desktop, 375px mobile) introduziu overflow horizontal, e a página
    `/reconhecimentos` continua mostrando as quatro faixas completas, confirmando que nada foi
    removido do site — só da prévia da Home.
- **"Como isso se sustenta" virou um mapa mental interativo**
  ([SustentacaoMapa.astro](src/components/SustentacaoMapa.astro), Atuação, conteúdo em
  `/conteudo/atuacao/times.json`): a versão anterior era número fixo (à esquerda, sticky) + texto
  corrido (à direita) — o padrão "número+texto lado a lado" que a Home também usa em outros
  lugares. Virou **363** enorme no centro (contando de 0 até o valor real quando a seção entra na
  tela) com os 8 times/modalidades de voluntariado ao redor dele em posições **escolhidas à mão**
  (objeto `layout` no frontmatter do componente — nunca calculadas por matemática de
  círculo/grade). Antes de implementar, confirmei que não existe nenhuma biblioteca de animação no
  projeto (`package.json` só tem Astro + a fonte DM Sans) — é JS puro + CSS, mesma stack do resto
  do site.
  - **Diretoria Regional é só mais um dos 8, não uma categoria à parte** — pedido explícito em
    ambas as rodadas. Mesmo tamanho-base de módulo que os outros (na segunda rodada isso virou
    uma regra ainda mais explícita: a variação de escala entre módulos precisa ficar numa faixa
    estreita e DR não pode ficar no topo dela). É o único dos 8 com `texto`/`nota` reais no
    popup, porque é o único que tem conteúdo institucional de verdade já escrito em algum lugar
    do projeto (o texto que já existia em `sustentacao.texto1`/`citacao`, hoje só vive dentro de
    `times.json`). Os outros 7 (Gestão, Financeiro, Operacional, Pedagógico, Comunicação,
    Trainees, Diretoria de Talentos) não têm descrição em lugar nenhum do projeto — confirmado
    grepando `conteudo/` e `src/` inteiros antes de escrever qualquer coisa.
  - **Interação unificada num só estado, não CSS `:hover` + JS separados**: hover/foco no
    desktop e toque no mobile chamam as mesmas duas funções (`openNode(id)`/`closeAll()`) — a
    mesma escolha já usada em `AtuacaoMap.astro` pros pins do mapa (clique com
    `stopPropagation()`, `document` fecha tudo ao clicar fora, `Escape` fecha). Abrir um módulo
    também precisa *escurecer os outros* e *revelar uma linha* até o 363 — efeitos entre
    elementos irmãos que CSS `:hover` sozinho não alcança sem `:has()` — por isso tudo passa
    pelas mesmas duas funções. Clique nunca fecha o que o hover acabou de abrir (clique só chama
    `openNode`, nunca alterna — fechar é sempre via `mouseleave`/`blur`/clique fora/Esc).
  - **A linha até o centro é SVG, não um pseudo-elemento rotacionado**: cada módulo tem uma
    `<line>` própria (`data-target={id}`) dentro de um único `<svg viewBox="0 0 100 100"
    preserveAspectRatio="none">` cobrindo o stage inteiro — como o `x1/y1/x2/y2` de cada linha usa
    exatamente as mesmas coordenadas percentuais já usadas pra posicionar o módulo via CSS
    `left`/`top`, os dois sistemas ficam sempre alinhados entre si mesmo o stage não sendo
    quadrado (o mobile não é) — não precisou calcular ângulo/comprimento de linha à mão.
  - **Duas versões de posição, não a mesma composição encolhida**: cada módulo carrega um par
    `x/y` (desktop) e `xm/ym` (mobile) desde o frontmatter — a versão mobile é uma composição
    vertical própria, não a mesma disposição espacial só menor (pedido explícito nas duas
    rodadas). CSS troca qual par vale (`left:var(--x)` no desktop, `left:var(--xm)` abaixo de
    720px) e qual cópia de `<line>` fica visível.
  - **Dois bugs reais de dimensionamento, achados na primeira rodada** (só apareciam com o
    sticky realmente ativo — só foram encontrados medindo `getBoundingClientRect()` depois de
    rolar de verdade até o mapa ficar fixo, não inspecionando o HTML parado): (1) o stage é um
    quadrado (`aspect-ratio:1/1`) com só `max-width` — em telas mais baixas que largas esse
    quadrado ficava mais alto que a fatia sticky disponível, empurrando os módulos da base pra
    fora da viewport; corrigido com `width: min(<max>, 100%, calc(100vh - header - <margem>))`,
    um `object-fit:contain` calculado só com CSS. (2) mesmo depois desse fix, sobrava uma fatia
    cortando o módulo mais baixo: `.mapa-times__sticky` tinha `top: var(--header-height)` E
    `height: 100vh` ao mesmo tempo — as duas coisas juntas sempre estouram o rodapé da tela em
    exatamente `--header-height`, porque a altura não descontava o mesmo deslocamento do `top`.
    Corrigido pra `height: calc(100vh - var(--header-height))`. Lição geral: `position: sticky;
    top: X; height: 100vh` é sempre `X` alto demais.
  **Segunda rodada — refinamento visual**, a pedido explícito depois que a primeira versão
  pareceu "um número grande com várias palavras espalhadas ao redor" em vez de "um sistema
  desenhado com intenção". Três mudanças principais, nem uma delas cosmética isolada:
  - **Removida a explicação editorial inteira** — o antigo `.mapa-times__editorial`
    ("Como isso se sustenta" + `texto1`/`texto2`/`citacao`) e `.mapa-times__rede` (parágrafo de
    mobilização + cadeia Voluntários→Território→Escolas→Parcerias→Impacto) saíram por completo;
    a interação com os times agora é a única forma de apresentar essa informação, não um bloco de
    texto depois do mapa. Como consequência, o componente perdeu as props `texto1`/`texto2`/
    `citacao`/`parceirosTexto` (só ficou `numero`/`numeroLabel`/`kicker`) — esses campos
    continuam existindo em `atuacao.md` (conteúdo institucional real, não descartado), só não são
    mais lidos por nenhum componente. Como a seção não tem mais um título visível, o `<h2
    id="sustentacao-heading">` que dava nome a ela virou `class="visually-hidden"` (mesmo padrão
    já usado em "Números de impacto" na Home) — mantém o nome acessível pra leitor de tela sem
    reintroduzir texto visual.
  - **Nenhuma rotação em lugar nenhum** — `--rot` saiu inteiramente do layout (nas duas versões,
    desktop e mobile). A primeira rodada usava rotação pra dar "personalidade" aos módulos;
    pedido explícito de tirar tudo (`rotate()`, `skew()`, qualquer inclinação) e deixar a
    personalidade vir só de posição/escala/espaçamento/interação — a variação de `--scale` entre
    módulos continua existindo, só numa faixa bem mais sutil que antes.
  - **Times viraram pop-ups de verdade, não texto solto**: cada módulo agora é
    `.mapa-times__node-wrap` > `.mapa-times__node` (a "janelinha": moldura de 1px
    `var(--color-border)`, fundo quase imperceptivelmente diferente do fundo da página via
    `color-mix()`, cantos retos) + `.mapa-times__popup` — um elemento **irmão**, não mais aninhado
    dentro do botão, posicionado `position:absolute` relativo ao wrap. Antes a descrição vivia
    DENTRO do botão e crescia por `max-height`, empurrando módulos vizinhos; agora é
    genuinamente flutuante (`opacity`+`transform: translate/scale`, `pointer-events:none` quando
    fechado) e nunca afeta o layout ao redor. Abre pra cima ou pra baixo dependendo de o módulo
    estar na metade de cima ou de baixo do mapa (`data-pos`, calculado a partir do `y` de cada
    módulo) e alinha à esquerda/direita perto das bordas (`data-align`) pra nunca vazar da
    composição — mesma lógica de `edgeAlign()` já usada em `AtuacaoMap.astro`.
  - **Todos os 8 têm descrição agora, com placeholder explícito onde falta conteúdo real** —
    mudança de regra em relação à primeira rodada (que mostrava só o nome quando não havia
    descrição). `times.json` ganhou um campo raiz `loremPlaceholder`
    ("Lorem ipsum dolor sit amet...", pedido explicitamente como texto temporário, não uma
    tentativa de imitar conteúdo real) usado nos 7 times sem descrição própria — só DR mostra
    texto institucional de verdade no popup.
  - **Composição bem mais densa**: raio de distribuição dos módulos reduzido (de ~8–97% do eixo
    pra ~21–89%, bem mais perto do centro), `--seg`/altura do wrapper sticky cortada quase pela
    metade (era 165vh, agora 128vh), `363` maior ainda (`clamp` chegando a 18rem em vez de
    15rem), e `.sustentacao` ganhou um `padding-block` próprio bem mais enxuto que o `section`
    genérico do arquivo — pedido explícito de reduzir o espaço em branco entre cabeçalho/mapa/
    times e fazer a seção começar mais perto do header.
  **Terceira rodada — distribuição espacial**, a pedido explícito depois que a segunda rodada
  ficou "tudo concentrado no centro, com grandes áreas vazias nas laterais". O conceito não
  mudou — só a composição. Duas mudanças estruturais principais:
  - **O stage deixou de ser um quadrado pequeno e virou um retângulo largo**: antes,
    `aspect-ratio:1/1` com `max-width:56rem` (limitado só pela largura); agora
    `width: min(90%, 92rem); height: 82%;` — a altura vem de uma porcentagem do `.sticky` (que já
    tem altura definida), então o stage acompanha o formato real da tela (bem mais largo que alto
    no desktop) em vez de forçar um quadrado. Isso sozinho já elimina a sobra de espaço nas
    laterais sem precisar mexer em mais nada.
  - **Coordenadas dos 8 módulos, bem mais abertas**: de uma faixa de ~21–89% (rodada anterior)
    pra ~6–96% — quase a extensão inteira do stage, não mais uma ilha pequena ao redor do centro.
  - **"Área de proteção" do 363 — três descobertas, todas achadas medindo `getBoundingClientRect`
    depois de interagir de verdade, não só olhando o layout parado**:
    1. Nenhum módulo fica dentro da faixa x:[40,60]/y:[40,60] (`axisPos`/`axisAlign` no
       frontmatter, computados a partir da própria posição de cada módulo — não é um valor
       fixo, é geometria). Isso sozinho garante que os módulos em si nunca tocam o núcleo.
    2. **Bug real, achado só depois de testar interação**: mesmo com os módulos fora da faixa
       central, o *pop-up* de um módulo podia entrar na área do número — porque a regra de
       "abrir pra dentro" (ver próximo item) faz exatamente isso, abrir em direção ao centro.
       Pros módulos de cima/baixo (`pos='above'/'below'`) isso é seguro, porque abrem numa
       ALTURA diferente da do número. Mas pros dois módulos da linha do meio (`pos='middle'`,
       operacional/financeiro — mesma altura do 363), abrir "pra dentro" significa abrir na
       MESMA altura do número, e o alcance de um pop-up de 14rem passa do número em telas de
       laptop mais estreitas (confirmado medindo a distância real entre módulo e núcleo, ~150–
       170px). Corrigido com um `max-width:8rem` só pra esses dois pop-ups — os outros seis
       continuam com o alcance total, porque a altura diferente já os protege.
    3. **Bug real de CSS, achado corrigindo o item 2**: a primeira tentativa de consertar isso
       usou um seletor `[data-pos!='middle']` — sintaxe inválida em CSS (não existe operador
       `!=` em seletor de atributo; o certo é `:not([data-pos='middle'])`). Mesmo corrigindo a
       sintaxe, a abordagem de "uma regra genérica por eixo, sobrescrita em cascata" continuava
       frágil: `[data-align='left']:hover` também batia nos módulos `pos='middle'` (que têm
       `data-align` lateral ao mesmo tempo), e por ordem no arquivo apagava o `translateY(-50%)`
       de centralização vertical deles. Resolvido de vez com uma técnica mais robusta: duas
       custom properties (`--popup-tx`/`--popup-ty`) guardam o deslocamento de centralização —
       constante, nunca muda entre fechado/aberto — e só `--popup-scale` anima no hover, através
       de UMA regra genérica só, sem nenhuma combinação de seletores concorrendo entre si.
  - **Bug real, o mais importante desta rodada: a direção do "abrir pra dentro" estava
    invertida**: o pedido é literal — "se o time estiver perto da borda esquerda, abrir o pop-up
    para dentro; se perto da direita, abrir para a esquerda" — ou seja, sempre em direção ao
    espaço disponível no meio da composição. A implementação original fazia o oposto (um módulo
    à esquerda abria o pop-up ainda mais pra esquerda, `right:0` em vez de `left:0`), o que não
    dava problema nas rodadas anteriores (módulos perto do centro, pop-up cabia em qualquer
    direção) mas, com a distribuição bem mais aberta desta rodada, jogava pop-ups de módulos
    extremos pra fora da viewport — só descoberto medindo `document.documentElement.scrollWidth`
    vs `clientWidth` depois de abrir cada um dos 8 pop-ups programaticamente (não visualmente:
    mesmo fechado, um pop-up `visibility:hidden` posicionado fora da tela ainda conta pra
    `scrollWidth` da página, porque `visibility:hidden` ≠ `display:none` — continua ocupando
    espaço de layout, só não é pintado). Corrigido invertendo `left`/`right` nas quatro regras de
    eixo horizontal. Verificado programaticamente nos dois extremos plausíveis de largura
    "desktop" (1280px e 760px, a borda exata do breakpoint) abrindo os 8 pop-ups um por um via
    `dispatchEvent(new MouseEvent('mouseenter'))` e medindo colisão com o núcleo + overflow da
    página em cada um — zero em ambos.
  - **Mobile: o mesmo bug de sobreposição, mas pela razão oposta** — bug real, também só achado
    medindo depois de interagir: numa tela estreita, o "363" ocupa uma fatia MUITO maior da
    largura disponível (proporcionalmente) do que no desktop, porque o piso do `clamp()` do
    tamanho da fonte não encolhe na mesma proporção que o stage. Dois times na mesma altura do
    centro (replicando a distribuição "lateral esquerda/lateral direita" do desktop) ficavam
    literalmente atrás do número. Solução: no mobile a composição vira uma pilha de 4 "andares"
    (`ym` diferente de `y`, só pra esses dois times — comunicação → pedagógico/gestão →
    operacional/financeiro → trainees/DR → talentos), nenhum time na mesma altura do núcleo.
    Além disso, os pop-ups por módulo somem no mobile (`display:none` abaixo de 720px) e dão
    lugar a um **painel único** (`.mapa-times__mobile-panel`), sempre ancorado nos mesmos
    `left/right/bottom` seguros dentro do stage, com o JS copiando o texto do módulo tocado pra
    dentro dele — numa tela estreita, não existe espaço suficiente pra abrir um pop-up "pra
    dentro" (esbarra no núcleo) OU "pra fora" (vaza a tela) ao mesmo tempo pros módulos mais
    extremos; um painel de posição fixa evita o problema em vez de tentar espremer as duas regras
    numa margem pequena demais. Bug real relacionado: dois nomes longos ("Diretoria Regional",
    "Diretoria de Talentos") em `white-space:nowrap` chegavam a ~200px de largura — combinado com
    módulos perto da borda, o próprio botão (não só o pop-up) estourava a viewport; corrigido
    deixando quebrar linha no mobile (`white-space:normal; max-width:7.5rem`).
  **Quarta rodada — legenda do "363" maior**: `.mapa-times__number-label` ("voluntários já
  passaram pelo Tocando em Frente") herdava só `.caption` (14–15px, mesmo tamanho de qualquer
  legenda pequena do site) — a pedido explícito de acompanhar melhor o tamanho do numeral gigante
  ao lado, ganhou um `font-size` próprio (`clamp(1.0625rem, 0.95rem + 0.5vw, 1.3125rem)`, entre
  `--text-body` e `--text-h3`) e `max-width` um pouco maior (13rem → 15rem) pra não quebrar linha
  demais no tamanho novo. Continua bem menor que o "363" — reforça, não compete.
  **Quinta rodada — pop-ups amarelos**: a pedido explícito, `.mapa-times__popup` (e o painel
  único do mobile, que compartilha as mesmas classes internas) trocou de fundo escuro
  (`--color-text`, texto claro) para `--color-accent` (o amarelo da identidade) com texto escuro
  (`--color-on-accent`, que já é `--color-text` — mesmo par usado no chip do `PendingNote`, não
  uma combinação nova) — o nome do time ganhou `--color-primary-dark` pra se diferenciar do texto
  corrido abaixo dele, já que os dois não podem mais contar com "claro sobre escuro vs. claro
  sobre escuro" pra se destacar.
  **Bug real, achado ajustando essas cores**: `.mapa-times__popup-name` e
  `.mapa-times__popup-nota` tinham sua própria cor declarada, mas nunca era ela quem realmente
  aparecia — `.mapa-times__popup p` (classe + elemento, especificidade 0,1,1) sempre vencia as
  duas (0,1,0 cada), então as duas sempre herdavam a cor do popup inteiro. Isso é um bug antigo,
  não introduzido nesta rodada — só nunca tinha sido percebido porque, com o popup escuro e as
  duas cores "certas" (`--color-accent` no nome, um branco com opacidade na nota) também sendo
  claras, o resultado visual acidentalmente parecia correto o bastante. Ficou óbvio ao trocar
  pra fundo amarelo: o nome devia ficar azul-escuro e continuava saindo com a cor herdada.
  Corrigido excluindo as duas classes da regra genérica via `:not()`
  (`.mapa-times__popup p:not(.mapa-times__popup-name):not(.mapa-times__popup-nota)`, e o mesmo
  no seletor equivalente do painel mobile) em vez de depender da ordem das regras no arquivo.
  Verificado nos 8 times nas duas variantes de posição/alinhamento (incluindo o único com nota,
  Diretoria Regional): fundo amarelo, nome em azul-escuro, nota em cinza-azulado com opacidade,
  e nenhuma sobreposição com o "363" em nenhum dos 8.
  **Sexta rodada — fundo azul institucional, linguagem editorial de relatório de impacto**, a
  pedido explícito, com referência visual externa: a página
  [Impact and Learning do Global Fund for Children](https://globalfundforchildren.org/impact-and-learning/)
  ("não copiar o layout, mas trazer a mesma sensação de design editorial de impacto: tipografia
  grande, números protagonistas, composição institucional sofisticada"). Da referência, o que
  foi de fato absorvido: (1) escala tipográfica — números tratados como o maior elemento da
  página, não uma legenda grande; (2) alto contraste entre o numeral (peso máximo, cor sólida) e
  o texto de apoio (mais claro/discreto); (3) um campo de cor sólido e cheio como "área de
  impacto", não um recorte decorativo pequeno. O que NÃO foi copiado, por pedido explícito: a
  paleta da referência (verde-escuro + lavanda + roxo), os elementos decorativos tipo "sunburst"
  ao redor das fotos circulares, e qualquer inclinação/rotação de texto — a identidade visual do
  TeF (azul institucional, sem cantos redondos, sem rotação) foi mantida integralmente, só o
  *vocabulário* editorial foi emprestado.
  - **Fundo azul em largura cheia**: `background: var(--color-primary-dark)` foi pro `<section
    class="sustentacao">` em `atuacao.astro` (não pro componente), porque uma `<section>` já
    ocupa a viewport inteira por padrão — o `.container` interno continua só centralizando o
    conteúdo, sem limitar a cor. Mesmo padrão já usado por outras seções escuras full-bleed do
    site (CTA final, "Seis áreas" da Jornada). O `border-top` genérico de 1px cinza (herdado da
    regra `section + section`) saiu especificamente dessa seção — virou `border-top: none` — já
    que uma borda fina cinza logo antes de um bloco de cor sólida ficaria estranha; a própria
    mudança de cor já funciona como divisória visual entre as seções.
  - **"363" de `--color-primary` (azul) pra `--color-bg` (branco/claro) e ainda maior**: o teto
    do `clamp()` do numeral subiu de `18rem` pra `22rem` — pedido explícito de "extremamente
    grande e dominante". A legenda abaixo (`.mapa-times__number-label`) também ficou clara, mas
    com opacidade reduzida (`rgba(250, 248, 244, 0.75)`, o mesmo "branco cru com alpha" já
    reaproveitado em outros textos secundários deste arquivo) — mantém a hierarquia de que o
    numeral é o elemento dominante e a legenda é só apoio, nunca competindo com ele.
  - **Pop-ups de amarelo (rodada anterior) pra branco/claro** — pedido explícito e literal ("os
    pop-ups devem usar branco e tons muito claros"), supera a decisão da quinta rodada. Os
    pop-ups (e o painel único do mobile) agora são `background: var(--color-bg); color:
    var(--color-text);` com uma borda de 1px (`var(--color-border)`, a mesma "moldura reta"
    institucional usada em qualquer imagem/card do site) — funcionam como pequenos cartões claros
    "pousando" sobre o campo azul, o mesmo tipo de contraste que a própria referência usa pros
    seus blocos de apoio (o card "Stay connected" branco sobre o hero escuro). `.mapa-times__popup-name`
    (`--color-primary-dark`) e `.mapa-times__popup-nota` (cinza-azulado com opacidade) não
    precisaram mudar — já liam bem sobre fundo claro.
  - **Módulos dos times: de "janela clara sobre fundo claro" pra "vidro claro sobre fundo
    escuro"** — a mesma ideia de módulo sutil (nunca um card de dashboard) só trocou de polaridade:
    fundo branco a 8% de opacidade + borda branca a 35% (mesmo tratamento já usado em UI escura
    do site, ex. `.jornada-tabs__tab`), texto do nome em branco (`var(--color-bg)`, era
    `var(--color-text)`, ilegível sobre azul). Estado ativo/hover: o nome do time vira
    `--color-accent` (amarelo) — reaproveita a exceção já documentada em `global.css`
    ("`--color-accent` como cor de texto é permitido sobre `--color-primary-dark`"), não uma
    combinação nova; a "janela" ganha fundo/borda mais claros e o mesmo `scale(1.08)` de sempre.
  - **Linha condutora**: `stroke` do SVG que liga cada time ao "363" passou de `--color-primary`
    (que sumiria contra o novo fundo, quase a mesma família de azul) pra `--color-bg` — continua
    só um traço fino e discreto (opacity 0→0.4 no hover), não virou um elemento decorativo novo.
  - **Composição ~5% maior, pedido explícito de "evitar excesso de espaço vazio"**: `width`/
    `height` do stage subiram de `min(90%, 92rem)/82%` pra `min(94%, 96rem)/88%` no desktop
    (94%→96% no mobile). Como todo o posicionamento dos módulos já era em porcentagem, isso
    escala a composição inteira proporcionalmente — módulos e os vãos entre eles crescem juntos
    — sem tocar em nenhuma coordenada x/y individual, então o "safe zone" ao redor do 363 e as
    correções de sobreposição das rodadas anteriores continuam intactas.
  - Verificado com a mesma bateria rigorosa de sempre: os 8 módulos abertos programaticamente
    (`dispatchEvent(new MouseEvent('mouseenter'))` pra medir geometria, `.click()` real pra
    verificar o CSS `:hover`/`.is-open` de verdade — um clique sintético dispara os *listeners*
    JS, mas não o pseudo-seletor `:hover`, então só serve pra testar geometria, não a aparência
    visual do popup) em três larguras (1280px, 760px — a borda exata do breakpoint —, 375px
    mobile): zero sobreposição com o núcleo em todos, `overflow` de página inalterado em relação
    ao valor de antes desta rodada (a página já tinha um resíduo de 2px pré-existente e sem
    relação com esta mudança, documentado em rodadas anteriores), cores confirmadas via
    `getComputedStyle` (fundo da seção, cor do numeral, fundo do pop-up, fundo do painel mobile).
  **Sétima rodada — conteúdo real dos 8 times + pop-ups que nunca mais somem da tela**, dois
  pedidos explícitos e independentes.
  - **Conteúdo real substituiu o `loremPlaceholder`**: a Isabella mandou o texto definitivo dos 8
    times (Pedagógico, Comunicação, Gestão, Financeiro, Operacional, Trainees, Diretoria de
    Talentos, Diretoria Regional), cada um como uma frase-chamada + uma frase de explicação — as
    duas foram combinadas num único `texto` por time (mesmo campo/formato que já existia, sem
    introduzir uma segunda propriedade só pra isso). `times.json` perdeu o campo
    `loremPlaceholder` (não sobra nenhum time sem conteúdo real pra precisar dele) e a Diretoria
    Regional trocou o texto antigo (mais a `nota` "Todo DR é um voluntário...") pelo texto novo,
    consistente com os outros 7 — o mecanismo de `nota` continua existindo em
    `SustentacaoMapa.astro` (não é código morto: é um campo opcional genérico, só nenhum time usa
    hoje). `SustentacaoMapa.astro` simplificado: `texto` virou obrigatório na interface `Time`, o
    fallback `t.texto ?? loremPlaceholder` saiu do frontmatter.
  - **Pop-ups não podem mais sumir da tela do usuário**, a pedido explícito e literal ("as boxes
    que tão muito em cima abrem pra cima e não da pra ler... as que tão embaixo, abrem pra
    baixo") — os dois eram o MESMO bug (abrir em direção à borda da tela, não ao centro), só em
    lados opostos. Eixo vertical invertido: `[data-pos='above']` (módulos já perto do topo do
    stage, que fica colado embaixo do cabeçalho) agora abre o pop-up pra BAIXO em vez de pra cima;
    `[data-pos='below']` agora abre pra CIMA em vez de pra baixo — os dois sentidos passaram a
    apontar pro centro da tela (sempre visível), nunca pra fora dela.
  - **Eixo horizontal invertido no sentido oposto**, também a pedido explícito e literal ("as do
    lado abrem para dentro do número 363, gostaria que abrissem para fora"): reverte a correção
    da rodada "Terceira" (que tinha ido de fora-pra-dentro justamente pra resolver overflow de
    viewport) — os módulos laterais voltaram a abrir pra fora (em direção à borda da tela, se
    afastando do "363"), incluindo operacional/financeiro (linha do meio), que também abriam pra
    dentro antes.
  - **Bug real reintroduzido pela reversão acima, e a solução não foi um `max-width` menor**:
    abrir pra fora de novo faz os módulos mais perto da borda lateral (operacional, financeiro, e
    em telas mais estreitas também pedagogico/gestao/trainees/dr) estourarem a viewport — o mesmo
    problema que a correção "pra dentro" resolvia antes. Como encolher o pop-up prejudicaria a
    leitura e voltar a abrir pra dentro contradiria o pedido, a solução foi um clamp em JS: ao
    abrir um módulo (`openNode`), uma função nova (`clampPopup`) mede a posição real do pop-up
    (com `transition: none` temporário, pra pegar a posição final instantânea, não um estado
    ainda em trânsito da animação) e aplica o menor empurrão horizontal necessário via uma nova
    custom property `--popup-clamp-x` (somada a `--popup-tx` dentro do `transform`) — só quando
    o pop-up realmente ultrapassaria a borda (margem de 12px); nos demais casos (a maioria),
    `--popup-clamp-x` fica em `0px` e o pop-up abre pra fora normalmente, sem nenhuma correção.
  - **Dois bugs reais de timing, achados só medindo geometria de verdade (não só olhando o
    resultado)**: (1) a primeira versão religava a `transition` ANTES de aplicar o valor real do
    clamp, pra a correção "entrar animada" — mas isso faz o clamp real também competir com a
    MESMA transição que já estava movendo o pop-up da posição fechada pra aberta, e nesta sessão
    de teste automatizado (pane oculto, que não compõe/pinta frames ativamente — mesma causa-raiz
    de transições "congeladas" já documentada antes neste arquivo) a correção nunca chegava a se
    aplicar de verdade, ficando presa no valor pré-clamp. Corrigido aplicando o clamp real
    também com `transition: none` (a correção entra pronta, sem animação própria — só
    opacidade/escala continuam animando ao abrir, como sempre). (2) Eventos sintéticos
    (`dispatchEvent(new MouseEvent('mouseenter'))`) disparam os *listeners* JS normalmente, mas
    NUNCA ativam o pseudo-seletor `:hover` de verdade — então testar só com eventos sintéticos
    mede a geometria no estado "fechado" (`--popup-scale: 0.94`), não no estado aberto de
    verdade; usar `.click()` real (que ativa `.is-open` via classe JS, não pseudo-classe) foi
    necessário pra validar a versão final com a escala correta (1).
  - Verificado com a mesma bateria de sempre (1280px, 760px, a borda exata do breakpoint 720px, e
    375px mobile), rolando a página de verdade até o mapa ficar `sticky`/pinado (não com
    `window.scrollTo`, instável neste ambiente — `document.scrollingElement.scrollTop` funcionou
    de forma confiável desta vez): os 8 pop-ups abrindo pra fora sem ultrapassar nem a borda
    horizontal nem a vertical da viewport em nenhuma largura, painel único do mobile mostrando o
    conteúdo novo corretamente, `overflow` de página sem mudança em relação ao residual já
    existente (confirmado que o resíduo em 720px não muda com nenhum pop-up aberto — já existia
    no estado fechado, não é causado por esta rodada), `npx astro build` sem erros.
  **Oitava rodada — três correções depois de usar a versão ao vivo**: "preciso deles
  completamente legíveis na superfície", "operacional e financeiro podem abrir pra dentro" e "o
  box de comunicação não abre de primeira".
  - **Bug real de `z-index`, achado só com screenshot de verdade (não com medição de
    geometria)**: `.mapa-times__node-wrap` (o módulo + seu pop-up) nunca tinha `z-index` próprio
    — e QUALQUER elemento com z-index POSITIVO sempre pinta por cima de elementos "auto" numa
    mesma stacking context, não importa a ordem no HTML. Como `.mapa-times__core` (o "363") tem
    `z-index: 1`, ele pintava por CIMA de todo pop-up aberto, cortando o texto ao meio (literalmente
    o "3" do número sobre as letras) — só descoberto tirando um screenshot de verdade do hover
    (medir `getBoundingClientRect()`/`opacity` sozinho não revela QUAL elemento está visualmente
    por cima de qual). Corrigido dando `z-index: 2` a todo `.mapa-times__node-wrap` (sempre acima
    do núcleo) e `z-index: 3` no módulo ativo (`:hover`/`.is-open`, sempre acima de qualquer
    módulo vizinho fechado) — os pop-ups agora nunca ficam atrás do "363" nem de outro módulo.
  - **Operacional e financeiro voltaram a abrir pra dentro**, a pedido explícito ("pro box não
    precisar ficar comprido e dificultar a leitura em uma coluna") — reverte parte da rodada
    anterior. O `max-width: 8rem` que esses dois precisavam (só pra não alcançar o "363" ao abrir
    pra dentro) saiu — com o fix de `z-index` acima, sobrepor o número deixou de ser um problema
    de legibilidade, então os dois voltam à largura normal de 14rem, igual aos outros 6, sem
    precisar ficar altos/estreitos.
  - **"Comunicação não abre de primeira"**: investigado a fundo (inclusive testando hover real via
    mouse, não só eventos sintéticos, que nunca disparam `:hover` de verdade) — o pop-up sempre
    abria normalmente; o que o usuário via como "não abrir" era o próprio bug de `z-index` acima
    (o "363" cobrindo o texto do pop-up de comunicação, o mais próximo do núcleo entre os módulos
    de cima) — resolvido pelo mesmo fix de `z-index`, não precisou de nenhuma correção específica
    pra esse módulo.
  - Verificado com screenshot real (não só geometria) depois do fix: comunicação, operacional e
    financeiro abrindo com texto inteiramente legível por cima do "363", `npx astro build` sem
    erros.
- **A faixa azul de números da Frente 02 foi eliminada — as informações se espalharam pelas
  próprias etapas do esquema visual**, a pedido explícito. Antes, "DRs formados", "DRs ativos" e
  "Estados cobertos" viviam numa faixa de destaque (fundo `--color-primary-dark`) abaixo das 3
  colunas (Diretores Regionais → Formação de 3 meses → Impacto nacional); agora:
  - **"Estados cobertos" (26 de 27) foi pra coluna "Diretores Regionais"** (etapa 1), como um
    numeral em destaque abaixo do parágrafo — reforça "temos DR em 26 dos 27 estados" bem perto
    do contexto sobre quem são os Diretores Regionais. O dado não é mais duplicado em
    `frente-02.md` (`estadosCobertos` saiu de lá) — passou a vir de `numeros.json` (o item
    "estados do Brasil", cujo `nota` já dizia literalmente "estados com Diretores Regionais"),
    mesma fonte única já usada pelas outras duas etapas pra escolas/estudantes.
  - **"DRs ativos" foi pra coluna "Impacto nacional"** (etapa 3), como um terceiro item ao lado de
    escolas parceiras/estudantes impactados — mas continua `[PENDENTE]` (o dado real ainda não
    existe), então `FrenteVisualSteps.astro` ganhou suporte a item pendente: `ImpactItem` aceita
    `numero?` OU `pending?`, e quando pendente o `<PendingNote compact />` substitui o número
    (sem repetir o `texto` ao lado, já que a nota pendente já é autoexplicativa).
  - **"DRs formados" saiu por completo, sem virar item em lugar nenhum** — a pedido explícito e
    com justificativa própria do usuário: o número sozinho passa impressão de erro/inconsistência,
    já que parte de quem se forma nunca chega a aplicar o currículo numa escola. Campo removido de
    `frente-02.md` (`drFormadosPendente`), não é mais lido em lugar nenhum.
  - **Etapa 1 ganhou uma lista de destaque (`itens`), reaproveitando 100% o estilo visual já usado
    na etapa 3** (`.frente-step__impact`, ícone + numeral grande + legenda) — não um componente
    novo, só a mesma lista aplicada numa etapa que antes só tinha parágrafo corrido. Dois ícones
    novos em `Icon.astro` pra isso: `mapa` (pino de localização, pra "estados cobertos") e
    `pessoa` (silhueta simples, pra "DRs ativos") — os únicos dois genuinamente novos desde que a
    lista de ícones foi estabelecida, cada um com uso imediato (nenhum ícone especulativo).
  - **`fields`/`fieldsHighlight` saíram de `FrenteModule.astro` por inteiro** (interface, bloco de
    render, CSS `.frente-module__fields`/`--highlight`) — depois da Frente 02 (o único chamador)
    parar de passar essas props, não sobrou nenhum outro uso no projeto; removido em vez de deixar
    como capacidade morta do componente.
  - Verificado: `frente02Etapa1`/`frente02Etapa3` (computados em `atuacao.astro`) lendo os números
    certos de `numeros.json`, "DRs formados" ausente de qualquer lugar renderizado, a faixa azul
    (`.frente-module__fields`) ausente do DOM, sem overflow horizontal em 1280px/375px, `npx astro
    build` sem erros.
- **"Histórias desta página" reorganizada por hierarquia editorial** (Atuação, as duas
  histórias — Cavalcante/Goiás e Rio Branco/Acre): a pedido explícito. Antes, cada história tinha
  duas citações grandes do mesmo tamanho (abertura + fechamento) e o território repetido como
  `.caption` no topo, sem uma leitura clara de "o que é mais importante primeiro". Nova ordem,
  igual nas duas histórias: retrato (mantido à esquerda) → **uma única citação grande** (maior
  elemento textual da seção, `--text-h2`) → história completa (`--text-body`, cor secundária,
  confortável pra leitura) → autor → cidade/estado. `.caption` com o território no topo saiu por
  completo.
  - **Qual citação virou a grande**: a história A (Cavalcante) tinha duas — `citacaoAbertura`
    ("Eu não tinha um sonho...") e `citacaoFechamento` ("Eles não estão acostumados..."). A
    pedido, `citacaoFechamento` é quem vira a citação grande (é a mais forte, resume o
    "porquê" da história) — `citacaoAbertura` deixou de ser um bloco de destaque próprio e
    passou a viver **dentro** do texto corrido, entre os dois parágrafos de `relato` (onde ela
    faz sentido narrativo: é o que a estudante disse no segundo encontro), com uma classe nova
    `.historia__inline-quote` — mesmo tamanho do corpo, só itálico, bem menor que a citação
    grande, integrada ao fluxo de leitura em vez de interromper com uma segunda citação
    competindo em destaque. A história B (Rio Branco) só tinha uma citação (`citacaoAbertura`,
    "Ele disse que eu era o super-herói favorito...") — essa é quem vira a citação grande lá,
    sem nenhuma citação inline (não existe uma segunda frase pra integrar).
  - **Autoria no rodapé, não mais uma frase corrida**: a antiga `<p class="historia__attribution">`
    ("Relato de X. Território: Y.") virou duas linhas dentro de um `<footer>` — nome (com o
    papel, ex.: "Jean Pereira dos Santos, Diretor Regional", direto do campo `relatoDe` já
    existente) e, na linha de baixo, a cidade/estado. Na história B, que também tem um campo
    `escola` (Dr. Carlos Vasconcelos), esse dado não foi descartado — dobrado dentro da mesma
    segunda linha ("Dr. Carlos Vasconcelos — Rio Branco, Acre") pra manter a hierarquia de só
    duas linhas pedida (autor / cidade-estado) sem perder a informação da escola.
  - Nenhum conteúdo novo foi inventado — a reorganização usa só os campos que já existiam em
    `historia-a-cavalcante.md`/`historia-b-rio-branco.md` (`citacaoAbertura`, `citacaoFechamento`,
    `relato`, `relatoDe`, `territorio`, `escola`), rearranjados.
- **Fotos reais em "03 · Os três movimentos"** (Home, `index.astro`) — as três gavetas
  (Descobrir possibilidades / Entender a si mesmo / Transformar sonho em ação) trocaram o
  `<MediaPlaceholder ratio="4/3">` por fotos reais enviadas por Isabella, já nomeadas por ela
  com o título exato de cada movimento (`Foto Descobrir possibilidades.jpg` etc.) — renomeadas
  pro padrão kebab-case dos outros assets (`movimento-descobrir-possibilidades.jpg`,
  `movimento-entender-a-si-mesmo.jpg`, `movimento-transformar-sonho-em-acao.jpg`, essa última
  sem o acento no nome do arquivo, mesma convenção já usada em `atuacao-hero-grupo.jpg`).
  - **Duas das três fotos são retrato (vertical)**, mas a gaveta espera `4/3` (paisagem) — só a
    primeira (Descobrir possibilidades) já nasceu em `4/3` exato, sem precisar de recorte. Testado
    o mesmo jeito que as fotos de Reconhecimentos (recortes com `sharp` antes de decidir, não só
    aplicar e conferir depois): a terceira (Transformar sonho em ação) precisou de um leve desvio
    pra cima (`object-position: center 15%`, não o centro puro) porque as caras das três crianças
    ficam um pouco acima do centro geométrico da foto original.
    **Segunda rodada, a pedido explícito** ("as fotos foram diminuindo" em relação à primeira):
    a caixa CSS das três fotos já era idêntica em pixels (conferido travando as transições e
    medindo `getBoundingClientRect()` nos três estados, nos dois modos de layout — não havia bug
    de dimensão nenhum), então a causa real era outra: um recorte central simples da segunda foto
    (Entender a si mesmo) sobrava MUITA copa de árvore/céu vazio acima das pessoas — as pessoas
    ocupavam uma fatia bem menor do quadro do que nas outras duas fotos, dando a impressão de
    "menor"/mais distante mesmo com a caixa do mesmo tamanho. Confirmado renderizando as três
    fotos no mesmo tamanho de saída lado a lado antes de decidir o que fazer — não só olhando
    cada uma isolada. Diferente das outras (que só reposicionam a mesma janela de recorte via CSS
    `object-position`), esta precisava também ENCOLHER a janela de recorte (um zoom de verdade,
    que `object-fit`/`object-position` sozinhos não fazem — eles só deslocam o recorte, nunca
    mudam sua largura) — resolvido recortando o ARQUIVO original de vez com `sharp`
    (`movimento-entender-a-si-mesmo.jpg` sobrescrito por um recorte 2100×1575, já exatamente
    4/3, centrado nas pessoas em vez da árvore) em vez de tentar simular isso só com CSS.
  - **Mesmo padrão dos "três movimentos" das outras rodadas**: um array `movementPhotos` no
    frontmatter pareia cada foto (e, só quando existe, seu `object-position`) com o índice
    correspondente de `movements` (a ordem 01/02/03 já é fixa nos dois arrays, então o pareamento
    é só por posição, sem precisar de um campo extra em `home.md`). O `object-position` de cada
    foto, quando definido, vai direto num `style` inline no `<Image>` — não na classe CSS
    compartilhada `.movement-drawer__photo` — pelo mesmo motivo já registrado nas fotos de
    Reconhecimentos: evita que o desvio de uma foto específica vaze pras outras duas.
  - **Mesmo bug/lição de `height: auto` já documentado nas fotos de Reconhecimentos**: a regra
    `.movement-drawer__photo` precisa do `height: auto` explícito antes do `aspect-ratio`, senão
    o atributo HTML `height` do `<img>` gerado por `astro:assets` vence silenciosamente.
  **Décima quarta rodada — as gavetas viraram um baralho de 6 cartas que nascem dos cantos da
  tela e pousam sobrepostas**, a pedido explícito ("cartas se sobrepondo, como um jogo... bem
  mais interativo que as gavetas"). O código das próprias gavetas já carregava um comentário de
  uma tentativa anterior, mais simples, de cards sobrepostos ("ao contrário da tentativa
  anterior... aqui só um texto fica visível de cada vez — não tem como sobrepor") — esta rodada
  reabre essa ideia de propósito, mas de um jeito estruturalmente diferente do que tinha falhado
  antes: em vez de 3 cartas combinando texto+foto (onde dois textos sobrepostos ficavam
  ilegíveis), viraram **6 cartas alternadas** — texto sozinho, depois foto sozinha, 3 vezes —
  então nunca dois blocos de texto competem pelo mesmo espaço visual.
  - **Duas exceções deliberadas, não uma**: antes de implementar, perguntei ao usuário como
    resolver o conflito com "sem arredondamento em lugar nenhum" (mesma pergunta já feita pra
    caixa da Atuação) — resposta: abrir a exceção mesmo ciente do conflito. `border-radius: 1.5rem`
    (valor literal, não `--radius-sm`/`--radius-md`, mesmo motivo já documentado na caixa da
    Atuação). Além disso, cada carta ganhou `box-shadow` — decisão própria, não pedida
    explicitamente, mas necessária pro efeito de "carta física empilhada" pedido: sem sombra,
    retângulos com o mesmo fundo off-white da página se confundiriam entre si e com o body ao
    redor. Diferente do radius, não existe uma regra "sem sombra em lugar nenhum" no site — só
    "botões: sem sombra" (regra de botão, não geral) — então isso não abre uma segunda exceção ao
    mesmo princípio, é só um recurso novo sem precedente anterior nem proibição explícita.
  - **Estrutura de dados**: `movementCards` no frontmatter intercala `movements` (3 itens:
    número/título/texto) com `movementPhotos` (já existente) via `flatMap`, gerando os 6 itens
    na ordem exata pedida (texto, foto, texto, foto, texto, foto) — nenhum conteúdo novo, só
    reorganizado; `movements`/`movementPhotos` continuam as fontes reais.
  - **Mesma arquitetura de scroll das gavetas que substitui** (`.movements__wrap` bem mais alto
    que a viewport + `.movements__cabinet` sticky como "palco", progresso calculado por
    `rect.top` vs. altura rolável) — só a fórmula de "o que fazer com o progresso" mudou: em vez
    de abrir uma gaveta por vez (classe `.is-open`), cada carta recebe sua própria fração do
    progresso total via `localT = clamp(progress*n - i, 0, 1)` — a mesmíssima técnica já usada
    pra desenhar os arcos por etapa no Ciclo de Atuação (`CicloAtuacao.astro`/
    `AtuacaoCicloHero.astro`) — e interpola entre uma posição de partida (fora do palco, num dos
    4 cantos da tela, rotacionada e menor) e uma posição de repouso no leque (pequeno
    deslocamento em rem + rotação, crescente por índice, formando uma diagonal). `z-index`
    cresce com a ordem de chegada — a carta mais recente sempre fica por cima, tanto durante o
    voo quanto depois de pousada — e é exatamente essa também a carta que está "no foco" pra
    leitura naquele trecho do scroll (nunca uma carta antiga tampando a atual).
  - **Contenção de overflow, mesma técnica do hero/caixa da Atuação**: `.movements__cabinet` tem
    `overflow: hidden` — cartas ainda fora de cena usam deslocamentos grandes em `vw`/`vh`
    (`translate(±60vw, ±60vh)`) que ultrapassam de longe o palco, mas por estarem dentro de um
    container com `overflow: hidden`, nunca aumentam `scrollWidth` da página. Verificado nas três
    larguras de sempre (1280px, 640px, mobile 375px) em vários pontos do progresso (0, ~0.3,
    ~0.5, 1): `scrollWidth === clientWidth` em todos, sem overflow horizontal introduzido.
  - **`prefers-reduced-motion`**: mesma filosofia das gavetas que substitui — nunca depender de
    motion pra conteúdo ficar acessível. O script nem entra na lógica de scroll quando
    `motionAllowed` é falso (mesmo *gate* `if (wrap && motionAllowed)` de sempre), então nenhuma
    carta recebe transform/opacity/z-index inline; a media query correspondente derruba
    `.movement-card` pra `position: static` numa pilha vertical simples, sem sombra, em ordem
    normal de documento — texto sempre legível, nunca dependente da animação ter rodado.
  - **Verificado o "meio do caminho" (não só o repouso final)**: numa tela estreita, uma carta
    ainda a caminho (rotacionada, parcialmente fora do eixo) pode temporariamente esbarrar na
    borda do palco — aceitável como quadro de transição (o palco tem `overflow:hidden`, então só
    recorta visualmente, nunca gera scroll), mas testei explicitamente que a posição de REPOUSO
    (`localT=1`, onde a carta passa a maior parte do tempo de leitura) nunca fica cortada, em
    1280px e 375px.
  **Décima quinta rodada — três correções depois de ver o baralho ao vivo** ("amei! só me
  incomoda que os cards não são do mesmo tamanho e a foto da quarta está cortada... no final,
  quero todas alinhadas na horizontal... fundo pontilhado"):
  - **Cartas de tamanho desigual, causa raiz**: a carta-foto tinha `aspect-ratio: 3/4` própria
    (vertical, "carta de baralho") enquanto a carta-texto tinha altura livre (dependente do
    conteúdo) — nunca eram de fato o mesmo tamanho, só pareciam próximas por coincidência de
    conteúdo. Corrigido de vez movendo o `aspect-ratio` pro elemento PAI compartilhado
    (`.movement-card`, a classe base das duas variantes) — agora as 6 cartas, texto ou foto, são
    literalmente a mesma caixa (confirmado via `offsetWidth`/`offsetHeight` idênticos nas 6).
  - **"A foto da quarta está cortada toda errada" — a causa era a proporção 3/4 em si, não uma
    foto específica com bug**: a "quarta carta" (4ª na sequência de 6, índice 3 — a foto do
    movimento "Entender a si mesmo") é `movimento-entender-a-si-mesmo.jpg`, uma foto exatamente
    4:3 (2100×1575) com pessoas espalhadas pelas DUAS bordas laterais da cena (uma de costas de
    blusa lilás à esquerda, um menino de camisa branca à direita — conferido abrindo a foto
    direto). Forçar isso em uma caixa 3:4 (vertical) via `object-fit:cover` cortava quase metade
    da largura pra cada lado, exatamente onde essas duas pessoas estavam — não tinha
    `object-position` que resolvesse isso sem cortar uma das duas. A proporção da carta voltou a
    ser **4:3** (a mesma da maioria das fotos, não mais um "formato de baralho" vertical
    genérico) — com isso, duas das três fotos (`movimento-descobrir-possibilidades.jpg`, exatamente
    4032×3024, e a própria `movimento-entender-a-si-mesmo.jpg`) encaixam SEM NENHUM corte, e a
    terceira (retrato 3:4 de origem) reaproveita o `object-position: center 15%` já calibrado pra
    4:3 desde a época das gavetas — nenhuma foto precisou de recorte novo.
  - **Cartas maiores pra caber o texto sem rolagem**: com a altura agora vindo do `aspect-ratio`
    (não mais do conteúdo), o primeiro teste com `width: min(86vw, 24rem)` deixava ~30–40px de
    texto sobrando por carta (`scrollHeight > clientHeight`, confirmado medindo as 3 cartas de
    texto). Corrigido subindo pra `min(88vw, 27rem)` — mesma proporção 4:3, só uma caixa maior —
    e reconferido: `scrollHeight === clientHeight` nas 3, sem precisar cortar texto, reduzir
    fonte ainda mais, ou depender do `overflow-y:auto` de segurança (que continua ali só como
    rede, não como comportamento esperado).
  - **Fileira horizontal no fim do scroll, fase nova**: o progresso do scroll passou a ter duas
    fases — 75% pra entrada (cantos → leque, igual antes) e os 25% finais pra "abrir a mão": as 6
    cartas saem do leque sobreposto e deslizam pra uma fileira única, sem rotação, todas visíveis
    ao mesmo tempo, na ordem certa (texto/foto/texto/foto/texto/foto). A fileira não usa nenhuma
    largura fixa — a cada frame o script mede a largura real do palco
    (`cabinet.getBoundingClientRect().width`) e da própria carta (`offsetWidth`, imune ao
    `transform: scale()` já aplicado) e calcula um `rowScale` (`min(1, larguraDisponível /
    larguraNecessáriaParaAsSeis)`) — as 6 cartas encolhem o quanto for preciso pra caber lado a
    lado em qualquer largura de tela, inclusive mobile (onde ficam pequenas, mas continuam as 6
    visíveis de uma vez, sem overflow horizontal — verificado em 1280px e 375px). `.movements__wrap`
    cresceu de 270vh pra 360vh pra dar espaço de scroll de verdade a essa fase nova, sem apertar
    a fase de entrada que já existia.
  - **Fundo pontilhado**: `.movements__wrap` ganhou um `radial-gradient` repetido (pontinhos de
    `color-mix(var(--color-text) 22%, transparent)`, grade de 24px) como pedido explícito pra
    "não deixar a seção muito vazia" — não é uma textura nova sem precedente no projeto, é a
    mesma ideia já documentada em Direção visual ("a grade é um elemento gráfico do site... a
    referência mental é planta arquitetônica"), só num vocabulário de pontos em vez de linhas.
  **Décima sexta rodada — quatro ajustes, todos a pedido explícito depois de ver o baralho ao
  vivo**: "quero que os cards sejam mais compridos, como cartas de um baralho mesmo", "quando for
  scrollar, o fundo fique estático e só as cartas se mexem", "no mobile... alinham na vertical",
  "no computador... alinhem mas grandes suficientes pra dar leitura, se necessário pode tirar os
  cards de fotos SOMENTE NO ALINHAMENTO FINAL".
  - **Proporção 5/7, a de uma carta de baralho física de verdade** (~2.5×3.5") — trocou a 4/3
    (paisagem) da rodada anterior, que resolvia o corte das fotos mas não lia como "carta de
    baralho" nenhuma. Isso reintroduz recorte nas duas fotos que antes encaixavam sem cortar
    (`movimento-descobrir-possibilidades.jpg`, `movimento-entender-a-si-mesmo.jpg`) — mas desta
    vez **testado com `sharp` antes de aplicar** (gerando os recortes de verdade num script
    descartável e abrindo o resultado, não só calculando frações): o centro padrão
    (`object-position: center`, sem override nenhum) enquadra bem as duas — inclusive a "quarta
    carta" da rodada anterior, cujo problema real não era "sempre corta errado", era a proporção
    3/4 daquela vez ter sido aplicada sem checar o recorte de verdade primeiro. A terceira foto
    (retrato, já quase na proporção do baralho) segue com o `object-position: center 15%`
    calibrado desde a época das gavetas, agora com efeito quase nulo (sobra pouco recorte
    vertical pra posicionar). Card ganhou `width: min(82vw, 19rem)` (antes 27rem) — mais estreito
    de propósito, porque a mesma largura de antes numa proporção 5/7 resultaria numa carta gigante
    (quase 38rem de altura).
  - **Fundo do pontilhado migrou de `.movements__wrap` pra `.movements__cabinet`**: o wrap rola
    normalmente com a página (é ele quem dá "pista" de rolagem), então seu fundo rolava junto —
    o cabinet é quem fica `position: sticky`, parado na tela enquanto o usuário rola por dentro
    do wrap. Colocando os pontinhos no cabinet, eles ficam literalmente parados durante toda a
    experiência (só voltam a rolar quando o wrap termina e a seção seguinte empurra tudo pra
    cima, comportamento esperado) — só as cartas (posicionadas via JS a cada scroll) se movem por
    cima deles, exatamente o pedido ("o fundo fica estático e só as cartas se mexem").
  - **Alinhamento final: só as 3 cartas de texto, não as 6** — a pedido explícito pro desktop
    ("se necessário pode tirar os cards de fotos... pra dar leitura"), e a mesma regra resolve o
    mobile de graça, sem precisar de um caminho de código separado por breakpoint: 3 cartas cabem
    muito mais confortavelmente que 6, empilhadas OU em fileira. As 3 cartas-foto simplesmente
    desaparecem (`opacity` interpolando pra 0) durante essa fase final, congeladas na própria
    posição do leque enquanto isso — nunca chegam a se mover pra lugar nenhum, só somem.
    Resultado prático: no teste em 1280px as 3 cartas de texto finais ficam no tamanho NATURAL
    (nenhum encolhimento precisou ser aplicado, `finalScale` calculado em 1), bem legíveis.
  - **Fileira (desktop) vira coluna (mobile), mesmo código, um único `if`**: `isRow =
    matchMedia('(min-width: 720px)')` (o mesmo breakpoint de duas colunas já usado em outros
    componentes do site) decide se o "slot" de cada carta de texto se aplica no eixo X (fileira,
    lado a lado) ou no eixo Y (coluna, empilhada) — e se a largura ou a altura real do palco
    (`cabinet.getBoundingClientRect()`) é a medida usada pra calcular `finalScale`. Nenhuma
    duplicação de fórmula: é a mesma conta (encolher o quanto for preciso pra caber) só trocando
    qual par largura/altura entra nela.
  - Verificado nas três larguras de sempre (1280px, 720px como fronteira, 375px mobile): sem
    overflow horizontal em nenhuma (`scrollWidth === clientWidth`), as cartas de texto sem
    `scrollHeight > clientHeight` (nenhum corte/rolagem de texto), fotos chegando a opacity 0 no
    fim do progresso, e as 3 cartas de texto no tamanho natural no desktop (sem encolher) contra
    um tamanho bem menor mas ainda legível no mobile (colunas empilhadas, ~139×195px de carta).
  **Décima sétima rodada — a "quarta carta" de novo, mesma foto, causa diferente desta vez**: o
  recorte central (`object-position: center`, testado e aprovado na rodada anterior pra proporção
  5/7) deixava passar uma fatia solta do ombro lilás da pessoa à esquerda da cena — só um pedaço
  do ombro, sem o resto do braço/corpo, entrando pela borda esquerda do card. Matematicamente era
  o recorte "certo" (o mesmo que eu tinha conferido com `sharp` antes de aplicar), mas na prática
  lê como corte errado — um pedaço de corpo órfão na borda é visualmente pior do que excluir a
  pessoa por completo. Corrigido com `object-position: 'right center'` só nessa foto
  (`movementPhotos[1].position`, mesmo mecanismo já usado pra `movimento-transformar-sonho-em-acao.jpg`)
  — desloca o recorte todo pra direita, excluindo o ombro lilás por inteiro e centralizando no
  garoto de camiseta branca (o mais engajado/em foco da cena, com o logo "Estado de Goiás"
  legível), mantendo os outros dois rostos visíveis ao fundo. Testado com `sharp` de novo antes
  de aplicar (`entender2-right.jpg`, recorte real gerado e aberto, não só a conta) — dessa vez
  comparando várias opções de deslocamento (centro, 60%, 75%, 100% à direita) e escolhendo a
  única que não deixa nenhum pedaço de corpo cortado pela metade em nenhuma borda. Lição pro
  próximo recorte problemático: não basta o recorte estar matematicamente correto pra proporção
  desejada — também precisa não deixar fragmentos de pessoas/objetos entrando pela borda, o que só
  se vê olhando o resultado renderizado, não calculando frações.
- **Retrato real do depoimento em destaque (Kauan)** — `QuoteBlock.astro` ganhou uma prop
  `portrait?: ImageMetadata` opcional: quando presente, renderiza `<Image>` no lugar do
  `<MediaPlaceholder kind="Retrato">`; quando ausente (todo o resto dos usos do componente),
  cai de volta pro placeholder de sempre — igual ao padrão já usado em `FrenteModule`/
  `reconhecimentosBands`. Só a chamada da Home (`<QuoteBlock portrait={kauanImage} ...>`) passa
  a prop; a citação solta da Diretoria Regional em Faça Parte (`withPortrait={false}`) nem entra
  nesse caminho de código.
  - **Bug real na foto original, achado antes de decidir qualquer recorte**: `Kauan.jpg` tem
    `width:4080, height:3060` nos bytes crus do arquivo (paisagem), mas a orientação EXIF é `6`
    (girar 90°) — a foto de verdade, como qualquer visualizador (inclusive o próprio `Read`)
    mostra, é retrato (3060×4080). `sharp(...).metadata()` sozinho reporta as dimensões CRUAS,
    ignorando a orientação — e encadear `.rotate().metadata()` também engana, porque
    `.metadata()` lê os metadados do arquivo de ENTRADA, não o resultado de operações ainda só
    enfileiradas no pipeline (`.rotate()`, `.extract()` etc. só se aplicam de verdade ao
    processar/salvar, ex. `.toBuffer()`/`.toFile()`). Verificado gerando de fato um buffer
    rotacionado e checando as dimensões DAQUELE resultado. Qualquer recorte feito com `sharp`
    numa foto de celular deveria sempre checar `metadata().orientation` antes de calcular
    coordenadas de `extract()` — coordenadas calculadas contra as dimensões cruas erradas dariam
    um recorte deslocado/de lado.
  - **Foto candidata (retrato solto, plano fechado) não existe — é uma foto de ação em sala de
    aula**, Kauan de corpo inteiro e pequeno no quadro, alunos de costas em primeiro plano. Longe
    o bastante do enquadramento de retrato que `ratio:1/1` pede, então — mesmo padrão já usado em
    "Entender a si mesmo" — não dava pra resolver só com `object-position` (que reposiciona a
    janela de recorte, mas nunca encolhe a largura dela); precisou de um recorte de verdade.
    `Kauan.jpg` foi processado com `sharp` (`.rotate()` pra aplicar a orientação EXIF antes de
    tudo, depois `.extract()` num quadrado 1100×1100 centrado no rosto) e salvo como
    `kauan-retrato.jpg` — já corretamente orientado e sem a tag EXIF de rotação (então nenhum
    visualizador vai girá-lo de novo por engano). O arquivo original (`Kauan.jpg`) foi removido
    depois de gerado o recorte final, mesmo padrão já usado nas outras fotos desta sessão (não
    manter dois arquivos pro mesmo conteúdo).
- **Três pendências da Home finalizadas** ("Faça parte." → "Vamos juntos!", frase de doação, e a
  faixa de "Parceiros e apoiadores"), a pedido explícito de um briefing formal listando as três
  trocas e proibindo redesenhar qualquer seção — só substituir conteúdo provisório por final,
  mantendo estrutura/layout/tipografia/cores intactos.
  - **Título e frase de doação do CTA final** (`ctaFinal` em `home.md`): `title` virou `'Vamos
    juntos!'` (era `'Faça parte.'`, só o texto — `<h2>` e CSS de `.cta-final h2` intocados). O
    campo `pending` (`'[PENDENTE: frase de doação com o custo real por turma]'`) foi renomeado
    pra `donationNote` com o texto final ("Doe qualquer valor via Pix ou faça uma doação
    recorrente a partir de R$ 20.") — consistente com o menor valor sugerido real já existente
    em `/conteudo/faca-parte.md` (`valores[0].valor: 'R$ 20'`), não um número inventado.
    `<PendingNote text={ctaFinal.pending} />` virou um `<p class="cta-final__donation-note">`
    comum (peso 600 só pra destacar um pouco do parágrafo acima, sem virar uma segunda frase de
    peso igual) — a marcação "Pendente" (chip amarelo + borda tracejada) não fazia mais sentido
    pra um dado que passou a ser final.
  - **Faixa "Parceiros e apoiadores" — primeira vez que a Home tem um logo de terceiro
    de verdade** (`reconhecimentosPreview.partnersPending` → `partnersKicker` + `partners[]` em
    `home.md`, dentro da mesma seção "06 · Reconhecimentos" onde a pendência já vivia — não uma
    seção nova nem um reposicionamento). Logo do INGOH (Instituto Goiano de Oncologia e
    Hematologia) já estava na pasta do projeto (`src/assets/images/INGOH-MARCA.webp`, 1507×867,
    com canal alfa) — nenhum logo foi desenhado nem inventado. Mesmo padrão de "nome → asset"
    já usado pra foto da Milanna em `faca-parte.astro`: um dicionário `partnerLogos: Record<string,
    ImageMetadata>` no frontmatter de `index.astro` casa o `nome` de cada item de
    `partners[]` com o arquivo importado — `partners.map()` só renderiza um `<div
    class="partners__item">` quando existe uma entrada correspondente no dicionário, então a
    estrutura já está pronta pra um segundo/terceiro parceiro no futuro (basta importar o
    arquivo, adicionar ao dicionário e ao array em `home.md`) sem nenhum placeholder ou nome
    inventado aparecendo antes disso.
    - **Sem moldura de foto** (a regra de "toda imagem leva moldura reta" em Direção visual é
      pra fotografia/retrato — um logo de marca de terceiro não é tratado como foto). Só um
      divisor de 1px `var(--color-border)` acima da faixa (mesma linguagem de "grade como
      elemento gráfico" do site) separando dos "Reconhecimentos" logo acima, e um kicker
      `.kicker--muted` (cinza, não a cor primária) — não é uma seção numerada nova, só um rótulo
      discreto.
    - **Altura fixa, largura livre** (`.partners__logo { height: clamp(...); width: auto; }`) —
      o logo mantém a proporção original sem distorção, e qualquer parceiro futuro com uma
      proporção diferente (quadrado, vertical) fica na mesma escala visual sem precisar de CSS
      por parceiro. `width: auto` explícito evita o mesmo bug de sempre (o atributo HTML
      `width` que `astro:assets` embute no `<img>` vencendo silenciosamente).
    - Verificado que nenhuma das três mudanças introduziu overflow horizontal
      (`scrollWidth === clientWidth`) em 1280px e 375px, e que os `PendingNote` que sobraram na
      Home (`numbersNote` e os dois do rodapé — contato de imprensa/pessoa responsável) são
      pendências reais e diferentes, fora do escopo deste pedido — não removidos.
  **Segunda rodada — QR Code real de Pix, em dois lugares**, a pedido explícito ("ele está na
  pasta" — `src/assets/images/QR_code.jpg`, 408×408, enviado por Isabella, nunca usado até
  agora):
  - **No espaço que já existia** (`faca-parte.astro`, seção "Doação", `<figure class="pix-qr">`):
    o `<MediaPlaceholder kind="QR Code">` virou um `<Image>` real dentro de um
    `.pix-qr__frame` (moldura reta de 1px `var(--color-border)`, mesma regra de qualquer imagem
    do site, + um respiro de padding em volta do código — sem folga, a borda encostaria direto
    no próprio QR, o que pode atrapalhar alguns leitores de código). Layout/proporção idênticos
    ao placeholder que ele substituiu (`ratio 1/1`, mesma coluna de `.pix-row`) — nada de
    estrutura mudou, só o conteúdo. `doacao.qrPendente` (`'[PENDENTE: gerar o QR Code real...]'`)
    saiu de `faca-parte.md` e o `<PendingNote>` correspondente saiu do template — mesmo padrão
    de sempre (remover a pendência quando o dado vira real, não deixar campo morto no conteúdo).
  - **Novo, na faixa "Vamos juntos!" da Home** (`index.astro`, `.cta-final`), a pedido explícito
    de ficar "próximo ao texto de doação... sem prejudicar a hierarquia" dos dois botões (Doar
    agora / Quero ser voluntário). Decisão de tamanho: o QR fica pequeno de propósito (`4.5rem`,
    72px renderizado) e sempre ANTES dos botões na ordem do documento — os botões continuam
    sendo o maior elemento clicável da seção (152–243px de largura, só um pouco menores que a
    versão sem QR), o QR é só um atalho complementar. `.cta-final__pix` põe a frase de doação e
    o QR lado a lado (`flex-wrap`, empilha no mobile) — mesma imagem importada em `index.astro` e
    `faca-parte.astro` via caminhos de import separados (não um componente novo só pra isso, o
    padrão de moldura+`<Image>` já é simples o bastante pras duas ocorrências).
    - **Moldura em `--color-text`, não `--color-border`** — única diferença de tratamento entre
      as duas ocorrências: `.cta-final` tem fundo `--color-accent` (amarelo), e o cinza-claro
      padrão de `--color-border` quase não contrasta contra amarelo. Como o QR em si já tem
      fundo branco embutido (contrasta sozinho contra o amarelo), a moldura só precisava ficar
      visível o bastante pra ler como "moldura", não pra garantir legibilidade do código — daí
      `var(--color-text)` (escuro, alto contraste em qualquer fundo claro/amarelo) em vez de
      inventar um token novo.
    - Verificado geometricamente (`getBoundingClientRect()`) que os dois botões mantêm a largura
      cheia de sempre com o QR presente, e que nenhuma das duas páginas ganhou overflow
      horizontal em 1280px/375px.
  **Terceira rodada — três ajustes finos no destaque do Prêmio LED**, a pedido explícito depois
  de ver a versão ao vivo:
  - **Título "Prêmio LED — Luz na Educação" quebrando sem necessidade**: a causa real não era
    "o texto é grande demais" — era um `max-width: 26rem` (416px) herdado sem checar contra a
    largura de verdade do texto em `--text-h2`. Medido com `Range.getBoundingClientRect()` (não
    estimado): a `<h2>` precisa de ~564px numa linha só a 40px de fonte, quase 150px a mais do
    que o `max-width` permitia — por isso quebrava mesmo em telas largas com espaço de sobra.
    Trocado por um `font-size` próprio (`clamp(1.375rem, 1rem + 1.75vw, 2.5rem)`, calculado e
    depois AJUSTADO empiricamente — a primeira tentativa matemática ainda deixava faltar ~6px
    aos 375px de largura, corrigido baixando o piso do clamp) que cabe numa linha só a partir de
    375px (a largura mobile de referência do projeto) sem `white-space: nowrap` — se uma tela
    ainda mais estreita não couber, o texto quebra normalmente (2 linhas) em vez de estourar a
    página; mais seguro que forçar nowrap a qualquer custo. Verificado nas três larguras de
    sempre (1280px, 768px, 375px): `offsetHeight ≈ lineHeight` (uma linha só) nas três, sem
    overflow horizontal.
  - **Frase "Uma história que mostra por que o Tocando em Frente existe." removida por completo**
    — a pedido explícito ("deixando a seção muito carregada de texto"). Saiu o parágrafo
    `.led-feature__chamada` do template, a regra CSS correspondente, e o campo `ledChamada` de
    `home.md` (não deixado como conteúdo órfão/sem uso — como era uma frase só, sem outro
    propósito além dessa exibição, remover de vez fez mais sentido do que manter um campo morto
    no conteúdo). O texto agora vai direto de "Fundação Roberto Marinho · Rede Globo" pro
    parágrafo institucional (`premioLed.texto`, de `premios.json`).
  - **Thumbnail do vídeo trocada pelo frame real de divisão Nova York/Piauí** — a pedido
    explícito de usar "o frame do próprio vídeo em que a imagem aparece dividida entre Nova York
    e Piauí", não uma capa nova. Sem o arquivo `ffmpeg` disponível de novo neste momento,
    reinstalado `ffmpeg-static` temporariamente (mesmo padrão de sempre: `npm install --no-save`,
    confirmado sem rastro em `package.json`/lockfile depois). Gerado um contact sheet (grade de
    miniaturas, 1 frame a cada 4s do vídeo inteiro, via filtro `tile` do ffmpeg) pra varrer os
    ~4min50s de vídeo de uma vez em vez de adivinhar o tempo — localizado visualmente o
    split-screen exato ("NOVA YORK" à esquerda sobre o rio/skyline, "PIAUÍ" à direita sobre a
    ponte de Teresina) por volta dos 144s, depois refinado com extrações frame a frame (a cada
    0.5–1s) ao redor desse ponto pra pegar a versão mais nítida e bem composta (barcos visíveis
    do lado de Nova York, motociclistas visíveis atravessando a ponte do lado do Piauí).
    Substituiu `premio-led-video-poster.jpg` (mesmo nome de arquivo — o antigo, de outro momento
    do vídeo, saiu de vez, não ficou como órfão). Dimensões 1920×1080, exatamente 16:9 — mesma
    proporção do vídeo, então nenhuma distorção nem letterbox no player.
    - **Nota transparente sobre "não adicionar texto sobre a imagem"**: o frame escolhido tem
      "NOVA YORK" e "PIAUÍ" como texto gravado NA PRÓPRIA edição do vídeo (não é algo que eu
      sobrepus) — é impossível mostrar "a divisão visual entre Nova York e Piauí" pedida sem
      capturar exatamente esse quadro, já que é esse rótulo que transforma duas fotos soltas
      numa composição de divisão reconhecível. Nenhum texto foi adicionado por cima da imagem
      além do que já existia no vídeo original.
- **CTA final ("Vamos juntos!") reorganizado em duas áreas — texto à esquerda, ações à
  direita**, a pedido explícito ("não como vários elementos adicionados para preencher espaço").
  Antes, só o `<h2>` ficava na coluna esquerda do grid de 12 colunas — texto, frase de doação,
  QR e os dois botões viviam todos empilhados na coluna direita (`.cta-final__body`), sem
  relação clara entre "o que fica onde". Reestruturado pra bater com a leitura pedida
  (`Vamos juntos!` → frase → botões → QR):
  - **Duas frases de doação viraram uma só** — `ctaFinal.text` (institucional, sobre
    voluntariado) e `ctaFinal.donationNote` (Pix/valor mínimo, de uma rodada anterior) foram
    substituídas por um único parágrafo com o texto exato pedido ("Você pode fazer parte de
    diferentes formas: doe qualquer valor via Pix, faça uma doação recorrente a partir de R$ 20
    ou doe o seu tempo como voluntário.") — `donationNote` saiu de `home.md` por completo (o
    conteúdo que ela carregava já está dentro da nova frase, não sobrou nada órfão pra manter).
  - **`.cta-final__intro`** (título + parágrafo, `max-width: 30rem` — calibrado pra renderizar
    em ~2–3 linhas nos tamanhos de tela mais comuns, "equilibrado com o título" como pedido) e
    **`.cta-final__actions-col`** (botões em cima, QR embaixo, um `flex-direction:column`) — as
    duas colunas do grid de 12 (span 6 cada, `align-items:center` entre elas, igual antes). No
    mobile (abaixo de 720px, mesmo breakpoint do resto do site) o grid vira uma coluna só e a
    ordem do documento já entrega exatamente a sequência pedida (título → frase → botões → QR)
    sem precisar de nenhum CSS de reordenação.
  - **QR sem moldura nenhuma, pedido explícito e repetido três vezes** ("não colocar borda
    preta", "não criar moldura preta", "não colocar dentro de um quadrado com contorno") — a
    `.cta-final__qr-frame` com `border: 1px solid var(--color-text)` da rodada anterior foi
    substituída por `.cta-final__qr-backdrop`, só um `background: var(--color-bg)` (o "fundo
    branco simples" que o próprio pedido permite como exceção) sem nenhum `border`/`box-shadow`.
    Também cresceu bastante (de 4.5rem/72px pra `min(12rem, 45vw)`, ~192px) — antes dividia
    espaço com a frase de doação ao lado; agora tem a coluna inteira só pra si, então pode ficar
    "um pouco maior e mais fácil de escanear" como pedido, sem espremer mais nada.
  - **Legenda do QR trocou de frase longa pra rótulo curto** — "Aponte a câmera para doar via
    Pix" virou apenas "Doe via Pix" (texto exato pedido), agora como campo de conteúdo
    (`ctaFinal.qrLabel` em `home.md`) em vez de string hardcoded — mantém consistência com o
    resto de `ctaFinal`, que já é todo orientado a conteúdo.
  - Verificado nas três larguras de sempre (1280px, 1000px, 375px): sem overflow horizontal
    (`scrollWidth === clientWidth`), o backdrop do QR sem `border`/`box-shadow`
    (`getComputedStyle` confirmando `border: 0px none`), os dois botões com os labels/estilos
    originais intactos, e a ordem de leitura no mobile batendo exatamente com a pedida.
  **Vigésima primeira rodada — botões com destino externo real, QR virou bloco horizontal com
  o texto ao lado, e a faixa ficou mais compacta**, a pedido explícito depois de ver a versão de
  duas colunas ao vivo:
  - **Os dois botões passaram a apontar pra fora do site**: `primaryLabel` mudou de "Doar agora"
    pra "Doações recorrentes" e `primaryHref` foi de `/faca-parte#doacao` (âncora interna) pra
    `https://grifa.me/instituicao/tocando-em-frente` (Grifa, plataforma de doação recorrente já
    escolhida pela organização); `secondaryHref` (o botão "Quero ser voluntário", texto mantido)
    foi de `/faca-parte#voluntariado` pra `https://forms.gle/5s23VZe5SaextSQY7` (formulário de
    inscrição já existente). Os dois ganharam `target="_blank" rel="noopener noreferrer"` — mesmo
    padrão já usado em qualquer outro link externo do site (ex.: os CTAs de doação em
    `faca-parte.astro`) — já que agora levam pra fora do domínio, diferente de antes.
  - **QR + texto viram um bloco horizontal (`[ QR ] texto`), não mais QR com legenda embaixo** —
    pedido explícito e literal, com o texto verticalmente centralizado contra o QR.
    `.cta-final__qr` trocou de `flex-direction:column` pra uma linha (`display:flex;
    align-items:center`) — o `align-items:center` sozinho já resolve a centralização vertical
    pedida, sem precisar calcular nenhum deslocamento manual. `qrLabel` (rótulo curto "Doe via
    Pix", da rodada anterior) foi substituído por `qrText`, um campo novo com a frase sugerida
    quase verbatim ("Aponte a câmera para fazer uma doação via Pix, de qualquer valor.") — troca
    de campo, não adição, pra não deixar `qrLabel` órfão em `home.md`. O elemento também virou
    `<p>` (frase completa, não mais um rótulo curto tipo `<span>`).
  - **QR encolhido pra caber ao lado do texto, moldura continua sem borda** — como o texto
    agora divide espaço com o QR na mesma linha (antes tinha a coluna inteira pra si, da rodada
    anterior), `.cta-final__qr-image` voltou a encolher, de `min(12rem, 45vw)` pra
    `min(9rem, 34vw)`; `.cta-final__qr-backdrop` ganhou `flex: none` (evita que o flex row
    encolha o QR pra dar lugar ao texto) e `.cta-final__qr-caption` ganhou `max-width: 18rem`
    (controla onde o texto quebra linha ao lado do QR). Nenhuma borda/moldura foi reintroduzida —
    o backdrop continua só `background: var(--color-bg)`, mesma exceção documentada na rodada
    anterior, confirmado de novo via `getComputedStyle` (`border: 0px none`).
  - **Faixa amarela compactada** — pedido explícito de "eliminar o espaço vertical que ficou
    sobrando" sem reduzir demais. `.cta-final` ganhou um `padding-block: clamp(2.5rem, 2rem +
    2.5vw, 4rem)` próprio (menor que o respiro genérico de `section`, até 6.5rem, que sobrava
    espaço vazio agora que o conteúdo já está mais organizado em duas colunas) e o `gap` de
    `.cta-final__actions-col` (entre os botões e o QR) caiu de `2.25rem` pra `1.75rem` — os dois
    ajustes juntos reduzem a altura da seção sem remover nenhum elemento nem apertar a leitura.
  - Verificado nas três larguras de sempre (1280px, 1000px, 375px): sem overflow horizontal em
    nenhuma (`scrollWidth === clientWidth`); no desktop (1000px), o centro vertical da imagem do
    QR e do texto ao lado batem exatamente (`centerY` idêntico nos dois, via
    `getBoundingClientRect()`); os dois botões com os `href`/`target="_blank"` corretos; no
    mobile (375px), a legenda ao lado do QR quebra em 3 linhas curtas sem cortar nem sobrepor
    nada, e a ordem de leitura continua título → frase → botões → QR, como já era.
- **Watson, Prêmio LED e ONU viraram reconhecimentos audiovisuais na página de Reconhecimentos**
  (`reconhecimentos.astro`, seção "Destaques"), a pedido explícito de reaproveitar exatamente o
  mesmo padrão de vídeo já usado no Prêmio LED da Home (`VideoPlayer.astro`) — sem alterar
  estrutura, cores, tipografia ou conteúdo dos quatro cards da grade 2×2, só a mídia de três
  deles (LED, Watson e, numa segunda mensagem do mesmo pedido — "colocar o da ONU tb, já está na
  pasta" —, também a ONU; só The Wall continua com `<Image>`, sem vídeo disponível pra ela).
  - **Três arquivos de vídeo, achados na pasta do projeto, um de cada vez**: o vídeo do Watson
    (`2023 - 2024 Western Union Foundation Fellowship Summit - crowdcast - ....mp4`, já H.264/
    AAC 1920×1080, mas 340MB), "LED Inspira [PT-ENG].mov" (HEVC 2560×1440, 263MB — HEVC tem o
    mesmo problema de suporte já documentado pro vídeo da premiação na Home: não toca de forma
    confiável fora do Safari) e "ONU [compactado].mov" (já H.264/AAC 1920×1080, 69MB, bitrate
    baixo). Sem `ffmpeg` disponível de novo, reinstalado `ffmpeg-static` temporariamente (mesmo
    padrão de sempre: `npm install --no-save`, removido com `npm uninstall` ao final de cada
    leva, confirmado sem rastro em `package.json`/lockfile).
  - **Recodificados pro mesmo padrão do vídeo da Home** (`libx264 -crf 23 -movflags +faststart`,
    AAC 128kb/s) — Watson e ONU mantiveram 1920×1080 (já estavam nessa resolução); o LED Inspira
    foi reescalado de 2560×1440 pra 1920×1080 (`scale=1920:-2`, preserva os 16:9 exatos).
    Resultado: Watson caiu de 340MB pra **28MB** (é majoritariamente uma gravação de tela de
    apresentação, muito compressível — bitrate médio final de só 608kb/s); LED Inspira caiu de
    263MB pra **44MB**; ONU foi de 69MB pra **85MB** (o único que cresceu — o arquivo original já
    vinha com um bitrate bem baixo/muito comprimido, ~1,9Mbps, então recodificar no CRF fixo usado
    pros outros dois puxou a qualidade/bitrate pra cima em vez de reduzir; resultado ainda
    perfeitamente aceitável pra web, só não houve ganho de tamanho neste caso específico). Os três
    arquivos originais (dois `.mov`, um `.mp4`, em `src/assets/images/`) foram apagados depois de
    gerados os derivados finais — mesmo padrão de sempre, nunca manter o arquivo bruto ao lado do
    resultado otimizado.
  - **Bug de ambiente, não de vídeo, achado na conversão da ONU**: a primeira tentativa rodou o
    `ffmpeg` em background e, ao checar o arquivo de saída logo em seguida, `ffprobe` acusou
    `"moov atom not found"` — parecia arquivo corrompido, mas na verdade o processo ainda estava
    ativamente codificando (confirmado com `Get-Process ffmpeg` via PowerShell, CPU subindo) e
    `-movflags +faststart` só escreve o átomo `moov` no fechamento do arquivo, no final da
    codificação. Um primeiro `kill -0 <pid>` (Bash/Git Bash) reportou falsamente que o processo
    já tinha terminado — não confiável pra checar um PID nativo do Windows a partir do Git Bash;
    trocado por um polling via PowerShell (`Get-Process -Id <pid>`), que só retornou depois do
    processo de verdade encerrar. Lição: neste ambiente, nunca inferir que um `ffmpeg` em
    background terminou só pela ausência de crescimento momentâneo do arquivo ou por um `kill -0`
    do Bash — checar o processo nativo (PowerShell) ou esperar a notificação de conclusão da
    própria tarefa em background antes de rodar `ffprobe` no resultado.
  - **Arquivos finais em `public/videos/`** (`watson-institute-summit.mp4`,
    `premio-led-inspira.mp4`, `onu-discurso.mp4`), fora de `astro:assets` — mesmo padrão já
    estabelecido pro vídeo da premiação na Home (`premio-led-luz-na-educacao.mp4`, que continua
    intocado e é um vídeo diferente: aquele é a cobertura da cerimônia de premiação, este "LED
    Inspira" é outro vídeo).
  - **Nenhuma mudança no componente `VideoPlayer.astro`** — reaproveitado tal como já existia
    (`src`/`poster`/`posterAlt`/`title`/`ratio`), incluindo a capa antes do play, `preload="none"`
    (zero bytes do vídeo antes do clique), `object-fit:contain` (proporção original preservada) e
    controles nativos só depois do clique — mesmo comportamento exato já documentado na Home.
  - **Capas reaproveitadas das fotos que os vídeos substituíram, não extraídas de novo do
    vídeo**: `premioLedImage` (`premio-led-equipe.jpg`), `watsonImage`
    (`watson-summit-slide.png`) e `onuImage` (`onu-discurso.png`) viraram os posters dos três
    vídeos — as três já eram fotos reais, já testadas e recortadas em 16/9 pra esses mesmos
    cards. Diferente do vídeo da premiação na Home (onde não existia nenhuma foto candidata e um
    frame precisou ser extraído do próprio vídeo com `ffmpeg`/`sharp`), aqui já havia material
    real e adequado — extrair um frame novo seria trabalho redundante sem ganho.
  - **Nova classe `.destaque-card__media`** (wrapper `<div>` em volta do `<VideoPlayer>`) —
    `VideoPlayer` renderiza um `<div class="video-player">`, não um `<img>`, então não dava pra
    só trocar a classe `destaque-card__photo` nele; a nova regra
    (`.destaque-card__media :global(.video-player) { width:100%; height:auto }`) replica o mesmo
    resultado visual (100% da largura do card, altura pela proporção) que `.destaque-card__photo`
    já dava — confirmado medindo `getBoundingClientRect()`: os quatro cards (1 foto + 3 vídeo) têm
    exatamente a mesma largura de mídia e a mesma proporção 16/9 no grid 2×2. Nenhuma borda nova
    foi adicionada — o `VideoPlayer` já é reto e sem sombra por padrão (mesma regra "sem
    arredondamento em lugar nenhum" já respeitada por ele desde a Home).
  - **Links "Assistir →" do Watson e da ONU removidos** (`watsonSummit.link`, um link pra uma
    cópia do mesmo vídeo no Google Drive; e o `link` do item "ONU — Web TV" em `midia.json`, pra
    UN Web TV) — decisão própria, não pedida item por item: como os vídeos agora tocam direto no
    site, manter um link "Assistir" que redireciona pra outra plataforma pra ver o MESMO conteúdo
    contradiria o pedido explícito de "não redirecionar para... qualquer outra plataforma". Os
    dois campos continuam intactos nos respectivos JSONs (dado real, só sem uso agora) — mesmo
    padrão já usado noutros campos que ficam órfãos depois de mudança de apresentação. A variável
    `onu` (que só existia pra ler esse `.link`) saiu do frontmatter de `reconhecimentos.astro` por
    ficar sem nenhum uso; o filtro que exclui "ONU — Web TV" da tabela de mídia (`midiaRows`)
    continua igual, não dependia dessa variável. A nota de contexto da ONU (`notaMinuto`, ex.:
    "Discurso a partir do minuto X") foi mantida — não é um link, é conteúdo real.
  - Verificado: os três vídeos tocam de verdade ao clicar (`video.paused === false`,
    `currentTime` avançando em todos simultaneamente, `controls` ligado só depois do clique,
    `videoWidth/Height` 1920×1080 nos três); nas três larguras de sempre (1280px, 375px, e a
    largura padrão do pane) nenhum overflow horizontal (`scrollWidth === clientWidth`); os quatro
    cards da grade (LED, Watson e ONU em vídeo, The Wall em foto) com largura de mídia e
    proporção 16/9 idênticas; `npx astro build` completo sem erros; nenhuma outra seção da página
    (mídia/ticker, imprensa, transparência) nem a Home foi tocada.
- **Vigésima segunda rodada — a prévia de Reconhecimentos da Home ganhou um segundo destaque (a
  ONU), e o LED perdeu o título duplicado**, a pedido explícito de três ajustes: (1) remover o
  "Prêmio LED" que aparecia grande, fora/acima do card; (2) dentro do card, a legenda
  "Reconhecimento · 2024" virar só "2024"; (3) adicionar um segundo card azul, no mesmo modelo do
  LED, com o reconhecimento da ONU que já existe em `/reconhecimentos`.
  - **`.reconhecimentos-preview__led-title` (o `<h2>` com o nome do prêmio, acima do card) saiu
    por completo** — a introdução da seção voltou a ser só o kicker ("06 · Reconhecimentos"), e o
    nome de cada reconhecimento passou a existir só uma vez, dentro do próprio card (`h3`) — sem
    a duplicação "manchete grande + legenda pequena dentro" que a décima oitava rodada tinha
    introduzido de propósito (documentada acima) e que esta rodada reverte, a pedido explícito.
  - **Kicker do card**: `"Reconhecimento · 2024"` (string fixa) virou `{premioLed.ano}` — mostra
    só o ano, lido de `premios.json` (não mais hardcoded), mesmo padrão de "nunca duplicar dado
    que já existe em `/conteudo/`" usado no resto do site.
  - **Segundo card, ONU, no mesmo modelo exato do LED**: mesma estrutura
    (`reconhecimentos-band reconhecimentos-band--media-first`, vídeo à esquerda/texto à direita
    no desktop, fundo `--color-primary-dark`, texto `--color-accent`), reaproveitando os dados que
    já existem pra essa seção em `/reconhecimentos` — `destaques.onu` de
    `conteudo/reconhecimentos/reconhecimentos.md` (`titulo`/`ano`/`instituicao`/`texto`/
    `notaMinuto`), o vídeo `/videos/onu-discurso.mp4` (já recodificado numa rodada anterior) e a
    capa `onuImage` (`onu-discurso.png`) — nenhum dado novo inventado, só importado de novo em
    `index.astro` (`import { frontmatter as reconhecimentosContent } from
    '../../conteudo/reconhecimentos/reconhecimentos.md'`), mesmo arquivo que `reconhecimentos.astro`
    já lê. A `notaMinuto` ("Discurso a partir de 1:44:00.") foi incluída como uma legenda pequena
    extra dentro do card — o LED tem um elemento opcional equivalente nesse mesmo lugar (o link
    "Ver cobertura no Jornal Nacional →"); a ONU não tem link, mas tem essa nota de contexto, então
    ocupa o mesmo "slot" do card em vez de descartar um dado real que já existe.
  - **Classe `.led-feature` renomeada para `.reconhecimento-destaque`** (e `.led-feature__texto`
    para `.reconhecimento-destaque__texto`) — como agora dois cards (não só o LED) compartilham
    esse ajuste de tipografia (título em `--text-h3`, não `--text-h2`, já que não existe mais
    nenhum título maior fora do card competindo com ele), o nome específico do LED não fazia mais
    sentido; nova regra `.reconhecimento-destaque + .reconhecimento-destaque` dá o espaçamento
    vertical entre os dois cards empilhados.
  - Verificado: os dois cards renderizam com o mesmo fundo azul (`rgb(31, 68, 96)` =
    `--color-primary-dark`) e o mesmo kicker amarelo mostrando só o ano; o título fora do card
    não existe mais no DOM; sem overflow horizontal em 1280px nem 375px
    (`scrollWidth === clientWidth`); `npx astro build` completo sem erros.
  **Vigésima terceira rodada — os dois cards precisavam ter EXATAMENTE o mesmo tamanho**, a pedido
  explícito ("se necessário, cortar parte do texto explicativo da ONU"). Duas mudanças:
  - **`notaMinuto` da ONU ("Discurso a partir de 1:44:00.") removida do card** — a pedido
    explícito ("pode tirar o indicativo de minutagem da ONU também"); o campo continua intacto em
    `reconhecimentos.md` (usado de verdade em `/reconhecimentos`), só a prévia da Home não lê mais.
  - **Texto institucional da ONU cortado pra só a primeira frase**: `onu.texto` (~510 caracteres,
    quase o dobro do texto do LED, ~254) virava um card bem mais alto que o do LED. Em vez de
    duplicar o conteúdo encurtado num campo novo em `home.md`, `onuTextoResumo` corta
    programaticamente no primeiro `". "` (`onu.texto.split('. ')[0] + '.'`) — deriva da mesma
    fonte, sem hardcodar uma segunda versão do texto que precisaria ser mantida em sincronia
    manualmente. Resultado: "Luiza Vilanova, fundadora e CEO do Tocando em Frente, discursou no
    painel [...], realizado em 3 de abril de 2024 na sede da ONU, em Nova York." (204 caracteres)
    — corta a lista de países/organizações do evento, mantém o essencial (quem, o quê, quando,
    onde). O texto completo continua intacto e é o que aparece em `/reconhecimentos`.
  - **Mesmo com o corte, ainda sobrava uma diferença de ~37px** (o LED tem um elemento a mais —
    o link "Ver cobertura no Jornal Nacional →" — que a ONU não tem). Em vez de inflar o texto da
    ONU artificialmente só pra preencher espaço, `.reconhecimento-destaque` ganhou
    `min-height: 24.5rem` (só a partir de 720px, onde os dois cards viram colunas lado a lado —
    no mobile, empilhados, já ficam bem mais altos que esse piso de qualquer forma). Testado
    antes de aplicar: o `display:grid` do `.reconhecimentos-band` (sem `align-items` explícito,
    então usa o `stretch` padrão) já faz as duas colunas internas (vídeo e texto) esticarem pra
    preencher a altura do card mais curto sozinhas, sem distorcer o vídeo (o `object-fit` do
    `VideoPlayer` cuida disso) — confirmado medindo `getBoundingClientRect()` da coluna de vídeo
    e da coluna de texto nos dois cards depois do `min-height`: as duas bateram em 390px nos dois
    cards (LED e ONU), e a altura total dos dois `<article>` ficou idêntica (392px).
  - Verificado nas larguras de sempre (1280px e 375px mobile): os dois cards com a mesma altura
    exata no desktop, sem overflow horizontal em nenhuma das duas, `npx astro build` sem erros.
- **Retratos reais de Jean e Jeferson (Diretores Regionais) nas duas "Histórias" da Atuação**
  (`atuacao.astro`) — os dois `<MediaPlaceholder kind="Retrato">` que ainda restavam nessa seção
  (ver "Histórias desta página reorganizada..." acima) foram substituídos pelas fotos reais que a
  Isabella já tinha na pasta do projeto (`Jean.jpg`, `Jeferson.jpeg` — sem nenhum outro pedido
  além de "já estão na pasta", achadas com uma busca por nome). Jean é o Diretor Regional citado
  em `historia-a-cavalcante.md` (`relatoDe: 'Jean Pereira dos Santos, Diretor Regional'`);
  Jeferson é o citado em `historia-b-rio-branco.md` (`relatoDe: 'Jeferson Kauê, Diretor
  Regional'`).
  - **As duas precisaram de recorte real pra virar quadradas (`ratio: 1/1`, o mesmo que o
    placeholder já usava)**: `Jean.jpg` é paisagem (4160×2774) com o rosto praticamente
    centralizado — recorte central simples (`.extract()` com `left = (largura-altura)/2`) já
    enquadra bem, testado renderizando o resultado antes de aplicar (mesma disciplina de sempre:
    nunca só calcular a fração, sempre abrir o recorte de verdade). `Jeferson.jpeg` é retrato
    (960×1280) com o rosto no terço superior — um recorte central puro deixava sobrar corpo/chão
    demais abaixo; testadas três âncoras verticais (topo, centro, 25% do topo) e escolhida a de
    25% (`top: 80px` de um total de 320px de sobra), que dá mais folga acima da cabeça sem cortar
    peito/ombros de forma abrupta. Os dois recortes foram salvos como arquivos quadrados de
    verdade (1100×1100, mesmo padrão do `kauan-retrato.jpg`) — `jean-retrato.jpg` e
    `jeferson-retrato.jpg` — e os originais (`Jean.jpg`, `Jeferson.jpeg`) apagados depois, mesmo
    padrão de sempre de não manter o arquivo bruto ao lado do derivado final.
  - **Nova classe `.historia__foto`** substitui `.historia :global(.media-placeholder)` (o
    `:global()` não é mais necessário — `<Image>` do `astro:assets` renderiza um `<img>` direto
    no próprio template deste arquivo, não dentro de um componente filho como o
    `MediaPlaceholder` fazia). Mesmo bug/lição de sempre replicado aqui: `height: auto` explícito
    antes do `aspect-ratio`, senão o atributo HTML `height` do `<img>` gerado por `astro:assets`
    vence silenciosamente. Moldura reta de 1px `var(--color-border)`, igual a qualquer imagem do
    site. `MediaPlaceholder` saiu dos imports deste arquivo por ficar sem nenhum outro uso.
  - Verificado: as duas fotos carregam com a proporção 1:1 certa (`naturalWidth === naturalHeight`
    depois de forçar o load), `alt` batendo com `portraitAlt` de cada história, sem overflow
    horizontal em 1280px.
- **Menu "Contato" deixou de pular pra dentro da página ao clicar** — a pedido explícito ("a aba
  de contato quando clica escorrega lá pra baixo, não quero isso... quero que abra a aba em
  cima"). `hrefPt` do item `faca-parte` em [nav.ts](src/i18n/nav.ts) tinha uma âncora
  (`/faca-parte#contato`, pra apontar direto pra seção de contato dentro de Faça Parte) — a
  âncora saiu (`hrefPt: '/faca-parte'`), então o clique agora carrega a página normalmente, no
  topo, como qualquer outro item do menu. A comparação de "página atual" em
  [Header.astro](src/components/Header.astro) já ignorava a âncora ao comparar rotas
  (`href.split('#')[0]`), então não precisou de nenhum ajuste ali — continua marcando "Contato"
  como item ativo em `/faca-parte` normalmente. O botão "Doar" (`donateHref: '/faca-parte#doacao'`)
  não foi tocado — o pedido era só sobre o item de menu "Contato", e pular direto pra seção de
  doação ao clicar "Doar" é o comportamento esperado desse botão, não o mesmo problema.
- **Lista completa de mídia/liderança/premiações, com logo real de cada veículo** — a Isabella
  mandou uma lista formal (16 itens, com tema/data/link reais pra cada um) reorganizando por
  completo `conteudo/reconhecimentos/midia.json`, junto de "todas as logos estão na pasta"
  (17 arquivos novos em `src/assets/images/`, um por veículo/prêmio). Nenhum item foi inventado —
  todo tema/data/link vem literalmente do que foi enviado.
  - **`midia.json` reescrito por inteiro**: os 6 itens que já existiam (Jornal Nacional, ONU —
    Web TV — que continua fora do arquivo, é `destaques.onu`, ver abaixo —, Podcast Orange
    Juice, Tropical FM Birigui, Capricho, G1, Forbes Under 30, Latin American Leadership
    Academy) tiveram `tema`/`data`/`link` preenchidos ou corrigidos pro dado real (vários
    estavam `[PENDENTE]` ou com um link genérico da home do veículo, agora todos com o link
    direto da matéria) — nenhum ficou pendente depois desta rodada. Mais 7 itens novos:
    Katie Richards Prize (Lady Margaret Hall/Oxford), O Globo — 101 Brasileiros, Brazil
    Journal, CNN Brasil, Correio Braziliense, Global Student Prize e Givology Impact Series/
    Gentileza Generosidade (podcasts). "BRASA em Casa" virou só "BRASA" (o nome que a lista
    nova usa, "BRASA — BRASACast #14") — como o item tinha dois links (o vídeo do BRASACast e
    uma gravação ao vivo do Summit Europa), e o schema de `midia.json` só suporta um `link` por
    item (nunca existiu um segundo campo, e criar um só pra esse caso seria complexidade sem
    outro uso), ficou só o primeiro (o BRASACast em si).
  - **Três "baldes" da lista da Isabella (Reconhecimentos/Premiações, Sobre a nossa liderança,
    Mídia/Podcasts) mapeados pra dois mecanismos que já existiam no site, não três seções
    novas**: o site só tem `destaques` (a grade de 4 cards com vídeo/foto — LED, ONU, Watson,
    The Wall, **não tocados na estrutura**, só o card da ONU ganhou um link a mais, ver abaixo)
    e o ticker de `midia.json` com uma flag opcional `lideranca` (mostra o selo "Sobre nossa
    liderança" no meio do mesmo ticker, não uma seção separada). Os itens do balde "Sobre a
    nossa liderança" da lista (O Globo, Brazil Journal, CNN Brasil, Forbes, Correio
    Braziliense, Global Student Prize, LALA) ganharam `lideranca: true` — mesmo tratamento que
    G1/Forbes já tinham. Katie Richards Prize (balde "Reconhecimentos/Premiações", apesar de
    também ser uma conquista pessoal da Luiza) ficou **sem** essa flag — respeitando o
    agrupamento explícito da própria lista, não o assunto do texto.
  - **ONU ganhou um link "Ver no site da ONU →"** no card de destaque que já existia
    (`destaques.onu.link` novo em `reconhecimentos.md`, renderizado em `reconhecimentos.astro`
    com a mesma classe `.destaque-card__link` já usada pelo link "Assistir →" do The Wall) — a
    pedido explícito ("que está em destaque colocar link para o site"). Nenhuma outra parte do
    card (vídeo, texto, nota de minutagem) foi tocada.
  - **17 logos reais, um por veículo/prêmio** (exceto ONU, que já é um card de destaque com
    vídeo próprio, não uma linha do ticker) — arquivos renomeados pro padrão kebab-case do
    projeto antes de importar (chegaram com nomes de download tipo
    `7044-1071_import.png`/hashes de URL/`Capricho_logo.svg.webp`); a identidade de cada
    arquivo ambíguo (`7044-1071_import.png`, o hash `0bde63e3-...png`, o hash `ab676563...jpg`)
    foi confirmada abrindo a imagem antes de decidir o nome, não só adivinhando pelo contexto —
    viraram `correio-braziliense-logo.png`, `lala-logo.png` e `givology-logo.jpg`
    respectivamente. Mesmo padrão já usado pro logo do INGOH em "Parceiros e apoiadores" da
    Home: como `midia.json` não pode importar assets do Astro, um dicionário
    `logosByVeiculo: Record<string, ImageMetadata>` no frontmatter de `reconhecimentos.astro`
    casa o `veiculo` de cada item com o arquivo importado; o template só renderiza
    `<Image class="midia-box__logo">` quando existe uma entrada correspondente (nenhum
    placeholder nem nome inventado se um veículo futuro não tiver logo ainda).
  - **Dois formatos "arriscados" que funcionaram sem drama**: um logo veio em `.avif`
    (`o-globo-100-logo.avif`, a marca "O Globo 100") e dois em `.svg` (`lmh-logo.svg`,
    `g1-logo.svg`) — diferente do caso do `mapa-brasil.svg` (que PRECISA ser servido como
    arquivo inteiro via `<img>` por causa da máscara/vetores internos), estes são logos simples
    de verdade, sem estrutura especial — `astro:assets`/`<Image>` processou os três sem erro
    (confirmado no build e na página: o SVG do G1 saiu como `.svg` otimizado, o AVIF virou
    `.webp` como qualquer raster). Não é uma contradição da lição documentada antes pro mapa —
    aquela regra é específica de SVGs com máscara+paths internos, não de SVG em geral.
  - **`.midia-box__logo`, novo, mesma filosofia do `.partners__logo` da Home**: altura fixa
    (`max-height: 2rem`), largura livre (`width: auto; max-width: 100%; object-fit: contain`)
    — preserva a proporção original de cada logo (que variam bastante: de quadrados a
    wordmarks bem largos como "Correio Braziliense") sem distorcer nenhum, sem moldura de foto
    (não é fotografia). `align-self: flex-start` evita o stretch padrão de item de flex em
    coluna (`.midia-box` é `flex-direction: column`), que senão obrigaria a imagem a ocupar a
    largura inteira do card antes do `object-fit` entrar em jogo — mesmo bug em potencial já
    evitado de propósito, não descoberto ao vivo desta vez.
  - Verificado: os 16 itens do ticker (a ONU não é um deles) todos com logo carregando
    (`img.complete`, `naturalWidth > 0`) e renderizando a `32px` de altura sem distorcer a
    proporção original (largura variando de 27 a 90px conforme o formato de cada marca); o selo
    "Sobre nossa liderança" aparecendo exatamente nos 8 itens certos (G1 + os 7 do balde
    "liderança" da lista); o link da ONU apontando pra `webtv.un.org`; nenhum `[PENDENTE]`
    restante no ticker; sem overflow horizontal em 1280px nem 375px; `npx astro build` sem
    erros.
  **Segunda rodada — quatro ajustes nos boxes do ticker**, a pedido explícito depois de ver a
  versão ao vivo: "não quero que os links vazem, quero botão 'Acesse'", "espaço em branco enorme
  entre o título e o link", "logos bem maiores", "tirar o fundo branco do Jornal Nacional".
  - **Link virou botão "Acesse →"**: antes o texto do link era a própria URL sem `https://`
    (`displayLink()`) — em veículos com link mais longo, esse texto podia "vazar" (estourar a
    largura do card de 16rem). Trocado por um texto fixo e sempre curto, "Acesse →", nunca
    dependente do tamanho da URL. `displayLink()` saiu do frontmatter por ficar sem nenhum outro
    uso. Estilizado como um botão de verdade (`.midia-box__link`: borda de 1px
    `var(--color-text)`, padding, uppercase, hover que inverte pra fundo escuro/texto claro) —
    reto e sem sombra, mesma linha "reto, elegante, institucional" do resto do site, não o `.btn`
    genérico de `global.css` (que é maior/pensado pra CTAs de página, não pra um card compacto de
    ticker).
  - **Vão enorme entre o título e o link, causa raiz**: `.midia-box__link` tinha
    `margin-top: auto` — dentro do flex column do card, isso empurra o link pro RODAPÉ do card
    (que tem altura variável conforme o `tema` de cada item), não logo abaixo da data. Quanto
    mais curto o tema de um item, maior o vão vazio antes do botão. Trocado por
    `align-self: flex-start` + uma margem pequena e fixa (`0.35rem`) — o botão agora fica sempre
    colado à data, e a altura de cada card passou a ser só a soma do próprio conteúdo (efeito
    colateral bom, não pedido: os 16 cards ficaram com a mesma altura, `346px`, sem precisar de
    nenhum `min-height`).
  - **Logos bem maiores**: `.midia-box__logo` foi de `max-height: 2rem` (32px, rodada anterior)
    pra `max-height: 3.5rem` (56px) — quase o dobro. Mesmo mecanismo de sempre (`width:auto;
    object-fit:contain`) preserva a proporção original de cada marca sem distorcer, mesmo nas
    mais largas (ex.: "Correio Braziliense").
  - **Fundo branco opaco do logo do Jornal Nacional removido** — o arquivo
    (`jornal-nacional-logo.png`) não tinha canal alfa (`hasAlpha: false`, 3 canais): era um PNG
    "achatado" contra fundo branco sólido, não um logo com transparência real. Corrigido com um
    script `sharp` que lê os pixels crus (`raw()`) e calcula um alfa por pixel a partir da
    "brancura" (`min(r,g,b)`) — branco puro (`min > 245`) vira totalmente transparente, cores
    fortes (`min < 210`) ficam totalmente opacas, e a faixa entre os dois limites recebe uma
    rampa linear de alfa (em vez de um corte binário) só pra suavizar a borda anti-aliased entre
    o logo e o fundo, evitando uma franja branca dura ao redor das letras. Testado ANTES de
    aplicar: o resultado foi composto sobre um fundo escuro e um claro com `sharp` (script
    descartável) pra confirmar visualmente que não sobrou nenhum halo branco nas bordas — só
    depois de conferir os dois, o arquivo original foi sobrescrito.
  - **Bug de ambiente, não de código, achado verificando o resultado**: depois de trocar o
    arquivo e reiniciar o servidor dev (o fix já documentado antes pra esse tipo de problema), o
    canvas de teste no navegador ainda lia o pixel de canto do logo como branco opaco
    (`[255,255,255,255]`) — parecia que a correção não tinha pegado. Buscando a MESMA URL da
    imagem direto por fora do navegador (`curl` + `sharp`, sem passar pelo cache do Chrome), o
    arquivo servido já estava correto (`hasAlpha:true`, pixel de canto `[0,0,0,0]`) — confirmando
    que era o CACHE HTTP do próprio navegador (a aba já tinha carregado essa URL antes, com os
    bytes antigos, e como a query string do endpoint `_image` do Astro não muda quando só o
    conteúdo do arquivo-fonte muda, o navegador reutilizou a resposta antiga sem revalidar).
    Confirmado definitivamente carregando a mesma URL com um parâmetro de cache-busting
    (`&cachebust=timestamp`) só pra esse teste — o pixel de canto voltou transparente. Vale
    lembrar: além do cache do servidor dev (Vite/HMR, já documentado várias vezes neste arquivo),
    o CACHE DO PRÓPRIO NAVEGADOR também pode mascarar uma correção de asset já aplicada com
    sucesso no arquivo/servidor — um teste que parece "não pegou" pode só precisar de um fetch
    novo, não necessariamente de mexer no código de novo.
  - Verificado depois da correção: os 16 logos com `max-height` de 56px reais (medido via
    `getBoundingClientRect()`), todos os 16 botões mostrando "Acesse →" com a mesma largura
    (~106px, nunca variando com o tamanho da URL), os 16 cards com a mesma altura (346px), o
    logo do Jornal Nacional com o canto transparente confirmado por amostragem de pixel via
    `canvas` (com cache-busting) e pelo arquivo servido direto (`curl`+`sharp`), sem overflow
    horizontal em 1280px nem 375px, `npx astro build` sem erros.
  **Terceira rodada — o "botão" virou texto sublinhado, alinhado entre os 16 cards, e o ticker
  ficou mais lento**, a pedido explícito ("não quero que o Acesse esteja em um box, só
  sublinhado com essa seta do lado... quero que todos os 'Acesse' fiquem alinhados
  horizontalmente entre si... a coluna tá passando rápido demais").
  - **`.midia-box__link` perdeu a moldura de botão da rodada anterior** (borda, padding de caixa,
    fundo no hover, uppercase) — voltou a ser só texto ("Acesse →") com `text-decoration:
    underline`, sem nenhuma cor customizada (herda o azul padrão de link do site).
  - **Alinhamento horizontal entre os 16 "Acesse", pedido explícito**: `margin-top: auto`
    (removido na rodada anterior por criar um vão grande em cards de tema curto) voltou —
    dessa vez de propósito, porque é exatamente esse mecanismo que resolve o alinhamento: como
    os cards do `.midia-ticker__group` (um `display:flex` sem `align-items` próprio, então usa o
    `stretch` padrão) já têm todos a MESMA altura (esticados pro tamanho do card mais alto da
    fileira), um `margin-top:auto` no link empurra todos pro rodapé — e como o rodapé de todos
    os cards está na mesma linha (mesma altura), os 16 "Acesse" ficam exatamente alinhados.
    Verificado medindo `getBoundingClientRect().top` do link nos 16 cards: valor idêntico em
    todos. O "vão grande" que a rodada anterior tentava evitar volta a existir em cards de tema
    curto, mas esse trade-off foi aceito de propósito — o pedido desta rodada (alinhamento) tem
    prioridade sobre o da anterior (menos espaço vazio), os dois puxavam pra direções opostas.
  - **Velocidade do ticker, causa raiz**: a duração do `@keyframes` (36s) nunca tinha sido
    recalibrada depois que a lista de mídia cresceu de ~9 pra 16 itens (rodada "Lista completa de
    mídia/liderança", acima) — a MESMA duração pra uma faixa de conteúdo quase duas vezes mais
    comprida significa os cards passando quase duas vezes mais rápido, sem nenhuma mudança
    intencional de velocidade. Corrigido pra `90s` — bem mais lento que o necessário só pra
    "corrigir" a velocidade original (que já eram ~9 itens em 36s), a pedido explícito de dar
    mais tempo de leitura, não só restaurar o ritmo de antes.
  - Verificado: `getComputedStyle().animationDuration` confirmando `90s`; os 16 links com
    `getBoundingClientRect().top` idêntico entre si; `border`/`background-color` do link
    voltando a `none`/`transparent` (nenhum resíduo de botão); `text-decoration-line: underline`
    aplicado; sem overflow horizontal em 1280px nem 375px; `npx astro build` sem erros.
- **Primeira foto + bio real de Sarah Manzano na grade "Quem somos" de Faça Parte/Contato** —
  mesmo padrão condicional já usado pra Milanna (`fotos: Record<string, ImageMetadata>` no
  frontmatter de `faca-parte.astro`, casando nome → imagem importada; quem não está no
  dicionário cai no `MediaPlaceholder` de sempre). `equipe.json` ganhou o campo `bio` pra Sarah
  Manzano (Líder de Financeiro) com o texto exato enviado — nenhum dado inventado.
  - **Foto veio como `Sarah.HEIC`, mesmo problema de decodificação já documentado** ("Décima
    rodada" da Home, `atuacao.heif`): `sharp(...).metadata()` falhou com o mesmo erro de limite
    de segurança do `libheif` (`"Number of references in iref box (45) exceeds... 16"`, o
    equivalente do erro anterior, só com uma contagem de referências diferente) — comum em fotos
    de iPhone com múltiplas imagens auxiliares embutidas. Resolvido com o mesmo fix de sempre:
    `heic-convert` instalado temporariamente (`npm install --no-save`, removido com `npm
    uninstall` ao final, confirmado sem rastro em `package.json`/lockfile) — usa `libheif-js`
    (build WASM do libheif), que decodifica sem esbarrar no mesmo limite.
  - **Foto é um selfie de espelho num banheiro, corpo inteiro visível, não um retrato fechado** —
    mesma situação já enfrentada com "Entender a si mesmo" e o retrato do Kauan: precisou de um
    recorte de verdade (`.extract()`), não só `object-position`. Testados três candidatos a
    recorte quadrado antes de decidir (mesma disciplina de sempre: abrir o resultado renderizado,
    não só calcular a fração) — os dois primeiros (mais fechados no rosto) tinham o problema de o
    próprio CELULAR do selfie cobrir parte do rosto (queixo/boca); o terceiro, mais aberto
    (recorte 2800×2800 a partir de `left:485, top:1600` na foto convertida em JPEG), foi o único
    em que o rosto inteiro fica visível sem o celular sobrepor nada — escolhido por esse motivo,
    não por ser o mais "zoomado". Salvo como `sarah-retrato.jpg` (1100×1100, mesmo padrão de
    `kauan-retrato.jpg`/`jean-retrato.jpg`), o `.HEIC` original apagado depois.
  - Verificado: a foto renderiza no lugar do placeholder em `faca-parte.astro` (proporção 1:1,
    `alt="Retrato de Sarah Manzano"`), a bio aparece no lugar do `PendingNote` genérico, sem
    overflow horizontal em 1280px nem 375px, `npx astro build` sem erros.
- **Círculo interativo da Teoria da Mudança na Jornada** — novo componente
  [TeoriaMudancaCirculo.astro](src/components/TeoriaMudancaCirculo.astro), a pedido explícito de
  um briefing formal ("JORNADA = Teoria da Mudança = CÍRCULO... ATUAÇÃO = percurso operacional...
  não misturar os dois conceitos"). Nova seção entre "Fundamentos" e "Os três movimentos" em
  [jornada.astro](src/pages/jornada.astro), renumerando os kickers seguintes (02→03, 03→04,
  04→05) em `conteudo/jornada/jornada.md`. **A Atuação não foi tocada** — nem `AtuacaoCicloHero.astro`
  nem `atuacao.astro`, conforme instrução explícita.
  - **Pesquisa da referência antes de codificar**: o Kumu linkado
    (kumu.io/AnaGranada/tocando-em-frente-teoria-da-mudanca) é um app de mapa interativo (canvas/
    SVG renderizado em JS) — `WebFetch` não consegue ler seu conteúdo (só o título da página).
    Navegado de verdade no browser de teste, clicando em cada nó pra extrair a descrição real de
    cada elemento (nenhum conceito foi inventado): o mapa "Vácuo Inspiracional" mostra os 5
    desafios em roda (Vácuo Inspiracional → Falta de interesse → Baixo desempenho acadêmico →
    Evasão Escolar → Perpetuação do ciclo de pobreza → Perpetuação das desigualdades sociais → de
    volta ao início) — a MESMA ideia de círculo pedida já existe no Kumu, só que sem versão
    visual própria. O mapa principal "Teoria da mudança" mostra a resposta (Necessidade de
    repertório/histórias → Currículo focado em habilidades-chave / Apresentação de histórias de
    referência → Oportunidades em diferentes áreas / Jovens talentos acessando oportunidades /
    Melhora no desempenho acadêmico). Um terceiro mapa ("Tocando em Frente") tem um logframe
    completo (Inputs→Atividades→Outputs→Objetivos→Impacto) — consultado só pra identificar a
    linguagem real da coluna "Impacto" (diminuição da evasão escolar, quebra dos ciclos de
    pobreza, jovens de escola pública como protagonistas/em posições de liderança), não replicado
    por inteiro (granularidade demais pro site público, conforme pedido de simplificar).
  - **Conteúdo simplificado e organizado em `/conteudo/jornada/teoria-mudanca.json`**: 4
    categorias em sequência circular (Desafios → Currículo & Experiências → Mudanças → Impacto →
    de volta a Desafios — o próprio formato circular, não uma lista, já comunica "sistema
    conectado, não cadeia causal rígida", pedido explícito). Desafios tem exatamente os 5 itens
    nomeados no briefing (Falta de interesse, Baixo desempenho acadêmico, Evasão escolar,
    Perpetuação das desigualdades, Perpetuação do ciclo de pobreza); Currículo/Mudanças/Impacto
    têm 2 itens cada, resumindo os nós do Kumu sem inventar conceito novo.
  - **"Vácuo Inspiracional" tratado exatamente como pedido na seção 5 do briefing**: a categoria
    Desafios tem um `tituloCompleto` claro ("Falta de referências e oportunidades") que aparece
    como título principal ao clicar na categoria, e um `termoOriginal` ("Vácuo Inspiracional")
    citado só como explicação complementar dentro do texto ("Na Teoria da Mudança completa, esse
    ponto de partida é chamado de...") — nunca como título isolado sem explicação.
  - **Linguagem visual deliberadamente diferente do "aviãozinho" da Atuação**: sem scroll-jack,
    sem elemento se movendo — é um diagrama estático (SVG de 4 arcos coloridos + botões HTML
    sobrepostos pros pontos/rótulos, mesmo padrão de overlay já usado em `AtuacaoMap`/
    `BrazilMap`/`SustentacaoMapa`), sempre com a estrutura inteira legível sem interação (as 4
    categorias E os 11 itens têm rótulo visível de cardápio, não escondido atrás de hover) —
    hover/clique só aprofunda (painel de texto ao lado, dentro do mesmo padrão de duas colunas já
    usado em `CicloAtuacao`/`AtuacaoCicloHero`) sem nunca abrir página nova. Selo central estático
    ("Jornada Educacional") também clicável, pra limpar a seleção e voltar à visão geral.
  - **Quatro cores de categoria, todas derivadas de tokens já existentes** (nunca um hex novo):
    Desafios = `color-mix(--color-error 38%, --color-text-secondary 62%)` (tensão, sem virar um
    vermelho de alerta puro); Currículo = `--color-primary`; Mudanças = `--color-success`;
    Impacto = `color-mix(--color-accent 40%, --color-text 60%)` — a MESMA fórmula
    dourado-oliva já verificada em `AtuacaoCicloHero` (não uma nova, reaproveitada). **Bug real
    de contraste, achado com o mesmo script de checagem AA já usado antes neste projeto**: a
    primeira tentativa usou `accent 45%/text 55%` (calculado à mão, parecia razoável) mas dava só
    4.16:1 contra `--color-bg` — abaixo do mínimo AA de 4.5:1, porque essa cor é usada como TEXTO
    (rótulo da categoria "Impacto" + títulos de item), não só decoração no SVG. Corrigido
    voltando pra exatamente a proporção 40/60 já testada e aprovada em `AtuacaoCicloHero`
    (4.72:1) — lição: ao reaproveitar uma fórmula de `color-mix()` já validada em outro
    componente, reaproveitar a proporção EXATA, não uma variação "parecida" sem checar de novo.
  - **Bug real de layout, achado só testando ao vivo (não bastava calcular no papel)**: os 5
    itens de Desafios, espalhados num arco de só 90°, ficam a ~16° um do outro — perto demais pra
    dois rótulos de 2-3 palavras não colidirem só alternando `near/far` por paridade de índice
    (a primeira tentativa, testada ao vivo, mostrava "Evasão escolar" colando em "Perpetuação das
    desigualdades"). Corrigido com um "leque": o raio de cada item cresce com a distância até o
    índice central (`itemR + tierStep * (centerIdx - |j - centerIdx|)`) — o item do meio fica bem
    mais afastado do centro que os das pontas. Como perto do topo do círculo a separação
    horizontal entre vizinhos já é pequena (a tangente ali é quase vertical), afastar justo o
    item do meio empurra o rótulo dele bem mais pra cima, abrindo espaço vertical pros vizinhos
    sem precisar rotacionar nenhum texto (a rotação foi descartada de propósito — ver "Motion:
    trajetória sempre reta" em Direção Visual).
  - **Mobile — não é só "o mesmo círculo, menor"**: testado ao vivo em 375px, os 11 rótulos de
    item colidiam com os 4 rótulos de categoria (frame bem menor = menos espaço, mesmo problema
    de densidade em escala menor). Resolvido ocultando só os RÓTULOS de item abaixo de 720px
    (`display:none`) — os pontos continuam tocáveis (com `aria-label` no próprio botão, garantindo
    que o leitor de tela sempre anuncia o nome do item mesmo com o texto visual escondido) e o
    texto completo já mora no painel abaixo do círculo (empilhado nessa largura, mesmo
    comportamento de duas-colunas-vira-uma-coluna de `CicloAtuacao dark`) — a "área auxiliar" que
    o próprio briefing sugeriu para telas estreitas, não inventada. Isso também resolveu de graça
    um overflow horizontal residual de ~9px (o rótulo de "Protagonismo e novos caminhos", ancorado
    à direita pra crescer pra esquerda a partir do ponto, extrapolava a margem do container).
  - Três ícones novos em [Icon.astro](src/components/Icon.astro) — `alerta`, `crescimento`,
    `estrela` — um por categoria (Desafios/Mudanças/Impacto); Currículo reaproveita `livro`, já
    existente. Nenhum ícone por item individual (11 seria excesso visual) — só os 4 das
    categorias, que já bastam pra dar "personalidade" sem virar infográfico corporativo.
  - **CTA discreto pro Kumu completo**, ao final da seção: `target="_blank" rel="noopener
    noreferrer"`, texto e link exatamente como pedido — nunca substitui o círculo, só complementa
    pra quem quiser ver o modelo inteiro com todas as referências/evidências.
  - Verificado: interação por clique (funciona igual mouse/touch, sem depender só de `:hover`),
    foco por teclado (`focus` dispara o mesmo estado do clique, testado disparando um
    `FocusEvent` de verdade — `.focus()` isolado num script síncrono não é garantia de refletir
    no mesmo tick, mas o listener em si funciona), clique fora/Escape/selo central limpando a
    seleção, as 4 cores com contraste AA conferido por script, sem overflow horizontal em
    1280px/800px/375px, `npx astro build` sem erros. Não testado: a página de Atuação
    permanece 100% intocada (nenhum arquivo dela foi aberto nesta rodada).
  **Segunda rodada — reescrita estrutural: de "itens no anel" para "bússola" (círculo + 4 zonas
  de texto ao redor)**, a pedido explícito depois de ver a primeira versão ao vivo. O pedido foi
  claro sobre o que MANTER (a forma circular, "gosto da ideia de representar visualmente que é
  um ciclo" — nunca virar linha/timeline/sequência horizontal) e o que mudar: círculo estático
  (sem nada girando), setas mostrando o sentido, textos bem mais afastados/organizados, cores
  mais vivas. Isso não foi um ajuste incremental de espaçamento — a arquitetura de posicionamento
  mudou por completo.
  - **Os itens deixaram de ser posicionados por trigonometria (ângulo/raio) sobre o próprio
    anel** — a causa raiz de toda a poluição visual da primeira versão (documentada acima: rótulo
    colidindo com rótulo vizinho, correções de "leque"/raio alternado que ainda deixavam tudo
    apertado). Na segunda versão, cada categoria vira uma "zona" de texto num `<div>` comum,
    posicionada por **CSS Grid** (`grid-template-areas: ". top ." "left circle right" ". bottom
    ."`, o mesmo layout em bússola sugerido no próprio briefing) — não sobra NENHUM texto
    posicionado por ângulo/raio; o único elemento que ainda usa geometria polar é o SVG do
    círculo em si (as 4 faixas coloridas + as setas). Isso elimina de raiz a classe inteira de
    bugs de colisão da rodada anterior, não é só "mais espaço", é uma categoria de bug que deixa
    de existir.
  - **Setas de fluxo de verdade, não mais um triângulo genérico**: cada uma das 4 fronteiras
    entre categorias (Desafios→Currículo, Currículo→Mudanças, Mudanças→Impacto,
    Impacto→Desafios — fechando o ciclo) ganhou um `<path>` curto seguindo a curvatura do anel
    (`A ${bandR} ${bandR}...`, mesmo raio da faixa colorida) com `marker-end="url(#tm-arrow)"` —
    um único `<marker>` (não um por categoria: a seta é sempre branca/`--color-bg`, só a FAIXA
    embaixo dela já diz de qual categoria ela está saindo) com `orient="auto-start-reverse"`, que
    orienta a ponta da seta automaticamente na direção tangente do próprio path — o jeito correto
    e padrão de fazer seta-que-segue-curva em SVG, não uma rotação calculada à mão como o
    triângulo da primeira versão. Cada seta vive inteiramente dentro do vão entre duas faixas
    (nunca sobrepõe a cor colorida), pequena o bastante pra não competir com o círculo, grande o
    bastante pra ler como seta de verdade (não um ponto).
  - **Cores recalculadas pra "vivas e saturadas", pedido explícito com exemplos concretos**
    ("vinho/vermelho mais vivo", "azul mais vibrante", "verde/menta vibrante", "verde/oliva mais
    intenso") — a primeira versão usava `color-mix()` com bastante `--color-text-secondary`/
    `--color-text` misturado, resultando em tons conscientemente dessaturados (documentado à
    época como "tensão, sem virar alerta puro"). Só que o próprio pedido desta rodada authoriza
    e pede explicitamente sair da paleta travada de tokens pra alcançar isso: "não é obrigatório
    usar exatamente essas cores... o importante é aumentar a saturação... mantendo harmonia com
    a identidade". Resolvido calculando, via script Node (HSL: mesmo matiz de cada token de
    origem, saturação e luminosidade recalculadas pra AA), quatro hex literais que são a MESMA
    matiz de `--color-error`/`--color-primary`/`--color-success`/`--color-accent` só que bem
    mais vívidos: `#9c1911` (vinho, matiz de --color-error, 7.7:1), `#105993` (azul, matiz de
    --color-primary, 6.9:1), `#0d7744` (verde, matiz de --color-success, 5.3:1), `#727311`
    →`#727411` (oliva, matiz de --color-accent, 4.7:1) — todos conferidos contra AA (4.5:1) antes
    de fixar, porque são usados como cor de TEXTO nos títulos de zona, não só decoração no SVG.
    Documentado no próprio componente como exceção deliberada e específica desta peça (não uma
    mudança de tokens do design system — `--color-error`/`--color-primary`/etc. em `global.css`
    continuam exatamente como eram).
  - **Centro: "Jornada Educacional" → "Teoria da Mudança"**, só o texto (`teoria-mudanca.json`,
    `centro.titulo`) — o campo `centro.texto` (usado antes como conteúdo padrão do painel de
    detalhe) saiu inteiramente: como o painel de detalhe agora fica com `display:none` em
    repouso (só aparece no hover/clique de algo específico), não existe mais um estado "aberto
    mas sem nada selecionado" que precisasse de um texto de preenchimento.
  - **Hierarquia de texto agora é literalmente dois níveis, não três**: título da zona (grande,
    negrito, uppercase, na cor viva da categoria — ex.: "DESAFIOS" em vinho) e os itens abaixo
    (corpo de texto normal, `--color-text-secondary`, só ganham a cor/peso da categoria no
    hover/clique) — satisfaz literalmente o pedido "os quatro nomes... muito mais importantes
    visualmente do que os pequenos itens... não deixar os pequenos textos competirem com os
    títulos". O painel de detalhe (a explicação mais longa por trás de cada item/categoria,
    `resumo`/`texto` no JSON) continua existindo mas só aparece sob interação — não é mais
    necessário pra entender a estrutura básica, que já está inteira na bússola.
  - **Arcos sempre 100% saturados/opacos por padrão** (nunca esmaecidos) — diferente da primeira
    versão, que dimia os arcos não-ativos pra 22% de opacidade ao interagir com qualquer item.
    Reescrito pra reforçar em vez de competir: o feedback de "isso está ativo" agora é só um
    aumento de `stroke-width` (34→42) no arco correspondente, nunca uma redução de opacidade nos
    outros três — pedido explícito da rodada ("cores... sempre vivas e presentes",
    "o círculo deve continuar sendo o protagonista") interpretado como "nenhum estado da
    interface pode deixar uma cor menos viva que o repouso".
  - **Zero elemento girando/se movendo, confirmado por ausência, não por remoção** — a versão
    anterior deste componente (rodada 1) já nunca teve `requestAnimationFrame`, `@keyframes` de
    rotação nem um marcador percorrendo o anel (isso sempre foi exclusividade do
    `AtuacaoCicloHero`/`CicloAtuacao` da Atuação, nunca copiado pra cá) — o pedido de "remover
    qualquer sensação de rotação" já estava atendido antes mesmo desta rodada; nada precisou ser
    removido nesse quesito, só confirmado que continua assim depois da reescrita.
  - **Mobile: pilha de uma coluna só, na ordem do próprio ciclo** (`order` em flexbox: círculo
    primeiro — como âncora visual do conceito inteiro — depois Desafios → Currículo → Mudanças →
    Impacto) — como não sobra NENHUM texto posicionado sobre o anel nesta versão (diferente da
    rodada 1, que precisava esconder rótulos de item no mobile pra não colidir), o círculo pode
    encolher livremente (`min(72vw, 17rem)`) sem nenhum risco de colisão, e nenhum texto de zona
    precisa encolher, abreviar ou esconder — todos os itens continuam com o texto completo e
    espaçamento generoso em qualquer largura.
  - Verificado: as 4 cores computadas batendo exatamente via `getComputedStyle` (`rgb(156,25,17)`
    etc.), os 5 itens de Desafios sem nenhuma colisão em nenhuma largura testada (1280px/800px/
    375px, incluindo o card do próprio pane mais estreito), clique/hover num item abrindo o
    painel de detalhe com o texto certo e engrossando (`stroke-width`) só o arco correspondente
    (a mudança de `stroke-width` fica presa no valor antigo até uma screenshot real forçar o
    pane a compor — mesmo comportamento de "transição congelada com o pane oculto" já
    documentado antes neste arquivo, não um bug do código), ordem de leitura no mobile
    (círculo → Desafios → Currículo → Mudanças → Impacto) sem overflow horizontal
    (`scrollWidth === clientWidth` em 375px e na largura padrão do pane), `npx astro build`
    sem erros. A página de Atuação continua intocada.
  **Terceira rodada — a segunda rodada foi rejeitada ao vivo ("odiei")**: o pedido explícito foi
  voltar pro layout de duas colunas da PRIMEIRA rodada (círculo à esquerda, painel de explicação
  à direita) e a "raia" que aparecia do centro até o item no hover — os dois mecanismos que a
  segunda rodada tinha removido pra resolver o problema de poluição visual. Lição prática: o
  pedido de "reduzir poluição" da rodada anterior não pedia pra abandonar esse layout específico,
  só pra espaçar melhor os itens dentro dele — algo que já tinha sido resolvido com sucesso
  ainda na primeira rodada (o "leque" de raio por camada, testado ao vivo e sem colisão). O
  componente foi reconstruído combinando: layout de duas colunas + spokes da primeira rodada,
  com as três melhorias da segunda rodada que não foram contestadas (cores vivas/saturadas,
  setas de fluxo desenhadas no anel, selo central renomeado pra "Teoria da Mudança") — nada do
  código da "bússola" (zonas em grid) sobreviveu.
  - **Bug real, achado só testando larguras intermediárias**: em ~760–950px de viewport (comum
    em laptops menores ou janela não-maximizada), a coluna do círculo dentro do grid de duas
    colunas (`minmax(0,1.15fr)`) ficava bem mais estreita que o teto de `34rem` do componente —
    e como o tamanho dos rótulos é fixo em `rem` (não encolhe junto com o frame), "Evasão
    escolar" voltava a colar em "Perpetuação das desigualdades" e "Currículo & Experiências"
    encostava em "Histórias de referência". Em 1050px e 1280px já ficava limpo (a coluna se
    aproxima do teto de `34rem`), então o problema era só essa faixa intermediária específica —
    não reproduzido nos testes de sempre (1280px/375px) porque nenhum dos dois cai nela.
  - **Corrigido subindo o breakpoint de duas colunas de 720px (o padrão genérico do resto do
    site) pra 960px**, só neste componente: abaixo de 960px o layout vira uma coluna só (círculo
    sozinho, com `width: min(92vw, 34rem)`) — sem outra coluna disputando espaço, o círculo já
    atinge o teto de `34rem` a partir de ~590px de viewport, cobrindo com folga toda a faixa que
    antes colidia. O breakpoint de "esconder rótulo de item" (pensado pra celular de verdade)
    continua em 719px, **não** foi sincronizado com o de 960px de propósito — testado que entre
    719–959px (coluna única, frame já no teto de `34rem`) os rótulos aparecem perfeitamente sem
    colisão, então escondê-los ali seria remover informação sem necessidade.
  - Verificado nas larguras que antes colidiam (760px, 900px) e nas de sempre (1050px, 1280px,
    375px mobile): zero colisão de rótulo em todas, `Impacto`/demais rótulos de categoria com
    texto completo no DOM e dentro da viewport mesmo em 375px (uma leitura errada de screenshot
    en zoom deu a impressão de corte, `getBoundingClientRect()` confirmou que não há corte real),
    clique num item acende a raia (`.tm__spoke.is-active`) e atualiza o painel à direita
    corretamente, `npx astro build` sem erros.
  **Quarta rodada — "Jornada Pedagógica" e o painel de explicação migraram pra dentro do
  componente, na coluna esquerda; o círculo virou coluna direita**, a pedido explícito e bem
  detalhado ("NÃO criar um novo componente... apenas reorganizar o layout"). Antes,
  `jornada.astro` tinha duas seções separadas — um `<section class="hero">` só com o `<h1>`, e
  logo abaixo um `<section class="teoria-mudanca">` com kicker+lede+texto+o componente inteiro
  (que por sua vez tinha círculo à esquerda, painel à direita). As duas seções foram fundidas
  numa só, e o `<h1>`/kicker/lede/texto migraram PRA DENTRO de `TeoriaMudancaCirculo.astro` como
  props novas e opcionais (`titulo`/`kicker`/`lede`/`intro`) — não é um componente novo, é o
  mesmo arquivo reaproveitado, só ganhando conteúdo que antes vivia na página. Motivo técnico:
  só há uma forma de "título + painel" ficarem na MESMA coluna de um grid de duas colunas — os
  dois precisam ser filhos do mesmo container de grid, e esse grid já é interno ao componente.
  - **Ordem visual invertida**: antes `[CÍRCULO] [PAINEL]`, agora `[TÍTULO+PAINEL] [CÍRCULO]` —
    a query `@media (min-width: 960px)` troca `order` de `.tm__left` (0) e `.tm__stage` (1) pra
    isso, mas no MOBILE a ordem continua com o círculo primeiro (`order` sem media query:
    `.tm__stage` 0, `.tm__left` 1) — o "gancho" visual antes do texto, mesma lógica de sempre.
  - **Bug real de cascata CSS, achado testando ao vivo (a versão inicial mostrava o painel
    sozinho, sem círculo nenhum na tela)**: a regra `.tm__stage{order:1}` dentro do
    `@media(min-width:960px)` estava sendo silenciosamente vencida por uma regra
    `.tm__stage{...order:0}` mais abaixo no arquivo, FORA de qualquer media query — mesma
    especificidade (0,1,0 os dois), e em CSS, media query nenhuma dá especificidade extra: quando
    duas regras empatam, ganha a que vem DEPOIS no arquivo, não a "mais específica em pixels".
    Corrigido movendo as duas declarações-base de `order` (`.tm__left{order:1}` e
    `.tm__stage{order:0}`) pra ANTES do bloco de 960px que as sobrescreve — lição geral: qualquer
    regra "override responsivo" só funciona se a regra BASE que ela sobrescreve vier antes dela
    no arquivo, nunca depois.
  - **Item 6/7 do pedido — espaçamento dos subtópicos e legibilidade de "Currículo &
    Experiências"**: `itemR` (raio-base dos itens, fora do anel) subiu de 262 pra 284 e o
    "leque" (`tierStep`) de 30 pra 34, dando mais respiro entre os pontos/rótulos e o anel,
    principalmente nas categorias de 2 itens (Currículo/Mudanças/Impacto) que não tinham o
    leque de 5 itens do Desafios pra se beneficiar. Pro texto "Currículo & Experiências" cortado
    dentro do anel: a causa raiz não era falta de espaço no rótulo, era a palavra "EXPERIÊNCIAS"
    sozinha (sem espaço pra quebrar) já sendo mais larga que a caixa de `max-width` antiga
    (6.5rem) no tamanho de fonte padrão (`--text-caption`) — o texto vazava e parecia "cortado"
    pelo arco azul logo atrás. Corrigido encolhendo a fonte do rótulo de categoria pra 0.75rem
    (menor que `--text-caption`) — "EXPERIÊNCIAS" passou a caber inteira numa linha dentro de
    7rem, sem precisar alargar a caixa (que só empurraria o texto pra mais perto do anel,
    piorando o problema).
  - **Bug real de geometria, achado só medindo (não só olhando)**: a primeira tentativa de "dar
    mais espaço" tinha AUMENTADO `catLabelR` (o raio do rótulo de categoria, de 142 pra 158) —
    o oposto do que resolve o problema, já que aumentar esse raio empurra o rótulo PRA MAIS PERTO
    do anel, não pra longe dele. Corrigido calculando a geometria de verdade (raio do rótulo vs.
    borda interna do anel, em pixels reais no frame de 34rem) e reduzindo `catLabelR` pra 122 —
    a combinação certa de raio menor + fonte menor deixa uns ~20px de vão entre o rótulo mais
    largo ("Currículo & Experiências") e o arco azul, verificado medindo `getBoundingClientRect()`
    do texto contra o ponto real da curva SVG naquela altura (não só a bounding box do `<path>`,
    que inclui área vazia do arco que não é visualmente ocupada pelo traço).
  - **Segundo bug real de geometria, só aparecia no mobile**: com `catLabelR=122` fixo, testado
    num frame de 375px (bem menor que o de 34rem do desktop), os 4 rótulos de categoria
    passaram a sobrepor o SELO CENTRAL — até 25px de sobreposição no pior caso, medido com
    `getBoundingClientRect()` (distância entre o centro do selo e o retângulo do rótulo, contra
    o raio do selo). Causa: o selo central e a posição do rótulo escalam junto com o frame (são
    porcentagens), mas o TAMANHO do rótulo (fonte em rem, com ícone) não escala — então, quanto
    menor o frame, menor a "rosca" disponível em pixels reais pro mesmo rótulo de tamanho fixo.
    Confirmado por conta matemática que não existe um único `catLabelR` que sirva pros dois
    extremos (frame de 544px E de ~320–375px) sem o texto ficar ilegível de tão pequeno — mesma
    conclusão já documentada antes pros itens no anel. Resolvido do mesmo jeito que os itens:
    abaixo de 599px (onde o frame realmente começa a encolher do teto de 34rem — `min(92vw,
    34rem)` só sai do teto abaixo de ~591px de viewport) o TEXTO do rótulo de categoria some,
    só o ícone fica, com `aria-label` no botão garantindo o nome completo pro leitor de tela e o
    painel de explicação (agora na coluna esquerda) mostrando o nome por extenso ao tocar —
    breakpoint deliberadamente diferente do de 719px usado pros itens, porque a causa raiz (frame
    encolhendo do teto) só começa em ~591px, não em 719px.
  - Verificado: `.tm__layout` de fato em duas colunas com `.tm__left` na coluna 1 e `.tm__stage`
    na coluna 2 a partir de 960px (`getComputedStyle` + `gridTemplateColumns`), zero sobreposição
    rótulo-anel e rótulo-selo em 1280px/900px/760px/375px, clique num item ou categoria continua
    atualizando o painel na coluna esquerda com o texto exato já existente (conferido com o
    exemplo literal do pedido: "Baixo desempenho acadêmico" → "Aspirações e expectativas baixas
    se refletem diretamente nas notas e na permanência na escola."), `aria-label` dos rótulos de
    categoria/item preservados mesmo com texto visual escondido no mobile, sem overflow
    horizontal em nenhuma largura testada, `npx astro build` sem erros.
  **Quinta rodada — sem numeração no título, bloco introdutório removido, painel escondido até
  o hover, cores em hex exato, e reforço grande de espaçamento/quebra de linha**, pedido muito
  detalhado (22 itens) sobre a MESMA seção (layout de duas colunas já não mudou desde a rodada
  anterior, só a apresentação e o espaçamento dentro dela).
  - **Kicker sem numeração**: `teoriaMudanca.kicker` em `jornada.md` mudou de `'02 · Teoria da
    Mudança'` pra só `'Teoria da Mudança'` — pedido explícito e literal de tirar o "02 ·". As
    outras seções da página (`01 · Fundamentos`, `03 · Os três movimentos` etc.) continuam
    numeradas normalmente; só esta ficou sem número, exceção pontual, não uma mudança na
    convenção do site.
  - **Bloco introdutório longo removido por completo**: `intro.titulo`/`intro.texto` (a
    frase-lede + o parágrafo institucional que ficavam entre o kicker e o painel) pararam de ser
    passados/renderizados — a prop `intro` saiu de `TeoriaMudancaCirculo.astro` e o destructure
    `intro: tmIntro` saiu de `jornada.astro`. No lugar, a prop `lede` (que exibia `tmIntro.titulo`)
    passou a receber `tmCentro.texto` — a MESMA instrução curta que já existia como texto padrão
    do painel ("Passe o cursor..."), só ajustada de "ou toque em" pra "sobre" pra bater com a
    frase exata pedida. `intro`/`tmIntro` continuam existindo em `teoria-mudanca.json` (conteúdo
    real, só sem uso agora).
  - **O painel de explicação virou realmente "dinâmico"**: antes, ele sempre mostrava algo (o
    texto padrão "Teoria da Mudança"/instrução quando nada estava em hover); agora ele fica
    `display:none` (classe `.js-idle`, aplicada pelo próprio script assim que carrega) até o
    usuário passar o cursor ou tocar em qualquer ponto do círculo — só então aparece, com o
    conteúdo daquele ponto. Sem JS, continua visível com o texto padrão (rede de segurança de
    acessibilidade, não o caminho esperado). `showIntro()` virou `closePanel()` (só
    fecha/reseta os estados ativos, não preenche mais texto nenhum — não tem mais "texto
    padrão" pra reescrever, já que o painel escondido não precisa de conteúdo visível).
  - **Bug real de arquitetura, evitado por pouco**: a primeira ideia foi manter
    `data-reveal-block` no painel (fade-in ao entrar na viewport, como o resto da coluna
    esquerda) — mas o sistema de fade-in usa `IntersectionObserver`, que nunca dispara pra um
    elemento `display:none` (sem geometria, não há o que observar). Se o painel entrasse
    escondido, nunca ganharia a classe `is-revealed` do observer, e ficaria preso em
    `opacity:0` pra sempre mesmo depois de reaparecer no hover. Corrigido tirando
    `data-reveal-block` do painel — aparecer/sumir via `display` já É a única "revelação" dele,
    não precisa de duas animações competindo.
  - **Cores trocadas pra hex EXATOS pedidos pelo usuário**, não mais derivadas da paleta do site
    como nas rodadas anteriores: Desafios `#ED4949`, Currículo & Experiências `#B274F1` (roxo,
    não mais azul), Mudanças `#CEDFB2` (deliberadamente mais suave — pedido explícito de NÃO
    tentar saturar ou substituir), Impacto `#FFBD28`. Nenhum dos quatro passa em contraste AA
    (4.5:1) como texto contra `--color-bg` (checado: 3.5:1 / 2.97:1 / 1.34:1 / 1.58:1) — por
    isso continuam sendo usados como cor de PREENCHIMENTO (arco do anel, ícone da categoria,
    borda do ponto do item), nunca como cor do TEXTO em si: `.tm__cat-label span` ganhou
    `color: var(--color-text)` explícito (antes herdava `--cat-color` do pai) — o ícone acima do
    nome continua na cor viva da categoria, só a palavra ficou escura pra continuar legível,
    exatamente o que o próprio pedido permitia ("respeitando contraste e legibilidade").
  - **Espaçamento dos subtópicos, reforçado bem além da rodada anterior**: `itemR` (raio-base)
    subiu de 284 pra 290, o "leque" das categorias de 5 itens (Desafios) ganhou mais respiro
    angular (`pad` de 4°→7°, puxando os itens pra longe das bordas do quadrante) e as categorias
    de 2 itens (Currículo/Mudanças/Impacto) ganharam um leque próprio que não existia antes
    (`tierStep` 0→24, um item sempre um pouco mais afastado que o outro) — pedido explícito de
    que TODO subtópico tenha "sua própria área", não só os que dividem um arco cheio.
  - **Bug real de geometria, achado só testando ao vivo em largura intermediária (900px)**: a
    primeira tentativa de leque pro Desafios usou `tierStep=46` (bem mais agressivo que os 34 da
    rodada anterior) — o item do meio ("Evasão escolar") foi parar a `top:-13.67%` do frame,
    ACIMA do próprio card do círculo, quase embaixo do cabeçalho fixo do site (`position:
    sticky`), ficando praticamente ilegível/cortado. O raio de cada item não é limitado pelo
    tamanho do frame (os botões são posicionados por `%` sem `overflow:hidden` no pai, então
    "vazam" pra fora da caixa nominal do círculo livremente) — funciona bem quando há espaço de
    sobra ACIMA da seção, mas um leque grande demais no item mais "alto" (ângulo 0°, topo)
    facilmente esbarra no cabeçalho fixo. Corrigido reduzindo `tierStep` pra 28 (offset máximo
    de 56 unidades em vez de 92) — testado depois: `top` do item mais alto fica a mais de 30px
    de distância do cabeçalho em 900px de largura, a mais estreita onde isso importa.
  - **Função `n===2` separada pro leque de 2 itens**: a fórmula original do leque (pensada pra 5
    itens, com um índice central "de verdade") dá o MESMO deslocamento pros dois itens de uma
    categoria de 2, porque o centro matemático (0.5) fica exatamente entre os dois índices (0 e
    1) — sem stagger nenhum. Uma ramificação simples (`r = itemR + j * tierStep` só quando
    `n === 2`) resolve isso: o segundo item de cada par sempre um pouco mais longe que o
    primeiro.
  - **`max-width` dos rótulos de item quase dobrou** (5.75rem → 8rem) — pedido explícito de
    evitar quebra em 3 linhas quando cabe em 2 ("Perpetuação das" + "desigualdades" em vez de
    "Perpetuação" + "das" + "desigualdades"). A caixa antiga era estreita demais pra quase
    qualquer item de 2+ palavras não quebrar em 3 linhas; verificado nos exemplos citados
    literalmente no pedido ("Baixo desempenho acadêmico", "Perpetuação das desigualdades",
    "Perpetuação do ciclo de pobreza") — todos ficaram em exatamente 2 linhas.
  - Verificado: as 4 cores batendo exatamente via `getComputedStyle` (`rgb(237,73,73)` etc.),
    texto do rótulo de categoria em `--color-text` (legível) com o ícone na cor viva, painel
    escondido por padrão (`js-idle` presente) e aparecendo com o conteúdo certo no hover/clique
    de item OU categoria (testado nos dois), nenhuma colisão nova em 1280px/900px/760px/650px/
    375px, os 5 itens de Desafios com folga real entre si (nenhum "quase encostando"), item mais
    alto do Desafios sem esbarrar no cabeçalho fixo, sem overflow horizontal em nenhuma largura,
    `npx astro build` sem erros.
  **Sexta rodada — o aviso inicial e a explicação de hover viraram um único bloco (nunca mais
  "aviso + descrição" ao mesmo tempo), mais respiro entre título e kicker, cor de Mudanças
  trocada, arco mais fino, e um bug real de overflow horizontal achado numa largura nunca antes
  testada**. Pedido muito detalhado (16 itens), boa parte reafirmando itens já resolvidos nas
  rodadas anteriores — as mudanças de verdade:
  - **"Passe o cursor..." deixou de ser um parágrafo à parte, sempre visível** — antes, a prop
    `lede` renderizava um `<p class="tm__lede">` fixo acima do painel, e o painel (`.tm__panel`)
    ficava com `display:none` até o hover; resultado: o aviso NUNCA desaparecia, e a explicação
    aparecia EMBAIXO dele quando algo era hovered — exatamente o "aviso + descrição empilhados"
    que o pedido rejeitava explicitamente. Removido o parágrafo `.tm__lede` por completo; o
    painel agora é o ÚNICO lugar onde esse texto vive, com dois estados que se substituem
    (nunca coexistem): repouso (kicker/título vazios, texto = instrução, classe `.is-idle`) e
    ativo (kicker = nome da categoria, título = nome do item, texto = explicação existente).
    Kicker/título vazios desaparecem via `:empty` no CSS — mais robusto que alternar uma classe
    ou o atributo `hidden`, que teria que disputar especificidade com as regras de tamanho/cor já
    existentes nesses elementos.
  - **Bug real, cometido e corrigido ainda nesta rodada**: a primeira versão guardava o texto de
    repouso num atributo `data-tm-default-text` no elemento do PAINEL, mas o script lia
    `root.dataset.tmDefaultText` (o elemento RAIZ, `[data-tm-root]`, um nível acima) — `root`
    nunca tinha esse atributo, então `defaultText` era sempre string vazia, e sair do hover
    limpava o painel por completo (texto em branco) em vez de voltar pra instrução. Achado
    simulando o ciclo completo (hover → mouseleave) via `dispatchEvent` e comparando o texto do
    painel antes/depois — só visualmente talvez não fosse óbvio, já que o painel "ficava vazio"
    de um jeito que podia passar por um estado intermediário de transição. Corrigido lendo
    `panel?.dataset.tmDefaultText` (o elemento certo).
  - **Texto de repouso ganhou o mesmo peso visual que o antigo parágrafo fixo tinha**: como ele
    é a única coisa visível em repouso, `.tm__panel.is-idle p[data-tm-panel-text]` aplica
    `--text-h3`/peso 500/`--color-text` (a mesma receita do extinto `.tm__lede`) só nesse
    estado — assim que uma categoria/item é ativado, o texto volta ao tamanho/cor de explicação
    normais (menor, `--color-text-secondary`), definidos na regra genérica de sempre.
  - **Mais respiro entre "Jornada Pedagógica" e "TEORIA DA MUDANÇA"**: `.tm__kicker` tinha o
    mesmo `margin-top` de qualquer kicker do site (pensado pra ficar logo abaixo de um H1
    comum) — pequeno demais aqui, onde essa seção também é a abertura da página inteira. Subiu
    de `clamp(1.75rem, 1.4rem+1.5vw, 2.5rem)` pra `clamp(2.5rem, 2rem+2.5vw, 3.5rem)`.
  - **Verde de Mudanças trocado de `#CEDFB2` pra `#B8D58A`** — pedido explícito e literal: o tom
    anterior (deliberadamente suave desde a rodada anterior) "parecia quase cinza" ao lado dos
    outros três, sem presença visual suficiente. O novo é mais vívido mas continua um
    verde-claro (não satura pro mesmo nível de Desafios/Currículo/Impacto) — contraste contra
    `--color-bg` subiu de 1.34:1 pra 1.53:1, ainda bem abaixo de AA, então continua sendo usado
    só como preenchimento (arco/ícone/borda do ponto), nunca como texto — mesma regra de sempre.
  - **Arco mais fino (30→24, ativo 37→30)** — pedido de "diminuir ligeiramente o arco pra criar
    espaço", interpretado como afinar o TRAÇO em vez de reduzir o raio do anel: isso abre mais
    vão dos DOIS lados ao mesmo tempo (rótulo de categoria por dentro, pontos de item por fora)
    sem mover nenhum raio nem item — ganho de espaço com risco zero de reabrir o bug de colisão
    com o cabeçalho. `catLabelR` também desceu de 122 pra 118 (mais espaço pra "Currículo &
    Experiências" dentro do anel), puramente inward, sem risco de colisão com o selo central
    (folga de sobra confirmada por conta).
  - **Duas tentativas de aumentar `itemR` (o raio-base dos itens) foram feitas e revertidas
    nesta mesma rodada, cada uma com um bug real diferente encontrado por medição, não por
    inspeção visual**:
    1. Subir `itemR` de 290 pra 300 pra TODAS as categorias — Currículo/Impacto (categorias
       horizontais, direita/esquerda) passaram a vazar pra fora da página: medido
       `document.documentElement.scrollWidth` vs `clientWidth` em 1000px de largura, ~37px de
       overflow real. Motivo geométrico: o eixo dessas categorias é horizontal (perto de cos≈1
       na direção do quadrante), então qualquer aumento de raio empurra a coordenada X pra muito
       perto ou além de 100% do frame.
    2. Subir `itemR` só pra Desafios (topo, `itemRTop=300`, sem tocar nas demais) — resolvia o
       overflow horizontal, mas reduzia a folga entre o item mais alto ("Evasão escolar") e o
       cabeçalho fixo pra só ~7.5px no MOBILE (375px, medido via `getBoundingClientRect()`) —
       perto demais pra ser seguro (o valor de referência já validado, 290, tinha ~37px de
       folga na mesma medição). As duas tentativas foram revertidas; `itemR` ficou em 290 pra
       todas as categorias, o mesmo valor já validado antes desta rodada.
  - **Bug real e mais significativo desta rodada, achado testando uma largura NUNCA antes
    verificada (1000px)** — não foi introduzido por nenhuma mudança desta rodada, já existia
    desde a versão anterior, só nunca tinha sido pego porque as larguras testadas até aqui
    (1280/900/760/650/375) não caem na faixa de risco: com a coluna do círculo em
    `minmax(0, 1.1fr)`, ela fica mais estreita que `34rem` numa faixa entre 960–~1080px de
    viewport — o `.tm__frame` (`width: min(100%, 34rem)`) encolhe junto, mas os itens de
    Currículo (posicionados perto da horizontal, onde o texto cresce PRA FORA do quadrante,
    "Currículo de habilidades-chave"/"Histórias de referência") sempre ultrapassam a borda
    direita do próprio frame em ~30–43px — isso é uma característica DELIBERADA do design (os
    pontos ficam fora da caixa do círculo por toda a circunferência, não só à direita), só que
    do lado esquerdo essa folga sempre existiu de graça (a coluna de texto não encosta no frame,
    sobra um vão) e do lado direito não há mais nenhuma coluna depois — sem uma reserva
    explícita, o vazamento ultrapassava a página inteira. Em 1280px/900px/375px (as larguras já
    testadas antes) o layout tinha folga suficiente por acidente (container mais largo ou coluna
    única) pra esconder esse mesmo vazamento. Corrigido com duas mudanças na regra de
    960px: `grid-template-columns: minmax(0, 1fr) minmax(calc(34rem + 3.5rem), 1.1fr)` (a coluna
    do círculo nunca fica mais estreita que 37.5rem, garantindo que o frame sempre atinja seu
    teto de 34rem assim que o layout vira duas colunas) e `.tm__stage { justify-content:
    flex-start }` só nessa media query (o frame encosta à ESQUERDA da coluna, então toda a folga
    extra de 3.5rem vira espaço à DIREITA — onde o vazamento realmente precisa ir — em vez de
    ser dividida ao meio por uma centralização). Verificado sistematicamente em 960px/1000px/
    1100px/1280px (a faixa toda, não só os extremos) com `scrollWidth`/`clientWidth`: resíduo de
    2px em alguns casos (já documentado antes como resíduo pré-existente do site, sem relação
    com este componente) em vez dos 30-43px de antes.
  - Verificado: as 4 cores computadas via `getComputedStyle` batendo exatamente com os hex
    pedidos; painel alternando corretamente entre repouso e ativo via hover real do mouse E via
    `dispatchEvent` sintético (ciclo completo: repouso → hover → mouseleave → repouso de novo,
    com o texto de instrução restaurado); clique/toque funcionando igual no mobile (375px);
    "Currículo & Experiências" com ~20px de folga até o arco roxo (medido); zero overflow
    horizontal em 960/1000/1100/1280/375px; folga de ~37px entre "Evasão escolar" e o cabeçalho
    fixo em 375px; `npx astro build` sem erros.
  **Sétima rodada — rótulos curtos ao redor do círculo, e dois bugs reais de layout achados só
  ao medir o resultado**, pedido explícito ("os textos ao redor do círculo devem funcionar
  apenas como RÓTULOS CURTOS... nenhum subtópico em três linhas").
  - **Novo campo `rotulo` por item em `teoria-mudanca.json`, separado de `titulo`**: os 11
    itens ganharam a versão curta exata pedida (ex.: "Perpetuação das desigualdades" →
    "Desigualdades", "Baixo desempenho acadêmico" → "Desempenho acadêmico") — `titulo` (nome
    completo) continua existindo e sem alteração nenhuma, porque é ele quem alimenta o
    `aria-label` do botão E o painel de explicação dinâmica no hover (`panelTitle.textContent =
    item.titulo`, em `TeoriaMudancaCirculo.astro`) — só o `<span class="tm__item-label">` (o
    texto visível sobre o círculo) passou a ler `item.rotulo`. `texto` (a explicação completa)
    não foi tocado em nenhum item, exatamente como pedido ("RÓTULO = curto, EXPLICAÇÃO =
    completa").
  - **Bug real, achado medindo (não só olhando): "Histórias de referência" quebrava em 3 linhas
    mesmo tendo `max-width` de sobra (8rem/128px) pra caber em 2** — a causa não tinha nada a
    ver com o tamanho do texto. `.tm__item` é `position:absolute; width:auto` com só `left`
    definido (nunca `right`); pra esse caso o algoritmo CSS de "shrink-to-fit" usado pra
    resolver a largura leva em conta o espaço "disponível" do `left` até a borda do containing
    block — pra itens perto da borda do frame (ex.: Currículo, com `left` perto de 100%), esse
    espaço disponível é pequeníssimo (o layout não sabe que o `transform:
    translate(-50%,-50%)` vai recentralizar o botão depois — isso é só visual, aplicado depois
    do cálculo de layout). Resultado: o botão (dot+rótulo em flex row) encolhia bem abaixo da
    largura natural do texto, forçando cada palavra pra uma linha. Medido: a largura renderizada
    do rótulo era só 64px, a METADE do `max-width` de 128px disponível. Corrigido com
    `width: max-content` em `.tm__item` — isso diz ao navegador pra ignorar essa conta de
    "espaço disponível até a borda" e usar o tamanho de conteúdo de verdade, limitado só pelo
    `max-width` do `<span>` filho. Efeito colateral bom: "Habilidades-chave" (que antes também
    vinha sendo ligeiramente espremida, só não o bastante pra estourar 2 linhas) passou a caber
    numa linha só.
  - **Segundo bug real, um clássico já documentado várias vezes neste arquivo (mesma
    especificidade, quem vem DEPOIS no arquivo vence) — achado só depois do fix acima, porque
    ele SÓ aparece quando o rótulo é grande o bastante pra realmente testar o buffer de
    overflow**: corrigir o encolhimento acima revelou que o overshoot real de "Histórias de
    referência" pra fora do frame é bem maior do que o medido antes (75px, não 43px — o número
    anterior já estava distorcido pelo próprio bug do encolhimento). O buffer de
    `grid-template-columns` da rodada anterior (34rem + 3.5rem) ficou pequeno demais; subir pra
    +5.5rem não bastou sozinho, porque `.tm__stage { justify-content: flex-start }` (que deveria
    jogar TODA a folga extra pro lado direito, onde o vazamento precisa ir) estava sendo
    silenciosamente vencida por uma regra `.tm__stage { justify-content: center }` mais abaixo
    no arquivo, FORA de qualquer media query — a mesma classe de bug já documentada e corrigida
    duas vezes antes neste componente (ordem/pseudo-especificidade em CSS), desta vez pegando o
    `justify-content` em vez do `order`. Com o frame VOLTANDO a centralizar (em vez de encostar
    à esquerda), a folga de 5.5rem ficava dividida ao meio — só ~44px sobravam à direita em vez
    dos ~88px pretendidos, e o vazamento voltava a estourar a página (confirmado via
    `scrollWidth`/`clientWidth`: ~18px de overflow residual mesmo com o buffer maior). Corrigido
    movendo a declaração-base de `.tm__stage { display:flex; justify-content:center }` pra
    ANTES do `@media(min-width:960px)` que a sobrescreve — mesmo padrão de fix já usado nas
    regras de `order` deste componente.
  - Verificado, sistematicamente, depois dos dois fixes: os 11 rótulos (`getBoundingClientRect()`
    ÷ `line-height`) todos em 1 ou 2 linhas, nenhum em 3; zero overflow horizontal em
    960/1000/1100/1280px (`scrollWidth === clientWidth` exato, não só "resíduo de poucos
    pixels" como nas rodadas anteriores); `justify-content: flex-start` de fato aplicado
    (`getComputedStyle`); folga de ~37px entre "Evasão escolar" e o cabeçalho fixo em 375px
    (inalterada); hover real do mouse (não só evento sintético) em "Desigualdades" confirmando
    visualmente que o rótulo sobre o círculo é o curto mas o painel à esquerda mostra o título
    completo ("Perpetuação das desigualdades") e a explicação de sempre, sem nenhuma palavra
    removida; `npx astro build` sem erros.
  **Oitava rodada — a roda não cabia inteira na tela (descrições de Mudanças ficavam fora de
  vista), rótulos de categoria ainda perto demais do centro, e "Currículo & Experiências" virou
  só "Intervenção"**, três pedidos explícitos.
  - **"Currículo & Experiências" → "Intervenção"**: só o campo `nome` da categoria `curriculo`
    em `teoria-mudanca.json` mudou — `id` (`curriculo`), ícone (`livro`) e todo o conteúdo dos
    dois itens dentro dela (`titulo`/`texto`) continuam intactos, incluindo o campo `resumo` que
    alimenta o painel ao passar o cursor na categoria.
  - **A roda não cabia na tela — causa raiz confirmada antes de mexer em qualquer CSS**: o
    círculo (34rem/544px) fixo, mais o cabeçalho fixo e o respiro da seção, já passava da altura
    visível em telas de laptop mais baixas (768-800px), empurrando a metade de baixo (Mudanças)
    pra fora da primeira tela. Como o painel de explicação (coluna esquerda) não é `sticky`, ao
    rolar a página até alcançar os itens de Mudanças o painel também saía de vista — o usuário
    passava o cursor no ponto verde mas nunca via a explicação aparecer, porque ela já tinha
    rolado pra fora da tela. Corrigido limitando `.tm__frame` (só no layout de duas colunas,
    960px+) por altura de viewport: `width: min(100%, 34rem, calc(100vh - var(--header-height) -
    17rem))` — os 17rem cobrem cabeçalho+respiro da seção+o quanto os itens "vazam" pra fora da
    caixa do próprio círculo (documentado nas rodadas anteriores). Em telas altas o `34rem`
    continua vencendo o `min()` e nada muda; só encolhe onde o problema de fato acontecia.
    Verificado sistematicamente (não só visualmente) em 700/768/800/900/1024px de altura: a
    700, 768 e 800px o círculo agora encolhe (356px/456px/456px de frame) e TODOS os itens
    (inclusive os de Mudanças) ficam dentro de `[headerBottom, viewportHeight]` sem precisar
    rolar; a 900 e 1024px o frame permanece nos 544px de sempre (comportamento inalterado).
  - **Rótulos de categoria (Desafios/Intervenção/Mudanças/Impacto) mais distantes do centro —
    bug real, achado medindo em vez de só calcular**: a primeira tentativa foi simplesmente subir
    `catLabelR` pro ponto médio matemático entre o selo central e o anel — mas a "rosca"
    disponível ali tem só ~107px de largura no frame de 34rem, quase do tamanho do próprio
    rótulo mais largo ("Intervenção", ~104px com ícone+padding); sobrava só ~3px de folga TOTAL
    pra dividir entre os dois lados, e o botão chegava a ficar a menos de 1px da borda do selo
    (medido via `getBoundingClientRect()`) não importa qual `catLabelR` fosse escolhido —
    NENHUM valor sozinho resolvia. Resolvido com três ajustes combinados, todos pequenos: (1)
    `.tm__cat-label` padding reduzido de 0.4rem pra 0.2rem; (2) fonte do rótulo reduzida de
    0.75rem pra 0.7rem; (3) selo central encolhido de raio 84 pra 74 (só a partir de 599px — ver
    abaixo). Com os três, `catLabelR` subiu de 118 pra 138 (o novo ponto médio recalculado) e a
    folga passou a ~12px de cada lado pro rótulo mais largo, medido e confirmado ao vivo
    (`getBoundingClientRect()` do botão vs. borda do selo e vs. borda interna do anel, ambos
    ~12.4px) — as outras três categorias (rótulos mais curtos) ficam com folga ainda maior.
  - **Bug real, achado só num screenshot de mobile de verdade (não em medição isolada)**:
    encolher o selo central pra 74 quebrou "TEORIA DA MUDANÇA" no mobile — o texto vazava pra
    fora do círculo escuro, porque abaixo de 599px o FRAME também já encolheu bastante
    (`min(92vw,34rem)`), e um selo 12% menor não sobra espaço suficiente pras 3 linhas do texto.
    Mas abaixo de 599px o texto do rótulo de categoria já fica escondido (só o ícone aparece —
    ver a media query mais antiga que já fazia isso), então não existe crowding pra resolver
    ali — o selo menor só era necessário a partir de exatamente onde o rótulo de categoria
    volta a mostrar texto. Corrigido tornando o raio do selo condicional: `84` como base (mobile,
    <599px) e `74` só dentro de `@media (min-width: 599px)`, a MESMA largura onde o texto do
    rótulo de categoria reaparece — nenhuma das duas larguras "compete" pela mesma faixa.
  - Verificado depois dos dois fixes: "TEORIA DA MUDANÇA" sem vazar do selo em 375px nem em
    650px (a faixa intermediária onde o selo já é o menor, mas o frame ainda não encolheu tanto
    quanto no mobile); as 4 cores/rótulos com folga ~12px+ de cada lado em 1280px; hover na
    categoria "Intervenção" (`dispatchEvent`) atualizando o painel com kicker/título/texto
    corretos; zero overflow horizontal em 375/650/1280/1440px; `npx astro build` sem erros.
  **Nona rodada — o círculo cresce pra usar o espaço vazio à direita, em vez de ficar preso num
  teto fixo**, pedido explícito ("tanto espaço pra direita, deixar a roda mais pra direita e o
  mais grande possível até o ponto de caber inteira na tela").
  - **Causa raiz real, achada medindo em 1440px E 1920px e comparando os números (idênticos nos
    dois — o primeiro sinal de que o gargalo não era o grid interno)**: o `.container` do site
    (`--container-width: 72rem`/1152px, o MESMO teto usado por toda seção do site) já estava no
    limite antes mesmo de qualquer ajuste na coluna do círculo — não importa quão generosa a
    proporção `fr` da coluna fosse, não sobrava espaço NENHUM pra crescer além disso.
  - **Dois bugs reais de CSS Grid, achados nessa ordem, cada um só depois de medir o resultado
    do anterior**:
    1. Primeira tentativa: só aumentar a proporção `fr` da coluna do círculo (de `1.1fr` pra
       `1.6fr`, mantendo a coluna de texto em `1fr`) — não mudou NADA
       (`getComputedStyle().gridTemplateColumns` continuava idêntico). Causa: numa trilha
       `minmax(MIN, Nfr)`, se `MIN` (aqui, o piso de 41rem da coluna do círculo) já é maior que
       a fatia que `Nfr` receberia da distribuição normal do espaço sobrando, o Grid TRAVA essa
       trilha no próprio `MIN` e manda TODO o restante pra outras trilhas flexíveis — na prática
       a coluna do círculo só superaria essa fatia em larguras de viewport impraticáveis
       (~1800px+), então ficava sempre presa no piso, e a coluna de TEXTO (sem piso) absorvia
       tudo que sobrava, o oposto do pedido. Corrigido invertendo os papéis: a coluna de texto
       ganhou um TETO fixo (`minmax(0, 26rem)`, o mesmo já usado em `.tm__title`) em vez de uma
       fração `fr`, e a coluna do círculo virou a ÚNICA trilha flexível (`1fr`) — assim ela
       recebe automaticamente todo o espaço que a coluna de texto não usar, sem depender de
       conta de proporção nenhuma.
    2. Mesmo depois desse fix, o resultado continuava idêntico em 1440px E 1920px — foi aí que a
       causa real (o teto do `.container`) foi confirmada: testado comparando as duas larguras
       lado a lado, os números batiam exatos nas duas, prova de que o `.container` (72rem) já
       tinha estourado seu próprio limite bem antes de 1440px, então nenhuma mudança de
       distribuição interna do grid tinha efeito nenhum a partir dali.
  - **Corrigido com um `max-width` maior só pra esta seção** (`.hero-teoria .container`, em
    `jornada.astro`) — não é uma mudança no token `--container-width` global, que continua
    intocado em qualquer outra seção do site. `clamp(72rem, 94vw, 100rem)` — nunca menor que o
    padrão do site (o piso de 72rem evita um bug sutil: um `min(100rem, 94vw)` sem esse piso
    encolheria o container abaixo do padrão em larguras médias tipo 1200px, onde 94vw já dá só
    70.5rem), cresce com a tela até um teto de 100rem (bem generoso, mas ainda finito).
  - **`.tm__frame` perdeu o teto fixo de 34rem**, que antes existia só pra não deixar o círculo
    enorme — agora o teto é um limite de sanidade bem mais folgado (60rem, praticamente nunca
    alcançado numa tela real), e os dois limites que realmente importam continuam sendo: altura
    disponível (`calc(100vh - header - 17rem)`, da rodada anterior) e largura da própria coluna
    (`100%`, que já desconta automaticamente o `padding-right` reservado pro vazamento dos
    itens — porcentagem de largura num item flex resolve contra o content-box do container,
    então o padding já sai da conta sozinho).
  - **`.tm__stage` trocou de `justify-content: flex-start` (encostado à esquerda, com o vazamento
    reservado à direita via `grid-template-columns`) pra `flex-end` + `padding-right: 7rem`** —
    pedido explícito de "colocar a roda mais pra direita". A reserva pro vazamento dos itens
    (que antes vinha de inflar a largura mínima da coluna no `grid-template-columns`) migrou pra
    esse `padding-right` — mais direto, e funciona em qualquer largura de coluna, não só na
    mínima.
  - Verificado sistematicamente (não só em dois pontos): frame crescendo de fato com mais espaço
    disponível — 544px em 960-1280px (limitado pela largura da coluna nessas larguras mais
    estreitas), 556px em 1440×900 (limitado pela ALTURA aqui), 656px em 1920×1000 (limitado pela
    altura de novo, `100vh - header - 17rem` = 656 exato) — confirmando que os dois limites
    (altura e largura) alternam qual deles governa dependendo da tela, como pretendido. Vazamento
    dos itens (`maxOverRight`) medido em 75px em TODAS as larguras testadas (960/1000/1100/1280/
    1440/1920px), sempre dentro da reserva de 112px, zero overflow horizontal em nenhuma delas
    nem no mobile (375px, onde o `.container` não muda — o `clamp` tem piso de 72rem, igual ao
    padrão de sempre); `npx astro build` sem erros.
  **Décima rodada — as bolinhas dos itens voltaram a ter raio 100% uniforme, de vez** — pedido
  explícito e literal ("as bolinhas... estão jogadas, sem ordem... gostaria que seguissem a
  circunferência e não se sobressaíssem entre si"), depois de várias rodadas anteriores (ver
  "Sétima/Oitava rodada", acima) terem resolvido colisão de rótulo trocando o raio uniforme por
  esquemas de raio VARIÁVEL (pirâmide → vale simétrico com `VALLEY`/`TIE`/`RAMP2`) — esses
  esquemas resolviam a colisão, mas deixavam as bolinhas visivelmente a distâncias diferentes do
  centro, exatamente o "jogado sem ordem" reclamado agora.
  - **Duas tentativas intermediárias, testadas ao vivo e descartadas antes da versão final**:
    1. Manter o raio uniforme e resolver a colisão só no ÂNGULO — uma curva `sin` que afasta os
       itens do meio do arco de 5 pontos de Desafios (onde a curva do círculo é mais rasa,
       dando pouca diferença de altura entre vizinhos) e aproxima os das pontas. Resolvia a
       colisão do meio, mas criava uma colisão NOVA nas pontas (que perdiam espaço pro meio
       ganhar) e o resultado visual ficava em zigue-zague — visualmente confirmado com
       screenshot: o item do meio bem mais alto que os vizinhos lê como "desalinhado" da mesma
       forma que o raio variável lia, só que por outro eixo.
    2. Manter o raio uniforme e recuar (raio menor) só o item que cai exatamente no ápice do
       quadrante (`j === centerIdx`, só acontece em Desafios, que tem `n` ímpar) e opcionalmente
       seus vizinhos, numa tentativa de ganhar folga contra o cabeçalho fixo numa tela baixa
       (1440×700). Ganha a folga, mas qualquer recuo grande o bastante pra ajudar de verdade
       introduz colisão nova entre o vizinho recuado e a PONTA do arco (que fica parada no raio
       cheio) — a mesma treta de sempre, só entre um par diferente.
  - **Versão final: raio (`itemR`) E ângulo (`step`) 100% uniformes, sem nenhuma exceção** — as
    11 bolinhas (5 de Desafios + 2 de cada uma das outras 3 categorias) ficam geometricamente no
    MESMO círculo, não só "quase". Testado ao vivo (não calculado, depois de duas rodadas de
    matemática de raio que sempre divergiu um pouco do resultado renderizado): a curvatura do
    próprio círculo já entrega uma pequena diferença de altura natural entre itens vizinhos —
    suficiente pra nenhuma colisão REAL de texto sobrar. As poucas sobreposições de bounding box
    que ainda aparecem em medição programática (`getBoundingClientRect()`, no máximo ~7px de
    y-overlap, sempre entre o item do meio de Desafios e seus dois vizinhos) caem dentro da
    entrelinha vazia dos rótulos, não em cima de letra nenhuma — confirmado abrindo screenshot
    de verdade em várias larguras, não só pela medição. `n===2` (Currículo/Mudanças/Impacto)
    nunca teve esse problema — só 2 itens por quadrante, sempre nas duas pontas, longe demais um
    do outro pra colidir mesmo no mesmo raio.
  - **Bug real de metodologia de teste, achado e corrigido no meio desta rodada — provavelmente
    invalida medições de "folga de cabeçalho" de rodadas anteriores também**: o site inteiro tem
    `scroll-behavior: smooth`. Um `scrollIntoView({block:'center'})` chamado num script síncrono
    de teste dispara a rolagem, mas o script segue e mede `getBoundingClientRect()` no MESMO
    tick, antes de a rolagem suave terminar — cada medição pega a página num ponto ARBITRÁRIO da
    animação de rolagem, dando números diferentes (e não confiáveis) a cada execução do mesmo
    teste. Combinado com o bug de fade-in já documentado antes neste arquivo (elemento com
    `data-reveal-block` só perde `opacity:0` depois que o `IntersectionObserver` dispara, o que
    exige o pane realmente compondo/pintando frames), as duas causas juntas produziram, no meio
    desta rodada, uma comparação claramente errada (o esquema ANTIGO de raio variável parecia
    "mais seguro" contra o cabeçalho do que o novo raio uniforme, numa tela de 1440×700) — só
    descoberta ao perceber que medir a mesma página duas vezes seguidas, sem mudar nada, dava
    números bem diferentes. Corrigido usando sempre `scrollIntoView({block:'center',
    behavior:'instant'})` (nunca o padrão smooth) e forçando `classList.add('is-revealed')` em
    todo `[data-reveal-block]`/`[data-reveal-words]` antes de qualquer `getBoundingClientRect()`
    de verificação. Com a metodologia corrigida, o esquema ANTIGO de raio variável já furava o
    cabeçalho fixo por ~25px nessa mesma tela de 1440×700 — um bug real e PRÉ-EXISTENTE de todas
    as rodadas anteriores deste componente (nunca corrigido nesta, por estar fora do escopo do
    pedido — só documentado aqui pra uma rodada futura que queira revisitar o piso de altura do
    `.tm__frame`, hoje `max(34rem, calc(100vh - header - 17rem))`). O raio uniforme desta rodada,
    na mesma tela, fura só ~3px — ainda não perfeito, mas uma melhora real sobre o que já estava
    no ar, não uma regressão.
  - Verificado sistematicamente com a metodologia corrigida: 1440×700/768/900/1200 e 1600×1600
    (frame crescendo de 544 até ~768px conforme a altura disponível), 960/1000/1920px de largura
    e mobile 375px — zero overflow horizontal em todas; interação por clique/hover atualizando o
    painel de explicação corretamente (testado clicando "Falta de interesse" de verdade, não só
    programaticamente); `npx astro build` sem erros. O item (e) do pedido original (rótulos de
    categoria alinhados ao meio entre o círculo interno e o anel colorido, `catLabelR`) não foi
    tocado nesta rodada — geometria intacta desde a "Oitava rodada".
  **Décima primeira rodada — a distância bolinha↔anel colorido não era igual entre as 4
  categorias**, pedido explícito ("as amarelas e roxas estão coladas no círculo colorido... quero
  que elas fiquem na mesma posição entre si"). Bug real de arquitetura, não de geometria — o raio
  (`itemR`) já era idêntico pras 11 bolinhas desde a rodada anterior, então o problema não estava
  na conta, estava em ONDE essa conta era aplicada.
  - **Causa raiz**: `.tm__item` (o botão clicável) combinava bolinha + rótulo num único flex
    container, e o `left/top` calculado no frontmatter (a posição a `itemR` do centro) marcava o
    centro DESSA CAIXA INTEIRA — não o centro da bolinha em si. Como o rótulo é um retângulo bem
    mais LARGO que ALTO, o desvio entre "centro da caixa" e "centro da bolinha" é bem maior no
    eixo em que o rótulo é grande. Nas categorias `top`/`bottom` (Desafios/Mudanças, bolinha+
    rótulo empilhados na VERTICAL), esse desvio é só ~metade da ALTURA do rótulo (uma ou duas
    linhas de texto, poucos px) — quase imperceptível. Nas categorias `right`/`left`
    (Intervenção/Impacto, bolinha+rótulo lado a lado na HORIZONTAL), o desvio é ~metade da
    LARGURA do rótulo (um rótulo inteiro, dezenas de px) — por isso só essas duas apareciam
    "coladas" no anel: a bolinha de verdade era puxada bem mais pra dentro do círculo (mais perto
    do anel) do que as das outras duas categorias, mesmo todas usando o mesmo `itemR` no cálculo.
    Confirmado medindo a distância real do centro do círculo até cada bolinha antes do fix: as 11
    davam valores DIFERENTES (apesar do mesmo `itemR`), variando com o tamanho do rótulo de cada
    item — não com a categoria em si, só que rótulos de `right`/`left` também são, em geral, os
    mais LARGOS (frases inteiras, ex. "Histórias de referência"), então o efeito parecia "ser da
    categoria" quando na verdade era do formato do texto.
  - **Correção estrutural**: `.tm__item` deixou de crescer com o conteúdo — agora é um quadrado
    de tamanho FIXO (`1.75rem`), sempre do mesmo tamanho não importa o texto, com a bolinha
    centralizada dentro dele via flex. O `left/top`+`transform:translate(-50%,-50%)` agora
    centraliza essa âncora fixa (e, por consequência, a bolinha) exatamente no ponto calculado —
    nunca mais afetado pelo tamanho do rótulo. O rótulo (`.tm__item-label`) virou
    `position:absolute` DENTRO do botão, deslocado da borda da âncora por uma margem fixa
    (`0.5rem`) na direção certa por `data-pos` (`bottom`/`top`/`left`/`right`: `calc(100% +
    0.5rem)`) — ele nunca mais faz parte da conta de tamanho/centro do botão, só "pendura" a
    partir da âncora. `width:max-content` (um workaround do box-model do botão antigo, bem mais
    complexo) saiu por completo — sem o rótulo fazendo parte do tamanho do botão, o bug que esse
    hack contornava nem se aplica mais.
  - **Alvo de toque no mobile, ajustado pro novo modelo**: a media query `max-width:719px`
    aumentava o alvo de toque via `padding` em `.tm__item` — como `.tm__item` não tem mais
    `padding` (o tamanho agora é `width`/`height` fixos), a mesma regra virou `width`/`height:
    2.25rem` (era `1.75rem` + `0.65rem` de padding, aproximadamente o mesmo alvo final).
  - **Efeito colateral real, achado só depois do fix**: com a bolinha agora na posição EXATA
    (sem o desvio-pra-dentro que a categorias `top` tinham por acidente antes), o rótulo do topo
    do arco de Desafios passou a furar o cabeçalho fixo de verdade em telas de altura moderada
    (medido ~40-45px de sobreposição em 1440×700/768/800/900/1024px — bem mais larga que a faixa
    "extrema" já documentada na rodada anterior). O desvio acidental de antes estava, sem querer,
    mascarando esse problema (empurrando a bolinha pra baixo o suficiente pra parecer seguro).
  - **Segundo bug real de metodologia de teste, achado corrigindo o de cima**: `scrollIntoView({
    block:'center'})` (mesmo com `behavior:'instant'`) não é uma referência estável pra comparar
    "antes/depois" quando o próprio layout muda de altura entre uma versão e outra (ex.: ao somar
    `padding-top`) — centralizar o ELEMENTO na tela desloca o PONTO DE SCROLL de forma diferente
    conforme o conteúdo ao redor muda, então duas medições "antes/depois" nem sempre comparam a
    mesma situação real de uso. Trocado por uma referência que representa o cenário real (o
    usuário rolando a página até a seção aparecer): `window.scrollTo` até o topo do
    `.tm__layout` encostar exatamente na base do cabeçalho fixo (`layout.getBoundingClientRect().
    top - header.height`) — estável entre versões, porque não depende do tamanho do elemento
    medido, só da posição da seção na página.
  - **Fórmula de correção, duas tentativas responsivas descartadas antes da fixa**: a intuição
    inicial foi um `padding-top` em `clamp()` crescendo conforme a altura da tela encolhe — mas
    medido que o "estouro" do rótulo acima do `.tm__frame` é praticamente CONSTANTE (~43-45px)
    em qualquer altura de viewport testada (700 a 1024px) e qualquer tamanho de frame (544 a
    680px), porque esse estouro vem quase todo do tamanho FIXO do rótulo (fonte em `rem`, não
    escala com o círculo) — não faz sentido uma fórmula que dá respiros diferentes pra alturas
    de tela que na prática têm o MESMO estouro. Duas fórmulas responsivas (inclinação suave, depois
    um degrau mais abrupto) foram testadas e descartadas por ainda darem respiro insuficiente
    perto dos 900-1024px. Resolvido com um valor FIXO, sem `clamp`/`calc`: `padding-top: 3rem` em
    `.tm__stage` (era `0.5rem`), suficiente em toda a faixa 700–1200px testada.
  - Verificado, com a metodologia de scroll corrigida: as 11 bolinhas exatamente no mesmo raio
    (medido `Math.hypot` do centro do círculo até cada bolinha — 268.7px idêntico nas 11, em
    1440×900) — a distância bolinha→anel agora é a mesma nas 4 categorias; folga contra o
    cabeçalho positiva (23–29px) em 700/768/800/900/1024/1200px de altura e 960/1000/1440/1920px
    de largura, além do mobile (375px, 22.8px de folga); zero overflow horizontal em todas;
    interação por clique real (não só programática) atualizando o painel corretamente; `npx
    astro build` sem erros. Restam só 2 sobreposições residuais de bounding box entre rótulos
    vizinhos de Desafios (5-16px), mesma natureza já documentada na rodada anterior (entrelinha
    vazia do texto, não letra sobre letra) — confirmado visualmente via screenshot, não seriam
    perceptíveis pro usuário.
  **Décima segunda rodada — as 4 fatias do círculo pararam de ser sempre 90° cada**, pedido
  explícito ("a circunferência vermelha pode ser um pouco maior, diminuindo a roxa e a amarela...
  pra caber todos os pontos sem que os rótulos fiquem muito colados"). Até aqui, Desafios (5
  itens) e Currículo/Impacto (2 itens cada) brigavam pelo mesmo espaço angular (90° cada,
  não importa quantos itens tinham dentro) — Desafios sempre foi a categoria mais espremida do
  componente (documentado desde a "Sétima rodada"), enquanto Currículo/Impacto sempre sobraram
  com folga.
  - **`spans` deixou de ser hardcoded com 4 valores de 90°** — virou uma cadeia derivada de duas
    constantes (`DESAFIOS_SPAN = 130`, `MUDANCAS_SPAN = 90`, sem pedido de mudança pra Mudanças)
    mais `SIDE_SPAN = (360 - DESAFIOS_SPAN - MUDANCAS_SPAN) / 2 = 70`, dividido igualmente entre
    Currículo e Impacto (as duas categorias que o pedido citou por nome pra diminuir). Os quatro
    limites (`desafiosStart/End`, `curriculoEnd`, `mudancasEnd`, `impactoEnd`) são encadeados um
    a partir do fim do anterior — trocar só as duas constantes no futuro recalcula tudo sozinho,
    sem precisar tocar em mais nada. `arrowPaths` (as setas de fluxo entre categorias) também
    passou a usar esses mesmos quatro limites em vez dos `-45/45/135/225` fixos de antes.
  - **Resultado geométrico**: Desafios (`pad=7`, `n=5`) ganhou um `step` de 23.2° entre itens
    (era 15.2°, +53%) — os 2 residual overlaps de bounding box da rodada anterior (5-16px,
    "falta-interesse x baixo-desempenho" e "desigualdades x ciclo-pobreza") desapareceram por
    completo, confirmado medindo (não só olhando): zero colisão de rótulo em qualquer largura ou
    altura testada, pela primeira vez desde que o raio virou uniforme. Currículo/Impacto
    (`pad=14`, `n=2`) perderam `step` de 31° pra 21° — ainda bem confortável pra só 2 itens por
    quadrante (nunca colidiram nem no espaçamento mais apertado de rodadas anteriores).
  - **`pos` (a direção do rótulo — acima/abaixo/direita/esquerda do pontinho) continua por
    categoria, não por item** — mesmo com Currículo/Impacto agora levemente descentrados do eixo
    cardeal exato (`mid` de Currículo é 100°, não mais 90°; Impacto é 260°, não mais 270°), a
    leitura "basicamente à direita"/"à esquerda" continua válida visualmente; nenhuma mudança
    necessária nessa lógica.
  - **Bug real de metodologia de teste, achado de novo nesta rodada — variação de
    `scrollIntoView`, dessa vez ligada a quando o pane de teste está OCULTO**: com o pane oculto
    (mensagem "`O painel do navegador está oculto no momento`", já documentada antes neste
    arquivo por outro motivo), a página existe e o DOM/CSS calculam posições corretamente
    (confirmado via `getBoundingClientRect()`), mas a primeira screenshot depois de uma mudança
    grande sai em branco — o pane só GENUINAMENTE compõe/pinta um frame nesse estado quando algo
    força isso (mesma causa-raiz já documentada váras vezes: transições/animações "congeladas"
    com o pane oculto). Não é um bug de código — confirmado que os elementos existem, têm
    posição/tamanho corretos e o build não tem erro nenhum; só a screenshot de verificação
    volta em branco até o pane ser composto de verdade (uma chamada de screenshot subsequente,
    depois de alguma interação, geralmente resolve).
  - **Segundo bug real, de cálculo de folga contra o cabeçalho, achado remedindo com cuidado
    depois da mudança de `spans`**: a folga de `padding-top: 3rem` (fixada na rodada anterior)
    tinha, na real, só ~2-3px de sobra numa checagem mais rigorosa em 1440×900 — perto demais do
    risco pra um valor pensado como "seguro" (a medição de 26px que validou esse valor na rodada
    anterior não resistiu a uma reconferência nesta rodada, possivelmente por ter sido feita
    logo depois de uma sequência de `tmCheck()` repetidos sem `navigate` novo entre eles, que
    pode ter deixado a posição de scroll arrastar de uma chamada pra outra). Subido pra `4.5rem`
    — testado e confirmado com folga real de 50-53px em 700/900/1024px de altura desta vez,
    remedido do zero a cada teste (sempre com `navigate` novo antes de medir, nunca reusando
    scroll de uma chamada anterior).
  - Verificado: as 11 bolinhas ainda no mesmo raio em qualquer tamanho de frame (262.9 a 328.7px
    conforme o frame cresce, sempre idêntico entre as 11 pro mesmo frame — confirmado via
    `Math.hypot` do centro do círculo até cada bolinha); zero colisão de rótulo em
    700/900/1024px de altura e 960/1440/1920px de largura, além do mobile (375px); folga contra
    o cabeçalho de 50-53px nessas mesmas telas (mobile: 22.8px, herdada da rodada anterior sem
    mudança já que o `padding-top` de 4.5rem é só da versão desktop de duas colunas); zero
    overflow horizontal; `npx astro build` sem erros.

- **Página `/teoria-da-mudanca` removida** (a pedido: o conteúdo já está na Jornada e na Atuação). Saíram a página, o
  item "Teoria da Mudança" do menu ([nav.ts](src/i18n/nav.ts)) e `conteudo/teoria-da-mudanca.json`. O círculo
  interativo continua só na Jornada (seção final).
- **Círculo da Teoria da Mudança, décima terceira rodada** ([TeoriaMudancaCirculo.astro](src/components/TeoriaMudancaCirculo.astro)):
  círculo mais pra cima/esquerda (`padding-top: 3rem`, `padding-right: 9rem` + mínimo da coluna `34rem + 9rem`),
  quebras de linha forçadas nos rótulos ("Ciclo de
pobreza", "Histórias de
referência") com `white-space: pre-line`
  — o que exigiu `width: max-content` no rótulo (elemento absoluto só com `left` encolhe pro espaço disponível até a
  borda e quebrava em 3 linhas). Em coluna única de 720–959px o frame agora é `min(100vw - 18rem, 34rem)`: os rótulos
  laterais (que saem do círculo) estouravam a tela (~39px de scroll horizontal a 731px).
- **Ordem das seções da Jornada** (a pedido: "A Jornada em 3 atos" cita as Diretorias de Talentos, então vem depois delas): abertura → 01 Em que
  acreditamos (com a Teoria da Mudança) → 02 Comece aqui: o jogo da vida → 03 Seis Diretorias de Talentos → **04 A Jornada em 3 atos** →
  05 Antes e depois → 06 Como sabemos que funciona. (A numeração do doc original era outra; a ordem acima é a que vale.)
- **Doc "TEXTOS DO SITE" aplicado (out/2026)** — Google Doc com uma aba por página (Home, Atuação, Jornada, Contato) e
  comentários/sugestões já resolvidos; é a fonte dos textos finais. Lido via conector do Google Docs (o JSON passa de
  300k caracteres: extraído por script Node, não lido direto). Mudanças:
  - **Home**: ano do hero **2021 → 2022** ("ano do estatuto", comentário do doc; `numeros.json` segue "desde 2021" pros
    estudantes impactados); frase de propósito sob o título (**removida depois, a pedido** — o campo `hero.purpose` segue em home.md, sem uso) ("Tudo o que uma criança precisa é de alguém que acredite
    nela de verdade."); **seção nova "01 · O problema"** (`.problema`, antes de Quem somos, texto + frase final em
    destaque) e Quem somos virou "02" com a frase dos jovens próximos em idade; os três movimentos ganharam os nomes
    **Visto · Conhecido · Engajado** + textos novos; a prévia da Jornada ganhou título "Uma escola tão legal quanto a
    Disney" + parágrafo do mapa mental e cada área mostra **"O que muda no mapa mental" (Antes → Depois)** no lugar de "O
    que o estudante leva" (OVO mostra a nota "Ainda nada, e é de propósito…"); CTA final "Seja alguém que acredita. /
    Vamos juntos!" em duas linhas. A seção de números/mapa da Home **não consta no doc** e ficou como estava.
  - **Ciclo (Home + Atuação) agora tem 5 etapas**: Seleção → Formação → Sala de aula → Impacto medido → Nova geração
    (`momentos.json`, com `texto` longo pra Atuação e `textoCurto` pra Home). `AtuacaoCicloHero` e `CicloAtuacao`
    deixaram de assumir 4: `n` vem do tamanho da lista, ângulo por etapa = `360/n`, `SEG_N = n + 0.5`, `--seg` do
    wrapper idem, e há uma `--m4` na paleta. O marco "+1 escola impactada" continua disparando ao fechar a volta
    (agora volta a "Seleção"). "Diretor Regional" como primeira etapa (versão anterior) foi substituído.
  - **Atuação**: abertura com "Por jovens, para jovens."; texto da etapa 1 ("avaliação rigorosa… referências locais, não
    visitantes de fora"); 5º item da Formação (rotina de qualidade: relatório semanal + feedback mensal); Diretoria de
    Talentos com "seis Diretorias de Talentos… Debates e Simulações da ONU… Impacto Social"; título da seção de histórias
    "Histórias de impacto: sem superpoderes, mas super-heróis". **Mapa**: o doc pedia "não aparece inteiro na tela" — o
    frame agora é `min(44rem, 100%, (100dvh - header - 4rem) × 0.8)` (altura = largura × 1,25 pela proporção da imagem),
    então encolhe em telas baixas em vez de cortar. `.sustentacao` ganhou `overflow-x: clip` (pop-ups fechados dos
    times passavam ~65px da borda a ~730px).
  - **Jornada reescrita em 7 seções interativas** ([jornada.astro](src/pages/jornada.astro), conteúdo novo em
    `conteudo/jornada/jornada.md`; o conteúdo antigo — fundamentos, duração, movimentos, avaliação — segue no arquivo, sem
    uso): (1) abertura "Uma escola tão legal quanto a Disney." (título até 48px e números até 56px — reduzidos a pedido, estavam enormes) com 4 números que contam **um de cada vez**; (2) três
    cartões que mudam de cor ao virar — **frente azul-escura (texto claro), verso amarelo (escrita azul-escura)** — e que viram **só com o cursor em cima** (ou foco de teclado; sem clique — `:hover`/`:focus-visible` em `rotateY`; com movimento reduzido vira troca de opacidade) + painel "Quer a base
    teórica?"; (3) linha do tempo horizontal em 3 atos, avatar guiado pelo scroll (`getBoundingClientRect()`), os três atos (rotulados pelos **meses**, "meses 1 e 2" etc., não "Ato 1/2/3"; paradas da trilha "1–2 · 3–4 · 5–6") ficam
    **sempre abertos**, em colunas (cabeçalho + "O que acontece" / "Ao final" separados por fio — a pedido, sem clique); (4) **mock do jogo da vida** — palco com nós ligados por
    linhas retas, avatar que se move entre eles (2 rodadas, 4 finais, "Jogar de novo"). **A história é a do vídeo do OVO**
    (YouTube IpnPnNRMyvo, 1min10, lido quadro a quadro no navegador — não tem legenda nem descrição): o **Douglas**,
    a Fundação Patas, Cascos e Barbatanas, a Maju e o Lucas, e a escolha "praça com os amigos" / "casa estudar". O
    avatar é a **ilustração do Douglas sem fundo** (`douglas-avatar.png`, recortada com `@imgly/background-removal-node`,
    instalado só no scratchpad, fora do projeto) e a página avisa que "todos os personagens foram criados pelo nosso
    time". Fundo do palco = **cenário ilustrado semitransparente** (`public/imagens/jogo-cidade.svg`, desenhado por mim em SVG com a paleta do site — escola, praça com igreja, casas; `opacity: 0.4` num `::before`), no lugar do pontilhado. O Douglas **sobressai do quadro** nos pontos de cima/baixo (palco sem `overflow:hidden`, folga de `4.5rem` embaixo do quadro). **Quadro de altura fixa** (24rem no desktop, 21rem de controles no celular) com fonte menor — a fala rola por dentro em vez de esticar o quadro. Botões de escolha **azuis, amarelos no hover** (CSS com `:global` — os botões da 2ª rodada em diante são criados pelo script, sem o atributo de escopo do Astro, e sem isso caíam no botão padrão do navegador). Texto generalizado a pedido (sem citar a Fundação pelo nome) e **sem aspas nem falas** — só narração. O
    vídeo acaba logo depois da escolha, então resultados e segunda rodada são texto meu — trocar pelo roteiro real se
    houver. O vídeo embutido abaixo do mock saiu, a pedido; (5) seis Diretorias de Talentos (caixas **coloridas** — vermelho/verde/amarelo/rosa/roxo/azul, `diretoriaCores` no frontmatter; ícone + nome, abre frase +
    etiquetas; etiquetas por área mantidas do doc; o deck "Métricas de impacto" (Isa, PDF) define métricas **por instrumento, não por
    Diretoria** — por isso a pendência virou uma linha comum às seis, "o repertório é medido pelo mapa mental…", e o
    "Ver metodologia" ganhou os três instrumentos (critérios 0–3 e quando) + acompanhamento 30–60 dias / 3–6 meses /
    período comparável, tudo do deck); (6) antes/depois com controle deslizante por instrumento — **quadros amarelos** (antes = amarelo claro, depois = `--color-accent`, texto escuro) e **todos com a mesma altura** (script mede o maior e aplica `min-height` nos três, de novo no resize/fontes) — passagem por opacidade, **não** por
    "wipe" (um recorte cortava o texto ao meio) e legenda fixa "Exemplo ilustrativo, não é dado real de estudante"; (7)
    indicador principal (absenteísmo crônico, 10% ou mais das aulas) em destaque num bloco azul + 4 ícones + "Ver
    metodologia". **A Teoria da Mudança fica dentro de "01 · Em que acreditamos"** (abaixo dos cartões e do painel da base teórica),
    agora como roleta sequencial (ver a entrada "Teoria da Mudança virou uma roleta", abaixo).
  - **Contato**: frase "Já participou da Jornada como estudante? Você pode voltar como líder." destacada abaixo dos
    requisitos; o item "Jornada (Pedagógico) Trainees" (dois times colados num só) foi separado.
  - **Bug de atributo `data-*` com número** (cometido e corrigido): `data-escolha-1` vira `dataset['escolha-1']`, não
    `escolha1` (hífen seguido de dígito não é convertido pra camelCase) — o clique no jogo falhava em silêncio. Use
    nomes só com letras (`data-opcao`).
  - **Pendências que o doc deixa em aberto e que NÃO foram decididas por mim**: nome da 6ª área (Voluntariado nas áreas;
    "Impacto Social" no texto da Diretoria de Talentos — foi seguido literalmente), faixa etária (13–25 mantida), lista de
    parceiros (só INGOH), número de DRs ativos, "Dr. Carlos Vasconcelos — Rio Branco, Acre" (linha solta mantida,
    como no doc).

- **Teoria da Mudança é uma "roleta" em MEIO CÍRCULO (cúpula)** ([TeoriaMudancaCirculo.astro](src/components/TeoriaMudancaCirculo.astro),
  reescrito duas vezes a pedido: primeiro roleta de círculo inteiro, depois — "eu queria que fosse um meio círculo" — a
  **metade de cima** (escolha confirmada com o usuário). Tudo sobre o círculo estático antigo — raios, `zoom`, spokes,
  rodadas 1–13 — **não vale mais**; backups dos dois componentes anteriores só no scratchpad). Está dentro de "01 · Em que
  acreditamos" na Jornada. Texto/painel à esquerda (coluna de 18rem), cúpula à direita (até 56rem, proporção 1000×560;
  ~744×417px em 1280px de tela); **abaixo de 1000px** vira coluna única (cúpula, controles, lista de tópicos, painel).
  - **Geometria**: centro da roda na base do quadro, SVG recortado na linha do diâmetro (`clipPath`). 4 arcos de **45° exatos**, encostados (sem vão) —
    a cúpula fecha completa, quatro cores igualmente divididas, pintadas por inteiro — com **passo de 45°** — não 90°, porque numa cúpula (180°) só assim os 4 cabem juntos no estado final (arcos centrados em
    ±22,5° e ±67,5°, via `FINAL_ROT = -67,5°`, rotação fixa, nunca animada). Selo azul-marinho FIXO = meio disco
    colado na base. **Traço sólido** (`stroke-linecap: butt`): o efeito de pincel/tinta (filtro `feTurbulence`) e as setas entre arcos foram
    removidos a pedido.
  - **Camadas**: SVG (trilho + grupo `.tm__wheel`, o único que gira) → selo → camada FIXA de rótulos HTML. Texto e ícone
    nunca giram.
  - **Tópicos sempre num "leque" em volta do TOPO da cúpula** (116° com 5 itens, 76° com 2), na sequência E ao passar o
    cursor num arco no estado final (não ao lado do arco: os arcos laterais não têm espaço pra um leque de 5 dentro dos
    90°). Nome+ícone: `seq` (só o da etapa ativa, no topo) ou `final` (um por arco, dentro do anel).
  - **Sequência — o anel inteiro "vira" de cor a cada etapa** (a roda NÃO gira mais; a pedido: "a seção inteira mude de
    cor, não parte do círculo onde cabem os subtítulos… como se ele tivesse dividido em quatro partes"). Async +
    `wait()` por `setInterval`, pausável; `runId` cancela. Só selo e trilho até a seção entrar na tela
    (`IntersectionObserver`) → por etapa: o **anel de 180° inteiro** (`.tm__full`, um por etapa, pintado da **direita pra esquerda** em ~1s por cima do anterior, a pedido — por cima do
    topo isso é, tecnicamente, sentido anti-horário) assume a cor da etapa e o **meio disco interno** (`.tm__fill`, 16% de opacidade)
    também; tópicos um a um (320ms), segura 4s, somem → próxima. Após a 4ª, os **4 arcos de 45°** (`.tm__arc`) se pintam,
    também da direita pra esquerda (Impacto primeiro, atraso escalonado de 200ms), sobre o anel inteiro e ele fica dividido em 4 cores iguais (estado final: nomes/ícones, "Ver de novo"). A ordem de
    empilhamento (arcos × anel inteiro) é trocada por `stack()` (`appendChild` no `<g>`), com as áreas de clique sempre no topo.
  - **Interação**: hover/foco numa bolinha troca o painel (fade) e **pausa** a sequência; ao sair, retoma em ~2s. Estado
    final: cursor num arco (ou no nome da etapa) revela os tópicos daquela etapa (outros arcos a 35%); clicar num arco/
    pílula/nome leva direto à etapa (o anel vira daquela cor) e **fica nela** (não avança sozinho); clicar no selo central volta à visão geral. 4 pílulas nas cores das etapas,
    **Sem botão Pausar/Reproduzir** (removido a pedido — a pausa é só automática, no hover); "Ver de novo" aparece no final e
    na navegação manual. No toque (`hover: none`) a instrução vira "Toque em…".
  - **Celular/tablet**: bolinhas em volta somem; os tópicos da etapa em foco aparecem numa lista logo abaixo (toque =
    hover); o quadro fica 15% maior que a coluna (excesso só transparente, cortado) pra cúpula ocupar quase a largura toda.
  - **`prefers-reduced-motion`**: nada gira nem se desenha; arcos e tópicos só aparecem com fade (roda fica em -67,5°).
  - **Armadilhas de teste**: IntersectionObserver e transições só andam quando o painel de teste renderiza (um screenshot
    dispara); transições CSS ficam "congeladas" nele — pra ver um estado estático, zerar `transition` por JS.
    `data-tm-speed` no `[data-tm-root]` escala os tempos da sequência.
  - O botão **"Explorar Teoria da Mudança"** (link pro Kumu) foi **removido** a pedido; o campo `kumu` segue em `teoria-mudanca.json`, sem uso.
  - Ordem dos tópicos em `teoria-mudanca.json` segue o pedido (Mudanças: Melhor desempenho → Novas oportunidades; Impacto:
    Novos caminhos → Mais permanência); rótulo "Desempenho
acadêmico" com quebra forçada.

- **"01 · O problema" virou um momento em tela cheia guiado pelo scroll** (Home, [index.astro](src/pages/index.astro), `.problema`; a pedido:
  "o problema na tela inteira… conforme rola, aparece o Tocando em Frente como a solução, de dentro pra fora"). A seção é `sticky`
  (wrapper de 340vh): o problema ocupa a tela, **centralizado, no mesmo tamanho de letra da solução e sem o rótulo "01 · O problema"** (removido a pedido: tirava impacto), parado; depois ele se afasta (some e encolhe) enquanto um **círculo azul-escuro cresce
  do centro da tela** (`clip-path: circle(0% → 105%)`) revelando "O Tocando em Frente existe para **quebrar esse ciclo.**" (trecho em
  amarelo, via `problema.fechoDestaque` em home.md), que surge do meio pra fora (escala 0,7 → 1 + opacidade). Progresso = posição do
  wrapper vs. cabeçalho (`getBoundingClientRect()`, mesma técnica das outras seções); faixas: 0–0,28 problema parado, 0,28–0,58 ele
  some, 0,28–0,72 o círculo cresce, 0,40–0,82 a frase surge, 0,82–1 solução parada. **Sem JS ou com `prefers-reduced-motion`** a classe
  `is-scroll` nunca entra: as duas camadas ficam empilhadas e estáticas (problema, depois a faixa azul com a solução). Verificado em
  1280px e 375px (sem overflow horizontal).

- **Home: os "três movimentos" (baralho de cartas) foram substituídos pelas três colunas da Jornada** ("03 · A Jornada em 3 atos": Meses 1 e 2
  Visto / 3 e 4 Conhecido / 5 e 6 Engajado, cada uma com "O que acontece" e "Ao final"), a pedido. As colunas viraram um componente
  compartilhado, [AtosColunas.astro](src/components/AtosColunas.astro) (HTML + CSS com subgrid, extraídos de jornada.astro), usado na Home e
  na página Jornada (abaixo da trilha do avatar) — mesmo conteúdo (`atos.itens` de conteudo/jornada/jornada.md), nunca duplicado.
  O código do baralho (frontmatter, marcação, CSS, script por scroll) e as três fotos dos movimentos saíram de index.astro (backup só no
  scratchpad); as imagens `movimento-*.jpg` e o array `movements` de home.md ficam no projeto, sem uso. Tudo o que está acima sobre
  "Os três movimentos"/baralho **não vale mais** na Home.

- **Home: a seção "04 · Jornada Pedagógica" (abas das áreas com Antes/Depois do mapa mental) foi removida**, a pedido. Saíram a marcação, o CSS
  (`.jornada-preview*`) e o componente `JornadaTabs.astro` (ficou sem uso; backup só no scratchpad); o bloco `jornadaPreview` de home.md e os campos
  `descricaoHome`/`mapaAntes`/`mapaDepois`/`mapaNota` dos arquivos de áreas seguem como conteúdo sem uso. O **ticker** de áreas logo abaixo do hero
  continua (usa só os nomes). Kickers renumerados: Depoimento "04", Reconhecimentos "05". Tudo o que está acima sobre as abas da Jornada na Home
  **não vale mais**.

- **Os três atos (Visto / Conhecido / Engajado) viraram cartões de frente e verso** — mesmo esquema dos cartões de "Em que acreditamos" (a pedido), no
  componente compartilhado [AtosColunas.astro](src/components/AtosColunas.astro), logo valem na **Home e na Jornada**: **frente azul-escura** (período,
  nome, pergunta, "Virar →") e **verso amarelo** ("O que acontece" / "Ao final", escrita azul-escura); viram **só com o cursor em cima** ou foco de teclado
  (`tabindex="0"` no cartão; no toque, o toque faz o papel do hover); movimento reduzido troca de face por opacidade. A versão anterior (colunas
  abertas com subgrid) **não vale mais**.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
- **Cartões dos 3 atos (Home e Jornada) — textos em maiúscula inicial, primeiro ato lista as Diretorias**: `acontece`/`final` de `atos.itens` em `conteudo/jornada/jornada.md` agora começam com letra maiúscula; o "O que acontece" do primeiro ato diz "O estudante experimenta as seis Diretorias de Talentos: Artes e Jornalismo, Pesquisa e Olimpíadas, Inglês e Intercâmbio, Debates e Simulações da ONU, Programação e Robótica e Voluntariado." (a lista enviada tinha só cinco nomes; "Programação e Robótica" foi incluída pra fechar as seis). Verificado: o verso cabe sem overflow em 1280/1000/375px.
- **Números da Home: acumulado vs. ativo, data de atualização visível, sem PendingNote**: `numbersNote` (a nota `[PENDENTE]`) saiu de `home.md` e o `PendingNote` saiu da seção de números/mapa em `index.astro`. `numeros.json` ganhou `acumuladoDesde: "2021"` e `anoAtivo: "2026"`; as notas dos estudantes e das escolas dizem "acumulado desde 2021". A data virou uma linha própria (`.numbers__updated`, peso 600, divisória): "Números acumulados desde 2021 · atualizados em 26/08/2026". **O número de escolas ATIVAS em 2026 ainda não existe** — não foi inventado; falta o dado real pra mostrar "X ativas em 2026".
- **O avião de papel do ciclo virou uma bolinha**, a pedido ("o círculo que roda em Atuação pode ser uma bolinha"). Vale nos dois lugares que têm o ciclo: [AtuacaoCicloHero.astro](src/components/AtuacaoCicloHero.astro) (página Atuação, `.ciclo-hero__ball`, 4,4% do frame, cor da etapa ativa via `--active-color` + halo) e [CicloAtuacao.astro](src/components/CicloAtuacao.astro) (prévia da Home, `.ciclo__ball`, 6%, branca na variante `--dark`). Sumiram: o `<Image>` do avião, o `brightness(0)`, o balanço/rotação (`PLANE_HEADING_OFFSET`, `wobble`) e o import de `logo-aviao-branco.png` nesses dois componentes — o asset continua em `src/assets/images/`, sem uso. `border-radius: 50%` na bolinha é exceção pontual (o objeto É um círculo; `--radius-*` continuam `0`). Verificado rolando a página: a bolinha percorre o anel e a cor muda por etapa; sem overflow horizontal.
- **Atuação: o ciclo ganhou lista de etapas ao lado, no esquema da Teoria da Mudança**, a pedido ("essa seção tá quase inteiramente vazia... aparecer a descrição do círculo do lado"). Em [AtuacaoCicloHero.astro](src/components/AtuacaoCicloHero.astro): (1) o círculo já aparece **desenhado desde o começo** — trilho tracejado quase apagado (`.ciclo-hero__track`) e as 5 marcas a 45% de opacidade (viram 100% quando a bolinha chega); a trilha colorida continua nascendo do movimento; (2) o painel de uma etapa só virou uma **lista das 5 etapas sempre à vista** (`.ciclo-hero__steps`, número + nome), e a **ativa abre a descrição** (grid `0fr → 1fr`) e ganha a cor da etapa; com movimento reduzido/sem JS (`.is-js` só entra com movimento permitido) as cinco descrições ficam abertas; (3) no **desktop** o título e a frase de abertura passaram pra coluna da direita, em cima da lista, dentro do palco fixo — tudo cabe numa tela (círculo com `min(100%, 36rem, 100dvh − cabeçalho − 4rem)`); no **celular** o título continua acima e o círculo + lista vêm logo abaixo. Por isso o título existe duas vezes no DOM (`.ciclo-hero__intro` só no celular, `.ciclo-hero__title` só ≥720px; o escondido fica `display:none`, então só um h1 conta). Verificado em 1280px e 375px: sem overflow horizontal, um h1 visível, descrição da etapa ativa abrindo ao rolar.
- **Doc "TEXTOS DO SITE" — segunda rodada (28/10/2026; comentários resolvidos + sugestões aceitas)**. Comparado linha a linha com o site (script no scratchpad: normaliza e procura cada frase do doc em `conteudo/` e `src/`). Aplicado: **Home** — texto de "O problema" ("período de transição, com mudanças na rotina e na dinâmica… deixam de ver sentido na escola… vira evasão"), "limita o que conseguem imaginar"; **ciclo** (`momentos.json`) — etapa 4 virou "Impacto **mensurado**" (Home e Atuação), frase curta da etapa 2 com "a intervenção"; **atos** — "Conhecido" virou **"Consciente"** (o doc trocou na aba Home, resposta ao comentário "tem palavra melhor em pt?"; a aba Jornada do doc ainda diz "Conhecido", mas o componente `AtosColunas` é compartilhado, então mudou nos dois); **Jornada** — número da abertura "1 **Jovem Transformador** ao lado" (era "Diretor Regional ao lado"); **Atuação** — Diretoria de Talentos "das seis Diretorias", Diretoria Regional "É como o projeto ganha vida nas escolas.", item de estados da etapa 1 "estados brasileiros com jovens atuando como Diretores Regionais", história A (Cavalcante) em frases menores ("uma estudante disse que não tinha um. … Em outro encontro, ela ainda se sentia insegura… Mesmo assim, decidiu participar…"); **Reconhecimentos** — LED "foi **o** vencedor"; **Contato** — as quatro descrições dos valores sugeridos (R$ 20/50/100/250) e "construir juntos". Números da Home: nota de estados virou "com Diretores Regionais atuando" (resposta ao comentário aberto "deixar mais claro a que cada coisa se refere").
  **Não aplicado, de propósito:** a seção "04 · Jornada Pedagógica" continua fora da Home (o doc ainda a lista, mas foi removida a pedido no chat); o item "1 hora por semana" da abertura da Jornada **ficou** (no doc o slot aparece vazio, "6 meses · · 6 Diretorias…", ambíguo); comentários **abertos** sem ação clara: "Seção 1 … não gostei do modelo, mais engajante", "essa parte pode ficar com um design mais legal" (sem trecho), mapa da Atuação "mais interativo", e "JORNADA … parecida com o site da intervenção" (resolvido no doc, mas sem referência no repo).
- **Abertura da Jornada sem "1 hora por semana"** (a pedido, resolvendo a ambiguidade do slot vazio no doc): `abertura.numeros` em `jornada.md` ficou com 3 itens — 6 meses · 6 Diretorias de Talentos · 1 Jovem Transformador ao lado. A grade de números em `jornada.astro` deixou de assumir 4 colunas: usa `--n` (quantidade de itens) no desktop. Verificado: 3 colunas iguais em 1024px, sem overflow horizontal.
- **Texto do "Problema" da Home menor e etapa 1 do ciclo reescrita** (a pedido): `.problema__texto` ganhou tamanho próprio (`clamp(1.375rem, 1.05rem + 1.5vw, 2.25rem)`, linha de até `40ch`, `line-height` 1,25) — o texto novo do doc tem 3 frases e, com o tamanho da frase final (até 3,5rem), enchia a tela; a frase da solução ("quebrar esse ciclo") continua grande. Verificado em 1280px (5 linhas, ~36px) e 375px (~22px, cabe no palco fixo, sem overflow). Etapa 1 do ciclo (`momentos.json`): "…jovens do interior de todo o país **participam da** seletiva nacional." (era "disputam a"); a segunda frase ("Quem entra vira referência na própria cidade.") foi mantida.
- **Texto do "Problema" encurtado** (a pedido: "tá muito grande, não em tamanho de fonte, mas de texto"): `problema.texto` em `home.md` agora é "Nos anos finais do Ensino Fundamental, muitos estudantes deixam de ver sentido na escola. Começam a faltar, ninguém percebe, e a falta vira evasão." — versão enxuta da frase do doc (que tinha "período de transição… mudanças na rotina e na dinâmica…"); **o doc ainda tem a versão longa**, então vale atualizar lá também. Com o texto curto a fonte voltou a ser grande (`clamp(1.625rem, 1.15rem + 2.2vw, 3rem)`, linha de até `32ch`): 4 linhas a ~46px em 1280px.
- **Mapa dos "363 voluntários" mais vivo** ([SustentacaoMapa.astro](src/components/SustentacaoMapa.astro), a pedido: "o design tem que ser mais legal, tá meio monótono"). Só visual — posições, pop-ups e a lógica de abrir/fechar não mudaram. (1) **Uma cor por time** (`cores`, 8 tons claros: amarelo, lima, verde-claro, azul-claro, rosa, lilás, pêssego, off-white): o módulo vira um **bloco sólido** na cor do time, texto escuro, com **sombra dura** deslocada (sem blur — lê como adesivo; exceção pontual à ausência de sombras, que valia só pra botões), e a mesma cor pinta o fio até o 363 e a barra de 5px no topo do pop-up; (2) os **fios ficam sempre visíveis** (tracejados, ~30%; os dos outros times esmaecem a 12% quando um está em foco) e o do time ativo vira sólido e grosso — antes só apareciam no hover, em branco quase invisível (`stroke-width: 0.15` com `non-scaling-stroke`, ou seja, 0,15px); (3) **anéis** que nascem do 363 e se espalham (3 ondas defasadas, 6s, `.mapa-times__rings`; `border-radius: 50%` é exceção pontual — o objeto é um círculo), parados (2 anéis) com movimento reduzido; (4) **fundo pontilhado** que esmaece nas bordas (`.mapa-times__stage::before`); (5) módulos **flutuam** parados (±4px no eixo vertical, defasados; usa a propriedade `translate` pra somar com o `scale` do hover; pausa no hover/foco). O amarelo do nome no hover saiu (o nome já é escuro sobre cor). Verificado em 1280px e 375px (sem overflow, clique ativa fio sólido na cor certa e abre o pop-up).
- **Aba Contato (`/faca-parte`) redesenhada: mais engajante e colorida** (a pedido). Mesmo conteúdo e mesmo botão de copiar Pix; muda o layout em [faca-parte.astro](src/pages/faca-parte.astro): (1) **hero** em faixa azul cheia, "Faça **Parte**" enorme com a última palavra em amarelo (calculada no frontmatter — não usa `data-reveal-words`, que apagaria o `<span>`), fundo pontilhado e **três atalhos coloridos** por âncora (`hero.atalhos` em `faca-parte.md`: Doar / Ser voluntário / Falar com a gente); (2) **Doação**: chave Pix + QR dentro de um **cartão amarelo grande** (QR com fundo claro e sem moldura preta), cartão recorrente como link em azul, e os **valores sugeridos** em 4 cartões de cores diferentes com numeral grande; (3) **Voluntariado** vira **faixa azul cheia**: frase dos ex-estudantes numa tarja amarela, "Atuação online" num cartão claro com os 6 times em **chips coloridos**, "Atuação presencial" num cartão amarelo, a frase destacada num cartão claro (o `QuoteBlock` é pensado pra fundo claro) e o botão de pré-inscrição claro sobre o azul; (4) **Contato**: e-mail num bloco azul-claro grande e redes sociais num bloco rosa (links com seta); (5) **Quem somos**: cada retrato com um bloco de cor deslocado atrás, nome maior e cargo em maiúsculas azuis. Blocos coloridos usam **sombra dura sem blur** (mesmo "adesivo" do mapa dos 363; exceção pontual) e sobem 3px no hover (parado com movimento reduzido). Paleta: mesmos tons claros dos times (`#FFBD28 #9ED8E8 #F4A6C0 #B8D58A #D2B1F5 #F7B38A`), sempre com texto escuro. Verificado em 1280px e 375px (sem overflow).
- **Pré-inscrição de voluntários agora aponta pro formulário real** (`voluntariado.preInscricaoHref` em `faca-parte.md` = https://forms.gle/bjXt7hEwV1PodNcw7, `target="_blank" rel="noopener noreferrer"`): o botão deixou de ser um `<span aria-disabled>` e a pendência `preInscricaoPendente` saiu do conteúdo. A nota antiga lembrava que o formulário coleta dados de menores de 13 a 17 anos e por isso exige consentimento do responsável e política de privacidade acessível a partir dele — **isso precisa estar resolvido no próprio formulário**; o site não verifica.
- **Contato: cores = hex exatos da Jornada, e "não dedutível" confirmado** (a pedido). Os blocos coloridos de `/faca-parte` agora usam **exatamente** `diretoriaCores` da Jornada (`#ED4949 #B8D58A #FFBD28 #F28BB8 #B274F1 #6FA8E8`, texto escuro por cima) — a lista é copiada no frontmatter de `faca-parte.astro` (se mudar lá, mudar aqui também); atalhos do hero = amarelo/azul/rosa, valores = azul/verde/rosa/roxo (sem o vermelho, que dá contraste fraco com numeral azul-escuro), chips dos 6 times na ordem da lista, e-mail em `#6FA8E8`, redes em `#F28BB8`, e **todos os amarelos** (cartão do Pix, "Atuação presencial", tarja dos ex-estudantes, hover da pré-inscrição) passaram de `--color-accent` para `#FFBD28`. O acento do site (`--color-accent`) segue só em tipografia (o "Parte" do título). A pendência fiscal virou texto final: `doacao.fiscalTexto` = "A doação ao Tocando em Frente não é dedutível do imposto de renda." (`fiscalPendente` saiu). **Segue em aberto:** se o doador recebe recibo — a nota antiga também pedia essa confirmação e o site não afirma nada sobre isso.
- **Contato: time enxuto e LinkedIn com link** (a pedido): saíram da grade "Quem somos" Jean dos Santos, Bianca Gajardoni e Ana Helena Lougon (`conteudo/reconhecimentos/equipe.json` — restam Luiza, Milanna, Isabella, Luísa e Sarah; a nota `conselhoPendente` perdeu o trecho sobre Jean e Bianca). **Jean Pereira dos Santos continua na Atuação** como Diretor Regional da história de Cavalcante — é outra pessoa/papel, não o "time". LinkedIn em `contato.redes` de `faca-parte.md` ganhou `href` (https://www.linkedin.com/company/tocando-em-frente/). Redes sociais agora **sempre numa linha só** (`white-space: nowrap`, fonte `clamp(0.8rem, 5px + 3vw, 1.5rem)` — encolhe com a tela em vez de quebrar; `.contato__grid` passou a `minmax(0, 1fr)`, senão o `nowrap` alargava a coluna e dava ~7px de scroll horizontal a 375px). Verificado em 1280px e 375px (sem overflow), `npx astro build` ok.
- **Sugestões de onde pôr fotos reais (pra humanizar o site)** (a pedido: "tá muito inteligência artificial… indique onde colocar fotos"): componente novo [FotoSugerida.astro](src/components/FotoSugerida.astro) — um `MediaPlaceholder` com borda tracejada amarela (`#FFBD28`) e etiqueta "Sugestão de foto", de propósito chamativo pra achar tudo de uma vez (`grep FotoSugerida`). O texto de cada um diz **o que fotografar** (quem, fazendo o quê), sem pose. 5 lugares: **Home** — faixa larga abaixo de "02 · Quem somos" (Diretor Regional com estudantes na carteira); **Jornada** — abaixo dos números da abertura (mãos desenhando o mapa mental) e no fim de "Antes e depois" (dois mapas mentais reais lado a lado); **Atuação** — abaixo do bloco "Como chegamos nas escolas?" (formação dos DRs); **Faça Parte** — dentro do Voluntariado (foto do time reunido). Quando a foto existir: salvar em `src/assets/images/` e trocar o `<FotoSugerida>` por `<Image>` (com moldura reta de 1px). Fotos de estudantes menores exigem a autorização de uso de imagem já listada como pendência em `faca-parte.md` (`imagemPendente`).
- **Blocos de cor cheios (referência LALA, só a ideia de ritmo de cor)** (a pedido): **Home "02 · Quem somos"** virou **bloco amarelo cheio** (`#FFBD28`, o amarelo da Jornada/Contato; escrita azul-escura; o marca-texto vira bloco azul-escuro com letra clara porque o amarelo-limão sumiria; divisor vertical em azul translúcido) e a **abertura da Jornada** virou **bloco azul-escuro** (título claro, numerais `#FFBD28`, marca-texto com letra escura). **As ilustrações (estrela, sol, flor) foram testadas e REMOVIDAS a pedido** — são da identidade da LALA, não da TEF; o componente `Ilustracao.astro` foi apagado. Não reintroduzir formas decorativas desse tipo. O `FotoSugerida` tem legenda com cor própria nesses dois blocos (`:global(.foto-sugerida figcaption)`) e a etiqueta ganhou contorno escuro (aparece sobre amarelo).
- **Amarelo dos blocos novos = `--color-accent` da TEF, não `#FFBD28`** (a pedido: "esse laranja não é do Tocando em Frente"): o bloco "02 · Quem somos" da Home passou de `#FFBD28` (que lê como laranja) pro `--color-accent` (`#e2e548`, amarelo-limão); os numerais da abertura da Jornada e a etiqueta/contorno do `FotoSugerida` idem. **O `#FFBD28` segue só onde o usuário pediu os hex exatos da Jornada** (cartões de Contato/Diretorias/Antes e depois, Teoria da Mudança) — se também incomodar lá, é uma troca em lote.
- **"02 · Quem somos" voltou ao fundo claro com o marca-texto de sempre** (a pedido: "não tá grifado como tava antes… e não gosto disso ser amarelo"): o bloco de cor cheio (amarelo, depois amarelo-limão) saiu por completo — sem `background`, sem override do `.accent-mark` (volta o grifo no meio/final do texto) e com o divisor vertical em `--color-border` de novo. Isso **substitui** as duas notas anteriores sobre o bloco amarelo de Quem somos. **Segue valendo**: a abertura da Jornada em bloco azul-escuro (numerais em `--color-accent`) — se também incomodar, reverter igual.
- **Fotos reais na Jornada** (a pedido: "foto do time na primeira foto, as fotos JORNADA 1, 2 e 3, e no caderno dos sonhos as fotos 1 e 2"). Os dois `FotoSugerida` da página saíram; entraram: **abertura (bloco azul)** — foto do time com estudantes (`jornada-time-birigui.jpg`, 16/9, `object-position: center 70%` pra manter os rostos, legenda "O time do Tocando em Frente com estudantes, em Birigui (SP)" — Birigui vem do nome do arquivo enviado) + uma **fileira de três fotos de oficina** (`jornada-oficina-1/2/3.jpg`, retrato 3/4 em 3 colunas ≥560px; 1 coluna 4/5 no celular), todas com moldura reta de 1px clara; e, no fim de **"Antes e depois"**, um bloco **"Caderno dos Sonhos, na mão dos estudantes"** com `caderno-dos-sonhos-1/2.jpg` lado a lado (4/5, 22rem cada). **Os dois cadernos são de estudantes diferentes — não são "antes e depois" do mesmo aluno**, então o bloco não os rotula assim. Os arquivos originais chegaram como `JORNADA1.HEIC`/`JORNADA3.HEIC` (convertidos com `heic-convert` instalado só no scratchpad, fora do projeto), `JORNADA2.JPG`, `TimeTocandoBirigui.JPG` e `CadernodosSonhos1/2` (soltos na raiz); foram reduzidos (≤2000px) pra `src/assets/images/` em kebab-case e os originais apagados. `FotoSugerida` segue existindo (Home, Atuação, Faça Parte). **São fotos de menores com rosto visível — a autorização de uso de imagem (`imagemPendente` em `faca-parte.md`) continua pendente.** Verificado em 1280px e 375px: as 6 imagens carregam, sem overflow horizontal, `npx astro build` ok (os screenshots do pane saíram em branco por o pane estar oculto; conferi por medidas de DOM).
- **Abertura da Jornada voltou ao fundo claro** (a pedido: "não quero que a primeira parte da Jornada seja azul, quero branca"): saiu o bloco azul-escuro (fundo, título/números/rótulos claros, overrides do marca-texto e das divisórias, `kicker--dark`) — a seção volta ao visual padrão (título escuro com marca-texto, numerais `--color-primary`, divisórias `--color-border`). As fotos reais (time + fileira de três) ficaram, só trocaram a moldura clara pela de sempre (1px `--color-border`) e a legenda pra `--color-text-secondary`. Isso **substitui** a nota "Segue valendo: a abertura da Jornada em bloco azul-escuro". Hoje não há mais nenhum bloco de cor novo desta fase de referências (LALA): Quem somos e a abertura da Jornada estão ambos no fundo claro.
- **Diretorias de Talentos (Jornada) com a primeira letra maiúscula** (a pedido): a frase de cada Diretoria (`fraseJornada`) e as etiquetas (`etiquetas`) nos seis `conteudo/jornada/areas/0*-*.md` começavam em minúscula ("criar, escrever e contar histórias…", "criatividade") — agora começam em maiúscula, direto no conteúdo (não por CSS `text-transform`, que também maiusculizaria a palavra seguinte). Só `jornada.astro` lê esses dois campos, então nada mais mudou de lugar.
- **Jornada: terceira foto do Caderno dos Sonhos + foto de Birigui fora** (a pedido): `CadernodosSonhos3.HEIC` (solta na raiz) foi convertida (mesmo `heic-convert` do scratchpad) pra `caderno-dos-sonhos-3.jpg` (1050×1400) e entrou no bloco "Caderno dos Sonhos, na mão dos estudantes" — a grade passou de 2 pra **3 colunas** (≥720px, `minmax(0, 22rem)`; 1 coluna no celular), original apagado. A **foto do time em Birigui saiu da abertura** da Jornada (figure, import e CSS `.abertura__time`/`--time` removidos); sobrou só a fileira das três fotos de oficina, com o respiro de cima maior. O arquivo `src/assets/images/jornada-time-birigui.jpg` **continua na pasta, sem uso** (apagar se não for voltar). Verificado em 1280px: 6 imagens carregam, 3 colunas iguais no Caderno, sem overflow, build ok.
- **Abertura da Jornada "mais divertida", sem blocos nem paleta** (a pedido: "queria que essa parte fosse mais divertida"). A primeira tentativa — números em cartões coloridos (verde/rosa/azul) com sombra dura e fotos com bloco de cor deslocado — foi **rejeitada** ("muito bloquificado, não quero essas cores todas") e removida por completo. Versão final, fundo claro e uma cor só: (1) **numerais enormes e pesados** (até 6rem, peso 800, `--color-primary`) com o **grifo de marca-texto** em `--color-accent` por trás da metade de baixo (`linear-gradient` no `.numeros__valor`, mesma ideia do `.accent-mark`), divisórias finas de 1px como no resto do site, e cada número **sobe 4px no hover** (propriedade `translate`, pra não brigar com o `transform` da contagem em sequência); (2) **fotos de oficina escalonadas** — a do meio desce um pouco (`margin-top` em `clamp`, só ≥560px, `align-items:start`) pra fileira não parecer uma régua, e cada foto sobe 5px no hover; moldura reta de 1px de sempre, sem sombra. `prefers-reduced-motion` desliga o hover. Não reintroduzir cartões/sombras coloridas aqui.
- **Jornada: a linha de três etapas ("jogo da vida → Diretorias de Talentos → avaliação de impacto") e os números por cima das fotos** (a pedido: "quero que fique mais claro a jornada é a linha do jogo da vida, segue pras diretorias de talentos e depois as avaliações de impacto"; e "os números em cima das fotos, fotos mais transparentes pra não sobressair as letras").
  - **Novo bloco "O caminho da Jornada"** (`caminho` em `jornada.md`; markup/CSS `.caminho*` em `jornada.astro`), logo abaixo dos números da abertura: três etapas numeradas (selo quadrado azul 1/2/3) ligadas por um traço reto de 2px — **horizontal com ponta de seta no desktop, vertical no celular** — cada uma com nome, uma frase e "Ver ↓" que leva à seção (`#jogo`, `#diretorias`, `#avaliacao`, ids novos nas `<section>`, com `scroll-margin-top: var(--header-height)`). Hover/foco do selo vira `--color-accent`. Os textos das etapas só reorganizam o que a página já diz (3 atos de dois meses, três instrumentos) — nada de dado novo.
  - **Kickers das seções renomeados pra reforçar a ordem**: "Antes de começar · Em que acreditamos" → "Etapa 1 · Comece aqui: o jogo da vida" → "Etapa 2 · Seis Diretorias de Talentos" + "Etapa 2 · A Jornada em 3 atos" → "Etapa 3 · Avaliação de impacto: antes e depois" + "Etapa 3 · Como sabemos que funciona" (a numeração antiga 01–06 saiu). "Em que acreditamos" (com a Teoria da Mudança) é o preâmbulo, fora da contagem.
  - **Números sobre fotos**: cada item de `.numeros` (6 meses / 6 Diretorias / 1 Jovem Transformador) agora é um cartão com a **foto de oficina atrás** (`fotosNumeros`, pareadas por posição com os números) a **30% de opacidade** sobre o off-white (`.numeros__foto`, `z-index:-1` + `isolation:isolate`), numeral grande azul com o grifo de marca-texto e o rótulo em `--text-h3` escuro embaixo à esquerda. 3 colunas retrato (3/4) no desktop, **a do meio desce** (ritmo escalonado), 1 coluna 4/3 no celular; moldura 1px, hover sobe 4px. A fileira de fotos soltas (`.abertura__trio`/`.abertura__foto`) deixou de existir. A contagem em sequência (`[data-numero]`/`is-seq-ready`) continua funcionando no mesmo `<li>`. Verificado em 1280px e 375px: sem overflow, build ok.
- **Fotos da abertura da Jornada alinhadas** (a pedido): saiu o escalonamento do cartão do meio (`margin-top` no `:nth-child(2)` e `align-items:start`) — os três cartões número+foto ficam na mesma linha e com a mesma altura (medido em 1280px: `top` 285 e altura 414px nos três). **Substitui** a frase "a do meio desce (ritmo escalonado)" da nota anterior sobre os números sobre fotos.
- **Números da abertura da Jornada viraram etiquetas sobre fotos sem transparência** (a pedido: "as fotos não transparentes, os textos como se fossem etiquetas"): a foto de cada cartão voltou a **100% de opacidade** (saiu o `opacity: 0.3`) e o texto virou **duas etiquetas coladas na foto, embaixo à esquerda**: o numeral numa etiqueta `--color-accent` (amarelo-limão da TEF, letra escura) e o rótulo logo abaixo numa etiqueta `--color-bg` (off-white, letra escura, peso 700). Sem grifo, sem fundo no cartão; moldura reta de 1px; mesmos três cartões alinhados (top idêntico em 1280px), hover sobe 4px, contagem animada intacta. **Substitui** a parte "foto esmaecida a 30%" da nota anterior sobre números sobre fotos. Verificado: opacidade da foto = 1, sem overflow, build ok.
- **Abertura da Jornada: texto manda, foto é apoio** (a pedido: "fica muita informação, priorizar a leitura dos textos e não das fotos"): os três cartões número+foto ficaram **mais baixos e com etiquetas maiores** — no desktop a proporção passou de retrato 3/4 pra **4/3** (≈311×233px em 1280px, antes ≈311×414), o numeral da etiqueta amarelo-limão foi de até 4,5rem pra **até 6rem** e o rótulo da etiqueta off-white de `--text-body` pra **`--text-h3`** (com mais respiro). Resultado: as etiquetas ocupam a maior parte de cada cartão e a foto vira um fundo visível por cima/ao redor, sem competir. Fotos continuam a 100% de opacidade (pedido anterior). **Se ainda estiver pesado**, o próximo passo seria deixar as fotos em preto e branco (não é transparência) ou voltar o texto pra fora da foto — não feito sem confirmação.
- **Abertura da Jornada: fotos de volta ao tamanho anterior e etiqueta única** (a pedido: "quero as fotos do tamanho de antes, e as etiquetas um bloco só em vez de separar o amarelo do branco"): os três cartões voltaram ao **retrato 3/4** no desktop (311×414px em 1280px; 4/3 no celular, como sempre foi). O numeral e o rótulo agora ficam **dentro de um único bloco off-white** (`.numeros__bloco`, `--color-bg`, colado embaixo à esquerda), com o numeral em `--color-primary` (até 5rem, peso 800) e o rótulo em `--text-h3` escuro — acabou a etiqueta amarela separada da branca. **Substitui** a nota anterior ("texto manda, foto é apoio", cartões 4/3 e etiquetas maiores). A cor do bloco é uma só linha de CSS: se preferirem o amarelo-limão (`--color-accent`) no lugar do off-white, é só trocar o `background` de `.numeros__bloco`. Verificado em 1280px: 3 cartões alinhados, sem overflow, build ok.
- **Abertura da Jornada: foto esmaecida de novo, número centralizado e rótulo embaixo, sem blocos** (a pedido: "colocar a fotinha mais transparente mesmo, o número bem centralizado na foto e a escrita embaixo dele, sem blocos atrás do texto"). Voltou a foto a **30% de opacidade** sobre o off-white (`.numeros__foto`), e o `.numeros__bloco` deixou de ter fundo: é só um agrupador sem cor, **centralizado no cartão nos dois eixos** (medido em 1280px: desvio 0px em x e y) com o **numeral azul grande** (até 6,5rem, peso 800, sem grifo) e o **rótulo escuro logo abaixo** (`--text-h3`, centralizado). Cartões no **retrato 3/4** de antes (311×414px, alinhados), 4/3 no celular. Isso encerra a sequência de tentativas (cartões coloridos → etiquetas amarela+branca → bloco off-white), todas rejeitadas: **não pôr bloco/etiqueta atrás desses textos**. Substitui as notas anteriores sobre etiquetas.
- **Jornada: uma linha só, sem voltar, com régua lateral** (a pedido: "uma seta no canto esquerdo da tela, de cima pra baixo, do jogo da vida até a avaliação de impacto, porque fica muito indo e voltando"; "a teoria da mudança pode ser a última coisa"; "as três fotos primeiro, depois os cards do Em que acreditamos, e aí começa a explicação da Jornada").
  - **Nova ordem da página**: abertura (título + as três fotos com número) → **"Antes de começar · Em que acreditamos"** (três cartões + "Quer a base teórica?", **sem** a Teoria da Mudança) → **"O caminho da Jornada"** (o bloco 1·2·3, agora uma seção própria `.caminho-secao` logo antes da explicação, em vez de dentro da abertura) → **Etapa 1** jogo da vida → **Etapa 2** Diretorias de Talentos + A Jornada em 3 atos → **Etapa 3** Antes e depois + Como sabemos que funciona → **Teoria da Mudança** (seção `.teoria-final`, `#teoria-da-mudanca`, a última da página; o `TeoriaMudancaCirculo` saiu do "Em que acreditamos"). Ids novos: `#funciona` (fim do trecho da régua), junto de `#jogo`/`#diretorias`/`#avaliacao`.
  - **Régua lateral** (`<nav class="trilha" data-trilha>` logo dentro do `<Layout>`, CSS `.trilha*`, script no topo do `<script>` da página): linha vertical `position: fixed` na margem esquerda da tela (de `--header-height + 1.75rem` até 1.75rem do rodapé), com **preenchimento azul que cresce + ponta de seta apontando pra baixo** acompanhando o scroll, e **três paradas** (selos quadrados 1/2/3, links pras âncoras; `aria-label` "Etapa N: …"; rótulo em tooltip no hover/foco). Cada parada fica na posição proporcional da sua seção dentro do trecho (`--t`, medida em JS: do topo de `#jogo` ao fim de `#funciona`); **passada** = azul cheio, **ativa** = `--color-accent`. A "linha de leitura" é a 40% da altura da tela. A régua **só aparece (`.is-visible`) enquanto a leitura está dentro desse trecho** — some na abertura/caminho e na Teoria da Mudança — e fica escondida sem JS. **Duas versões**: fina (10px, encostada na borda, sem número) abaixo de 1300px, pra caber dentro da margem de 16px do conteúdo sem tapar texto (a primeira versão, de 1,1rem+, sobrepunha o início das linhas em ~800px); com **selos numerados de 1,9rem a partir de 1300px**, onde sobra margem. Recalcula em resize/load e via `ResizeObserver` no `body`. `prefers-reduced-motion` tira as transições.
  - **Teste**: a lógica foi confirmada (3 paradas em 0%, 22% e 55% do trecho; ativa/passadas/preenchimento corretos; visível só no trecho; sem overflow em 1440px), mas no painel de teste o `requestAnimationFrame` roda atrasado/oculto, então as leituras sucessivas saíam defasadas em um passo — não é bug da página. **Atenção para a próxima vez**: pra checar a régua, dar um `scroll` sintético e esperar, ou tirar screenshot antes de ler o estado.
  - **Substitui** as notas anteriores que descrevem a Teoria da Mudança dentro do "Em que acreditamos" e o bloco do caminho dentro da abertura.
- **Jornada como um jogo em três fases** (a pedido: "uma experiência, como se a pessoa estivesse passando pela jornada: primeiro joga o jogo, depois as Diretorias de Talentos, depois a avaliação de impacto… mais gamificada… pode tirar o caminho da Jornada, os três blocos consecutivos, mas quero que a pessoa entenda o caminho"). **Saiu** o bloco "O caminho da Jornada" (a seção `.caminho-secao`, o conteúdo `caminho` de `jornada.md` e todo o CSS `.caminho*`). **Entrou** uma estrutura de fases, com o conteúdo em `fases` (`conteudo/jornada/jornada.md`: `numero`, `curto`, `titulo`, `missao`, `conclusao`, `proxima` — só reorganiza o que a página já dizia):
  - **Tela de fase** antes de cada bloco (`<section class="fase" id="fase-N">`): linha azul de 2px no topo, "FASE N DE 3" + **barra de progresso de 3 segmentos retos** (os alcançados cheios), **numeral enorme** (até 11rem, azul, grifo amarelo-limão embaixo — o grifo de marca-texto da TEF), título ("Jogue o jogo da vida" / "Conheça as Diretorias de Talentos" / "Veja a avaliação de impacto") e **"Missão:"** com uma frase.
  - **Fim de fase** depois de cada bloco (`<div class="fase-fim" id="fase-N-fim">`): tira fina com um quadrado amarelo-limão "✓" + "Fase N concluída: …" e o link "Próxima fase: … ↓" (a Fase 3 termina em "Conheça a Teoria da Mudança ↓", que leva à última seção).
  - **Ordem final**: abertura (três fotos com número) → "Em que acreditamos" → **Fase 1** (jogo da vida) → fim → **Fase 2** (Diretorias + 3 atos) → fim → **Fase 3** (antes e depois + como sabemos que funciona) → fim → Teoria da Mudança (última). Os kickers das seções perderam o "Etapa N" (a tela de fase já diz): "O jogo da vida", "As seis Diretorias de Talentos", "A Jornada em 3 atos", "Antes e depois", "Como sabemos que funciona".
  - **Régua lateral atualizada**: as paradas agora levam às telas de fase (`#fase-1/2/3`), e o trecho acompanhado vai do topo da Fase 1 ao fim da Fase 3 (`#fase-3-fim`). Parada **não alcançada = tracejada** ("bloqueada"), **alcançada = cheia**, **atual = amarelo-limão**; aria-label "Fase N: …". `scroll-margin-top` cobre `#fase-N`. As telas e os "concluída" entram com o fade-in já existente (`data-reveal-block`). Sem JS novo além do ajuste de ids da régua.
  - Verificado: ordem das seções correta, tela de fase 2 renderiza com numeral/barra/missão, sem overflow (1024px), build ok. **Substitui** as notas anteriores sobre o bloco do caminho e sobre os kickers "Etapa N" (a régua lateral e a ordem com a Teoria da Mudança por último continuam valendo).
- **Jornada em faixa azul, "Jornada em 3 passos", sem textos de jogo e sem régua lateral** (a pedido: "pode tirar a seta do canto esquerdo… gosto da ordem 1, 2, 3… em vez de 'fase 1 de 3' colocar 'jornada em 3 passos'… a gente explicasse a Jornada e o fundo fosse azul, pra diferenciar dos conteúdos teóricos… o modelo gamificado é legal, mas os textos gamificados não". **A mensagem veio cortada ("Mas eu gosto da…") — não sei o que a pessoa ia dizer que gosta; manter tudo o que não foi pedido pra sair.**)
  - **Saiu**: a **régua lateral** inteira (`<nav class="trilha">`, CSS `.trilha*`, JS) e todo texto "de jogo": "Fase N de 3", "Missão:", "Fase concluída ✓", "Próxima fase". `fases` em `jornada.md` virou **`jornada`** (`kicker: 'Jornada em 3 passos'`, `titulo`, `texto`, `passos[]` com `numero/titulo/texto/proximo`; sem `conclusao`/`missao`).
  - **Ficou do modelo gamificado (só visual)**: a **ordem 1 → 2 → 3**, o **numeral enorme** de cada passo (agora em `--color-accent`, sem grifo), a **barra de 3 segmentos** de progresso e a tela de abertura de cada passo (`.fase`, ids `#fase-1/2/3`). O kicker agora é "Jornada em 3 passos · passo N"; a frase que era "Missão: …" é só a frase. O fim de cada passo (`.fase-fim`) virou **só o link "Próximo passo: … ↓"** (alinhado à direita, sem o ✓/"concluída"); o último diz "Agora, a teoria por trás: Teoria da Mudança ↓".
  - **Faixa azul** (`<div class="jornada">`, `--color-primary-dark`), que **envolve o texto de abertura + os três passos** e termina antes da Teoria da Mudança; "Em que acreditamos" (antes) e a Teoria da Mudança (depois) ficam em **fundo claro** = conteúdo teórico. **Abre com uma explicação** (`.jornada-intro`, "Aqui começa a Jornada"): "Primeiro, o jogo da vida. Depois, as seis Diretorias de Talentos, em três atos de dois meses. Por fim, a avaliação de impacto, que mostra o que mudou. Tudo o que está nesta faixa azul é a Jornada em si; o que vem antes e depois, em fundo claro, é a teoria por trás dela." Dentro dela: textos soltos claros, kickers em `--color-accent`, divisórias claras (`--jornada-linha`); o quadro do jogo ganha moldura clara; a linha do tempo dos 3 atos usa traço claro e parada alcançada amarelo-limão; as frentes dos cartões dos atos passam de azul-escuro (sumiria) pra `--color-primary` com moldura clara (`:global(.ato-flip__face…)` só dentro de `.jornada` — a Home segue igual). Cartões coloridos das Diretorias e caixas amarelas do antes e depois já tinham fundo próprio. Contrastes conferidos: todos os textos soltos ≥ 7,6:1 (o título "Caderno dos Sonhos, na mão dos estudantes" estava 1,7:1 e foi corrigido).
  - Verificado em 1024px: sem régua no DOM, faixa azul `rgb(31,68,96)`, sem overflow, build ok. **Não vi** screenshot do jogo, das Diretorias e do antes/depois no azul (o painel de teste não pintou) — conferi por contraste calculado; vale olhar ao vivo. **Substitui** as notas anteriores sobre régua lateral, "Fase N de 3", "Missão" e "concluída".
- **Jornada em azul: ajustes de textos, mock legível, cartões amarelo/branco e fim da faixa antes de "Como sabemos que funciona"** (a pedido, em lista):
  - **Textos removidos**: o parágrafo da abertura da faixa ("Primeiro, o jogo da vida. Depois… é a teoria por trás dela." — `jornada.texto` saiu do render; fica só o kicker "Jornada em 3 passos" + "Aqui começa a Jornada"), o kicker "Jornada em 3 passos · passo N" das três telas de passo (ficam numeral + barra + título + frase), "O jogo da vida" + "Antes de tudo, cada turma joga…" (`jogo.texto`), "As seis Diretorias de Talentos" + "Clique em uma Diretoria…" e, no passo 3, a frase "Compare o antes e o depois…" e "Arraste o controle…". Os `<h2>` do jogo e das Diretorias continuam no DOM como `visually-hidden` (nome acessível da seção). **O kicker "Antes e depois" do passo 3 e a legenda "Exemplo ilustrativo…" foram mantidos** (não foram pedidos). Os campos seguem em `jornada.md`, sem uso (`jornada.texto`, `jogo.texto`, `diretorias.instrucao`, `antesDepois.instrucao`, `jornada.passos[2].texto`).
  - **Mock do jogo com texto preto**: dentro da faixa o texto herdava a cor clara e sumia no quadro off-white; `.jornada .jogo__tela { color: var(--color-text) }`. Mesma causa nas caixas amarelas do antes e depois (`.jornada .comparativo__camada { color: var(--color-text) }`) — conferido: texto `rgb(21,42,56)` nas duas camadas.
  - **Sem linha entre o passo e o conteúdo**: `.fase + section { border-top: none; padding-top: pequeno }` — o conteúdo do passo 1, 2 e 3 vem colado na tela de abertura (era só pedido pro 2 e 3; apliquei aos três por consistência).
  - **Cartões dos 3 atos dentro da faixa**: frente **amarela** (`--color-accent`, texto azul-escuro) e verso **branco** (`#fff`, texto azul-escuro); override com `:global(.ato-flip__*)` só dentro de `.jornada` (a Home segue com frente azul/verso amarelo).
  - **A faixa azul termina depois do "Antes e depois"** (com as fotos do Caderno dos Sonhos): o `</div>` de `.jornada` foi pra antes de "Como sabemos que funciona", que **voltou ao fundo claro** — o CSS dessa seção (`.funciona*`, `.metodo*`) deixou de ser azul-escuro: fundo transparente, textos em `--color-text`/`--color-text-secondary`, rótulos/ícones/botão em `--color-primary`, divisórias `--color-border`, botão "Ver metodologia" virou `btn-outline-dark`, kicker sem `--dark`. A tira "Agora, a teoria por trás" (fim do passo 3) saiu; `jornada.passos[2].proximo` removido do conteúdo. Ordem: … → passo 3 (azul) → "Como sabemos que funciona" (claro) → Teoria da Mudança (claro).
  - Verificado: faixa contém só os passos 1–3 (sem `#funciona`), bordas 0 nas seções após cada passo, sem overflow, build ok; não vi screenshot de todas as partes no azul (painel de teste instável). **Substitui** trechos das notas anteriores sobre essas partes.
- **"Aqui começa a Jornada" sozinho, grande e amarelo** (a pedido: "deixar apenas o Aqui começa a Jornada maior e amarelo em cima"): saiu o kicker "Jornada em 3 passos" de cima do título na abertura da faixa azul; o `.jornada-intro__titulo` agora é **só o título**, em `--color-accent` (amarelo-limão, ~7,6:1 sobre o azul-escuro), `clamp(2.75rem, 1.75rem + 5vw, 6rem)` (≈79px em 1024px), peso 800, sem `max-width` — fica numa linha em telas largas. O campo `jornada.kicker` segue em `jornada.md`, sem uso na abertura. Verificado em 1024px: sem overflow, build ok.
- **Jornada: títulos dos passos numa linha só e "A Jornada em 3 atos" como subtítulo** (a pedido): `.fase__titulo` perdeu o `max-width: 18ch` (era ele que quebrava "Conheça as Diretorias de Talentos" e "Veja a avaliação de impacto") e `.fase__missao` perdeu o `max-width: 44ch` e encolheu de `--text-h3` pra `clamp(1rem, 0.9rem + 0.5vw, 1.25rem)` — assim "Seis áreas para experimentar, ao longo de três atos de dois meses cada." também cabe numa linha. Medido (contando linhas pelos `getClientRects`): em **1024px e em 800px** os títulos dos passos 2 e 3 e a frase do passo 2 ficam em 1 linha, sem overflow; no celular quebram normalmente (não há `nowrap`). A frase do passo 1 é mais longa e segue em 2 linhas (não foi pedida). O h2 "A Jornada em 3 atos" deixou de ser `.kicker` (caixa-alta espaçada) e virou **`.atos__subtitulo`**: `--text-h3` (~25px), peso 700, cor clara — um subtítulo um pouco maior.
- **Texto do lado do numeral centralizado com ele** (a pedido): `.fase__corpo` passou de `align-items: end` pra **`center`** — o título + frase de cada passo ficam centralizados na vertical com o numeral 1, 2 e 3 (medido: centro da caixa do numeral = centro do bloco de texto nos três passos; no screenshot do passo 2 o dígito e o texto também alinham visualmente). No celular (uma coluna) não muda nada.
- **"A Jornada em 3 atos" no mesmo tamanho do título do passo** (a pedido): `.atos__subtitulo` deixou de ter `font-size`/`line-height`/`font-weight` próprios (antes `--text-h3`, 700) e agora **herda o `h2` global, igual ao `.fase__titulo`** — medido em 1024px: os dois com 40px, peso 500, entrelinha 46px, letter-spacing -0.8px. **Substitui** a parte "subtítulo um pouco maior (~25px, peso 700)" da nota anterior.
- **Frase das Diretorias numa linha só** (a pedido: "Em todas as seis, o repertório do estudante é medido pelo mapa mental… com nota de 0 a 3. tudo na mesma linha"): `.diretorias__medida` perdeu o `max-width` e a fonte passou a acompanhar a largura — o texto tem ≈78,5em, então `font-size: clamp(0.6875rem, calc(min(100vw - 3rem, 69.5rem) / 80), 1rem)`. Medido: **1 linha em 1024px (fonte 12,2px) e em 1440px (13,9px)**, sem overflow; abaixo de ~910px de tela a fonte bate no piso de 11px e a frase quebra normalmente. (É uma legenda pequena de propósito: uma linha só com esse tamanho de texto não comporta fonte maior.)
- **Faixa azul da Jornada em degradê** (a pedido: "o azul continue, mas gradiente, no mesmo tom com um azul um pouco mais claro"): `.jornada` passou de fundo sólido `--color-primary-dark` pra `linear-gradient(180deg, var(--color-primary-dark) 0%, color-mix(in srgb, var(--color-primary-dark) 45%, var(--color-primary)) 100%)` — começa no azul-escuro atual (`rgb(31,68,96)`) e termina em ≈ `rgb(38,81,115)` no fim da faixa (nenhuma cor nova: mistura dos dois azuis do site). Contraste do amarelo-limão/texto claro no ponto mais claro segue ≥ 6:1. Verificado no fim da faixa por screenshot; sem overflow.
- **Degradê da faixa azul mais forte** (a pedido: "não tá muito gradiente, misturar com um azul mais claro"): o fim do `.jornada` deixou de ser a mistura sutil de `--color-primary-dark` com `--color-primary` e passou a ser **`color-mix(in srgb, var(--color-primary) 80%, #6fa8e8)`** (≈ `rgb(57,107,150)`) — o `--color-primary` com um toque do azul claro da paleta das Diretorias (`#6FA8E8`). Segue `linear-gradient(180deg, var(--color-primary-dark) 0%, … 100%)`: começa em `rgb(31,68,96)` e termina bem mais claro; diferença visível no screenshot do fim da faixa. Contraste: texto claro ≥ 5:1 no ponto mais claro, amarelo-limão ≥ ~4:1 (os rótulos amarelos pequenos ficam por volta de 80% da altura, onde dá ~4,7:1). **Substitui** a fórmula da nota anterior (mistura 45%).
- **Degradê da faixa azul "misturado na tela inteira", não de cima pra baixo** (a pedido: "o gradiente não é de cima pra baixo, é misturado na tela inteira"). O `linear-gradient(180deg…)` das notas anteriores **saiu**. Agora `.jornada` tem fundo sólido `--color-primary-dark` e uma camada **`.jornada::before`** com **quatro brilhos radiais** de azul claro (`#6fa8e8` translúcido nos cantos direito-cima, esquerdo-meio e direito-baixo + um azul médio `#2c5c82` no centro) — `position: sticky; top: 0; height: 100vh; margin-bottom: -100vh; z-index: -1` (a faixa tem `isolation: isolate`), ou seja, a mistura fica **presa ao viewport** e acompanha a leitura, aparecendo na tela inteira em qualquer ponto da faixa (a faixa tem ~4000px, então um gradiente "normal" esticaria demais). A camada não ocupa espaço e `overflow: clip` (não `hidden`: `hidden` quebraria o sticky) recorta o excedente no fim da faixa. Picos de opacidade ≤ .34 pra manter o contraste (texto claro ≥ 5:1, amarelo-limão ≥ ~4,5:1). Verificado: `::before` computa sticky/768px/margem -768px, sem overflow, e o screenshot no meio da faixa mostra a mistura clara/escura na tela toda. Se a camada atrapalhar em algum navegador antigo (sem `overflow: clip`/sticky), cai no azul sólido — sem perda de leitura.
- **Azul claro do degradê da Jornada mais claro** (a pedido: "deixar o azul claro mais claro ainda"): os brilhos da camada `.jornada::before` passaram de `rgba(111,168,232, .34/.22/.3)` pra **`rgba(127,180,238, .5/.32/.45)`** (um azul claro mais claro, `#7FB4EE`, e picos de opacidade maiores; o brilho central azul-médio ficou igual). Nos picos o texto claro cai pra ~4:1 e o amarelo-limão pra ~3:1 — por isso os brilhos ficam nos cantos/bordas, longe da coluna de texto; no screenshot do passo 2 tudo segue legível. **Se pedirem ainda mais claro, o limite é o contraste do amarelo-limão pequeno** (rótulos "Próximo passo…", barra do passo): seria preciso trocar esses amarelos por branco nas áreas claras ou escurecer o texto.
- **Cartões dos 3 atos na Jornada: frente branca, verso amarelo clarinho** (a pedido; inverte a nota anterior "frente amarela, verso branco"): dentro de `.jornada`, `:global(.ato-flip__face--front)` = **`#fff`** e `:global(.ato-flip__face--back)` = **`color-mix(in srgb, var(--color-accent) 38%, #fff)`** (o amarelo-limão bem diluído em branco, ≈ `rgb(244,245,185)`); texto azul-escuro (`--color-primary-dark`) nas duas faces (nome/período/pergunta/dicas na frente, "O que acontece/Ao final" no verso). Home segue igual (frente azul-escura, verso amarelo). Verificado por `getComputedStyle` (frente `rgb(255,255,255)`, verso ≈ `rgb(244,245,185)`, texto `rgb(31,68,96)`); build ok.
- **Passo 3: sem o "Antes e depois" escrito e com a instrução embaixo do título** (a pedido): o `<h2>` "Antes e depois" da seção `#avaliacao` virou `visually-hidden` (mantém o nome acessível), e embaixo de "Veja a avaliação de impacto" voltou o parágrafo `.fase__missao` — agora com `antesDepois.instrucao` ("Arraste o controle para comparar o início e o fim da Jornada.") em vez do texto de `jornada.passos[2].texto` (que segue em `jornada.md`, sem uso). Mesma classe do passo 2, então **mesmo tamanho** (medido: 19,5px, peso 400, mesma cor nos dois, e a frase do passo 3 cabe numa linha). Verificado por screenshot; sem overflow, build ok. **Corrige** a nota anterior que dizia que o kicker "Antes e depois" foi mantido.
- **Mock do jogo da vida: mais pra cima e barra amarela** (a pedido): `.jogo__tela` perdeu a folga de cima (`margin-top` de 2,5rem pra 0,25rem), então o quadro sobe — medido: ≈59px entre a frase do passo 1 e o topo do quadro (a folga restante vem do respiro padrão das seções). A **barra do quadro** ("OVO · JOGO DA VIDA" … "SIMULAÇÃO", `.jogo__barra`) passou de fundo escuro (`--color-text`) pra **amarelo-limão (`--color-accent`)**, com a escrita — inclusive a tag "SIMULAÇÃO" (`.jogo__barra-tag`, antes amarela) — em **azul-escuro (`--color-primary-dark`)**. Verificado: `rgb(226,229,72)` de fundo e `rgb(31,68,96)` no texto; sem overflow; build ok.
- **Jornada: legenda do jogo numa linha e colada no mock; blocos subidos; linha e título do Caderno removidos** (pedidos em sequência):
  - **Legenda + observação do jogo numa linha só**: o texto novo da observação é "Todas as histórias dos personagens do jogo foram criadas e personalizadas pelo nosso time." (`jogo.observacao` em `jornada.md`); as duas frases agora ficam no mesmo `<p class="legenda jogo__notas">` (dois `<span>`), com fonte calibrada pelo container como a frase das Diretorias: `clamp(0.6875rem, calc(min(100vw - 3rem, 69.5rem) / 86), 1rem)` (o texto tem ≈82em). Medido: **1 linha em 1024px (11,3px) e em 1440px (12,9px)**; abaixo de ~930px quebra. A observação fica em peso 600 sem itálico (`.jogo__notas-obs`); `.legenda--obs` saiu.
  - **Explicação bem mais perto do mock**: `.jogo__tela` `margin-bottom` de **4,5rem → 2,25rem** (a folga existia pro Douglas e a etiqueta "Douglas" sobressaírem do quadro no ponto mais baixo). Pra não encostar, o **nó `b-1` subiu de y 90% pra 85%** (`nodes` no frontmatter; as linhas seguem os nós sozinhas). Conferido jogando até `b-1` (casa estudar → última escolha): etiqueta do avatar 13px abaixo do quadro e **23px de folga** até a legenda (gap quadro→legenda 36px; antes 72px).
  - **Blocos das Diretorias e caixas do antes e depois mais acima**: `.diretorias__grid` e `.comparativos` `margin-top` de 2,5rem → **0,75rem** (distância título do passo → blocos de ~102px pra **74px**, medido nos passos 2 e 3).
  - **Linha e título do Caderno removidos**: saiu o "Caderno dos Sonhos, na mão dos estudantes" (`<p class="caderno-fotos__titulo">`, CSS e override da faixa) e a **linha de divisão** (`border-top`) acima de "Exemplo ilustrativo, não é dado real de estudante." (`.legenda--fixa`, agora só `margin-top: 1.5rem`). **Mantive o texto "Exemplo ilustrativo…"**: é o aviso de que os exemplos do antes e depois não são dado real — entendi "a linha" como a linha de divisão, não o aviso. Se era o aviso que sobrava, é só remover o `<p class="legenda legenda--fixa">`.
- **Abertura da página da Jornada em azul com o mesmo degradê da faixa** (a pedido: "a primeira seção — 'Uma escola tão legal quanto a Disney' — pode ser gradiente que nem a Jornada; o 'Antes de começar' fica branco e depois gradiente na Jornada de novo; a abertura tá muito crua"). **Revoga** a decisão anterior "abertura da Jornada volta ao fundo claro" — agora a página alterna **azul (abertura) → claro ("Antes de começar · Em que acreditamos") → azul (faixa da Jornada: passos 1–3) → claro ("Como sabemos que funciona" e Teoria da Mudança)**. Implementação: `.abertura` entrou no mesmo seletor do `.jornada` (`.jornada, .abertura { background: var(--color-primary-dark); … }` e `.jornada::before, .abertura::before` — a camada sticky de brilhos radiais azul claro; é a mesma, sem cópia). Na abertura: kicker em `--color-accent`, título `--color-bg`, marca-texto "tão legal quanto a Disney." com letra escura sobre o amarelo-limão (`.abertura .accent-mark`), `.abertura + section { border-top: none }`. **Os três cartões número+foto não mudaram** (fundo off-white com a foto a 30%, número azul e rótulo escuro — já eram autônomos e leem bem no azul). **Armadilha corrigida**: o respiro vertical da abertura foi do `<section>` pro `.container` (`.abertura > .container { padding-block … }`) — a camada `::before` é o primeiro filho e precisa começar no topo exato da seção; com padding na seção ela começava ~80px abaixo e o brilho aparecia cortado numa borda reta. Verificado em 1024px: fundo `rgb(31,68,96)`, `::before` sticky, sem overflow, build ok.
- **Fotos da abertura transparentes sobre o azul, título do "Antes de começar" do tamanho do título da abertura e "Liderança jovem ao lado"** (pedidos em sequência):
  - **Fotos sobre o azul, não sobre o branco**: os cartões `.numeros__item` perderam o fundo off-white (`background: transparent`, borda `rgba(250,248,244,.3)`); a foto fica a **35% de opacidade** e aparece **por cima do degradê azul** da abertura. Como o fundo agora é azul, o **numeral passou pra `--color-accent`** (amarelo-limão) e o **rótulo pra `--color-bg`** (claro). **Substitui** a nota anterior (foto a 30% sobre off-white, numeral azul, rótulo escuro).
  - **"Antes de começar · Em que acreditamos" no mesmo tamanho do título da abertura**: o `<h2 id="acreditamos-heading">` deixou de ser `.kicker` (caixa-alta pequena) e virou `.acreditamos__titulo` — **mesmos 42,88px / peso 700 / entrelinha 48px / letter-spacing -0,03em do `.abertura__title`** (`clamp(1.875rem, 1.4rem + 2vw, 3rem)`), em `--color-text` (a seção é clara). Medido: valores idênticos e 1 linha em 1024px.
  - **Terceiro número da abertura**: "Jovem Transformador ao lado" → **"Liderança jovem ao lado"** (`abertura.numeros[2].label` em `jornada.md`; era o único lugar do conteúdo com esse rótulo).
- **Correção: borda cortada no degradê da abertura e vazio grande antes do título** (a pedido: "tá com erro bem em cima no gradiente, a página tem um espaço antes de começar"). Causa real: `section` tem um **`padding-block` genérico em `global.css`** (≈81px); ao mover o respiro da abertura pro `.container` eu **não zerei** o da seção, então o `::before` (a camada sticky de brilhos) ainda começava ~81px abaixo do topo (o brilho aparecia cortado numa borda reta em y≈156px) **e** o título ficava com ~160px de vazio em cima (81 da seção + 81 do container). Corrigido com **`.abertura { padding-block: 0 }`** (explícito, com comentário) e o respiro **só no container**, agora menor: `clamp(2.5rem, 2rem + 2vw, 4rem)` em cima e embaixo. Medido: padding da seção 0, kicker 52px abaixo do topo da seção (antes ~160), borda reta sumiu no screenshot; abertura inteira cabe numa tela de 1024px de altura útil. **Lição**: qualquer `<section>` que receba um `::before` posicionado no topo precisa de `padding-block: 0` explícito (o global ganha de "não ter regra").
- **Fotos reais dentro dos blocos das Diretorias de Talentos** (a pedido: "adicionar fotos quando abre os blocos das Diretorias, já na pasta"): seis arquivos novos em `src/assets/images/` (`ARTES.HEIC`, `PESQUISA.jpeg`, `DEBATES.jpg`, `INGLÊS.jpg`, `ROBOTICA.jpg`, `VOLUNTARIADO.jpg`) — nomes mapeados 1:1 às áreas. O HEIC foi convertido (mesmo `heic-convert` do scratchpad, fora do projeto) e todas viraram JPEG ≤1400px em kebab-case: `diretoria-artes-jornalismo.jpg`, `-pesquisa-olimpiadas`, `-debates-onu`, `-ingles-intercambio`, `-programacao-robotica`, `-voluntariado`. No frontmatter de `jornada.astro`, **`fotosDiretorias`** (chave = `id` da área em `conteudo/jornada/areas/*.md`) guarda `src`, `alt` e `pos` (`object-position` do recorte quadrado: 22–42% de cima, calibrado pra manter o rosto à vista); o card renderiza `<Image class="diretoria__foto">` **no topo do corpo que abre** (acima da frase e das etiquetas), **quadrada (1/1)**, moldura reta de 1px escura — aparece quando o bloco abre, como pedido. Os `alt` descrevem só o que se vê (microfone e folha; experimento com balão; plaquinha "Governador do Acre"; torre de peças coloridas; torre de blocos; abraço) — não afirmam nada além da foto. Verificado com os seis blocos abertos em 1024px: as 6 fotos carregam (275×275), sem overflow, build ok. **Os seis arquivos originais continuam em `src/assets/images/`, sem uso** (a tentativa de apagá-los foi bloqueada; podem ser removidos à mão — `ARTES.HEIC` em especial, que o Astro não usa). São fotos de menores com rosto visível: a autorização de uso de imagem (`imagemPendente` em `faca-parte.md`) segue pendente.
- **Diretorias: vizinhos não crescem mais quando um bloco abre; título novo e sem marcador na abertura; fotos sem borda** (pedidos em sequência):
  - **UX dos blocos das Diretorias**: ao abrir um bloco (agora com foto, ≈595px), os outros dois da mesma linha esticavam até a mesma altura e ficavam **gigantes e vazios** — era o `align-items: stretch` do `.diretorias__grid`. Trocado por **`align-items: start`**: cada bloco tem a altura do próprio conteúdo. Para as fechadas continuarem **todas do mesmo tamanho** sem o stretch, o cabeçalho (`.diretoria__head`) ganhou altura mínima fixa: 2 linhas no celular (6,25rem) e **3 linhas a partir de 720px** (`calc(3 * var(--leading-h3) * var(--text-h3) + 2.5rem)`, por causa de "Debates e Simulações da ONU"). Medido em 1024px: fechadas 138px cada; abrindo o 1º ou o 5º, só ele passa a 595px e os outros cinco **seguem em 138px**. **Substitui** a nota "as vizinhas de linha acompanham a altura".
  - **Título da abertura**: "Uma escola tão legal quanto a Disney." → **"Uma escola mais divertida e atrativa."** (`abertura.titulo`/`destaque` em `jornada.md`; `jornadaPreview.titulo` da Home, que menciona a Disney, está sem uso na Home e não foi tocado). O **marcador amarelo** do destaque saiu (obrigava letra escura sobre o azul): `.abertura .accent-mark` agora é `background: transparent; padding: 0;` com o trecho "mais divertida e atrativa." em **`--color-accent` como texto** (~7,6:1 sobre o azul).
  - **Fotos do início sem borda**: os três cartões `.numeros__item` perderam o contorno claro (`border: 0`; antes `1px rgba(250,248,244,.3)`); a foto a 35% simplesmente esmaece no azul. Verificado: borda 0px, sem overflow, build ok.
- **"Como sabemos que funciona" do tamanho do "Antes de começar", ícones coloridos e rodapé azul só na Jornada** (a pedido):
  - O `<h2>` "Como sabemos que funciona" passou a usar a mesma classe do "Antes de começar · Em que acreditamos" (`.acreditamos__titulo`, também listada no seletor `.funciona__titulo`): medido **42,88px / peso 700 / entrelinha 48px / -1,29px de letter-spacing / `rgb(21,42,56)`** nos dois (e iguais ao título da abertura).
  - **Ícones coloridos** nos quatro itens de "Medimos também" (Repertório, Autoconhecimento, Autogestão, Pertencimento): `funcionaCores` no frontmatter = `#d93a3a` (vermelho), `#3c9a62` (verde), `#8f4fd8` (roxo), `#2f7cc7` (azul) — versões mais fundas das cores da paleta das Diretorias, pra ter ≥ 3:1 de contraste sobre o fundo claro (as originais, claras, sumiriam). Passam por uma custom property `--ic` no `<li>` (`.funciona :global(.funciona__icone) { color: var(--ic, var(--color-primary)) }`).
  - **Rodapé azul apenas nesta página**: `Layout.astro` ganhou a prop opcional `footerAzul` (default `false`), repassada como `azul` pro `Footer.astro`, que tem a variante **`.site-footer--azul`** — fundo `--color-primary-dark`, `margin-top: 0` (o azul começa logo depois do conteúdo, sem a faixa branca de 4rem), sem `border-top`, textos `rgba(250,248,244,.82)`, títulos "Contato"/"Redes" e hover em `--color-accent`, divisórias claras, **logo branca** (`logo-tocando-branco.png`, que até agora não tinha uso) e as `PendingNote` do rodapé em `variant="dark"`. Só `/jornada` passa `footerAzul`; Home e demais páginas seguem com o rodapé claro (conferido: Home com rodapé claro e logo azul). Medido na Jornada: fundo `rgb(31,68,96)`, margem 0, sem overflow.
  - **Armadilha de teste**: logo depois de reiniciar o dev server, a aba voltou pra Home e a primeira medição pegou o rodapé da Home por engano — navegar de novo pra `/jornada` antes de medir.
- **Abertura da Jornada: título maior numa linha, sem ponto final, "Aqui começa a Jornada" mais junto; sem pendência de imprensa no rodapé** (pedidos em sequência):
  - **Título maior, ainda numa linha**: `.abertura__title` perdeu o `max-width: 26ch` e a fonte passou a acompanhar a largura — a frase tem ≈17em, então `clamp(1.875rem, calc(min(100vw - 3rem, 69.5rem) / 17.4), 4.25rem)`: **≈56px em 1024px** (antes 43px), ≈64px em 1440px, e no celular fica no piso (1,875rem) e quebra normalmente. Medido em 1024px: 56,09px, **1 linha**, sem overflow. **Atenção**: agora o título da abertura é **maior** que "Antes de começar · Em que acreditamos" e "Como sabemos que funciona" (que seguem em 42,88px, iguais entre si) — a igualdade pedida antes foi quebrada de propósito neste pedido; se quiserem os três iguais de novo, é só copiar a fonte pro `.acreditamos__titulo`.
  - **Sem ponto final**: `abertura.titulo` = "Uma escola mais divertida e atrativa" e `destaque` = "mais divertida e atrativa" (sem o ".", nos dois campos — o `destaque` precisa ser substring exata do `titulo`).
  - **"Aqui começa a Jornada"** com o espaçamento entre letras mais fechado: `.jornada-intro__titulo` `letter-spacing` de -0,02em pra **-0,045em** (≈-3,6px a 79px de fonte).
  - **Rodapé sem a pendência de contato de imprensa** ("não tem"): saiu o `<PendingNote text="[PENDENTE: contato de imprensa]">` do `Footer.astro` (vale em todas as páginas; era o único lugar com esse texto). A **"pessoa responsável" continua pendente** (não foi pedido tirar).
- **Sem ponto final nos cartões de "Em que acreditamos"** (a pedido): tirado o "." do **fim** de cada `frente` e `verso` dos três `acreditamos.cartoes` em `jornada.md` (ex.: "Alguém precisa acreditar nele", "…e também sua ausência"). Os pontos **do meio** do verso ficaram ("Oportunidade não. Por isso levamos…", "…tentar de novo. Nenhuma criança vai odiar a escola"). Verificado no DOM: nenhum dos seis textos termina em ponto; build ok. **Cuidado com regex em YAML**: a primeira tentativa (`\s*$` com flag `m`) engoliu a quebra de linha e colou `baseTeorica:` no fim do último verso (erro de YAML no build) — corrigido na hora; usar `[ \t]*$` ou separar o `\n`.
- **Foto dos estudantes em Birigui depois do indicador principal** (a pedido: "colocar foto dos estudantes em Birigui depois de 'Menos estudantes com absenteísmo crônico…'"): reaproveitado o arquivo que tinha saído da abertura, `src/assets/images/jornada-time-birigui.jpg` (por isso ele deixou de ser "sem uso"). Em "Como sabemos que funciona", um `<figure class="funciona__foto">` logo **depois do `.funciona__principal` e antes de "Medimos também"**: foto larga **16/9** (`object-position: center 68%` pra manter os rostos), largura do container, moldura reta de 1px `--color-border`, `alt` descrevendo só o que se vê (dezenas de estudantes uniformizados olhando pra câmera num pátio coberto, em Birigui — "Birigui" vem do nome do arquivo enviado). Sem legenda. Medido em 1024px: 969×545px, carregada, depois do indicador e antes do "Medimos também", sem overflow; build ok. **Não consegui ver screenshot** (painel de teste sem pintar nesse trecho) — conferido só por medidas de DOM; vale olhar ao vivo. Estudantes menores com rosto visível: autorização de imagem (`imagemPendente` em `faca-parte.md`) segue pendente.
- **Foto real no "02 · Quem somos" da Home** (a pedido: "a foto do Quem somos na Home já tá na pasta"): `src/assets/images/QUEM SOMOS.webp` (1200×900, WebP) foi **renomeada pra `quem-somos-turma.webp`** (padrão kebab-case; a pasta do projeto não deve ter nome com espaço) e **substituiu o `FotoSugerida`** do Quem somos em `index.astro` (o import do componente saiu da Home; ele continua usado em Atuação e Faça Parte). Markup: `<figure class="quem-somos__foto">` com `<Image class="quem-somos__foto-img">`, 16/9 (`object-position: center 46%` pra manter os rostos), largura do container, moldura reta de 1px, sem legenda; `alt` só descreve o que se vê (estudantes uniformizados e jovens voluntárias sorrindo e fazendo sinal de paz numa sala de aula). Conferido no DOM: carregou (962×721 natural), 969×545 renderizada, opacidade 1, sem overflow, build ok; **o painel de teste não pintou a imagem no screenshot** (mesma falha das fotos recentes), então não vi o enquadramento — vale olhar ao vivo e, se cortar rostos, ajustar o `object-position`. Menores com rosto visível: autorização de imagem segue pendente.
- **Home: "Quem somos" com a foto ao lado do título e "Atuação" simplificada** (dois pedidos seguidos):
  - **Quem somos**: o título "Um modelo liderado por jovens, que usa o brincar como ferramenta de aprendizagem." **fica**, e **a foto da turma passa a ocupar o lugar dos três parágrafos** ("Jovens próximos em idade percebem…", "Talento é igualmente distribuído…", "Educar, para nós…") — título à esquerda (5 colunas), foto à direita (`grid-column: 7 / span 6`) a partir de 720px; no celular a foto vem embaixo do título. A foto largura-total que ficava embaixo saiu; agora é `.quem-somos__foto` na própria grade, **proporção original 4/3** (472×354px em 1280px), moldura reta de 1px, sem o divisor vertical de antes. `quemSomos.paragraphs` continua em `home.md`, **sem uso** (idem os parágrafos acima). `.quem-somos__copy` e seu CSS foram removidos. Medido: foto à direita do título, carregada, sem overflow, build ok (o painel de teste pintou a foto esmaecida — fade-in em andamento).
  - **Atuação da Home simplificada** (escolha "Simplificar" na pergunta feita ao usuário): saiu o **círculo animado** (`<CicloAtuacao dark>`, `momentosHome` e os imports de `CicloAtuacao`/`momentos.json` no `index.astro`). A caixa azul com a foto desfocada continua, agora só com **o título "Atuação", o link "Ver Atuação completa →" e uma frase** — `atuacao.abertura` de `conteudo/atuacao/atuacao.md` ("Por jovens, para jovens. Veja como um jovem entra na nossa rede, se forma, vai para o território e gera impacto — em um ciclo contínuo."), em `.atuacao-preview__texto` (`--text-h3`, até 46ch, claro). A caixa caiu de ~622px pra **~301px** de altura. **O componente `CicloAtuacao.astro` ficou sem uso** (a página Atuação usa o `AtuacaoCicloHero`) e as notas anteriores sobre a "mini da Home" do ciclo deixaram de valer pra Home — apagar o arquivo é opcional. Se a caixa com foto desfocada também incomodar, a próxima opção combinada era trocá-la pela faixa azul em degradê da Jornada.
- **Quem somos (Home): título centralizado com a foto e foto mais horizontal** (a pedido): `.quem-somos__grid` ganhou `align-items: center` a partir de 720px (o título "Um modelo liderado por jovens, que usa o brincar como ferramenta de aprendizagem." fica no centro vertical da foto; `margin: 0` no título pra o centro ser exato) — medido: centro do título = centro da foto (y idêntico em 1280px). A foto passou de 4/3 pra **3/2** (472×315px), cortando um pouco em cima e embaixo, com `object-position: center 46%` pra manter os rostos; screenshot confirma os rostos inteiros. **Substitui** "proporção original 4/3" da nota anterior.
- **Teoria da Mudança com o mesmo tamanho dos outros títulos da Jornada** (a pedido): o `<h2>` de [TeoriaMudancaCirculo.astro](src/components/TeoriaMudancaCirculo.astro) deixou de ser o rótulo `.kicker` em caixa-alta e virou `.tm__titulo` — 42,88px / peso 700 / entrelinha 48px / -0,03em, igual a "Antes de começar · Em que acreditamos" e "Como sabemos que funciona" (medido idêntico nos três).
- **Mapa de voluntários por região com os nomes reais** ([VoluntariosMap.astro](src/components/VoluntariosMap.astro), `/faca-parte`, a pedido: "apenas os engajados e participativos"). Fonte: planilha "Nova Central - 2026", aba **Alimentar**, coluna STATUS = "Engajado e Participativo" (140 pessoas). Estado: coluna Estado da própria aba (58) ou, quando vazia, a aba "ENTRADA Confirmação" casada por e-mail/nome (82) — todos os 140 ficaram com estado; UF → macrorregião. `conteudo/faca-parte/voluntarios-por-regiao.json` agora tem `voluntarios: string[]` por região (sem `pendente`); o painel mostra "Região · N voluntários" e a lista em 2 colunas (rola por dentro; Sudeste tem 51). Nome exibido = **primeiro + último nome** (nome social quando existe), em ordem alfabética.
  - **Só maiores de 18 anos entraram (87 de 140)**: 49 têm 13–17 anos e 4 têm data de nascimento inválida — publicar nome de menor exige autorização do responsável (LGPD), então ficaram de fora até alguém confirmar a autorização. Texto da legenda: "Voluntários engajados e participativos com 18 anos ou mais — lista atualizada a cada 6 meses." Ninguém que respondeu "não" ao compartilhamento foi excluído porque ninguém respondeu "não" entre os elegíveis; **a pergunta de autorização na planilha cobre "fins estatísticos internos", não divulgação pública** — vale confirmar o consentimento dos adultos (os 58 mais antigos nem têm essa resposta na planilha). Contagem por região: Norte 5, Nordeste 22, Centro-Oeste 4, Sudeste 51, Sul 5.
  - A lista é uma foto da planilha em 06/11/2026; atualizar = refazer a extração (o script usado ficou só no scratchpad, não no projeto).
  - **Atualização (a pedido: "pode colocar todos, já temos LGPD")**: os menores de 18 e as datas inválidas **entraram** — a lista não filtra mais por idade; a legenda virou "Voluntários engajados e participativos — lista atualizada a cada 6 meses." Contagem por região: Norte 9, Nordeste 35, Centro-Oeste 9, Sudeste 74, Sul 10 (**137 nomes**). **3 pessoas continuam de fora de propósito**: responderam "não" à pergunta de compartilhamento de dados opcionais na aba "ENTRADA Confirmação" — incluir só se confirmarem. Isso **substitui** a regra "só maiores de 18" da nota acima.
- **"Quem somos" (time institucional) removido de Contato** (a pedido): saíram de [faca-parte.astro](src/pages/faca-parte.astro) a grade de retratos (Luiza, Milanna, Isabella, Luísa, Sarah), a `PendingNote` do conselho, o CSS `.quem-somos`/`.pessoa-card*` e os imports sem uso (equipe, fotos da Milanna e da Sarah, `MediaPlaceholder`, `ImageMetadata`). Contato agora termina em redes sociais → mapa de voluntários por região. **Ficam no projeto, sem uso**: `conteudo/reconhecimentos/equipe.json`, `contato.quemSomosKicker` em `faca-parte.md` e as fotos `mila-retrato.png`/`sarah-retrato.jpg`. As notas anteriores sobre a grade "Quem somos" (Milanna, Sarah, cores por pessoa, time enxuto) **não valem mais**.
- **Contato (`/faca-parte`) redesenhado na paleta da TEF, mais interativo, com duas fotos novas** (a pedido: "não gosto das cores… mais interativa", "foto doações entre a chave pix e os valores", "foto dos voluntários na parte do quer ser voluntário", "tirar os pontinhos"). **Saíram** as cores das Diretorias (`#ED4949 #B8D58A #FFBD28 #F28BB8 #B274F1 #6FA8E8`), o `#FFBD28` e as sombras duras; a página usa só azul (`--color-primary`/`--color-primary-dark`), off-white e o `--color-accent` (amarelo-limão, nunca como letra sobre fundo claro). **Substitui** as notas anteriores de cores/sombras do Contato.
  - **Hero**: fundo azul liso (o **pontilhado saiu**) e os três atalhos viraram linhas numeradas "01 Doar / 02 Ser voluntário / 03 Falar com a gente" com fio de 1px; hover/foco enche de amarelo-limão e a seta desce.
  - **Doação**: cartão do Pix em azul-escuro (chave em amarelo-limão, botão "Copiar chave Pix" amarelo-limão). **Foto entre o Pix e os valores** (`DOAÇÕES.jpg` → `doacoes-estudantes.jpg`, 2000px, 16/9 com `object-position: center 28%`, moldura reta de 1px). **Valores sugeridos são selecionáveis** (radios por baixo, `fieldset`/`legend`; o escolhido vira azul-escuro com o valor em amarelo-limão) e um **resumo** logo abaixo diz o que aquele valor paga, com "Copiar chave Pix" e "Doar todo mês →" (link da Grifa). Sem JS o primeiro valor já vem marcado e o resumo mostra o dele.
  - **Voluntariado**: os dois blocos agora têm moldura clara de 1px (borda amarelo-limão no hover) em vez de cartão claro/amarelo; chips dos times em contorno; botão "Pré-inscrição" amarelo-limão. O `FotoSugerida` saiu daqui — **entrou a foto do time** (`voluntários.jpg` → `voluntarios-time.jpg`, 16/9, alto 28%): grupo de jovens e adultos diante de uma parede de engrenagens; o `alt` é neutro (não afirma quem são/onde foi).
  - **Contato**: bloco do e-mail em azul-escuro com botão "Copiar e-mail" (o script de copiar virou genérico, `data-copied` define a mensagem); bloco das redes com borda; hover muda a borda.
  - Os originais `DOAÇÕES.jpg` e `voluntários.jpg` continuam em `src/assets/images/`, sem uso. `FotoSugerida` segue em uso só na Atuação.
- **Títulos de seção de Contato maiores** (a pedido: "Doação, Voluntariado e Contato têm que estar maiores, indicando que é uma seção da página"): os três `<h2>` de [faca-parte.astro](src/pages/faca-parte.astro) deixaram de ser `.kicker` (caixa-alta pequena) e viraram `.secao-titulo` — `clamp(2.25rem, 1.5rem + 3.5vw, 4.5rem)` (≈60px em 1024px), peso 700, `-0,03em`, com fio de 1px embaixo; no Voluntariado (faixa azul) a variante `.secao-titulo--claro` (letra off-white, fio claro). Os subtítulos "Valores sugeridos" e "Voluntários pelo Brasil" seguem como kicker pequeno. Medido: 59,84px/700 nos três, sem overflow, build ok.
- **E-mail de Contato numa linha só** (a pedido): `.contato__email` ganhou `white-space: nowrap` e a fonte passou a acompanhar a largura do próprio bloco (`.contato__block--email { container-type: inline-size }` + `font-size: clamp(0.8rem, 6.2cqi, 2.1rem)`), no lugar do `overflow-wrap: anywhere` que quebrava o endereço. Medido: 1 linha em 375px (17,6px, cabe nos 333px do bloco) e no desktop, sem overflow horizontal.
- **Parágrafo da Doação até o fim da margem** (a pedido: "Nosso modelo combina mobilização comunitária… tá quebrado em três linhas"): `.doacao__texto` perdeu o `max-width: 40rem` (agora `none`) e ocupa a largura inteira do container, igual ao cartão do Pix — medido em 1024px: 969px (mesma largura do cartão), 2 linhas em vez de 3, sem overflow.
- **Foto das Doações: corte ancorado no topo** (a pedido: cortava a cabeça de um menino): `.doacao__foto-img` passou de `object-position: center 28%` pra **`center 0%`** — o recorte 16/9 de uma foto 4/3 mostra o topo inteiro e perde só a parte de baixo (pernas/carteira); conferido em screenshot, as cinco cabeças ficam inteiras. **Substitui** o "28%" da nota anterior (a foto dos voluntários segue em 28%, é outra foto).
- **Resumo do valor escolhido em amarelo** (a pedido: "o box embaixo de 'Com R$ 20: …' pode ser amarelo"): `.valor-resumo` trocou a moldura de 1px por fundo `--color-accent` (amarelo-limão da TEF, `rgb(226,229,72)`) com texto `--color-text`; os botões ("Copiar chave Pix" escuro, "Doar todo mês →" em contorno) seguem legíveis. Não usei o `#FFBD28` (lê como laranja, já rejeitado).
- **Voluntariado reordenado e enxuto** (a pedido): ordem agora = título → **"Para você que tem entre 13 e 25 anos, tem 5 horas por semana disponíveis, é apaixonado por educação e quer contribuir."** (`voluntariado.intro` em `faca-parte.md`; o texto anterior "Buscamos jovens de 13 a 25 anos…" saiu — o pedido dizia "13 a 25", usei "13 e 25", que é o certo depois de "entre") → **botão "Pré-inscrição →" logo abaixo** (antes ficava no fim da seção) → **blocos "Atuação online" / "Atuação presencial"** → **foto do time**. **Saíram**: a tarja "Já participou da Jornada como estudante? Você pode voltar como líder." e o cartão com a frase "É uma oportunidade de transformar a realidade onde você já está — em qualquer região do Brasil." (markup, CSS `.voluntariado__ex-aluno`/`.voluntariado__quote` e o import do `QuoteBlock` em [faca-parte.astro](src/pages/faca-parte.astro)). Os campos `exAluno` e `presencial.frase` continuam em `faca-parte.md`, sem uso. **Substitui** as notas anteriores sobre a tarja dos ex-estudantes e a frase em cartão claro.
- **Intro do Voluntariado até o fim da margem** (a pedido): `.voluntariado__intro` perdeu o `max-width: 42rem` (agora `none`) e ocupa a largura inteira do container, igual aos blocos de Atuação logo abaixo — mesmo ajuste já feito no parágrafo da Doação.
- **Frase de abertura do Voluntariado reescrita** (a pedido; a anterior "Para você que tem entre 13 e 25 anos…" ficava sem verbo principal): `voluntariado.intro` = "Buscamos jovens de 13 a 25 anos, apaixonados por educação, com pelo menos 5 horas por semana para contribuir." Substitui a frase da nota "Voluntariado reordenado e enxuto".
- **Doação: sem a frase de formas e Grifa como botão** (a pedido): saiu "Formas de doar: Pix ou cartão recorrente." (`doacao.formasTexto` segue em `faca-parte.md`, sem uso) e o link "grifa.me/instituicao/tocando-em-frente →" do cartão do Pix virou o botão **"Doações recorrentes →"** (`btn btn-accent`, amarelo-limão, igual ao "Copiar chave Pix"; abre a Grifa em nova aba). `doacao.cartaoLinkText` segue no conteúdo, sem uso.
- **Pendência de autorização de imagem resolvida** (a pedido: "temos contrato com a escola, autorização de uso de imagem assinada e válida para publicação em site aberto"): saiu a `PendingNote` "[PENDENTE: autorização de uso de imagem…]" de Contato (marcação em [faca-parte.astro](src/pages/faca-parte.astro), campo `contato.imagemPendente` de `faca-parte.md` e o import de `PendingNote` que ficou sem uso nessa página). **Todas as notas anteriores deste arquivo que dizem "autorização de imagem segue pendente" (fotos da Jornada, Birigui, Diretorias, Quem somos etc.) deixam de valer** — a cobertura é o contrato com as escolas. O contrato é com a escola; **fotos de voluntários/equipe (ex.: a foto do time em Voluntariado, com adultos) não estão nesse contrato** — vale confirmar a autorização dessas pessoas à parte.
- **"Voluntários pelo Brasil" com o tamanho dos outros títulos de seção** (a pedido): o `<h3 class="caption kicker kicker--muted">` virou `<h2 class="secao-titulo">` (mesmos ≈60px / 700 / fio de 1px de "Doação", medido idêntico); `.voluntarios-regiao` perdeu o `border-top` (o título já traz o próprio fio) e ganhou mais respiro em cima. **Os subtítulos que sobram como kicker pequeno em Contato** são só "Valores sugeridos" (Doação).
- **Redes de Contato viraram botões e o LinkedIn entrou no rodapé** (a pedido): em [faca-parte.astro](src/pages/faca-parte.astro) Instagram, TikTok e LinkedIn deixaram de ser links em texto e viraram botões `.btn.btn-outline-dark.contato__rede-btn` (nome em negrito + @ em caixa normal + seta, um por linha na largura do bloco, abrem em nova aba; hover enche de escuro); as regras genéricas de link do bloco passaram a `a:not(.btn)` pra não pintar o texto do botão escuro-sobre-escuro no hover. Medido: 3 botões de 48px no desktop e 65px (65 por quebra do @ se faltar largura) em 375px, sem overflow. [Footer.astro](src/components/Footer.astro): "LinkedIn" era só texto sem link — agora aponta pra https://www.linkedin.com/company/tocando-em-frente/ (mesmo href de `contato.redes`), junto de Instagram e TikTok, em todas as páginas.
- **Rodapé azul em todas as páginas** (a pedido: "todos os rodapés azuis igual o da Jornada"): em [Layout.astro](src/layouts/Layout.astro) a prop `footerAzul` passou de `false` para **`true` por padrão** (passe `footerAzul={false}` numa página pra voltar ao rodapé claro); a Jornada deixou de precisar passá-la. Conferido nas cinco páginas (Home, Atuação, Jornada, Reconhecimentos, Faça Parte): todas com `.site-footer--azul` (fundo `rgb(31,68,96)`, logo branca) e o LinkedIn linkado. **Substitui** "Rodapé azul só na Jornada" e "Home e demais páginas seguem com o rodapé claro" nas notas anteriores. Na Home o azul passa a vir logo depois da faixa amarela do CTA final. Armadilha de teste: a Atuação tem um `<footer class="historia__footer">` dentro das histórias — selecione o rodapé do site por `.site-footer`, não por `footer`.
- **Cards de destaque de Reconhecimentos em azul "misturado"** (a pedido: "boxes de destaque… azuis gradientes"): em [reconhecimentos.astro](src/pages/reconhecimentos.astro) `.destaque-card` (LED, ONU, Watson, The Wall) trocou a borda cinza sobre fundo claro por fundo `--color-primary-dark` com **brilhos radiais de azul claro** (`rgba(127,180,238,.38)` no canto superior direito e `.26` no inferior esquerdo, mais um azul médio `rgba(44,92,130,.85)` no miolo) — mesma ideia do degradê "misturado" da Jornada, nunca linear de cima pra baixo; borda de 1px off-white translúcida. Texto: título `--color-bg`, parágrafos off-white a 92%, rótulo ("Prêmio · 2024") e link ("Assistir →"/"Ver no site da ONU →") em `--color-accent`, fonte/nota a 80%. As regras `.destaque-card p` (0,1,1) são vencidas de propósito pelas de classe+classe (`.destaque-card .destaque-card__label` etc.). Verificado: 4 cards, cores computadas certas, sem overflow em 1024px nem 375px. Tem 1 versão do mesmo degradê em cada card (não sticky: o card é pequeno), então o brilho acompanha o card, não a tela.
- **Reconhecimentos: faixa de mídia e topo em azul "misturado", texto sem teto e seção de imprensa removida** (pedidos em sequência, em [reconhecimentos.astro](src/pages/reconhecimentos.astro)):
  - **"Mídia e aparições" (ticker)**: a seção `.midia` ganhou o mesmo degradê dos cards de destaque (base `--color-primary-dark` + brilhos radiais de azul claro `#7FB4EE` nos cantos e um azul médio no miolo); o kicker virou `kicker--dark` (amarelo-limão) e **os boxes dos links seguem brancos** — `.midia-box { background: #fff }` (antes eram transparentes sobre o fundo claro). Medido: fundo `rgb(31,68,96)` + gradientes, boxes `rgb(255,255,255)`.
  - **Topo da página (`.hero`)** também em azul "misturado", com título `--color-bg` e frase a 92%; padding um pouco maior (`clamp(2.5rem…4rem)` em cima, `clamp(2rem…3rem)` embaixo). O h1 ("Reconhecimentos & Transparência") e o `.hero__contexto` perderam o `max-width` (44rem/40rem → `none`) e vão até o fim da margem (969px em 1024px, igual ao container).
  - **Seção "Para imprensa" removida por inteiro** (e-mail de imprensa, "Logo para download" e "Sobre o Tocando em Frente", as duas últimas ainda `[PENDENTE]`): markup, CSS `.imprensa*` e o `imprensa` do destructure. **Ficam no projeto, sem uso**: o bloco `imprensa` de `conteudo/reconhecimentos/reconhecimentos.md`. **Substitui** as notas antigas que citam a pendência do logo em SVG e da frase "sobre" nesta página; o e-mail único de contato segue em Faça Parte e no rodapé. A página agora tem 4 seções: topo → destaques → mídia → transparência.
  - **Armadilha de teste**: depois de editar o CSS escopado, o servidor de dev serviu a folha antiga (a faixa de mídia e os boxes mediram `rgba(0,0,0,0)`) — reiniciar (`preview_stop`/`preview_start`) resolveu, não era erro do código.
- **Transparência sem as duas pendências de link** (a pedido): saíram da seção "Transparência institucional" de [reconhecimentos.astro](src/pages/reconhecimentos.astro) o `[PENDENTE: link direto para a consulta pública por CNPJ na Receita Federal]` (a frase "Todos os dados podem ser conferidos no Cadastro Nacional da Pessoa Jurídica, no site da Receita Federal." **fica**, agora sem link — decisão minha: só tirei a pendência, não o texto) e o `[PENDENTE: link para Estatuto social (PDF), relatório anual de atividades, demonstrativo financeiro]`. Os campos `consultaLinkPendente`/`documentosPendente` também saíram de `reconhecimentos.md`. **Se quiserem a frase sem link também, é só apagar o `<p>` de `consultaTexto`.** Sobram `logoPendente`/`sobrePendente` no `.md` (da seção de imprensa removida) sem uso. Única pendência visível que resta no site: "pessoa responsável" no rodapé.
- **Título de Reconhecimentos no tamanho do título da Jornada, em amarelo, com "Trajetória e impacto" embaixo** (a pedido: "…tem q estar no msm tamanho de Jornada pedagógica e amarelinho tb, e aí grande embaixo fica Trajetória e impacto"). Interpretei "Jornada Pedagógica" como o grande "Aqui começa a Jornada" (amarelo, na faixa azul): `.hero h1` de [reconhecimentos.astro](src/pages/reconhecimentos.astro) agora usa **`clamp(2.75rem, 1.75rem + 5vw, 6rem)`** a partir de 720px (79,2px em 1024px, igual ao da Jornada), peso 800, `-0,045em`, **`--color-accent`**; abaixo de 720px `clamp(2rem, 8.5vw, 2.75rem)` (32px em 375px) — com 2,75rem a palavra "Reconhecimentos" sozinha passava da largura. O título quebra em **duas linhas** ("Reconhecimentos &" / "Transparência") no desktop — a frase é longa demais pra caber numa linha nesse tamanho. Novo campo `hero.subtitulo: 'Trajetória e impacto'` em `reconhecimentos.md`, renderizado como `.hero__sub` (off-white, `clamp(1.5rem, 1.1rem + 1.8vw, 2.5rem)`, peso 500, 36px em 1024px) entre o título e a frase "Prêmios, aparições na mídia…" (que **continua**; se "Trajetória e impacto" era pra substituí-la, é só apagar o `.hero__contexto`). Sem overflow em 1024px nem 375px. **Substitui** o tamanho antigo do h1 (≈52px) da nota anterior.
- **Topo de Reconhecimentos refeito como a abertura da Jornada** (correção do pedido anterior: "pega como base a aba de jornada… Reconhecimentos & Transparência em cima, menor e amarelo; 'Trajetória e mídia' como 'Uma escola mais divertida e atrativa', somente em branco; apaga a frase"). Em [reconhecimentos.astro](src/pages/reconhecimentos.astro): **"Reconhecimentos & Transparência"** virou o rótulo pequeno em cima (`<p class="caption kicker kicker--dark hero__kicker">`, 15px, amarelo-limão, caixa-alta espaçada — o mesmo kicker da Jornada) e **"Trajetória e mídia"** é o `<h1 class="hero__titulo">` grande em `--color-bg` (branco), **mesma fórmula do `.abertura__title` da Jornada** (`clamp(1.875rem, calc(min(100vw - 3rem, 69.5rem) / 17.4), 4.25rem)`, 56,09px em 1024px, 1 linha). **A frase "Prêmios, aparições na mídia e dados oficiais…" foi apagada** (campo `hero.contexto` segue em `reconhecimentos.md`, sem uso). O texto do título está em `hero.subtitulo` = **'Trajetória e mídia'** (o pedido anterior dizia "Trajetória e impacto" e este diz "mídia" — segui o mais recente; é só trocar o campo). Efeito colateral: o `<h1>` agora é "Trajetória e mídia" e o nome da página fica no kicker (o `<title>` da aba continua "Reconhecimentos e Transparência"). **Substitui** as notas anteriores sobre o h1 grande amarelo e sobre `.hero__sub`/`.hero__contexto`.
- **Topo da Atuação com o cabeçalho da Jornada/Reconhecimentos, tudo em azul "misturado", rodinha embaixo** (a pedido: "atuação fica menor e amarelo em cima e embaixo branco Por jovens, para jovens. Tudo em css azul gradiente. A rodinha vai embaixo"). Em [AtuacaoCicloHero.astro](src/components/AtuacaoCicloHero.astro) (props agora `kicker`, `titulo`, `momentos` — `lede` saiu): **cabeçalho** = `<p class="caption kicker kicker--dark">Atuação</p>` (amarelo-limão, pequeno) + `<h1 class="ciclo-hero__titulo">Por jovens, para jovens.</h1>` em branco, **mesma fórmula do título da abertura da Jornada** (`clamp(1.875rem, calc(min(100vw - 3rem, 69.5rem) / 17.4), 4.25rem)`, 56px em 1024px, 1 linha; 30px em 375px). O texto do título vem de **`heroTitulo`** (campo novo em `conteudo/atuacao/atuacao.md`) e o rótulo é o `title` da página. **A frase "Veja como um jovem entra na nossa rede, se forma…" deixou de aparecer** (`abertura` segue no `.md`, sem uso aqui) — o ciclo já conta isso. **A rodinha vem depois do cabeçalho** (antes o título vivia na coluna da direita, ao lado dela): saíram `.ciclo-hero__intro`, `.ciclo-hero__intro-side`, `.ciclo-hero__title`, `.ciclo-hero__lede`; sobram a rodinha à esquerda e a lista das 5 etapas à direita, dentro do mesmo palco sticky. **Fundo**: a `<section>` inteira é `--color-primary-dark` + camada `::before` sticky de brilhos radiais de azul claro (mesma técnica da Jornada: `position: sticky; top:0; height:100vh; margin-bottom:-100vh; z-index:-1`, `isolation: isolate; overflow: clip`, **`padding-block: 0`** explícito — o `section` global tem padding). **Cores do ciclo sobre o azul**: as cinco etapas usam o mesmo `--color-accent` (`--m0..--m4`; as cores por etapa azul/verde sumiriam no fundo escuro) — trilho tracejado branco a 40%, pontos com contorno branco, trilha e bolinha amarelo-limão, nome/número das etapas em off-white (72%) e a ativa em amarelo-limão com descrição a 92%, "+1 escola impactada" em branco. **Substitui** as notas antigas sobre o título na coluna da direita, o "intro" só de celular e as cores por etapa (azul → verde → dourado) deste componente; a mini da Home (`CicloAtuacao`) já não existe em uso. Verificado: kicker `rgb(226,229,72)`, h1 `rgb(250,248,244)`, 1 `<h1>` na página, rolando 800px a etapa "Formação" fica ativa com a trilha amarela desenhada, sem overflow em 1024px nem 375px, `npx astro build` ok. Dev server serviu CSS antigo de novo — reiniciei antes de medir.
- **Título da Atuação sem ponto final** (a pedido): `heroTitulo` em `conteudo/atuacao/atuacao.md` = 'Por jovens, para jovens' (sem o "."; mesma regra do título da Jornada, "Uma escola mais divertida e atrativa"). A frase `abertura` (com ponto) segue no `.md`, sem uso no topo.
- **Print do onboarding na Atuação, depois de "Como chegamos às escolas"** (a pedido: "adicionei na pasta print do onboarding"): `src/assets/images/onboarding.jpg` (captura de uma videochamada do Meet com os quadros e **os nomes dos participantes visíveis**) entrou em [atuacao.astro](src/pages/atuacao.astro) no lugar do `<FotoSugerida>` "Formação dos Diretores Regionais" — logo depois do `FrenteModule`/`FrenteVisualSteps`, dentro da seção `.complemento`, antes do mapa "Como isso se sustenta". `<figure class="onboarding">` em **proporção original (≈2,08:1), sem corte** (recortar tiraria quadros e nomes), largura do container, moldura reta de 1px, `height:auto`, legenda "Onboarding do Tocando em Frente, por videochamada." (sem data — não inventei). `alt` descreve só o que se vê. **O `FotoSugerida.astro` ficou sem nenhum uso no projeto** (era o último; apagar o arquivo é opcional). Como o print mostra rostos/nomes de voluntários (alguns possivelmente menores), vale lembrar que a cobertura de autorização de imagem citada acima é a do contrato com as escolas — **confirmar a autorização dessas pessoas à parte**, como já anotado pra foto do time. Medido: 969×466 (2,08), carregada, depois do bloco e antes do mapa, sem overflow. Armadilha: o dev server serviu o CSS antigo e a imagem saiu esticada (1,26) até reiniciar.
- **Mapa dos 363 voluntários sem pontilhado, sem tracejado e sem as cores pastel** (pedidos em sequência, em [SustentacaoMapa.astro](src/components/SustentacaoMapa.astro)): (1) saiu o fundo **pontilhado** (`.mapa-times__stage::before`, grade de pontos que esmaecia nas bordas) e os **fios tracejados** em repouso que ligavam cada time ao "363" (`stroke-dasharray: 3 7`, opacity .32) — as `<line>` agora ficam em `opacity: 0` e **só o fio do time em foco aparece, sólido** (`.is-visible`, 2,5px). (2) **Cores dos boxes revistas** ("não gosto das cores dos boxes dos 363"): os oito tons pastel (`#FFBD28 #E2E548 #B8D58A #9ED8E8 #F4A6C0 #D2B1F5 #F7B38A #FAF8F4`) saíram — `cores` virou `['var(--color-bg)']`, então **todos os boxes são off-white com texto escuro** (`rgb(250,248,244)`, medido nos 8); **o amarelo-limão da TEF (`--color-accent`) aparece só no hover/foco/ativo** (fundo do box, sem o `filter: brightness`), no fio do time em foco e na barra de 5px do topo do pop-up. Sombra dura e flutuação mantidas. Os anéis que nascem do 363 (`.mapa-times__rings`) **ficaram** — não foram pedidos. **Substitui** as notas antigas "Uma cor por time", "fundo pontilhado" e "fios sempre à vista (tracejados)" desta seção. Conferido: 8 boxes off-white, pop-up com barra `rgb(226,229,72)`, sem overflow; dev server reiniciado antes de medir.
- **Boxes do mapa dos 363 em amarelo-limão** (a pedido: "boxes amarelinhos"): `cores` em [SustentacaoMapa.astro](src/components/SustentacaoMapa.astro) agora é `['var(--color-accent)']` — os 8 boxes são `--color-accent` (`rgb(226,229,72)`, medido) com texto escuro; no **hover/foco/ativo viram off-white** (`--color-bg`, trocado de lugar com o amarelo da nota anterior, que deixava o ativo amarelo sobre boxes off-white); fio do time em foco e barra de 5px do pop-up seguem amarelo-limão. **Corrige** a nota anterior ("todos off-white, amarelo só no hover"). Conferido com screenshot: 8 boxes amarelos, o aberto (Financeiro) off-white com pop-up legível; sem overflow.
- **"Onde estamos" com título grande, legenda à esquerda e mapa maior à direita** (a pedido: "Onde estamos tem que estar como título grande, queria que o mapa tivesse maior do lado direito da tela e a descrição da legenda do lado esquerdo junto com o onde estamos"; depois "mapa maior"). [AtuacaoMap.astro](src/components/AtuacaoMap.astro) virou um **grid de 3 áreas** (`titulo`, `mapa`, `legenda`) com um `<slot name="titulo">`: a partir de 860px duas colunas `minmax(0, 0.85fr) minmax(0, 1.45fr)` — título + legenda empilhados à esquerda, **mapa ocupando as duas linhas da direita, encostado à direita**; no celular a ordem é título → mapa → legenda (conferido em 375px: títulos/mapa/legenda em sequência, sem overflow). O `<h2 id="mapa-heading" slot="titulo" class="secao-titulo">Onde estamos</h2>` agora vive em [atuacao.astro](src/pages/atuacao.astro) (deixou de ser o kicker pequeno), com a receita de título de seção de Contato (peso 700, `-0,03em`, fio de 1px) mas **fonte menor só aqui** (`.mapa .secao-titulo`: `clamp(2rem, 0.9rem + 3.1vw, 4.25rem)`, 46px em 1024px) pra caber **numa linha** na coluna esquerda (a 60px quebrava em "Onde / estamos"). **Legenda** em tamanho de leitura (`--text-body`), uma por linha, com quadradinhos de 1rem. **Mapa**: removido o limite de altura que o encolhia pra caber na tela (era `min(44rem, 100%, (altura − cabeçalho − 4rem) × 0,8)` ≈ 505px em 1024×768) — agora `width: min(60rem, 100%)` = **575×719px em 1024px (+14%)**, que passa um pouco da altura da tela (719 vs 695 úteis); **isso reverte o requisito do doc de textos "o mapa deve caber inteiro na tela"** a pedido de "mapa maior". Pins e balões não mudaram. Dev server reiniciado antes de medir (CSS antigo de novo).
- **Mapa de "Onde já passamos" (Atuação): título renomeado, sem branco sobrando e pontos no lugar certo** (pedidos em sequência, em [AtuacaoMap.astro](src/components/AtuacaoMap.astro) e [atuacao.astro](src/pages/atuacao.astro)).
  - **Título**: "Onde estamos" → **"Onde já passamos"** (`mapa.kicker` em `conteudo/atuacao/atuacao.md`), numa linha só (fonte `clamp(2rem, 0.9rem + 2.2vw, 2.875rem)`, 37px em 1024px — o texto mais longo não cabia a 46px na coluna esquerda e quebrava em 2 linhas).
  - **"Muito espaço em branco"**: (1) a imagem do mapa traz ~12% de margem branca em cima e ~10% embaixo — o frame ganhou **`margin-block: -12% -9%`** (% da largura da coluna) pra cortar esse branco **sem mexer nas coordenadas dos pins** (que seguem em % do próprio frame); (2) a coluna da esquerda deixou de ficar colada no topo: grid de 4 linhas `1fr auto auto 1fr` **centraliza título + legenda na altura do mapa**; (3) `.mapa` com menos padding vertical (`clamp(2rem…4rem)`).
  - **"Pontos fora dos estados certos" — duas causas reais, as duas corrigidas**: (a) **limites geográficos arredondados**: `BRAZIL_BOUNDS` era `-74/-34/5/-34`; os reais são **`lonMin -73.99, lonMax -34.79, latMax 5.27, latMin -33.75`** (Serra do Divisor, Ponta do Seixas, Monte Caburaí, Chuí) — o leste em -34 empurrava o Nordeste/litoral ~2% da largura pra dentro do mar. Validado medindo os 4 extremos da própria imagem num `<canvas>` (leste 975 vs 974 previsto, oeste 28/469 vs 28/469, norte 359/151 vs 361/152, sul 525/1120 vs 525/1120, em 1000px) e conferindo cidades de costa (Fortaleza, Salvador, Maceió, Aracaju, Santos, Rio) a 1–4px do mar. (b) **o "descer um pouquinho todos os pontos" do pedido era um bug de CSS**: `.atuacao-map__pin-wrap` tinha altura de uma linha de texto (**29px**, o botão é inline), então o `translate(-50%, -50%)` subia **todos os 29 pins ~14,6px** acima da coordenada. Agora o contêiner é `width: 0; height: 0; line-height: 0` e o botão `display:block` — medido dx=0, dy=0 nos 29 (antes dy -14,6); balão do tooltip a `calc(100% + 0.9rem)`. Os 29 pontos ficam todos sobre terra. **Nota**: Timon (MA) e Teresina (PI) são vizinhas na margem do rio Parnaíba — a menos de 1px no mapa, então não dá pra "cair no estado certo" de cada uma.
- **"Histórias de impacto" virou só "Sem superpoderes, mas super-heróis" com tamanho de título** (a pedido): `historias.kicker` em `atuacao.md` = 'Sem superpoderes, mas super-heróis' (o prefixo "Histórias de impacto: " saiu) e o `<h2>` de [atuacao.astro](src/pages/atuacao.astro) trocou `.kicker` por **`.secao-titulo`** (≈60px, 700, fio de 1px — o mesmo de "Doação"/"Contato"). Medido: 59,84px/700.
- **Jornada: os três cartões do início sobem juntos** (a pedido: "as três fotos tão com erro subindo em tempos diferentes"): em [jornada.astro](src/pages/jornada.astro) a sequência atrasava cada cartão 700ms (`delay += 700`) — o 1º, 2º e 3º entravam em momentos diferentes. Agora **os três recebem `.is-on` no mesmo instante** e contam juntos (mesma duração, 800ms). O gatilho do `IntersectionObserver` baixou de `threshold: 0.4` pra `0.15`: com 40% a lista empilhada do celular (mais alta que a tela) podia **nunca disparar** e deixar os cartões invisíveis. Verificado: `is-on` nos 3 + valores contando em paralelo. **Substitui** "contam um de cada vez" das notas anteriores. Armadilha: o `IntersectionObserver` só dispara com o painel renderizando — um screenshot destrava.
- **Pontos do mapa um pouco mais pra esquerda** (a pedido): [AtuacaoMap.astro](src/components/AtuacaoMap.astro) ganhou a constante **`PIN_X_OFFSET = -0.8`** (em pontos percentuais da largura do mapa, ≈4,6px com o mapa a 575px), somada ao `x` de todos os pins depois de projetar a coordenada — fica num lugar só pra ajustar (mais negativo = mais à esquerda, 0 volta ao cálculo puro). É um **ajuste visual**, não correção geográfica (a projeção em si já batia com os extremos da imagem). Conferido: os 29 pontos continuam sobre terra.
- **Citação do Jean menor que o título e pontos de SC mais pra baixo** (dois pedidos). (1) "As aspas do Jean estão sobressaindo o título": em [atuacao.astro](src/pages/atuacao.astro) a citação grande das histórias (`.historia__quote-big p`) era `--text-h2` (40px) — perto demais dos 60px do título "Sem superpoderes, mas super-heróis" e colada nele. Agora `clamp(1.375rem, 1.05rem + 1.2vw, 1.875rem)` (**29px em 1024px**, peso 500, entrelinha 1,25; vale pras duas histórias, Jean e Jeferson) e há respiro entre título e primeira história (`.historias .secao-titulo + .historia`, `clamp(2rem…3.5rem)`; medido 44px). Ainda é o maior texto DENTRO da história, mas o título manda. **Substitui** a nota que descrevia a citação como "maior elemento textual da seção" (`--text-h2`). (2) "Os pontos de SC um pouquinho mais pra baixo": [AtuacaoMap.astro](src/components/AtuacaoMap.astro) ganhou **`PIN_Y_OFFSET_POR_UF = { SC: 0.7 }`** (pontos percentuais da altura do mapa, positivo = pra baixo, ≈5px) aplicado quando as cidades são agrupadas — Mafra e Timbó passaram de ~74,5%/75,9% pra 75,16%/76,58% de `top`. Mesmo lugar serve pra ajustar outras UFs. Conferido: os 29 pontos continuam sobre terra.
- **Ponto do Piauí um pouco mais pra direita** (a pedido): em [AtuacaoMap.astro](src/components/AtuacaoMap.astro) o ajuste por estado virou **`PIN_OFFSET_POR_UF = { SC: { y: 0.7 }, PI: { x: 1 } }`** (pontos percentuais do mapa; x positivo = direita, y positivo = baixo) — substitui o `PIN_Y_OFFSET_POR_UF` da nota anterior (só SC, só vertical). Teresina passou de `left` ≈77,3% pra **78,27%** (≈ +6px com o mapa a 575px), ficando ~1,1 ponto percentual à direita de Timon (MA, 77,19%) — antes os dois pontos praticamente se sobrepunham. Conferido: os 29 pontos seguem sobre terra, sem overflow.
- **Atuação: títulos iguais, foto nova, respiros** (pedidos em sequência, em [atuacao.astro](src/pages/atuacao.astro), [AtuacaoCicloHero.astro](src/components/AtuacaoCicloHero.astro), [FrenteModule.astro](src/components/FrenteModule.astro), [FrenteVisualSteps.astro](src/components/FrenteVisualSteps.astro) e [AtuacaoMap.astro](src/components/AtuacaoMap.astro)):
  - **Piauí mais pra direita**: `PIN_OFFSET_POR_UF.PI.x` subiu de 1 pra **2,2** (≈13px com o mapa a 575px) — Teresina passou de 78,27% pra **79,47%**, a 2,3 pontos percentuais de Timon (MA, 77,19%); antes quase colados.
  - **"Onde já passamos" no tamanho de "Sem superpoderes, mas super-heróis"**: saiu o override menor (`.mapa .secao-titulo`); agora é o `.secao-titulo` cheio (**59,84px / 700**, medido igual nos três títulos) e **quebra em 2 linhas** ("Onde já / passamos") na coluna esquerda — **substitui** a nota que queria o título numa linha só a 37px. **O título das histórias tem duas linhas fixas**: "Sem superpoderes," / "mas super-heróis" (`historiasLinhas`, dois `<span class="secao-titulo__linha">` em bloco; **sem** `data-reveal-words`, que reescreve o texto e apagaria os spans — perde a revelação palavra por palavra nesse título).
  - **"Como chegamos nas escolas?"** (h3 do `FrenteModule`) também no tamanho de título de seção: `clamp(2.25rem, 1.5rem + 3.5vw, 4.5rem)`, 700, `-0,03em`, fio de 1px (59,84px medido, 1 linha). Vale pro módulo todo (era `--text-h2`).
  - **Respiro**: "tudo muito colado" — frase "Formamos jovens do interior…" ganhou `margin-top: clamp(1.25rem…2rem)` (**42px** do título, antes ~16px) e as três colunas `margin-top: clamp(2rem…3.5rem)` (**84px** da frase); o vão entre as colunas passou de `--grid-gap` pra `clamp(1.5rem…3rem)` (também o `padding-left` das colunas 2 e 3, ao lado do fio). Conferido: 3 colunas de 295px iguais, sem overflow.
  - **Foto da pasta ("atuação.HEIC") abaixo do título "Por jovens, para jovens"**: convertida com `heic-convert` (scratchpad, fora do projeto) pra **`src/assets/images/atuacao-sala.jpg`** (2000×2667, 3:4 vertical). Entra pelo `<slot name="foto">` que o hero ganhou, logo depois do h1, dentro do cabeçalho azul: `<figure class="atuacao-foto">` com recorte **2:1** (`object-position: center 55%`, pra pegar a apresentadora e as mãos levantadas — a foto original é vertical, um recorte largo corta teto e chão), moldura clara de 1px, `loading="eager"` (fica acima da dobra). `alt` descreve só o que se vê. Medido: 969×484 em 1024px, carregada, abaixo do título. **O original `atuação.HEIC` continua em `src/assets/images/`, sem uso** (o Astro não lê HEIC). Mostra estudantes (menores) de costas e de lado e uma apresentadora — cobertura de imagem = contrato com a escola.
- **Foto da sala de aula no lugar do print do onboarding; cabeçalho da Atuação direto na rodinha** (a pedido: "não gostei da foto abaixo do por jovens para jovens, quero que essa foto substitua a do onboarding"). **Revertido**: o `<slot name="foto">` do hero ([AtuacaoCicloHero.astro](src/components/AtuacaoCicloHero.astro)) e o `.atuacao-foto` saíram — o cabeçalho (kicker "Atuação" + "Por jovens, para jovens") volta a ir **direto na rodinha, sem foto**. **Trocado**: o `<figure class="onboarding">` de [atuacao.astro](src/pages/atuacao.astro) (print da videochamada + legenda "Onboarding do Tocando em Frente, por videochamada.") virou **`<figure class="atuacao-sala">`** com `atuacao-sala.jpg` (a foto convertida do HEIC), no mesmo lugar: depois do bloco "Como chegamos às escolas", antes do mapa dos 363. Recorte **16:9** (era 2:1 no topo) com `object-position: center 55%` — confere no screenshot: a apresentadora, o quadro e as mãos levantadas aparecem; teto e chão saem. Moldura reta de 1px, `height:auto`, sem legenda. 969×545 em 1024px, sem overflow. **Ficam no projeto, sem uso**: `src/assets/images/onboarding.jpg` e o `atuação.HEIC` original. **Substitui** as notas "Print do onboarding na Atuação…" e "Foto … abaixo do título 'Por jovens, para jovens'". Como o print do onboarding (rostos e nomes de voluntários) saiu do site, **a ressalva sobre autorização dos voluntários daquela imagem deixa de se aplicar à Atuação** (a foto do time em Voluntariado, em Faça Parte, segue valendo).
- **CTA final da Home só com "Seja alguém que acredita!"** (a pedido): `ctaFinal.title` em `conteudo/home.md` passou de 'Seja alguém que acredita. Vamos juntos!' (duas linhas, quebrado em `index.astro` por `split(/(?<=\.)\s+/)`) pra **'Seja alguém que acredita!'** — uma frase só, com "!" no lugar do ponto, sem "Vamos juntos!". Como não há mais ponto no meio, o `split` devolve uma linha só e o markup não mudou. **Substitui** o "Seja alguém que acredita. / Vamos juntos!" das notas anteriores.
- **Home: "O problema" removido por inteiro — a página segue direto no "Quem somos"** (dois pedidos em sequência: "tirar 'Nos anos finais do Ensino Fundamental…'" e depois "tirar 'O Tocando em Frente existe para quebrar esse ciclo.', começar direto no quem somos"). Saiu de [index.astro](src/pages/index.astro) a seção `.problema` inteira — o texto do problema, a frase da solução e **todo o momento em tela cheia guiado pelo scroll** (camadas sticky, círculo azul que crescia, `is-scroll`, o `<script>` de progresso), mais o CSS `.problema*` e o frontmatter (`problema`, `problemaFechoParts`). Ordem agora: hero → ticker de áreas → **Quem somos** → números/mapa → Atuação → 3 atos → depoimento → Reconhecimentos → CTA final (conferido no DOM; nenhuma das duas frases aparece; sem overflow). **Numeração renumerada pra não ficar buraco**: Quem somos `01`, A Jornada em 3 atos `02`, Depoimento `03` (fixo no `index.astro`), Reconhecimentos `04` (`home.md`). Os campos `problema.*` seguem em `home.md`, sem uso (o `texto` ganhou um comentário avisando). **Substitui** as notas antigas sobre "01 · O problema", o momento em tela cheia guiado pelo scroll e a numeração 02–05 da Home.
- **Rodapé sem o "[PENDENTE: pessoa responsável]"** (a pedido): saiu de [Footer.astro](src/components/Footer.astro) a `<PendingNote text="[PENDENTE: pessoa responsável]">` e, por ficarem sem uso, o import de `PendingNote` e a constante `noteVariant`. Conferido nas cinco páginas (Home, Atuação, Jornada, Reconhecimentos, Faça Parte): **nenhuma tem mais "PENDENTE" visível, nem no rodapé nem no corpo**. `PendingNote.astro` segue no projeto pra uso futuro (o ticker de mídia em Reconhecimentos ainda tem o tratamento condicional, mas nenhum item está pendente hoje). **Substitui** a nota que dizia "única pendência visível que resta no site: 'pessoa responsável' no rodapé".
- **Texto do "Quem somos" da Home trocado** (a pedido: tradução de "Tocando em Frente reimagines middle school to prevent dropout and uplift students at scale by creating a grassroots, youth-led movement"). `quemSomos.title` em `conteudo/home.md` agora é, **exatamente como o usuário escreveu**: **"O Tocando em Frente reimagina o Ensino Fundamental II para prevenir a evasão escolar e impulsionar estudantes em escala, por movimento liderado por jovens."** (substitui "Um modelo liderado por jovens, que usa o brincar como ferramenta de aprendizagem."). Minha primeira tradução ("…reimagina os anos finais do Ensino Fundamental para prevenir a evasão escolar e impulsionar estudantes em larga escala, por meio de um movimento de base liderado por jovens") foi descartada pelo texto do próprio usuário; **"por movimento"** sem artigo ("por meio de um movimento") foi mantido como escrito. O marca-texto (`highlight: 'liderado por jovens'`) continua valendo — está dentro da frase nova. Como a frase é bem mais longa, [index.astro](src/pages/index.astro) ganhou fonte própria pro `.quem-somos__title`: `clamp(1.5rem, 1.05rem + 1.5vw, 2.25rem)` (32px em 1024px), entrelinha 1,2, `max-width: 30rem` — em `--text-h2` (40px) o texto longo ocupava 11 linhas. Medido: **7 linhas, 270px de altura**, ao lado da foto de 315px; sem overflow. Os três parágrafos de apoio (`paragraphs`) seguem em `home.md`, sem uso.
- **Site em inglês: o botão PT | EN agora traduz tudo** (a pedido: "fazer o botão de inglês funcionar para traduzir todo o site em inglês"; escolha do usuário na pergunta: **páginas reais em inglês, tudo de uma vez**). Antes `/en/` e `/en/reconhecimentos` eram rascunhos vazios e o seletor levava sempre à Home em inglês.
  - **Arquitetura**: as páginas viraram **views compartilhadas** em `src/views/` (`HomeView`, `AtuacaoView`, `JornadaView`, `ReconhecimentosView`, `FacaParteView` — o código que antes estava em `src/pages/*.astro`, com os mesmos imports relativos). As rotas em `src/pages/*.astro` (pt) e `src/pages/en/*.astro` (en) são **wrappers de 5 linhas** (`<View locale="pt|en" />`). URLs: `/`, `/atuacao`, `/jornada`, `/reconhecimentos`, `/faca-parte` e as mesmas sob **`/en/`** (`/en/atuacao`, `/en/jornada`, `/en/reconhecimentos`, `/en/faca-parte`) — os slugs ficam em português nos dois idiomas, só o prefixo muda. Cada view recebe `locale` por prop e passa ao `<Layout locale>`.
  - **Conteúdo**: todo o texto editorial tem uma **cópia traduzida em `conteudo/en/`** com a MESMA estrutura de campos e os mesmos nomes de arquivo (`home.md`, `numeros.json`, `faca-parte.md`, `faca-parte/voluntarios-por-regiao.json`, `atuacao/{atuacao,frente-02}.md`, `atuacao/{momentos,times}.json`, `atuacao/historias/*.md`, `jornada/{jornada.md,teoria-mudanca.json}`, `jornada/areas/*.md`, `reconhecimentos/{reconhecimentos.md,premios.json,midia.json}`). **[`src/i18n/content.ts`](src/i18n/content.ts) (`getContent(locale)`)** importa as duas versões e devolve a certa; as views usam `const c = getContent(locale)`. **Ao mudar um texto no `conteudo/…`, mudar também no `conteudo/en/…`** (e vice-versa) — não há tradução automática. Dados que não são texto (`escolas.json`, `estados-dr.json`, coordenadas, nomes dos voluntários) são compartilhados.
  - **Textos fixos no template** (botões, rótulos, `alt`, `aria-label`): inline `en ? 'English' : 'Português'` nas views (`const en = locale === 'en'`). **Componentes** descobrem o idioma pela URL com [`src/i18n/locale.ts`](src/i18n/locale.ts) (`localeFromUrl(Astro.url)`; `/en/…` = inglês) em vez de receber prop: `BrazilMap`, `AtosColunas`, `VideoPlayer`, `VoluntariosMap`, `AtuacaoCicloHero`, `TeoriaMudancaCirculo`, `SustentacaoMapa` (este importa `times.json` dos dois idiomas) e `Footer` (prop `locale` vinda do Layout). Mensagens de **scripts** usam `document.documentElement.lang.startsWith('en')` (copiar chave/e-mail, `aria-valuetext` do slider) ou `data-*` renderizado (`data-copied`).
  - **Menu/seletor** ([`nav.ts`](src/i18n/nav.ts)): todos os itens têm `hrefEn`; rótulos em inglês = Home · **Our Work** · **Learning Journey** · **Recognition** · **Get Involved** (+ botão **Donate** → `/en/faca-parte#doacao`). `getLocaleSwitchHref` leva à página equivalente nos dois sentidos (testado nas 5 páginas). O `Layout` ganhou `<link rel="alternate" hreflang>` pro outro idioma e `<html lang="en">`/`og:locale en_US` em `/en/`.
  - **Decisões de tradução**: marca "Tocando em Frente" e nomes próprios (escolas, veículos, pessoas, "Prêmio LED") ficam como estão; **Diretor Regional → Regional Director**, **Diretorias de Talentos → Talent Directorates** (Arts & Journalism, Research & Olympiads, English & Exchange, Debates & UN Simulations, Programming & Robotics, Volunteering), atos **Visto/Consciente/Engajado → Seen/Aware/Engaged**, **Caderno dos Sonhos → Dream Notebook**, **Mapas Mentais → Mind Maps**, "jogo da vida" → "game of life" (OVO fica OVO), **Pix** explicado ("Brazil's instant payment system") e **CNPJ** com glosa. O "Quem somos" em inglês usa o texto original do próprio usuário: *"Tocando em Frente reimagines middle school to prevent dropout and uplift students at scale by creating a grassroots, youth-led movement."* (realce em "youth-led"). Datas em inglês por extenso ("August 26, 2026"). Valores em R$ mantidos.
  - **Não traduzido de propósito**: nomes de estados/cidades/escolas no mapa e nas legendas de pins (nomes próprios), as siglas de UF dentro da imagem do mapa da Home (arte pronta), e o texto dentro dos **vídeos** (os arquivos `.mp4` têm fala em português; sem legendas em inglês — fica como possível próximo passo). Os blocos antigos sem uso do `.md` (ex.: `jornada.md` → fundamentos/avaliação, `home.md` → `problema`/`movements`) só foram traduzidos onde ainda são lidos.
  - **Verificação**: build com 10 páginas; cada página `/en/…` varrida por script atrás de texto em português (só sobram nomes próprios); seletor PT↔EN, menu e botão Doar conferidos nas 5 páginas; sem overflow horizontal em 375px nas 5 páginas em inglês; jogo, cartões, slider, atos e Teoria da Mudança testados em inglês. O pane de teste não pintou as imagens (só DOM/screenshot do topo conferidos).
- **Projeto virou repositório Git (preparado para o GitHub)** (a pedido: "passar o site inteiro pro GitHub"; escolhas do usuário: **repositório privado**, **vídeos por Git LFS**). Até aqui a pasta **não era** um repositório. Feito localmente: `git init -b main`, primeiro commit com tudo (184 arquivos), `.gitattributes` com **`public/videos/*.mp4` no Git LFS** (4 vídeos, ~271 MB — o `premio-led-luz-na-educacao.mp4` tem 106 MB e passaria do limite de 100 MB por arquivo do GitHub), e `.claude/settings.local.json` no `.gitignore`. `node_modules`, `dist` e `.astro` já estavam ignorados. Sem segredos no código (varredura por chave/token/senha só achou os "tokens" do design e a palavra "contratos"). Identidade do commit (repo-local, trocável com `git config user.name/user.email`): "Tocando em Frente" <doacao@tocandoemfrente.org> (o mesmo e-mail público do site). **O envio (`git push`) ainda não foi feito**: o `gh` não está instalado e a conta do GitHub é do usuário — falta criar o repositório vazio privado no GitHub e passar a URL. **Atenção LFS**: a conta gratuita tem 1 GB de armazenamento e 1 GB de banda/mês por LFS; cada clone completo baixa ~271 MB dos vídeos.
- **Site enviado ao GitHub** (a pedido): `git remote add origin https://github.com/otocandoemfrente/site-tef.git` e `git push -u origin main` — branch `main` com os 2 commits + os 4 vídeos pelo Git LFS (282 MB enviados). O repositório é **privado** (escolha do usuário). Daqui pra frente: `git add -A && git commit -m "…" && git push` na pasta do projeto. O `dist/`, o `node_modules/` e o `.astro/` não vão (estão no `.gitignore`).
- **Vídeos fora do Git LFS (nov/2026)**: o deploy do GitHub Pages usava `actions/checkout` sem `lfs: true`, então o site no ar recebia só os "ponteiros" de ~130 bytes no lugar dos `.mp4` e nenhum vídeo tocava. Em vez de pagar banda de LFS (1 GB/mês grátis, ~280 MB por deploy) ou hospedar fora (Cloudflare R2 exige cartão), os quatro vídeos foram **recodificados em 720p** (H.264 `-crf 27 -maxrate 1600k`, 30 fps, AAC 96 kb/s, `+faststart`) e voltaram pro Git normal: `onu-discurso` 28 MB, `premio-led-inspira` 17 MB, `premio-led-luz-na-educacao` 33 MB, `watson-institute-summit` 11 MB (89 MB no total, contra 282 MB). `.gitattributes` (LFS) foi removido. Os originais em 1080p **não estão mais no projeto** (só em cópia local fora dele); se precisar de mais qualidade, recodificar a partir deles. **Limite a respeitar**: arquivo único até 100 MB no GitHub (aviso a partir de 50 MB) e site de até 1 GB no Pages. `src/i18n/videos.ts` centraliza o endereço dos vídeos (`VIDEOS_BASE = '/videos'`); se um dia forem pra um armazenamento externo, é só trocar essa constante. **Substitui** as notas antigas que falam de Git LFS e dos vídeos em 1080p/~280 MB.
- **"DRs ativos" = 19 (nov/2026)**: a pendência de "Diretores Regionais ativos" na etapa 3 da Frente 02 (Atuação) virou o número real, **19** — campo `drAtivos` em `conteudo/atuacao/frente-02.md` e `conteudo/en/atuacao/frente-02.md` (substitui `drAtivosPendente`; `AtuacaoView.astro` lê `frente02.drAtivos`). Não está em `numeros.json` (seria um 4º item que a Home também listaria). Atualizar o número nos dois arquivos quando mudar. Não resta nenhum "[PENDENTE]" visível na Atuação.
