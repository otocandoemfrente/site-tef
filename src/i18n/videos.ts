/*
  Onde ficam os arquivos de vídeo.

  Os vídeos são pesados (de 29 MB a 110 MB) e NÃO vão no deploy do GitHub Pages (o Git LFS não
  serve pra isso — ver CLAUDE.md). Eles ficam num armazenamento próprio (ex.: Cloudflare R2) e o
  site só aponta pra eles. Pra mudar de lugar, troque só a constante abaixo.

  - Enquanto `VIDEOS_BASE` for '/videos', o site procura os arquivos em `public/videos/` (modo de
    desenvolvimento local, com os arquivos na pasta).
  - Depois de subir os vídeos pro armazenamento, coloque aqui o endereço público, SEM barra no
    final. Ex.: 'https://videos.tocandoemfrente.org'
*/
export const VIDEOS_BASE = '/videos';

export const videoUrl = (arquivo: string) => `${VIDEOS_BASE}/${arquivo}`;
