import { useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion, animate } from "framer-motion";

/**
 * Letterpress print effect: a brass press roller sweeps down the masthead and
 * "prints" the name — ink revealed in lockstep with the roller, rough wet-ink
 * edges (SVG turbulence displacement) that settle as the ink dries, over a
 * faint blind-deboss impression. Each letter carries a tiny deterministic
 * baseline jitter, like hand-set metal type.
 */

const PRINT_DURATION = 1.35;
const PRINT_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

/* Deterministic per-letter jitter — same on every load, every browser */
function jitter(seed: number) {
  const a = Math.sin(seed * 127.1) * 43758.5453;
  const b = Math.sin(seed * 311.7) * 26951.3571;
  const frac = (n: number) => n - Math.floor(n);
  return {
    rotate: (frac(a) - 0.5) * 1.2, // ±0.6deg
    y: (frac(b) - 0.5) * 2.4, // ±1.2px
  };
}

function TypeSetLine({ text, seedOffset }: { text: string; seedOffset: number }) {
  return (
    <span className="block whitespace-nowrap">
      {text.split("").map((letter, i) => {
        const j = jitter(seedOffset + i);
        return (
          <span
            key={i}
            className="inline-block"
            style={{ transform: `rotate(${j.rotate}deg) translateY(${j.y}px)` }}
          >
            {letter === " " ? " " : letter}
          </span>
        );
      })}
    </span>
  );
}

export default function LetterpressName({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const filterId = useMemo(() => `ink-${Math.random().toString(36).slice(2, 8)}`, []);
  const words = name.split(" ");
  // Two typeset lines: first name(s) / last name — mirrors the natural wrap
  const line1 = words.slice(0, -1).join(" ");
  const line2 = words[words.length - 1];

  // Ink settle: rough wet edges dry down to a faint bite
  useEffect(() => {
    if (reducedMotion) {
      displacementRef.current?.setAttribute("scale", "1.2");
      return;
    }
    const controls = animate(9, 1.2, {
      duration: 1.1,
      delay: PRINT_DURATION * 0.55,
      ease: "easeOut",
      onUpdate: (v) => displacementRef.current?.setAttribute("scale", String(v)),
    });
    return () => controls.stop();
  }, [reducedMotion]);

  const lines = (
    <>
      <TypeSetLine text={line1} seedOffset={3} />
      <TypeSetLine text={line2} seedOffset={41} />
    </>
  );

  return (
    <div className={`relative ${className}`}>
      <svg aria-hidden width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId} x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" seed="7" />
            <feDisplacementMap ref={displacementRef} in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Blind deboss — the impression the press leaves before the ink reads */}
      <h1
        aria-label={name}
        className="text-transparent select-none"
        style={{
          textShadow:
            "0.5px 0.5px 0 rgba(255,255,255,0.35), -0.5px -0.5px 0.5px rgba(61,34,18,0.18)",
        }}
      >
        {lines}
      </h1>

      {/* Ink — revealed in lockstep with the roller */}
      <motion.div
        aria-hidden
        className="absolute inset-0 text-brown-900 dark:text-cream select-none"
        style={{ filter: `url(#${filterId})` }}
        initial={reducedMotion ? { clipPath: "inset(0% 0% 0% 0%)" } : { clipPath: "inset(0% 0% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: PRINT_DURATION, ease: PRINT_EASE }}
      >
        {lines}
      </motion.div>

      {/* Press roller — wrapper is container-height, so translateY 0→100% rides top→bottom */}
      {!reducedMotion && (
        <motion.div
          aria-hidden
          className="absolute -left-[4%] -right-[4%] top-0 h-full pointer-events-none"
          initial={{ y: "0%", opacity: 0 }}
          animate={{
            y: ["0%", "3%", "97%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: PRINT_DURATION,
            times: [0, 0.08, 0.92, 1],
            ease: PRINT_EASE,
          }}
        >
          <div
            className="absolute left-0 right-0 top-0 -translate-y-1/2 h-3.5 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #8a6f45 0%, #d9bd8a 38%, #f0dfc0 50%, #c9a96e 62%, #7a5f3d 100%)",
              boxShadow:
                "0 2px 6px rgba(61,34,18,0.35), 0 8px 22px rgba(61,34,18,0.18)",
            }}
          />
          {/* fresh-ink glisten just above the roller */}
          <div
            className="absolute left-0 right-0 top-0 h-6 -translate-y-[calc(100%+7px)]"
            style={{
              background: "linear-gradient(to top, rgba(61,34,18,0.10), transparent)",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
