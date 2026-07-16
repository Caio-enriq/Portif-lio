import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "enterprise-dashboard",
    slug: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    subtitle: "B2B Platform · Dual-Stack Backend",
    description:
      "Plataforma B2B monolítica com arquitetura dual-stack (Node.js + Python) para processamento de dados organizacionais, analytics de funcionários e gestão administrativa.",
    descriptionEn:
      "Monolithic B2B platform with dual-stack architecture (Node.js + Python) for large-scale organizational data processing, employee analytics, and administrative management.",
    techStack: ["Node.js", "Express", "Python", "FastAPI", "OAuth2", "JWT", "ESLint", "Prettier"],
    tags: ["Node.js", "Python", "Express", "FastAPI", "B2B"],
    features: [
      "Backend híbrido com Node.js para APIs rápidas e Python para processamento de dados",
      "Fluxos de autenticação com OAuth2/JWT",
      "Logs de auditoria para rastreabilidade",
      "Arquitetura modular de serviços",
    ],
    featuresEn: [
      "Hybrid backend with Node.js for fast APIs and Python for data processing",
      "OAuth2/JWT authentication flows",
      "Audit logging for compliance tracking",
      "Modular services architecture",
    ],
    imageUrl: "/images/projects/enterprise-dashboard.svg",
    imageAlt: "Enterprise dashboard with dual-stack backend and analytics preview",
    repoUrl: "https://github.com/Caio-enriq/Enterprise-Dashboard",
    category: "fullstack",
    badge: "Architecture",
    status: "completed",
    featured: true,
    year: 2025,
    problema:
      "Organizações B2B precisam de uma plataforma unificada para processar dados corporativos, mas a maioria das soluções exige stacks complexas ou não suportam processamento híbrido de dados.",
    problemaEn:
      "B2B organizations need a unified platform to process corporate data, but most solutions require complex stacks or don't support hybrid data processing.",
    contexto:
      "Projeto pessoal para demonstrar arquitetura backend corporativa com processamento híbrido de dados, autenticação robusta e logs de auditoria — padrões essenciais em plataformas B2B de grande escala.",
    contextoEn:
      "Personal project to demonstrate enterprise backend architecture with hybrid data processing, robust authentication, and audit logging — essential patterns in large-scale B2B platforms.",
    objetivo:
      "Construir uma plataforma B2B com arquitetura dual-stack que demonstre separação de responsabilidades, processamento híbrido e conformidade de auditoria.",
    objetivoEn:
      "Build a B2B platform with dual-stack architecture demonstrating separation of concerns, hybrid processing, and audit compliance.",
    desafio:
      "Integrar dois runtimes (Node.js e Python) de forma coesa, mantendo performance e consistência de dados entre camadas.",
    responsabilidade:
      "Arquitetura, implementação completa do backend, definição de APIs, autenticação e sistema de auditoria.",
    arquitetura: [
      "API Gateway em Node.js com Express para rotas de alta concorrência",
      "Motor de processamento em Python para tratamento de dados e tarefas em segundo plano",
      "Serviços modulares com separação de responsabilidades",
      "Sistema de logging e auditoria para rastreabilidade",
    ],
    arquiteturaEn: [
      "Node.js API Gateway with Express for high-concurrency routing",
      "Python Processing Engine for data crunching and background tasks",
      "Modular services with separation of concerns",
      "Logging and audit system for traceability",
    ],
    decisoes: [
      {
        title: "Dual-Stack",
        desc: "Node.js para I/O concorrente, Python para processamento de dados. Cada runtime faz o que faz de melhor.",
        titleEn: "Dual-Stack",
        descEn:
          "Node.js for concurrent I/O, Python for data processing. Each runtime does what it does best.",
      },
      {
        title: "Modular Services",
        desc: "Cada funcionalidade é um módulo independente. Facilita testes e manutenção.",
        titleEn: "Modular Services",
        descEn: "Each feature is an independent module. Facilitates testing and maintenance.",
      },
    ],
    tradeoffs: [
      {
        escolha: "Dual-stack vs stack única",
        resultado: "Mais complexidade de deploy, mas melhor performance por tipo de carga.",
        escolhaEn: "Dual-stack vs single stack",
        resultadoEn: "More deployment complexity, but better performance per workload type.",
      },
    ],
    comoPensei: [
      "Analisei o problema: dados corporativos precisam de processamento batch e APIs rápidas",
      "Escolhi Node.js para o gateway (I/O concorrente) e Python para o engine (CPU-bound)",
      "Defini interfaces claras entre os módulos antes de implementar",
    ],
    comoPenseiEn: [
      "I analyzed the problem: corporate data needs batch processing and fast APIs",
      "I chose Node.js for the gateway (concurrent I/O) and Python for the engine (CPU-bound)",
      "I defined clear interfaces between modules before implementing",
    ],
    licoes: [
      "Dual-stack funciona quando cada runtime é escolhido por suas forças específicas",
      "Logging de auditoria deve ser uma concern transversal, não um módulo isolado",
    ],
    licoesEn: [
      "Dual-stack works when each runtime is chosen for its specific strengths",
      "Audit logging should be a cross-cutting concern, not an isolated module",
    ],
    fariaDiferente: [
      "Adicionaria cache Redis para queries frequentes",
      "Implementaria rate limiting no gateway desde o início",
    ],
    fariaDiferenteEn: [
      "I'd add Redis cache for frequent queries",
      "I'd implement rate limiting on the gateway from the start",
    ],
    proximosPassos: [
      "Migrar para Docker Compose para orquestração dos dois runtimes",
      "Adicionar métricas de performance por módulo",
    ],
    proximosPassosEn: [
      "Migrate to Docker Compose for orchestrating both runtimes",
      "Add per-module performance metrics",
    ],
    impact:
      "Plataforma B2B com arquitetura pronta para produção, processando dados corporativos com separação de camadas e conformidade de auditoria.",
    impactEn:
      "Production-ready B2B platform architecture processing corporate data with layer segregation and audit compliance.",
  },
  {
    id: "portal-monorepo",
    slug: "portal-monorepo",
    title: "Unified Portal Monorepo",
    subtitle: "Full-stack · Monorepo Architecture",
    description:
      "Monorepo full-stack com Next.js 15 (portal web de alto desempenho) e Python (microsserviço de analytics) — KPIs executivos, IA assistiva e exportações inteligentes.",
    descriptionEn:
      "Full-stack monorepo with Next.js 15 (high-performance web portal) and Python (analytics microservice) — executive KPIs, AI assistant, and smart exports.",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "Supabase",
      "Upstash Redis",
      "Python",
      "DuckDB",
      "Groq AI",
    ],
    tags: ["Next.js", "Python", "Supabase", "DuckDB", "Groq AI"],
    features: [
      "Portal web em Next.js 15 com Turbopack e Tailwind CSS v4",
      "Microsserviço Python de analytics para processamento de datasets",
      "Integração com Groq AI para assistente virtual bilíngue",
      "Exportações inteligentes com filtros ativos (XLSX/CSV)",
    ],
    featuresEn: [
      "Next.js 15 web portal with Turbopack and Tailwind CSS v4",
      "Python analytics microservice for dataset processing",
      "Groq AI integration for bilingual virtual assistant",
      "Smart exports with active filters (XLSX/CSV)",
    ],
    imageUrl: "/images/projects/portal-monorepo.svg",
    imageAlt: "Unified portal monorepo with web and analytics services preview",
    repoUrl: "https://github.com/Caio-enriq/PortalP",
    category: "fullstack",
    badge: "Monorepo",
    status: "completed",
    featured: true,
    year: 2025,
    problema:
      "Empresas precisam de um portal unificado que combine visualização de dados, analytics avançado e assistente de IA — mas a maioria das soluções são fragmentadas.",
    problemaEn:
      "Companies need a unified portal combining data visualization, advanced analytics, and AI assistant — but most solutions are fragmented.",
    contexto:
      "Portal unificado para gestão empresarial com analytics avançado, separando a camada de apresentação (Next.js) do motor de processamento de dados (Python) para escalabilidade independente.",
    contextoEn:
      "Unified portal for enterprise management with advanced analytics, separating the presentation layer (Next.js) from the data processing engine (Python) for independent scalability.",
    objetivo:
      "Construir um monorepo full-stack que una portal web de alta performance com motor de analytics em Python e assistente de IA.",
    objetivoEn:
      "Build a full-stack monorepo combining a high-performance web portal with a Python analytics engine and AI assistant.",
    desafio:
      "Manter performance no frontend enquanto processamos datasets grandes no backend, e integrar IA de forma que ajude sem atrapalhar.",
    responsabilidade:
      "Arquitetura do monorepo, desenvolvimento do portal Next.js, integração com Python analytics, e implementação do assistente IA.",
    arquitetura: [
      "Monorepo com Next.js 15 + Turbopack para builds ultrarrápidos",
      "Python analytics engine com DuckDB para queries de alta performance",
      "Supabase SSR + Upstash Redis para auth e rate limiting",
      "Groq AI para assistente virtual bilíngue (PT/EN)",
    ],
    arquiteturaEn: [
      "Monorepo with Next.js 15 + Turbopack for lightning-fast builds",
      "Python analytics engine with DuckDB for high-performance queries",
      "Supabase SSR + Upstash Redis for auth and rate limiting",
      "Groq AI for bilingual virtual assistant (PT/EN)",
    ],
    decisoes: [
      {
        title: "Monorepo",
        desc: "Código compartilhado entre frontend e backend. Types, utils e config em comum.",
        titleEn: "Monorepo",
        descEn: "Shared code between frontend and backend. Common types, utils and config.",
      },
      {
        title: "DuckDB para Analytics",
        desc: "Mais rápido que PostgreSQL para analytical queries em datasets em memória.",
        titleEn: "DuckDB for Analytics",
        descEn: "Faster than PostgreSQL for analytical queries on in-memory datasets.",
      },
    ],
    tradeoffs: [
      {
        escolha: "Monorepo vs multi-repo",
        resultado: "Acoplamento maior, mas deploy atômico e código compartilhado.",
        escolhaEn: "Monorepo vs multi-repo",
        resultadoEn: "More coupling, but atomic deployment and shared code.",
      },
    ],
    comoPensei: [
      "Identifiquei que o portal precisava de duas capacidades distintas: UI reativa e processamento pesado",
      "Separei em Next.js (UI) e Python (analytics), comunicando via API interna",
      "Usei DuckDB porque os datasets cabem em memória e as queries são analíticas",
    ],
    comoPenseiEn: [
      "I identified that the portal needed two distinct capabilities: reactive UI and heavy processing",
      "I separated into Next.js (UI) and Python (analytics), communicating via internal API",
      "I used DuckDB because datasets fit in memory and queries are analytical",
    ],
    licoes: [
      "Monorepo é excelente quando há código compartilhado significativo entre frontend e backend",
      "Groq AI é impressionantemente rápido para assistentes virtuais em produção",
    ],
    licoesEn: [
      "Monorepo is excellent when there's significant shared code between frontend and backend",
      "Groq AI is impressively fast for virtual assistants in production",
    ],
    fariaDiferente: [
      "Adicionaria testes E2E com Playwright desde o início",
      "Implementaria cache de consultas analíticas para datasets estáticos",
    ],
    fariaDiferenteEn: [
      "I'd add E2E tests with Playwright from the start",
      "I'd implement analytics query caching for static datasets",
    ],
    proximosPassos: [
      "Adicionar WebSockets para atualização em tempo real dos KPIs",
      "Implementar streaming de dados para dashboards ao vivo",
    ],
    proximosPassosEn: [
      "Add WebSockets for real-time KPI updates",
      "Implement data streaming for live dashboards",
    ],
    impact:
      "Dashboard executivo com KPIs em tempo real e IA assistiva para decisões estratégicas, com arquitetura monorepo preparada para escala.",
    impactEn:
      "Executive dashboard with real-time KPIs and AI assistant for strategic decisions, with monorepo architecture ready for scale.",
  },
  {
    id: "health-analytics",
    slug: "health-data-analytics",
    title: "Health Data Analytics",
    subtitle: "ETL Pipeline · Dashboards",
    description:
      "Pipeline ETL completo em Python para extração, transformação e visualização de dados de saúde, com dashboards HTML interativos e integração Google Sheets/Apps Script.",
    descriptionEn:
      "Complete ETL pipeline in Python for extracting, transforming, and visualizing healthcare data, with interactive HTML dashboards and Google Sheets/Apps Script integration.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Sheets API",
      "Google Auth",
    ],
    tags: ["Python", "Pandas", "ETL", "Google Sheets", "HTML"],
    features: [
      "Pipeline ETL modular com etapas de extração, transformação e carga",
      "Compilação de dashboard HTML em artefato único e portátil",
      "Gráficos interativos com injeção dinâmica de dados",
      "Integração com Google Sheets/Apps Script",
    ],
    featuresEn: [
      "Modular ETL pipeline with extract, transform, and load stages",
      "HTML dashboard compilation into single portable artifact",
      "Interactive charts with dynamic data injection",
      "Google Sheets/Apps Script integration",
    ],
    imageUrl: "/images/projects/health-analytics.svg",
    imageAlt: "Health analytics ETL pipeline and dashboard preview",
    repoUrl: "https://github.com/Caio-enriq/health-data-analytics",
    category: "data",
    badge: "Analytics",
    status: "completed",
    featured: true,
    year: 2025,
    problema:
      "Dados de saúde precisam ser processados e visualizados de forma automatizada, mas os dashboards tradicionais não podem ser compartilhados em ambientes restritos.",
    problemaEn:
      "Healthcare data needs to be processed and visualized automatically, but traditional dashboards can't be shared in restricted environments.",
    contexto:
      "Necessidade de processar e visualizar dados de saúde de forma automatizada, com dashboards portáteis que podem ser compartilhados em ambientes restritos como Google Apps Script.",
    contextoEn:
      "Need to process and visualize healthcare data automatically, with portable dashboards that can be shared in restricted environments like Google Apps Script.",
    objetivo:
      "Construir um pipeline ETL que gere dashboards interativos portáteis, sem dependência de infraestrutura externa.",
    objetivoEn:
      "Build an ETL pipeline that generates portable interactive dashboards without external infrastructure dependency.",
    desafio:
      "Gerar HTML estático com dados dinâmicos que funcione offline e possa ser compartilhado via Google Apps Script.",
    responsabilidade:
      "Arquitetura do pipeline, implementação do ETL, geração de dashboards e integração com Google Sheets API.",
    arquitetura: [
      "Pipeline ETL com Python/Pandas para extração e transformação",
      "Geração de HTML estático com injeção dinâmica de dados",
      "Compilação em artefato único portátil (CSS/JS inline)",
      "Testes de integração com Google Sheets API",
    ],
    arquiteturaEn: [
      "ETL pipeline with Python/Pandas for extraction and transformation",
      "Static HTML generation with dynamic data injection",
      "Compilation into single portable artifact (inline CSS/JS)",
      "Integration tests with Google Sheets API",
    ],
    decisoes: [
      {
        title: "HTML Portátil",
        desc: "Dashboards como artefatos HTML únicos, sem dependência de servidor.",
        titleEn: "Portable HTML",
        descEn: "Dashboards as single HTML artifacts, no server dependency.",
      },
    ],
    tradeoffs: [
      {
        escolha: "HTML estático vs dashboard dinâmico",
        resultado: "Perde interatividade avançada, mas ganha portabilidade total.",
        escolhaEn: "Static HTML vs dynamic dashboard",
        resultadoEn: "Loses advanced interactivity, but gains total portability.",
      },
    ],
    comoPensei: [
      "O problema era compartilhabilidade: dashboards precisavam rodar em ambientes sem servidor",
      "Escolhi gerar HTML estático com dados injetados inline — funciona em qualquer lugar",
      "Usei Pandas para o pipeline porque o foco era dados tabulares",
    ],
    comoPenseiEn: [
      "The problem was shareability: dashboards needed to run in serverless environments",
      "I chose to generate static HTML with inline data injection — works anywhere",
      "I used Pandas for the pipeline because the focus was tabular data",
    ],
    licoes: [
      "Às vezes a melhor solução é a mais simples: HTML estático resolve o problema de portabilidade",
      "Google Apps Script é um ambiente hostil para dashboards — artefatos portáteis são essenciais",
    ],
    licoesEn: [
      "Sometimes the best solution is the simplest: static HTML solves portability",
      "Google Apps Script is a hostile environment for dashboards — portable artifacts are essential",
    ],
    fariaDiferente: ["Adicionaria suporte a múltiplos formatos de saída (PDF, PNG)"],
    fariaDiferenteEn: ["I'd add support for multiple output formats (PDF, PNG)"],
    proximosPassos: [
      "Automatizar agendamento de geração via cron",
      "Adicionar alertas automáticos baseados em thresholds",
    ],
    proximosPassosEn: [
      "Automate generation scheduling via cron",
      "Add automatic alerts based on thresholds",
    ],
    impact:
      "Pipeline ETL que automatiza análise de dados de saúde, gerando dashboards interativos compartilháveis em ambientes corporativos.",
    impactEn:
      "ETL pipeline that automates healthcare data analysis, generating shareable interactive dashboards in corporate environments.",
  },
  {
    id: "fynnteck",
    slug: "fynnteck-web",
    title: "Fynnteck — Personal Finance",
    subtitle: "Frontend · Mobile-First Dashboard",
    description:
      "Dashboard de finanças pessoais mobile-first com React 19, TypeScript, Vite, gráficos Recharts e insights de IA simulados para análise de gastos.",
    descriptionEn:
      "Mobile-first personal finance dashboard with React 19, TypeScript, Vite, Recharts charts, and simulated AI insights for spending analysis.",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router v7",
      "Recharts",
      "Lucide React",
      "ESLint",
    ],
    tags: ["React", "TypeScript", "Vite", "Recharts", "Mobile-First"],
    features: [
      "Experiência omnichannel com telas dedicadas para mobile e web",
      "Analytics interativo com gráficos em Recharts",
      "Módulo de insights simulados por IA para recomendações de economia",
      "Design system completo com tokens CSS",
    ],
    featuresEn: [
      "Omnichannel experience: dedicated mobile and web screens",
      "Interactive analytics with Recharts charts and graphs",
      "Simulated AI insights module for savings recommendations",
      "Complete design system with CSS tokens",
    ],
    imageUrl: "/images/projects/fynnteck.svg",
    imageAlt: "Fynnteck mobile-first personal finance dashboard preview",
    demoUrl: "https://fynnteck.vercel.app",
    repoUrl: "https://github.com/Caio-enriq/Fynnteck-Web",
    category: "frontend",
    badge: "Live Demo",
    status: "completed",
    featured: true,
    year: 2025,
    problema:
      "Aplicativos de finanças pessoais são ou genéricos demais ou complexos demais. Usuários querem visão clara dos seus gastos sem configurar nada.",
    problemaEn:
      "Personal finance apps are either too generic or too complex. Users want a clear view of their spending without configuring anything.",
    contexto:
      "Aplicação de finanças pessoais com foco em experiência mobile-first e visualização de dados financeiros, demonstrando design system e arquitetura de componentes.",
    contextoEn:
      "Personal finance application focused on mobile-first experience and financial data visualization, demonstrating design system and component architecture.",
    objetivo:
      "Criar um dashboard mobile-first que transforme dados financeiros em insights visuais compreensíveis.",
    objetivoEn:
      "Create a mobile-first dashboard that transforms financial data into understandable visual insights.",
    desafio:
      "Equilibrar simplicidade visual com profundidade de dados — mostrar muito sem parecer lotado.",
    responsabilidade:
      "Design system, arquitetura de componentes, implementação completa do frontend.",
    arquitetura: [
      "React 19 com TypeScript para tipagem segura",
      "Vite para build ultrarrápido com HMR",
      "Recharts para gráficos interativos (donut, area, bar)",
      "Design system completo com CSS tokens e React Router v7",
    ],
    arquiteturaEn: [
      "React 19 with TypeScript for type-safe development",
      "Vite for lightning-fast builds with HMR",
      "Recharts for interactive charts (donut, area, bar)",
      "Complete design system with CSS tokens and React Router v7",
    ],
    decisoes: [
      {
        title: "Mobile-First",
        desc: "Layout projetado para telas pequenas primeiro, depois adaptado para desktop.",
        titleEn: "Mobile-First",
        descEn: "Layout designed for small screens first, then adapted for desktop.",
      },
    ],
    tradeoffs: [
      {
        escolha: "CSS tokens vs Tailwind",
        resultado: "Mais controle, mas mais manutenção.",
        escolhaEn: "CSS tokens vs Tailwind",
        resultadoEn: "More control, but more maintenance.",
      },
    ],
    comoPensei: [
      "O problema principal era visualização: dados financeiros precisam ser compreensíveis em 3 segundos",
      "Escolhi Recharts porque é declarativo e funciona bem com React",
      "Separei mobile e web porque os fluxos de uso são diferentes",
    ],
    comoPenseiEn: [
      "The main problem was visualization: financial data needs to be understandable in 3 seconds",
      "I chose Recharts because it's declarative and works well with React",
      "I separated mobile and web because the usage flows are different",
    ],
    licoes: [
      "Mobile-first não é só responsividade — é repensar o fluxo inteiro para telas pequenas",
      "Design systems com CSS tokens facilitam manutenção mas exigem disciplina",
    ],
    licoesEn: [
      "Mobile-first isn't just responsiveness — it's rethinking the entire flow for small screens",
      "Design systems with CSS tokens facilitate maintenance but require discipline",
    ],
    fariaDiferente: ["Usaria Tailwind CSS em vez de CSS puro para produtividade"],
    fariaDiferenteEn: ["I'd use Tailwind CSS instead of plain CSS for productivity"],
    proximosPassos: ["Integrar com APIs bancárias reais via Open Banking"],
    proximosPassosEn: ["Integrate with real banking APIs via Open Banking"],
    impact:
      "Dashboard mobile-first para gestão de finanças pessoais com analytics visuais e design system reutilizável.",
    impactEn:
      "Mobile-first dashboard for personal finance management with visual analytics and reusable design system.",
  },
  {
    id: "fintrack",
    slug: "fintrack",
    title: "FinTrack — Smart Finance",
    subtitle: "Academic · Requirements Engineering",
    description:
      "Sistema interativo de gestão financeira pessoal desenvolvido para a disciplina de Engenharia de Requisitos, com foco em experiência multiplataforma (mobile + web).",
    descriptionEn:
      "Interactive personal financial management system developed for the Requirements Engineering course, focused on multiplatform experience (mobile + web).",
    techStack: ["React 19", "TypeScript", "Vite", "Recharts", "Lucide React", "CSS Vanilla"],
    tags: ["React", "TypeScript", "Vite", "Recharts", "Multiplatform"],
    features: [
      "Registro rápido de despesas em menos de 5 segundos",
      "Controle dinâmico de orçamento com alertas visuais por cor",
      "Dashboard multiplataforma com Recharts interativo",
      "Exportação CSV e arquitetura offline-first com localStorage",
    ],
    featuresEn: [
      "Quick expense entry in under 5 seconds",
      "Dynamic budget control with color-coded visual alerts",
      "Multiplatform dashboard with interactive Recharts",
      "CSV data export and offline-first architecture (localStorage)",
    ],
    imageUrl: "/images/projects/fintrack.svg",
    imageAlt: "FinTrack offline-first budget and expense tracking preview",
    repoUrl: "https://github.com/Caio-enriq/FinTrack",
    category: "frontend",
    badge: "Academic",
    status: "completed",
    featured: false,
    year: 2025,
    problema:
      "Gestão de finanças pessoais em planilhas é trabalhosa e propensa a erros. Usuários precisam de uma solução rápida e visual.",
    problemaEn:
      "Personal finance management in spreadsheets is tedious and error-prone. Users need a quick and visual solution.",
    contexto:
      "Trabalho acadêmico de Engenharia de Requisitos para simplificar a gestão de finanças pessoais, abordando as dificuldades de rastreamento de despesas em planilhas convencionais.",
    contextoEn:
      "Academic Requirements Engineering project to simplify personal financial management, addressing the difficulties of tracking expenses in conventional spreadsheets.",
    objetivo:
      "Criar um sistema multiplataforma que permita entrada rápida de despesas e visualização clara do orçamento.",
    objetivoEn:
      "Create a multiplatform system that allows quick expense entry and clear budget visualization.",
    desafio: "Atender requisitos acadêmicos rigorosos enquanto mantinha usabilidade real.",
    responsabilidade: "Análise de requisitos, design multiplataforma, implementação completa.",
    arquitetura: [
      "Interface multiplataforma: mobile (operacional) + web (analítico)",
      "Sistema de alertas visuais com barras de progresso dinâmicas",
      "Dashboard com gráficos Recharts (rosca e área)",
      "Armazenamento local com localStorage para privacidade",
    ],
    arquiteturaEn: [
      "Multiplatform interface: mobile (operational) + web (analytical)",
      "Visual alert system with dynamic progress bars",
      "Dashboard with Recharts charts (donut and area)",
      "Local storage with localStorage for privacy",
    ],
    decisoes: [
      {
        title: "Offline-First",
        desc: "Dados ficam no dispositivo do usuário. Privacidade garantida.",
        titleEn: "Offline-First",
        descEn: "Data stays on the user's device. Privacy guaranteed.",
      },
    ],
    tradeoffs: [
      {
        escolha: "localStorage vs backend",
        resultado: "Sem persistência entre dispositivos, mas zero custo de infraestrutura.",
        escolhaEn: "localStorage vs backend",
        resultadoEn: "No cross-device persistence, but zero infrastructure cost.",
      },
    ],
    comoPensei: [
      "O requisito central era velocidade: entrada de despesa em menos de 5 segundos",
      "Separei mobile (entrada) de web (análise) porque os contextos de uso são diferentes",
      "localStorage para privacidade — dados financeiros não devem sair do dispositivo",
    ],
    comoPenseiEn: [
      "The core requirement was speed: expense entry in under 5 seconds",
      "I separated mobile (entry) from web (analysis) because usage contexts differ",
      "localStorage for privacy — financial data shouldn't leave the device",
    ],
    licoes: [
      "Engenharia de requisitos bem feita economiza semanas de desenvolvimento",
      "Offline-first é uma escolha de arquitetura, não uma limitação",
    ],
    licoesEn: [
      "Good requirements engineering saves weeks of development",
      "Offline-first is an architecture choice, not a limitation",
    ],
    fariaDiferente: ["Adicionaria sincronização via PWA para persistência entre dispositivos"],
    fariaDiferenteEn: ["I'd add PWA sync for cross-device persistence"],
    proximosPassos: ["Implementar PWA com Service Workers"],
    proximosPassosEn: ["Implement PWA with Service Workers"],
    impact:
      "Solução acadêmica que demonstra UX multiplataforma para gestão financeira, com arquitetura offline-first e privacidade de dados.",
    impactEn:
      "Academic solution demonstrating multiplatform UX for financial management, with offline-first architecture and data privacy.",
  },
  {
    id: "aura-pilates",
    slug: "aura",
    title: "Aura Pilates",
    subtitle: "Full-stack · Scandi-Boho Design",
    description:
      "Plataforma premium de gestão e agendamento de estúdio de Pilates com animações cinematográficas, design Scandi-Boho e SQLite.",
    descriptionEn:
      "Premium Pilates studio management and booking platform with cinematic animations, Scandi-Boho design, and SQLite.",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "SQLite",
      "better-sqlite3",
      "Lucide Icons",
    ],
    tags: ["Next.js", "React", "Tailwind", "Framer Motion", "SQLite"],
    features: [
      "Animação cinematográfica de entrada com parallax 3D no mouse",
      "Suporte completo a i18n (PT/EN)",
      "Modo claro/escuro com tons terrosos do estilo Scandi-Boho",
      "Full-stack: autenticação, dashboard do aluno e painel administrativo",
      "Agendamento interativo de aulas com efeitos 3D de inclinação",
    ],
    featuresEn: [
      "Cinematic entrance animation with 3D mouse parallax",
      "Full i18n support (PT/EN)",
      "Dark/Light mode with earthy Scandi-Boho tones",
      "Full-stack: auth, student dashboard, admin panel",
      "Interactive class booking with 3D tilt effects",
    ],
    imageUrl: "/images/projects/aura.svg",
    imageAlt: "Aura Pilates booking flow and studio admin preview",
    repoUrl: "https://github.com/Caio-enriq/Aura",
    category: "fullstack",
    badge: "Full-stack",
    status: "completed",
    featured: true,
    year: 2025,
    problema:
      "Estúdios de Pilates gerenciam agendamentos em planilhas ou WhatsApp. Precisam de uma plataforma que una experiência visual premium com gestão funcional.",
    problemaEn:
      "Pilates studios manage bookings in spreadsheets or WhatsApp. They need a platform combining premium visual experience with functional management.",
    contexto:
      "Projeto desenvolvido para uma instituição fictícia de Yoga/Pilates, com foco em experiência sensorial, animações cinematográficas e gestão completa de clientes e atividades.",
    contextoEn:
      "Project developed for a fictional Yoga/Pilates institution, focused on sensory experience, cinematic animations, and complete management of clients and activities.",
    objetivo:
      "Construir uma plataforma full-stack que una design sensorial premium com funcionalidades de gestão completas.",
    objetivoEn:
      "Build a full-stack platform combining premium sensory design with complete management features.",
    desafio:
      "Equilibrar animações cinematográficas com performance — muitas animações podem prejudicar a UX.",
    responsabilidade:
      "Arquitetura full-stack, design Scandi-Boho, implementação de animações, autenticação e painel admin.",
    arquitetura: [
      "Next.js 15 App Router com React 19",
      "Framer Motion para animações cinematográficas e parallax 3D",
      "SQLite via better-sqlite3 para banco local",
      "Design Scandi-Boho com glassmorphism e micro-animações",
    ],
    arquiteturaEn: [
      "Next.js 15 App Router with React 19",
      "Framer Motion for cinematic animations and 3D parallax",
      "SQLite via better-sqlite3 for local database",
      "Scandi-Boho design with glassmorphism and micro-animations",
    ],
    decisoes: [
      {
        title: "SQLite",
        desc: "Para um estúdio, SQLite é suficiente e elimina a necessidade de infraestrutura de banco.",
        titleEn: "SQLite",
        descEn: "For a studio, SQLite is sufficient and eliminates database infrastructure needs.",
      },
    ],
    tradeoffs: [
      {
        escolha: "Animações pesadas vs performance",
        resultado: "UX premium, mas requer otimização cuidadosa em dispositivos fracos.",
        escolhaEn: "Heavy animations vs performance",
        resultadoEn: "Premium UX, but requires careful optimization on weaker devices.",
      },
    ],
    comoPensei: [
      "O diferencial seria a experiência visual — precisava ser premium desde o primeiro frame",
      "Escolhi Framer Motion porque ele se integra nativamente com React",
      "SQLite porque o volume de dados de um estúdio é pequeno",
    ],
    comoPenseiEn: [
      "The differentiator would be the visual experience — it needed to be premium from the first frame",
      "I chose Framer Motion because it integrates natively with React",
      "SQLite because a studio's data volume is small",
    ],
    licoes: [
      "Design premium é possível com Next.js + Framer Motion sem comprometer performance",
      "SQLite é uma escolha válida para aplicações com volume de dados modesto",
    ],
    licoesEn: [
      "Premium design is possible with Next.js + Framer Motion without compromising performance",
      "SQLite is a valid choice for applications with modest data volume",
    ],
    fariaDiferente: ["Adicionaria sistema de notificações por email/SMS para lembretes de aula"],
    fariaDiferenteEn: ["I'd add email/SMS notification system for class reminders"],
    proximosPassos: ["Integrar gateway de pagamento", "Adicionar app mobile com React Native"],
    proximosPassosEn: ["Integrate payment gateway", "Add mobile app with React Native"],
    impact:
      "Plataforma full-stack com UX premium, demonstrando capacidade de integrar design sofisticado com funcionalidades de gestão completas.",
    impactEn:
      "Full-stack platform with premium UX, demonstrating ability to integrate sophisticated design with complete management features.",
  },
  {
    id: "taskflow",
    slug: "taskflow",
    title: "TaskFlow",
    subtitle: "Full-stack · Productivity",
    description:
      "Plataforma moderna e responsiva para gerenciamento de tarefas e produtividade, com autenticação JWT, dashboards multiprojeto e indicadores de progresso circular.",
    descriptionEn:
      "Modern and responsive task management and productivity platform with JWT authentication, multi-project dashboards, and circular progress indicators.",
    techStack: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Prisma ORM",
      "SQLite",
      "JWT",
      "bcryptjs",
      "Zod",
      "Docker",
    ],
    tags: ["Next.js", "React", "Prisma", "SQLite", "Docker"],
    features: [
      "Autenticação JWT segura com bcryptjs",
      "Múltiplos dashboards para diferentes projetos/áreas",
      "Indicadores circulares dinâmicos de progresso",
      "API modular com padrão Controllers/Services",
      "Pronto para deploy em container único com Docker",
    ],
    featuresEn: [
      "Secure JWT authentication with bcryptjs encryption",
      "Multiple dashboards for different projects/areas",
      "Dynamic circular progress indicators",
      "Modular API with Controllers/Services pattern",
      "Docker-ready for single-container deployment",
    ],
    imageUrl: "/images/projects/taskflow.svg",
    imageAlt: "TaskFlow kanban productivity workflow preview",
    repoUrl: "https://github.com/Caio-enriq/Taskflow",
    category: "fullstack",
    badge: "Full-stack",
    status: "completed",
    featured: true,
    year: 2025,
    problema:
      "Ferramentas de produtividade são ou genéricas demais ou complexas demais. Equipes pequenas precisam de algo simples mas poderoso.",
    problemaEn:
      "Productivity tools are either too generic or too complex. Small teams need something simple but powerful.",
    contexto:
      "Plataforma de produtividade pessoal para organizar tarefas através de dashboards isolados, com foco em experiência do usuário, alta performance e deploy via Docker.",
    contextoEn:
      "Personal productivity platform to organize tasks through isolated dashboards, focused on user experience, high performance, and Docker deployment.",
    objetivo:
      "Construir uma plataforma de produtividade com autenticação segura, dashboards multiprojeto e deploy simplificado.",
    objetivoEn:
      "Build a productivity platform with secure authentication, multi-project dashboards, and simplified deployment.",
    desafio:
      "Manter a experiência fluida enquanto adiciona segurança (JWT) e persistência (Prisma/SQLite).",
    responsabilidade: "Arquitetura full-stack, autenticação, API modular, dashboards e Docker.",
    arquitetura: [
      "Next.js 15 App Router com React 19 e Tailwind CSS",
      "Prisma ORM com SQLite para persistência de dados",
      "JWT + bcryptjs para autenticação segura",
      "Zod para validação de dados e Docker para deploy",
    ],
    arquiteturaEn: [
      "Next.js 15 App Router with React 19 and Tailwind CSS",
      "Prisma ORM with SQLite for data persistence",
      "JWT + bcryptjs for secure authentication",
      "Zod for data validation and Docker for deployment",
    ],
    decisoes: [
      {
        title: "Controllers/Services",
        desc: "Separação de responsabilidades: controllers tratam HTTP, services tratam lógica.",
        titleEn: "Controllers/Services",
        descEn: "Separation of concerns: controllers handle HTTP, services handle logic.",
      },
      {
        title: "Docker",
        desc: "Deploy em um único container. Elimina 'funciona na minha máquina'.",
        titleEn: "Docker",
        descEn: "Deploy in a single container. Eliminates 'works on my machine'.",
      },
    ],
    tradeoffs: [
      {
        escolha: "SQLite vs PostgreSQL",
        resultado: "Simples para deploy, mas limitações de concorrência.",
        escolhaEn: "SQLite vs PostgreSQL",
        resultadoEn: "Simple deployment, but concurrency limitations.",
      },
    ],
    comoPensei: [
      "O problema era organização: tarefas estavam dispersas em múltiplas ferramentas",
      "Escolhi Next.js porque o app precisa de SSR para SEO e performance",
      "Prisma porque elimina erros comuns de SQL e facilita migrações",
    ],
    comoPenseiEn: [
      "The problem was organization: tasks were scattered across multiple tools",
      "I chose Next.js because the app needs SSR for SEO and performance",
      "Prisma because it eliminates common SQL errors and facilitates migrations",
    ],
    licoes: [
      "Docker é essencial para qualquer projeto que será publicado em produção — não é opcional",
      "Zod para validação elimina uma categoria inteira de bugs",
    ],
    licoesEn: [
      "Docker is essential for any project that will be deployed — it's not optional",
      "Zod for validation eliminates an entire category of bugs",
    ],
    fariaDiferente: ["Usaria PostgreSQL em vez de SQLite para suporte a concorrência"],
    fariaDiferenteEn: ["I'd use PostgreSQL instead of SQLite for concurrency support"],
    proximosPassos: ["Migrar para PostgreSQL para produção", "Adicionar colaboração em tempo real"],
    proximosPassosEn: ["Migrate to PostgreSQL for production", "Add real-time collaboration"],
    impact:
      "Aplicação full-stack pronta para produção, com autenticação, deploy via Docker e arquitetura modular preparada para migração para PostgreSQL.",
    impactEn:
      "Production-ready full-stack application with authentication, Docker deployment, and modular architecture prepared for PostgreSQL migration.",
  },
  {
    id: "quiz-bot",
    slug: "bot-quiz",
    title: "Quiz Bot Pro",
    subtitle: "Python · AI Automation",
    description:
      "Bot inteligente e automatizado que lê a tela do computador e encontra respostas corretas para questões de múltipla escolha usando IA Google Gemini.",
    descriptionEn:
      "Smart, fully automated bot that reads your computer screen and finds correct answers for multiple-choice questions using Google Gemini AI.",
    techStack: ["Python", "Google Gemini API", "PyAutoGUI", "Rich", "dotenv"],
    tags: ["Python", "AI", "Gemini", "Automation", "CLI"],
    features: [
      "Captura completa de tela e detecção de respostas com IA",
      "Interface CLI profissional com a biblioteca Rich",
      "Instalação automática de dependências na primeira execução",
      "Interface bilíngue (PT/EN) com detecção do idioma do sistema",
      "Gerenciamento seguro de chave de API via .env",
    ],
    featuresEn: [
      "Complete screen capture and AI-powered answer detection",
      "Professional CLI interface with Rich library",
      "Auto-dependency installation on first run",
      "Bilingual interface (PT/EN) with OS language detection",
      "Secure API key management via .env",
    ],
    imageUrl: "/images/projects/quiz-bot.svg",
    imageAlt: "Quiz Bot Pro screen capture and Gemini automation preview",
    repoUrl: "https://github.com/Caio-enriq/Bot-quiz",
    category: "automation",
    badge: "AI",
    status: "completed",
    featured: false,
    year: 2025,
    problema:
      "Responder questões de múltipla escolha manualmente é lento e tedioso. Usuários precisam de uma solução automatizada.",
    problemaEn:
      "Manually answering multiple-choice questions is slow and tedious. Users need an automated solution.",
    contexto:
      "Automação inteligente para auxiliar em provas e questionários, demonstrando integração de captura de tela com IA generativa para resolução de problemas em tempo real.",
    contextoEn:
      "Intelligent automation to assist with exams and questionnaires, demonstrating screen capture integration with generative AI for real-time problem solving.",
    objetivo:
      "Construir um bot que leia a tela, identifique questões e encontre respostas corretas usando IA.",
    objetivoEn:
      "Build a bot that reads the screen, identifies questions, and finds correct answers using AI.",
    desafio:
      "Integrar captura de tela, processamento de imagem e IA generativa em um fluxo automatizado e confiável.",
    responsabilidade: "Arquitetura do bot, integração com Gemini API, interface CLI profissional.",
    arquitetura: [
      "PyAutoGUI para captura de tela automatizada",
      "Google Gemini API para análise de imagem e resposta",
      "Rich para interface CLI profissional com cores e painéis",
      "Auto-configuração de dependências na primeira execução",
    ],
    arquiteturaEn: [
      "PyAutoGUI for automated screen capture",
      "Google Gemini API for image analysis and response",
      "Rich for professional CLI interface with colors and panels",
      "Auto-dependency configuration on first run",
    ],
    decisoes: [
      {
        title: "Gemini over OpenAI",
        desc: "Custo menor e qualidade suficiente para análise de imagem de questões.",
        titleEn: "Gemini over OpenAI",
        descEn: "Lower cost and sufficient quality for question image analysis.",
      },
    ],
    tradeoffs: [
      {
        escolha: "Captura de tela vs OCR direto",
        resultado: "Mais flexível, mas depende de resolução da tela.",
        escolhaEn: "Screenshot vs direct OCR",
        resultadoEn: "More flexible, but depends on screen resolution.",
      },
    ],
    comoPensei: [
      "O problema era velocidade: questões precisavam ser respondidas em segundos",
      "Escolhi Gemini porque é rápido e barato para análise de imagem",
      "PyAutoGUI porque funciona em qualquer OS sem configuração",
    ],
    comoPenseiEn: [
      "The problem was speed: questions needed to be answered in seconds",
      "I chose Gemini because it's fast and cheap for image analysis",
      "PyAutoGUI because it works on any OS without configuration",
    ],
    licoes: [
      "Automação com IA generativa é mais fácil do que parece — a API faz o trabalho pesado",
      "Rich transforma qualquer CLI em algo profissional",
    ],
    licoesEn: [
      "Automation with generative AI is easier than it seems — the API does the heavy lifting",
      "Rich transforms any CLI into something professional",
    ],
    fariaDiferente: ["Adicionaria modo batch para processar múltiplas questões de uma vez"],
    fariaDiferenteEn: ["I'd add batch mode to process multiple questions at once"],
    proximosPassos: ["Suporte a múltiplos provedores de IA"],
    proximosPassosEn: ["Support for multiple AI providers"],
    impact:
      "Bot de produtividade que demonstra automação de IA combinando visão computacional com processamento de linguagem natural.",
    impactEn:
      "Productivity bot demonstrating AI automation combining computer vision with natural language processing.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}
