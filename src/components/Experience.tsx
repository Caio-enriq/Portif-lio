import { motion } from "framer-motion";
import { EXPERIENCES } from "../data/experience";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function Experience() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24 bg-background-elevated transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.expSectionTitle}
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 transition-colors">
            {t.expTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl transition-colors">
            {t.expSubtitle}
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-border transition-colors duration-300">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <span className={`flex h-4 w-4 rounded-full border-2 border-background-elevated ${
                    exp.current ? "bg-accent animate-pulse" : "bg-text-muted"
                  }`} />
                </div>

                {/* Content card */}
                <motion.article
                  initial={{ opacity: 0, y: 24, x: isEven ? 24 : -24 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`w-full sm:w-[calc(50%-2rem)] ${
                    isEven ? "sm:mr-auto pl-10 sm:pl-0 sm:pr-8" : "sm:ml-auto pl-10 sm:pl-8"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-background-card p-6 sm:p-8 hover:border-accent hover:shadow-lg transition-all duration-300 shadow-sm">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div className="flex gap-2">
                          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            exp.current 
                              ? "bg-accent/15 text-accent border border-accent/25" 
                              : "bg-text-secondary/10 text-text-secondary border border-border"
                          }`}>
                            {exp.current && (
                              <span className="relative flex h-1.5 w-1.5 mr-1">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                              </span>
                            )}
                            {exp.period[language]}
                          </span>
                          <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-muted transition-colors">
                            {exp.type[language]}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-text-primary transition-colors">{exp.title[language]}</h3>
                        <p className="text-md text-accent font-semibold mt-0.5">{exp.company}</p>
                        <p className="text-xs text-text-muted mt-1 flex items-center gap-1.5 transition-colors">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {exp.location[language]}
                        </p>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed border-l-2 border-accent/30 pl-3 transition-colors">
                        {exp.description[language]}
                      </p>

                      {exp.responsibilities[language] && exp.responsibilities[language].length > 0 && (
                        <div className="pt-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 transition-colors">
                            {t.expResponsibilitiesTitle}
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities[language].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-xs leading-relaxed transition-colors">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
