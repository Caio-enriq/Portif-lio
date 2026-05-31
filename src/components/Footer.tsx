import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function Footer() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];
  const year = new Date().getFullYear();

  const links = [
    { href: "https://github.com/Caio-enriq", label: "GitHub", external: true },
    { href: "https://www.linkedin.com/in/caioe", label: "LinkedIn", external: true },
    { href: "mailto:caio.desenvolvedor2416@gmail.com", label: "Email", external: false },
  ];

  const navLinks = [
    { href: "#about", label: t.navAbout },
    { href: "#projects", label: t.navProjects },
    { href: "#stack", label: t.navStack },
    { href: "#experience", label: t.navExperience },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <footer className="border-t border-border bg-background-elevated px-6 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-flex items-center gap-2 mb-4 group">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-bold text-white shadow-md">
                C
              </span>
              <span className="text-lg font-semibold text-text-primary transition-colors">
                Caio<span className="text-text-muted">.dev</span>
              </span>
            </a>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed transition-colors">
              {t.footerDesc}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 transition-colors">
              {t.footerLinksTitle}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 transition-colors">
              {t.navContact}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8 transition-colors duration-300">
          <p className="text-xs text-text-muted transition-colors">
            © {year} Caio Enrique. {t.footerCopy}
          </p>
          <p className="text-xs text-text-muted transition-colors">
            {t.footerDevWith}{" "}
            <span className="text-accent font-semibold">React</span>
            {" + "}
            <span className="text-accent font-semibold">TypeScript</span>
            {" + "}
            <span className="text-accent font-semibold">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
