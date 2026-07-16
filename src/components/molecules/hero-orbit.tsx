"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import type { TimelineItem } from "@/components/ui/radial-orbital-timeline";
import {
  Code,
  FileText,
  Database,
  Globe,
  Terminal,
  Cpu,
  Cloud,
  GitBranch,
  Layers,
  Rocket,
} from "lucide-react";

const skills: TimelineItem[] = [
  {
    id: 1,
    title: "Python",
    date: "92%",
    content:
      "Automação corporativa, pipelines ETL, análise de dados com Pandas, integração com APIs REST e LLMs. Motor principal dos sistemas SOSdocs/SERPRO — FastAPI, SQLAlchemy, Pydantic.",
    category: "Backend",
    icon: Code,
    relatedIds: [2, 5, 6],
    status: "completed",
    energy: 92,
    projectIds: ["docz-upload", "enterprise-dashboard"],
    experienceId: "sosdocs",
  },
  {
    id: 2,
    title: "Apps Script",
    date: "90%",
    content:
      "Automação completa do ecossistema Google Workspace — Sheets, Drive, Firebase, Gmail. Integração com backends corporativos DocZ FileService e Integra. Pipelines de upload e indexação documental.",
    category: "Automation",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
    projectIds: ["docz-upload"],
    experienceId: "sosdocs",
  },
  {
    id: 3,
    title: "React",
    date: "82%",
    content:
      "Dashboards interativos B2B, SPA para plataformas documentais, componentes reutilizáveis com hooks e context API. Next.js, TypeScript, Tailwind CSS.",
    category: "Frontend",
    icon: Globe,
    relatedIds: [2, 4],
    status: "completed",
    energy: 82,
    projectIds: ["enterprise-dashboard", "fynnteck"],
    experienceId: "sosdocs",
  },
  {
    id: 4,
    title: "Node.js",
    date: "80%",
    content:
      "APIs RESTful, arquitetura BFF dual-stack (Node.js + Python), autenticação JWT, middlewares, integração com Google Workspace via backend híbrido. Express.js em produção.",
    category: "Backend",
    icon: Terminal,
    relatedIds: [3, 5],
    status: "completed",
    energy: 80,
    projectIds: ["enterprise-dashboard"],
    experienceId: "sosdocs",
  },
  {
    id: 5,
    title: "SQL",
    date: "85%",
    content:
      "Modelagem relacional avançada, queries complexas com JOINs, CTEs e Window Functions. PostgreSQL em produção, SQLAlchemy ORM, migrações Alembic.",
    category: "Data",
    icon: Database,
    relatedIds: [4, 1],
    status: "completed",
    energy: 85,
    projectIds: ["enterprise-dashboard", "portal-monorepo"],
    experienceId: "sosdocs",
  },
  {
    id: 6,
    title: "Java",
    date: "65%",
    content:
      "Desenvolvimento orientado a objetos, estruturas de dados, algoritmos. Base sólida acadêmica no UniCEUB com foco em OOP e resolução de problemas.",
    category: "Languages",
    icon: Cpu,
    relatedIds: [1, 5],
    status: "completed",
    energy: 65,
    projectIds: [],
    experienceId: null,
  },
  {
    id: 7,
    title: "Selenium",
    date: "85%",
    content:
      "Automação de web scraping, testes E2E, integração com TOTVS Protheus para baixas automáticas de títulos financeiros. Web scraping corporativo.",
    category: "Automation",
    icon: Rocket,
    relatedIds: [1, 8],
    status: "completed",
    energy: 85,
    projectIds: [],
    experienceId: "easytech",
  },
  {
    id: 8,
    title: "Docker",
    date: "72%",
    content:
      "Containers, Docker Compose, multi-stage builds, healthchecks, volumes e redes. Ambientes reprodutíveis para serviços backend e pipelines corporativos.",
    category: "DevOps",
    icon: Layers,
    relatedIds: [7, 9],
    status: "completed",
    energy: 72,
    projectIds: ["enterprise-dashboard"],
    experienceId: "sosdocs",
  },
  {
    id: 9,
    title: "Git",
    date: "88%",
    content:
      "Git Flow, Conventional Commits, PR workflows, rebase, cherry-pick. GitHub Actions para CI/CD. 6+ repositórios ativos com documentação completa.",
    category: "Tools",
    icon: GitBranch,
    relatedIds: [8, 10],
    status: "completed",
    energy: 88,
    projectIds: ["docz-upload", "enterprise-dashboard"],
    experienceId: "sosdocs",
  },
  {
    id: 10,
    title: "Linux",
    date: "75%",
    content:
      "Uso diário no EndeavourOS. Shell scripting, automação de ambientes, deploy, gerenciamento de servidores e containers. Terminal avançado.",
    category: "Systems",
    icon: Cloud,
    relatedIds: [9, 1],
    status: "completed",
    energy: 75,
    projectIds: [],
    experienceId: null,
  },
];

export function HeroOrbit() {
  return (
    <RadialOrbitalTimeline timelineData={skills} centerLabel="CE" defaultOpen autoOpenDelay={650} />
  );
}
