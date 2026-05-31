import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function Hero() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  const socials = [
    {
      href: "https://github.com/Caio-enriq",
      label: "GitHub",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/caioe",
      label: "LinkedIn",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: "mailto:caio.desenvolvedor2416@gmail.com",
      label: "Email",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-background-elevated transition-colors duration-300" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(var(--accent)/0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(var(--accent)/0.08),transparent)]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] transition-opacity"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center z-10 py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-8 flex flex-col items-center"
        >
          {/* Circular Profile Photo with glowing rings */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
            className="relative mb-4 group"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-indigo-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden border-2 border-background bg-background-card">
              <img
                src="/caracaio.jpg"
                alt="Caio Enrique"
                className="h-full w-full object-cover object-center transform group-hover:scale-105 transition duration-500"
                fetchPriority="high"
              />
            </div>
            {/* Ping Indicator */}
            <span className="absolute bottom-1 right-2 flex h-4.5 w-4.5 rounded-full border-2 border-background bg-emerald-500">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            </span>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-colors backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.availableForOpportunities}
          </motion.div>

          {/* Headline */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight transition-colors">
              {language === "pt" ? (
                <>
                  Sistemas de automação{" "}
                  <span className="bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
                    {t.heroTitleHighlight}
                  </span>{" "}
                  que geram impacto real
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
                    Scalable
                  </span>{" "}
                  automation systems that generate real impact
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed transition-colors">
              {t.heroSubtitle}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              {t.btnProjects}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-8 py-4 text-sm font-semibold text-text-primary transition-all hover:border-accent hover:bg-background/50 hover:-translate-y-0.5 backdrop-blur-sm shadow-sm"
            >
              {t.btnContact}
            </a>
            <a
              href="https://github.com/Caio-enriq"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-8 py-4 text-sm font-semibold text-text-secondary transition-all hover:border-accent hover:text-text-primary hover:-translate-y-0.5 shadow-sm"
            >
              {t.btnGithub}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex gap-3 justify-center">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                title={s.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent hover:text-text-primary hover:-translate-y-0.5 backdrop-blur-sm shadow-sm"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="flex justify-center pt-8"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
              aria-label="Rolar para baixo"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="animate-bounce"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
