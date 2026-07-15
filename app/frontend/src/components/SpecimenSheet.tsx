import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

/**
 * The Specimen Sheet: skills typeset the way a foundry shows off a typeface —
 * each skill printed at a point size proportional to proficiency. Depth is
 * read at a glance, no bars needed; hovering a word annotates its grade in
 * the margin, beneath the category label.
 */

type SkillItem = (typeof skills)[number]["items"][number];

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

function SpecimenRow({ group }: { group: (typeof skills)[number] }) {
  const [hovered, setHovered] = useState<SkillItem | null>(null);
  // Keeps the last grade text mounted so it fades out instead of vanishing
  const [lastHovered, setLastHovered] = useState<SkillItem | null>(null);

  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-7 border-b border-brown-200/60 dark:border-brown-700/50">
      {/* Category label + margin grade annotation */}
      <div className="flex items-start gap-3 md:pt-2.5">
        <div className="w-px h-4 bg-gold dark:bg-gold-dark flex-shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] font-light text-brown-500 dark:text-brown-400 tracking-[0.25em] uppercase">
            {group.category}
          </span>
          <span
            className={`hidden md:inline-block font-mono text-[9px] font-light tracking-[0.2em] uppercase text-gold dark:text-gold-dark transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!hovered}
          >
            {lastHovered ? `→ ${proficiencyLevel(lastHovered.pct)}` : " "}
          </span>
        </div>
      </div>

      {/* Specimen line */}
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2.5">
        {group.items.map((item, i) => (
          <motion.span
            key={item.name}
            className={`font-display leading-none cursor-default transition-colors duration-300 hover:!text-gold dark:hover:!text-gold-dark ${sizeClass(item.pct)} ${toneClass(item.pct)}`}
            onMouseEnter={() => {
              setHovered(item);
              setLastHovered(item);
            }}
            onMouseLeave={() =>
              setHovered((h) => (h?.name === item.name ? null : h))
            }
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            {item.name}
          </motion.span>
        ))}
      </div>
    </div>
  );
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
          <SpecimenRow key={group.category} group={group} />
        ))}
      </div>
    </div>
  );
}
