import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Ex-libris bookplate: an engraved ornamental crest — double frame, corner
 * diamonds, ringed monogram, laurel branches, banner — whose strokes draw
 * themselves in exact sync with scroll. Swap the monogram block for a traced
 * portrait <path> set when a portrait asset exists.
 */

const CX = 120;

/* Quadratic bezier helpers for the laurel stems */
function qPoint(t: number, p0: [number, number], p1: [number, number], p2: [number, number]) {
  const u = 1 - t;
  return [
    u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
    u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1],
  ] as const;
}
function qAngle(t: number, p0: [number, number], p1: [number, number], p2: [number, number]) {
  const dx = 2 * (1 - t) * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]);
  const dy = 2 * (1 - t) * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

const LEAF = "M0 0 Q5 -7 12 -6 Q6 1 0 0";

function laurelGeometry(side: 1 | -1) {
  const p0: [number, number] = [CX + side * 20, 226];
  const p1: [number, number] = [CX + side * 88, 206];
  const p2: [number, number] = [CX + side * 64, 120];
  const stem = `M ${p0[0]} ${p0[1]} Q ${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`;
  const leaves = [0.15, 0.3, 0.45, 0.6, 0.75, 0.9].map((t) => {
    const [x, y] = qPoint(t, p0, p1, p2);
    const angle = qAngle(t, p0, p1, p2) + (side === 1 ? -55 : 235);
    return { x, y, angle };
  });
  return { stem, leaves };
}

const LEFT = laurelGeometry(-1);
const RIGHT = laurelGeometry(1);

export default function ExLibris({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"],
  });

  // Staggered draw windows over the single scroll-synced progress
  const useSeg = (a: number, b: number): MotionValue<number> =>
    useTransform(scrollYProgress, [a, b], [0, 1], { clamp: true });

  const frame = useSeg(0, 0.3);
  const corners = useSeg(0.15, 0.4);
  const rings = useSeg(0.28, 0.55);
  const stems = useSeg(0.45, 0.7);
  const leaves = useSeg(0.55, 0.85);
  const inkOpacity = useSeg(0.78, 1);

  const stroke = "stroke-brown-800 dark:stroke-cream";

  return (
    <div ref={ref} className={`flex justify-center ${className}`} role="img" aria-label="Ex libris — Bhanu Teja">
      <svg width="216" height="270" viewBox="0 0 240 300" fill="none" className="overflow-visible">
        {/* Double frame */}
        <motion.rect x="12" y="12" width="216" height="276" className={stroke} strokeWidth="1.2" style={{ pathLength: frame }} strokeOpacity="0.75" />
        <motion.rect x="20" y="20" width="200" height="260" className={stroke} strokeWidth="0.6" style={{ pathLength: frame }} strokeOpacity="0.5" />

        {/* Corner diamonds — gold */}
        {[
          [12, 12], [228, 12], [12, 288], [228, 288],
        ].map(([x, y], i) => (
          <motion.path
            key={i}
            d={`M ${x} ${y - 5} L ${x + 5} ${y} L ${x} ${y + 5} L ${x - 5} ${y} Z`}
            className="stroke-gold dark:stroke-gold-dark"
            strokeWidth="1"
            style={{ pathLength: corners }}
          />
        ))}

        {/* Top finial */}
        <motion.path
          d={`M ${CX} 40 L ${CX + 5} 48 L ${CX} 56 L ${CX - 5} 48 Z`}
          className="stroke-gold dark:stroke-gold-dark"
          strokeWidth="1"
          style={{ pathLength: corners }}
        />

        {/* Monogram rings */}
        <motion.circle cx={CX} cy="140" r="60" className={stroke} strokeWidth="1.2" style={{ pathLength: rings }} strokeOpacity="0.85" />
        <motion.circle cx={CX} cy="140" r="52" className={stroke} strokeWidth="0.6" style={{ pathLength: rings }} strokeOpacity="0.55" />

        {/* Laurel stems */}
        <motion.path d={LEFT.stem} className={stroke} strokeWidth="1" style={{ pathLength: stems }} strokeOpacity="0.7" />
        <motion.path d={RIGHT.stem} className={stroke} strokeWidth="1" style={{ pathLength: stems }} strokeOpacity="0.7" />

        {/* Leaves */}
        {[...LEFT.leaves, ...RIGHT.leaves].map(({ x, y, angle }, i) => (
          <motion.path
            key={i}
            d={LEAF}
            className={stroke}
            strokeWidth="0.9"
            strokeOpacity="0.7"
            style={{ pathLength: leaves }}
            transform={`translate(${x} ${y}) rotate(${angle})`}
          />
        ))}

        {/* Monogram + banner — ink settles in last */}
        <motion.g style={{ opacity: inkOpacity }}>
          <text
            x={CX}
            y="140"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily='"DM Serif Display", Georgia, serif'
            fontSize="44"
            className="fill-brown-900 dark:fill-cream"
          >
            BT
          </text>
          <text
            x={CX}
            y="252"
            textAnchor="middle"
            fontFamily='"DM Mono", monospace'
            fontSize="9"
            letterSpacing="3"
            className="fill-brown-500 dark:fill-brown-400"
          >
            EX LIBRIS · BHANU TEJA
          </text>
          <line x1="76" y1="262" x2="164" y2="262" className="stroke-gold dark:stroke-gold-dark" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
}
