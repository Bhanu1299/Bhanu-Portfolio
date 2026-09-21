import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Ex-libris plate: a double-ruled frame whose strokes draw themselves in exact
 * sync with scroll, with the portrait filling the plate and the banner settling
 * in last.
 */

const CX = 120;
const portraitSrc = `${import.meta.env.BASE_URL}portrait.png`;

/* Inner plate — the portrait fills this exactly */
const PLATE = { x: 20, y: 20, w: 200, h: 260 };

export default function ExLibris({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.3"],
  });

  // Staggered draw windows over the single scroll-synced progress
  const useSeg = (a: number, b: number): MotionValue<number> =>
    useTransform(scrollYProgress, [a, b], [0, 1], { clamp: true });

  const frame = useSeg(0, 0.32);
  const corners = useSeg(0.18, 0.5);
  const plate = useSeg(0.4, 0.78);
  const inkOpacity = useSeg(0.76, 1);

  const stroke = "stroke-brown-800 dark:stroke-cream";

  return (
    <div ref={ref} className={`flex justify-center ${className}`} role="img" aria-label="Ex libris — Bhanu Teja">
      <svg width="300" height="400" viewBox="0 0 240 320" fill="none" className="overflow-visible">
        <defs>
          <clipPath id="exlibris-plate-clip">
            <rect x={PLATE.x} y={PLATE.y} width={PLATE.w} height={PLATE.h} />
          </clipPath>
        </defs>

        {/* Portrait fills the plate — fades in once the frame is drawn */}
        <motion.g style={{ opacity: plate }} clipPath="url(#exlibris-plate-clip)">
          <image
            href={portraitSrc}
            x={PLATE.x}
            y={PLATE.y}
            width={PLATE.w}
            height={PLATE.h}
            preserveAspectRatio="xMidYMid slice"
            className="[filter:sepia(0.55)_saturate(0.75)_hue-rotate(-12deg)_contrast(1.04)] dark:[filter:sepia(0.40)_saturate(0.60)_brightness(0.92)_contrast(1.06)]"
          />
        </motion.g>

        {/* Double frame — drawn over the portrait edge */}
        <motion.rect x="12" y="12" width="216" height="276" className={stroke} strokeWidth="1.2" style={{ pathLength: frame }} strokeOpacity="0.75" />
        <motion.rect
          x={PLATE.x}
          y={PLATE.y}
          width={PLATE.w}
          height={PLATE.h}
          className={stroke}
          strokeWidth="0.6"
          style={{ pathLength: frame }}
          strokeOpacity="0.5"
        />

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

        {/* Banner — ink settles in last */}
        <motion.g style={{ opacity: inkOpacity }}>
          <text
            x={CX}
            y="306"
            textAnchor="middle"
            fontFamily='"DM Mono", monospace'
            fontSize="9"
            letterSpacing="3"
            className="fill-brown-500 dark:fill-brown-400"
          >
            EX LIBRIS · BHANU TEJA
          </text>
          <line x1="76" y1="314" x2="164" y2="314" className="stroke-gold dark:stroke-gold-dark" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
}
