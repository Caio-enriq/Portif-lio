# Spec — Estado Atual do Portfólio React

Última atualização desta spec: 14 de julho de 2026.

Esta spec descreve como o portfólio em React/Next.js está estruturado hoje: tecnologias, páginas, componentes, textos, versão em inglês, imagens, animações, dados profissionais, projetos, testes e pontos de atenção.

## 1. Visão Geral

O projeto principal do portfólio fica em `portfolio-react/`. Ele é uma aplicação Next.js com App Router, internacionalização PT/EN, páginas estáticas geradas por locale, animações com Framer Motion, design system próprio sobre Tailwind CSS v4/shadcn e dados locais em TypeScript/JSON.

O posicionamento atual do portfólio é:

- PT: Engenheiro de Software focado em backend, automação e integração de IA para processos reais.
- EN: Software Engineer focused on backend, automation, and AI integration for real-world processes.

O site é mais do que uma vitrine de projetos. Ele funciona como uma narrativa profissional: problema, pensamento, arquitetura, solução e resultado.

## 2. Stack Técnica

### Core

- Next.js `16.2.9`
- React `19.2.4`
- React DOM `19.2.4`
- TypeScript `5`
- Tailwind CSS `4`
- next-intl `4.13.0`
- Framer Motion `12.42.0`
- lucide-react `1.22.0`
- shadcn/Tailwind helpers
- Base UI

### UI e estilo

- Tailwind CSS v4 com tokens customizados em `src/app/[locale]/globals.css`.
- shadcn importado via `@import "shadcn/tailwind.css"`.
- `tw-animate-css` para utilitários de animação.
- `class-variance-authority`, `clsx` e `tailwind-merge` para composição de classes.
- Ícones majoritariamente via `lucide-react`.

### Qualidade e testes

- ESLint `9`
- TypeScript `tsc --noEmit`
- Jest configurado
- Playwright para E2E
- Prettier com plugin Tailwind
- Scripts principais:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run typecheck`
  - `npm run test`
  - `npm run test:e2e`

### Observação sobre build

O build usa `next/font/google` com Inter e JetBrains Mono. Em ambientes sem rede, o build pode falhar ao buscar fontes no Google. Com rede liberada, o build passa.

## 3. Estrutura de Rotas

As rotas ficam em `src/app/[locale]/`, com locale obrigatório.

Locales configurados:

- `pt`
- `en`

Configuração:

- `src/i18n/routing.ts`
- `localePrefix: "always"`
- Rotas finais seguem formato `/pt/...` e `/en/...`.

Páginas atuais:

- `/[locale]`: home
- `/[locale]/sobre`: sobre
- `/[locale]/projetos`: lista de projetos
- `/[locale]/projetos/[slug]`: detalhe de projeto
- `/[locale]/curriculo`: currículo
- `/[locale]/contato`: contato
- `/[locale]/timeline`: trajetória
- `/[locale]/engineering`: hub de engenharia
- `/[locale]/engineering/principles`: princípios
- `/[locale]/engineering/how-i-build`: processo
- `/[locale]/engineering/behind-architecture`: tecnologias e trade-offs
- `/robots.txt`
- `/sitemap.xml`

## 4. Layout Global

O layout principal está em `src/components/templates/marketing-layout.tsx`.

Composição:

- `SkipToContent`
- `Navbar`
- `main#main-content`
- `Footer`
- `ScrollToTop`
- `Toaster`

O `RootLayout` fica em `src/app/[locale]/layout.tsx` e faz:

- Carregamento das fontes Inter e JetBrains Mono.
- Configuração do `NextIntlClientProvider`.
- Configuração do `ThemeProvider`.
- Inclusão de Analytics.
- Inclusão de JSON-LD para pessoa e portfólio.
- Metadata dinâmica PT/EN.
- Manifest e theme-color.

## 5. Design System

### Tema escuro

O tema escuro é o padrão.

Tokens principais:

- `--background: #09090b`
- `--foreground: #fafafa`
- `--card: #0f0f12`
- `--primary: #818cf8`
- `--success: #34d399`
- `--warning: #fbbf24`
- `--error: #f87171`
- `--border: rgba(255, 255, 255, 0.08)`

### Tema claro

O tema claro existe e troca:

- fundo para `#fafafa`
- texto para `#09090b`
- primary para `#4f46e5`
- cards para branco

### Navegação de tema

O botão de tema fica no navbar. Ele:

- lê `localStorage.theme`
- alterna classes `dark` e `light` no `document.documentElement`
- possui label acessível `Toggle theme`

### Acessibilidade global

Há suporte para:

- foco visível
- skip link
- `scroll-margin-top` em anchors
- redução de movimento via `prefers-reduced-motion`
- labels acessíveis em botões importantes

## 6. Home

A home está em `src/app/[locale]/page.tsx`.

Ordem atual das seções:

1. `HeroSection`
2. `StatsBar`
3. `HomePositioning`
4. `HomeAbout`
5. `HomeSpecialties`
6. `HomePhilosophy`
7. `HomeFeaturedProject`
8. `HomeDifferentials`
9. `HomeTimeline`
10. `ContactCTA`

### 6.1 Hero

Arquivo: `src/components/organisms/hero-section.tsx`

O hero é dividido em duas colunas em desktop:

- Coluna esquerda: texto, CTA e provas rápidas.
- Coluna direita: órbita de habilidades.

Elementos textuais do hero em PT:

- Kicker: `Backend · Automação · IA aplicada`
- Nome: `Caio Enrique`
- Posicionamento: `Engenheiro de Software focado em backend, automação e integração de IA para processos reais.`
- Tagline: `Problema → Pensamento → Arquitetura → Solução → Resultado.`
- CTAs:
  - `Ver Projetos`
  - `Download CV`
- Provas rápidas:
  - `12.5k+ linhas em produção`
  - `SERPRO plataforma documental`
  - `PT/EN pronto para equipes globais`

Elementos textuais do hero em EN:

- Kicker: `Backend · Automation · Applied AI`
- Name: `Caio Enrique`
- Positioning: `Software Engineer focused on backend, automation, and AI integration for real-world processes.`
- Tagline: `Problem → Thinking → Architecture → Solution → Result.`
- CTAs:
  - `View Projects`
  - `Download CV`
- Proofs:
  - `12.5k+ production lines`
  - `SERPRO document platform`
  - `PT/EN ready for global teams`

Animação:

- Framer Motion com variantes `hidden` e `visible`.
- Entrada em cascata por `staggerChildren`.
- Texto entra com opacidade e deslocamento vertical.
- Bloco orbital entra com escala, opacidade e pequena rotação.
- Background visual:
  - `WebGLShader`
  - `BackgroundPaths`
  - glows absolutos com blur.

### 6.2 StatsBar

Arquivo: `src/components/molecules/stats-bar.tsx`

Mostra seis métricas:

- `5+` projetos completos
- `3` demos ao vivo
- `4º` semestre na graduação
- `12.5k+` linhas em produção
- `6+` tecnologias dominadas
- `2` provedores LLM integrados

Usa ícones Lucide:

- FolderOpen
- Play
- Globe
- BookOpen
- Code2
- Zap

### 6.3 HomePositioning

Arquivo: `src/components/organisms/home-positioning.tsx`

PT:

- Título: `O Que Faço`
- Passos:
  - `Analiso o problema.`
  - `Penso a arquitetura.`
  - `Construo a solução.`
  - `Meço o resultado.`

EN:

- Title: `What I Do`
- Steps:
  - `I analyze the problem.`
  - `I design the architecture.`
  - `I build the solution.`
  - `I measure the result.`

Visual:

- Cards pequenos em sequência.
- Setas entre etapas no desktop.
- Animações `whileInView`.

### 6.4 HomeAbout

Arquivo: `src/components/organisms/home-about.tsx`

PT:

- Título: `Quem Eu Sou`
- Tagline: `Engenheiro de Software com foco em backend, automação e IA aplicada`
- Texto 1: transforma processos manuais e repetitivos em sistemas claros, documentados e sustentáveis.
- Texto 2: conecta SOSdocs/SERPRO e os projetos como estudos de caso.

EN:

- Title: `Who I Am`
- Tagline: `Software Engineer focused on backend, automation, and applied AI`
- Texto 1: manual/repetitive processes into clear, documented, sustainable systems.
- Texto 2: SOSdocs/SERPRO and portfolio projects as case studies.

Tags de habilidade mostradas:

- Python
- Apps Script
- React
- Node.js
- SQL
- APIs + IA
- Power BI
- Linux

Os ícones são Lucide, não Font Awesome.

### 6.5 HomeSpecialties

Arquivo: `src/components/organisms/home-specialties.tsx`

Especialidades:

- Plataformas Corporativas / Corporate Platforms
- Automação Inteligente / Intelligent Automation
- IA Aplicada a Negócios / AI Applied to Business
- Engenharia de Dados / Data Engineering

### 6.6 HomePhilosophy

Arquivo: `src/components/organisms/home-philosophy.tsx`

Pilares:

- Problema antes de código
- Arquitetura com intenção
- Resultado e métrica

Observação: em PT existe o texto `Problema Antes de Codigo` ainda sem acento em `src/messages/pt.json`. É um ponto pequeno de copy a corrigir.

### 6.7 HomeFeaturedProject

Arquivo: `src/components/organisms/home-featured-project.tsx`

Projeto em destaque atual:

- `Enterprise Dashboard`
- Slug: `enterprise-dashboard`
- Categoria: `fullstack`
- Imagem: `/images/projects/enterprise-dashboard.svg`
- Link GitHub: `https://github.com/Caio-enriq/Enterprise-Dashboard`

Visual:

- Layout em duas colunas.
- Preview visual via `next/image`.
- `object-contain` para não cortar o SVG.
- Conteúdo com badges de tecnologia.

### 6.8 HomeDifferentials

PT:

- Resolve problemas reais.
- Pensa arquitetura antes da primeira linha.
- Trabalhou com SOSdocs/SERPRO e Bunge Fortune 500.
- Tem repertório em backend, frontend, dados e automação.

EN:

- Solves real problems.
- Thinks in architecture before writing.
- Has worked with real companies.
- Brings range across backend, frontend, data, and automation.

### 6.9 HomeTimeline

Linha resumida:

- 2024: Ciência da Computação
- 2025: Engenharia de Software
- 2026: Projetos reais em produção

### 6.10 ContactCTA

PT:

- Título: `Entre em Contato`
- Disponibilidade: estágio e posições júnior, presencial ou remota.
- Localização: Brasília, DF.
- Email: `caio.desenvolvedor2416@gmail.com`

EN:

- Title: `Get in Touch`
- Availability: internship and junior opportunities, on-site or remote.

## 7. Componente Orbital

Arquivos:

- `src/components/molecules/hero-orbit.tsx`
- `src/components/ui/radial-orbital-timeline.tsx`

### Funcionamento

O `HeroOrbit` passa um array de habilidades para `RadialOrbitalTimeline`.

Configuração atual:

- `centerLabel="CE"`
- `defaultOpen`
- `autoOpenDelay={650}`

Isso significa que a órbita abre automaticamente quando o usuário entra na home.

### Skills na órbita

Habilidades:

- Python — 92%
- Apps Script — 90%
- React — 82%
- Node.js — 80%
- SQL — 85%
- Java — 65%
- Selenium — 85%
- Docker — 72%
- Git — 88%
- Linux — 75%

Cada item possui:

- título
- percentual
- descrição
- categoria
- ícone Lucide
- conexões com outras skills
- projetos relacionados
- experiência relacionada

### Categorias e cores

- Backend
- Frontend
- Automation
- Data
- Languages
- DevOps
- Tools
- Systems

As cores são declaradas em `CATEGORY_COLORS`.

### Interação

- Botão central abre/fecha a órbita.
- Nós orbitais são botões acessíveis.
- Ao clicar em um nó, abre card com:
  - badge de nível
  - categoria
  - descrição
  - barra de domínio animada
  - projetos relacionados
  - experiência relacionada
  - habilidades conectadas
- Cards fecham por botão ou clique externo.
- Suporte a teclado:
  - Enter/Espaço ativa
  - Escape fecha card

### Animações

- Rotação suave via `requestAnimationFrame`.
- Entrada dos nós com escala/opacidade.
- Anéis orbitais com transição.
- Pulse ring no centro.
- Linhas SVG entre skill ativa e skills relacionadas.
- Respeita `prefers-reduced-motion` para animações CSS globais.

### Responsividade

- Raio orbital:
  - mobile: 90
  - desktop: 135
- Em mobile, card abre acima/abaixo para reduzir overflow lateral.
- Container usa altura estável (`h-80`) para evitar layout shift.

## 8. Internacionalização

Arquivos:

- `src/messages/pt.json`
- `src/messages/en.json`
- `src/i18n/routing.ts`
- `src/i18n/request.ts`
- `src/i18n/navigation.ts`

O site usa `next-intl`.

### Estratégia

- Todo texto de navegação, home, about, projetos, currículo, contato, footer e engenharia fica nos arquivos JSON.
- Dados mais estruturados ficam em TypeScript:
  - `src/data/projects.ts`
  - `src/data/resume.ts`
- O locale é obrigatório na URL.
- Botão de idioma alterna PT/EN com `router.replace(pathname, { locale })`.

### Estado da parte em inglês

A parte em inglês está implementada e funcional.

Principais áreas cobertas:

- Navbar
- Home
- Hero
- Stats
- About
- Projects
- Resume
- Contact
- Footer
- Timeline
- Engineering
- Project detail fields
- Resume data

O inglês atual tem um tom profissional e posiciona Caio como:

- Software Engineer
- backend/automation/applied AI focused
- ready for global teams
- experienced with enterprise applications and document processing pipelines

Pontos fortes do inglês:

- O hero está claro: `Software Engineer focused on backend, automation, and AI integration for real-world processes.`
- A seção `Who I Am` é mais madura que a versão antiga: menos agressiva e mais objetiva.
- Os projetos têm campos `descriptionEn`, `featuresEn`, `problemaEn`, `contextoEn`, `arquiteturaEn`, `decisoes.titleEn`, `decisoes.descEn`, `impactEn`, etc.
- O currículo em inglês está preenchido com experiências, skills, formação e idiomas.

Pontos de atenção no inglês:

- Metadata ainda diz `Full-Stack Developer & Enterprise Automation`, enquanto o posicionamento principal diz `Software Engineer focused on backend, automation, and AI integration`. Recomendo alinhar tudo para Software Engineer.
- A frase `internationally reference technology organization` em `about.objectiveText` soa pouco natural. Melhor seria `internationally recognized technology organization`.
- Alguns textos em inglês ainda têm tom muito absoluto, por exemplo `If you can't measure the impact, it's not worth building.` Pode soar forte demais dependendo do recrutador.
- O projeto `Quiz Bot Pro` tem descrição relacionada a responder questões de múltipla escolha com IA. Isso pode ser sensível em contexto acadêmico; convém reposicionar como ferramenta de estudo, OCR/assistente de revisão ou demo técnica de visão + LLM.

## 9. Dados do Currículo

Arquivo: `src/data/resume.ts`

### Dados de contato

PT:

- Telefone: `(61) 99235-4719`
- Email: `caio.desenvolvedor2416@gmail.com`
- Localização: `Brasília, DF, Brasil`

EN:

- Phone: `+55 61 99235-4719`
- Email: `caio.desenvolvedor2416@gmail.com`
- Location: `Brasília, DF, Brazil`

### Objetivo

PT:

- Atuar como Engenheiro de Software com foco em backend, arquitetura, APIs e soluções escaláveis.

EN:

- Work as a Software Engineer with focus on backend development, systems architecture, API integration and scalable enterprise solutions.

### Experiências

Experiências listadas:

1. SOSdocs | Plataforma de Inteligência Documental - SERPRO
   - PT: Desenvolvedor de Software
   - EN: Software Developer
   - Período: 2025 - Atual / 2025 - Present
   - Stack: Python, FastAPI, Node.js, Express, React, PostgreSQL, Docker

2. EasyTech
   - PT: Assistente Administrativo
   - EN: Administrative Assistant
   - Período: Mai - Out 2025 / May - Oct 2025
   - Stack: TOTVS Protheus, Excel, Power BI

3. Bunge
   - PT: Assistente de Recursos Humanos
   - EN: Human Resources Assistant
   - Período: Jan 2024 - Mai 2025 / Jan 2024 - May 2025
   - Stack: Power BI, Excel, SharePoint

### Formação

- UniCEUB — Bacharelado em Ciência da Computação / B.Sc. in Computer Science
- ETB — Técnico em Informática / Technical Diploma in Informatics

### Idiomas

PT:

- Português: Nativo
- Inglês: Profissional (B2+)
- Espanhol: Básico

EN:

- Portuguese: Native
- English: Professional (B2+)
- Spanish: Basic

### Ponto de atenção

Existe conflito entre materiais do projeto: `EXPERIENCE.md` antigo cita principalmente SOSdocs/SERPRO e Bunge, enquanto `resume.ts`, `SPEC.md` e a versão estática incluem EasyTech. O portfólio React atual exibe EasyTech.

## 10. Projetos

Arquivo: `src/data/projects.ts`

Projetos atuais:

1. `enterprise-dashboard`
   - Título: Enterprise Dashboard
   - Categoria: fullstack
   - Featured: true
   - Imagem: `/images/projects/enterprise-dashboard.svg`
   - Stack: Node.js, Express, Python, FastAPI, OAuth2, JWT, ESLint, Prettier

2. `portal-monorepo`
   - Título: Unified Portal Monorepo
   - Categoria: fullstack
   - Featured: true
   - Imagem: `/images/projects/portal-monorepo.svg`
   - Stack: Next.js 15, React 19, Tailwind CSS v4, Framer Motion, Supabase, Upstash Redis, Python, DuckDB, Groq AI

3. `health-analytics`
   - Título: Health Data Analytics
   - Categoria: data
   - Featured: true
   - Imagem: `/images/projects/health-analytics.svg`
   - Stack: Python, Pandas, NumPy, HTML5, CSS3, JavaScript, Google Sheets API, Google Auth

4. `fynnteck`
   - Título: Fynnteck — Personal Finance
   - Categoria: frontend
   - Featured: true
   - Imagem: `/images/projects/fynnteck.svg`
   - Demo: `https://fynnteck.vercel.app`
   - Stack: React 19, TypeScript, Vite, React Router v7, Recharts, Lucide React, ESLint

5. `fintrack`
   - Título: FinTrack — Smart Finance
   - Categoria: frontend
   - Featured: false
   - Stack: React 19, TypeScript, Vite, Recharts, Lucide React, CSS Vanilla

6. `aura-pilates`
   - Título: Aura Pilates
   - Categoria: fullstack
   - Featured: true
   - Stack: Next.js 15, React 19, Tailwind CSS v4, Framer Motion, SQLite, better-sqlite3, Lucide Icons

7. `taskflow`
   - Título: TaskFlow
   - Categoria: fullstack
   - Featured: true
   - Stack: Next.js 15, React 19, Tailwind CSS, Prisma ORM, SQLite, JWT, bcryptjs, Zod, Docker

8. `quiz-bot`
   - Título: Quiz Bot Pro
   - Categoria: automation
   - Featured: false
   - Stack: Python, Google Gemini API, PyAutoGUI, Rich, dotenv

### Modelagem dos projetos

Cada projeto pode conter:

- id
- slug
- title
- subtitle
- description
- descriptionEn
- techStack
- features
- featuresEn
- tags
- imageUrl
- imageAlt
- demoUrl
- repoUrl
- category
- badge
- status
- featured
- year
- problema/problemaEn
- contexto/contextoEn
- objetivo/objetivoEn
- desafio/desafioEn
- responsabilidade/responsabilidadeEn
- arquitetura/arquiteturaEn
- decisoes com campos PT/EN
- tradeoffs com campos PT/EN
- comoPensei/comoPenseiEn
- licoes/licoesEn
- fariaDiferente/fariaDiferenteEn
- proximosPassos/proximosPassosEn
- impact/impactEn

## 11. Imagens e Assets

Pasta principal: `public/`

Assets atuais:

- `public/images/profile.jpg`
- `public/images/projects/enterprise-dashboard.svg`
- `public/images/projects/portal-monorepo.svg`
- `public/images/projects/health-analytics.svg`
- `public/images/projects/fynnteck.svg`
- `public/images/projects/docz-upload.svg`
- `public/images/skills/python.jpg`
- `public/images/skills/HTML.png`
- `public/images/skills/CSS.png`
- `public/images/skills/Java.png`
- `public/images/skills/Selenium_Logo.png`
- `public/images/skills/vscode.png`
- `public/Caio_Enrique_Curriculo.pdf`
- `public/manifest.webmanifest`
- ícones padrão do Next/Vercel

### Uso atual

- `profile.jpg` é usado na página Sobre.
- SVGs de projeto são usados nos cards de projetos e no projeto em destaque.
- `Caio_Enrique_Curriculo.pdf` é disponibilizado para currículo/download.
- Assets de skills existem, mas nem todos são usados ativamente na home atual.

### Fotos

A foto pessoal atual é `public/images/profile.jpg`.

Uso:

- Página Sobre, em banner com `next/image`.
- O arquivo é renderizado com `fill`, `sizes="192px"` e `object-cover`.

Ponto de atenção:

- A home não usa foto pessoal no hero. A primeira dobra é mais técnica/abstrata, com WebGL, paths e órbita.

## 12. Navbar

Arquivo: `src/components/organisms/navbar.tsx`

Itens:

- Início / Home
- Sobre / About
- Projetos / Projects
- Engenharia / Engineering
- Trajetória / Journey
- Currículo / Resume
- Contato / Contact

Características:

- Header fixo.
- Aplica blur e borda quando há scroll.
- Links são anchors nativos localizados (`/${locale}/...`) para navegação robusta.
- Botão de idioma usa `router.replace`.
- Botão de tema alterna dark/light.
- Menu mobile com abertura por estado local.

## 13. Páginas Internas

### Sobre

Arquivo principal: `src/components/organisms/about-content.tsx`

Conteúdo:

- Banner com foto.
- Jornada em 3 atos.
- Identidade.
- Experiência.
- Formação.
- Skills.
- GitHub Activity.

### Currículo

Arquivo principal: `src/components/organisms/resume-content.tsx`

Conteúdo:

- Objetivo.
- Resumo.
- Experiência.
- Educação.
- Skills.
- Certificações.
- Idiomas.
- Link/download do PDF.

### Projetos

Arquivos:

- `src/components/organisms/projects-content.tsx`
- `src/components/molecules/project-card.tsx`
- `src/components/organisms/project-detail-content.tsx`

Funcionalidades:

- Listagem de projetos.
- Filtro por categoria.
- Cards com imagem quando `imageUrl` existe.
- Detalhe por slug.
- Campos bilíngues para cases completos.

### Engenharia

Arquivos:

- `engineering-content.tsx`
- `engineering-principles-content.tsx`
- `engineering-how-i-build-content.tsx`
- `engineering-behind-architecture-content.tsx`

Conteúdo:

- Stack.
- Processo de construção.
- Princípios.
- Tecnologias e trade-offs.

### Contato

Arquivo: `src/components/organisms/contact-content.tsx`

Conteúdo:

- Formulário.
- Dados de contato.
- Links.
- Estados de envio/sucesso/erro.

Dependência:

- `@emailjs/browser` está instalado.

## 14. SEO e Metadata

Arquivos:

- `src/app/[locale]/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/components/seo/json-ld.tsx`

Metadata atual:

PT:

- Title: `Caio Enrique | Portfólio`
- Description: `Caio Enrique - Desenvolvedor Full Stack e Automação. Portfólio de projetos web modernos.`

EN:

- Title: `Caio Enrique | Portfolio`
- Description: `Caio Enrique - Full-Stack Developer & Enterprise Automation. Portfolio of modern web projects.`

Ponto de atenção:

- A metadata ainda usa `Full-Stack Developer`, enquanto o conteúdo principal usa `Software Engineer`. Recomendo alinhar.

## 15. Testes

Arquivos:

- `e2e/navigation.spec.ts`
- `playwright.config.ts`
- `jest.config.ts`
- `jest.setup.ts`
- `__tests__/projects.test.ts`
- `__tests__/resume.test.ts`

E2E cobre:

- Home carrega.
- Hero aparece.
- Navegação para projetos.
- Alternância de tema.
- Página de projetos.
- Filtro de projetos.
- Navegação entre páginas.
- Alternância de idioma.

Configuração Playwright:

- Porta padrão: `3100`
- Host: `127.0.0.1`
- Base URL: `http://127.0.0.1:3100`
- Locale: `pt-BR`
- Web server: `npm run dev -- --hostname 127.0.0.1 --port 3100`

Configuração Next relevante:

- `next.config.ts` contém `allowedDevOrigins: ["127.0.0.1"]` para evitar bloqueio de recursos dev no Playwright.

## 16. Estado Atual da Qualidade

Validações executadas anteriormente no estado atual:

- `npm run typecheck`: passou.
- `npm run lint`: passou.
- `npm run test:e2e`: 8/8 passaram.
- `npm run build`: passou com rede liberada para Google Fonts.

## 17. Pontos Fortes

- Stack moderna: Next 16, React 19, TypeScript, Tailwind 4.
- Internacionalização real PT/EN.
- Home com narrativa clara e progressiva.
- Órbita de skills memorável e interativa.
- Projetos modelados como estudos de caso, não só cards rasos.
- Dados locais bem tipados.
- Testes E2E cobrindo navegação, tema e idioma.
- Design escuro consistente.
- Bons assets para projetos.
- SEO básico e JSON-LD já presentes.

## 18. Pontos de Atenção

### Conteúdo

- EasyTech aparece no currículo React, mas alguns documentos antigos não citam essa experiência.
- Metadata ainda fala `Full-Stack Developer`, enquanto o posicionamento novo é `Software Engineer`.
- Alguns textos em inglês podem ser refinados para soar mais natural em recrutamento internacional.
- `Quiz Bot Pro` deve ser reposicionado com cuidado para evitar leitura de uso indevido em provas.
- Em PT, ainda existe `Problema Antes de Codigo` sem acento.

### Visual

- A home não usa foto pessoal na primeira dobra; isso é uma escolha mais técnica e menos pessoal.
- A paleta é majoritariamente dark com primary indigo/purple; funciona bem, mas deve ser monitorada para não ficar monocromática.
- O hero usa efeitos abstratos; a identidade pessoal vem depois, em `HomeAbout` e Sobre.

### Arquitetura

- Há `src/shared/ui` e `src/components/ui`, duas áreas de UI paralelas. Isso pode ser normal por legado, mas vale consolidar padrões no futuro.
- Existem dados em `src/messages/*.json` e em `src/data/*.ts`; a divisão é boa, mas exige disciplina para manter PT/EN sincronizados.

## 19. Recomendações Prioritárias

1. Alinhar metadata PT/EN com o posicionamento atual: Software Engineer, backend, automation, AI integration.
2. Revisar inglês profissionalmente:
   - trocar `internationally reference` por `internationally recognized`
   - suavizar frases absolutas
   - revisar project cases para clareza internacional
3. Confirmar se EasyTech deve permanecer.
4. Corrigir pequenos acentos restantes em PT.
5. Decidir se a home deve incluir uma foto pessoal ou manter a primeira dobra totalmente técnica.
6. Criar screenshots reais dos projetos, quando existirem, para substituir alguns SVGs conceituais.
7. Auditar todos os links sociais no footer e contato.
8. Considerar self-host de fontes para build sem dependência de rede.

## 20. Resumo Executivo

O portfólio React está em um bom estado técnico e narrativo. Ele comunica um perfil de Software Engineer com foco em backend, automação, dados e IA aplicada. A versão em inglês existe, está funcional e cobre as áreas principais, mas ainda merece uma revisão fina para soar mais natural em contexto internacional.

O ponto mais forte é a combinação entre narrativa e engenharia: a home apresenta posicionamento, provas, especialidades, filosofia, projeto em destaque, diferenciais e CTA. A órbita de habilidades dá personalidade visual ao site e conecta skills com projetos e experiências.

O próximo salto de qualidade não é estrutural; é editorial e de curadoria: alinhar todos os textos ao mesmo posicionamento, limpar pequenos conflitos de currículo, melhorar inglês e garantir que cada projeto pareça defensável para recrutadores internacionais.
