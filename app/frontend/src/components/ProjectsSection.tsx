import { useState, useEffect } from "react";
import { Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/portfolio";

type Project = typeof projects[0];

function ProjectCard({
  project,
  delay,
  onSelect,
}: {
  project: Project;
  delay: number;
  onSelect: (p: Project) => void;
}) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <motion.div
        className="relative group cursor-pointer border border-brown-200/60 dark:border-brown-700 bg-white/30 dark:bg-white/[0.02] rounded-[2px] overflow-hidden h-[280px] flex flex-col justify-between p-6"
        onClick={() => onSelect(project)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        aria-label={`${project.title} — click for details`}
      >
        {/* Bottom gold accent on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold dark:bg-gold-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

        {/* Hover border overlay */}
        <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 dark:group-hover:border-brown-600 transition-colors duration-300 rounded-[2px] pointer-events-none" />

        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-base font-display font-normal text-brown-900 dark:text-cream leading-snug pr-2">
              {project.title}
            </h3>
            {project.featured && (
              <span className="flex-shrink-0 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-widest border border-gold/40 dark:border-brown-600 text-gold dark:text-gold-dark rounded-[2px]">
                Featured
              </span>
            )}
          </div>
          <p className="text-brown-500 dark:text-brown-400 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] border border-brown-200 dark:border-brown-700 text-brown-400 dark:text-brown-600 rounded-[2px]"
              >
                {tag}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 text-[10px] text-brown-400 dark:text-brown-600">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
          <p className="text-[10px] text-brown-300 dark:text-brown-700 tracking-[0.08em] uppercase">
            Click for details
          </p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-brown-400 dark:text-brown-600 tracking-[0.18em] uppercase">
              Portfolio
            </span>
            <motion.div
              className="h-px bg-gold dark:bg-gold-dark mx-auto my-3"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
              Featured Projects
            </h2>
            <p className="text-brown-500 dark:text-brown-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Full-stack, ML, and cloud projects. Click any card to see full details.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 0.12}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Other */}
        {other.length > 0 && (
          <>
            <ScrollReveal>
              <p className="text-xs text-brown-400 dark:text-brown-600 uppercase tracking-[0.14em] mb-5 text-center">
                More Projects
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {other.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  delay={i * 0.1}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 z-[100] bg-brown-900/40 dark:bg-brown-900/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-[101] w-[90vw] max-w-2xl bg-parchment dark:bg-sepia-bg border border-brown-200 dark:border-brown-700 shadow-[0_24px_80px_rgba(31,23,16,0.3)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden rounded-[2px]"
              style={{ x: "-50%", y: "-50%", willChange: "transform" }}
              initial={{ opacity: 0, scale: 0.94, y: "-47%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%" }}
              exit={{ opacity: 0, scale: 0.94, y: "-47%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 pb-4 border-b border-brown-200/60 dark:border-brown-700">
                <div>
                  <h3 className="text-xl font-display font-normal text-brown-900 dark:text-cream">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.featured && (
                    <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-widest border border-gold/40 dark:border-brown-600 text-gold dark:text-gold-dark rounded-[2px]">
                      Featured
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-brown-400 dark:text-brown-600 hover:text-brown-800 dark:hover:text-cream transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <p className="text-brown-500 dark:text-brown-400 text-sm leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div>
                  <p className="text-xs text-brown-400 dark:text-brown-600 uppercase tracking-[0.12em] mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-1">
                  <a
                    href={selectedProject.githubLink}
                    className="flex items-center gap-2 px-4 py-2 border border-brown-200 dark:border-brown-700 text-brown-500 dark:text-brown-400 hover:text-brown-800 dark:hover:text-cream hover:border-brown-400 dark:hover:border-brown-500 transition-all text-sm rounded-[2px]"
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
