import { useState } from "react";
import { CheckCircle2, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { experience } from "../data/portfolio";

function TimelineCard({
  job,
  expanded,
  onToggle,
}: {
  job: typeof experience[0];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/20 hover:bg-white/[0.045] transition-colors duration-300 cursor-pointer select-none w-full"
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3
            className={`text-base font-bold transition-colors duration-300 ${
              expanded ? "text-violet-300" : "text-white"
            }`}
          >
            {job.company}
          </h3>
          <p className="text-slate-400 text-sm mt-0.5">{job.role}</p>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-white/[0.05] text-slate-500 border border-white/[0.06]">
              {job.dateRange}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-white/[0.05] text-slate-500 border border-white/[0.06]">
              <MapPin className="w-2.5 h-2.5" />
              {job.location}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="bullets"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2.5 border-l border-violet-500/20 pl-4">
              {job.bullets.map((bullet, j) => (
                <motion.li
                  key={j}
                  className="flex items-start gap-2.5"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.06, duration: 0.25 }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400/70 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TimelineItem({ job, index }: { job: typeof experience[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      {/* Desktop: alternating center-line layout */}
      <div className="hidden md:flex items-start mb-10 relative">
        {/* Left card slot */}
        <div className="w-[calc(50%-24px)] flex justify-end">
          {isLeft && (
            <div className="w-full">
              <TimelineCard job={job} expanded={expanded} onToggle={() => setExpanded(!expanded)} />
            </div>
          )}
        </div>

        {/* Center column: dot */}
        <div className="w-12 flex flex-col items-center flex-shrink-0 pt-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 relative ${
              expanded
                ? "bg-violet-500 border-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                : "bg-[#0A0A0F] border-violet-500/50 hover:border-violet-400 hover:shadow-[0_0_8px_rgba(139,92,246,0.4)]"
            }`}
            aria-label={`Toggle ${job.company}`}
          />
        </div>

        {/* Right card slot */}
        <div className="w-[calc(50%-24px)]">
          {!isLeft && (
            <div className="w-full">
              <TimelineCard job={job} expanded={expanded} onToggle={() => setExpanded(!expanded)} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile: single column left-line layout */}
      <div className="md:hidden flex gap-4 mb-8">
        <div className="flex flex-col items-center flex-shrink-0" style={{ width: 24 }}>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`relative z-10 w-4 h-4 mt-5 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
              expanded
                ? "bg-violet-500 border-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                : "bg-[#0A0A0F] border-violet-500/50 hover:border-violet-400 hover:shadow-[0_0_8px_rgba(139,92,246,0.4)]"
            }`}
            aria-label={`Toggle ${job.company}`}
          />
        </div>
        <div className="flex-1">
          <TimelineCard job={job} expanded={expanded} onToggle={() => setExpanded(!expanded)} />
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-violet-400 tracking-widest uppercase">
              Career
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Work{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg mx-auto">
              Building real systems, shipping real products, and solving real problems. Click any card to expand.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <div
            className="hidden md:block absolute left-1/2 top-5 bottom-5 w-px pointer-events-none -translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(139,92,246,0) 0%, rgba(139,92,246,0.4) 8%, rgba(139,92,246,0.4) 92%, rgba(139,92,246,0) 100%)",
            }}
          />

          {/* Left vertical line (mobile only) */}
          <div
            className="md:hidden absolute left-[11px] top-5 bottom-5 w-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(139,92,246,0) 0%, rgba(139,92,246,0.4) 8%, rgba(139,92,246,0.4) 92%, rgba(139,92,246,0) 100%)",
            }}
          />

          {experience.map((job, i) => (
            <TimelineItem key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
