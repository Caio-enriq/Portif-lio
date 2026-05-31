import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function About() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  const focus = [
    { icon: "⚡", label: t.aboutFocusTitle1, desc: t.aboutFocusDesc1 },
    { icon: "📈", label: t.aboutFocusTitle2, desc: t.aboutFocusDesc2 },
    { icon: "🏗️", label: t.aboutFocusTitle3, desc: t.aboutFocusDesc3 },
  ];

  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 bg-background-elevated transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.aboutSectionTitle}
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 transition-colors">
            {t.aboutTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl transition-colors">
            {t.aboutSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl overflow-hidden border border-border bg-background-card flex items-center justify-center shadow-md">
                  <img
                    src="/caracaio.jpg"
                    alt={t.aboutBioTitle}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary transition-colors">{t.aboutBioTitle}</h3>
                  <p className="text-accent font-medium">{t.aboutBioRole}</p>
                  <p className="text-sm text-text-muted transition-colors">{t.aboutBioLoc}</p>
                </div>
              </div>

              <p className="text-text-primary leading-relaxed text-lg transition-colors">
                {t.aboutBioText1}
              </p>
              <p className="text-text-secondary leading-relaxed transition-colors">
                {t.aboutBioText2}
              </p>
            </div>

            {/* Expertise tags */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4 transition-colors">
                {t.aboutSpecialties}
              </h4>
              <div className="flex flex-wrap gap-2">
                {t.aboutSpecialtiesList.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Focus cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {focus.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ x: 4 }}
                className="bg-background-card border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-1 transition-colors">{item.label}</h4>
                    <p className="text-text-secondary text-sm transition-colors">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Location / availability card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-background-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-text-muted mb-1 transition-colors">{t.aboutStatusLabel}</p>
                  <p className="text-text-primary font-medium transition-colors">{t.aboutStatusValue}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm text-emerald-500 font-medium">{t.aboutStatusOnline}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
