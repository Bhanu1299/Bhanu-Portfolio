import React from "react";
import { Code2, Cloud, Brain, Database, Terminal, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, stats as rawStats, personalInfo } from "../data/portfolio";

const statIcons = [Code2, Cloud, Brain, Database, Terminal, Globe];
const stats = rawStats.map((s, i) => ({ ...s, icon: statIcons[i] }));

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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.1} direction={i < 3 ? "left" : "right"}>
              <div className="p-6 border border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 transition-all duration-300 h-full bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-px h-4 bg-gold dark:bg-gold-dark" />
                  <h3 className="text-xs font-medium text-brown-500 dark:text-brown-400 tracking-[0.14em] uppercase">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <motion.span
                      key={item}
                      className="px-3.5 py-2 text-sm border border-brown-200 dark:border-brown-700 text-brown-700 dark:text-brown-300 hover:border-brown-400 dark:hover:border-brown-500 hover:text-brown-900 dark:hover:text-cream transition-colors cursor-default rounded-[2px]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.04 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
