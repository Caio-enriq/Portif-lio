"use client";

import { useMemo, useState, type ComponentProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowLeft, Check, Download, FileText, FileType, Languages, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { resumes, type ResumeFormat, type ResumeLanguage } from "@/data/resume-downloads";

type ResumeDownloadStep = "language" | "format";

type ButtonVariant = NonNullable<ComponentProps<typeof Button>["variant"]>;
type ButtonSize = NonNullable<ComponentProps<typeof Button>["size"]>;

interface ResumeDownloadModalProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  iconClassName?: string;
}

const languageOptions: Array<{
  id: ResumeLanguage;
  flag: string;
  title: string;
  subtitle: string;
}> = [
  {
    id: "pt",
    flag: "🇧🇷",
    title: "Português",
    subtitle: "PT-BR",
  },
  {
    id: "en",
    flag: "🇺🇸",
    title: "English",
    subtitle: "EN",
  },
];

const formatOptions: Array<{
  id: ResumeFormat;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  icon: typeof FileText;
}> = [
  {
    id: "pdf",
    title: "PDF",
    description: {
      pt: "Ideal para visualização e impressão.",
      en: "Best for viewing and printing.",
    },
    icon: FileText,
  },
  {
    id: "docx",
    title: "DOCX",
    description: {
      pt: "Ideal para edição no Microsoft Word.",
      en: "Best for editing in Microsoft Word.",
    },
    icon: FileType,
  },
];

const modalCopy = {
  pt: {
    eyebrow: "Download profissional",
    title: "Escolha seu currículo",
    description: "Selecione o idioma e o formato ideal. O download começa automaticamente.",
    languageStep: "Idioma",
    formatStep: "Formato",
    chooseLanguage: "Escolha o idioma",
    chooseFormat: "Escolha o formato",
    back: "Voltar",
    close: "Fechar",
    selected: "Selecionado",
  },
  en: {
    eyebrow: "Professional download",
    title: "Choose your CV",
    description: "Select the language and preferred format. The download starts automatically.",
    languageStep: "Language",
    formatStep: "Format",
    chooseLanguage: "Choose language",
    chooseFormat: "Choose format",
    back: "Back",
    close: "Close",
    selected: "Selected",
  },
} as const;

function isResumeLanguage(value: string): value is ResumeLanguage {
  return value === "pt" || value === "en";
}

function downloadResume(file: { href: string; filename: string }) {
  const link = document.createElement("a");
  link.href = file.href;
  link.download = file.filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function ResumeDownloadModal({
  label,
  variant = "outline",
  size = "lg",
  className,
  iconClassName,
}: ResumeDownloadModalProps) {
  const locale = useLocale();
  const uiLanguage: ResumeLanguage = isResumeLanguage(locale) ? locale : "pt";
  const copy = modalCopy[uiLanguage];

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<ResumeDownloadStep>("language");
  const [selectedLanguage, setSelectedLanguage] = useState<ResumeLanguage | null>(null);
  const selectedLanguageOption = useMemo(
    () => languageOptions.find((option) => option.id === selectedLanguage),
    [selectedLanguage]
  );

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) return;
    setStep("language");
    setSelectedLanguage(null);
  };

  const handleClosed = (isOpen: boolean) => {
    if (isOpen) return;
    setStep("language");
    setSelectedLanguage(null);
  };

  const handleLanguageSelect = (language: ResumeLanguage) => {
    setSelectedLanguage(language);
    setStep("format");
  };

  const handleFormatSelect = (format: ResumeFormat) => {
    if (!selectedLanguage) return;
    downloadResume(resumes[selectedLanguage][format]);
    setOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        className={cn("gap-2", className)}
        onClick={() => setOpen(true)}
      >
        <Download className={cn("h-4 w-4", iconClassName)} />
        {label}
      </Button>

      <Dialog open={open} onOpenChange={handleOpenChange} onOpenChangeComplete={handleClosed}>
        <DialogContent
          closeLabel={copy.close}
          className="border-border/80 bg-background/95 shadow-primary/10 max-h-[calc(100dvh-2rem)] overflow-hidden rounded-2xl border p-0 shadow-2xl backdrop-blur-xl sm:max-w-lg"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.13),transparent_30%)]" />
          <div className="relative p-5 sm:p-6">
            <DialogHeader className="pr-8">
              <div className="text-primary mb-1 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                {copy.eyebrow}
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight">{copy.title}</DialogTitle>
              <DialogDescription>{copy.description}</DialogDescription>
            </DialogHeader>

            <div className="text-muted-foreground mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs font-medium">
              <StepPill active={step === "language"} done={Boolean(selectedLanguage)}>
                1. {copy.languageStep}
              </StepPill>
              <div className="bg-border h-px" />
              <StepPill active={step === "format"} done={false}>
                2. {copy.formatStep}
              </StepPill>
            </div>

            <div className="mt-6 min-h-[250px]">
              <AnimatePresence mode="wait" initial={false}>
                {step === "language" ? (
                  <motion.div
                    key="language"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="space-y-3"
                  >
                    <SectionLabel icon={Languages}>{copy.chooseLanguage}</SectionLabel>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {languageOptions.map((option) => (
                        <OptionButton
                          key={option.id}
                          selected={selectedLanguage === option.id}
                          onClick={() => handleLanguageSelect(option.id)}
                        >
                          <span className="border-border bg-muted/50 text-foreground flex h-11 w-11 items-center justify-center rounded-xl border text-xs font-bold">
                            {option.flag}
                          </span>
                          <span className="min-w-0 text-left">
                            <span className="text-foreground block text-sm font-semibold">
                              {option.title}
                            </span>
                            <span className="text-muted-foreground text-xs">{option.subtitle}</span>
                          </span>
                        </OptionButton>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="format"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <SectionLabel icon={FileText}>{copy.chooseFormat}</SectionLabel>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="gap-1.5"
                        onClick={() => setStep("language")}
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        {copy.back}
                      </Button>
                    </div>

                    {selectedLanguageOption && (
                      <div className="border-primary/20 bg-primary/5 text-muted-foreground flex items-center gap-2 rounded-lg border px-3 py-2 text-xs">
                        <Check className="text-primary h-3.5 w-3.5" />
                        <span>
                          {copy.selected}:{" "}
                          <strong className="text-foreground font-semibold">
                            {selectedLanguageOption.title} ({selectedLanguageOption.subtitle})
                          </strong>
                        </span>
                      </div>
                    )}

                    <div className="grid gap-3">
                      {formatOptions.map((option) => (
                        <OptionButton
                          key={option.id}
                          selected={false}
                          onClick={() => handleFormatSelect(option.id)}
                        >
                          <span className="border-border bg-muted/50 text-primary flex h-11 w-11 items-center justify-center rounded-xl border">
                            <option.icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0 flex-1 text-left">
                            <span className="text-foreground block text-sm font-semibold">
                              {option.title}
                            </span>
                            <span className="text-muted-foreground text-xs">
                              {option.description[uiLanguage]}
                            </span>
                          </span>
                          <Download className="text-muted-foreground group-hover/option:text-primary h-4 w-4 transition-colors" />
                        </OptionButton>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function StepPill({
  active,
  done,
  children,
}: {
  active: boolean;
  done: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border px-3 py-1.5 transition-colors",
        active
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-muted/40 text-muted-foreground"
      )}
    >
      {done ? <Check className="mr-1.5 h-3.5 w-3.5" /> : null}
      {children}
    </div>
  );
}

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: typeof Languages;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      <Icon className="text-primary h-4 w-4" />
      {children}
    </div>
  );
}

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "group/option flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200 outline-none",
        "hover:border-primary/50 hover:bg-primary/5 hover:shadow-primary/5 hover:-translate-y-0.5 hover:shadow-lg",
        "focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-3",
        selected
          ? "border-primary/60 bg-primary/10 shadow-primary/10 shadow-lg"
          : "border-border bg-card/65"
      )}
    >
      {children}
      {selected ? <Check className="text-primary ml-auto h-4 w-4" /> : null}
    </button>
  );
}
