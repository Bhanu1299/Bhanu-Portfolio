import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Ink-wash chapter transition: a sepia brush stroke with ragged, turbulence-
 * roughened edges sweeps across the page boundary in *exact* sync with scroll
 * (direct progress mapping, no smoothing). The texture is fixed; a clip-path
 * reveal sweeps over it so the edge stays crisp while the wash spreads.
 */
export default function InkWash() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.35"],
  });

  const filterId = useMemo(() => `wash-${Math.random().toString(36).slice(2, 8)}`, []);

  const mainClip = useTransform(
    scrollYProgress,
    (p) => `inset(0% ${(1 - p) * 100}% 0% 0%)`
  );
  const echoProgress = useTransform(scrollYProgress, [0.18, 1], [0, 1], { clamp: true });
  const echoClip = useTransform(
    echoProgress,
    (p) => `inset(0% ${(1 - p) * 100}% 0% 0%)`
  );
  const nibOpacity = useTransform(scrollYProgress, [0, 0.03], [0, 1]);

  return (
    <div ref={ref} aria-hidden className="relative h-24 overflow-hidden bg-parchment dark:bg-sepia-bg">
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId} x="-5%" y="-60%" width="110%" height="220%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.14" numOctaves="3" seed="11" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="16" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Nib dot — where the brush first touches down */}
      <motion.div
        className="absolute left-[6%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brown-800/20 dark:bg-cream/15"
        style={{ opacity: nibOpacity }}
      />

      {/* Main stroke */}
      <motion.div className="absolute inset-y-4 left-[5%] right-[5%]" style={{ clipPath: mainClip }}>
        <svg className="w-full h-full" viewBox="0 0 1200 64" preserveAspectRatio="none">
          <g filter={`url(#${filterId})`}>
            <rect x="8" y="26" width="1184" height="13" className="fill-brown-800/[0.13] dark:fill-cream/[0.09]" />
          </g>
        </svg>
      </motion.div>

      {/* Echo stroke — a lighter, trailing second pass */}
      <motion.div className="absolute inset-y-4 left-[8%] right-[8%]" style={{ clipPath: echoClip }}>
        <svg className="w-full h-full" viewBox="0 0 1200 64" preserveAspectRatio="none">
          <g filter={`url(#${filterId})`}>
            <rect x="8" y="40" width="1150" height="6" className="fill-brown-800/[0.08] dark:fill-cream/[0.05]" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
