import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Per-letter masked rise for one word */
function RevealWord({ word, baseDelay }: { word: string; baseDelay: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
      {word.split("").map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: baseDelay + i * 0.03, ease: EASE_OUT }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 800], [0, 60]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  const nameWords = personalInfo.name.split(" ");
  const nameClasses =
    "text-[13vw] sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.04] font-display font-normal tracking-tight";

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      {/* Warm glow — dark mode only */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none bg-brown-700/0 dark:bg-brown-700/10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none bg-brown-800/0 dark:bg-brown-800/[0.08]" />

      {/* Masthead microtype row */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="flex items-center justify-between border-y border-brown-200/70 dark:border-brown-700/60 py-2.5 font-mono text-[10px] font-light tracking-[0.28em] uppercase text-brown-400 dark:text-brown-500">
          <span>Portfolio</span>
          <span className="hidden sm:inline">First Edition</span>
          <span className="hidden md:inline">{personalInfo.location}</span>
          <span className="md:hidden">MMXXVI</span>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 border border-brown-200 dark:border-brown-700 mb-12 rounded-[2px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold dark:bg-gold-dark animate-pulse" />
          <span className="font-mono text-[10px] font-light text-brown-500 dark:text-brown-400 tracking-[0.25em] uppercase">
            {personalInfo.statusBadge}
          </span>
        </motion.div>

        {/* Name — per-letter rise, gold-foil sheen sweep on top */}
        <div className="relative mb-6 select-none">
          {reducedMotion ? (
            <h1 className={`${nameClasses} text-brown-900 dark:text-cream`}>
              {personalInfo.name}
            </h1>
          ) : (
            <>
              <h1 className={`${nameClasses} text-brown-900 dark:text-cream`}>
                {nameWords.map((word, w) => (
                  <span key={w}>
                    <RevealWord word={word} baseDelay={0.25 + w * 0.18} />
                    {w < nameWords.length - 1 && " "}
                  </span>
                ))}
              </h1>
              <span
                aria-hidden
                className={`${nameClasses} foil-sheen absolute inset-0 text-transparent pointer-events-none`}
              >
                {personalInfo.name}
              </span>
            </>
          )}
        </div>

        {/* Gold rule — draws in beneath the name */}
        <motion.div
          className="h-[2px] bg-gold dark:bg-gold-dark mb-7"
          initial={{ width: 0 }}
          animate={{ width: 72 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        />

        {/* Role — display italic */}
        <motion.p
          className="font-display italic text-xl sm:text-2xl text-brown-400 dark:text-brown-300 mb-5 tracking-wide"
          {...fadeUp(1.0)}
        >
          Software Engineer
        </motion.p>

        {/* Craft line — gold left-bar pull quote */}
        <motion.div className="flex items-center gap-3 mb-5" {...fadeUp(1.1)}>
          <div className="w-0.5 h-4 bg-gold dark:bg-gold-dark flex-shrink-0" />
          <p className="font-display italic text-sm text-brown-400 dark:text-brown-500 tracking-wide">
            Shipping production-grade systems
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base text-brown-500 dark:text-brown-400 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
          {...fadeUp(1.2)}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          {...fadeUp(1.3)}
        >
          <motion.button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="etched px-8 py-3.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg font-mono text-[11px] font-light tracking-[0.2em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>

          <motion.a
            href={personalInfo.resumePath}
            download
            className="etched flex items-center gap-2 px-8 py-3.5 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 font-mono text-[11px] font-light tracking-[0.2em] uppercase rounded-[2px] hover:border-brown-500 dark:hover:border-brown-500 hover:text-brown-800 dark:hover:text-cream transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="etched px-8 py-3.5 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 font-mono text-[11px] font-light tracking-[0.2em] uppercase rounded-[2px] hover:border-brown-500 dark:hover:border-brown-500 hover:text-brown-800 dark:hover:text-cream transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="p-3 border border-brown-200 dark:border-brown-700 text-brown-400 dark:text-brown-400 hover:text-brown-800 dark:hover:text-cream hover:border-gold/60 dark:hover:border-gold-dark/60 transition-all duration-300 rounded-[2px]"
              aria-label={label}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue — thin drawn line */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-3 pt-8 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="font-mono text-[9px] font-light tracking-[0.4em] uppercase text-brown-400 dark:text-brown-600">
          Scroll
        </span>
        <div className="h-12 w-px overflow-hidden">
          <div className="scroll-cue-line h-full w-full bg-gradient-to-b from-gold to-brown-300 dark:from-gold-dark dark:to-brown-700" />
        </div>
      </motion.div>
    </section>
  );
}
