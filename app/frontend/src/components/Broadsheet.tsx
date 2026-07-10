import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Github, ArrowUpRight } from "lucide-react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { projects } from "../data/portfolio";

type Project = typeof projects[0];

/**
 * The Broadsheet: featured projects bound as a physical book. Pages turn in
 * true 3D around the spine — click the corners/arrows, drag a page like paper
 * (tracks the pointer 1:1), or use arrow keys. Fold shading and cast shadows
 * follow the page angle in real time.
 */

const FLIP_EASE: [number, number, number, number] = [0.45, 0.05, 0.2, 1];

function PageFace({
  children,
  side,
}: {
  children: React.ReactNode;
  side: "left" | "right";
}) {
  return (
    <div className="absolute inset-0 bg-[#f4efe5] dark:bg-[#1a1510] paper-texture border border-brown-200/70 dark:border-brown-700/60 overflow-hidden flex flex-col">
      {/* gutter shading toward the spine */}
      <div
        className={`absolute inset-y-0 w-10 pointer-events-none ${
          side === "left"
            ? "right-0 bg-gradient-to-l from-brown-800/[0.10] to-transparent dark:from-black/40"
            : "left-0 bg-gradient-to-r from-brown-800/[0.10] to-transparent dark:from-black/40"
        }`}
      />
      <div className="relative flex-1 p-7 lg:p-9 flex flex-col min-h-0">{children}</div>
    </div>
  );
}

function TitlePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full gap-5">
      <span className="font-mono text-[9px] font-light tracking-[0.35em] uppercase text-brown-400 dark:text-brown-500">
        The Broadsheet
      </span>
      <div className="w-10 h-[2px] bg-gold dark:bg-gold-dark" />
      <h3 className="font-display text-3xl lg:text-4xl text-brown-900 dark:text-cream leading-tight">
        Selected
        <br />
        Works
      </h3>
      <p className="font-display italic text-sm text-brown-400 dark:text-brown-400">
        Bhanu Teja Veeramachaneni
      </p>
      <span className="font-mono text-[9px] font-light tracking-[0.3em] uppercase text-brown-400 dark:text-brown-600">
        First Edition · MMXXVI
      </span>
    </div>
  );
}

function ContentsPage({
  items,
  onJump,
}: {
  items: Project[];
  onJump: (projectIndex: number) => void;
}) {
  return (
    <div className="flex flex-col h-full min-h-0">
      <span className="font-mono text-[9px] font-light tracking-[0.35em] uppercase text-brown-400 dark:text-brown-500 mb-4">
        Contents
      </span>
      <div className="space-y-[7px] overflow-hidden">
        {items.map((p, i) => (
          <button
            key={p.title}
            onClick={(e) => {
              e.stopPropagation();
              onJump(i);
            }}
            className="group flex items-baseline gap-2 w-full text-left cursor-pointer"
          >
            <span className="font-display text-[13px] leading-snug text-brown-800 dark:text-cream group-hover:text-gold dark:group-hover:text-gold-dark transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              {p.title}
            </span>
            <span className="flex-1 border-b border-dotted border-brown-300/70 dark:border-brown-700 translate-y-[-3px]" />
            <span className="font-mono text-[10px] font-light text-brown-400 dark:text-brown-500">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-auto pt-2 font-display italic text-xs text-brown-400 dark:text-brown-500">
        Turn a page corner, drag a page, or pick a chapter.
      </p>
    </div>
  );
}

function FinPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full gap-4">
      <p className="font-display italic text-2xl text-brown-800 dark:text-cream">Fin.</p>
      <div className="flex items-center gap-3">
        <div className="h-px w-10 bg-brown-200 dark:bg-brown-700" />
        <span className="text-gold dark:text-gold-dark text-[10px]">✦</span>
        <div className="h-px w-10 bg-brown-200 dark:bg-brown-700" />
      </div>
      <p className="font-mono text-[9px] font-light tracking-[0.3em] uppercase text-brown-400 dark:text-brown-600">
        The full index continues below
      </p>
    </div>
  );
}

function ProjectLeftPage({ project, folio }: { project: Project; folio: string }) {
  return (
    <div className="flex flex-col h-full">
      <span className="font-display text-[64px] leading-none text-brown-200/80 dark:text-brown-800 select-none">
        {folio}
      </span>
      <h3 className="font-display text-2xl lg:text-[27px] leading-snug text-brown-900 dark:text-cream mt-4 mb-3">
        {project.title}
      </h3>
      <div className="w-8 h-[2px] bg-gold dark:bg-gold-dark mb-4" />
      <p className="font-display italic text-sm lg:text-base text-brown-500 dark:text-brown-400 leading-relaxed">
        {project.shortDescription}
      </p>
    </div>
  );
}

function ProjectRightPage({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (p: Project) => void;
}) {
  const excerpt =
    project.fullDescription.length > 300
      ? project.fullDescription.slice(0, 300).replace(/\s+\S*$/, "") + "…"
      : project.fullDescription;

  return (
    <div className="flex flex-col h-full min-h-0">
      <span className="font-mono text-[9px] font-light tracking-[0.3em] uppercase text-brown-400 dark:text-brown-500 mb-3">
        The Work
      </span>
      <p className="text-[13px] leading-relaxed text-brown-600 dark:text-brown-300 mb-4">
        {excerpt}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 rounded-[2px]"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg font-mono text-[9px] font-light tracking-[0.2em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors"
        >
          Full Story
          <ArrowUpRight className="w-3 h-3" />
        </button>
        <a
          href={project.githubLink}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 font-mono text-[9px] font-light tracking-[0.2em] uppercase rounded-[2px] hover:border-brown-500 hover:text-brown-800 dark:hover:text-cream transition-colors"
        >
          <Github className="w-3 h-3" />
          Source
        </a>
      </div>
    </div>
  );
}

export default function Broadsheet({
  items,
  onSelect,
}: {
  items: Project[];
  onSelect: (p: Project) => void;
}) {
  const reducedMotion = useReducedMotion();
  const bookRef = useRef<HTMLDivElement>(null);
  const [spread, setSpread] = useState(0);
  const [flip, setFlip] = useState<null | { dir: 1 | -1 }>(null);
  const flippingRef = useRef(false); // true while an animation is committing
  const angle = useMotionValue(0);

  // Project i lives on spread i + 1 (spread 0 is title + contents)
  const jumpToProject = (projectIndex: number) => {
    if (flippingRef.current) return;
    setFlip(null);
    angle.set(0);
    setSpread(projectIndex + 1);
  };

  // Build the page list. Title + contents fill spread 0, so each project's
  // left/right pair starts on an even index and shares one spread.
  const pages = useMemo(() => {
    const list: React.ReactNode[] = [
      <TitlePage key="title" />,
      <ContentsPage key="contents" items={items} onJump={jumpToProject} />,
    ];
    items.forEach((p, i) => {
      const folio = String(i + 1).padStart(2, "0");
      list.push(<ProjectLeftPage key={`${p.title}-l`} project={p} folio={folio} />);
      list.push(<ProjectRightPage key={`${p.title}-r`} project={p} onSelect={onSelect} />);
    });
    list.push(<FinPage key="fin" />);
    if (list.length % 2 !== 0) list.push(<div key="blank" />);
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, onSelect]);

  const spreadCount = pages.length / 2;
  const canNext = spread < spreadCount - 1;
  const canPrev = spread > 0;

  // Real-time fold shading driven by the page angle
  const foldShade = useTransform(angle, (a) => Math.sin((Math.abs(a) * Math.PI) / 180) * 0.28);
  const castShade = useTransform(angle, (a) => Math.sin((Math.abs(a) * Math.PI) / 180) * 0.22);

  const commit = (dir: 1 | -1) => {
    setSpread((s) => s + dir);
    setFlip(null);
    angle.set(0);
    flippingRef.current = false;
  };

  const runFlip = (dir: 1 | -1) => {
    if (flippingRef.current) return;
    if ((dir === 1 && !canNext) || (dir === -1 && !canPrev)) return;
    flippingRef.current = true;
    setFlip({ dir });
    if (reducedMotion) {
      commit(dir);
      return;
    }
    animate(angle, dir === 1 ? -180 : 180, {
      duration: 0.95,
      ease: FLIP_EASE,
      onComplete: () => commit(dir),
    });
  };

  const settleBack = () => {
    animate(angle, 0, {
      duration: 0.45,
      ease: "easeOut",
      onComplete: () => {
        setFlip(null);
        flippingRef.current = false;
      },
    });
  };

  const onPanStart = (_e: PointerEvent, info: PanInfo) => {
    if (flippingRef.current || flip) return;
    const rect = bookRef.current?.getBoundingClientRect();
    if (!rect) return;
    const onRightHalf = info.point.x > rect.left + rect.width / 2;
    if (onRightHalf && canNext) setFlip({ dir: 1 });
    else if (!onRightHalf && canPrev) setFlip({ dir: -1 });
  };

  const onPan = (_e: PointerEvent, info: PanInfo) => {
    if (!flip || flippingRef.current) return;
    const rect = bookRef.current?.getBoundingClientRect();
    const pageW = (rect?.width ?? 800) / 2;
    const raw = (info.offset.x / pageW) * 180;
    angle.set(flip.dir === 1 ? Math.max(-180, Math.min(0, raw)) : Math.min(180, Math.max(0, raw)));
  };

  const onPanEnd = (_e: PointerEvent, info: PanInfo) => {
    if (!flip || flippingRef.current) return;
    const a = angle.get();
    const fastCommit = flip.dir === 1 ? info.velocity.x < -500 : info.velocity.x > 500;
    const past = Math.abs(a) > 65;
    if (past || fastCommit) {
      flippingRef.current = true;
      animate(angle, flip.dir === 1 ? -180 : 180, {
        duration: 0.5,
        ease: "easeOut",
        onComplete: () => commit(flip.dir),
      });
    } else {
      settleBack();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") runFlip(1);
    if (e.key === "ArrowLeft") runFlip(-1);
  };

  // Page content for the current render state
  const L = 2 * spread;
  const R = 2 * spread + 1;
  const staticLeft = flip?.dir === -1 ? pages[L - 2] : pages[L];
  const staticRight = flip?.dir === 1 ? pages[R + 2] : pages[R];
  const flipFront = flip?.dir === 1 ? pages[R] : pages[L];
  const flipBack = flip?.dir === 1 ? pages[L + 2] : pages[R - 2];

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={bookRef}
        className="relative w-full max-w-4xl aspect-[13/8] select-none cursor-grab active:cursor-grabbing outline-none focus-visible:ring-1 focus-visible:ring-gold"
        style={{ perspective: 2600, touchAction: "pan-y" }}
        role="region"
        aria-roledescription="book"
        aria-label={`Selected works, spread ${spread + 1} of ${spreadCount}. Use arrow keys to turn pages.`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPanStart={onPanStart}
        onPan={onPan}
        onPanEnd={onPanEnd}
      >
        {/* Book cast shadow */}
        <div className="absolute -bottom-6 left-[6%] right-[6%] h-8 rounded-[50%] bg-brown-900/15 dark:bg-black/50 blur-xl pointer-events-none" />

        {/* Static left page */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <PageFace side="left">{staticLeft}</PageFace>
          {/* cast shadow from a page turning onto this side */}
          {flip?.dir === 1 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-l from-brown-900 to-transparent pointer-events-none"
              style={{ opacity: castShade }}
            />
          )}
        </div>

        {/* Static right page */}
        <div className="absolute left-1/2 top-0 w-1/2 h-full">
          <PageFace side="right">{staticRight}</PageFace>
          {flip?.dir === -1 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brown-900 to-transparent pointer-events-none"
              style={{ opacity: castShade }}
            />
          )}
        </div>

        {/* Spine */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-brown-800/30 via-brown-800/50 to-brown-800/30 dark:from-black/60 dark:via-black/80 dark:to-black/60 z-20 pointer-events-none" />

        {/* Flipping page */}
        {flip && (
          <motion.div
            className="absolute top-0 w-1/2 h-full z-10"
            style={{
              left: flip.dir === 1 ? "50%" : 0,
              transformOrigin: flip.dir === 1 ? "left center" : "right center",
              transformStyle: "preserve-3d",
              rotateY: angle,
            }}
          >
            {/* front face */}
            <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
              <PageFace side={flip.dir === 1 ? "right" : "left"}>{flipFront}</PageFace>
              <motion.div
                className={`absolute inset-0 pointer-events-none ${
                  flip.dir === 1
                    ? "bg-gradient-to-r from-brown-900 to-transparent"
                    : "bg-gradient-to-l from-brown-900 to-transparent"
                }`}
                style={{ opacity: foldShade }}
              />
            </div>
            {/* back face */}
            <div
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <PageFace side={flip.dir === 1 ? "left" : "right"}>{flipBack}</PageFace>
              <motion.div
                className={`absolute inset-0 pointer-events-none ${
                  flip.dir === 1
                    ? "bg-gradient-to-l from-brown-900 to-transparent"
                    : "bg-gradient-to-r from-brown-900 to-transparent"
                }`}
                style={{ opacity: foldShade }}
              />
            </div>
          </motion.div>
        )}

        {/* Corner click zones */}
        {canNext && !flip && (
          <button
            aria-label="Next spread"
            onClick={() => runFlip(1)}
            className="absolute right-0 bottom-0 w-16 h-16 z-30 group"
          >
            <span className="absolute right-1.5 bottom-1.5 w-0 h-0 border-l-[22px] border-l-transparent border-b-[22px] border-b-gold/30 group-hover:border-b-gold/70 transition-colors" />
          </button>
        )}
        {canPrev && !flip && (
          <button
            aria-label="Previous spread"
            onClick={() => runFlip(-1)}
            className="absolute left-0 bottom-0 w-16 h-16 z-30 group"
          >
            <span className="absolute left-1.5 bottom-1.5 w-0 h-0 border-r-[22px] border-r-transparent border-b-[22px] border-b-gold/30 group-hover:border-b-gold/70 transition-colors" />
          </button>
        )}
      </motion.div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-10">
        <button
          onClick={() => runFlip(-1)}
          disabled={!canPrev}
          aria-label="Previous spread"
          className="p-2 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 rounded-[2px] hover:border-gold hover:text-brown-900 dark:hover:text-cream disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-mono text-[10px] font-light tracking-[0.25em] uppercase text-brown-400 dark:text-brown-500">
          {`Spread ${spread + 1} / ${spreadCount} — drag a page, or turn a corner`}
        </span>
        <button
          onClick={() => runFlip(1)}
          disabled={!canNext}
          aria-label="Next spread"
          className="p-2 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 rounded-[2px] hover:border-gold hover:text-brown-900 dark:hover:text-cream disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
