import { useState } from "react";
import { GraduationCap, BookOpen, Users, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { education, sectionCopy } from "../data/portfolio";

function EducationCard({ edu }: { edu: typeof education[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className={`etched rounded-[2px] border transition-all duration-300 cursor-pointer select-none
        ${expanded
          ? "bg-white/40 dark:bg-white/[0.03] border-gold/50 dark:border-brown-600 shadow-[0_4px_20px_rgba(201,169,110,0.08)]"
          : "bg-white/30 dark:bg-white/[0.02] border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 hover:bg-white/35 dark:hover:bg-white/[0.025]"
        }`}
    >
      <div className="p-6 sm:p-8">
        {/* Header — always visible */}
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-[2px] border flex-shrink-0 transition-colors duration-300
            ${expanded ? "bg-gold/15 dark:bg-gold-dark/15 border-gold/60 dark:border-brown-600" : "bg-gold/10 dark:bg-gold-dark/10 border-brown-200/60 dark:border-brown-700"}`}>
            <GraduationCap className="w-5 h-5 text-gold dark:text-gold-dark" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className={`font-display text-lg font-normal leading-snug transition-colors duration-300 ${expanded ? "text-gold dark:text-gold-dark" : "text-brown-900 dark:text-cream"}`}>
                  {edu.degree}
                </h3>
                <p className="text-brown-500 dark:text-brown-400 text-sm mt-1">{edu.school}</p>
                <p className="font-mono text-[10px] font-light tracking-[0.12em] uppercase text-brown-500 dark:text-brown-400 mt-1">
                  Class of {edu.year}
                </p>
              </div>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0 mt-1"
              >
                <ChevronDown className="w-4 h-4 text-brown-400 dark:text-brown-400" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-5 border-t border-brown-200/60 dark:border-brown-700 space-y-5">
                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-brown-500 dark:text-brown-400" />
                    <span className="font-mono text-[10px] font-light text-brown-500 dark:text-brown-400 uppercase tracking-[0.22em]">Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, j) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.04 }}
                        className="px-2.5 py-1 text-xs font-medium rounded-[2px] border border-brown-200 dark:border-brown-700 text-gold dark:text-gold-dark"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-3.5 h-3.5 text-brown-500 dark:text-brown-400" />
                    <span className="font-mono text-[10px] font-light text-brown-500 dark:text-brown-400 uppercase tracking-[0.22em]">Activities</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.activities.map((activity, j) => (
                      <motion.span
                        key={activity}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + j * 0.04 }}
                        className="px-2.5 py-1 text-xs font-medium rounded-[2px] bg-white/40 dark:bg-white/[0.03] text-brown-600 dark:text-brown-300 border border-brown-200/60 dark:border-brown-700"
                      >
                        {activity}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click hint */}
      <div className={`px-8 pb-4 font-mono text-[10px] font-light tracking-[0.18em] uppercase text-brown-400 dark:text-brown-500 transition-opacity duration-300 ${expanded ? "opacity-0 h-0 pb-0 overflow-hidden" : "opacity-100"}`}>
        Click to expand
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      <div className="max-w-4xl mx-auto relative">
        <ScrollReveal>
          <SectionHeading
            index="03"
            label={sectionCopy.education.label}
            title={sectionCopy.education.title}
            blurb={sectionCopy.education.blurb}
          />
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 0.1} direction="up">
              <EducationCard edu={edu} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
