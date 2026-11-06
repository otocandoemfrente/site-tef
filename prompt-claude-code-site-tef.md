# Prompt — Site Tocando Em Frente (v1, primeira versão para revisão)

## Contexto e objetivo

Construir a **primeira versão** do site novo da Tocando Em Frente (TEF), uma associação brasileira sem fins lucrativos que atua na educação de jovens do Ensino Fundamental II. Esta versão é para **revisão visual e de estrutura** — várias informações reais ainda estão pendentes (marcadas abaixo como `[PENDENTE: ...]`) e devem aparecer como placeholders visíveis no site, **nunca como dado inventado.**

**Objetivos do site:** credibilidade (visitante principal \= imprensa) e conversão em doações/voluntariado. O site NÃO pode parecer assistencialista nem amador.

**Idiomas:** PT completo. EN só nas páginas Home e Reconhecimentos, por enquanto.

## Stack técnico

- **Site estático em Astro** (HTML puro, indexa bem, coleções de Markdown nativas, pouco JS, otimiza imagem sozinho).  
- Preparado para versionamento no GitHub e deploy na Vercel (não precisa conectar nada disso agora — só rodar local com `npm run dev`).  
- **Todo o conteúdo do site vive fora do código**, em arquivos editáveis por voluntários sem formação técnica (fluxo futuro: abrir o arquivo no GitHub, editar em Markdown, commit, a Vercel publica sozinha).

### Estrutura de conteúdo (obrigatória)

```
/conteudo/
  home.md
  numeros.json
  escolas.json
  estados-dr.json
  atuacao/
    frente-01.md
    frente-02.md
    historias/*.md
  jornada/
    areas/*.md
  reconhecimentos/
    premios.json
    midia.json
    equipe.json
  faca-parte.md
```

**Regra de ouro:** adicionar uma escola, um prêmio ou uma história \= editar UM arquivo, nunca mexer em um componente.

## Identidade visual

- **Nome oficial:** Tocando Em Frente · **Abreviação:** TEF  
- **Cor principal:** `#2C5C82`  
- **Cor de acento:** `#E2E548` — **nunca como cor de texto.** Só como bloco de fundo com texto escuro por cima, ou marcador gráfico.  
- **Fundo:** `#FAF8F4` (off-white)  
- **Tipografia:** DM Sans em tudo (títulos e corpo). Poppins é exclusiva do logo — não usar em mais nada.  
- **Logo:** `[PENDENTE: arquivo SVG do logo, versão clara e escura]`. Por enquanto, usar um wordmark de texto simples "Tocando Em Frente" na cor primária como placeholder.

### Paleta completa (todos os pares já verificados em WCAG AA sobre o fundo off-white)

| Papel | Hex | Onde usar |
| :---- | :---- | :---- |
| Fundo | `#FAF8F4` | Fundo de todas as páginas |
| Texto principal | `#152A38` | Corpo, títulos |
| Texto secundário | `#55666F` | Legendas, metadados, datas |
| Primária | `#2C5C82` | Links, botões, elementos de marca |
| Primária escura | `#1F4460` | Hover e estado ativo dos botões |
| Borda e divisor | `#E3DFD7` | Só linhas e contornos, nunca texto |
| Acento | `#E2E548` | Só bloco de fundo, nunca texto |
| Erro | `#B3261E` | Mensagem de erro de formulário |
| Sucesso | `#2E7D57` | Confirmação de envio |

Sobre `#2C5C82`, usar off-white como texto. Sobre `#E2E548`, usar `#152A38` como texto — nunca branco.

### Escala tipográfica (DM Sans)

| Uso | Peso | Tamanho | Entrelinha | Tracking |
| :---- | :---- | :---- | :---- | :---- |
| Frase de missão (hero) | 700 | 48–72px | 1.05 | −3% |
| Títulos de seção (H2) | 700 | 32–40px | 1.15 | −2% |
| Subtítulos (H3) | 500 | 22–26px | 1.3 | −1% |
| Corpo de texto | 400 | 17–18px | 1.6 | 0 |
| Legenda e apoio | 400 | 14–15px | 1.5 | 0 |
| Botão e rótulo | 500 | 15–16px | 1.2 | \+2% |

Tracking fechado só em títulos grandes — no corpo, tracking zero. Largura máxima de linha do corpo: 65–75 caracteres.

### Tratamento especial: destaque de "inspiração" no hero

Na frase de missão da Home, a palavra **"ação"** dentro de "inspir**ação**" recebe um bloco de fundo `#E2E548` com o texto em `#152A38` por cima (efeito marca-texto, não cor de letra). Respiro de \~4px em volta da palavra, cantos levemente arredondados. `[PENDENTE: tratamento visual equivalente para o hero em inglês — o trocadilho "inspiration/action" não existe em inglês, então a versão EN precisa de outra solução ou abrir mão do destaque]`.

## Tom de voz

Três adjetivos: **inspirador, próximo e confiante.** Entusiasmo sem exagero, mostrando possibilidades sem prometer resultados que não podemos garantir. Próximos das comunidades, nunca paternalistas. Comunicação de protagonismo e ação, não de caridade ou dependência.

**Usar:** estudantes, jovens, participantes, Diretores Regionais, voluntários, comunidades, escolas públicas · participar, construir, desenvolver, descobrir, explorar, ampliar, criar, transformar, conectar · oportunidades, possibilidades, protagonismo, pertencimento, repertório, autonomia, sonhos, caminhos, impacto.

**Nunca usar:** "carentes", "necessitados", "ajudar os necessitados", "dar uma oportunidade", "salvar", "resgatar", "vítimas", "vulneráveis" como identidade, "pobres" como forma de descrever pessoas.

## Mapa do site e elementos fixos

| Página | Rótulo no menu | O que responde |
| :---- | :---- | :---- |
| 1 | Home | Quem somos e por que isso importa |
| 2 | Atuação | O que fazemos e onde |
| 3 | Jornada Pedagógica | Como fazemos |
| 4 | Reconhecimentos | Por que confiar em nós |
| 5 | Faça Parte | Como apoiar ou participar |

**Em todas as páginas:** logo, menu fixo, botão de doação, seletor de idioma "PT | EN", rodapé.

**Rodapé (conteúdo exato):**

```
Tocando Em Frente
Associação Tocando em Frente · CNPJ 50.145.518/0001-91
Goiânia, GO
doacao@tocandoemfrente.org
Instagram · TikTok · LinkedIn
```

---

## PÁGINA 1 — HOME

**Frase de missão:** "Tornar o interior terreno fértil para inspiração."

**Subtítulo:** "Transformamos a experiência escolar para que jovens do interior desenvolvam pertencimento, protagonismo e caminhos para novas oportunidades."

**Abertura visual:** `[PENDENTE: definir se é imagem ou vídeo; se vídeo, precisa tocar sozinho, mudo, em loop, com fallback para conexão lenta]`. Usar placeholder de imagem em destaque por enquanto.

**Apresentação (quem somos):** "O Tocando em Frente transforma a educação no Ensino Fundamental II por meio de um modelo totalmente liderado por jovens, que utiliza o brincar como ferramenta de aprendizagem para fortalecer o pertencimento, o engajamento e ampliar os caminhos dos estudantes para novas oportunidades."

**Ano de fundação:** 2021

**Números de impacto** (formulação já decidida):

- 14.272 estudantes impactados — desde 2021  
- 34 escolas parceiras em 17 estados  
- Presentes em 26 dos 27 estados do Brasil (estados com Diretores Regionais)

"Estudante impactado" \= participou de ao menos uma oficina da Jornada, contado uma única vez.

`[PENDENTE: separar número acumulado (desde 2021) de número ativo (em 2026) — ex. "36 escolas parceiras desde 2021, X ativas em 2026"; exibir de forma visível a data de atualização desses números]`

**Reconhecimento em destaque — Prêmio LED:** "Em 2024, o Tocando em Frente venceu o Prêmio LED — Luz na Educação, da Globo e da Fundação Roberto Marinho, na categoria Estudantes, entre mais de 3 mil iniciativas inscritas." Vídeo do prêmio: embed do YouTube, `[PENDENTE: asset — hoje é um link do Drive, precisa virar embed público]`.

**História em destaque — Kauan:**

- Citação: "Vejo o brilho nos olhos dos alunos e percebo, na prática, o impacto de acreditar no potencial de cada um. Ser fruto desse projeto me enche de orgulho e gratidão."  
- Contexto: "Kauan conheceu o Tocando em Frente em 2023, quando um Diretor Regional apresentou o projeto em sua escola. Participou da Jornada como estudante e, no ano seguinte, tornou-se Diretor Regional, passando a levar a experiência para outros jovens."  
- Retrato: placeholder de imagem.

**Chamadas para outras páginas:**

- Atuação: "Veja onde estamos fazendo a diferença"  
- Jornada: "Conheça a Jornada por dentro"  
- Doação: "Ajude a levar a Jornada para mais escolas"  
- Voluntariado: "Faça parte do TEF"

---

## PÁGINA 2 — ATUAÇÃO

**Texto de abertura:** "O Tocando em Frente atua em escolas públicas de diferentes territórios do Brasil, com foco em contextos onde o acesso a oportunidades é mais limitado. Nosso modelo conecta estudantes, jovens líderes, escolas e uma rede de parceiros para levar novas possibilidades diretamente às comunidades."

`[PENDENTE: decisão sobre o termo "interior" — ele aparece na missão, no subtítulo da Home e em outros pontos, mas foi suavizado/removido deste parágrafo. Precisa de uma decisão única: assumir e definir "interior" em todo o site, ou tirar de todos os lugares. Manter como está por enquanto, mas sinalizar a inconsistência.]`

### Frente 01 — Escolas Públicas

Levamos experiências que ampliam o repertório dos estudantes e aproximam a escola de novas possibilidades de futuro.

**Contexto:** É dentro das escolas públicas que nossa atuação chega diretamente aos estudantes. Trabalhamos especialmente com jovens do Ensino Fundamental II, uma etapa importante para fortalecer o vínculo com a escola e ampliar suas perspectivas de futuro. Atuamos em escolas de diferentes territórios, levando novas experiências e possibilidades para contextos onde o acesso a oportunidades pode ser mais limitado.

- **Onde acontece:** Escolas públicas do interior e de regiões periféricas do Brasil  
- **Desde:** 2021  
- **Quem participa:** Estudantes do Ensino Fundamental II e equipes das escolas parceiras  
- **Parceiros:** Escolas públicas parceiras e suas equipes gestoras  
- **Números:** `[PENDENTE: decidir se repete os 3 números da Home (redundante) ou usa um recorte próprio, ex. só escolas e estudantes]`  
- **Fotos:** 3 — placeholders

### Frente 02 — Diretores Regionais

Formamos jovens do interior para levar a Jornada às escolas e transformar conhecimento em impacto dentro de seus próprios territórios.

**Contexto:** Os Diretores Regionais são o coração do nosso modelo de atuação. Jovens de diferentes regiões do Brasil passam por um processo nacional de seleção e, depois, por uma formação intensiva para se tornarem facilitadores da Jornada. Eles aprendem a construir parcerias com escolas, aplicar os planos de aula, conduzir experiências em sala e acompanhar os resultados da intervenção. Depois da formação, atuam diretamente nas escolas públicas de seus territórios, criando uma ponte entre a metodologia do Tocando em Frente e as realidades locais. Assim, o jovem não é apenas voluntário: ele se torna parte da infraestrutura que permite que a organização cresça sem perder sua conexão com cada território.

- **Onde acontece:** Territórios onde o TEF mantém atuação  
- **Desde:** 2021  
- **Quem participa:** Jovens do interior do Brasil selecionados nacionalmente  
- **Parceiros:** Escolas públicas, equipes locais e demais voluntários  
- **Números:** DRs formados \= `[PENDENTE]` · DRs ativos hoje \= `[PENDENTE]` · estados cobertos \= 26 dos 27 (já resolvido)  
- **Fotos:** 3 — placeholders

### Bloco de fechamento — Como isso se sustenta

**363 voluntários já passaram pelo Tocando em Frente.**

O Tocando em Frente é construído por uma rede de jovens voluntários que atua em diferentes áreas da organização, como pedagógico, operações, comunicação, financeiro e gestão. Os Diretores Regionais também são voluntários, mas recebem uma formação específica para levar a Jornada presencialmente às escolas.

Além da formação pedagógica, os DRs mobilizam seus territórios: constroem parcerias com escolas, apoiam os processos necessários para viabilizar a atuação, aplicam as atividades e acompanham os resultados. É uma modalidade de voluntariado com mais responsabilidade de liderança e atuação na ponta, permitindo que esses jovens acompanhem diretamente o impacto gerado pela Jornada.

**Frase de destaque:** "Todo DR é um voluntário, mas nem todo voluntário é DR."

**Parceiros institucionais:** Nosso modelo prioriza a mobilização comunitária. Jovens voluntários também ajudam a construir parcerias e mobilizar recursos para viabilizar a atuação em seus territórios, com apoio do time de Operações. Hoje, temos o INGOH, em Goiânia, como parceiro institucional oficial e buscamos ampliar essa rede.

### Onde estamos — Mapa interativo

Construir como **SVG do Brasil embutido na página, sem biblioteca de mapa** (nada de Google Maps, Mapbox ou Leaflet — evita chave de API, custo e complicações de LGPD).

**Duas camadas, que nunca podem se confundir visualmente:**

| Camada | O que representa | Marcação | Quantos |
| :---- | :---- | :---- | :---- |
| Escolas parceiras | Cidades onde a Jornada é aplicada | Pin na cor primária `#2C5C82`, na cidade exata | 28 cidades · 17 estados |
| Presença de Diretores Regionais | Estados com DR, com ou sem escola ativa | Segunda cor, marcando o **estado inteiro** | 26 estados |

Os 26 estados com DR contêm os 17 com escola. Único estado sem DR: **Roraima** (ausência real, confirmada — não é esquecimento).

**Comportamento do mapa:**

- Passar o cursor no pin → nome da cidade e escola  
- No celular, mesmo conteúdo ao toque (toque fora fecha)  
- Área de toque mínima 44×44px  
- Legenda sempre visível, com as duas camadas nomeadas por extenso: "Cidades com escolas parceiras" e "Estados com Diretores Regionais" — sem isso o mapa parece contar 26 estados de atuação, o que infla o número  
- A lista de escolas por estado (abaixo) é a versão acessível do mapa — manter as duas coisas juntas na mesma seção

**Dados para `/conteudo/escolas.json`** (estado, cidade, escola — preencher lat/lng de cada cidade):

- Acre: Rio Branco — E.E. Dr. Carlos Vasconcelos; Rio Branco — E.E. de Ensino Integral Maria Chalub Leite  
- Alagoas: Maceió — E.E. Maria José Loureiro; Maceió — E.E. Professor Mário Broad  
- Bahia: Jacobina — Colégio Gilberto Dias de Miranda; Salvador — E.M. Enock Pimentel Tourinho; Vila do Café — E.M. Luis Carlos Guimarães  
- Ceará: Fortaleza — EMEIF Herondina Lima Cavalcante  
- Espírito Santo: Santa Leopoldina — EEEFM Alice Holzmeister  
- Goiás: Cavalcante — C.E. Elias Jorge Cheim; Cavalcante — C.E. Quilombola Prof. José Cabral de Araújo  
- Maranhão: Satubinha — E.M. Prof. Geralda Aparecida; Timon — Unidade Escolar Duque de Caxias  
- Minas Gerais: Conselheiro Lafaiete — E.E. Pacífico Vieira; Coronel Fabriciano — E.E. Coronel Silvinio Pereira; Juiz de Fora — E.E. Menelick de Carvalho; Patos de Minas — E.E. Doutor Paulo Borges; Belo Horizonte — E.E. São Salvador  
- Paraná: Cascavel — C.E. Acquilino Massochin  
- Piauí: Teresina — Unidade Escolar Duque de Caxias  
- Rio Grande do Norte: Ceará-Mirim — E.E. Barão de Ceará-Mirim  
- Rio Grande do Sul: Caxias do Sul — E.E. Dário Granja Santana; Porto Alegre — EEEB Gomes Carneiro  
- Rio de Janeiro: Campos dos Goytacazes — Inst. Sup. de Educação Prof. Aldo Muylaert; Rio de Janeiro — E.M. Marechal Canrobert Pereira Costa; Rio de Janeiro — E.M. Nelson Rodrigues  
- Rondônia: Ariquemes — EEEFM Anísio Teixeira  
- Santa Catarina: Mafra — Colégio Tenente Ary Rauen; Timbó — EEB Dep. Abel Ávila dos Santos  
- Sergipe: Aracaju — E.E. 8 de Julho; Nossa Senhora das Dores — C.E. Prof. Fernando Azevedo  
- São Paulo: Birigui — E.E. Prof. Ricardo Peruzzo; Birigui — E.E. Profª Lydia Helena Frandsen Sthur; Santos — UE Jacob Andrade Câmara

`[PENDENTE: latitude/longitude de cada cidade, e a lista de siglas dos 26 estados com DR para /conteudo/estados-dr.json]`

### Histórias desta página

**História A — Cavalcante, Goiás** Citação de abertura: "Eu não tinha um sonho. Mas eu sabia que era boa em fazer tranças."

Durante uma aplicação do Tocando em Frente, uma estudante inicialmente se recusou a participar de uma atividade sobre sonhos. Dizia que não tinha um sonho e que não era obrigada a fazer nada. A conversa começou de forma descontraída, a partir de coisas que ela gostava e de como estava se sentindo naquele dia. Aos poucos, ela se envolveu com a dinâmica, especialmente por ser uma experiência diferente do que estava acostumada a viver em sala de aula.

Em outro encontro, mesmo insegura para apresentar diante da turma, decidiu participar e contou que era trancista e que gostava muito de fazer tranças. A partir disso, ajudou a criar com os colegas a Cachinhos de Sonhos, uma personagem voltada à valorização da cultura afro. A atividade conectou uma habilidade que já fazia parte de sua vida a uma possibilidade de criação, expressão e impacto na comunidade.

Citação de fechamento (do DR): "Eles não estão acostumados a falar sobre seus sonhos dentro de uma sala de aula."

Relato: Jean Pereira dos Santos, Diretor Regional. Território: Cavalcante, Goiás. Foto: placeholder.

**História B — Rio Branco, Acre** Citação: "Ele disse que eu era o super-herói favorito dele, porque eu levava felicidade para a sala de aula."

Durante uma atividade sobre personagens favoritos e os valores que fazem com que nos identifiquemos com eles, um estudante surpreendeu o Diretor Regional Jeferson Kauê ao escolhê-lo como seu "super-herói favorito". Segundo o aluno, Jeferson levava felicidade para a sala de aula.

O momento mostrou, de forma simples, como a relação construída durante a Jornada também pode transformar a experiência dos estudantes na escola. Mais do que conduzir uma atividade, o DR passou a ser percebido como alguém que tornava aquele espaço mais leve, próximo e significativo.

Relato: Jeferson Kauê, Diretor Regional. Escola: Dr. Carlos Vasconcelos. Território: Rio Branco, Acre. Retrato: placeholder.

---

## PÁGINA 3 — JORNADA PEDAGÓGICA

**Em que acreditamos sobre educação:** Acreditamos que talento é igualmente distribuído, mas oportunidades não. Para muitos estudantes, especialmente em contextos de menor acesso socioeconômico, a falta de referências, redes e contato com diferentes caminhos pode limitar aquilo que conseguem imaginar para o próprio futuro. Essa distância também pode enfraquecer o sentido atribuído à escola quando o conteúdo parece desconectado da vida e dos objetivos do estudante. Por isso, acreditamos que educar também é apresentar caminhos, conectar os estudos ao futuro e ajudar cada estudante a reconhecer seus sonhos, habilidades e próximos passos.

**Referências teóricas e metodológicas:** Nossa abordagem combina metodologias ativas, gamificação, aprendizagem conectada à realidade e desenvolvimento socioemocional. A pesquisa também dialoga com a Teoria da Autodeterminação, que destaca a importância da autonomia, da competência e do ambiente para a motivação, além de estudos sobre aspirações, contexto socioeconômico e histórias de referência. Na prática, usamos jogos, desafios, tentativa e erro e participação ativa para tornar a aprendizagem mais envolvente e criar um espaço em que os estudantes possam experimentar, descobrir interesses e desenvolver confiança para seguir tentando.

**O que nos diferencia:** Nossa Jornada não parte apenas da pergunta "o que o estudante precisa aprender?", mas também de "o que ele precisa conhecer para imaginar novos caminhos para si?" Por isso, cada área reúne habilidades, histórias de referência e oportunidades concretas, conectando a experiência escolar a caminhos acadêmicos, profissionais, culturais e de participação social. A Jornada não termina em conhecer algo novo: ela conduz o estudante de "o que existe?" para "o que eu quero?" e, depois, para "o que posso fazer para chegar lá?".

`[PENDENTE: duração da Jornada — número de encontros/oficinas, duração de cada encontro, período total, frequência, e se acontece em horário de aula ou contraturno. É a primeira pergunta de qualquer escola, financiador ou jornalista — deixar bem visível assim que definido.]`

### Os três movimentos da Jornada

1. **Descobrir possibilidades** — Primeiro, ampliamos o repertório. Os estudantes entram em contato com habilidades, histórias de referência e oportunidades nas seis áreas da Jornada — inclusive possibilidades que antes poderiam parecer distantes ou inexistentes.  
2. **Entender a si mesmo** — Depois, transformamos possibilidades externas em reflexão pessoal. Os estudantes identificam seus sonhos, planos e habilidades, e começam a perceber como aquilo que gostam e sabem fazer pode se conectar aos caminhos que desejam seguir.  
3. **Transformar sonho em ação** — Por fim, ajudamos o estudante a sair da ideia para o próximo passo. Ele escolhe um objetivo e constrói metas de curto prazo e ações dentro e fora da escola, relacionando seus estudos ao caminho que quer construir.

### Antes da Jornada — OVO: o início de tudo

É a experiência de abertura da Jornada, que apresenta aos estudantes o projeto por meio de uma dinâmica interativa baseada em escolhas e possibilidades. A partir da trajetória de um avatar, em uma espécie de "jogo da vida", os estudantes percebem como diferentes decisões podem abrir caminhos distintos — criando o primeiro convite para pensar sobre futuro, escolhas e oportunidades.

O que o estudante leva: curiosidade sobre novas possibilidades e uma primeira reflexão sobre como escolhas podem influenciar seus caminhos. Teaser: embed de vídeo, placeholder.

`[PENDENTE: o que a sigla/nome "OVO" significa — o texto atual não deixa claro se é sigla, nome próprio ou metáfora]`

### As seis áreas

1. **Artes e Jornalismo** — Os estudantes exploram diferentes formas de expressão, comunicação e produção criativa. Por meio da arte, da escrita e da investigação, entram em contato com novas referências e perspectivas, desenvolvendo sua capacidade de criar, interpretar e comunicar ideias e histórias sobre si mesmos e sobre o mundo. Leva: criatividade, expressão, pensamento crítico e novas formas de comunicar ideias. Fotos: 4 (placeholders).  
2. **Pesquisa e Olimpíadas** — Os estudantes entram em contato com o universo da ciência, da pesquisa e das olimpíadas acadêmicas por meio de desafios e atividades exploratórias. A área transforma curiosidade em investigação e apresenta possibilidades como olimpíadas de conhecimento, iniciação científica e projetos de pesquisa. Leva: curiosidade científica, pensamento investigativo e repertório sobre oportunidades acadêmicas. Fotos: 4 (placeholders).  
3. **Debates e Simulações da ONU** — Os estudantes exploram temas sociais, políticos e globais por meio de debates e simulações da Organização das Nações Unidas. Ao pesquisar diferentes perspectivas e construir argumentos, aprendem a comunicar suas ideias, ouvir opiniões diferentes e participar de discussões sobre questões que impactam a sociedade. Leva: pensamento crítico, argumentação, comunicação, escuta e negociação. Fotos: 4 (placeholders).  
4. **Inglês e Intercâmbio** — Mais do que ensinar um novo idioma, a área apresenta o inglês como uma ferramenta de acesso a oportunidades. Os estudantes conhecem intercâmbios, bolsas de estudo, universidades internacionais e diferentes culturas, entrando em contato com possibilidades que podem ampliar seus horizontes acadêmicos e pessoais. Leva: novas referências culturais e conhecimento sobre oportunidades educacionais e internacionais. Fotos: 4 (placeholders).  
5. **Programação e Robótica** — Os estudantes exploram programação, robótica e tecnologia por meio de experiências práticas e interativas. A área estimula raciocínio lógico, criatividade, autonomia, cooperação e resolução de problemas, mostrando que tecnologia não é apenas algo que usamos, mas também algo que podemos criar e transformar. Leva: raciocínio lógico, criatividade, resolução de problemas e repertório sobre tecnologia e inovação. Fotos: só 2 disponíveis.  
6. **Voluntariado** — Os estudantes descobrem o voluntariado como uma forma concreta de participar e transformar sua comunidade. A partir de atividades, reflexões e exemplos de iniciativas sociais, percebem que também podem contribuir para resolver problemas ao seu redor — desenvolvendo responsabilidade, empatia e participação cidadã. Leva: empatia, colaboração, iniciativa e senso de participação social. Fotos: só 1 disponível.

`[PENDENTE: as áreas 5 e 6 têm bem menos fotos que as demais (2 e 1, contra 4 das outras) — completar o acervo ou construir a grade de fotos com quantidade variável, sem quebrar o layout]`

### Como avaliamos

**O que medimos:**

- Ampliação do repertório: se o estudante passa a conhecer mais possibilidades nas seis áreas da Jornada e consegue descrevê-las com maior variedade, pertinência e detalhe.  
- Autoconhecimento: se seus sonhos, planos e habilidades ficam mais claros e específicos, e se ele consegue reconhecer a relação entre suas habilidades e seus objetivos.  
- Autogestão: se consegue transformar um objetivo em metas e ações concretas, relacionando seus estudos ao caminho que deseja seguir.

No médio prazo, também acompanhamos indicadores relacionados a autonomia, desenvolvimento socioemocional, participação extracurricular, engajamento cívico, percepção sobre a escola, frequência e desempenho escolar.

**Como medimos:** acompanhamos os estudantes antes e depois da Jornada com três instrumentos — Mapas Mentais (seis antes e seis depois, analisados por variedade, especificidade, conexões e detalhamento), Caderno dos Sonhos (aplicado no início e no fim) e Mini Planner (transformar um objetivo em passos concretos para a semana seguinte). Os resultados são agregados por turma, escola e região.

`[PENDENTE: publicar ao menos um resultado agregado da avaliação (mesmo que parcial), ou assumir explicitamente que ainda não há resultados publicados e dizer quando serão]` `[PENDENTE: fotos desta seção — aplicação dos instrumentos, mapas mentais, cadernos]`

---

## PÁGINA 4 — RECONHECIMENTOS E TRANSPARÊNCIA

Esta página responde "por que confiar em nós" para o visitante principal (imprensa) — precisa equilibrar prêmios/mídia com transparência institucional real, não só reconhecimentos.

### Prêmios

**Prêmio LED — Luz na Educação** (Fundação Roberto Marinho / Rede Globo, 2024): "Em 2024, o Tocando em Frente foi vencedor do Prêmio LED — Luz na Educação, promovido pela Globo e pela Fundação Roberto Marinho, na categoria Estudantes. A iniciativa foi reconhecida entre mais de 3 mil projetos inscritos na terceira edição da premiação."

**Watson Institute & Western Union Foundation Summit** (2024): `[PENDENTE: qual é a instituição responsável e o que foi exatamente — prêmio, seleção, bolsa, participação em cúpula? Quem representou o TEF?]`

*Nota estrutural: "The Wall — Domingão com Huck" (programa de auditório da Globo) foi retirado da tabela de prêmios e movido para a seção de mídia abaixo, para não diluir o Prêmio LED.* `[PENDENTE: confirmar com o time se concordam com essa reestruturação]`

### Mídia e aparições

Formato padrão: veículo · tema · data · link.

| Veículo | Tema | Data | Link |
| :---- | :---- | :---- | :---- |
| Jornal Nacional | Conheça os 6 projetos premiados pelo Movimento LED | `[PENDENTE]` | globoplay.globo.com/v/12508568/ |
| ONU — Web TV | Discurso (minuto 1:44:00) | `[PENDENTE]` | webtv.un.org/en/asset/k1u/k1uyoi67eo |
| The Wall — Domingão com Huck | Participação com premiação em dinheiro | 2024 | globoplay.globo.com/v/12720507/ |
| Podcast Orange Juice | `[PENDENTE]` | `[PENDENTE]` | youtube.com/watch?v=r84BHYUl\_00 |
| Tropical FM Birigui | `[PENDENTE]` | `[PENDENTE]` | youtu.be/tkIa94xz0aE |
| Capricho | Trabalho voluntário na juventude | `[PENDENTE]` | capricho.abril.com.br (blog da galera) |
| G1 | Bolsa internacional | 02/02/2025 | g1.globo.com (matéria sobre bolsa) |
| Forbes Under 30 | Luiza Diniz Vilanova | 2024 | forbes.com.br/under-30/2024 |
| Latin American Leadership Academy | `[PENDENTE]` | `[PENDENTE]` | youtube.com/watch?v=8SwJzLedQhM |
| BRASA em Casa | `[PENDENTE]` | `[PENDENTE]` | youtube.com/watch?v=B4YMzNyKl2c |

`[PENDENTE: discurso na ONU — quem falou, em qual evento/sessão e em que data]`

Os itens da Forbes e do G1 são sobre pessoas (a fundadora), não sobre a organização — rotular como reconhecimento à liderança, uma vez que a seção "Quem somos" abaixo diga quem ela é.

### Quem somos (liderança)

**Fundadora e CEO:** Luiza Vilanova

**Liderança atual:** Milanna Rebelatto (Vice-Presidente) · Jean dos Santos (co-líder de Operações) · Bianca Gajardoni (co-líder de Operações) · Isabella Okamoto (líder de Comunicação) · Luísa Michelin (líder de Gestão Interna) · Ana Helena Lougon (líder de Jornada) · Sarah Manzano (líder de Financeiro)

`[PENDENTE: uma linha de bio por pessoa; foto de cada liderança; existe conselho consultivo? quem são?; confirmar se Jean dos Santos (também citado como Diretor Regional na História A) e Bianca Gajardoni (também citada no The Wall) acumulam funções — se sim, dizer isso no texto]`

### Para imprensa

Não haverá sala de imprensa como página separada — `doacao@tocandoemfrente.org` é o único e-mail institucional, inclusive para imprensa.

- "Para imprensa, escreva para [doacao@tocandoemfrente.org](mailto:doacao@tocandoemfrente.org)"  
- Logo para download (link para o SVG, quando disponível)  
- `[PENDENTE: linha padrão "sobre o Tocando em Frente", de 2 a 3 frases, para jornalistas copiarem]`

### Transparência institucional

| Campo | Valor oficial |
| :---- | :---- |
| Razão social | Associação Tocando em Frente |
| CNPJ | 50.145.518/0001-91 |
| Natureza jurídica | 399-9 — Associação Privada |
| Data de abertura | 26/09/2022 |
| Situação cadastral | Ativa desde 26/09/2022 |
| Atividade principal | 85.99-6-99 — Outras atividades de ensino |
| Atividade secundária | 85.50-3-02 — Atividades de apoio à educação |
| Município | Goiânia, GO |

**Sobre datas:** "O Tocando em Frente nasceu em 2021 e foi formalizado como associação em 26 de setembro de 2022." (Home mantém "desde 2021" para a atuação; esta página explica a diferença.)

**Decisão já tomada: o endereço da sede NÃO vai para o site** (é o endereço residencial da fundadora, não uma sede). A página exibe a tabela acima sem endereço, fecha com uma linha do tipo "Todos os dados podem ser conferidos no Cadastro Nacional da Pessoa Jurídica, no site da Receita Federal", com link para a consulta pública por CNPJ. No rodapé, a localização fica só como "Goiânia, GO".

`[PENDENTE: link para Estatuto social (PDF), relatório anual de atividades, demonstrativo financeiro / prestação de contas]` `[PENDENTE: existe outra "Associação Tocando em Frente" em São Paulo (tocandoemfrente.org.br), fundada em 2018, com foco em pessoas com deficiência visual — decidir como mitigar a confusão: dados estruturados JSON-LD com o CNPJ, nome completo nos metadados, e/ou um qualificador na comunicação]`

---

## PÁGINA 5 — FAÇA PARTE

### Doação

- Formas de doar: Pix ou cartão recorrente  
- Chave Pix: 50.145.518/0001-91 — Associação Tocando Em Frente  
- Plataforma de cartão: GRIFA (grifa.me/instituicao/tocando-em-frente)

Nosso modelo combina mobilização comunitária e voluntariado para ampliar o alcance da Jornada. Os jovens que fazem parte da rede também ajudam a mobilizar recursos, parcerias e doações em seus territórios.

`[PENDENTE: confirmação com contador de que a doação provavelmente NÃO é dedutível do imposto de renda (natureza jurídica não tem OSCIP nem título de utilidade pública) — o site não deve sugerir benefício fiscal sem certeza. Confirmar também se o doador recebe recibo.]`

**Valores sugeridos:**

| Valor | O que viabiliza |
| :---- | :---- |
| R$ 20 | Recursos para uma atividade da Jornada, como materiais impressos e papelaria |
| R$ 50 | A logística necessária para que um voluntário participe de uma aplicação em escola |
| R$ 100 | Parte da estrutura necessária para realizar um encontro da Jornada com uma turma |
| R$ 250 | Contribui para levar a Jornada a uma nova turma, cobrindo parte dos custos de materiais e operação |

### Voluntariado

Buscamos jovens de 13 a 25 anos, apaixonados por educação, protagonismo e transformação social, que queiram aprender, contribuir e construir junto. Disponibilidade mínima: 5 horas por semana.

**Atuação online** — aberta a jovens de qualquer região do Brasil, nos times internos: Gestão Interna, Comunicação, Operações, Jornada (Pedagógico) Trainees e Financeiro.

**Atuação presencial — Diretor Regional (DR)** — processo seletivo específico, formação e treinamento do TEF. Depois, atuam presencialmente em escolas públicas de seus territórios, mobilizando escolas, aplicando a Jornada e acompanhando a mensuração de impacto. "É uma oportunidade de transformar a realidade onde você já está — em qualquer região do Brasil."

Pré-inscrição: link para formulário (Google Forms).

`[PENDENTE: o formulário aceita jovens a partir de 13 anos, ou seja, coleta dados de menores — exige consentimento de responsável e uma política de privacidade acessível a partir do formulário. Decidir também se o formulário fica embutido na página ou abre externamente.]`

### Contato

- E-mail: [doacao@tocandoemfrente.org](mailto:doacao@tocandoemfrente.org) (único canal, inclusive para imprensa)  
- Redes sociais: Instagram @tocandoemfrenteorg · TikTok @tocandoemfrenteong · LinkedIn Tocando Em Frente

`[PENDENTE: autorização de uso de imagem assinada e válida para publicação em site aberto — o site vai publicar ~30 fotos de estudantes de escola pública (muitos menores), além de nome e retrato de Kauan, Jean e Jeferson. Autorização de uso interno ou para relatório não cobre publicação na web.]`

---

## Assets e imagens

Specs por uso:

| Uso | Largura máx. | Formato | Peso alvo |
| :---- | :---- | :---- | :---- |
| Abertura da Home | 2000px | WebP | \< 300 KB |
| Destaque / história | 1600px | WebP | \< 200 KB |
| Card e galeria | 1200px | WebP | \< 150 KB |
| Retrato | 800px | WebP | \< 100 KB |
| Logo | — | SVG (+ PNG) | — |

Nomes de arquivo: minúsculo, sem acento, com hífen (ex: `jornada-area-01-artes-01.webp`).

`[PENDENTE: os 30 assets reais ainda são links do Google Drive — precisam ser exportados em WebP otimizado e colocados em /public/imagens/ antes do lançamento de verdade. Para ESTA primeira versão, use placeholders visuais nos tamanhos e proporções corretos (blocos na cor` \#E3DFD7 `com o texto "Foto: [descrição]" centralizado, ou imagens de placeholder genéricas) — não deixe a página quebrada por falta de imagem real.]`

Vídeo de abertura da Home: MP4 mudo, em loop, \< 5MB, no repositório. Vídeo do Prêmio LED e teaser do OVO: embed do YouTube.

## Requisitos técnicos e SEO

- `lang="pt-BR"`, título e descrição próprios por página  
- Open Graph por página (o que aparece quando alguém cola o link no WhatsApp)  
- `sitemap.xml` e `robots.txt` gerados automaticamente  
- JSON-LD tipo NGO/Organization, com nome completo, CNPJ, logo e redes sociais  
- Página 404 com caminho de volta para a Home · favicon e ícone mobile  
- Imagens em formato moderno (WebP), carregamento adiantado só na Home  
- Sem rastreadores de terceiros além do analytics escolhido (ex: Vercel Analytics, que não usa cookies)

## Acessibilidade (requisito desde o início, WCAG 2.1 AA)

- Texto alternativo descritivo em todas as imagens relevantes  
- Contraste mínimo AA em textos, botões e elementos essenciais — o amarelo de acento nunca como cor de texto  
- Navegação completa por teclado, com foco visual identificável  
- Estrutura semântica correta de títulos, botões, links e formulários  
- Formulários com labels e mensagens de erro acessíveis  
- Legendas em vídeos quando aplicável  
- Nunca usar animação como única forma de transmitir informação

## Fora do escopo desta primeira versão (não precisa resolver agora)

Estes itens são decisões de lançamento, não de construção — sinalize-os no README do projeto como pendências futuras, mas não bloqueie a v1 por causa deles:

- Mapeamento de URLs do site atual e tabela de redirecionamentos 301  
- Domínio `.com` duplicado — decidir qual é oficial e redirecionar  
- Analytics e definição de métrica de sucesso por objetivo  
- Política de privacidade / LGPD completa  
- Salvar o conteúdo do site atual (página de equipe, conselho consultivo, formulário de contato) antes de tirá-lo do ar

## Instrução final para o Claude Code

1. Construa a v1 do site em Astro, PT primeiro, seguindo a identidade visual, o conteúdo e a estrutura de arquivos acima.  
2. Sempre que encontrar `[PENDENTE: ...]` neste briefing, coloque esse texto (ou um resumo dele) como placeholder **visível** no conteúdo correspondente — nunca invente o dado real.  
3. Use imagens placeholder nos tamanhos corretos onde os assets reais ainda não existem.  
4. Ao final, rode o servidor local e liste no terminal todos os pontos `[PENDENTE]` que ficaram visíveis no site, para eu conseguir revisar rapidamente o que falta antes da próxima rodada.

