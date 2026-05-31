import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

const CATEGORY_COLORS: Record<string, string> = {
  "Automation & APIs": "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  "Business Process Automation": "text-violet-400 bg-violet-500/10 border-violet-500/30",
  "Data Platform": "text-blue-400 bg-blue-500/10 border-blue-500/30",
  "Integrations": "text-sky-400 bg-sky-500/10 border-sky-500/30",
};

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  const active = PROJECTS.find((p) => p.id === activeId) ?? null;

  const categoryClass = (catEn: string) =>
    CATEGORY_COLORS[catEn] ?? "text-indigo-400 bg-indigo-500/10 border-indigo-500/30";

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 bg-background-elevated transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.projectsSectionTitle}
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 transition-colors">
            {t.projectsTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl transition-colors">
            {t.projectsSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background-card hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setActiveId(p.id)}
                className="text-left flex flex-col h-full w-full"
                aria-haspopup="dialog"
                aria-expanded={activeId === p.id}
              >
                <div className="p-8 space-y-5 flex-1 w-full">
                  <div>
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider border px-3 py-1 rounded-full mb-4 ${categoryClass(p.category.en)}`}>
                      {p.category[language]}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                      {p.title[language]}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed transition-colors">{p.summary[language]}</p>
                  </div>

                  {/* Results preview */}
                  <div className="space-y-2">
                    {p.results[language].slice(0, 2).map((r) => (
                      <div key={r} className="flex items-start gap-2 text-sm text-text-muted transition-colors">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {r}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="text-xs font-medium text-text-secondary bg-background border border-border px-3 py-1 rounded-full transition-colors">
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="text-xs font-medium text-text-muted px-2 py-1">+{p.stack.length - 4}</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 border-t border-border px-8 py-5 w-full mt-auto">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-background"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                      </svg>
                      {t.projectBtnCode}
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    className="ml-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors rounded-lg hover:bg-accent/10"
                  >
                    Case Study
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title[language]}
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-background-card shadow-2xl transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-background-card/95 backdrop-blur-sm p-8">
                <div>
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider border px-3 py-1 rounded-full mb-3 ${
                    categoryClass(active.category.en)
                  }`}>
                    {active.category[language]}
                  </span>
                  <h3 className="text-2xl font-bold text-text-primary transition-colors">{active.title[language]}</h3>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 rounded-full border border-border p-2 text-text-secondary hover:text-text-primary hover:border-accent transition-all"
                  onClick={() => setActiveId(null)}
                  aria-label={t.projectBtnClose}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="p-8 space-y-6">
                {/* Summary */}
                <p className="text-text-primary leading-relaxed transition-colors">{active.summary[language]}</p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-background-elevated border border-border rounded-xl p-6 transition-colors duration-300">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2 transition-colors">
                      <span>🔍</span> {t.projectProblemLabel}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed transition-colors">{active.problem[language]}</p>
                  </div>
                  <div className="bg-background-elevated border border-border rounded-xl p-6 transition-colors duration-300">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-2 transition-colors">
                      <span>💡</span> {t.projectSolutionLabel}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed transition-colors">{active.solution[language]}</p>
                  </div>
                </div>

                <div className="bg-background-elevated border border-border rounded-xl p-6 transition-colors duration-300">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4 flex items-center gap-2 transition-colors">
                    <span>📈</span> {t.projectResultsLabel}
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {active.results[language].map((result, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-primary text-sm transition-colors">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 transition-colors">
                    {t.projectStackLabel}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((s) => (
                      <span key={s} className="text-sm font-medium text-text-primary bg-background border border-border px-3 py-1.5 rounded-full transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {active.github && (
                  <div className="flex gap-3 pt-2">
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent rounded-full hover:bg-accent-hover transition-colors shadow-lg shadow-accent/25"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                      </svg>
                      {t.githubBtnProfile}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
