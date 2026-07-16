export const resumeLanguages = ["pt", "en"] as const;
export const resumeFormats = ["pdf", "docx"] as const;

export type ResumeLanguage = (typeof resumeLanguages)[number];
export type ResumeFormat = (typeof resumeFormats)[number];

export type ResumeFile = {
  href: string;
  filename: string;
};

export const resumes: Record<ResumeLanguage, Record<ResumeFormat, ResumeFile>> = {
  pt: {
    pdf: {
      href: "/Caio_Enrique_Curriculo.pdf",
      filename: "Caio_Enrique_Curriculo_PT-BR.pdf",
    },
    docx: {
      href: "/Caio_Enrique_Curriculo.docx",
      filename: "Caio_Enrique_Curriculo_PT-BR.docx",
    },
  },
  en: {
    pdf: {
      href: "/Caio_Enrique_Resume.pdf",
      filename: "Caio_Enrique_CV_EN.pdf",
    },
    docx: {
      href: "/Caio_Enrique_Resume.docx",
      filename: "Caio_Enrique_CV_EN.docx",
    },
  },
};
