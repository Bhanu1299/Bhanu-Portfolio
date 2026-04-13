import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 800], [0, 60]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.0, 0.0, 1.0] as [number, number, number, number] },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      {/* Warm glow — dark mode only */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none bg-brown-700/0 dark:bg-brown-700/10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none bg-brown-800/0 dark:bg-brown-800/[0.08]" />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 border border-brown-200 dark:border-brown-700 mb-10 rounded-[2px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brown-400 dark:bg-brown-300 animate-pulse" />
          <span className="text-xs text-brown-400 dark:text-brown-500 tracking-[0.16em] uppercase">
            {personalInfo.statusBadge}
          </span>
        </motion.div>

        {/* Gold rule — draws in */}
        <motion.div
          className="h-px bg-gold dark:bg-gold-dark mb-8"
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        />

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-[76px] leading-[1.05] font-display font-normal text-brown-900 dark:text-cream mb-5 tracking-tight"
          {...fadeUp(0.15)}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role — display italic */}
        <motion.p
          className="font-display italic text-xl sm:text-2xl text-brown-400 dark:text-brown-300 mb-6 tracking-wide"
          {...fadeUp(0.25)}
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base text-brown-500 dark:text-brown-600 max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
          {...fadeUp(0.3)}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          {...fadeUp(0.4)}
        >
          <motion.button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg text-xs font-medium tracking-[0.12em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>

          <motion.a
            href={personalInfo.resumePath}
            download
            className="flex items-center gap-2 px-8 py-3.5 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 text-xs font-medium tracking-[0.12em] uppercase rounded-[2px] hover:border-brown-500 dark:hover:border-brown-500 transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 text-xs font-medium tracking-[0.12em] uppercase rounded-[2px] hover:border-brown-500 dark:hover:border-brown-500 transition-colors duration-300"
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
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="p-3 border border-brown-200 dark:border-brown-700 text-brown-400 dark:text-brown-600 hover:text-brown-800 dark:hover:text-cream hover:border-brown-400 dark:hover:border-brown-500 transition-all duration-300 rounded-[2px]"
              aria-label={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-4 h-4 text-brown-300 dark:text-brown-700" />
      </motion.div>
    </section>
  );
}
