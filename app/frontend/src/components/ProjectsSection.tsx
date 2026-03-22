import { useState, useEffect } from "react";
import { Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/portfolio";

type Project = typeof projects[0];

function ProjectFlipCard({
  project,
  delay,
  isSelected,
  onSelect,
}: {
  project: Project;
  delay: number;
  isSelected: boolean;
  onSelect: (p: Project | null) => void;
}) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <div
        className="relative cursor-pointer"
        style={{ perspective: 1200, height: 280 }}
        onClick={() => onSelect(isSelected ? null : project)}
        aria-label={`${project.title} — click to see details`}
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isSelected ? 180 : 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 hover:bg-white/[0.045] transition-colors duration-300"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white leading-snug pr-2">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="flex-shrink-0 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-white/[0.05] text-slate-500">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-600">Click to see details</p>
            </div>
          </div>

          {/* Back face — minimal, overlay carries the content */}
          <div
            className="absolute inset-0 rounded-2xl bg-indigo-950/40 border border-indigo-500/20"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          />
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  // Close overlay on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-indigo-400 tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Featured{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-lg mx-auto">
              Full-stack, ML, and cloud projects. Click any card to flip and see full details.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => (
            <ProjectFlipCard
              key={project.title}
              project={project}
              delay={i * 0.12}
              isSelected={selectedProject?.title === project.title}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <>
            <ScrollReveal>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-5 text-center">
                More Projects
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {other.map((project, i) => (
                <ProjectFlipCard
                  key={project.title}
                  project={project}
                  delay={i * 0.1}
                  isSelected={selectedProject?.title === project.title}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Floating overlay — fixed, centered, ~70vw */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-[101] w-[90vw] max-w-2xl rounded-2xl bg-[#0d0d1a] border border-indigo-500/25 shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden"
              style={{ x: "-50%", y: "-50%", willChange: "transform" }}
              initial={{ opacity: 0, scale: 0.9, y: "-45%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, y: "-45%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Top bar */}
              <div className="flex items-start justify-between p-6 pb-4 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  {selectedProject.featured && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                      Featured
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Tech stack */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={selectedProject.githubLink}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all text-sm font-medium"
                    aria-label="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
