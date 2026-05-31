import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

export function BusinessImpact() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  const impacts = [
    {
      metric: "70%",
      label: t.impactCardTitle1,
      description: t.impactCardDesc1,
      icon: "⚙️",
      color: "from-indigo-500/10 to-violet-500/5 dark:from-indigo-500/20 dark:to-violet-500/10",
      border: "border-indigo-500/20 dark:border-indigo-500/30",
    },
    {
      metric: "60%",
      label: t.impactCardTitle2,
      description: t.impactCardDesc2,
      icon: "⚡",
      color: "from-violet-500/10 to-indigo-500/5 dark:from-violet-500/20 dark:to-indigo-500/10",
      border: "border-violet-500/20 dark:border-violet-500/30",
    },
    {
      metric: "80%",
      label: t.impactCardTitle3,
      description: t.impactCardDesc3,
      icon: "🛡️",
      color: "from-blue-500/10 to-indigo-500/5 dark:from-blue-500/20 dark:to-indigo-500/10",
      border: "border-blue-500/20 dark:border-blue-500/30",
    },
    {
      metric: "35%",
      label: t.impactCardTitle4,
      description: t.impactCardDesc4,
      icon: "📊",
      color: "from-sky-500/10 to-blue-500/5 dark:from-sky-500/20 dark:to-blue-500/10",
      border: "border-sky-500/20 dark:border-sky-500/30",
    },
  ];

  return (
    <section id="business-impact" className="scroll-mt-24 px-6 py-24 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.impactSectionTitle}
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 transition-colors">
            {t.impactTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl transition-colors">
            {t.impactSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`relative overflow-hidden rounded-2xl border ${impact.border} bg-gradient-to-br ${impact.color} p-6 backdrop-blur-sm transition-all duration-300 shadow-sm`}
            >
              <div className="mb-4 text-3xl">{impact.icon}</div>
              <div className="text-5xl font-bold text-text-primary mb-2 tabular-nums transition-colors">{impact.metric}</div>
              <div className="text-sm font-semibold text-text-primary mb-2 transition-colors">{impact.label}</div>
              <div className="text-xs text-text-secondary leading-relaxed transition-colors">{impact.description}</div>

              {/* decorative element */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/5 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
