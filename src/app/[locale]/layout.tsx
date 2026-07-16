import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { PersonJsonLd, PortfolioJsonLd } from "@/components/seo/json-ld";
import { routing } from "@/i18n/routing";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "en" ? "Caio Enrique | Portfolio" : "Caio Enrique | Portfólio";
  const description =
    locale === "en"
      ? "Caio Enrique is a software developer focused on backend, automation, and applied AI for real business workflows."
      : "Caio Enrique é desenvolvedor de software com foco em backend, automação e IA aplicada a processos reais.";

  return {
    title: {
      default: title,
      template: `%s | Caio Enrique`,
    },
    description,
    keywords: [
      "Caio Enrique",
      "software developer",
      "backend",
      "automation",
      "applied AI",
      "React",
      "Next.js",
      "TypeScript",
    ],
    authors: [{ name: "Caio Enrique" }],
    creator: "Caio Enrique",
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#818cf8" />
        <PersonJsonLd locale={locale} />
        <PortfolioJsonLd locale={locale} />
      </head>
      <body className="bg-background text-foreground min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <AnalyticsProvider enabled={process.env.VERCEL === "1"} />
      </body>
    </html>
  );
}
