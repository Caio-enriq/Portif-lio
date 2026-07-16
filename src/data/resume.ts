import type { ResumeExperience, ResumeEducation, ResumeSkill, Locale } from "@/types";

export interface ResumeData {
  locale: Locale;
  objective: string;
  summary: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  softSkills: string[];
  languages: { lang: string; level: string }[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skillGroups: { title: string; skills: ResumeSkill[] }[];
  certifications: string[];
}

const pt: ResumeData = {
  locale: "pt",
  objective:
    "Atuar como engenheiro de software em uma organização de tecnologia, com foco em backend, arquitetura de sistemas, integração de APIs e soluções corporativas escaláveis.",
  summary:
    "Profissional de tecnologia com experiência prática na construção de aplicações corporativas, pipelines automatizados de processamento documental e integração de sistemas com inteligência artificial. Desenvolvo uma plataforma full-stack com mais de 12.500 linhas de código para operações ligadas ao SERPRO.",
  contact: {
    phone: "(61) 99235-4719",
    email: "caio.desenvolvedor2416@gmail.com",
    location: "Brasília, DF, Brasil",
  },
  softSkills: [
    "Organização e atenção a detalhes",
    "Comunicação clara e objetiva",
    "Trabalho colaborativo em equipe",
    "Proatividade e autonomia",
    "Rigor documental e padronização",
    "Orientação a resultados",
  ],
  languages: [
    { lang: "Português", level: "Nativo" },
    { lang: "Inglês", level: "Profissional (B2+)" },
    { lang: "Espanhol", level: "Básico" },
  ],
  experience: [
    {
      id: "sosdocs",
      period: "Mar 2026 - Atual",
      role: "Desenvolvedor de Software",
      company: "SOSdocs | Plataforma de Inteligência Documental - SERPRO",
      description: [
        "Desenvolvimento e manutenção de plataforma full-stack para gestão do ciclo de vida documental corporativo.",
        "Implementação de arquitetura híbrida com Python (FastAPI) e Node.js (Express), totalizando mais de 12.500 linhas em produção.",
        "Desenvolvimento de APIs REST com autenticação JWT, OAuth2 Google, middlewares e validação via Pydantic.",
        "Integração de OpenAI API e Google Gemini para validação documental.",
      ],
      techStack: ["Python", "FastAPI", "Node.js", "Express", "React", "PostgreSQL", "Docker"],
    },
    {
      id: "easytech",
      period: "2024 - início de 2025",
      role: "Auxiliar de Estoque",
      company: "EasyTech | Brasília, DF",
      description: [
        "Apoio à rotina operacional de estoque, organização de materiais e controle de entrada e saída.",
        "Conferência de itens, separação de produtos e suporte à manutenção da organização interna.",
        "Desenvolvimento de disciplina operacional, atenção a detalhes e responsabilidade com processos.",
      ],
      techStack: ["Controle de estoque", "Organização operacional", "Excel"],
    },
    {
      id: "bunge",
      period: "2023 - 2024",
      role: "Assistente de Recursos Humanos",
      company: "Bunge | Multinacional Fortune 500",
      description: [
        "Gestão documental e manutenção de bases de colaboradores e prestadores de serviço.",
        "Desenvolvimento de dashboards em Power BI para indicadores de RH.",
        "Análise de dados em Excel e administração de bibliotecas SharePoint.",
      ],
      techStack: ["Power BI", "Excel", "SharePoint"],
    },
  ],
  education: [
    {
      id: "cs-degree",
      period: "2025 - 2028",
      institution: "UniCEUB - Centro Universitário de Brasília",
      degree: "Bacharelado em Ciência da Computação",
      status: "4º semestre | Previsão de conclusão: 2027/2028",
    },
    {
      id: "it-technician",
      period: "Concluído",
      institution: "ETB - Escola Técnica de Brasília",
      degree: "Técnico em Informática",
      status: "Formação técnica em informática e fundamentos de computação",
    },
  ],
  skillGroups: [
    {
      title: "Linguagens",
      skills: [
        { name: "Python", level: "advanced" },
        { name: "JavaScript", level: "advanced" },
        { name: "SQL", level: "advanced" },
        { name: "Java", level: "intermediate" },
        { name: "C", level: "intermediate" },
        { name: "C++", level: "intermediate" },
        { name: "C#", level: "intermediate" },
        { name: "HTML5", level: "advanced" },
        { name: "CSS3", level: "advanced" },
      ],
    },
    {
      title: "Backend e APIs",
      skills: [
        { name: "FastAPI", level: "advanced" },
        { name: "Express.js", level: "advanced" },
        { name: "REST", level: "advanced" },
        { name: "JWT", level: "advanced" },
        { name: "OAuth2", level: "intermediate" },
        { name: "OpenAPI/Swagger", level: "intermediate" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "advanced" },
        { name: "Next.js", level: "advanced" },
        { name: "Vue.js", level: "intermediate" },
        { name: "Tailwind CSS", level: "advanced" },
        { name: "Chart.js", level: "intermediate" },
        { name: "Recharts", level: "intermediate" },
      ],
    },
    {
      title: "Dados",
      skills: [
        { name: "PostgreSQL", level: "advanced" },
        { name: "MySQL", level: "intermediate" },
        { name: "SQLite", level: "intermediate" },
        { name: "SQLAlchemy", level: "advanced" },
        { name: "Prisma", level: "intermediate" },
        { name: "DuckDB", level: "beginner" },
      ],
    },
    {
      title: "DevOps e Ferramentas",
      skills: [
        { name: "Docker", level: "advanced" },
        { name: "Docker Compose", level: "advanced" },
        { name: "Vercel", level: "advanced" },
        { name: "Git", level: "advanced" },
        { name: "GitHub", level: "advanced" },
      ],
    },
    {
      title: "IA e Automação",
      skills: [
        { name: "OpenAI API", level: "advanced" },
        { name: "Google Gemini", level: "intermediate" },
        { name: "Google Apps Script", level: "advanced" },
        { name: "Selenium", level: "advanced" },
        { name: "Prompt Engineering", level: "advanced" },
      ],
    },
    {
      title: "Integração",
      skills: [
        { name: "Google Drive API", level: "advanced" },
        { name: "Google Sheets API", level: "advanced" },
        { name: "Power BI", level: "intermediate" },
        { name: "Google Workspace", level: "advanced" },
      ],
    },
  ],
  certifications: [
    "Banco de Dados com SQL",
    "Python: lógica de programação e automação",
    "Java: desenvolvimento orientado a objetos",
    "C, C++ e C#: lógica de programação",
    "Desenvolvimento Web: HTML, CSS e JavaScript",
  ],
};

const en: ResumeData = {
  locale: "en",
  objective:
    "To work as a Software Engineer within a technology-driven organization, focusing on backend development, systems architecture, API integration, and scalable enterprise solutions.",
  summary:
    "Technology professional with practical experience building enterprise applications, automated document processing pipelines, and AI-integrated systems. I develop and maintain a full-stack platform with more than 12,500 lines of code for operations connected to SERPRO.",
  contact: {
    phone: "+55 61 99235-4719",
    email: "caio.desenvolvedor2416@gmail.com",
    location: "Brasília, DF, Brazil",
  },
  softSkills: [
    "Organization and attention to detail",
    "Clear and objective communication",
    "Collaborative teamwork",
    "Proactivity and autonomy",
    "Documentation discipline and standardization",
    "Results-oriented mindset",
  ],
  languages: [
    { lang: "Portuguese", level: "Native" },
    { lang: "English", level: "Professional (B2+)" },
    { lang: "Spanish", level: "Basic" },
  ],
  experience: [
    {
      id: "sosdocs",
      period: "Mar 2026 - Present",
      role: "Software Developer",
      company: "SOSdocs | Document Intelligence Platform - SERPRO",
      description: [
        "Development and maintenance of a full-stack platform for corporate document lifecycle management.",
        "Implementation of a hybrid architecture with Python (FastAPI) and Node.js (Express), totaling more than 12,500 production lines.",
        "Development of REST APIs with JWT authentication, Google OAuth2, middleware layers, and Pydantic validation.",
        "Integration of OpenAI API and Google Gemini for document validation.",
      ],
      techStack: ["Python", "FastAPI", "Node.js", "Express", "React", "PostgreSQL", "Docker"],
    },
    {
      id: "easytech",
      period: "2024 - Early 2025",
      role: "Inventory Assistant",
      company: "EasyTech | Brasília, DF",
      description: [
        "Supported inventory routines, material organization, and control of incoming and outgoing items.",
        "Checked items, prepared products, and helped maintain internal organization.",
        "Developed operational discipline, attention to detail, and responsibility with process routines.",
      ],
      techStack: ["Inventory control", "Operational organization", "Excel"],
    },
    {
      id: "bunge",
      period: "2023 - 2024",
      role: "Human Resources Assistant",
      company: "Bunge | Fortune 500 Multinational",
      description: [
        "Document management and maintenance of employee and contractor databases.",
        "Development of Power BI dashboards for HR indicators and management reporting.",
        "Data analysis in Excel and administration of SharePoint libraries.",
      ],
      techStack: ["Power BI", "Excel", "SharePoint"],
    },
  ],
  education: [
    {
      id: "cs-degree",
      period: "2025 - 2028",
      institution: "UniCEUB - Centro Universitário de Brasília",
      degree: "B.Sc. in Computer Science",
      status: "4th semester | Expected graduation: 2027/2028",
    },
    {
      id: "it-technician",
      period: "Completed",
      institution: "ETB - Escola Técnica de Brasília",
      degree: "IT Technician Diploma",
      status: "Technical foundation in computing and IT fundamentals",
    },
  ],
  skillGroups: [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: "advanced" },
        { name: "JavaScript", level: "advanced" },
        { name: "SQL", level: "advanced" },
        { name: "Java", level: "intermediate" },
        { name: "C", level: "intermediate" },
        { name: "C++", level: "intermediate" },
        { name: "C#", level: "intermediate" },
        { name: "HTML5", level: "advanced" },
        { name: "CSS3", level: "advanced" },
      ],
    },
    {
      title: "Backend and APIs",
      skills: [
        { name: "FastAPI", level: "advanced" },
        { name: "Express.js", level: "advanced" },
        { name: "REST", level: "advanced" },
        { name: "JWT", level: "advanced" },
        { name: "OAuth2", level: "intermediate" },
        { name: "OpenAPI/Swagger", level: "intermediate" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "advanced" },
        { name: "Next.js", level: "advanced" },
        { name: "Vue.js", level: "intermediate" },
        { name: "Tailwind CSS", level: "advanced" },
        { name: "Chart.js", level: "intermediate" },
        { name: "Recharts", level: "intermediate" },
      ],
    },
    {
      title: "Data",
      skills: [
        { name: "PostgreSQL", level: "advanced" },
        { name: "MySQL", level: "intermediate" },
        { name: "SQLite", level: "intermediate" },
        { name: "SQLAlchemy", level: "advanced" },
        { name: "Prisma", level: "intermediate" },
        { name: "DuckDB", level: "beginner" },
      ],
    },
    {
      title: "DevOps and Tools",
      skills: [
        { name: "Docker", level: "advanced" },
        { name: "Docker Compose", level: "advanced" },
        { name: "Vercel", level: "advanced" },
        { name: "Git", level: "advanced" },
        { name: "GitHub", level: "advanced" },
      ],
    },
    {
      title: "AI and Automation",
      skills: [
        { name: "OpenAI API", level: "advanced" },
        { name: "Google Gemini", level: "intermediate" },
        { name: "Google Apps Script", level: "advanced" },
        { name: "Selenium", level: "advanced" },
        { name: "Prompt Engineering", level: "advanced" },
      ],
    },
    {
      title: "Integration",
      skills: [
        { name: "Google Drive API", level: "advanced" },
        { name: "Google Sheets API", level: "advanced" },
        { name: "Power BI", level: "intermediate" },
        { name: "Google Workspace", level: "advanced" },
      ],
    },
  ],
  certifications: [
    "Databases with SQL",
    "Python: programming logic and automation",
    "Java: object-oriented development",
    "C, C++ and C#: programming logic",
    "Web Development: HTML, CSS and JavaScript",
  ],
};

export const resumeData: Record<Locale, ResumeData> = { pt, en };
