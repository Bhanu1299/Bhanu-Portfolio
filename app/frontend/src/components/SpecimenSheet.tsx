import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

/**
 * The Specimen Sheet: skills typeset the way a foundry shows off a typeface —
 * each skill printed at a point size proportional to proficiency. Depth is
 * read at a glance, no bars needed; hovering a word reveals its grade in
 * mono superscript.
 */

function proficiencyLevel(pct: number): string {
  if (pct >= 90) return "Expert";
  if (pct >= 75) return "Proficient";
  if (pct >= 55) return "Familiar";
  return "Learning";
}

function sizeClass(pct: number): string {
  if (pct >= 90) return "text-3xl sm:text-4xl";
  if (pct >= 80) return "text-2xl sm:text-3xl";
  if (pct >= 70) return "text-xl sm:text-2xl";
  if (pct >= 60) return "text-lg sm:text-xl";
  return "text-base sm:text-lg";
}

function toneClass(pct: number): string {
  if (pct >= 90) return "text-brown-900 dark:text-cream";
  if (pct >= 75) return "text-brown-700 dark:text-brown-100";
  if (pct >= 60) return "text-brown-600 dark:text-brown-300";
  return "text-brown-500 dark:text-brown-400";
}

export default function SpecimenSheet() {
  return (
    <div>
      {/* Plate caption */}
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="font-mono text-[10px] font-light tracking-[0.3em] uppercase text-brown-400 dark:text-brown-500">
          Type Specimen
        </span>
        <span className="font-display italic text-xs text-brown-400 dark:text-brown-500">
          set larger where practised deeper
        </span>
      </div>

      <div className="border-t border-brown-200/60 dark:border-brown-700/50">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-7 border-b border-brown-200/60 dark:border-brown-700/50"
          >
            {/* Category label */}
            <div className="flex items-start gap-3 md:pt-2.5">
              <div className="w-px h-4 bg-gold dark:bg-gold-dark flex-shrink-0 mt-0.5" />
              <span className="font-mono text-[10px] font-light text-brown-500 dark:text-brown-400 tracking-[0.25em] uppercase">
                {group.category}
              </span>
            </div>

            {/* Specimen line */}
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2.5">
              {group.items.map((item, i) => (
                <motion.span
                  key={item.name}
                  className={`group relative font-display leading-none cursor-default transition-colors duration-300 hover:!text-gold dark:hover:!text-gold-dark ${sizeClass(item.pct)} ${toneClass(item.pct)}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.name}
                  <span className="absolute -top-2 left-full ml-1 font-mono text-[8px] font-light tracking-[0.2em] uppercase text-gold dark:text-gold-dark whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {proficiencyLevel(item.pct)}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
