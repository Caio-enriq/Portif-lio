import { useMemo } from "react";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function GitHubSection() {
  const { language, theme } = useApp();
  const t = TRANSLATIONS[language];

  const user = useMemo(() => (import.meta.env.VITE_GITHUB_USERNAME ?? "Caio-enriq").trim(), []);
  const profile = `https://github.com/${user}`;
  const repos = `${profile}?tab=repositories`;

  const statsUrl = useMemo(() => {
    const bg = theme === "dark" ? "09090b" : "f8fafc";
    const title = theme === "dark" ? "6366f1" : "4f46e5";
    const icon = theme === "dark" ? "818cf8" : "6366f1";
    const text = theme === "dark" ? "a1a1aa" : "475569";
    return `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=${bg}&title_color=${title}&icon_color=${icon}&text_color=${text}&count_private=true`;
  }, [user, theme]);

  const streakUrl = useMemo(() => {
    const bg = theme === "dark" ? "09090b" : "f8fafc";
    const ring = theme === "dark" ? "6366f1" : "4f46e5";
    const fire = theme === "dark" ? "818cf8" : "6366f1";
    const label = theme === "dark" ? "a1a1aa" : "475569";
    const num = theme === "dark" ? "fafafa" : "0f172a";
    const dates = theme === "dark" ? "71717a" : "64748b";
    return `https://github-readme-streak-stats.demolab.com/?user=${user}&hide_border=true&background=${bg}&ring=${ring}&fire=${fire}&currStreakLabel=${label}&sideLabels=${label}&sideNums=${num}&dates=${dates}`;
  }, [user, theme]);

  const activityUrl = useMemo(() => {
    const bg = theme === "dark" ? "09090b" : "f8fafc";
    const line = theme === "dark" ? "818cf8" : "6366f1";
    const color = theme === "dark" ? "6366f1" : "4f46e5";
    return `https://github-readme-activity-graph.vercel.app/graph?username=${user}&hide_border=true&area=true&bg_color=${bg}&color=${color}&line=${line}&point=${color}&area_color=${color}`;
  }, [user, theme]);

  return (
    <section id="github" className="scroll-mt-24 px-6 py-24 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.githubSectionTitle}
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 transition-colors">
            {t.githubTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl transition-colors">
            {t.githubSubtitle}
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover shadow-lg shadow-accent/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            {t.githubBtnProfile}
          </a>
          <a
            href={repos}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-accent hover:text-accent shadow-sm"
          >
            {t.githubBtnRepos}
          </a>
          <span className="font-mono text-xs text-text-muted ml-1 transition-colors">@{user}</span>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <a
              href={profile}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-border bg-background-card transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10 shadow-sm"
            >
              <img
                src={statsUrl}
                alt={t.githubStatsAlt}
                className="w-full h-auto object-contain min-h-[170px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              href={profile}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-border bg-background-card transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10 shadow-sm"
            >
              <img
                src={streakUrl}
                alt={t.githubStreakAlt}
                className="w-full h-auto object-contain min-h-[170px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-secondary mb-3 transition-colors">{t.githubActivityTitle}</h3>
            <a
              href={profile}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-border bg-background-card transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10 shadow-sm"
            >
              <img
                src={activityUrl}
                alt={t.githubActivityAlt}
                className="w-full h-auto object-contain min-h-[120px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
