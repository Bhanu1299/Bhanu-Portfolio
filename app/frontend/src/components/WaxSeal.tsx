import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * A molten wax seal: an oxblood blob drops, squishes, and takes the "BT"
 * monogram stamp with an embossed ridge — the classic way to close a letter.
 * Pure SVG + turbulence-roughened edge; no assets.
 */
export default function WaxSeal({ initials = "BT" }: { initials?: string }) {
  const filterId = useMemo(() => `wax-${Math.random().toString(36).slice(2, 8)}`, []);
  const gradId = useMemo(() => `waxg-${Math.random().toString(36).slice(2, 8)}`, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div
        initial={{ y: -56, scale: 0.2, opacity: 0 }}
        animate={{
          y: [-56, 0, 0, 0],
          scale: [0.2, 1.18, 0.94, 1],
          scaleY: [0.2, 0.82, 1.06, 1],
          opacity: [0, 1, 1, 1],
          rotate: [-10, -4, -4, -4],
        }}
        transition={{ duration: 0.7, times: [0, 0.45, 0.75, 1], ease: [0.34, 1.3, 0.5, 1] }}
        style={{ transformOrigin: "50% 60%" }}
      >
        <svg width="132" height="132" viewBox="0 0 132 132" role="img" aria-label="Wax seal">
          <defs>
            <filter id={filterId} x="-15%" y="-15%" width="130%" height="130%">
              <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="3" seed="5" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="7" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <radialGradient id={gradId} cx="42%" cy="36%" r="72%">
              <stop offset="0%" stopColor="#9c4030" />
              <stop offset="55%" stopColor="#7a2e22" />
              <stop offset="100%" stopColor="#521c13" />
            </radialGradient>
          </defs>

          {/* Wax blob with rough, hand-poured edge */}
          <g filter={`url(#${filterId})`}>
            <circle cx="66" cy="66" r="52" fill={`url(#${gradId})`} />
            {/* drips */}
            <circle cx="24" cy="82" r="9" fill={`url(#${gradId})`} />
            <circle cx="108" cy="52" r="7" fill={`url(#${gradId})`} />
          </g>

          {/* Stamp impression — appears once the wax settles */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.35 }}
          >
            {/* embossed ridge: dark groove + light lip */}
            <circle cx="66" cy="66" r="39" fill="none" stroke="#451710" strokeWidth="2" opacity="0.85" />
            <circle cx="66" cy="67.4" r="39" fill="none" stroke="#b96a52" strokeWidth="0.8" opacity="0.55" />
            <circle cx="66" cy="66" r="34" fill="none" stroke="#451710" strokeWidth="0.7" opacity="0.5" />

            {/* Monogram — pressed into the wax */}
            <text
              x="66"
              y="66"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily='"DM Serif Display", Georgia, serif'
              fontSize="34"
              fill="#451710"
              opacity="0.95"
            >
              {initials}
            </text>
            <text
              x="66"
              y="67.6"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily='"DM Serif Display", Georgia, serif'
              fontSize="34"
              fill="#c97f66"
              opacity="0.35"
            >
              {initials}
            </text>

            {/* soft top-light on the wax */}
            <ellipse cx="52" cy="44" rx="22" ry="10" fill="#ffffff" opacity="0.08" />
          </motion.g>
        </svg>
      </motion.div>

      <motion.p
        className="font-mono text-[10px] font-light tracking-[0.3em] uppercase text-brown-500 dark:text-brown-400"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4 }}
      >
        Sealed — opening your mail client
      </motion.p>
    </div>
  );
}
