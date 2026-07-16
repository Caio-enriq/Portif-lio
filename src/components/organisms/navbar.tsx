"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname } from "@/i18n/navigation";
import { Menu, X, SunMoon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = useLocale();
  const { setTheme, resolvedTheme } = useTheme();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/sobre", label: t("about") },
    { href: "/projetos", label: t("projects") },
    { href: "/engineering", label: t("engineering") },
    { href: "/timeline", label: t("timeline") },
    { href: "/curriculo", label: t("resume") },
    { href: "/contato", label: t("contact") },
  ];

  const localizedPath = useCallback(
    (href: string) => `/${locale}${href === "/" ? "" : href}`,
    [locale]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((resolvedTheme ?? "dark") === "light" ? "dark" : "light");
  }, [resolvedTheme, setTheme]);

  const toggleLocale = useCallback(() => {
    const next = locale === "pt" ? "en" : "pt";
    const nextPath = `/${next}${pathname === "/" ? "" : pathname}`;
    window.location.assign(nextPath);
  }, [pathname, locale]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-border bg-background/80 border-b backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        {/* Logo */}
        <a href={localizedPath("/")} className="text-lg font-semibold tracking-tight">
          caio<span className="text-primary">.dev</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={localizedPath(link.href)}
                  className={cn(
                    "hover:text-foreground relative text-sm font-medium transition-colors",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="bg-primary absolute -bottom-1 left-0 h-px w-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleLocale} className="h-8 w-8 text-xs">
              <Globe className="h-4 w-4" />
              <span className="sr-only">{t("toggleLanguage")}</span>
            </Button>
            <span className="text-muted-foreground text-xs font-medium">
              {locale.toUpperCase()}
            </span>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
              <SunMoon className="h-4 w-4" />
              <span className="sr-only">{t("toggleTheme")}</span>
            </Button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleLocale} className="h-8 w-8 text-xs">
            <Globe className="h-4 w-4" />
            <span className="sr-only">{t("toggleLanguage")}</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
            <SunMoon className="h-4 w-4" />
            <span className="sr-only">{t("toggleTheme")}</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="h-8 w-8"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{t("toggleMenu")}</span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "border-border bg-background/95 max-h-96 border-b backdrop-blur-xl" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 pt-2 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={localizedPath(link.href)}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "hover:bg-muted block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href ? "bg-muted text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
