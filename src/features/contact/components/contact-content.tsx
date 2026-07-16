"use client";

import { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Send,
  CheckCircle,
  Loader2,
  MessageCircle,
  Clock,
  Globe,
  Link,
  ExternalLink,
} from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/caio-enrique-/",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/Caio-enriq",
    icon: Link,
    color: "from-gray-700 to-gray-800",
  },
];

export function ContactContent() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isEn = locale === "en";
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_tdg8s5l",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_46enhnr",
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "moN3_NdxorFrSUrz6",
        }
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-20">
      {/* Page-specific background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-3xl" />
        <div className="bg-primary/5 absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full blur-3xl" />
      </div>
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="mb-4 flex items-center gap-2">
          <MessageCircle className="text-primary h-5 w-5" />
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t("kicker")}
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{t("subtitle")}</p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left Column - Contact Info & Social */}
        <div className="space-y-6 lg:col-span-2">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <Card className="border-border from-card to-primary-muted/10 bg-gradient-to-br">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t("location")}</p>
                    <p className="text-muted-foreground">
                      {isEn ? "Brasília, DF, Brazil" : "Brasília, DF, Brasil"}
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs">{t("region")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border from-card to-primary-muted/10 bg-gradient-to-br">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-muted-foreground break-all">
                      caio.desenvolvedor2416@gmail.com
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs">{t("emailResponse")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border from-success-muted to-success-muted/50 bg-gradient-to-br">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <Clock className="text-success h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-success text-sm font-semibold">{t("availability")}</p>
                    <p className="text-muted-foreground">{t("availabilityValue")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-muted-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
              {t("social")}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="border-border bg-card group-hover:border-primary/50 group-hover:shadow-primary/5 transition-all group-hover:shadow-lg">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${social.color} text-white`}
                      >
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{social.name}</p>
                        <p className="text-muted-foreground text-xs">{t("profile")}</p>
                      </div>
                      <ExternalLink className="text-muted-foreground group-hover:text-primary ml-auto h-4 w-4 transition-colors" />
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border-primary/20 from-primary-muted/30 via-background to-background rounded-2xl border bg-gradient-to-br p-6"
          >
            <h3 className="mb-2 font-bold">{t("quickTitle")}</h3>
            <p className="text-muted-foreground text-sm">{t("quickDesc")}</p>
          </motion.div>
        </div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-3"
        >
          <Card className="border-border bg-card/80 backdrop-blur">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold">{t("formTitle")}</h2>
                <p className="text-muted-foreground text-sm">{t("formDesc")}</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      {t("name")}
                    </label>
                    <Input
                      id="name"
                      name="from_name"
                      placeholder={t("name")}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      {t("email")}
                    </label>
                    <Input
                      id="email"
                      name="from_email"
                      type="email"
                      placeholder={t("email")}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    {t("message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("message")}
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-11 w-full text-base"
                  variant={status === "success" ? "outline" : "default"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("sending")}
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="text-success mr-2 h-4 w-4" />
                      {t("success")}
                    </>
                  ) : status === "error" ? (
                    t("error")
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t("send")}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
