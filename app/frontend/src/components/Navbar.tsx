import { useState, useEffect } from "react";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress — gold */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold dark:bg-gold-dark z-[60] origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-parchment/90 dark:bg-sepia-bg/90 border-b border-brown-200/60 dark:border-brown-700/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-lg text-brown-900 dark:text-cream hover:text-brown-600 dark:hover:text-brown-200 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {personalInfo.name.split(" ").slice(0, 2).join(" ")}
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs text-brown-400 dark:text-brown-400 hover:text-brown-900 dark:hover:text-cream transition-colors tracking-[0.1em] uppercase relative group"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold dark:bg-gold-dark group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}

            {/* Resume */}
            <motion.a
              href={personalInfo.resumePath}
              download
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg hover:bg-brown-900 dark:hover:bg-cream transition-all text-xs tracking-[0.08em] uppercase rounded-[2px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-3 h-3" />
              Resume
            </motion.a>

            {/* Open to work */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 border border-gold dark:border-gold-dark bg-gold/10 dark:bg-gold-dark/10 rounded-[2px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="w-3 h-3 text-gold dark:text-gold-dark animate-pulse" />
              <span className="text-xs text-brown-800 dark:text-cream tracking-[0.08em]">Open to Work</span>
            </motion.div>

            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-brown-500 dark:text-brown-400 p-2"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <motion.div
            className="md:hidden bg-parchment/97 dark:bg-sepia-bg/97 border-b border-brown-200/60 dark:border-brown-700/60"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-brown-500 dark:text-brown-400 hover:text-brown-900 dark:hover:text-cream transition-colors py-1.5 tracking-[0.08em] uppercase"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personalInfo.resumePath}
                download
                className="flex items-center gap-2 px-3.5 py-2 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg hover:bg-brown-900 dark:hover:bg-cream transition-all text-sm w-fit rounded-[2px] tracking-[0.08em] uppercase"
                onClick={() => setIsMobileOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
              <div className="flex items-center gap-2 px-3 py-1.5 border border-gold dark:border-gold-dark bg-gold/10 dark:bg-gold-dark/10 w-fit rounded-[2px]">
                <Sparkles className="w-3 h-3 text-gold dark:text-gold-dark animate-pulse" />
                <span className="text-xs text-brown-800 dark:text-cream tracking-[0.08em]">Open to Work</span>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
