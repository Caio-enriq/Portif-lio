"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    name: "Backend",
    techs: [
      { name: "Python", color: "#3776AB" },
      { name: "FastAPI", color: "#009688" },
      { name: "Node.js", color: "#68A063" },
      { name: "Express", color: "#fff" },
      { name: "PostgreSQL", color: "#336791" },
    ],
  },
  {
    name: "Frontend",
    techs: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#fff" },
      { name: "Vue.js", color: "#42B883" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind", color: "#06B6D4" },
    ],
  },
  {
    name: "DevOps & IA",
    techs: [
      { name: "Docker", color: "#2496ED" },
      { name: "Git", color: "#F05032" },
      { name: "OpenAI", color: "#10A37F" },
      { name: "Selenium", color: "#43B02A" },
      { name: "Vercel", color: "#fff" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="border-border bg-card/30 relative border-y py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Tech Stack</h2>
          <p className="text-muted-foreground">Tecnologias que utilizo no dia a dia</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-muted-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, ti) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: ci * 0.15 + ti * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="border-border bg-card hover:border-primary/40 hover:bg-primary/5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
