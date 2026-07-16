import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");

  const footerLinks = {
    nav: [
      { href: "/", label: navT("home") },
      { href: "/sobre", label: navT("about") },
      { href: "/projetos", label: navT("projects") },
      { href: "/engineering", label: navT("engineering") },
      { href: "/timeline", label: navT("timeline") },
      { href: "/curriculo", label: navT("resume") },
      { href: "/contato", label: navT("contact") },
    ],
    social: [
      { href: "https://github.com/Caio-enriq", label: "GitHub" },
      { href: "https://linkedin.com/in/caio-enrique-/", label: "LinkedIn" },
    ],
  };

  return (
    <footer className="border-border bg-card border-t" role="contentinfo">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              caio<span className="text-primary">.dev</span>
            </Link>
            <p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {footerLinks.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">{t("social")}</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Caio Enrique. {t("copyright")}
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Badge variant="outline" className="max-w-full gap-1 text-xs whitespace-normal">
              <Globe className="h-3 w-3" />
              {t("openTo")}
            </Badge>
            <p className="text-muted-foreground flex flex-wrap items-center gap-1 text-xs">
              {t("built")} <Heart className="fill-primary text-primary h-3 w-3" /> {t("builtWith")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
