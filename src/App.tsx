import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { BusinessImpact } from "./components/BusinessImpact";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Experience } from "./components/Experience";
import { GitHubSection } from "./components/GitHubSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useApp } from "./context/AppContext";

function JsonLd() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Caio Enrique",
      jobTitle: "Software Developer & Automation Engineer",
      url: typeof window !== "undefined" ? window.location.origin : "",
      sameAs: ["https://github.com/Caio-enriq", "https://www.linkedin.com/in/caioe"],
      email: "caio.desenvolvedor2416@gmail.com",
      knowsAbout: [
        "Python",
        "FastAPI",
        "APIs",
        "Automation",
        "Google Workspace",
        "PostgreSQL",
        "Node.js",
        "Workflow Automation",
        "Business Process Optimization",
        "Power BI",
      ],
      worksFor: {
        "@type": "Organization",
        name: "SOSdocs",
        address: "Brasília, DF, Brazil",
      },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    s.setAttribute("data-portfolio-ld", "1");
    document.head.appendChild(s);
    return () => {
      document.querySelectorAll('script[data-portfolio-ld="1"]').forEach((n) => n.remove());
    };
  }, []);
  return null;
}

function AppShell() {
  const { language } = useApp();

  useEffect(() => {
    document.title = language === "pt"
      ? "Caio Enrique | Desenvolvedor de Automação & BI"
      : "Caio Enrique | Automation & BI Developer";
  }, [language]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 border border-border"
      >
        {language === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <JsonLd />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <BusinessImpact />
        <Projects />
        <TechStack />
        <Experience />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <AppShell />;
}

