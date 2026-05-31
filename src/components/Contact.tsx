import { useEffect, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function Contact() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const contactInfo = [
    {
      id: "email",
      label: t.contactCardEmailTitle,
      value: "caio.desenvolvedor2416@gmail.com",
      href: "mailto:caio.desenvolvedor2416@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/caioe",
      href: "https://www.linkedin.com/in/caioe",
      external: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    },
    {
      id: "availability",
      label: t.contactCardAvailabilityTitle,
      value: t.contactCardAvailabilityVal,
      href: "#contact",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (publicKey) emailjs.init(publicKey);
  }, [publicKey]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    if (!publicKey || !serviceId || !templateId) {
      // Fallback: Mailto link if EmailJS keys are not provided
      const subject = encodeURIComponent(`Portfólio — ${name}`);
      const body = encodeURIComponent(`De: ${email}\n\n${message}`);
      window.location.href = `mailto:caio.desenvolvedor2416@gmail.com?subject=${subject}&body=${body}`;
      setStatus("mailto");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(serviceId, templateId, { name, email, message });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 bg-background-elevated transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.contactSectionTitle}
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 transition-colors">
            {t.contactTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl transition-colors">
            {t.contactSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-8"
          >
            <p className="text-text-secondary leading-relaxed text-lg transition-colors">
              {language === "pt"
                ? "Seja para discutir um projeto de automação, uma oportunidade de trabalho ou estágio, ou apenas trocar uma ideia sobre tecnologia — estou disponível."
                : "Whether to discuss an automation project, a work or internship opportunity, or just exchange ideas about technology — I'm available."}
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.id}
                  href={info.href}
                  target={info.external ? "_blank" : undefined}
                  rel={info.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  className="group flex items-center gap-4 bg-background-card border border-border rounded-xl p-5 hover:border-accent hover:bg-background transition-all duration-300 shadow-sm"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent group-hover:bg-accent/25 transition-colors">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-0.5 transition-colors">{info.label}</p>
                    <p className="text-text-primary font-medium truncate group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-auto flex-shrink-0 text-text-muted group-hover:text-accent transition-colors"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15 }}
            onSubmit={onSubmit}
            className="bg-background-card border border-border rounded-2xl p-8 space-y-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2 transition-colors">
              {language === "pt" ? "Enviar mensagem" : "Send message"}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm flex flex-col">
                <span className="text-text-secondary font-medium transition-colors">
                  {language === "pt" ? "Nome" : "Name"}
                </span>
                <input
                  name="name"
                  required
                  placeholder={t.contactFormNamePlaceholder}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                />
              </label>
              <label className="space-y-2 text-sm flex flex-col">
                <span className="text-text-secondary font-medium transition-colors">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t.contactFormEmailPlaceholder}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm flex flex-col">
              <span className="text-text-secondary font-medium transition-colors">
                {language === "pt" ? "Mensagem" : "Message"}
              </span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={t.contactFormMsgPlaceholder}
                className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover disabled:opacity-60 shadow-lg shadow-accent/25 hover:shadow-accent/40"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  {t.contactFormSending}
                </>
              ) : (
                <>
                  {t.contactFormSubmit}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="flex items-center gap-2 text-sm text-emerald-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {t.contactFormSuccess}
              </p>
            )}
            {status === "mailto" && (
              <p className="text-sm text-emerald-500">
                {language === "pt" ? "Abrindo cliente de e-mail..." : "Opening email client..."}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-rose-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {t.contactFormError}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
