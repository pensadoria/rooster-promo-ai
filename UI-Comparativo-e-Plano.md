## Comparativo de UI: Rooster vs. Ecwid

Referências citadas: [Ecwid — Home](https://www.ecwid.com/)

### 1) Estrutura de Seções

- **Rooster (atual)**
  - Header fixo com CTA "Agendar Demonstração"
  - Hero: título forte, parágrafo e 2 CTAs, imagem à direita
  - Destaque de Leitura Inteligente ("Leitura Inteligente de Cupons")
  - Grid de Recursos (OCR + IA, Analytics, Segurança, Performance)
  - Mecânicas de Promoção (Compre e Ganhe, Sorteios, Pontos, Personalizadas)
  - Clientes (logos/nomes em grid)
  - CTA Final em fundo gradiente
  - Footer com links legais

- **Ecwid (referência)**
  - Hero com headline curta, subtexto direto e CTA primário
  - Seção de jornada/estágios (01/02/03) para orientar evolução
  - Prova social ampla (Trusted by…, depoimentos)
  - Blocos funcionais (Automate marketing, Automate store management)
  - Seções de recursos com tabs/cards e CTA recorrente
  - Comunidade, recursos educacionais e call-to-action final

Observação: a Ecwid reforça CTAs de forma constante e mantém ritmo visual com blocos claros, fundo branco e respiração (espaços e separadores) frequentes.

### 2) Tom visual e hierarquia

- **Rooster**: usa gradientes fortes (hero e CTA final), títulos grandes e destaques em texto com gradient. Alguns blocos em `bg-card/50` e `bg-background` alternam para criar contraste.
- **Ecwid**: estética clean com fundo branco predominante, seções com alto respiro, tipografia consistente, CTAs repetidos e discretos, cards com bordas leves e uso assertivo de headings curtos.

Impacto: a Ecwid comunica escaneabilidade superior, com seções curtas, titulares objetivos e repetição estratégica de CTA. O site atual da Rooster tem boa energia visual, mas pode reduzir ruído (gradientes pesados) e reforçar a legibilidade.

### 3) Navegação e CTAs

- **Rooster**: navegação de rolagem única; CTA principal no header e CTAs em Hero/Final.
- **Ecwid**: múltiplos CTAs por seção, mantendo consistência de copy e destino; menu extenso no rodapé e conteúdo de apoio (blog, academy).

Melhoria sugerida: repetir CTA principal após blocos-chave (Recursos, Mecânicas, Clientes) com variação sutil (ex.: "Fale com o time", "Solicitar demonstração", mantendo a copy atual) para aumentar conversão.

### 4) Conteúdo (copy) e densidade

- **Rooster**: mensagens claras sobre IA/OCR, automação e segurança. Parágrafos um pouco longos em alguns blocos.
- **Ecwid**: frases curtas, bullets e microblocos, mantendo leitura em diagonal; numeração (01/02/03) ajuda entendimento rápido.

Sugerido: manter a copy atual, mas reformatar em frases mais curtas e bullets quando possível, sem alterar o conteúdo.

---

## Plano de Melhoria da UI (sem alterar copy; estética clean, fundo branco)

Princípios: usar exclusivamente o "Manual da marca" para cores, tipografia, espaçamentos e iconografia. Layout inspirado na estrutura da Ecwid, com predominância de fundo branco e cards com borda suave.

### A) Fundos, containers e ritmo

- **Fundo base**: usar `bg-white` predominante; remover gradientes de fundo contínuos. Reservar gradiente apenas para pequenos acentos (ícones, chips, detalhes).
- **Containers**: manter `container mx-auto` com larguras max adequadas e `px-6`/`py-*` generosos, priorizando espaço negativo.
- **Separadores**: inserir `border-t`/`border-b` sutis entre grandes blocos para criar ritmo (usar cor do manual com baixa opacidade).

### B) Tipografia e hierarquia de títulos

- **Títulos**: encurtar visualmente (mesmo texto, porém quebras mais objetivas), usar tamanhos consistentes (H1 no hero; H2 nas seções; H3 nos cards).
- **Subtítulos**: limitar a 1–2 linhas; se passar, quebrar em bullets.
- **Peso e cor**: usar apenas pesos e cores tipográficas do manual; evitar gradients no texto dos headings.

### C) Cards e grids

- **Cards de recursos e mecânicas**: fundo branco, borda `1px` suave, `shadow-sm` mínima; `hover:shadow-md` e `hover:translate-y-[1px]` para feedback leve.
- **Ícones**: cores sólidas da paleta da marca; fundo do ícone branco com `border` leve ao invés de blobs gradientes.
- **Grid**: manter colunas responsivas, aumentar `gap-*` para respiro em telas grandes.

### D) Hero

- **Layout**: manter duas colunas, mas com fundo branco e sem glow/blur de cor. Título em 2 linhas, subtexto em 1–2 linhas e 1 CTA primário + 1 CTA secundário outline.
- **Imagem**: manter, com `rounded-xl` e borda leve. Sem overlaid gradients.

### E) Seção "Como funciona" (FeatureHighlight)

- **Imagem**: manter borda leve e sem blur de fundo.
- **Lista**: transformar parágrafos longos em bullets curtos (mesma copy), cada item com ícone sólido de cor da marca.

### F) Recursos (FeaturesGrid)

- **Cards**: remover `hover:scale-105`; adotar `hover:shadow-md` + `hover:border-[brand-200]`. Ícones sem gradiente, cores sólidas.
- **Texto**: headings curtos e diretos; descrição com no máx. 2 linhas; se passar, truncar com `line-clamp`.

### G) Mecânicas de Promoção

- **Cards uniformes**: igual padrão dos recursos; padronizar espaçamentos internos.
- **Micro-copy**: manter a mesma mensagem, mas quebrar frases longas.

### H) Clientes

- **Grid em fundo branco**: logos/nomes em `bg-white` com `border` suave; remover efeitos de escala; adicionar `opacity-80 hover:opacity-100`.
- **Prova social**: opcional inserir 1–2 depoimentos curtos (mantendo copy interna atual; se já houver, posicionar logo após grid).

### I) CTA Final

- **Fundo**: substituir gradiente por seção branca com destaque do botão. Alternativamente, usar card amplo com borda suave no centro.
- **CTA**: botão principal sólido com cor da marca e contraste AA; repetir CTA de forma discreta após seções-chave.

### J) Header e Footer

- **Header**: fundo branco com `backdrop-blur` leve e `border-b` discreto; logo em 1 cor sólida; remover bloco gradiente com letra "R".
- **Footer**: manter branco, colunas com links; aumentar área de recursos (se aplicável) para reforçar confiança.

### K) Acessibilidade e performance

- **Contraste**: garantir contrastes AA conforme manual; evitar textos em gradiente.
- **Foco**: estados de foco visíveis nos botões/links.
- **Imagens**: `loading="lazy"`, formatos otimizados e `sizes` responsivos.

---

## Checklist de Implementação (não altera copy)

1. Padronizar fundo branco e remover gradientes de seção.
2. Ajustar `Header`/`Footer` para branco + borda leve.
3. Simplificar `Hero` (imagem com borda, sem glow; CTAs consistentes).
4. Reestilizar cards (borda leve, sombra mínima, ícones sólidos).
5. Reduzir efeitos `hover` exagerados; adotar sombras e deslocamentos sutis.
6. Reformatar textos longos em bullets curtos, mantendo a mesma copy.
7. Repetir CTA principal após blocos estratégicos.
8. Revisar contrastes e estados de foco segundo o Manual.
9. Otimizar imagens com `lazy` e tamanhos responsivos.

Observação: todo o styling deve seguir estritamente o "Manual da marca Rooster" presente no repositório.


