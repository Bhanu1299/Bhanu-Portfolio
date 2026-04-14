import React, { useState } from "react";
import { Code2, Cloud, Brain, Database, Terminal, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, stats as rawStats, personalInfo } from "../data/portfolio";

const statIcons = [Code2, Cloud, Brain, Database, Terminal, Globe];
const stats = rawStats.map((s, i) => ({ ...s, icon: statIcons[i] }));

function proficiencyLevel(pct: number): string {
  if (pct >= 90) return "Expert";
  if (pct >= 75) return "Proficient";
  if (pct >= 55) return "Familiar";
  return "Learning";
}

function SectionHeader({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="text-center mb-16">
      <span className="text-xs font-medium text-brown-500 dark:text-brown-400 tracking-[0.18em] uppercase">
        {label}
      </span>
      <motion.div
        className="h-[2px] bg-gold dark:bg-gold-dark mx-auto my-3"
        initial={{ width: 0 }}
        whileInView={{ width: 56 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
        {title}
      </h2>
    </div>
  );
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="text-2xl font-display text-brown-900 dark:text-cream"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {value}
    </motion.div>
  );
}

function SkillCard({ group, delay, direction }: {
  group: typeof skills[0];
  delay: number;
  direction: "left" | "right";
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <ScrollReveal delay={delay} direction={direction}>
      <div
        className="relative h-full min-h-[200px] cursor-pointer"
        style={{ perspective: 1000 }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 p-6 border border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 transition-colors duration-300 bg-white/30 dark:bg-white/[0.02] rounded-[2px] flex flex-col"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-4 bg-gold dark:bg-gold-dark flex-shrink-0" />
              <h3 className="text-xs font-medium text-brown-500 dark:text-brown-400 tracking-[0.14em] uppercase">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 flex-1">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="px-3.5 py-2 text-sm border border-brown-200 dark:border-brown-700 text-brown-700 dark:text-brown-300 rounded-[2px]"
                >
                  {item.name}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-brown-300 dark:text-brown-700 tracking-[0.08em] uppercase mt-3">
              Hover to see proficiency
            </p>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 p-6 border border-gold/40 dark:border-brown-600 bg-white/40 dark:bg-white/[0.04] rounded-[2px] flex flex-col overflow-y-auto"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-4 bg-gold dark:bg-gold-dark flex-shrink-0" />
              <h3 className="text-xs font-medium text-brown-500 dark:text-brown-400 tracking-[0.14em] uppercase">
                {group.category}
              </h3>
            </div>
            <div className="space-y-3 flex-1">
              {group.items.map((item, j) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-brown-700 dark:text-brown-300 font-medium">{item.name}</span>
                    <span className="text-xs text-brown-400 dark:text-brown-500 tracking-wide">
                      {proficiencyLevel(item.pct)}
                    </span>
                  </div>
                  <div className="h-[3px] bg-brown-200 dark:bg-brown-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-brown-600 dark:bg-gold-dark rounded-full"
                      initial={{ width: 0 }}
                      animate={flipped ? { width: `${item.pct}%` } : { width: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + j * 0.07 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <SectionHeader label="About Me" title="Turning Ideas Into Reality" />
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-8 border border-brown-200/60 dark:border-brown-700 hover:border-gold/50 dark:hover:border-brown-600 transition-all duration-500 bg-white/40 dark:bg-white/[0.02] space-y-4 rounded-[2px]">
              {personalInfo.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-brown-500 dark:text-brown-400 leading-relaxed text-base [&_strong]:text-brown-900 dark:[&_strong]:text-cream [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <ScrollReveal key={label} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
              <div className="p-5 border border-brown-200/60 dark:border-brown-700 text-center hover:border-gold/50 dark:hover:border-brown-600 transition-all duration-300 h-full bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Icon className="w-5 h-5 text-gold dark:text-gold-dark mx-auto mb-2" />
                </motion.div>
                <AnimatedCounter value={value} />
                <div className="text-xs text-brown-500 dark:text-brown-400 mt-1">{label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills Grid — flip cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <SkillCard
              key={group.category}
              group={group}
              delay={i * 0.1}
              direction={i < 3 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
