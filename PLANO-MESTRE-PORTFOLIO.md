# PLANO MESTRE — Portfolio Engineering Spec

> **Como usar este arquivo**: este documento é o _meta-plano_. Ele não é a
> SPEC de 250-400 páginas em si — é o que você cola no início de uma sessão
> com Claude Code, Cursor, ou qualquer IA, para que ela gere a documentação
> completa (`00-Vision.md` até `Appendix-C.md`) de forma consistente, sem
> contradições e sem invenção de números. Seção 12 traz o prompt pronto.

---

## 1. Diagnóstico do plano original

Antes de expandir, vale nomear o que já está certo e o que é risco real.

### O que está certo

- A ideia central — documentar o portfólio como se fosse um produto de
  software real (PRD, SAD, ADRs, guidelines) — é **exatamente** o que
  diferencia um candidato sênior em processos seletivos técnicos, especialmente
  fora do Brasil, onde comunicação escrita e rastreabilidade de decisão pesam
  mais do que "efeito uau".
- A tabela de critérios de aceite mensuráveis (Lighthouse, LCP, CLS) é o
  formato certo. Isso deve se repetir em **toda** seção, não só na Hero.
- ADRs e "Engineering Decisions" são, de fato, o maior diferencial — poucos
  portfólios têm isso, e é o que gera perguntas boas em entrevista.

### Riscos reais no plano como está

1. **Risco de nunca lançar nada.** 250-400 páginas de documentação antes (ou
   junto) de qualquer linha de código shippada é um projeto de meses. O risco
   de escopo é maior que o risco de "portfólio bonito mas raso". Precisa de
   fases.
2. **Idioma.** Você está documentando em português para impressionar
   recrutadores irlandeses. Recrutador não vai ler PT para avaliar
   comunicação técnica em inglês. Isso precisa ser decidido agora, não no
   final.
3. **Sem dono de qualidade da documentação.** Não há processo de revisão,
   versionamento ou "definition of done" por documento — sem isso, a SPEC
   também pode ficar desatualizada e virar uma mentira sobre o próprio
   projeto (pior do que não ter SPEC).
4. **Métricas por seção, mas nenhum orçamento global amarrando tudo.** Cada
   seção promete Lighthouse > 95 e LCP < 2.5s isoladamente, mas nada garante
   que a soma das partes bate esse número (fontes + imagens + JS de 10
   features diferentes).
5. **Nenhuma seção sobre uso de IA no processo.** Se você vai usar Claude
   Code / IA para gerar boa parte disso, empresas europeias cada vez mais
   perguntam sobre isso em entrevista. Documentar como IA foi usada é, em si,
   um diferencial de maturidade — esconder é risco.
6. **21st.dev não está governado.** Você vai usar componentes de terceiros;
   sem registro de proveniência/licença, isso vira dívida técnica e também
   uma lacuna se perguntarem "você escreveu isso?".
7. **Nenhum critério de "quando parar".** Um projeto de documentação sem
   critério de parada tende a crescer indefinidamente (efeito clássico de
   over-engineering em projetos pessoais).

---

## 2. Princípios norteadores (o que torna o plano "à prova de falhas")

1. **Nenhum documento existe sem critério de aceite mensurável.** Se não dá
   pra medir, não é um requisito, é uma opinião.
2. **Nenhuma decisão sem alternativa registrada.** Toda escolha técnica tem
   pelo menos uma alternativa descartada e o motivo (isso é o que vira ADR).
3. **A SPEC nunca é "canônica sozinha".** Ela é uma fonte de verdade
   versionada — cada mudança de decisão gera um novo ADR ou um changelog
   entry, nunca uma edição silenciosa.
4. **MVP documentado > Sistema perfeito não lançado.** Toda seção tem uma
   versão "v1 mínima que já pode ir pro ar" e uma versão "completa".
5. **O que está em produção manda mais que o que está escrito.** Se o código
   diverge da SPEC, ou a SPEC está errada (corrija) ou o código está errado
   (corrija). Nunca deixe os dois divergentes por mais de uma sprint.
6. **Tudo que for gerado por IA é rastreável.** Prompt usado, modelo usado,
   revisão humana feita — isso é dado, não é vergonha.

---

## 3. Decisão crítica: idioma

**Recomendação: inglês como idioma primário do portfólio e da documentação
pública (`/architecture`, `/case-studies`, `/blog`).**

- Documentação interna de processo (este arquivo, notas pessoais, prompts de
  IA) pode continuar em português — ninguém de fora vai ler isso.
- Todo artefato que um recrutador ou tech lead irlandês pode abrir
  (README, ADRs, case studies, `/uses`, `/now`) deve estar em **inglês
  nativo de engenharia** (não tradução literal — termos como "trade-off",
  "acceptance criteria", "budget" devem soar naturais).
- Se quiser manter uma versão PT-BR por SEO/rede local, trate como
  **i18n de verdade** (rota `/pt`, não texto duplicado colado), documentada
  na seção `11-Internationalization.md`.
- **Ação imediata**: decidir isso antes de escrever qualquer `.md` de
  conteúdo público. Mudar de idioma depois de 100 páginas escritas é
  retrabalho puro.

---

## 4. Estratégia de execução em fases (evita o risco #1)

Documentação e produto crescem juntos, em ondas — nunca "primeiro toda a
doc, depois o código", nem o contrário.

### Fase 0 — Fundamentos (1-2 semanas)

- `00-Vision.md`, `01-Product.md` (versão v1, curta)
- Decisão de idioma, stack, design language (seção 3 e 7 abaixo)
- Setup do repo, CI básico, deploy vazio no ar (Vercel) — **o site existe,
  mesmo que só com "Hello, Caio"**, desde o dia 1.

### Fase 1 — MVP navegável (2-4 semanas)

- Hero, About, Projects (lista), Contact
- `02-UX.md`, `03-UI.md`, `04-Architecture.md` versão v1
- Design tokens mínimos (cor, tipografia, spacing) — não precisa do sistema
  completo ainda
- Critério de saída da fase: Lighthouse > 90 em produção, com conteúdo real
  (não lorem ipsum)

### Fase 2 — Diferenciação técnica (4-6 semanas)

- Case studies (1-2 projetos primeiro, não todos de uma vez)
- `17-ProjectCaseStudies.md`
- ADRs dos primeiros 5-10 registros
- `/architecture` público no site

### Fase 3 — Engenharia visível (contínuo)

- Testes (`12-Testing.md`), CI/CD (`13-CI-CD.md`), Observabilidade
  (`15-Observability.md`)
- Acessibilidade WCAG 2.2 AA (`09-Accessibility.md`)
- Segurança (`10-Security.md`)

### Fase 4 — Polimento e expansão

- i18n completo, blog/MDX, `/lab`, `/playground`, `/changelog`, `/now`
- Documentação estendida (as partes "extra" da SPEC completa)

> Regra: **nenhuma fase começa antes da anterior ter um critério de aceite
> batido em produção**, não em `localhost`.

---

## 5. Estrutura de documentação revisada

Mantém a espinha dorsal do seu plano original, com adições marcadas `[NOVO]`
e reorganização de nomenclatura para inglês (já que o público é
internacional).

```
PORTFOLIO-SPEC/
  00-Vision.md
  01-Product.md
  02-UX.md
  03-UI.md
  04-Architecture.md
  05-CodeStandards.md
  06-Animations.md
  07-Performance.md
  08-SEO.md
  09-Accessibility.md
  10-Security.md
  11-Internationalization.md
  12-Testing.md
  13-CI-CD.md
  14-Deployment.md
  15-Observability.md
  16-Content.md
  17-ProjectCaseStudies.md
  18-Branding.md
  19-FutureRoadmap.md
  20-EngineeringDecisions.md          [antes estava implícito, agora é seção própria]
  21-ADR/                             [NOVO] pasta com ADR-001.md, ADR-002.md...
  22-DesignSystem-ComponentGovernance.md   [NOVO] governa uso de 21st.dev / shadcn / libs de terceiros
  23-AI-Usage-Disclosure.md           [NOVO] como e onde IA foi usada no processo
  24-Privacy-GDPR.md                  [NOVO] essencial para público EU/Irlanda
  25-CostAndHosting.md                [NOVO] custo de infra, por que Vercel/Neon/etc
  26-DocumentGovernance.md            [NOVO] versionamento e changelog da própria SPEC
  Appendix-A-Glossary.md
  Appendix-B-References.md
  Appendix-C-OpenQuestions.md
```

### Por que as adições `[NOVO]`

| Documento                                | Por que existe                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `22-DesignSystem-ComponentGovernance.md` | Você usa componentes do 21st.dev. Precisa registrar: quais componentes, de qual autor/registry, licença, o que foi customizado vs. usado como veio, e onde estão sourceados no código. Sem isso é dívida técnica invisível e, se perguntarem "você fez esse componente?", a resposta honesta precisa estar documentada. |
| `23-AI-Usage-Disclosure.md`              | Cada vez mais comum em processos seletivos técnicos perguntar sobre uso de IA. Documentar isso com transparência (o que a IA gerou, o que você revisou/reescreveu, quais decisões foram suas) é sinal de maturidade, não de fraqueza.                                                                                   |
| `24-Privacy-GDPR.md`                     | Site vai coletar analytics/form de contato e será acessado por usuários na UE. GDPR não é opcional para quem mira o mercado irlandês — é um sinal a mais de que você entende compliance, que é valorizado em empresas enterprise.                                                                                       |
| `25-CostAndHosting.md`                   | Demonstra pensamento de custo/benefício de infraestrutura — algo que todo tech lead se importa e poucos portfólios mostram.                                                                                                                                                                                             |
| `26-DocumentGovernance.md`               | Resolve o risco #3 do diagnóstico: quem revisa, quando revisa, como versiona a SPEC em si.                                                                                                                                                                                                                              |
| `21-ADR/` como pasta, não arquivo único  | ADRs crescem com o tempo; um arquivo único vira ilegível depois de 15 registros. Um por arquivo, numerado, é o padrão de mercado (ex: adr.github.io).                                                                                                                                                                   |

---

## 6. Template obrigatório por seção/feature

Todo `.md` de decisão de produto ou UI segue este esqueleto — sem exceção.
Isso é o que você já tinha para a Hero Section; agora vira regra global.

```markdown
## <Nome da feature/seção>

### Goal

<uma frase, o que essa parte precisa alcançar>

### Motivation

<por que isso importa para o objetivo maior do portfólio>

### Alternatives considered

- Alternativa A — descartada porque...
- Alternativa B — descartada porque...

### Decision

<o que foi escolhido>

### Trade-offs

<o que você ganha, o que você perde>

### Risks

- Risco 1
- Risco 2

### Mitigations

- Mitigação 1 → resolve risco 1
- Mitigação 2 → resolve risco 2

### Acceptance criteria (measurable)

- [ ] Métrica 1 (ex: Lighthouse > 95)
- [ ] Métrica 2 (ex: LCP < 2.5s)
- [ ] Métrica 3 (ex: 0 erros de contraste AA)

### Status

Draft | In Review | Approved | Implemented | Deprecated
```

O campo **Status** é novo e resolve o risco #3 (documento desatualizado):
nada é "verdade" até estar `Approved`, e nada é "verdade em produção" até
`Implemented`.

---

## 7. Design System & governança de componentes (21st.dev)

Como você vai usar 21st.dev, documente por componente:

```markdown
### Component: <nome>

- Source: 21st.dev — <link do registry/autor>
- License: <MIT / etc — confirmar sempre>
- Used as-is or customized: <as-is | customized>
- Customization notes: <o que foi alterado e por quê>
- Location in codebase: `src/components/...`
- Accessibility check: <passou / ajustado / pendente>
```

Isso vira parte do `22-DesignSystem-ComponentGovernance.md`. Mantenha uma
tabela-resumo no topo do arquivo listando todos os componentes de terceiros
usados — isso é o tipo de artefato que, se alguém abrir seu repo, comunica
"esse cara sabe gerenciar dependências", não "esse cara copiou componentes".

---

## 8. Orçamento de performance global (amarra as seções)

Adicione ao `07-Performance.md` um orçamento **total do site**, não só por
seção, para evitar que a soma das partes estoure o budget:

| Recurso                      | Budget                                  |
| ---------------------------- | --------------------------------------- |
| JS inicial (first load)      | < 90 KB gzip                            |
| Total da página (first load) | < 180 KB                                |
| Fontes                       | ≤ 2 famílias, variable fonts, subsetted |
| Imagens acima da dobra       | AVIF/WebP, ≤ 100 KB cada                |
| Third-party scripts          | 0 além de analytics essencial           |
| Lighthouse Performance       | ≥ 95 (mobile, throttled)                |
| LCP                          | < 2.5s                                  |
| CLS                          | < 0.05                                  |
| INP                          | < 200ms                                 |
| TTFB                         | < 600ms                                 |

Toda nova feature precisa declarar, no seu próprio doc, quanto do orçamento
ela consome — se estourar o total, a feature é redesenhada, não o budget
que é relaxado.

---

## 9. ADR — processo e template

Adicione a pasta `21-ADR/` com um índice (`21-ADR/README.md`) listando todos
os ADRs por número, título e status. Template por ADR:

```markdown
# ADR-00X: <Título da decisão>

## Status

Proposed | Accepted | Superseded by ADR-00Y | Deprecated

## Context

<qual problema motivou essa decisão>

## Decision

<o que foi decidido>

## Alternatives considered

<mesma lógica da seção 6>

## Consequences

<positivas e negativas — o que essa decisão trava no futuro>
```

Exemplos que você já sugeriu (Next.js, App Router, Tailwind, Framer Motion vs
GSAP, RSC, i18n, Atomic Design) — cada um vira **um ADR próprio**, não um
parágrafo dentro de outro documento. Isso é o que recrutador técnico
irlandês costuma abrir primeiro.

---

## 10. Checklist "à prova de falhas" (definition of done da própria SPEC)

Antes de considerar qualquer documento `Approved`:

- [ ] Tem Goal, Alternatives, Trade-offs, Risks, Mitigations, Acceptance
      Criteria preenchidos (não vazios/placeholder)
- [ ] Critérios de aceite são **mensuráveis** (número, não adjetivo)
- [ ] Está em inglês (se for artefato público)
- [ ] Foi revisado pelo menos 1x depois de escrito a quente (nunca aprove no
      mesmo dia que escreveu)
- [ ] Se cita uso de IA na geração, está registrado em
      `23-AI-Usage-Disclosure.md`
- [ ] Se envolve componente de terceiro, está registrado em `22-...`
- [ ] Link cruzado: se este doc depende de outro (ex: Performance depende de
      Architecture), o link existe nos dois sentidos

Antes de considerar qualquer **feature** `Implemented`:

- [ ] Critério de aceite do documento correspondente bate em produção
      (não em localhost)
- [ ] Lighthouse/axe/testes rodados e anexados (print ou log)
- [ ] Nenhuma métrica do orçamento global (seção 8) foi violada

---

## 11. Governança do próprio documento (`26-DocumentGovernance.md`)

- **Versionamento**: SemVer da SPEC (`v1.0.0`, `v1.1.0`...). Mudança de
  decisão arquitetural = minor bump + novo ADR. Correção de erro = patch.
- **Changelog**: `CHANGELOG.md` na raiz do repo de documentação, formato
  Keep a Changelog.
- **Revisão**: você mesmo, mas com um intervalo mínimo (ex: 24h) entre
  escrever e aprovar — evita aprovar sob euforia de ter acabado de escrever.
- **Fonte única**: se o site (`/architecture`) exibe conteúdo desses `.md`,
  ele deve ser **gerado a partir deles** (build step / MDX), nunca copiado
  manualmente — evita divergência entre repo de docs e site público.

---

## 12. Como usar este plano com IA (prompt pronto)

Cole isto no início de uma sessão com Claude Code / Cursor / etc, um
documento por vez, substituindo `<DOC>`:

```
Você vai me ajudar a escrever `<DOC>.md` para a documentação técnica do meu
portfólio, seguindo estas regras não-negociáveis:

1. Use o template da seção 6 do PLANO-MESTRE-PORTFOLIO.md: Goal, Motivation,
   Alternatives considered, Decision, Trade-offs, Risks, Mitigations,
   Acceptance criteria (measurable), Status.
2. Todo critério de aceite precisa ser um número ou um booleano verificável,
   nunca um adjetivo ("rápido", "bonito", "moderno" são proibidos sem
   métrica).
3. Escreva em inglês de engenharia nativo (não tradução literal do
   português).
4. Se eu não tiver decidido algo ainda, não invente — liste em
   "Appendix-C-OpenQuestions.md" em vez de assumir.
5. Não estoure o orçamento de performance global (seção 8 do plano mestre)
   sem marcar explicitamente como risco.
6. Se este documento depender de outro já escrito, cite o arquivo e a
   seção específica, não repita o conteúdo.
7. Marque Status: Draft no final — eu aprovo manualmente depois.

Contexto do projeto: <cole aqui um resumo do 00-Vision.md e 01-Product.md>

Agora escreva `<DOC>.md`.
```

---

## 13. Próximos passos imediatos

1. Decidir idioma definitivo (seção 3) — **hoje**, antes de qualquer outra
   coisa.
2. Escrever `00-Vision.md` e `01-Product.md` v1 (curtos, 1-2 páginas cada).
3. Subir o site no ar, mesmo vazio, com CI/CD básico — Fase 0 completa.
4. Criar `21-ADR/ADR-001-nextjs-app-router.md` como primeiro ADR real,
   usando o template da seção 9.
5. Só depois disso, começar a expandir para as demais partes da SPEC,
   seguindo as fases da seção 4.

---

## 14. Resumo do que mudou em relação ao seu plano original

| Original                     | Revisado                               | Motivo                                              |
| ---------------------------- | -------------------------------------- | --------------------------------------------------- |
| 20 partes, tudo de uma vez   | Mesmas 20 + 6 novas, em 4 fases        | Evita nunca lançar nada                             |
| Português                    | Inglês (público) / Português (interno) | Público-alvo é irlandês                             |
| Sem processo de revisão      | Status + versionamento + changelog     | SPEC pode ficar desatualizada e virar mentira       |
| Sem menção a 21st.dev        | Seção de governança de componentes     | Rastreabilidade e honestidade sobre autoria         |
| Sem menção a IA no processo  | Disclosure dedicado                    | Diferencial de maturidade, cada vez mais perguntado |
| Sem GDPR                     | Seção dedicada                         | Obrigatório para público EU                         |
| Critérios por seção isolados | + orçamento global de performance      | Soma das partes pode estourar o todo                |
| ADRs como ideia solta        | Pasta estruturada + template formal    | Padrão real de mercado (adr.github.io)              |
