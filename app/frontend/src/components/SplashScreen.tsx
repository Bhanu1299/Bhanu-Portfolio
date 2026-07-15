import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The Sealed Folio: the portfolio arrives as a private pressing closed with
 * an oxblood wax seal on the binding seam. Breaking the seal (click or ⏎)
 * cracks the wax in two and the sheet physically parts along the stitch,
 * revealing the works underneath — already printing as the halves withdraw.
 */

interface SplashScreenProps {
  children: React.ReactNode;
}

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_DOORS: [number, number, number, number] = [0.77, 0, 0.18, 1];

/* Jagged fracture shared by both wax halves — complementary polygons */
const CRACK_TOP =
  "polygon(0% 0%, 100% 0%, 100% 44%, 82% 50%, 63% 42%, 45% 53%, 26% 43%, 10% 52%, 0% 46%)";
const CRACK_BOTTOM =
  "polygon(0% 46%, 10% 52%, 26% 43%, 45% 53%, 63% 42%, 82% 50%, 100% 44%, 100% 100%, 0% 100%)";

function SealFace({ filterId, gradId }: { filterId: string; gradId: string }) {
  return (
    <svg width="148" height="148" viewBox="0 0 148 148" aria-hidden>
      {/* Wax blob with rough, hand-poured edge */}
      <g filter={`url(#${filterId})`}>
        <circle cx="74" cy="74" r="56" fill={`url(#${gradId})`} />
        <circle cx="27" cy="92" r="9" fill={`url(#${gradId})`} />
        <circle cx="121" cy="58" r="7" fill={`url(#${gradId})`} />
      </g>
      {/* Embossed ridge: dark groove + light lip */}
      <circle cx="74" cy="74" r="43" fill="none" stroke="#451710" strokeWidth="2" opacity="0.85" />
      <circle cx="74" cy="75.4" r="43" fill="none" stroke="#b96a52" strokeWidth="0.8" opacity="0.55" />
      <circle cx="74" cy="74" r="37" fill="none" stroke="#451710" strokeWidth="0.7" opacity="0.5" />
      {/* Monogram — pressed into the wax */}
      <text
        x="74"
        y="74"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily='"DM Serif Display", Georgia, serif'
        fontSize="37"
        fill="#451710"
        opacity="0.95"
      >
        BT
      </text>
      <text
        x="74"
        y="75.6"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily='"DM Serif Display", Georgia, serif'
        fontSize="37"
        fill="#c97f66"
        opacity="0.35"
      >
        BT
      </text>
      {/* Soft top-light on the wax */}
      <ellipse cx="58" cy="49" rx="24" ry="11" fill="#ffffff" opacity="0.08" />
    </svg>
  );
}

/* One full-viewport face of the folio sheet; rendered once per panel so the
   composition stays continuous across the binding seam. */
function SheetFace() {
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: EASE_OUT },
  });

  return (
    <div className="relative w-full h-full bg-[#EFE9DE] paper-texture">
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 52%, rgba(61,34,18,0.09) 100%)",
        }}
      />
      {/* Etched plate frame */}
      <motion.div
        className="absolute inset-4 sm:inset-7 border border-brown-300/50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.9 }}
      />

      {/* Plate line */}
      <motion.p
        {...rise(0.2)}
        className="absolute top-[8%] inset-x-0 text-center font-mono text-[10px] font-light tracking-[0.35em] uppercase text-brown-400"
      >
        Private pressing · № 001 · MMXXVI
      </motion.p>

      {/* Masthead */}
      <div className="absolute top-[15%] inset-x-0 px-6 flex flex-col items-center gap-4 text-center">
        <motion.p
          {...rise(0.35)}
          className="font-display italic text-lg sm:text-xl text-gold"
        >
          The private folio of
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: EASE_OUT }}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-brown-800 tracking-tight"
          >
            Bhanu Teja Veeramachaneni
          </motion.h1>
        </div>
        <motion.p
          {...rise(0.7)}
          className="font-display italic text-sm sm:text-base text-brown-500"
        >
          works in software &amp; intelligent systems — kept under seal
        </motion.p>
      </div>

      {/* Invitation, below the seam */}
      <motion.div
        {...rise(1.15)}
        className="absolute top-[70%] sm:top-[66%] inset-x-0 flex flex-col items-center gap-2 text-center"
      >
        <p className="font-mono text-[10px] font-light tracking-[0.35em] uppercase text-brown-500">
          Break the seal to enter
        </p>
        <p className="font-mono text-[9px] font-light tracking-[0.25em] uppercase text-brown-400">
          click the wax — or press ⏎
        </p>
      </motion.div>

      {/* Colophon */}
      <motion.div
        {...rise(1.3)}
        className="absolute bottom-[5%] inset-x-0 flex items-center justify-center gap-6 sm:gap-10 font-mono text-[9px] font-light tracking-[0.25em] uppercase text-brown-400"
      >
        <span>Est. MMXXV</span>
        <span className="text-gold">·</span>
        <span>Set in DM Serif</span>
        <span className="text-gold">·</span>
        <span>One of one</span>
      </motion.div>
    </div>
  );
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const reducedMotion = useReducedMotion();
  const [opening, setOpening] = useState(false);
  const [done, setDone] = useState(false);

  const filterId = useMemo(() => `wax-${Math.random().toString(36).slice(2, 8)}`, []);
  const gradId = useMemo(() => `waxg-${Math.random().toString(36).slice(2, 8)}`, []);
  const ringPathId = useMemo(() => `ring-${Math.random().toString(36).slice(2, 8)}`, []);

  const handleEnter = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => setDone(true), reducedMotion ? 450 : 1400);
  };

  useEffect(() => {
    if (done) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const panelTransition = { delay: 0.3, duration: 0.9, ease: EASE_DOORS };

  return (
    <>
      {/* The works — mounted the moment the seal breaks, printing as the sheet parts */}
      {opening ? children : null}

      {!done && (
        <motion.div
          className={`fixed inset-0 z-[9999] ${opening ? "pointer-events-none" : ""}`}
          animate={reducedMotion && opening ? { opacity: 0 } : undefined}
          transition={{ duration: 0.4 }}
        >
          {/* Shared wax defs — referenced by both fractured halves */}
          <svg width="0" height="0" className="absolute" aria-hidden>
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
          </svg>

          {/* Top half of the sheet */}
          <motion.div
            className="splash-panel absolute inset-x-0 top-0 overflow-hidden"
            animate={!reducedMotion && opening ? { y: "-101%" } : undefined}
            transition={panelTransition}
          >
            <div className="splash-sheet absolute inset-x-0 top-0">
              <SheetFace />
            </div>
            {/* Binding stitch along the seam */}
            <div className="absolute inset-x-0 bottom-0 border-b border-dashed border-brown-300/70" />
            <div
              className="absolute inset-x-0 bottom-0 h-6 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(61,34,18,0.05))" }}
            />
          </motion.div>

          {/* Bottom half of the sheet */}
          <motion.div
            className="splash-panel absolute inset-x-0 bottom-0 overflow-hidden"
            animate={!reducedMotion && opening ? { y: "101%" } : undefined}
            transition={panelTransition}
          >
            <div className="splash-sheet absolute inset-x-0 bottom-0">
              <SheetFace />
            </div>
            <div className="absolute inset-x-0 top-0 border-t border-dashed border-brown-300/70" />
            <div
              className="absolute inset-x-0 top-0 h-6 pointer-events-none"
              style={{ background: "linear-gradient(to top, transparent, rgba(61,34,18,0.05))" }}
            />
          </motion.div>

          {/* The seal, astride the seam */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.72] sm:scale-100 z-10 flex items-center justify-center">
            {/* Rotating legend */}
            <motion.svg
              width="224"
              height="224"
              viewBox="0 0 224 224"
              className="splash-ring absolute pointer-events-none"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: opening ? 0 : 1 }}
              transition={{ delay: opening ? 0 : 1.05, duration: opening ? 0.2 : 0.8 }}
            >
              <defs>
                <path
                  id={ringPathId}
                  d="M 112,112 m -97,0 a 97,97 0 1,1 194,0 a 97,97 0 1,1 -194,0"
                />
              </defs>
              <text
                className="font-mono uppercase"
                fontSize="9"
                letterSpacing="2.4"
                fill="#8a7060"
                fontWeight="300"
              >
                <textPath
                  href={`#${ringPathId}`}
                  textLength="605"
                  lengthAdjust="spacingAndGlyphs"
                >
                  break the seal · enter the archive · break the seal · enter the archive ·
                </textPath>
              </text>
            </motion.svg>

            {/* Breathing invitation + drop-in */}
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { y: -56, scale: 0.2, opacity: 0 }}
              animate={
                reducedMotion
                  ? { opacity: 1 }
                  : {
                      y: [-56, 0, 0, 0],
                      scale: [0.2, 1.16, 0.95, 1],
                      opacity: [0, 1, 1, 1],
                      rotate: [-9, -3, -3, -3],
                    }
              }
              transition={
                reducedMotion
                  ? { delay: 0.6, duration: 0.4 }
                  : { delay: 0.85, duration: 0.7, times: [0, 0.45, 0.75, 1], ease: [0.34, 1.3, 0.5, 1] }
              }
            >
              <motion.div
                animate={!opening && !reducedMotion ? { scale: [1, 1.02, 1] } : undefined}
                transition={{ delay: 2, duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.button
                  onClick={handleEnter}
                  aria-label="Break the seal and enter the portfolio"
                  className="group relative block w-[148px] h-[148px] rounded-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-gold"
                  whileHover={!opening ? { scale: 1.05, rotate: -2 } : undefined}
                  whileTap={!opening ? { scale: 0.93 } : undefined}
                >
                  {/* Upper fracture half */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ clipPath: CRACK_TOP }}
                    animate={
                      !reducedMotion && opening
                        ? { x: -12, y: -36, rotate: -11, opacity: 0 }
                        : undefined
                    }
                    transition={{ duration: 0.5, ease: "easeIn" }}
                  >
                    <SealFace filterId={filterId} gradId={gradId} />
                  </motion.div>
                  {/* Lower fracture half */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ clipPath: CRACK_BOTTOM }}
                    animate={
                      !reducedMotion && opening
                        ? { x: 14, y: 46, rotate: 9, opacity: 0 }
                        : undefined
                    }
                    transition={{ duration: 0.5, ease: "easeIn", delay: 0.04 }}
                  >
                    <SealFace filterId={filterId} gradId={gradId} />
                  </motion.div>
                  {/* Fault line — hinted on hover */}
                  <svg
                    viewBox="0 0 148 148"
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                    aria-hidden
                  >
                    <path
                      d="M 22 70 L 38 77 L 51 64 L 67 78 L 93 62 L 111 74 L 126 66"
                      fill="none"
                      stroke="#451710"
                      strokeWidth="1"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
