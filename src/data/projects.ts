export type Project = {
  id: string;
  category: { pt: string; en: string };
  title: { pt: string; en: string };
  summary: { pt: string; en: string };
  problem: { pt: string; en: string };
  solution: { pt: string; en: string };
  results: { pt: string[]; en: string[] };
  stack: string[];
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "customer-ops",
    category: {
      pt: "IA & Atendimento",
      en: "AI & Customer Support",
    },
    title: {
      pt: "Sistema de IA para Atendimento",
      en: "Multi-Channel Customer Operations Router",
    },
    summary: {
      pt: "Chatbot inteligente com integração multi-canais e roteamento por intents, reduzindo tempo médio de resposta.",
      en: "Intent-aware routing system across chat surfaces with structured logging, intelligent retries, and seamless human handoff capabilities.",
    },
    problem: {
      pt: "Uma empresa de e-commerce estava perdendo vendas devido ao alto volume de atendimentos simultâneos e demora nas respostas. Os clientes reclamavam do tempo de espera e muitos abandonavam o carrinho por falta de suporte imediato.",
      en: "High-concurrency support queues experienced slow first response times and fragmented context between communication channels, leading to poor customer experience.",
    },
    solution: {
      pt: "Utilizei n8n para orquestrar o fluxo de conversas, integrando com WhatsApp, Telegram e chat do site. O sistema identifica a intenção do usuário (dúvida sobre produto, status do pedido, reclamação) usando regras de correspondência de palavras-chave. Para casos complexos, o chat é redirecionado para um atendente humano com todo o histórico da conversa.",
      en: "Developed a workflow automation platform using n8n with REST APIs and webhooks to centralize operational processes and enable intelligent routing based on conversation intent.",
    },
    results: {
      pt: [
        "40% menos tempo de atendimento",
        "60% de redução no abandono de carrinho",
        "Satisfação do cliente aumentou em 35%",
        "Preservação completa do histórico para atendentes humanos",
      ],
      en: [
        "Reduced first response time by 40%",
        "Decreased abandoned sessions by 60%",
        "Customer satisfaction increased by 35%",
        "Improved agent productivity through context preservation",
      ],
    },
    stack: ["n8n", "REST APIs", "Webhooks", "Node.js", "JavaScript"],
    github: "https://github.com/Caio-enriq",
  },
  {
    id: "finance-erp",
    category: {
      pt: "Automação Comercial",
      en: "Business Process Automation",
    },
    title: {
      pt: "Automação Financeira TOTVS (Contas a Receber)",
      en: "ERP Finance Workflow Automation",
    },
    summary: {
      pt: "Automação com Python + Selenium para Protheus (TOTVS): localizar títulos, preencher e validar campos automaticamente.",
      en: "Browser automation system with validation layers, spreadsheet ingestion, and exception-safe execution for finance operations.",
    },
    problem: {
      pt: "O setor financeiro de uma distribuidora gastava cerca de 4 horas diárias lançando manualmente boletos e notas fiscais no sistema TOTVS. Além de lento, o processo estava sujeito a erros de digitação que causavam inconsistências nos relatórios e atrasos nos recebimentos.",
      en: "Manual ERP data entry consumed hours daily with high transcription risk and inconsistent audit trails, creating operational bottlenecks.",
    },
    solution: {
      pt: "Desenvolvi um robô em Python com Selenium que acessa o sistema TOTVS via navegador, exatamente como um usuário faria. O script lê planilhas Excel com os dados dos boletos, preenche os campos no sistema, confere se o lançamento foi concluído e registra tudo em um log. Para garantir a segurança, implementei delays aleatórios entre as ações para simular comportamento humano.",
      en: "Built Python-based automation using Selenium with Pandas for data processing, implementing validation layers and exception handling to ensure reliable finance operations.",
    },
    results: {
      pt: [
        "85% mais rápido que o processo manual",
        "Zero erros de digitação desde a implementação",
        "Economia de 20 horas de trabalho semanais",
        "Logs estruturados gerados automaticamente para auditoria",
      ],
      en: [
        "Reduced processing time by 85%",
        "Eliminated transcription errors entirely",
        "Saved 20 hours of manual labor per week",
        "Created deterministic audit logs for compliance",
      ],
    },
    stack: ["Python", "Selenium", "Pandas", "TOTVS ERP", "Excel"],
    github: "https://github.com/Caio-enriq",
  },
  {
    id: "etl-bi",
    category: {
      pt: "Plataforma de Dados",
      en: "Data Platform",
    },
    title: {
      pt: "Dashboard & Pipeline ETL",
      en: "Operational Intelligence Pipeline",
    },
    summary: {
      pt: "Pipeline de ETL horário para consolidar métricas operacionais e dashboard em Power BI para monitoramento de KPIs.",
      en: "Hourly ETL pipeline from PostgreSQL into analytics-ready models with automated alerting for threshold breaches.",
    },
    problem: {
      pt: "A diretoria de uma rede de varejo não tinha visibilidade em tempo real dos indicadores de vendas e estoque. Os relatórios eram gerados manualmente uma vez por semana, sempre defasados, dificultando a tomada de decisões rápidas sobre reposição de estoque e promoções.",
      en: "Weekly static reports couldn't support intraday decision-making for inventory management and promotional campaigns.",
    },
    solution: {
      pt: "Criei um pipeline ETL completo: um script Python extrai dados do banco PostgreSQL a cada hora, aplica transformações (agregações, limpeza, cálculos de KPIs) e alimenta um banco de dados otimizado para consultas. O Power BI se conecta a esse banco e atualiza os dashboards automaticamente. Implementei também um sistema de alertas por email quando os estoques estão baixos.",
      en: "Implemented automated ETL pipeline using Python and PostgreSQL with Power BI integration, enabling near real-time KPI monitoring and automated alerting.",
    },
    results: {
      pt: [
        "12+ KPIs monitorados em tempo real",
        "Alertas automáticos de estoque baixo por e-mail",
        "Relatórios atualizados a cada hora (antes eram semanais)",
        "Melhoria na precisão de estoque em 35%",
      ],
      en: [
        "Enabled near real-time decision making for 12+ KPIs",
        "Reduced reporting latency from weekly to hourly",
        "Automated critical threshold email alerts",
        "Improved inventory accuracy by 35%",
      ],
    },
    stack: ["Python", "PostgreSQL", "SQL", "Power BI", "ETL", "Pandas"],
    github: "https://github.com/Caio-enriq",
  },
  {
    id: "workspace",
    category: {
      pt: "Integrações",
      en: "Integrations",
    },
    title: {
      pt: "Google Workspace Productivity Fabric",
      en: "Google Workspace Productivity Fabric",
    },
    summary: {
      pt: "Automação no Google Workspace com Apps Script para roteamento de documentos, planilhas e gatilhos de webhook.",
      en: "Drive and Sheets orchestration patterns for document routing, approval workflows, and structured metadata management.",
    },
    problem: {
      pt: "As equipes internas perdiam tempo organizando arquivos desestruturados, sem taxonomia de nomes padronizada, controle de versão ou integração com fluxos de aprovação operacional.",
      en: "Teams struggled with unstructured files lacking canonical naming, versioning, and downstream process triggers.",
    },
    solution: {
      pt: "Desenvolvi scripts no Google Apps Script integrados com APIs do Google Drive e Sheets para criar taxonomias automáticas de pastas, fluxos de aprovação eletrônica por e-mail e gatilhos para notificação via webhooks REST.",
      en: "Developed Google Workspace automation using Apps Script and Drive/Sheets APIs to implement document routing, automated filing, and webhook-ready state transitions.",
    },
    results: {
      pt: [
        "Padronização absoluta da taxonomia de arquivos",
        "Arquivamento de documentos 100% automatizado",
        "Fluxos de aprovação e assinaturas integrados",
        "Gatilhos automáticos para outros sistemas via webhooks",
      ],
      en: [
        "Standardized folder taxonomies and document naming",
        "100% automated document filing in Drive",
        "Implemented email-based approval workflows",
        "Enabled webhook-based downstream triggers",
      ],
    },
    stack: ["Google Apps Script", "Drive API", "Sheets API", "REST APIs", "Automation"],
    github: "https://github.com/Caio-enriq",
  },
];
