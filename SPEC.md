# SPEC COMPLETA — Portfólio React (caio.dev)

> Documento gerado automaticamente em 08/07/2026. Cobertura total do projeto.

---

## 0. DESCRIBÇÃO PÁGINA A PÁGINA (CONTEÚDO COMPLETO)

> Cada seção abaixo descreve **exatamente** o que aparece em cada página, incluindo textos, frases, layout, componentes e fluxo de interação.

---

### 0.1 HOME (`/{locale}`)

**URL**: `/pt` ou `/en`

**Layout**: `MarketingLayout` → Navbar + main + Footer + ScrollToTop + Toaster

**Seções (em ordem de cima para baixo)**:

#### 1. Navbar (fixo no topo)

- Logo à esquerda: **caio** + `.dev` (cor primária)
- Links de navegação: Início, Sobre, Projetos, Timeline, Currículo, Contato
- Ícone Globe para toggle de idioma (mostra "PT" ou "EN")
- Ícone Sun/Moon para toggle de tema (dark/light)
- Mobile: hamburger menu que expande com os mesmos links
- Ao scrollar: fundo vira `bg-background/80 backdrop-blur-xl` com borda

#### 2. HeroSection (primeira seção)

- Fundo: WebGLShader (shader orgânico indigo/purple/teal) + BackgroundPaths (SVG paths animados) + blobs de cor difusos
- Layout grid de 2 colunas:
  - **Esquerda (texto)**:
    - "Olá, eu sou" (greeting)
    - **Caio Enrique** (nome, gradiente primary→purple)
    - **Full Stack Developer** (role, cor primária)
    - "Desenvolvedor Full Stack focado em criar aplicações modernas, escaláveis e com excelente experiência do usuário." (phrase)
    - 4 botões CTA:
      - "Ver Projetos" (primário, link /projetos)
      - "Download CV" (outline, link /curriculo)
      - "GitHub" (outline, link externo https://github.com/Caioe)
      - "LinkedIn" (outline, link externo https://linkedin.com/in/caioe/)
  - **Direita**: HeroOrbit (RadialOrbitalTimeline) com 10 skills orbitais

#### 3. StatsBar

- 6 estatísticas em grid (2 cols mobile, 6 desktop):
  - **5+** "Projetos no portfólio" (ícone FolderOpen, azul)
  - **3** "Demos ao vivo" (ícone Play, verde)
  - **4º** "Semestre na graduação" (ícone Globe, roxo)
  - **12.5k+** "Linhas em produção" (ícone BookOpen, âmbar)
  - **6+** "Tecnologias principais" (ícone Code2, ciano)
  - **2** "Provedores LLM integrados" (ícone Zap, rosa)

#### 4. HomeHighlights

- Título: "Destaques"
- Grid de 6 cards (2 cols mobile, 6 desktop):
  - "5+ projetos completos" (ícone FolderOpen)
  - "Automação com Python" (ícone Code2)
  - "APIs REST" (ícone Server)
  - "UI moderna" (ícone Monitor)
  - "Responsivo" (ícone Smartphone)
  - "Clean Architecture" (ícone Layers)
- Cada card: borda, fundo card, ícone em circle bg-primary/10, hover com scale e glow

#### 5. HomeFeaturedProject

- Fundo: `border-y border-border bg-card/30`
- Título: "Projeto em Destaque"
- Card grande dividido em 2 colunas:
  - **Esquerda**: placeholder gradiente com ícone Rocket e nome "Enterprise Dashboard"
  - **Direita**: Badge "fullstack", título "Enterprise Dashboard", subtítulo "B2B Platform · Dual-Stack Backend", descrição do projeto, tech stack badges (Node.js, Express, Python, FastAPI, OAuth2), botões: "Live Demo" (se demoUrl), "GitHub" (repoUrl), "Ver projetos"

#### 6. HomeTimeline

- Título: "Trajetória"
- Timeline vertical com 3 marcos:
  - **2024**: "Ciência da Computação" (ícone GraduationCap)
  - **2025**: "Desenvolvimento Full Stack" (ícone Code2)
  - **2026**: "Projetos completos · Busca por oportunidade internacional" (ícone Globe)
- Layout alternado (esquerda/direita no desktop), central line

#### 7. ContactCTA

- Card grande centralizado com borda
- Ícone Sparkles + tag "Vamos conversar"
- Título: "Entre em Contato"
- Subtítulo: "Disponível para oportunidades de estágio e posições júnior — presencial ou remota"
- Localização: "Brasília, DF" (ícone MapPin)
- Email: "caio.desenvolvedor2416@gmail.com" (ícone Mail)
- 2 botões:
  - "Fale Comigo" (primário, link /contato)
  - "Ver Currículo" (outline, link /curriculo)

#### 8. Footer

- 3 colunas:
  - **Brand**: logo "caio.dev" + descrição "Desenvolvedor Full Stack e Automação Enterprise. Construindo soluções web modernas com Python, React e Google Workspace."
  - **Links Rápidos**: Início, Sobre, Projetos, Timeline, Currículo, Contato, Engenharia
  - **Social**: GitHub (link externo), LinkedIn (link externo)
- Separator
- Linha inferior:
  - "© {ano} Caio Enrique. Todos os direitos reservados."
  - Badge "Aberto a oportunidades internacionais"
  - "Desenvolvido com ❤️ Python, React e Google Workspace"

---

### 0.2 SOBRE (`/{locale}/sobre`)

**URL**: `/pt/sobre` ou `/en/about` (meta title: "Sobre" / "About")

**Componente**: `AboutContent`

**Layout**: Grid 3 colunas (2 esquerda + 1 direita)

#### Hero Banner (topo)

- Fundo gradiente success→background→primary-muted
- Foto de perfil (`/images/profile.jpg`, 192x192px, borda primary/30, shadow)
- Tag: "Aberto a oportunidades na Irlanda e remoto internacional" (cor success)
- Título: "Sobre Mim"
- Subtítulo: "Desenvolvedor Full-Stack especializado em automação enterprise e integração ao Google Workspace"

#### Coluna Esquerda (2/3)

**1. Minha História** (Card)

- Título: "Minha História" (ícone Target)
- 3 parágrafos:
  - "Comecei a programar aos 15 anos por curiosidade, criando bots e automações simples. Percebi que programação era mais do que código — era sobre resolver problemas reais das pessoas."
  - "Escolhi Ciência da Computação porque queria entender como as coisas funcionam por baixo dos panos. Cada projeto que faço me aproxima do meu objetivo: construir soluções que fazem diferença."
  - "Meu objetivo é atuar como Desenvolvedor Full Stack em uma empresa de tecnologia de referência internacional, preferencialmente na Irlanda, trabalhando com equipes globais e evoluindo continuamente como engenheiro de software."

**2. Experiência Profissional** (timeline vertical)

- Título: "Experiência" (ícone Briefcase)
- 3 experiências com linha vertical gradiente e dots:
  - **SOSdocs** | "2025 - Atual" | "Desenvolvedor de Software"
    - "Concepção e manutenção de plataforma full-stack para gestão do ciclo de vida documental corporativo."
    - "Implementação de arquitetura híbrida com Python (FastAPI) e Node.js (Express), totalizando 12.500+ linhas em produção."
    - "Desenvolvimento de APIs REST com autenticação JWT, OAuth2 Google, middlewares e validação via Pydantic."
    - "Integração de OpenAI API e Google Gemini para validação documental."
    - Tech: Python, FastAPI, Node.js, Express, React, PostgreSQL, Docker
  - **EasyTech** | "Mai - Out 2025" | "Assistente Administrativo"
    - "Organização e consolidação de dados financeiros e operacionais no ERP TOTVS Protheus."
    - "Conferência e validação de notas fiscais, boletos e extratos bancários."
    - "Elaboração de controles internos e reportes gerenciais em Excel."
    - Tech: TOTVS Protheus, Excel, Power BI
  - **Bunge** | "Jan 2024 - Mai 2025" | "Assistente de Recursos Humanos"
    - "Gestão documental e manutenção de bases de colaboradores e prestadores de serviço."
    - "Desenvolvimento de dashboards em Power BI para indicadores de RH."
    - "Análise de dados em Excel e administração de bibliotecas SharePoint."
    - Tech: Power BI, Excel, SharePoint

#### Coluna Direita (1/3)

**1. Dados Pessoais** (Card)

- "Nome": Caio Enrique Inácio de Almeida
- "Localização": Brasília, DF, Brasil
- Email: caio.desenvolvedor2416@gmail.com
- Telefone: (61) 99235-4719
- Idiomas: PT, EN (B2+), ES

**2. Formação** (Card)

- "Bacharelado em Ciência da Computação" | UniCEUB | "2025 - 2028" | "4º semestre"
- "Técnico em Informática" | ETB | "Concluído"

**3. Soft Skills** (Card, grid 2x3)

- Comunicação, Trabalho em equipe, Organização, Resolução de problemas, Aprendizado rápido, Pensamento analítico

**4. Certificados** (Card)

- Banco de Dados com SQL
- Python: lógica de programação e automação
- Java: desenvolvimento orientado a objetos
- C, C++ e C#: lógica de programação
- Desenvolvimento Web: HTML, CSS e JavaScript

**5. Botão Download CV**

- "Baixar Currículo" com ícone Download → link para `/Caio_Enrique_Curriculo.pdf`

**6. Atividade Recente** (Card)

- Título: "Atividade Recente"
- 4 items estáticos de demo:
  - "feat: add engineering page and timeline" (portfolio-react, 2 horas atrás)
  - "fix: resolve analytics module loading" (PortalP, 5 horas atrás)
  - "Initial commit" (Fynnteck-Web, 1 dia atrás)
  - "feat: add audit logging system" (Enterprise-Dashboard, 2 dias atrás)

---

### 0.3 PROJETOS (`/{locale}/projetos`)

**URL**: `/pt/projetos` ou `/en/projects`

**Componente**: `ProjectsContent`

#### Header

- Badge: "Portfólio" / "Portfolio"
- Título: "Projetos"
- Subtítulo: "Soluções reais de automação empresarial, analytics e full-stack — da SOSdocs à faculdade"

#### Projetos em Destaque (banner)

- Card com borda primary/20 e gradiente
- Título: "Projetos em Destaque"
- Grid 2 colunas com os 2 primeiros projetos destacados (ProjectCard)

#### Filtros

- 5 botões: "Todos", "Full Stack", "Frontend", "Analytics", "Automação"
- Botão ativo: fundo primário, shadow-md

#### Grid de Projetos

- 3 colunas desktop, 2 tablet, 1 mobile
- Cada ProjectCard mostra:
  - Badge de categoria (cores por tipo: frontend=azul, fullstack=roxo, data=ciano, automation=âmbar)
  - Título do projeto
  - Subtítulo
  - Descrição (3 linhas max)
  - Tech stack badges (máx 5 + "+N")
  - Links: Repo, Demo (se existir), "Ver detalhes"

#### CTA GitHub (rodapé)

- "Quer ver mais?"
- "Confira todos os meus projetos no GitHub"
- Botão link para https://github.com/Caio-enriq

---

### 0.4 DETALHE DO PROJETO (`/{locale}/projetos/{slug}`)

**URL**: `/pt/projetos/enterprise-dashboard` (etc.)

**Componente**: `ProjectDetailContent`

#### Header

- Botão "Voltar" → /projetos
- Badge de categoria
- Título do projeto
- Subtítulo
- Botões: Repo (se repoUrl), Demo (se demoUrl)

#### Seções (em ordem):

1. **Descrição** — parágrafo com a description do projeto
2. **Por que foi feito?** — ícone Lightbulb âmbar, texto why
3. **Como foi feito?** — ícone Rocket, lista numerada dos passos (how)
4. **Resultados** — ícone CheckCircle verde, lista de features com dots verdes
5. **Tecnologias Utilizadas** — ícone Wrench, badges da techStack
6. **Impacto** — ícone Target verde, parágrafo de impacto

---

### 0.5 CONTATO (`/{locale}/contato`)

**URL**: `/pt/contato` ou `/en/contact`

**Componente**: `ContactContent`

#### Header

- Badge: "Fale Comigo"
- Título: "Entre em Contato"
- Subtítulo: "Vamos transformar seus processos juntos!"

#### Layout: Grid 5 colunas (2 esquerda + 3 direita)

**Coluna Esquerda**:

1. **Localização** (Card)

- Ícone MapPin
- "Brasília, DF, Brasil"
- "Região do Planalto Central"

2. **Email** (Card)

- Ícone Mail
- "caio.desenvolvedor2416@gmail.com"
- "Resposta em até 24h"

3. **Disponibilidade** (Card verde)

- "Disponível para oportunidades de estágio e posições júnior — presencial ou remota"

4. **Redes Sociais** (grid 2 colunas)

- LinkedIn (link externo, gradiente azul)
- GitHub (link externo, gradiente cinza)

5. **Mensagem rápida**

- "Vamos trabalhar juntos?"
- "Estou disponível para projetos freelance, collabs e oportunidades de trabalho."

**Coluna Direita (formulário)**:

- Título: "Envie uma mensagem"
- Subtítulo: "Preencha o formulário abaixo e entrarei em contato o mais breve possível."
- Campos:
  - Nome (input, placeholder "Seu nome", name="from_name")
  - Email (input type email, placeholder "Seu melhor email", name="from_email")
  - Mensagem (textarea 6 rows, placeholder "Descreva sua ideia ou projeto...", name="message")
- Botão "Fale Comigo" com estados:
  - Idle: ícone Send + "Fale Comigo"
  - Sending: Loader2 animando + "Enviando..."
  - Success: CheckCircle verde + "Mensagem enviada!"
  - Error: "Erro ao enviar. Tente novamente."
- Envio via EmailJS (service_id, template_id, public_key via env vars)

---

### 0.6 CURRÍCULO (`/{locale}/curriculo`)

**URL**: `/pt/curriculo` ou `/en/resume`

**Componente**: `ResumeContent`

#### Header

- Ícone FileText + título "Currículo" + nome "Caio Enrique Inácio de Almeida"
- Botões: "Portfólio" (outline, volta pra home), "PDF" (primário, download)

#### Layout: Grid 3 colunas (2 esquerda + 1 direita)

**Coluna Esquerda**:

1. **Objetivo Profissional** (Card)

- "Atuar como Engenheiro de Software em organização de tecnologia, com foco em desenvolvimento backend, arquitetura de sistemas, integração de APIs e soluções corporativas escaláveis."

2. **Resumo Profissional** (Card)

- "Profissional de tecnologia com experiência prática na construção de aplicações empresariais, pipelines automatizados de processamento documental e integração de sistemas com inteligência artificial. Responsável pelo desenvolvimento de plataforma full-stack com mais de 12.500 linhas de código para operações do SERPRO."

3. **Experiência Profissional** (timeline vertical com 3 experiências — mesma estrutura da página Sobre)

**Coluna Direita**:

1. **Formação Acadêmica** (Card)

- Bacharelado em Ciência da Computação — UniCEUB (2025-2028, 4º semestre)
- Técnico em Informática — ETB (Concluído)

2. **Competências Técnicas** (Card)

- 7 grupos com SkillTags coloridas por nível:
  - Linguagens: Python (advanced), JavaScript (advanced), SQL (advanced), Java (intermediate), C (intermediate), C++ (intermediate), C# (intermediate), HTML5 (advanced), CSS3 (advanced)
  - Backend e APIs: FastAPI, Express.js, REST, JWT (advanced), OAuth2, OpenAPI/Swagger (intermediate)
  - Frontend: React, Next.js, Tailwind CSS (advanced), Vue.js, Chart.js, Recharts (intermediate)
  - Dados: PostgreSQL (advanced), MySQL, SQLite, Prisma (intermediate), SQLAlchemy (advanced), DuckDB (beginner)
  - DevOps: Docker, Docker Compose, Vercel, Git, GitHub (advanced)
  - IA: OpenAI API, Google Apps Script, Selenium, Prompt Engineering (advanced), Google Gemini (intermediate)
  - Integração: Google Drive API, Google Sheets API, Google Workspace (advanced), Power BI (intermediate)

3. **Certificações** (Card)

- 5 certificados listados

4. **Idiomas** (Card)

- Português: Nativo
- Inglês: B2+
- Espanhol: Básico

---

### 0.7 ENGENHARIA (`/{locale}/engineering`)

**URL**: `/pt/engineering` ou `/en/engineering`

**Componente**: `EngineeringContent`

#### Header

- Badge: "Engineering"
- Título: "Engenharia"
- Subtítulo: "Decisões de arquitetura, padrões de design e escolhas técnicas por trás deste portfólio."

#### Seções:

**1. Tech Stack** (grid 4 colunas)

- 8 tecnologias com ícone e role:
  - Next.js 16 (Framework)
  - React 19 (UI Library)
  - TypeScript (Type Safety)
  - Tailwind CSS v4 (Styling)
  - shadcn/ui (Components)
  - Framer Motion (Animations)
  - next-intl (i18n)
  - Vercel (Deploy)

**2. Decisões de Arquitetura** (grid 3 colunas)

- 6 cards com ícone + título + descrição:
  - Feature-Based Architecture: "Organização por features em vez de por tipo de componente"
  - Design System Atomic: "Atomic Design: atoms, molecules, organisms"
  - Server Components por Padrão: "React Server por padrão, 'use client' apenas quando necessário"
  - i18n Routing: "Internacionalização com next-intl, suporte a PT/EN"
  - SEO Completo: "JSON-LD, OpenGraph, Twitter Cards, sitemap, robots.txt"
  - Testes Multi-camada: "Jest, Playwright, GitHub Actions"

**3. Princípios de Engenharia** (grid 3 colunas)

- 6 pills com ícone:
  - Zero hardcoded text
  - Type-safe everywhere
  - Accessibility first
  - Performance obsessed
  - Design tokens only
  - Feature isolation

**4. Qualidade de Código & Processo** (card grande, 3 colunas)

- Testes Multi-camada: "Jest + Playwright + GitHub Actions"
- Pipeline CI/CD: "Lint + Typecheck + Tests + Build"
- Segurança & Headers: "Headers + CSP + Env vars"

---

### 0.8 LINHA DO TEMPO (`/{locale}/timeline`)

**URL**: `/pt/timeline` ou `/en/timeline`

**Componente**: `TimelineContent`

#### Header

- Badge: "Linha do Tempo" / "Timeline"
- Título: "Minha evolução como Desenvolvedor"
- Subtítulo: "Próximos Objetivos"

#### Timeline (7 eventos, alternados esquerda/direita):

1. **2023** | "Início" | "Primeiros Passos na Programação"

- "Comecei a programar aos 15 anos por curiosidade, criando bots e automações simples..."
- Tags: Python, Bots, Automação
- Lado: esquerda

2. **2024** | "Janeiro" | "Ingresso na Bunge"

- "Comecei a trabalhar como Assistente de Recursos Humanos na Bunge, multinacional Fortune 500..."
- Tags: Power BI, Excel, SharePoint
- Lado: direita

3. **2024** | "Agosto" | "Ciência da Computação"

- "Ingresso no UniCEUB para Bacharelado em Ciência da Computação..."
- Tags: UniCEUB, Algoritmos, OOP
- Lado: esquerda

4. **2025** | "Janeiro" | "SOSdocs — Desenvolvedor"

- "Entry na SOSdocs (SAAN/SERPRO) como desenvolvedor full-stack..."
- Tags: Python, FastAPI, React, Apps Script
- Lado: direita

5. **2025** | "Maio" | "EasyTech — Assistente Administrativo"

- "Organização de dados financeiros no ERP TOTVS Protheus..."
- Tags: TOTVS, Excel, Power BI
- Lado: esquerda

6. **2025** | "Portfolio" | "Projetos Full-Stack"

- "Desenvolvimento de 8+ projetos completos: dashboards B2B, ETL pipelines, apps mobile-first, bots de IA. 12.500+ linhas em produção."
- Tags: Next.js, Python, Docker, AI
- Lado: direita

7. **2026** | "Objetivo" | "Oportunidade Internacional"

- "Busca ativa por estágio ou posição júnior em empresa de tecnologia internacional, preferencialmente na Irlanda..."
- Tags: Ireland, Remote, Full-Stack
- Lado: esquerda

---

### 0.9 PÁGINA 404 (`/{locale}/not-found`)

**Componente**: `LocaleNotFound`

- Círculo grande com "404" + ícone Search small
- Título: "Página Não Encontrada" (PT) / "Page Not Found" (EN)
- Descrição: "A página que você procura não existe ou foi movida." / "The page you're looking for doesn't exist or has been moved."
- 2 botões: "Ir para Home" (primário), "Voltar" (outline)

---

### 0.10 NAVBAR (todas as páginas)

**Links de navegação** (ordem):

1. Início (/)
2. Sobre (/sobre)
3. Projetos (/projetos)
4. Timeline (/timeline)
5. Currículo (/curriculo)
6. Contato (/contato)

**Nota**: O link "Engenharia" (/engineering) aparece apenas no Footer, não na Navbar principal.

---

### 0.11 FOOTER (todas as páginas)

- 3 colunas: Brand, Links Rápidos (7 links incluindo Engenharia), Social (GitHub + LinkedIn)
- Separator horizontal
- Copyright + badge "Aberto a oportunidades internacionais" + "Desenvolvido com ❤️ Python, React e Google Workspace"

---

## 1. VISÃO GERAL

| Campo         | Valor                                   |
| ------------- | --------------------------------------- |
| **Nome**      | portfolio-react                         |
| **Versão**    | 0.1.0                                   |
| **Framework** | Next.js 16.2.9 (App Router + Turbopack) |
| **React**     | 19.2.4                                  |
| **Linguagem** | TypeScript 5                            |
| **Estilo**    | Tailwind CSS v4 + shadcn/ui (base-nova) |
| **i18n**      | next-intl 4.13.0 (PT/EN)                |
| **Deploy**    | Vercel                                  |
| **Domínio**   | caio.dev                                |
| **Autor**     | Caio Enrique Inácio de Almeida          |

---

## 2. ESTRUTURA DE DIRETÓRIOS

```
portfolio-react/
├── .github/workflows/ci.yml    # CI/CD GitHub Actions
├── .husky/                     # Git hooks (pre-commit)
├── .next/                      # Build output (Next.js)
├── .swc/                       # SWC cache
├── __tests__/                  # Testes unitários Jest
│   ├── projects.test.ts
│   └── resume.test.ts
├── e2e/                        # Testes E2E Playwright
│   └── navigation.spec.ts
├── public/                     # Assets estáticos
│   ├── Caio_Enrique_Curriculo.pdf
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── icons/              # (vazio)
│   │   ├── projects/           # SVGs de projetos
│   │   │   ├── docz-upload.svg
│   │   │   ├── enterprise-dashboard.svg
│   │   │   ├── fynnteck.svg
│   │   │   ├── health-analytics.svg
│   │   │   └── portal-monorepo.svg
│   │   └── skills/             # Imagens de skills
│   │       ├── CSS.png, HTML.png, Java.png
│   │       ├── Selenium_Logo.png
│   │       ├── python.jpg, vscode.png
│   ├── file.svg, globe.svg, next.svg, vercel.svg, window.svg
├── src/
│   ├── app/                    # App Router (rotas)
│   │   ├── [locale]/           # Rotas com locale dinâmico
│   │   │   ├── layout.tsx      # Layout raiz
│   │   │   ├── page.tsx        # Home
│   │   │   ├── globals.css     # Estilos globais + CSS variables
│   │   │   ├── sobre/page.tsx
│   │   │   ├── projetos/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── contato/page.tsx
│   │   │   └── curriculo/page.tsx
│   │   ├── favicon.ico
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── atoms/              # Componentes atômicos
│   │   ├── molecules/          # Componentes moleculares
│   │   ├── organisms/          # Componentes orgânicos
│   │   ├── seo/                # SEO/JSON-LD
│   │   ├── templates/          # Layouts
│   │   └── ui/                 # shadcn/ui primitives
│   ├── content/                # (VAZIO — não utilizado)
│   ├── data/                   # Dados estáticos
│   ├── i18n/                   # Configuração next-intl
│   ├── lib/                    # Utilitários
│   ├── messages/               # Traduções JSON
│   └── types/                  # Tipagens TypeScript
├── Config files (raiz)
└── node_modules/
```

---

## 3. DEPENDÊNCIAS

### 3.1 Production Dependencies

| Pacote                     | Versão   | Uso                                              |
| -------------------------- | -------- | ------------------------------------------------ |
| `next`                     | 16.2.9   | Framework React com App Router                   |
| `react`                    | 19.2.4   | UI library                                       |
| `react-dom`                | 19.2.4   | DOM renderer                                     |
| `next-intl`                | ^4.13.0  | Internacionalização (PT/EN)                      |
| `next-themes`              | ^0.4.6   | Dark/Light mode                                  |
| `framer-motion`            | ^12.42.0 | Animações                                        |
| `@base-ui/react`           | ^1.6.0   | Primitivas UI (shadcn v4)                        |
| `shadcn`                   | ^4.12.0  | CLI shadcn/ui                                    |
| `class-variance-authority` | ^0.7.1   | Variants de estilos                              |
| `clsx`                     | ^2.1.1   | Classnames condicionais                          |
| `tailwind-merge`           | ^3.6.0   | Merge de classes Tailwind                        |
| `tw-animate-css`           | ^1.4.0   | Animações Tailwind                               |
| `lucide-react`             | ^1.22.0  | Ícones                                           |
| `@emailjs/browser`         | ^4.4.1   | Envio de email (contato)                         |
| `@vercel/analytics`        | ^2.0.1   | Analytics Vercel                                 |
| `@vercel/speed-insights`   | ^2.0.0   | Speed Insights Vercel                            |
| `sonner`                   | ^2.0.7   | Toast notifications                              |
| `three`                    | ^0.185.0 | WebGL/Three.js (declarado mas **não utilizado**) |

### 3.2 Dev Dependencies

| Pacote                        | Versão  | Uso                     |
| ----------------------------- | ------- | ----------------------- |
| `typescript`                  | ^5      | Type checking           |
| `tailwindcss`                 | ^4      | CSS utility-first       |
| `@tailwindcss/postcss`        | ^4      | PostCSS plugin          |
| `eslint`                      | ^9      | Linting                 |
| `eslint-config-next`          | 16.2.9  | ESLint rules Next.js    |
| `prettier`                    | ^3.9.3  | Code formatting         |
| `prettier-plugin-tailwindcss` | ^0.8.0  | Sort classes Tailwind   |
| `jest`                        | ^30.4.2 | Unit testing            |
| `jest-environment-jsdom`      | ^30.4.1 | DOM environment Jest    |
| `@testing-library/react`      | ^16.3.2 | React testing utilities |
| `@testing-library/jest-dom`   | ^6.9.1  | DOM matchers            |
| `@playwright/test`            | ^1.61.1 | E2E testing             |
| `husky`                       | ^9.1.7  | Git hooks               |
| `lint-staged`                 | ^16.4.0 | Pre-commit linting      |
| `ts-node`                     | ^10.9.2 | TS execution            |

---

## 4. SCRIPTS

| Script          | Comando                | Descrição                               |
| --------------- | ---------------------- | --------------------------------------- |
| `dev`           | `next dev`             | Servidor de desenvolvimento (Turbopack) |
| `build`         | `next build`           | Build de produção                       |
| `start`         | `next start`           | Servidor de produção                    |
| `lint`          | `eslint`               | Verificação de lint                     |
| `lint:fix`      | `eslint --fix`         | Auto-correção de lint                   |
| `format`        | `prettier --write .`   | Formatação de código                    |
| `format:check`  | `prettier --check .`   | Verificação de formatação               |
| `typecheck`     | `tsc --noEmit`         | Type checking sem emit                  |
| `test`          | `jest`                 | Testes unitários                        |
| `test:watch`    | `jest --watch`         | Testes em watch mode                    |
| `test:coverage` | `jest --coverage`      | Testes com cobertura                    |
| `test:e2e`      | `playwright test`      | Testes E2E                              |
| `test:e2e:ui`   | `playwright test --ui` | E2E com UI do Playwright                |
| `prepare`       | `husky`                | Setup de git hooks                      |

---

## 5. CONFIGURAÇÕES

### 5.1 next.config.ts

- Plugin `next-intl` via `createNextIntlPlugin()`
- Config Next.js vazia (default)

### 5.2 tsconfig.json

- `target: ES2017`, `module: esnext`, `moduleResolution: bundler`
- `strict: true`, `noEmit: true`
- Path alias: `@/*` → `./src/*`
- JSX: `react-jsx`
- Plugins: `next`

### 5.3 postcss.config.mjs

- Plugin: `@tailwindcss/postcss` (Tailwind v4)

### 5.4 eslint.config.mjs

- ESLint 9 flat config
- Extends: `eslint-config-next/core-web-vitals` + `typescript`
- Ignores: `.next/**`, `out/**`, `build/**`, `next-env.d.ts`

### 5.5 .prettierrc

- `semi: true`, `singleQuote: false`, `tabWidth: 2`
- `trailingComma: "es5"`, `printWidth: 100`
- Plugin: `prettier-plugin-tailwindcss`

### 5.6 components.json (shadcn)

- Style: `base-nova`
- RSC: `true`
- Base color: `neutral`
- CSS variables: `true`
- Icon library: `lucide`

### 5.7 vercel.json

- Framework: `nextjs`
- Headers de segurança: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`
- Cache headers para `/images/*` (1 ano, immutable)
- Redirects: `/github` → GitHub, `/linkedin` → LinkedIn

### 5.8 jest.config.ts

- Environment: `jsdom`
- Setup: `jest.setup.ts` (`@testing-library/jest-dom`)
- Module alias: `@/` → `<rootDir>/src/`
- Ignora: `node_modules/`, `.next/`, `e2e/`

### 5.9 playwright.config.ts

- Dir: `./e2e`
- Base URL: `http://localhost:3000`
- Browser: Chromium
- WebServer: `npm run dev`
- Retries: 2 (CI), 0 (local)

---

## 6. SISTEMA DE ROTAS (App Router)

### 6.1 Rotas definidas

| Rota                        | Arquivo                                     | Descrição                                                           |
| --------------------------- | ------------------------------------------- | ------------------------------------------------------------------- |
| `/{locale}`                 | `src/app/[locale]/page.tsx`                 | **Home** — Hero, Stats, Highlights, Featured, Timeline, Contact CTA |
| `/{locale}/sobre`           | `src/app/[locale]/sobre/page.tsx`           | **Sobre** — AboutContent                                            |
| `/{locale}/projetos`        | `src/app/[locale]/projetos/page.tsx`        | **Projetos** — ProjectsContent com filtros                          |
| `/{locale}/projetos/{slug}` | `src/app/[locale]/projetos/[slug]/page.tsx` | **Detalhe do Projeto** — ProjectDetailContent                       |
| `/{locale}/contato`         | `src/app/[locale]/contato/page.tsx`         | **Contato** — ContactContent (formulário EmailJS)                   |
| `/{locale}/curriculo`       | `src/app/[locale]/curriculo/page.tsx`       | **Currículo** — ResumeContent                                       |
| `/{locale}/engineering`     | `src/app/[locale]/engineering/page.tsx`     | **Engenharia** — EngineeringContent                                 |
| `/{locale}/timeline`        | `src/app/[locale]/timeline/page.tsx`        | **Linha do Tempo** — TimelineContent                                |
| `/sitemap.xml`              | `src/app/sitemap.ts`                        | Sitemap dinâmico                                                    |
| `/robots.txt`               | `src/app/robots.ts`                         | Robots.txt                                                          |

### 6.2 Configuração i18n

- Locales: `["pt", "en"]`
- Default: `"pt"`
- Locale prefix: `"as-needed"` (URL sem prefixo para default)
- Locale dinâmico via `[locale]` segment

### 6.3 Geração Estática

- `generateStaticParams()` retorna todos os locales
- `generateStaticParams()` no `[slug]` retorna todos os slugs de projetos

---

## 7. COMPONENTES

### 7.1 Atomic Design — Átomos (`src/components/atoms/`)

| Componente       | Arquivo               | Props                           | Descrição                                    |
| ---------------- | --------------------- | ------------------------------- | -------------------------------------------- |
| `GlowCard`       | `glow-card.tsx`       | `children, className`           | Card com efeito glow no hover                |
| `MagneticButton` | `magnetic-button.tsx` | `children, className, strength` | Botão com efeito magnético (seguir mouse)    |
| `SkillTag`       | `skill-tag.tsx`       | `name, level, className`        | Badge de skill com cores por nível           |
| `SkipToContent`  | `skip-to-content.tsx` | —                               | Link de acessibilidade "Pular para conteúdo" |
| `SocialLink`     | `social-link.tsx`     | `href, label, icon, className`  | Link social com ícone                        |

### 7.2 Molecular (`src/components/molecules/`)

| Componente       | Arquivo               | Descrição                                                                       |
| ---------------- | --------------------- | ------------------------------------------------------------------------------- |
| `HeroOrbit`      | `hero-orbit.tsx`      | Timeline orbital interativa com 10 skills (RadialOrbitalTimeline)               |
| `StatsBar`       | `stats-bar.tsx`       | Barra de estatísticas (6 itens: projetos, demos, semestre, linhas, techs, LLMs) |
| `ProjectCard`    | `project-card.tsx`    | Card de projeto com link, badge, tech stack, categorias                         |
| `TimelineItem`   | `timeline-item.tsx`   | Item de timeline alternado (esquerda/direita)                                   |
| `ScrollToTop`    | `scroll-to-top.tsx`   | Botão flutuante "voltar ao topo" (aparece após 400px scroll)                    |
| `PageTransition` | `page-transition.tsx` | Animação de transição entre páginas (não utilizado nas rotas)                   |

### 7.3 Orgânico (`src/components/organisms/`)

| Componente             | Arquivo                      | Descrição                                                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------ |
| `Navbar`               | `navbar.tsx`                 | Header fixo com nav links, toggle tema, toggle idioma, menu mobile             |
| `Footer`               | `footer.tsx`                 | Rodapé com links, redes sociais, copyright                                     |
| `HeroSection`          | `hero-section.tsx`           | Seção hero com nome, role, CTA buttons, orbital skills                         |
| `HomeHighlights`       | `home-highlights.tsx`        | Grid de 6 destaques (projetos, automação, APIs, UI, responsivo, arquitetura)   |
| `HomeFeaturedProject`  | `home-featured-project.tsx`  | Projeto destaque (Enterprise Dashboard)                                        |
| `HomeTimeline`         | `home-timeline.tsx`          | Timeline vertical com 3 marcos (2024-2026)                                     |
| `ContactCTA`           | `contact-cta.tsx`            | CTA de contato na home                                                         |
| `AboutContent`         | `about-content.tsx`          | Página completa "Sobre" com foto, história, experiência, skills, certificações |
| `ProjectsContent`      | `projects-content.tsx`       | Lista de projetos com filtros por categoria                                    |
| `ProjectDetailContent` | `project-detail-content.tsx` | Detalhe do projeto (descrição, como/por que foi feito, tech stack)             |
| `ContactContent`       | `contact-content.tsx`        | Formulário de contato com EmailJS                                              |
| `ResumeContent`        | `resume-content.tsx`         | Currículo completo (experiência, educação, skills, certificações)              |
| `HomeAbout`            | `home-about.tsx`             | Seção "Sobre" na home (**não utilizado na home page**)                         |
| `HomeProjects`         | `home-projects.tsx`          | Seção "Projetos" na home (**não utilizado na home page**)                      |
| `TechStackSection`     | `tech-stack-section.tsx`     | Seção Tech Stack (**não utilizada em nenhuma página**)                         |

### 7.4 Templates (`src/components/templates/`)

| Componente        | Arquivo                | Descrição                                                                                       |
| ----------------- | ---------------------- | ----------------------------------------------------------------------------------------------- |
| `MarketingLayout` | `marketing-layout.tsx` | Layout padrão: SkipToContent + BackgroundPaths + Navbar + main + Footer + ScrollToTop + Toaster |

### 7.5 UI (`src/components/ui/` — shadcn/ui)

| Componente              | Arquivo                       | Base                                                  |
| ----------------------- | ----------------------------- | ----------------------------------------------------- |
| `Button`                | `button.tsx`                  | `@base-ui/react/button` + CVA                         |
| `ButtonLink`            | `button-link.tsx`             | Link do next-intl + Button variants                   |
| `Badge`                 | `badge.tsx`                   | `@base-ui/react/merge-props` + CVA                    |
| `Card`                  | `card.tsx`                    | React native div com data-slot                        |
| `Separator`             | `separator.tsx`               | `@base-ui/react/separator`                            |
| `Dialog`                | `dialog.tsx`                  | `@base-ui/react/dialog`                               |
| `DropdownMenu`          | `dropdown-menu.tsx`           | `@base-ui/react/menu`                                 |
| `Input`                 | `input.tsx`                   | `@base-ui/react/input`                                |
| `Textarea`              | `textarea.tsx`                | React textarea                                        |
| `ScrollArea`            | `scroll-area.tsx`             | `@base-ui/react/scroll-area`                          |
| `Sonner`                | `sonner.tsx`                  | `sonner` (toast)                                      |
| `BackgroundPaths`       | `background-paths.tsx`        | SVG animado com framer-motion                         |
| `WebGLShader`           | `web-gl-shader.tsx`           | Canvas WebGL com shader fragment (FBM noise orgânico) |
| `RadialOrbitalTimeline` | `radial-orbital-timeline.tsx` | Timeline orbital radial interativa com canvas CSS     |

### 7.6 SEO (`src/components/seo/`)

| Componente        | Arquivo       | Descrição                  |
| ----------------- | ------------- | -------------------------- |
| `PersonJsonLd`    | `json-ld.tsx` | Schema.org Person JSON-LD  |
| `PortfolioJsonLd` | `json-ld.tsx` | Schema.org WebSite JSON-LD |

### 7.7 Providers

| Componente          | Arquivo                  | Descrição                                      |
| ------------------- | ------------------------ | ---------------------------------------------- |
| `ThemeProvider`     | `theme-provider.tsx`     | Wrapper `next-themes`                          |
| `AnalyticsProvider` | `analytics-provider.tsx` | `@vercel/analytics` + `@vercel/speed-insights` |

---

## 8. DADOS

### 8.1 Projetos (`src/data/projects.ts`)

8 projetos cadastrados:

| ID                     | Slug                    | Título                      | Categoria  | Destacado | Demo | Repo |
| ---------------------- | ----------------------- | --------------------------- | ---------- | --------- | ---- | ---- |
| `enterprise-dashboard` | `enterprise-dashboard`  | Enterprise Dashboard        | fullstack  | ✅        | ❌   | ✅   |
| `portal-monorepo`      | `portal-monorepo`       | Unified Portal Monorepo     | fullstack  | ✅        | ❌   | ✅   |
| `health-analytics`     | `health-data-analytics` | Health Data Analytics       | data       | ✅        | ❌   | ✅   |
| `fynnteck`             | `fynnteck-web`          | Fynnteck — Personal Finance | frontend   | ✅        | ✅   | ✅   |
| `fintrack`             | `fintrack`              | FinTrack — Smart Finance    | frontend   | ❌        | ❌   | ✅   |
| `aura-pilates`         | `aura`                  | Aura Pilates                | fullstack  | ✅        | ❌   | ✅   |
| `taskflow`             | `taskflow`              | TaskFlow                    | fullstack  | ✅        | ❌   | ✅   |
| `quiz-bot`             | `bot-quiz`              | Quiz Bot Pro                | automation | ❌        | ❌   | ✅   |

Funções auxiliares:

- `getProjectBySlug(slug)` → busca por slug
- `getFeaturedProjects()` → filtra destaque
- `getProjectsByCategory(category)` → filtra por categoria

### 8.2 Currículo (`src/data/resume.ts`)

- Versões: PT e EN
- Experiências: 3 (SOSdocs, EasyTech, Bunge)
- Educação: 2 (UniCEUB CS, ETB Técnico)
- Skill Groups: 7 categorias (Linguagens, Backend, Frontend, Dados, DevOps, IA, Integração)
- Certificações: 5 cursos
- Contato: telefone, email, localização
- Soft Skills: 6 itens
- Idiomas: 3 (PT nativo, EN B2+, ES básico)

### 8.3 Traduções (`src/data/translations.ts`)

- Chaves de tradução PT/EN para: nav, hero, about, stats, projects, resume, contact, footer, timeline

### 8.4 Mensagens (`src/messages/`)

- `pt.json` e `en.json` — Usados pelo `next-intl`
- Estrutura: nav, hero, stats, about, projects, resume, contact, footer, home (about, projects, highlights, featured, timeline), timeline

---

## 9. TIPOS (`src/types/index.ts`)

```typescript
type Locale = "pt" | "en"

interface Project {
  id, slug, title, subtitle, description, descriptionEn?,
  longDescription?, techStack[], features[], featuresEn?,
  tags?, imageUrl?, imageAlt?, videoUrl?, demoUrl?, repoUrl?,
  category: "frontend"|"backend"|"fullstack"|"automation"|"data",
  badge?, status: "completed"|"in-progress"|"archived",
  featured?, year?, why?, whyEn?, how?, howEn?, impact?, impactEn?
}

interface ResumeExperience {
  id, company, role, period, location?, description[], techStack[]
}

interface ResumeEducation {
  id, institution, degree, period, status, description?
}

interface ResumeSkill {
  name, level: "expert"|"advanced"|"intermediate"|"beginner"
}
```

---

## 10. TEMA & ESTILOS

### 10.1 CSS Variables (globals.css)

**Dark Mode (default):**

- `--background: #09090b` (quase preto)
- `--foreground: #fafafa` (branco)
- `--primary: #818cf8` (indigo-400)
- `--accent: #818cf8`
- `--card: #0f0f12`
- `--border: rgba(255, 255, 255, 0.08)`
- `--radius: 0.625rem`

**Light Mode:**

- `--background: #fafafa`
- `--foreground: #09090b`
- `--primary: #4f46e5` (indigo-600)
- `--card: #ffffff`
- `--border: rgba(0, 0, 0, 0.08)`

### 10.2 Fontes

- `Inter` (variável: `--font-inter`) — fonte principal
- `JetBrains Mono` (variável: `--font-jetbrains-mono`) — fonte monospace

### 10.3 Acessibilidade

- `:focus-visible` com outline-ring
- `prefers-reduced-motion: reduce` — desativa animações
- Skip-to-content link
- `aria-label` na navegação
- `suppressHydrationWarning` no `<html>`

---

## 11. EFEITOS VISUAIS

1. **WebGL Shader** (`web-gl-shader.tsx`): Fragment shader com FBM noise orgânico, paleta indigo/purple/teal, vignette, pulsos de luminosidade
2. **Background Paths** (`background-paths.tsx`): 6 SVG paths animados com gradientes indigo/purple
3. **Radial Orbital Timeline** (`radial-orbital-timeline.tsx`): Timeline orbital CSS com:
   - Rotação automática
   - Animação de energia por skill
   - Glow/pulse em skills relacionadas
   - Cards expandidos com detalhes, projetos e experiência
4. **Framer Motion**: Animações de entrada (fade, slide, scale) em todas as seções
5. **Magnetic Button**: Efeito de atração magnética no mouse
6. **Glow Card**: Efeito de brilho no hover

---

## 12. TESTES

### 12.1 Unit Tests (Jest)

**`__tests__/projects.test.ts`** (5 testes):

- Array de projetos existe e tem itens
- `getProjectBySlug()` retorna projeto existente
- `getProjectBySlug()` retorna undefined para slug inexistente
- `getFeaturedProjects()` retorna apenas featured
- Cada projeto tem campos obrigatórios (id, slug, title, description, techStack)

**`__tests__/resume.test.ts`** (6 testes):

- Versões PT e EN existem
- Estrutura idêntica para ambos os locales
- Experiências existem
- Educação existe
- Skill groups existem com títulos e skills
- Contato tem email, phone, location

### 12.2 E2E Tests (Playwright)

**`e2e/navigation.spec.ts`** (6 testes):

- Home page carrega com título correto
- Hero section visível
- Navegação para projetos funciona
- Toggle de tema funciona
- Projetos page mostra cards e filtra
- Navegação entre páginas e toggle de locale

---

## 13. CI/CD

### 13.1 GitHub Actions (`.github/workflows/ci.yml`)

4 jobs paralelos:

| Job       | Steps                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| **lint**  | checkout → setup node 20 → npm ci → lint → format:check → typecheck                                                  |
| **test**  | checkout → setup node 20 → npm ci → test --coverage                                                                  |
| **build** | checkout → setup node 20 → npm ci → build                                                                            |
| **e2e**   | checkout → setup node 20 → npm ci → playwright install → build → start → wait-on → playwright test → upload artifact |

Triggers: push/PR para `main`

### 13.2 Husky + lint-staged

- **pre-commit**: `*.{ts,tsx}` → `eslint --fix` + `prettier --write`; `*.{json,css,md}` → `prettier --write`

---

## 14. ERROS E WARNINGS IDENTIFICADOS

### 14.1 🔴 ERRO: `footer.description` — Chave de tradução ausente

**Status**: ERRO CRÍTICO — Afeta PT e EN

```
Error: MISSING_MESSAGE: Could not resolve `footer.description` in messages for locale `en`.
Error: MISSING_MESSAGE: Could not resolve `footer.description` in messages for locale `pt`.
```

**Local do erro**: `src/components/organisms/footer.tsx:34`

```tsx
<p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed">
  {t("description")} // ← Chave NÃO existe em en.json nem em pt.json
</p>
```

**Causa**: O componente `Footer` usa `useTranslations("footer")` e chama `t("description")`, mas a chave `"description"` não existe dentro do objeto `"footer"` nos arquivos de mensagem.

**Arquivos afetados**:

- `src/messages/en.json` — seção `"footer"` não tem `"description"`
- `src/messages/pt.json` — seção `"footer"` não tem `"description"`

**Fix necessário**: Adicionar `"description"` em ambos os JSONs:

```json
// en.json
"footer": {
  "description": "Full-Stack Developer & Enterprise Automation. Building modern web solutions.",
  ...
}

// pt.json
"footer": {
  "description": "Desenvolvedor Full Stack e Automação. Construindo soluções web modernas.",
  ...
}
```

### 14.2 ⚠️ WARNING: `scroll-behavior: smooth` no `<html>`

```
Detected `scroll-behavior: smooth` on the `<html>` element.
To disable smooth scrolling during route transitions, add `data-scroll-behavior="smooth"` to your <html> element.
```

**Local**: `src/app/[locale]/globals.css` → `html { @apply scroll-smooth; }`

**Fix**: Remover `scroll-smooth` do CSS e adicionar `data-scroll-behavior="smooth"` no `<html>` do layout.

### 14.3 ⚠️ Componentes não utilizados

Os seguintes componentes estão definidos mas **não são importados** em nenhuma página:

| Componente         | Arquivo                                           |
| ------------------ | ------------------------------------------------- |
| `HomeAbout`        | `src/components/organisms/home-about.tsx`         |
| `HomeProjects`     | `src/components/organisms/home-projects.tsx`      |
| `TechStackSection` | `src/components/organisms/tech-stack-section.tsx` |
| `PageTransition`   | `src/components/molecules/page-transition.tsx`    |
| `TimelineItem`     | `src/components/molecules/timeline-item.tsx`      |
| `MagneticButton`   | `src/components/atoms/magnetic-button.tsx`        |
| `GlowCard`         | `src/components/atoms/glow-card.tsx`              |
| `SocialLink`       | `src/components/atoms/social-link.tsx`            |
| `SkillTag`         | `src/components/atoms/skill-tag.tsx`              |
| `Dialog*`          | `src/components/ui/dialog.tsx`                    |
| `DropdownMenu*`    | `src/components/ui/dropdown-menu.tsx`             |
| `Input`            | `src/components/ui/input.tsx`                     |
| `Textarea`         | `src/components/ui/textarea.tsx`                  |
| `ScrollArea`       | `src/components/ui/scroll-area.tsx`               |

### 14.4 ⚠️ Dependência `three` não utilizada

`three` (^0.185.0) está listada em `dependencies` mas não é importada em nenhum componente. Pode ser removida.

### 14.5 ⚠️ Diretório `content/` vazio

`src/content/` existe mas está vazio. Provavelmente planejado para conteúdo MDX mas nunca implementado.

### 14.6 ⚠️ `public/images/icons/` vazio

Pasta de ícones criada mas sem arquivos.

### 14.7 ⚠️ Porta 3000 em uso

Ao rodar `npm run dev`, a porta 3000 já está em uso e o Next.js usa 3001 automaticamente.

---

## 15. ENV VARIABLES

### .env.example

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bq7778p
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_cntg0pb
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_SITE_URL=https://caio.dev
```

### .env.local.example

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bq7778p
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_cntg0pb
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Nota**: Não há `.env.local` no repositório (corretamente no `.gitignore`). O formulário de contato precisa dessas variáveis para funcionar.

---

## 16. SEO

- **Title**: "Caio Enrique | Portfólio" (PT) / "Caio Enrique | Portfolio" (EN)
- **Description**: Meta description dinâmica por locale
- **OpenGraph**: type website, locale pt_BR/en_US
- **Twitter**: summary_large_image
- **JSON-LD**: Person + WebSite schemas
- **Robots**: allow all, sitemap em `caio.dev/sitemap.xml`
- **Sitemap**: Gera URLs para todas as rotas + projetos, em ambos os locales
- **Keywords**: Caio Enrique, desenvolvedor full stack, portfolio, React, Next.js, TypeScript

---

## 17. MÉTRICAS DO PROJETO

| Métrica                                 | Valor                 |
| --------------------------------------- | --------------------- |
| Total de arquivos TypeScript/TSX (src/) | ~55                   |
| Componentes React                       | ~40                   |
| Páginas/rotas                           | 7 (+sitemap, +robots) |
| Projetos cadastrados                    | 8                     |
| Testes unitários                        | 11                    |
| Testes E2E                              | 6                     |
| Traduções (PT/EN)                       | ~120 chaves cada      |
| Dependências production                 | 16                    |
| Dependências dev                        | 16                    |

---

## 18. RESUMO DOS ISSUES PARA CORREÇÃO

| #   | Prioridade | Issue                                                         | Arquivo                                                        |
| --- | ---------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| 1   | 🔴 Alta    | `footer.description` ausente nos JSONs de tradução            | `src/messages/en.json`, `src/messages/pt.json`                 |
| 2   | 🟡 Média   | `scroll-behavior: smooth` deveria usar `data-scroll-behavior` | `src/app/[locale]/globals.css`, `layout.tsx`                   |
| 3   | 🟡 Média   | `three` não utilizada — remover de dependencies               | `package.json`                                                 |
| 4   | 🟢 Baixa   | Componentes não utilizados (dead code)                        | Vários arquivos em `organisms/`, `atoms/`, `molecules/`, `ui/` |
| 5   | 🟢 Baixa   | Diretório `src/content/` vazio                                | `src/content/`                                                 |
| 6   | 🟢 Baixa   | `public/images/icons/` vazio                                  | `public/images/icons/`                                         |

---

_Fim da spec._
