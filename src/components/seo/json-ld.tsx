interface PersonJsonLdProps {
  locale: string;
}

export function PersonJsonLd({ locale }: PersonJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Caio Enrique Inácio de Almeida",
    alternateName: "Caio Enrique",
    url: "https://caio.dev",
    jobTitle: locale === "en" ? "Software Developer" : "Desenvolvedor de software",
    worksFor: {
      "@type": "Organization",
      name: "SOSdocs",
    },
    sameAs: ["https://github.com/Caio-enriq", "https://www.linkedin.com/in/caioe/"],
    email: "caio.desenvolvedor2416@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    knowsAbout: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Google Apps Script",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface PortfolioJsonLdProps {
  locale: string;
}

export function PortfolioJsonLd({ locale }: PortfolioJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: locale === "en" ? "Caio Enrique | Portfolio" : "Caio Enrique | Portfólio",
    url: "https://caio.dev",
    description:
      locale === "en"
        ? "Software developer focused on backend, automation, and applied AI for real business workflows."
        : "Desenvolvedor de software com foco em backend, automação e IA aplicada a processos reais.",
    author: {
      "@type": "Person",
      name: "Caio Enrique",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
