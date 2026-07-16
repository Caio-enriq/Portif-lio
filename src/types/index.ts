export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  descriptionEn?: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  featuresEn?: string[];
  tags?: string[];
  imageUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  category: "frontend" | "backend" | "fullstack" | "automation" | "data";
  badge?: string;
  status: "completed" | "in-progress" | "archived";
  featured?: boolean;
  year?: number;
  why?: string;
  whyEn?: string;
  how?: string[];
  howEn?: string[];
  impact?: string;
  impactEn?: string;
  problema?: string;
  problemaEn?: string;
  contexto?: string;
  contextoEn?: string;
  objetivo?: string;
  objetivoEn?: string;
  desafio?: string;
  desafioEn?: string;
  responsabilidade?: string;
  responsabilidadeEn?: string;
  arquitetura?: string[];
  arquiteturaEn?: string[];
  fluxo?: string[];
  fluxoEn?: string[];
  modelagem?: string[];
  modelagemEn?: string[];
  decisoes?: { title: string; desc: string; titleEn?: string; descEn?: string }[];
  tradeoffs?: { escolha: string; resultado: string; escolhaEn?: string; resultadoEn?: string }[];
  comoPensei?: string[];
  comoPenseiEn?: string[];
  licoes?: string[];
  licoesEn?: string[];
  fariaDiferente?: string[];
  fariaDiferenteEn?: string[];
  proximosPassos?: string[];
  proximosPassosEn?: string[];
}

export interface ResumeExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  techStack: string[];
}

export interface SkillConnection {
  projectId?: string;
  experienceId?: string;
  description?: string;
}

export interface ResumeEducation {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  description?: string[];
}

export interface ResumeSkill {
  name: string;
  level: "expert" | "advanced" | "intermediate" | "beginner";
}

export interface ResumeSection {
  title: string;
  skills?: ResumeSkill[];
  items?: (ResumeExperience | ResumeEducation)[];
}

export interface Translations {
  pt: Record<string, string>;
  en: Record<string, string>;
}

export type Locale = "pt" | "en";
