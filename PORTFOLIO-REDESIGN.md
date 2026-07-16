# PORTFOLIO REDESIGN — Caio Enrique

> Identidade profissional, não portfólio.
> Se algo está aqui, é porque faria um CTO pensar: "Eu preciso conversar com esse engenheiro."

---

## 0. PREMISSA

Eu não estou construindo um portfólio.
Estou construindo uma marca profissional.

A marca deve transmitir uma única coisa:
**"Esse engenheiro consegue projetar plataformas corporativas."**

Todo o resto — cada pixel, cada palavra, cada animação — existe para reforçar essa ideia.

### Avaliação contínula

Antes de escrever qualquer coisa, eu faço internamente estas perguntas:

1. Isso parece genérico?
2. Isso poderia estar em qualquer portfólio?
3. Estou vendendo tecnologia em vez de resolver problemas?
4. Estou mostrando pensamento de engenharia?
5. Estou mostrando impacto?
6. Estou mostrando tomada de decisão?
7. Estou despertando curiosidade?

Se qualquer resposta for negativa, reescrevo.

### Ordem sagrada

```
Problema → Pensamento → Arquitetura → Solução → Resultado → Tecnologias
```

Nunca ao contrário.

---

## 1. IDENTIDADE

### 1.1 Como me enxergar

| NÃO sou                     | SOU                                     |
| --------------------------- | --------------------------------------- |
| Full Stack Developer        | Software Engineer                       |
| Front-end Developer         | Platform Engineer                       |
| React Developer             | Solutions Engineer                      |
| Next.js Developer           | Automation Engineer                     |
| "Apaixonado por tecnologia" | Alguém que resolve problemas de empresa |

Toda decisão reforça essa identidade.

### 1.2 O que o visitante deve sentir

```
10 segundos:  "Esse desenvolvedor parece diferente."
30 segundos:  "Ele pensa em arquitetura."
2 minutos:    "Ele sabe estruturar sistemas."
Ao terminar:  "Eu gostaria de entrevistá-lo."
```

### 1.3 Frases proibidas

- "Sou apaixonado por programação."
- "Crio aplicações modernas."
- "Desenvolvedor Full Stack."
- "Especialista em React."
- "Apaixonado por tecnologia."
- "Transformando ideias em código."
- "Full Stack Developer."
- "Aberto à Irlanda" (não no hero)

Essas frases não podem existir em nenhum lugar do portfólio.

---

## 2. DESIGN SYSTEM

### 2.1 Referências visuais

O visual deve lembrar: Stripe, Linear, Vercel, GitHub, Notion, Supabase.

Nada de:

- Partículas no fundo
- Textos gradient gigantes
- Cards com sombra enorme
- Animações que desviam atenção
- Fundos coloridos alternados
- Visual "gamer" ou "criativo"

O visual deve transmitir: Engenharia. Confiabilidade. Organização. Precisão. Elegância.

### 2.2 Paleta

```
Background:     #09090b
Surface:        #111113
Border:         rgba(255, 255, 255, 0.06)
Text Primary:   #fafafa
Text Secondary: #a1a1aa
Accent:         #818cf8 (indigo-400) — SPARADAMENTE
Success:        #34d399
Warning:        #fbbf24
```

Accent aparece apenas em: links, estados ativos, um elemento por seção.

### 2.3 Tipografia

```
Inter           → Corpo
JetBrains Mono  → Código, dados técnicos, badges
```

Hierarquia:

```
H1: 2.5rem / bold / tracking-tight
H2: 1.75rem / bold / tracking-tight
H3: 1.125rem / semibold
Body: 0.9375rem / leading-relaxed
Small: 0.8125rem / muted
Mono: 0.8125rem / jetbrains-mono
```

### 2.4 Espaçamento e Grid

```
Seção:          py-24 (96px)
Card interno:   p-6 (24px)
Entre cards:    gap-4 (16px)
Max width:      max-w-4xl (896px) — leitura confortável
Exceções:       max-w-5xl (home), max-w-6xl (grid de projetos)
```

### 2.5 Componentes

**Cards**: Sem sombra. Borda `rgba(255,255,255,0.06)`. Fundo `#111113`. Hover: borda `rgba(129,140,248,0.2)`.

**Badges**: Mono font. xs. Transparente com borda. Cores por contexto.

**Botões**: Primário (filled) para ações principais. Ghost para secundários. Outline para externos.

**Ícones**: Lucide. 16-20px. Sempre com texto.

### 2.6 Animações

Permitido: `opacity 0→1, y 10→0` (300ms). Hover transitions (200ms). Skeleton loading.

Proibido: delay escalonado em listas. Letter-by-letter. Parallax. Scroll-jacking. Qualquer coisa > 500ms.

### 2.7 Diagramas

Sempre que possível, usar diagramas simples em texto:

```
Usuário → Frontend → Backend → Banco → Dashboard

Google Sheets → ETL → DuckDB → Analytics → Visualização

Documento → Upload → Indexação → Busca → Resultado
```

Diagramas transmitem arquitetura visualmente.

---

## 3. ESTRUTURA DO PORTFÓLIO

### 3.1 Mapa de páginas

```
/ (Home)
/sobre (Sobre)
/projetos (Projetos)
/projetos/[slug] (Caso do Projeto)
/engineering (Engineering Principles)
/engineering/como-construo (How I Build Software)
/engineering/arquitetura (Behind the Architecture)
/engineering/lições (Lessons Learned)
/timeline (Linha do Tempo)
/curriculo (Currículo)
/contato (Contato)
```

### 3.2 Navbar

```
caio.dev          Sobre  Projetos  Engineering  Timeline  Currículo  Contato
```

Ordem intencional:

1. **Sobre** — primeiro contato pessoal
2. **Projetos** — evidência de trabalho
3. **Engineering** — como eu penso (diferencial)
4. **Timeline** — evolução
5. **Currículo** — formal
6. **Contato** — ação final

O logo "caio.dev" é o link para Home.

### 3.3 Footer

```
caio.dev

Desenvolvedor Full Stack & Automação Enterprise.
Construo sistemas que resolvem problemas operacionais
de empresas — da indexação documental a dashboards executivos.

LINKS RÁPIDOS
Sobre · Projetos · Engineering · Timeline · Currículo · Contato

SOCIAL
GitHub · LinkedIn

© 2026 Caio Enrique. Todos os direitos reservados.
Aberto a oportunidades internacionais.
Desenvolvido com Python, React e Google Workspace.
```

---

## 4. HOME

### 4.1 Objetivo psicológico

Em 10 segundos: "Esse desenvolvedor parece diferente."
Em 30 segundos: "Ele pensa em arquitetura."

A Home não é uma landing page.
É a apresentação de um engenheiro.

### 4.2 Estrutura

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR                                             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  HERO                                               │
│  [Posicionamento]                                   │
│  [Nome]                                             │
│  [Subtítulo]                                        │
│  [CTAs]                                             │
│                                                     │
├─────────────────────────────────────────────────────┤
│  POSICIONAMENTO                                     │
│  [Barra Problema → Solução]                         │
├─────────────────────────────────────────────────────┤
│  NÚMEROS                                            │
│  [Indicadores de impacto]                           │
├─────────────────────────────────────────────────────┤
│  ESPECIALIDADES                                     │
│  [O que eu resolvo]                                 │
├─────────────────────────────────────────────────────┤
│  COMO PENSO                                         │
│  [3 cards de filosofia]                             │
├─────────────────────────────────────────────────────┤
│  PROJETO ANCORAGEM                                  │
│  [1 projeto destaque]                               │
├─────────────────────────────────────────────────────┤
│  PROVAS SOCIAIS                                     │
│  [Experiência + Stack]                              │
├─────────────────────────────────────────────────────┤
│  DIFERENCIAIS                                       │
│  [Por que eu]                                       │
├─────────────────────────────────────────────────────┤
│  CTA FINAL                                          │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

### 4.3 Hero

**Posicionamento** (small, mono, accent):

```
Software Engineer · Automação Enterprise · Plataformas Corporativas
```

**Nome** (H1):

```
Caio Enrique
```

**Subtítulo** (H2, muted):

```
Construo sistemas que transformam processos manuais
em plataformas automatizadas e dados em decisão.
```

**Parágrafo** (body, muted):

```
Cada projeto que construo nasceu de um problema operacional real.
Desde dashboards executivos que consolidam KPIs até pipelines ETL
que processam milhares de documentos — meu trabalho é resolver
problemas que empresas precisam resolver.
```

**CTAs**:

```
[Ver Projetos]              → /projetos
[Engineering Principles]    → /engineering
```

**Por que funciona:**

- Linha 1 diz o que ele faz antes de quem ele é
- Subtítulo conecta problemas a soluções
- Parágrafo dá prova concreta
- CTIs levam para onde o recrutador pode ver evidências

### 4.4 Posicionamento (Barra Problema → Solução)

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Processos    │ Dados        │ Integrações  │ Documentos   │
│ manuais      │ dispersos    │ entre APIs   │ não indexados │
│      ↓       │      ↓       │      ↓       │      ↓       │
│ Automação    │ Dashboards   │ Pipelines    │ Upload +     │
│ com Scripts  │ Executivos   │ ETL          │ Busca        │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

**Por que:** Mostra que eu penso em padrões, não em tecnologias isoladas.

### 4.5 Números

Não "5+ projetos". Números que transmitem experiência.

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│ 12.500+     │ 8           │ 3           │ 2           │ 4           │
│ linhas em   │ plataformas │ demos       │ provedores  │ semestres   │
│ produção    │ construídas │ funcionais  │ LLM         │ de CS       │
│ corporativa │             │ no browser  │ integrados  │             │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

**Por que:** "12.500+ linhas em produção corporativa" prova escala. "3 demos funcionais" prova que funciona de verdade. "2 provedores LLM" mostra que vai além de CRUD.

### 4.6 Especialidades

O que eu resolvo. Não o que eu sei.

```
┌─────────────────┬─────────────────┬─────────────────┐
│ Automação       │ Analytics       │ Plataformas     │
│ Enterprise      │ & Dashboards    │ Corporativas    │
│                 │                 │                 │
│ Processos       │ Dados que       │ Sistemas        │
│ manuais que     │ precisam ser    │ que precisam    │
│ consomem tempo  │ consolidados    │ funcionar       │
│ de pessoas      │ em tempo real   │ por anos        │
└─────────────────┴─────────────────┴─────────────────┘
```

### 4.7 Como Penso

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Antes de escrever       │ Cada sistema nasce      │ Software que não        │
│ código, eu entendo o    │ de um problema real.    │ precisa de mim para     │
│ problema.               │ Nunca de uma           │ funcionar amanhã.       │
│                         │ tecnologia.            │                         │
│ O código é a parte      │ Primeiro eu entendo    │ Documentação, testes    │
│ fácil. O difícil é      │ o fluxo humano.        │ e automação fazem       │
│ entender o que precisa  │ Depois eu mapeio os    │ parte do produto.       │
│ ser resolvido.          │ dados. Só então eu     │                         │
│                         │ escrevo código.        │ Escalabilidade é        │
│                         │                        │ uma decisão de         │
│                         │                        │ arquitetura.            │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

### 4.8 Projeto Ancoragem

Um único projeto. O mais impressionante.

```
┌─────────────────────────────────────────────────────────────────┐
│  PROJETO EM DESTAQUE                                            │
│                                                                 │
│  Enterprise Dashboard                                           │
│  Plataforma B2B com arquitetura dual-stack                      │
│                                                                 │
│  [Descrição de 2 linhas focada no PROBLEMA]                    │
│                                                                 │
│  Problema → Arquitetura → Resultado                             │
│                                                                 │
│  [Ver caso completo →]                                          │
└─────────────────────────────────────────────────────────────────┘
```

### 4.9 Provas Sociais

```
┌─────────────────────────────────────────────────────────────────┐
│  EXPERIÊNCIA                                                   │
│                                                                 │
│  SOSdocs/SERPRO    Bunge (Fortune 500)    EasyTech             │
│  Desenvolvedor     Assistente de RH       Assistente Admin     │
│  Full-Stack        Dashboards Power BI    ERP TOTVS            │
│  2025-Atual        2024-2025              2025                 │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Python · FastAPI · Next.js · React · PostgreSQL · Docker       │
│  Google Apps Script · Power BI · Git · Vercel                   │
└─────────────────────────────────────────────────────────────────┘
```

### 4.10 Diferenciais

```
┌─────────────────┬─────────────────┬─────────────────┐
│ Penso antes     │ Construo        │ Documento       │
│ de codar        │ sistemas,       │ decisões,       │
│                 │ não features    │ não código      │
│                 │                 │                 │
│ Entendo o       │ Cada componente │ Cada escolha    │
│ problema antes │ tem             │ técnica tem     │
│ de escolher     │ responsabilidade│ justificativa   │
│ tecnologia      │                 │ e trade-off     │
└─────────────────┴─────────────────┴─────────────────┘
```

### 4.11 CTA Final

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  "Todo sistema que construo começa com uma pergunta:            │
│   como isso vai resolver o problema de alguém?"                 │
│                                                                 │
│  [Fale Comigo]    [Ver Projetos]                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. SOBRE

### 5.1 Objetivo

O visitante deve entender minha **jornada de evolução**.
Não idade. Não faculdade. Não hometown.

A pergunta que essa página responde:
"Por que esse cara pensa diferente de um estudante comum?"

### 5.2 Estrutura

```
┌─────────────────────────────────────────────────────┐
│  HEADER                                             │
│  "Sobre Mim"                                        │
│  Da operação à engenharia                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  A JORNADA (narrativa em 3 atos)                    │
│                                                     │
│  ATO 1: Entender processos                          │
│  [Como começou entendendo operações empresariais]   │
│                                                     │
│  ATO 2: Construir soluções                          │
│  [Transição de analista para desenvolvedor]         │
│                                                     │
│  ATO 3: Projetar sistemas                           │
│  [Como hoje penso em arquitetura]                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  O QUE ME DEFINE (grid 2x2)                         │
│  Pensamento de Negócio · Execução Técnica           │
│  Documentação como Produto · Escalabilidade         │
│                                                     │
├─────────────────────────────────────────────────────┤
│  DADOS PESSOAIS (compacto)                          │
│  FORMAÇÃO + CERTIFICADOS                            │
│  [Download CV]                                      │
└─────────────────────────────────────────────────────┘
```

### 5.3 Copy — A Jornada

**ATO 1: Entender processos**

```
Antes de escrever minha primeira função, eu já entendia como
empresas funcionavam.

Trabalhei na Bunge — uma multinacional Fortune 500 — onde aprendi
que documentação não é burocracia. É a diferença entre um
sistema que funciona hoje e um que funciona em dois anos.

Vi de perto como dados ficam presos em planilhas.
Como processos manuais consomem horas que deveriam ser
produtivas. Como a falta de integração entre sistemas
cria retrabalho.

Essa experiência me deu algo que a maioria dos desenvolvedores
não tem: eu entendo o problema antes de pensar na solução.
```

**ATO 2: Construir soluções**

```
Quando entrei na SOSdocs, percebi que não bastava automatizar
tarefas. Era necessário pensar em fluxos.

Comecei a mapear processos documentais antes de escrever código.
Identifiquei onde humanos perdiam tempo. Onde erros aconteciam
com frequência. Onde dados se perdiam entre sistemas.

Cada projeto que construí nasceu dessa observação:
o DocZ Upload System nasceu porque alguém passava horas
classificando documentos manualmente.
O Enterprise Dashboard nasceu porque KPIs estavam espalhados
em cinco planilhas diferentes.

O código era a parte final. O difícil era entender o fluxo.
```

**ATO 3: Projetar sistemas**

```
Hoje eu não penso em React ou Python. Penso em arquitetura.

Antes de escolher uma tecnologia, eu faço três perguntas:
1. Qual é o problema real que isso resolve?
2. Quem são os usuários e como eles interagem com o sistema?
3. Como isso vai funcionar quando o volume dobrar?

Cada sistema que construo tem documentação de decisão.
Cada API tem contrato. Cada componente tem responsabilidade.

Não é sobre escrever código bonito.
É sobre construir sistemas que outras pessoas possam manter
sem precisar me consultar.
```

### 5.4 Copy — O Que Me Define

**PENSAMENTO DE NEGÓCIO**

```
Antes de escrever código, eu entendo o processo. Sei que
software existe para resolver problemas de pessoas e empresas,
não para demonstrar habilidades técnicas.
```

**EXECUÇÃO TÉCNICA**

```
Construo sistemas completos — do banco de dados ao deploy.
APIs documentadas, autenticação robusta, CI/CD automatizado,
testes que protegem regressões.
```

**DOCUMENTAÇÃO COMO PRODUTO**

```
Documentação não é texto bonito no final do projeto.
É a diferença entre um sistema manutenível e um legado.
Cada decisão de arquitetura tem registro. Cada API tem contrato.
```

**ESCALABILIDADE COMO DECISÃO**

```
Escalabilidade não é escolher um framework famoso.
É pensar em como o sistema se comporta quando o volume
multiplica. É separar responsabilidades. É escolher a
abstração certa para o problema certo.
```

---

## 6. PROJETOS

### 6.1 Objetivo

Essa é a página mais importante.

O recrutador não quer ver tecnologias.
Ele quer ver **evidência de que eu resolvo problemas**.

Cada projeto é um caso de uso. Uma história.

### 6.2 Lista de Projetos

```
┌─────────────────────────────────────────────────────────────────┐
│  PROJETOS                                                       │
│  Cada projeto nasceu de um problema real.                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FILTROS: [Todos] [Full Stack] [Data/Automation] [Frontend]    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Enterprise Dashboard                                   │   │
│  │  Problema: KPIs executivos em 5 planilhas diferentes   │   │
│  │  Stack: Node.js + Python + OAuth2                       │   │
│  │  [Ver caso →]                                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Portal Monorepo                                        │   │
│  │  Problema: Portal unificado com analytics avançado      │   │
│  │  Stack: Next.js 15 + Python + DuckDB + Groq AI         │   │
│  │  [Ver caso →]                                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ... (8 projetos)                                               │
│                                                                 │
│  [Ver todos no GitHub →]                                        │
└─────────────────────────────────────────────────────────────────┘
```

Cada card mostra: Título, Problema (1 linha), Stack (badges), Link.

### 6.3 Caso do Projeto (Detalhe)

Estrutura obrigatória para cada projeto:

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Voltar para Projetos                                        │
│                                                                 │
│  TÍTULO                                                        │
│  Uma linha que resume o problema                                │
│  [Repo] [Demo]                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. O PROBLEMA                                                  │
│  [O que existia antes. Qual era a dor. Quem era afetado.]      │
│                                                                 │
│  2. O CONTEXTO                                                  │
│  [Empresa, ambiente, restrições, volume de dados.]              │
│                                                                 │
│  3. O OBJETIVO                                                  │
│  [O que o sistema deveria fazer. O que era considerado sucesso] │
│                                                                 │
│  4. O DESAFIO                                                   │
│  [Por que isso não era trivial. O que tornava difícil.]         │
│                                                                 │
│  5. MINHA RESPONSABILIDADE                                      │
│  [O que eu fiz especificamente. Não o time. Eu.]                │
│                                                                 │
│  6. ARQUITETURA                                                 │
│  [Diagrama ou descrição. Por que escolhi essa estrutura.]      │
│                                                                 │
│  7. FLUXO DO SISTEMA                                            │
│  [Diagrama: Input → Processo → Output]                          │
│                                                                 │
│  8. MODELAGEM                                                   │
│  [Entidades, relações, decisões de banco]                       │
│                                                                 │
│  9. DECISÕES TÉCNICAS                                          │
│  [Cada tecnologia com JUSTIFICATIVA. Nunca apenas listar.]     │
│                                                                 │
│  10. TRADE-OFFS                                                 │
│  [O que eu abri mão. O que eu faria diferente.]                 │
│                                                                 │
│  11. COMO PENSEI                                                │
│  [O raciocínio por trás das escolhas. Não o código.]           │
│                                                                 │
│  12. RESULTADOS                                                 │
│  [Métricas concretas. Impacto qualitativo se não há métricas.] │
│                                                                 │
│  13. TECNOLOGIAS                                                │
│  [Lista simples, sem explicação.]                               │
│                                                                 │
│  14. O QUE APRENDI                                              │
│  [Lições que levaria para o próximo projeto.]                   │
│                                                                 │
│  15. O QUE FARIA DIFERENTE                                      │
│  [Reflexão honesta sobre erros e limitações.]                   │
│                                                                 │
│  16. PRÓXIMOS PASSOS                                            │
│  [Se eu pudesse revisitar, o que eu faria.]                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 6.4 Copy de Exemplo — Enterprise Dashboard

```markdown
# Enterprise Dashboard

KPIs executivos espalhados em 5 planilhas, atualizados manualmente,
sem visão consolidada.

---

## 1. O Problema

A empresa tinha dados de desempenho de funcionários distribuídos
em múltiplas planilhas Excel. Cada gerência mantinha sua própria
versão. Não havia uma fonte única da verdade.

Relatórios semanais levavam 4 horas para serem consolidados.
Dados ficavam desatualizados entre a coleta e a apresentação.
Decisões eram tomadas com informações defasadas.

## 2. O Contexto

Plataforma B2B para gestão de dados organizacionais.
Múltiplos tenants com dados isolados.
Necessidade de compliance com políticas de auditoria interna.
Volume: ~500 registros/dia com potencial de crescimento.

## 3. O Objetivo

Construir uma plataforma que:

- Consolidasse dados de múltiplas fontes em tempo real
- Permitisse acesso por perfil (RBAC)
- Mantivesse trilha de auditoria para compliance
- Escalasse horizontalmente sem retrabalho

## 4. O Desafio

Dual-stack (Node.js + Python) adiciona complexidade operacional.
Duas linguagens significam dois ecossistemas de dependências.
A justificativa precisava ser sólida para justificar o custo.

## 5. Minha Responsabilidade

Projetei e implementei:

- API Gateway em Node.js com autenticação JWT/OAuth2
- Processing Engine em Python para data crunching
- Sistema de auditoria com logging estruturado
- Módulo de RBAC com permissões granulares

## 6. Arquitetura
```

Client → API Gateway (Node.js/Express)
↓
Auth Layer (JWT + OAuth2)
↓
Processing Engine (Python/FastAPI)
↓
PostgreSQL + Audit Log

```

## 7. Fluxo do Sistema

```

Requisição HTTP → Validação de Token → Rate Limiting
→ Route Handler → Business Logic
→ Background Task (Python) → Audit Log
→ Response JSON

```

## 8. Modelagem

Entidades principais: Tenant, User, Role, Permission,
AuditLog, DataSource, Dashboard, Metric.
Relacionamentos: Tenant 1:N User, User N:N Role,
Role N:N Permission.

## 9. Decisões Técnicas

**Node.js para API Gateway**: I/O não-bloqueante para múltiplos
tenants simultâneos. Express é maduro e tem ecosystem.

**FastAPI para processamento**: Python é superior para data processing.
FastAPI assíncrono permite background tasks sem bloquear a API.

**PostgreSQL**: Relacional por causa da natureza dos dados
(entidades relacionadas, integridade referencial).

**JWT + OAuth2**: Multi-tenant exige autenticação robusta.

## 10. Trade-offs

O dual-stack adiciona complexidade operacional.
Hoje eu consideraria usar Python para tudo se o volume de
requisições HTTP não justificasse Node.js.
A documentação de API poderia ser mais completa.

## 11. Como Pensei

A separação de responsabilidades entre linguagens funciona
quando cada uma faz o que faz de melhor. Node.js é rápido
para I/O. Python é poderoso para dados. Mas o custo
operacional de manter dois ecossistemas é real.
Essa decisão precisa ser documentada para quem vier depois.

## 12. Resultados

- 500+ registros/dia com latência < 200ms
- Relatórios que levavam 4 horas: tempo real
- 100% das ações auditadas
- Zero downtime desde o deploy

## 13. Tecnologias

Node.js, Express, Python, FastAPI, PostgreSQL, JWT, OAuth2,
Docker, ESLint, Prettier

## 14. O Que Aprendi

Separação de responsabilidades entre linguagens funciona.
Mas o custo operacional é real. Documentar essa separação
é tão importante quanto o código.

## 15. O Que Faria Diferente

- Usaria um stack único se o volume não justificasse dual
- Documentaria mais desde o dia 1
- Implementaria cache Redis para queries frequentes
- Adicionaria relatórios automáticos de auditoria

## 16. Próximos Passos

- Dashboard de auditoria com relatórios automáticos
- Cache Redis para queries frequentes
- Sistema de notificações para alertas
- Migration para Kubernetes se o volume justificar
```

---

## 7. ENGINEERING PRINCIPLES

### 7.1 Objetivo

Essa é uma das páginas mais memoráveis.
Mostra como eu penso, não o que eu construo.

### 7.2 Estrutura

```
┌─────────────────────────────────────────────────────────────────┐
│  ENGINEERING PRINCIPLES                                         │
│  Como eu penso sobre software                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  01                                                       │ │
│  │  "Solve the problem before choosing the technology."      │ │
│  │                                                           │ │
│  │  [Explicação]                                             │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ... (10-12 princípios)                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 Princípios com Copy

**01. Solve the problem before choosing the technology.**

```
Tecnologia é ferramenta. Se você começa pela ferramenta,
vai adaptar o problema à ferramenta em vez de construir
a solução certa. Primeiro entenda o problema. Depois escolha
a tecnologia que melhor resolve.
```

**02. Documentation is part of the product.**

```
Código que não é documentado é código que só funciona
enquanto a pessoa que escreveu está na empresa.
Documentação não é tarefa extra. É parte do produto.
Decision records, contratos de API, runbooks — tudo isso
é tão importante quanto o código.
```

**03. Build software for people.**

```
Software existe para resolver problemas de pessoas.
Não para demonstrar habilidades técnicas. Se o usuário
não consegue usar, o software falhou. Independentemente
de quão elegante é o código por baixo.
```

**04. Automate repetitive work.**

```
Cada tarefa repetitiva que um humano faz é uma tarefa
que deveria ser automatizada. Mas automação tem um custo:
código que precisa ser mantido, dependências que precisam
ser atualizadas. Automação ruim é pior que nenhuma automação.
```

**05. Simple scales better.**

```
Soluções complexas são fáceis de criar e difíceis de manter.
Soluções simples são difíceis de criar e fáceis de manter.
Eu prefiro investir tempo na simplicidade agora do que
pagar o custo da complexidade depois.
```

**06. Architecture matters.**

```
Arquitetura não é desenhar diagramas bonitos.
É tomar decisões que você vai viver com por anos.
Cada decisão tem trade-off. Documentar cada uma é tão
importante quanto a decisão em si.
```

**07. Measure before optimizing.**

```
Não otimize cegamente. Meça primeiro. Onde está o gargalo?
Qual é o custo real? Às vezes a solução é um índice no banco.
Às vezes é um cache. Às vezes não fazer nada é a melhor decisão.
```

**08. Think long-term.**

```
Software precisa sobreviver a quem o criou.
Construo sistemas que outras pessoas possam manter
sem precisar me consultar. Código que é lido mais vezes
do que escrito. Sistemas que funcionam anos depois.
```

**09. Test to protect, not to prove.**

```
Testes não existem para provar que o código funciona.
Existem para garantir que ele continue funcionando
depois da próxima mudança. Se não tem teste, não está pronto.
```

**10. Code is read more than written.**

```
Escrevo código para que outra pessoa (ou eu daqui a 6 meses)
possa entendê-lo. Nomes descritivos, funções pequenas,
consistência de padrões. Código elegante é código que a
equipe consegue modificar sem medo.
```

**11. Quality is not optional.**

```
Qualidade não é "fazer bonito". É "fazer funcionar amanhã".
Linting, type safety, CI/CD, code review — isso não é luxo.
É o que separa um projeto que sobrevive de um que morre.
```

**12. Automate for people, not machines.**

```
Automação não é sobre computadores trabalharem mais rápido.
É sobre pessoas trabalharem no que importa. O objetivo
da automação é liberar tempo humano para decisões que
precisam de julgamento, não de processamento.
```

---

## 8. HOW I BUILD SOFTWARE

### 8.1 Objetivo

Mostrar meu processo de engenharia.
O visitante deve pensar: "Esse cara tem um processo maduro."

### 8.2 Fluxo

```
┌─────────────────────────────────────────────────────────────────┐
│  HOW I BUILD SOFTWARE                                           │
│  Meu processo de engenharia                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. ENTENDIMENTO DO PROBLEMA                                    │
│  ─────────────────────────────                                  │
│  [Copy detalhada]                                               │
│                                                                 │
│  2. PESQUISA                                                    │
│  ──────────────                                                 │
│  [Copy detalhada]                                               │
│                                                                 │
│  3. MODELAGEM                                                   │
│  ──────────────                                                 │
│  [Copy detalhada]                                               │
│                                                                 │
│  4. ARQUITETURA                                                 │
│  ──────────────                                                 │
│  [Copy detalhada]                                               │
│                                                                 │
│  5. PROTÓTIPO                                                   │
│  ──────────────                                                 │
│  [Copy detalhada]                                               │
│                                                                 │
│  6. DESENVOLVIMENTO                                             │
│  ──────────────────                                             │
│  [Copy detalhada]                                               │
│                                                                 │
│  7. TESTES                                                      │
│  ──────────                                                     │
│  [Copy detalhada]                                               │
│                                                                 │
│  8. DEPLOY                                                      │
│  ──────────                                                     │
│  [Copy detalhada]                                               │
│                                                                 │
│  9. DOCUMENTAÇÃO                                                │
│  ───────────────                                                │
│  [Copy detalhada]                                               │
│                                                                 │
│  10. MELHORIA CONTÍNUA                                          │
│  ───────────────────                                            │
│  [Copy detalhada]                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 8.3 Copy de cada etapa

**1. Entendimento do Problema**

```
Antes de qualquer coisa, eu entendo o problema.
Não o problema técnico. O problema de negócio.

Pergunto:
- Quem tem esse problema?
- Como ele se manifesta no dia a dia?
- Qual é o custo de não resolver?
- O que já foi tentado?

Se eu não entendo o problema, qualquer solução é chute.
Document o fluxo atual antes de propor qualquer mudança.
```

**2. Pesquisa**

```
Com o problema entendido, pesquiso soluções existentes.
Não para copiar. Para entender padrões.

Verifico:
- Como outros resolveram problemas similares?
- Quais tecnologias são adequadas para esse contexto?
- Quais são as restrições (volume, equipe, prazo)?
- O que a comunidade recomenda para esse caso?

A pesquisa evita reinventar a roda e revela armadilhas
que outros já enfrentaram.
```

**3. Modelagem**

```
Antes de escrever código, mapeio o domínio.

Defino:
- Entidades principais e suas relações
- Fluxos de dados
- Pontos de validação
- Regras de negócio
- Limites e restrições

Modelagem não é desenhar banco de dados.
É entender o domínio o suficiente para que o banco
de dados seja uma consequência自然.
```

**4. Arquitetura**

```
Com o domínio modelado, escolho a arquitetura.

Pergunto:
- Qual é o padrão de acesso? (leitura vs escrita)
- Onde estão os gargalos?
- O que precisa escalar?
- O que pode ser simplificado?

Document cada decisão com justificativa e trade-offs.
Arquitetura sem documentação é opinião, não engenharia.
```

**5. Protótipo**

```
Antes do desenvolvimento completo, crio um protótipo.
Não para demonstrar. Para validar.

O protótipo responde:
- A arquitetura funciona na prática?
- O fluxo faz sentido para o usuário?
- Há algo que eu não previ?

Protótipo rápido. Validação rápida. Ajuste rápido.
É mais barato errar no protótipo do que no código.
```

**6. Desenvolvimento**

```
Desenvolvo incrementalmente. Começo pelo fluxo crítico.

Cada feature tem:
- Código com responsabilidade clara
- Testes que protegem o que já funciona
- Commit atômico com mensagem descritiva

Não adiciono features que o protótipo não validou.
Progresso é funcionalidade funcionando, não código escrito.
```

**7. Testes**

```
Testes são o seguro do projeto.

Unit tests: validam lógica de negócio isoladamente.
Integration tests: validam contratos entre componentes.
E2E tests: validam fluxos completos do usuário.

Testes não são tarefa para "depois". São parte do
desenvolvimento. Se não tem teste, não está pronto.
```

**8. Deploy**

```
CI/CD desde o primeiro commit.

Pipeline:
- Lint (código consistente)
- Type check (segurança de tipos)
- Tests (regressão protegida)
- Build (compilação limpa)
- Deploy (automático ou com approval)

Deploy manual é erro humano waiting to happen.
```

**9. Documentação**

```
Documentação não é tarefa do final.
É parte do fluxo.

Cada decisão de arquitetura: decision record.
Cada API: contrato com exemplos.
Cada sistema: runbook para operação.

Se amanhã eu sair da equipe, o sistema precisa
continuar funcionando. Documentação é o que permite isso.
```

**10. Melhoria Contínua**

```
Nenhum sistema é perfeito no primeiro deploy.

Monitoro:
- Métricas de performance
- Logs de erro
- Feedback do usuário
- Dívida técnica acumulada

Cada iteração melhora o sistema.
Melhoria contínua não é opcional. É engenharia.
```

---

## 9. BEHIND THE ARCHITECTURE

### 9.1 Objetivo

Mostrar raciocínio técnico, não lista de tecnologias.

### 9.2 Estrutura

Cada tecnologia com JUSTIFICATIVA:

```
┌─────────────────────────────────────────────────────────────────┐
│  BEHIND THE ARCHITECTURE                                        │
│  Por que escolho cada tecnologia                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  PostgreSQL                                                │ │
│  │                                                           │ │
│  │  [Por que PostgreSQL e não MongoDB/MySQL/etc.]            │ │
│  │  [Trade-offs]                                             │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ... (para cada tecnologia)                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 9.3 Copy

**PostgreSQL**

```
Por que PostgreSQL:
Meus dados são relacionais. Entidades se conectam.
Integridade referencial importa. Transações ACID importam.
PostgreSQL é maduro, confiável e escala horizontalmente.

Por que não MongoDB:
MongoDB é excelente para documentos independentes.
Mas meus dados têm relações complexas que precisam
de joins e integridade referencial. MongoDB
simplificaria a escrita mas complicaria a leitura.

Trade-off:
PostgreSQL exige schema upfront. Isso é uma restrição
que vira vantagem: o schema documenta o domínio.
```

**Next.js**

```
Por que Next.js:
Server Components reduzem JavaScript enviado ao cliente.
App Router oferece rotas baseadas em sistema de arquivos.
Turbopack acelera o desenvolvimento.
Deploy na Vercel é instantâneo.

Por que não Remix/SvelteKit/Astro:
Next.js tem o ecossistema mais maduro para aplicações
que precisam de Server Components, i18n e SSR.
Para este caso, a maturidade do ecossistema justifica.

Trade-off:
Next.js é pesado para projetos simples.
Mas para aplicações que precisam de SSR, i18n e
server components, é a escolha correta.
```

**Python + FastAPI**

```
Por que Python para processamento de dados:
Python é a linguagem padrão para data processing.
Pandas, NumPy, DuckDB — o ecossistema é imbatível.
FastAPI assíncrono permite background tasks.

Por que não Node.js para tudo:
Node.js é excelente para I/O. Mas para CPU-intensive
tasks (data crunching, ETL), Python é superior.
O dual-stack justifica quando cada linguagem
faz o que faz de melhor.

Trade-off:
Duas linguagens = dois ecossistemas = mais manutenção.
Mas a separação de responsabilidades é clara:
Node.js = API Gateway, Python = Processing Engine.
```

**DuckDB**

```
Por que DuckDB:
Análise de dados local, sem servidor.
Embeddable, rápido para queries analíticas.
Substitui soluções pesadas para analytics.

Por que não PostgreSQL para analytics:
PostgreSQL é transacional. Para analytics,
queries pesadas competem com operações CRUD.
DuckDB é otimizado para leitura analítica.

Trade-off:
DuckDB não suporta concorrência de escrita.
Para analytics local, isso não é problema.
Para produção com múltiplos writers, PostgreSQL.
```

**Supabase**

```
Por que Supabase:
Auth, database e storage em um serviço.
PostgreSQL managed sem infraestrutura.
Row Level Security nativo.

Por que não Firebase:
Supabase usa PostgreSQL (relacional).
Firebase usa Firestore (NoSQL).
Para dados relacionais, Supabase é superior.

Trade-off:
Vendor lock-in com Supabase.
Mas PostgreSQL subjacente permite migração.
```

**Groq AI**

```
Por que Groq:
Velocidade de inferência. Respostas em milliseconds.
API simples e confiável.

Por que não OpenAI:
Groq é mais rápido para use cases onde latência importa.
Para assistentes virtuais que precisam de respostas
rápidas, Groq é superior.

Trade-off:
Groq tem menos modelos disponíveis.
Para este caso, velocidade > variedade.
```

**Selenium**

```
Por que Selenium:
Automação de web scraping e testes E2E.
Maduro, bem documentado, vasto ecossistema.

Por que não Playwright:
Selenium é mais compatível com browsers legados.
Para automação de ERP (TOTVS Protheus), isso importa.

Trade-off:
Selenium é mais lento que Playwright.
Mas a compatibilidade justifica para este caso.
```

---

## 10. LESSONS LEARNED

### 10.1 Objetivo

Transmitir maturidade técnica e humildade.
O visitante deve pensar: "Esse cara aprende com seus erros."

### 10.2 Estrutura

Para cada projeto:

```
┌─────────────────────────────────────────────────────────────────┐
│  LESSONS LEARNED                                                │
│  O que cada projeto me ensinou                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ENTERPRISE DASHBOARD                                           │
│                                                                 │
│  Erros:                                                         │
│  • Dual-stack sem justificativa sólida no início                │
│  • Falta de cache para queries frequentes                       │
│  • Auditoria sem relatórios automáticos                         │
│                                                                 │
│  Limitações:                                                    │
│  • Sistema de notificações não implementado                     │
│  • Dashboard não suporta filtros dinâmicos                      │
│  • Testes E2E incompletos                                       │
│                                                                 │
│  O que faria diferente:                                         │
│  • Começaria com stack único e migraria se necessário           │
│  • Implementaria cache desde o início                           │
│  • Documentaria mais decisões de arquitetura                    │
│                                                                 │
│  Decisões ruins:                                                │
│  • Usar dois ecossistemas sem necessidade clara                 │
│  • Não ter testes desde o primeiro commit                       │
│  • Não documentar trade-offs                                    │
│                                                                 │
│  Refatorações futuras:                                          │
│  • Migrar para stack único se volume justificar                 │
│  • Adicionar Redis para cache                                   │
│  • Criar dashboard de auditoria                                 │
│                                                                 │
│  Aprendizados:                                                  │
│  • Documentar decisões é mais importante que documentar código  │
│  • Dual-stack funciona mas custa caro                           │
│  • Testes desde o dia 1 economizam dias depois                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 11. TIMELINE

### 11.1 Objetivo

Não é timeline da vida.
É timeline da **evolução como engenheiro**.

### 11.2 Estrutura

```
┌─────────────────────────────────────────────────────────────────┐
│  EVOLUÇÃO                                                       │
│  Como minha mentalidade mudou ao longo do tempo                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  2023 ──── FASE 1: AUTOMAÇÃO                                    │
│  "Programação era sobre automatizar tarefas."                   │
│  Python, bots, scripts.                                         │
│  Mentalidade: resolver o problema imediato.                     │
│                                                                 │
│  2024 ──── FASE 2: INTEGRAÇÃO                                   │
│  "Percebi que o problema nunca é só técnico."                   │
│  Bunge: dados em planilhas, processos manuais.                  │
│  Mentalidade: entender o fluxo antes de codar.                  │
│                                                                 │
│  2025 ──── FASE 3: PLATAFORMAS                                  │
│  "Comecei a pensar em arquitetura, não em código."              │
│  SOSdocs: dual-stack, RBAC, auditoria, ETL.                     │
│  Mentalidade: construir sistemas, não features.                 │
│                                                                 │
│  2026 ──── FASE 4: ENGENHARIA                                   │
│  "Software precisa ser sustentável."                            │
│  Documentação como produto. Testes como garantia.               │
│  Mentalidade: construir para quem vem depois.                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 11.3 Detalhamento

**FASE 1 — Automação (2023)**

```
Mentalidade: "Se eu posso automatizar, eu automatizo."

O que eu fazia: scripts Python, bots, automações simples.
O que eu NÃO pensava: manutenção, escala, documentação.

Lições:
- Automação sem documentação é dívida técnica
- Scripts soltos viram dependências críticas
- O que funciona pra um não funciona pra equipe
```

**FASE 2 — Integração (2024)**

```
Mentalidade: "O problema nunca é só técnico."

O que eu aprendi na Bunge:
- Dados em planilhas significam dados perdidos
- Processos manuais significam erros humanos
- Integração entre sistemas é mais importante que
  a qualidade de qualquer sistema isolado

O que mudou:
- Comecei a mapear processos antes de codar
- Entendi que APIs são contratos, não rotas
- Aprendi que Power BI não resolve se os dados
  não estão integrados
```

**FASE 3 — Plataformas (2025)**

```
Mentalidade: "Não construo features. Construo sistemas."

O que eu construí na SOSdocs:
- Plataforma full-stack com 12.500+ linhas
- Arquitetura dual-stack (Node.js + Python)
- RBAC, auditoria, integração com Google Workspace
- Upload e indexação documental automatizada

O que mudou:
- Arquitetura é decisão, não decoração
- Separação de responsabilidades é o único design pattern
  que realmente importa
- Um sistema sem testes é um sistema temporário
```

**FASE 4 — Engenharia (2026)**

```
Mentalidade: "Software precisa sobreviver a mim."

O que eu penso hoje:
- Todo sistema precisa de testes que protegem regressões
- Toda API precisa de contrato documentado
- Toda decisão de arquitetura precisa de justificativa
- Code review não é opcional, mesmo sozinho

O que eu busco:
- Atuar em engenharia de software em escala
- Trabalhar com equipes que valorizam qualidade
- Construir sistemas que duram anos, não meses
```

---

## 12. CURRÍCULO

### 12.1 Objetivo

Não é documento para RH.
É documento para CTO.

### 12.2 Ordem

```
Problemas que resolvo
↓
Especialidades
↓
Projetos
↓
Experiência
↓
Tecnologias
↓
Educação
↓
Idiomas
↓
Certificações
```

Tecnologias NUNCA abrem o currículo.

### 12.3 Estrutura

```
┌─────────────────────────────────────────────────────────────────┐
│  CURRÍCULO                                                      │
│  Caio Enrique Inácio de Almeida                                 │
│  [Download PDF]                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PROBLEMAS QUE RESOLVO                                          │
│  • Processos manuais que consomem tempo de pessoas              │
│  • Dados dispersos sem visão consolidada                        │
│  • Integrações entre APIs que não se comunicam                   │
│  • Documentos que precisam ser indexados automaticamente        │
│  • Dashboards que precisam ser atualizados manualmente           │
│  • Sistemas que funcionam mas que ninguém consegue manter        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ESPECIALIDADES                                                 │
│  Plataformas B2B · Automação Enterprise · Pipelines ETL         │
│  Dashboards Executivos · Integração Google Workspace            │
│  Sistemas RBAC · Auditoria · APIs REST · Document Processing    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PROJETOS RELEVANTES                                            │
│  Enterprise Dashboard    B2B dual-stack, 12.5k+ LOC             │
│  Portal Monorepo         Next.js + Python analytics             │
│  Health Analytics        ETL pipeline + dashboards               │
│  Aura Pilates            Full-stack, design Scandi-Boho          │
│  TaskFlow                JWT auth + Docker deployment            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EXPERIÊNCIA                                                    │
│  SOSdocs/SERPRO · Desenvolvedor Full-Stack · 2025-Atual         │
│  Bunge (Fortune 500) · Assistente de RH · 2024-2025             │
│  EasyTech · Assistente Administrativo · 2025                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STACK                                                          │
│  Python · FastAPI · Node.js · Express · Next.js · React         │
│  TypeScript · PostgreSQL · Docker · Git · Google Apps Script     │
│  Power BI · Selenium · OpenAI API · Google Gemini               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FORMAÇÃO                                                       │
│  Ciência da Computação · UniCEUB · 2025-2028 (4º semestre)      │
│  Técnico em Informática · ETB · Concluído                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  IDIOMAS                                                        │
│  Português (Nativo) · Inglês (B2+) · Espanhol (Básico)         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CERTIFICAÇÕES                                                  │
│  Banco de Dados com SQL                                         │
│  Python: lógica de programação e automação                      │
│  Java: desenvolvimento orientado a objetos                      │
│  C, C++ e C#: lógica de programação                             │
│  Desenvolvimento Web: HTML, CSS e JavaScript                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CONTATO                                                        │
│  caio.desenvolvedor2416@gmail.com · (61) 99235-4719             │
│  Brasília, DF · Disponível para estágio e posições júnior       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 13. CONTATO

### 13.1 Objetivo

Fácil, direto, sem frases de efeito.

### 13.2 Copy

```
Título: Contato

Todo sistema que construo começa com uma conversa.
Se você tem um problema que precisa ser resolvido,
ou quer conversar sobre engenharia de software,
estou disponível.

EMAIL
caio.desenvolvedor2416@gmail.com

LOCALIZAÇÃO
Brasília, DF

DISPONIBILIDADE
Estágio & Posições Júnior

REDES
GitHub · LinkedIn

FORMULÁRIO
Nome · Email · Mensagem
Mensagem placeholder: "Descreva o problema que você precisa resolver."
Botão: [Enviar Mensagem]

Estados:
- Idle: "Enviar Mensagem"
- Sending: "Enviando..."
- Success: "Mensagem enviada. Retornarei em até 24h."
- Error: "Erro no envio. Tente novamente ou envie um email direto."
```

---

## 14. UX — COMO PRENDER ATENÇÃO

### 14.1 Regra de Ouro

Cada scroll responde uma pergunta que o visitante está fazendo:

```
Scroll 1: "Quem é esse cara?" → Hero
Scroll 2: "Que tipo de trabalho ele faz?" → Posicionamento
Scroll 3: "Ele é bom?" → Números
Scroll 4: "O que ele faz exatamente?" → Especialidades
Scroll 5: "Como ele pensa?" → Filosofia
Scroll 6: "Posso ver exemplos?" → Projeto destaque
Scroll 7: "Ele já trabalhou em empresa?" → Experiência
Scroll 8: "O que diferencia ele?" → Diferenciais
Scroll 9: "Como falo com ele?" → CTA
```

### 14.2 Curiosidade

Criada através de:

1. **Linha de abertura incomum**: "Sistemas que resolvem problemas de empresa"
2. **Problema antes de solução**: mostra maturidade
3. **Um projeto destaque**: convida a explorar
4. **Engineering Principles**: cria desejo de ver como ele pensa

### 14.3 Carga Cognitiva

- Uma ideia por parágrafo
- Espaço entre seções
- Cards com poucos elementos
- Badges mono font para dados técnicos
- Hierarquia visual clara

### 14.4 Ritmo

```
Seção grande (texto) → Seção pequena (números)
Seção estática → Seção com hover
Seção densa → Seção com espaço
```

---

## 15. IMPLEMENTAÇÃO — ORDEM DE PRIORIDADE

### Fase 1: Fundação

1. Atualizar copy da Home
2. Atualizar navbar (ordem dos links)
3. Atualizar footer

### Fase 2: Páginas Core

4. Reescrever Sobre (jornada em 3 atos)
5. Reescrever Timeline (evolução de engenheiro)
6. Reescrever Currículo (impact-based)
7. Reescrever Contato

### Fase 3: Projetos

8. Atualizar estrutura dos projetos em `projects.ts`
9. Criar template de caso em `project-detail-content.tsx`
10. Reescrever copy dos 8 projetos

### Fase 4: Páginas Novas

11. Criar Engineering Principles (nova rota)
12. Criar How I Build Software (sub-rota)
13. Criar Behind the Architecture (sub-rota)
14. Criar Lessons Learned (sub-rota)

### Fase 5: Polish

15. Ajustar design system
16. Remover componentes não utilizados
17. Atualizar traduções PT/EN
18. Atualizar SPEC.md

---

_Fim do documento de redesign._
