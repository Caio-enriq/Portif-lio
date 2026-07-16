import type { Locale } from "@/types";

export const translations: Record<Locale, Record<string, string>> = {
  pt: {
    // Nav
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.resume": "Currículo",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.name": "Caio Enrique",
    "hero.role": "Full-Stack Developer & Automação Enterprise",
    "hero.subtitle": "Full-Stack Developer · Enterprise Automation @ SOSdocs",
    "hero.description":
      "Automatizo sistemas empresariais com Python, Google Apps Script, React e APIs REST, com foco em integração de plataformas e eficiência operacional.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.about": "Sobre Mim",

    // About
    "about.title": "Sobre Mim",
    "about.subtitle": "Desenvolvedor full-stack na SOSdocs · Ciência da Computação @ UniCEUB",
    "about.identity": "Identidade",
    "about.languages": "Idiomas",
    "about.goal": "Objetivo",
    "about.ireland": "Aberto a oportunidades na Irlanda e remoto internacional",
    "about.objective":
      "Meu objetivo é atuar como engenheiro de software em uma organização de tecnologia reconhecida internacionalmente, com preferência pela Irlanda. Estou no 4º semestre de Ciência da Computação no UniCEUB, com previsão de formação em aproximadamente um ano e meio, e busco oportunidades de estágio ou posição júnior — presencial ou remota.",
    "about.currentWork": "Trabalho Atual — SOSdocs",
    "about.currentWorkDesc":
      "Desde março de 2026 atuo como desenvolvedor na SOSdocs, automatizando sistemas empresariais integrados ao ecossistema Google Workspace. Desenvolvo soluções com Google Apps Script, Sheets, Drive, Firebase e APIs REST corporativas (DocZ FileService e Integra). Parte dos meus projetos no GitHub nasceu de demandas reais do trabalho.",
    "about.achievements": "Conquistas",
    "about.achievement1": "Automação de upload e indexação documental (DocZ Upload System)",
    "about.achievement2": "Dashboards B2B com Node.js, Python e Chart.js",
    "about.achievement3": "Pipelines ETL e analytics com Python/Pandas",
    "about.achievement4": "Integração Power BI, Google Sheets e Vercel",
    "about.education": "Formação",
    "about.stack": "Stack & Habilidades",
    "about.previousExperience": "Experiência Anterior",

    // Stats
    "stats.projects": "Projetos no portfólio",
    "stats.demos": "Demos ao vivo",
    "stats.openTo": "Aberto à Irlanda",
    "stats.semester": "Semestre na graduação",

    // Projects
    "projects.title": "Projetos",
    "projects.subtitle":
      "Soluções reais de automação empresarial, analytics e full-stack — da SOSdocs à faculdade",
    "projects.liveDemos": "Demos ao Vivo — Teste Agora",
    "projects.liveDemosDesc": "Projetos funcionando diretamente no navegador, sem instalação",
    "projects.all": "Todos",
    "projects.frontend": "Frontend",
    "projects.fullstack": "Full Stack",
    "projects.data": "Analytics",
    "projects.automation": "Automação",
    "projects.viewAll": "Ver Todos no GitHub",
    "projects.viewDetails": "Ver detalhes",
    "projects.viewDemo": "Ver Demo",
    "projects.viewCode": "Ver Código",
    "projects.why": "Por que foi feito?",
    "projects.how": "Como foi feito?",
    "projects.tech": "Tecnologias Utilizadas",
    "projects.impact": "Impacto",
    "projects.close": "Fechar",
    "projects.back": "Voltar",
    "projects.description": "Descrição",
    "projects.results": "Resultados",
    "projects.year": "Ano",
    "projects.category": "Categoria",

    // Resume
    "resume.title": "Currículo",
    "resume.download": "Baixar PDF",
    "resume.objective": "Objetivo Profissional",
    "resume.summary": "Resumo Profissional",
    "resume.contact": "Informações de Contato",
    "resume.softSkills": "Competências Comportamentais",
    "resume.experience": "Experiência Profissional",
    "resume.education": "Formação Acadêmica",
    "resume.skills": "Competências Técnicas",
    "resume.certifications": "Certificações e Cursos Complementares",
    "resume.languages": "Idiomas",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Vamos transformar seus processos juntos!",
    "contact.location": "Localização",
    "contact.availability": "Disponibilidade",
    "contact.availabilityValue": "Estágio & Posições Júnior",
    "contact.name": "Seu nome",
    "contact.email": "Seu melhor email",
    "contact.message": "Descreva sua ideia ou projeto...",
    "contact.send": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.success": "Mensagem enviada!",
    "contact.error": "Erro ao enviar. Tente novamente.",

    // Footer
    "footer.quickLinks": "Links Rápidos",
    "footer.technologies": "Tecnologias",
    "footer.copyright": "Todos os direitos reservados.",
    "footer.built": "Desenvolvido com",
    "footer.builtWith": "Python, React e Google Workspace",

    // Timeline
    "timeline.title": "Linha do Tempo",
    "timeline.subtitle": "Da curiosidade inicial ao desenvolvimento de soluções reais",
    "timeline.future": "Próximos passos",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.resume": "Resume",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I am",
    "hero.name": "Caio Enrique",
    "hero.role": "Full-Stack Developer & Enterprise Automation",
    "hero.subtitle": "Full-Stack Developer · Enterprise Automation @ SOSdocs",
    "hero.description":
      "I automate enterprise systems with Python, Google Apps Script, React and REST APIs, with a focus on platform integration and operational efficiency.",
    "hero.cta.projects": "View Projects",
    "hero.cta.about": "About Me",

    // About
    "about.title": "About Me",
    "about.subtitle": "Full-stack developer at SOSdocs · Computer Science @ UniCEUB",
    "about.identity": "Identity",
    "about.languages": "Languages",
    "about.goal": "Goal",
    "about.ireland": "Open to opportunities in Ireland and international remote work",
    "about.objective":
      "My goal is to work as a software engineer at a globally recognized technology organization, preferably in Ireland. I'm in my 4th semester of Computer Science at UniCEUB, with expected graduation in approximately one and a half years, and I'm seeking internship or junior position opportunities — on-site or remote.",
    "about.currentWork": "Current Work — SOSdocs",
    "about.currentWorkDesc":
      "Since March 2026, I have been working as a developer at SOSdocs, automating enterprise systems integrated with the Google Workspace ecosystem. I develop solutions with Google Apps Script, Sheets, Drive, Firebase, and corporate REST APIs (DocZ FileService and Integra). Part of my GitHub work comes from real workplace demands.",
    "about.achievements": "Achievements",
    "about.achievement1": "Document upload and indexing automation (DocZ Upload System)",
    "about.achievement2": "B2B dashboards with Node.js, Python, and Chart.js",
    "about.achievement3": "ETL pipelines and analytics with Python/Pandas",
    "about.achievement4": "Power BI, Google Sheets, and Vercel integration",
    "about.education": "Education",
    "about.stack": "Stack & Skills",
    "about.previousExperience": "Previous Experience",

    // Stats
    "stats.projects": "Portfolio projects",
    "stats.demos": "Live demos",
    "stats.openTo": "Open to Ireland",
    "stats.semester": "Degree semester",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle":
      "Real enterprise automation, analytics and full-stack solutions — from SOSdocs to university",
    "projects.liveDemos": "Live Demos — Try Now",
    "projects.liveDemosDesc": "Projects running directly in the browser, no installation needed",
    "projects.all": "All",
    "projects.frontend": "Frontend",
    "projects.fullstack": "Full Stack",
    "projects.data": "Analytics",
    "projects.automation": "Automation",
    "projects.viewAll": "View All on GitHub",
    "projects.viewDetails": "View details",
    "projects.viewDemo": "View Demo",
    "projects.viewCode": "View Code",
    "projects.why": "Why was it built?",
    "projects.how": "How was it built?",
    "projects.tech": "Technologies Used",
    "projects.impact": "Impact",
    "projects.close": "Close",
    "projects.back": "Back",
    "projects.description": "Description",
    "projects.results": "Results",
    "projects.year": "Year",
    "projects.category": "Category",

    // Resume
    "resume.title": "Resume",
    "resume.download": "Download PDF",
    "resume.objective": "Professional Objective",
    "resume.summary": "Professional Summary",
    "resume.contact": "Contact Information",
    "resume.softSkills": "Professional Competencies",
    "resume.experience": "Professional Experience",
    "resume.education": "Education",
    "resume.skills": "Technical Skills",
    "resume.certifications": "Certifications and Additional Courses",
    "resume.languages": "Languages",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's transform your processes together!",
    "contact.location": "Location",
    "contact.availability": "Availability",
    "contact.availabilityValue": "Internship & Junior Roles",
    "contact.name": "Your name",
    "contact.email": "Your best email",
    "contact.message": "Describe your idea or project...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent!",
    "contact.error": "Error sending. Please try again.",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.technologies": "Technologies",
    "footer.copyright": "All rights reserved.",
    "footer.built": "Built with",
    "footer.builtWith": "Python, React & Google Workspace",

    // Timeline
    "timeline.title": "Timeline",
    "timeline.subtitle": "From early curiosity to building real software solutions",
    "timeline.future": "Next steps",
  },
};
