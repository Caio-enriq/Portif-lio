import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../data/skills";
import { useApp } from "../context/AppContext";
import { TRANSLATIONS } from "../data/translations";

const CATEGORY_ICONS: Record<string, string> = {
  backend: "🔧",
  automation: "⚡",
  frontend: "🎨",
  data: "📊",
  devops: "🚀",
};

export function TechStack() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];

  return (
    <section id="stack" className="scroll-mt-24 px-6 py-24 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            {t.stackSectionTitle}
          </span>
          <h2 className="text-4xl font-bold text-text-primary mb-4 transition-colors">
            {t.stackTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl transition-colors">
            {t.stackSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-background-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 shadow-sm"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{CATEGORY_ICONS[cat.id] ?? "💻"}</div>
                  <div>
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {cat.title[language]}
                    </h3>
                    <p className="text-xs text-text-muted transition-colors">{cat.description[language]}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className="text-xs font-medium text-text-secondary bg-background border border-border px-2.5 py-1 rounded-full hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
