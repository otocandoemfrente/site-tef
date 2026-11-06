import type { Locale } from './nav';

// ---- Português (conteudo/) ----
import { frontmatter as homePt } from '../../conteudo/home.md';
import { frontmatter as jornadaPt } from '../../conteudo/jornada/jornada.md';
import { frontmatter as atuacaoPt } from '../../conteudo/atuacao/atuacao.md';
import { frontmatter as frente02Pt } from '../../conteudo/atuacao/frente-02.md';
import { frontmatter as historiaAPt } from '../../conteudo/atuacao/historias/historia-a-cavalcante.md';
import { frontmatter as historiaBPt } from '../../conteudo/atuacao/historias/historia-b-rio-branco.md';
import { frontmatter as facaPartePt } from '../../conteudo/faca-parte.md';
import { frontmatter as reconhecimentosPt } from '../../conteudo/reconhecimentos/reconhecimentos.md';
import numerosPt from '../../conteudo/numeros.json';
import momentosPt from '../../conteudo/atuacao/momentos.json';
import timesPt from '../../conteudo/atuacao/times.json';
import premiosPt from '../../conteudo/reconhecimentos/premios.json';
import midiaPt from '../../conteudo/reconhecimentos/midia.json';
import teoriaPt from '../../conteudo/jornada/teoria-mudanca.json';
import voluntariosPt from '../../conteudo/faca-parte/voluntarios-por-regiao.json';

// ---- English (conteudo/en/) — mesma estrutura de campos, só o texto muda ----
import { frontmatter as homeEn } from '../../conteudo/en/home.md';
import { frontmatter as jornadaEn } from '../../conteudo/en/jornada/jornada.md';
import { frontmatter as atuacaoEn } from '../../conteudo/en/atuacao/atuacao.md';
import { frontmatter as frente02En } from '../../conteudo/en/atuacao/frente-02.md';
import { frontmatter as historiaAEn } from '../../conteudo/en/atuacao/historias/historia-a-cavalcante.md';
import { frontmatter as historiaBEn } from '../../conteudo/en/atuacao/historias/historia-b-rio-branco.md';
import { frontmatter as facaParteEn } from '../../conteudo/en/faca-parte.md';
import { frontmatter as reconhecimentosEn } from '../../conteudo/en/reconhecimentos/reconhecimentos.md';
import numerosEn from '../../conteudo/en/numeros.json';
import momentosEn from '../../conteudo/en/atuacao/momentos.json';
import timesEn from '../../conteudo/en/atuacao/times.json';
import premiosEn from '../../conteudo/en/reconhecimentos/premios.json';
import midiaEn from '../../conteudo/en/reconhecimentos/midia.json';
import teoriaEn from '../../conteudo/en/jornada/teoria-mudanca.json';
import voluntariosEn from '../../conteudo/en/faca-parte/voluntarios-por-regiao.json';

// Áreas da Jornada (OVO primeiro, depois 01–06) — ordem fixa, não alfabética.
const areasPtFiles = import.meta.glob('../../conteudo/jornada/areas/*.md', { eager: true }) as Record<string, { frontmatter: Record<string, any> }>;
const areasEnFiles = import.meta.glob('../../conteudo/en/jornada/areas/*.md', { eager: true }) as Record<string, { frontmatter: Record<string, any> }>;
const areaOrder = [
  'ovo.md',
  '01-artes-e-jornalismo.md',
  '02-pesquisa-e-olimpiadas.md',
  '03-debates-e-onu.md',
  '04-ingles-e-intercambio.md',
  '05-programacao-e-robotica.md',
  '06-voluntariado.md',
];

function areasFor(locale: Locale): Record<string, any>[] {
  const files = locale === 'en' ? areasEnFiles : areasPtFiles;
  const base = locale === 'en' ? '../../conteudo/en/jornada/areas/' : '../../conteudo/jornada/areas/';
  return areaOrder.map((f) => files[base + f].frontmatter);
}

/** Todo o conteúdo editorial da página no idioma pedido (pt = conteudo/, en = conteudo/en/). */
export function getContent(locale: Locale) {
  const en = locale === 'en';
  return {
    home: (en ? homeEn : homePt) as Record<string, any>,
    jornada: (en ? jornadaEn : jornadaPt) as Record<string, any>,
    atuacao: (en ? atuacaoEn : atuacaoPt) as Record<string, any>,
    frente02: (en ? frente02En : frente02Pt) as Record<string, any>,
    historiaA: (en ? historiaAEn : historiaAPt) as Record<string, any>,
    historiaB: (en ? historiaBEn : historiaBPt) as Record<string, any>,
    facaParte: (en ? facaParteEn : facaPartePt) as Record<string, any>,
    reconhecimentos: (en ? reconhecimentosEn : reconhecimentosPt) as Record<string, any>,
    numeros: (en ? numerosEn : numerosPt) as Record<string, any>,
    momentos: (en ? momentosEn : momentosPt) as { momentos: Record<string, any>[] },
    times: (en ? timesEn : timesPt) as { times: Record<string, any>[]; [k: string]: any },
    premios: (en ? premiosEn : premiosPt) as Record<string, any>[],
    midia: (en ? midiaEn : midiaPt) as Record<string, any>[],
    teoria: (en ? teoriaEn : teoriaPt) as Record<string, any>,
    voluntarios: (en ? voluntariosEn : voluntariosPt) as { atualizacaoTexto: string; regioes: Record<string, any>[] },
    areas: areasFor(locale),
  };
}
