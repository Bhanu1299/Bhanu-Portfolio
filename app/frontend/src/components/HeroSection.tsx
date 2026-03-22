import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.0, 0.0, 1.0] as [number, number, number, number] },
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
      {/* Animated gradient blobs — behind the glass */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Liquid glass overlay — covers full screen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(40px) saturate(180%) brightness(1.1)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%) brightness(1.1)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: 'inset 0 0 80px rgba(255,255,255,0.03), 0 0 40px rgba(100,200,255,0.08)',
        }}
      />

      {/* Content — sits directly on the glass, no inner card */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <span className="text-sm font-light text-slate-300 tracking-wide">{personalInfo.statusBadge}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold text-white mb-3 tracking-tight leading-tight"
          {...fadeUp(0)}
        >
          {personalInfo.name.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name.split(" ").slice(2).join(" ")}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
          {...fadeUp(0.2)}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          {...fadeUp(0.4)}
        >
          <motion.button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

          <motion.a
            href={personalInfo.resumePath}
            download
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500/25 hover:border-indigo-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-white font-semibold hover:bg-white/[0.1] backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-5"
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
              className="p-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              aria-label={label}
              whileHover={{ scale: 1.15, rotate: 5 }}
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
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-slate-600" />
      </motion.div>
    </section>
  );
}
