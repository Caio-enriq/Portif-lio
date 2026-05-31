export type SkillItem = { name: string };

export type SkillCategory = {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  items: SkillItem[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: {
      pt: "Desenvolvimento Backend",
      en: "Backend Development",
    },
    description: {
      pt: "Tecnologias servidoras e desenvolvimento de APIs",
      en: "Server-side technologies and API development",
    },
    items: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "JWT / OAuth2" },
      { name: "Webhooks" },
      { name: "SQL" },
    ],
  },
  {
    id: "automation",
    title: {
      pt: "Automação de Workflows",
      en: "Workflow Automation",
    },
    description: {
      pt: "Automação de processos operacionais e integrações corporativas",
      en: "Business process automation and integrations",
    },
    items: [
      { name: "Google Workspace" },
      { name: "Google Drive API" },
      { name: "Google Sheets API" },
      { name: "n8n" },
      { name: "Selenium" },
      { name: "Playwright" },
      { name: "Apps Script" },
      { name: "Workflow Automation" },
    ],
  },
  {
    id: "frontend",
    title: {
      pt: "Desenvolvimento Frontend",
      en: "Frontend Development",
    },
    description: {
      pt: "Tecnologias web modernas e frameworks interativos",
      en: "Modern web technologies and frameworks",
    },
    items: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
      { name: "Next.js" },
    ],
  },
  {
    id: "data",
    title: {
      pt: "Dados & Bancos de Dados",
      en: "Data & Databases",
    },
    description: {
      pt: "Engenharia de dados, BI e administração de bancos",
      en: "Data engineering and database management",
    },
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "ETL Pipelines" },
      { name: "Power BI" },
      { name: "Data Analysis" },
      { name: "Pandas" },
    ],
  },
  {
    id: "devops",
    title: {
      pt: "DevOps & Ferramentas",
      en: "DevOps & Tools",
    },
    description: {
      pt: "Operações de desenvolvimento e ferramentas de produtividade",
      en: "Development operations and productivity tools",
    },
    items: [
      { name: "Git / GitHub" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "CLI Tools" },
      { name: "CI/CD" },
      { name: "Version Control" },
    ],
  },
];
