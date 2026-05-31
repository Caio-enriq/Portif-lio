export type ExperienceItem = {
  title: { pt: string; en: string };
  company: string;
  location: { pt: string; en: string };
  period: { pt: string; en: string };
  type: { pt: string; en: string };
  description: { pt: string; en: string };
  responsibilities: { pt: string[]; en: string[] };
  current?: boolean;
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: {
      pt: "Desenvolvedor de Automação de TI",
      en: "IT Automation Developer",
    },
    company: "SOSdocs",
    location: {
      pt: "Brasília, DF, Brasil",
      en: "Brasilia, DF, Brazil",
    },
    period: {
      pt: "Atual",
      en: "Present",
    },
    type: {
      pt: "Tempo Integral",
      en: "Full-time",
    },
    description: {
      pt: "Desenvolvimento de soluções de automação e ferramentas internas para otimizar workflows operacionais e melhorar a eficiência do negócio.",
      en: "Development of automation solutions and internal tools to optimize operational workflows and improve business efficiency.",
    },
    responsibilities: {
      pt: [
        "Sistemas de automação de workflows com n8n e REST APIs",
        "Automação de navegadores com Selenium e Python",
        "Pipelines ETL para inteligência operacional e reporting",
        "Integração com Google Workspace APIs para gestão de documentos",
        "Camadas de validação e automação exception-safe",
        "Redução de carga operacional manual via otimização de processos",
      ],
      en: [
        "Workflow automation systems with n8n and REST APIs",
        "Browser automation with Selenium and Python",
        "ETL pipelines for operational intelligence and reporting",
        "Integration with Google Workspace APIs for document management",
        "Validation layers and exception-safe automation",
        "Reduction of manual operational load via process optimization",
      ],
    },
    current: true,
  },
  {
    title: {
      pt: "Auxiliar Administrativo",
      en: "Administrative Assistant",
    },
    company: "EasyTech",
    location: {
      pt: "Brasília, DF, Brasil",
      en: "Brasilia, DF, Brazil",
    },
    period: {
      pt: "2025",
      en: "2025",
    },
    type: {
      pt: "Tempo Integral",
      en: "Full-time",
    },
    description: {
      pt: "Organização e consolidação de dados financeiros e operacionais no sistema TOTVS Protheus.",
      en: "Organization and consolidation of financial and operational data in the TOTVS Protheus system.",
    },
    responsibilities: {
      pt: [
        "Conferência e validação de informações de notas fiscais, boletos e extratos bancários",
        "Apoio a rotinas de contas a pagar e receber",
        "Utilização de Excel avançado para controles e reportes internos",
        "Consolidação de dados operacionais e financeiros",
      ],
      en: [
        "Verification and validation of invoices, slips, and bank statements",
        "Support for accounts payable and receivable routines",
        "Frequent use of advanced Excel for internal controls and reports",
        "Consolidation of operational and financial data",
      ],
    },
  },
  {
    title: {
      pt: "Jovem Aprendiz RH",
      en: "HR Apprentice",
    },
    company: "Bunge (SIA)",
    location: {
      pt: "Brasília, DF, Brasil",
      en: "Brasilia, DF, Brazil",
    },
    period: {
      pt: "2023 - 2025",
      en: "2023 - 2025",
    },
    type: {
      pt: "Meio Período",
      en: "Part-time",
    },
    description: {
      pt: "Organização, conferência e controle de bases de dados de colaboradores próprios e terceiros em ambiente multinacional.",
      en: "Organization, verification, and database control of internal and third-party employees in a multinational environment.",
    },
    responsibilities: {
      pt: [
        "Apoio à consolidação de informações para controles internos e rotinas administrativas",
        "Utilização frequente de Excel, PowerPoint e Word para estruturação de dados",
        "Uso de SharePoint e Power BI para organização e comunicação de informações",
        "Atuação integrada em ambiente corporativo com múltiplas áreas",
      ],
      en: [
        "Support in consolidating information for internal controls and admin routines",
        "Frequent use of Excel, PowerPoint, and Word for data structuring",
        "Usage of SharePoint and Power BI for organizing and sharing information",
        "Collaboration in a corporate environment with multiple departments",
      ],
    },
  },
];
