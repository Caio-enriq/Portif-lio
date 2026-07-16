"use client";

import { useEffect, useId, useMemo, useState, type ElementType, type KeyboardEvent } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowRight, Briefcase, FolderOpen, Link, X, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  projectIds?: string[];
  experienceId?: string | null;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  centerLabel?: string;
  defaultOpen?: boolean;
  autoOpenDelay?: number;
}

const PROJECT_LABELS: Record<string, string> = {
  "docz-upload": "DocZ Upload System",
  "enterprise-dashboard": "SOSdocs Document Intelligence",
  "health-analytics": "Health Data Analytics",
  "portal-monorepo": "Unified Portal Monorepo",
  fynnteck: "Fynnteck — Finanças Pessoais",
};

const EXPERIENCE_LABELS: Record<string, string> = {
  sosdocs: "SOSdocs/SERPRO",
  easytech: "EasyTech",
  bunge: "Bunge",
};

const CATEGORY_COLORS: Record<string, string> = {
  Backend: "#818cf8",
  Frontend: "#34d399",
  Automation: "#fbbf24",
  Data: "#f87171",
  Languages: "#a78bfa",
  DevOps: "#38bdf8",
  Tools: "#fb923c",
  Systems: "#4ade80",
};

const colorFor = (category: string) => CATEGORY_COLORS[category] ?? "#818cf8";

// Tamanho do botão de habilidade (h-11 w-11 = 44px) — usado para centralizar cada nó.
const NODE_SIZE = 44;
const HALF_NODE = NODE_SIZE / 2;
// Duração de uma volta completa da órbita (segundos). "devagar" por design.
const ORBIT_SECONDS = 60;

function masteryLabel(energy: number) {
  if (energy >= 85)
    return { label: "EXPERT", tone: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" };
  if (energy >= 70)
    return { label: "AVANÇADO", tone: "text-primary border-primary/30 bg-primary/10" };
  return { label: "INTERMEDIÁRIO", tone: "text-warning border-warning/30 bg-warning/10" };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className,
  centerLabel = "CE",
  defaultOpen = false,
  autoOpenDelay = 450,
}: RadialOrbitalTimelineProps) {
  const uid = useId();
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  // Começa sem nenhuma habilidade selecionada: o card de detalhes só abre quando o
  // usuário clica em uma habilidade.
  const [activeId, setActiveId] = useState<number | null>(null);

  // Ângulo único da órbita, compartilhado entre o grupo que gira e a contra-rotação
  // de cada nó — assim os ícones ficam sempre retos, não importa quando montam.
  const orbitAngle = useMotionValue(0);
  const counterRotate = useTransform(orbitAngle, (value) => -value);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    orbitAngle.set((orbitAngle.get() + (delta / 1000) * (360 / ORBIT_SECONDS)) % 360);
  });

  const size = isMobile ? 300 : 360;
  const radius = isMobile ? 112 : 138;
  const activeItem = timelineData.find((item) => item.id === activeId) ?? null;
  const activeColor = activeItem ? colorFor(activeItem.category) : "#818cf8";
  const activeMastery = activeItem ? masteryLabel(activeItem.energy) : null;

  const nodes = useMemo(
    () =>
      timelineData.map((item, index) => {
        const angle = -90 + (index / Math.max(timelineData.length, 1)) * 360;
        const radians = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);

        return {
          item,
          angle,
          x,
          y,
          xPct: 50 + (x / size) * 100,
          yPct: 50 + (y / size) * 100,
          nodeColor: colorFor(item.category),
        };
      }),
    [radius, size, timelineData]
  );

  const activeNode = nodes.find((node) => node.item.id === activeItem?.id);
  const relatedNodes = activeItem
    ? nodes.filter((node) => activeItem.relatedIds.includes(node.item.id))
    : [];

  useEffect(() => {
    if (!defaultOpen) return;

    const timeout = window.setTimeout(() => setOpen(true), reduceMotion ? 0 : autoOpenDelay);
    return () => window.clearTimeout(timeout);
  }, [autoOpenDelay, defaultOpen, reduceMotion]);

  const toggleOpen = () => {
    setOpen((current) => !current);
  };

  const handleCenterKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div
      className={`relative mx-auto flex w-full max-w-[440px] flex-col items-center gap-4 ${className ?? ""}`}
      role="region"
      aria-label="Órbita de habilidades"
    >
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <div
          aria-hidden
          className="border-border/40 bg-card/20 absolute inset-0 rounded-full border shadow-[inset_0_0_80px_rgb(var(--glow-rgb)/0.05)]"
        />
        <motion.div
          aria-hidden
          className="border-primary/25 absolute top-1/2 left-1/2 rounded-full border border-dashed"
          style={{
            width: radius * 2 + 44,
            height: radius * 2 + 44,
            marginLeft: -(radius + 22),
            marginTop: -(radius + 22),
          }}
          animate={open && !reduceMotion ? { rotate: 360 } : undefined}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          aria-hidden
          className="border-border/30 absolute top-1/2 left-1/2 rounded-full border"
          style={{
            width: radius * 1.25,
            height: radius * 1.25,
            marginLeft: -(radius * 1.25) / 2,
            marginTop: -(radius * 1.25) / 2,
          }}
          animate={open && !reduceMotion ? { rotate: -360 } : undefined}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        />

        {/*
          Grupo orbital: gira lentamente e carrega junto os traços SVG e os nós.
          Como linhas e nós viajam na mesma rotação, as conexões se mantêm corretas.
        */}
        <motion.div className="absolute inset-0" style={{ rotate: orbitAngle }}>
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <defs>
              <radialGradient id={`${uid}-orbit-glow`}>
                <stop offset="0%" stopColor={activeColor} stopOpacity="0.55" />
                <stop offset="100%" stopColor={activeColor} stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="13" fill={`url(#${uid}-orbit-glow)`} />
            <AnimatePresence>
              {open &&
                activeNode &&
                relatedNodes.map((node) => (
                  <motion.line
                    key={`${activeNode.item.id}-${node.item.id}`}
                    x1={activeNode.xPct}
                    y1={activeNode.yPct}
                    x2={node.xPct}
                    y2={node.yPct}
                    stroke={activeColor}
                    strokeWidth="0.45"
                    strokeDasharray="1.5 1.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.55 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  />
                ))}
            </AnimatePresence>
          </svg>

          <AnimatePresence>
            {open &&
              nodes.map(({ item, x, y, nodeColor }, index) => {
                const Icon = item.icon;
                const isActive = activeItem?.id === item.id;
                const isRelated = !!activeItem?.relatedIds.includes(item.id);

                return (
                  <motion.div
                    key={item.id}
                    className="absolute z-20"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: -HALF_NODE,
                      marginTop: -HALF_NODE,
                    }}
                    // Emerge do centro (CE) e volta para ele: x/y em 0 = centro do container.
                    initial={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
                    animate={{
                      x,
                      y,
                      scale: 1,
                      opacity: isActive ? 1 : isRelated ? 0.95 : 0.78,
                    }}
                    exit={{ x: 0, y: 0, scale: 0.2, opacity: 0 }}
                    transition={{
                      x: { duration: 0.5, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] },
                      y: { duration: 0.5, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] },
                      scale: { duration: 0.5, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.3 },
                    }}
                  >
                    {/* Contra-rotação: desfaz o giro do grupo para o ícone ficar sempre reto. */}
                    <motion.div style={{ rotate: counterRotate }}>
                      <motion.button
                        type="button"
                        aria-pressed={isActive}
                        aria-label={`${item.title} — ${item.category} — ${item.energy}%`}
                        onClick={() => setActiveId(item.id)}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.82 }}
                        className="group bg-background focus-visible:ring-offset-background relative flex h-11 w-11 items-center justify-center rounded-full border-2 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        style={{
                          borderColor: isActive
                            ? nodeColor
                            : isRelated
                              ? `${nodeColor}99`
                              : "var(--border)",
                          color: isActive || isRelated ? nodeColor : "var(--muted-foreground)",
                          boxShadow: isActive
                            ? `0 0 0 4px ${nodeColor}24, 0 0 26px ${nodeColor}66`
                            : isRelated
                              ? `0 0 18px ${nodeColor}30`
                              : "0 10px 28px rgba(0,0,0,.14)",
                          // @ts-expect-error custom Tailwind focus ring variable
                          "--tw-ring-color": nodeColor,
                        }}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                        <span className="border-border bg-popover text-foreground pointer-events-none absolute top-[calc(100%+7px)] left-1/2 hidden -translate-x-1/2 rounded-md border px-2 py-1 text-[10px] font-semibold whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
                          {item.title}
                        </span>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          aria-pressed={open}
          aria-label={open ? "Recolher balões para o CE" : "Abrir órbita de habilidades"}
          onClick={toggleOpen}
          onKeyDown={handleCenterKeyDown}
          className="bg-background/90 focus-visible:ring-primary focus-visible:ring-offset-background border-border text-foreground absolute top-1/2 left-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_0_34px_rgb(var(--glow-rgb)/0.25)] backdrop-blur-xl transition-transform outline-none hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            boxShadow: open
              ? `0 0 0 1px ${activeColor}55, 0 0 34px ${activeColor}44, 0 18px 60px rgba(0,0,0,.18)`
              : "0 0 34px rgb(var(--glow-rgb)/.25), 0 18px 60px rgba(0,0,0,.16)",
          }}
        >
          {open && (
            <span
              aria-hidden
              className="orbit-pulse-ring pointer-events-none absolute inset-0 rounded-full"
              style={{ borderColor: `${activeColor}70` }}
            />
          )}
          <span className="relative font-mono text-lg font-bold">{centerLabel}</span>
        </button>

        {!open && (
          <div className="text-muted-foreground pointer-events-none absolute inset-x-6 bottom-8 text-center text-xs">
            Clique no CE para soltar os balões
          </div>
        )}
      </div>

      {/*
        Área de detalhes com altura reservada fixa e SEMPRE presente. Assim não
        importa a ação do usuário — clicar no CE (abrir/recolher), abrir ou trocar
        de habilidade — a altura do bloco nunca muda e a órbita fica absolutamente
        parada no mesmo lugar.
      */}
      <div className="relative min-h-[448px] w-full sm:min-h-[384px]">
        {open && !activeItem && (
          <p className="text-muted-foreground/50 pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center text-xs">
            Clique em uma habilidade para ver os detalhes
          </p>
        )}

        <AnimatePresence mode="wait">
          {open && activeItem && activeMastery && (
            <motion.article
              key={activeItem.id}
              className="border-border/70 bg-card/90 relative w-full overflow-hidden rounded-lg border p-4 shadow-[0_20px_70px_rgba(0,0,0,0.14)] backdrop-blur-xl"
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              style={{ boxShadow: `0 0 0 1px ${activeColor}1f, 0 20px 70px rgba(0,0,0,.14)` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-25"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${activeColor}88, transparent 72%)`,
                }}
              />

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className={activeMastery.tone}>
                      {activeMastery.label}
                    </Badge>
                    <span
                      className="rounded-md px-2 py-1 font-mono text-[10px] font-semibold"
                      style={{ background: `${activeColor}18`, color: activeColor }}
                    >
                      {activeItem.category}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">
                    {activeItem.title}
                    <span className="text-muted-foreground ml-2 font-mono text-xs font-normal">
                      {activeItem.date}
                    </span>
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label="Fechar detalhes da habilidade"
                  onClick={() => setActiveId(null)}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-muted-foreground relative mt-3 text-xs leading-relaxed">
                {activeItem.content}
              </p>

              <div className="relative mt-4">
                <div className="text-muted-foreground mb-2 flex items-center justify-between text-[10px] font-semibold tracking-widest uppercase">
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3 w-3" style={{ color: activeColor }} />
                    Domínio
                  </span>
                  <span style={{ color: activeColor }}>{activeItem.energy}%</span>
                </div>
                <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${activeColor}66, ${activeColor})`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${activeItem.energy}%` }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>

              <div className="text-muted-foreground relative mt-4 grid gap-3 text-xs sm:grid-cols-2">
                {!!activeItem.projectIds?.length && (
                  <div>
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase">
                      <FolderOpen className="h-3 w-3" />
                      Projetos
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.projectIds.map((projectId) => (
                        <Badge
                          key={projectId}
                          variant="outline"
                          className="border-border/70 text-[10px]"
                        >
                          {PROJECT_LABELS[projectId] ?? projectId}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {activeItem.experienceId && (
                  <div>
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase">
                      <Briefcase className="h-3 w-3" />
                      Experiência
                    </div>
                    <span>
                      {EXPERIENCE_LABELS[activeItem.experienceId] ?? activeItem.experienceId}
                    </span>
                  </div>
                )}
              </div>

              {!!activeItem.relatedIds.length && (
                <div className="border-border/60 relative mt-4 border-t pt-3">
                  <div className="text-muted-foreground mb-2 flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase">
                    <Link className="h-3 w-3" />
                    Conectadas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeItem.relatedIds.map((relatedId) => {
                      const related = timelineData.find((item) => item.id === relatedId);
                      if (!related) return null;

                      return (
                        <Button
                          key={relatedId}
                          variant="outline"
                          size="sm"
                          className="border-border/70 h-7 gap-1.5 px-2 text-[10px]"
                          onClick={() => setActiveId(relatedId)}
                        >
                          {related.title}
                          <ArrowRight className="h-3 w-3 opacity-60" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
