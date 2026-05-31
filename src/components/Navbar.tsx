import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, theme, setTheme } = useApp();
  const t = TRANSLATIONS[language];

  const links = [
    { href: "#hero", label: t.navHome },
    { href: "#about", label: t.navAbout },
    { href: "#business-impact", label: t.navImpact },
    { href: "#projects", label: t.navProjects },
    { href: "#stack", label: t.navStack },
    { href: "#experience", label: t.navExperience },
    { href: "#github", label: t.navGithub },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#hero" className="group flex items-center gap-2 font-semibold tracking-tight">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white">
            C
            <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/20 opacity-0 transition group-hover:opacity-100" />
          </span>
          <span className="hidden sm:block text-text-primary">
            Caio<span className="text-text-muted">.dev</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm text-text-secondary transition hover:bg-background-card hover:text-text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="flex items-center gap-1.5 rounded-full border border-border bg-background-card px-3 py-1.5 text-xs font-semibold text-text-secondary transition hover:border-accent hover:text-text-primary shadow-sm"
            aria-label="Switch Language"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{language === "pt" ? "EN" : "PT-BR"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border border-border bg-background-card p-1.5 text-text-secondary transition hover:border-accent hover:text-text-primary shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full border border-border bg-background-card px-4 py-2 text-sm font-medium text-text-primary transition hover:border-accent hover:text-accent sm:inline-flex"
          >
            {t.getInTouch}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex rounded-full border border-border bg-background-card p-2 text-text-secondary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-3 text-sm text-text-secondary hover:bg-background-card hover:text-text-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl px-3 py-3 text-sm text-accent hover:bg-background-card"
              onClick={() => setOpen(false)}
            >
              {t.getInTouch}
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
