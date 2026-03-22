import { useState } from "react";
import { GraduationCap, BookOpen, Users, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { education } from "../data/portfolio";

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className={`rounded-2xl border transition-all duration-300 cursor-pointer select-none
        ${expanded
          ? "bg-white/[0.05] border-cyan-500/25 shadow-[0_4px_40px_rgba(6,182,212,0.08)]"
          : "bg-white/[0.03] border-white/[0.06] hover:border-cyan-500/20 hover:bg-white/[0.04]"
        }`}
    >
      <div className="p-6 sm:p-8">
        {/* Header — always visible */}
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl border flex-shrink-0 transition-colors duration-300
            ${expanded ? "bg-cyan-500/15 border-cyan-500/30" : "bg-cyan-500/10 border-cyan-500/20"}`}>
            <GraduationCap className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className={`text-lg font-bold leading-snug transition-colors duration-300 ${expanded ? "text-cyan-300" : "text-white"}`}>
                  {edu.degree}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                <p className="text-xs text-slate-500 mt-0.5">Class of {edu.year}</p>
              </div>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0 mt-1"
              >
                <ChevronDown className="w-4 h-4 text-slate-500" />
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
              <div className="mt-5 pt-5 border-t border-white/[0.06] space-y-5">
                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, j) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.04 }}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Activities</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.activities.map((activity, j) => (
                      <motion.span
                        key={activity}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + j * 0.04 }}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.06]"
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
      <div className={`px-8 pb-4 text-[10px] text-slate-600 transition-opacity duration-300 ${expanded ? "opacity-0 h-0 pb-0 overflow-hidden" : "opacity-100"}`}>
        Click to expand
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">
              Background
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Education &{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Coursework
              </span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg mx-auto">
              Academic foundation across computer science, machine learning, and systems. Click a card to see details.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 0.1} direction="up">
              <EducationCard edu={edu} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
