import { useRef } from "react";
import { Code2, Cloud, Brain, Database, Terminal, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import ExLibris from "./ExLibris";
import SpecimenSheet from "./SpecimenSheet";
import { motion, useInView } from "framer-motion";
import { stats as rawStats, personalInfo, sectionCopy } from "../data/portfolio";

const statIcons = [Code2, Cloud, Brain, Database, Terminal, Globe];
const stats = rawStats.map((s, i) => ({ ...s, icon: statIcons[i] }));

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="font-mono font-light text-2xl text-brown-900 dark:text-cream tracking-tight"
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
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <SectionHeading index="01" label={sectionCopy.about.label} title={sectionCopy.about.title} />
        </ScrollReveal>

        {/* Ex-libris bookplate — engraves itself as you scroll */}
        <ExLibris className="mb-14" />

        {/* Bio — open editorial column with drop cap */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-20 space-y-5">
            {personalInfo.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`text-brown-500 dark:text-brown-400 leading-loose [&_strong]:text-brown-900 dark:[&_strong]:text-cream [&_strong]:font-semibold ${
                  i === 0 ? "drop-cap text-base sm:text-lg" : "text-base"
                }`}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            <div className="flex items-center gap-4 pt-2">
              <div className="h-px flex-1 bg-brown-200/70 dark:bg-brown-700/60" />
              <span className="text-gold dark:text-gold-dark text-xs">✦</span>
              <div className="h-px flex-1 bg-brown-200/70 dark:bg-brown-700/60" />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <ScrollReveal key={label} delay={i * 0.08} direction={i % 2 === 0 ? "up" : "down"}>
              <div className="etched p-5 border border-brown-200/60 dark:border-brown-700 text-center hover:border-gold/50 dark:hover:border-brown-600 transition-all duration-300 h-full bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                <Icon className="w-4 h-4 text-gold dark:text-gold-dark mx-auto mb-2.5" />
                <AnimatedCounter value={value} />
                <div className="font-mono text-[10px] font-light text-brown-500 dark:text-brown-400 tracking-[0.1em] uppercase mt-1.5">
                  {label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skills — typeset as a specimen sheet */}
        <ScrollReveal>
          <SpecimenSheet />
        </ScrollReveal>
      </div>
    </section>
  );
}
