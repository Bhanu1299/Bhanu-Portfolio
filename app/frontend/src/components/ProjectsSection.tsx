import { useState, useEffect } from "react";
import { Github, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/portfolio";

type Project = typeof projects[0];

// Vintage-toned language bar colors — muted, earthy, harmonious with brown/gold/cream palette
const TECH_COLORS: Record<string, string> = {
  "Python":             "#7A9E8A", // dusty sage
  "React.js":           "#8AABB5", // antique steel blue
  "Node.js":            "#7A9060", // muted olive
  "LangChain":          "#9E8A60", // warm ochre
  "FastAPI":            "#6A9E90", // aged teal
  "PyTorch":            "#B5705B", // muted terracotta
  "TensorFlow":         "#C4956A", // warm amber — close to gold
  "OpenCV":             "#7A7A9E", // dusty periwinkle
  "Docker":             "#6A8AB5", // faded denim
  "AWS ECS/Lambda":     "#C9A96E", // gold (theme accent)
  "OpenAI API":         "#9E7A9E", // dusty mauve
  "LangGraph":          "#6A8A9E", // slate blue
  "RAG":                "#9E6A8A", // dusty rose
  "FAISS":              "#6A9E9E", // muted cyan
  "Pinecone":           "#8A7A60", // warm taupe
  "Machine Learning":   "#B58A6A", // sandy tan
  "Computer Vision":    "#7A9E7A", // sage green
  "IoT":                "#9E7A6A", // warm umber
  "Java":               "#B5956A", // pale gold
  "Data Science":       "#9E8A7A", // rose taupe
  "Data Analytics":     "#C4A87A", // light ochre
  "Tesseract":          "#A07A6A", // muted sienna
  "Prompt Engineering": "#8A8A7A", // warm grey
  "OOP":                "#7A8A8A", // cool slate
};

function getTechColor(tech: string): string {
  return TECH_COLORS[tech] ?? "#9A8A7A";
}

function TechBar({ techs, compact = false }: { techs: string[]; compact?: boolean }) {
  const pct = 100 / techs.length;
  return (
    <div>
      <div className="flex w-full h-1.5 rounded-none overflow-hidden gap-[1px]">
        {techs.map((tech) => (
          <div
            key={tech}
            style={{ width: `${pct}%`, backgroundColor: getTechColor(tech) }}
            title={tech}
          />
        ))}
      </div>
      {compact ? (
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
          {techs.slice(0, 3).map((tech) => (
            <span key={tech} className="flex items-center gap-1 text-[10px] text-brown-500 dark:text-brown-400">
              <span
                className="inline-block w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: getTechColor(tech) }}
              />
              {tech}
            </span>
          ))}
          {techs.length > 3 && (
            <span className="text-[10px] text-brown-400 dark:text-brown-600">+{techs.length - 3} more</span>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
          {techs.map((tech) => (
            <span key={tech} className="flex items-center gap-1.5 text-[11px] text-brown-600 dark:text-brown-300">
              <span
                className="inline-block w-2 h-2 flex-shrink-0"
                style={{ backgroundColor: getTechColor(tech) }}
              />
              {tech}
              <span className="text-brown-400 dark:text-brown-600 text-[10px]">
                {Math.round(100 / techs.length)}%
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

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
          <h3 className="text-base font-display font-normal text-brown-900 dark:text-cream leading-snug mb-3">
            {project.title}
          </h3>
          <p className="text-brown-500 dark:text-brown-400 text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div>
          <TechBar techs={project.techStack} compact />
          <p className="text-[10px] text-brown-300 dark:text-brown-700 tracking-[0.08em] uppercase mt-3">
            Click for details
          </p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);
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
            <span className="text-xs font-medium text-brown-500 dark:text-brown-400 tracking-[0.18em] uppercase">
              Portfolio
            </span>
            <motion.div
              className="h-[2px] bg-gold dark:bg-gold-dark mx-auto my-3"
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
              My Projects
            </h2>
            <p className="text-brown-500 dark:text-brown-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Full-stack, ML, and cloud projects. Click any card to see full details.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 0.12}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Show More / Less button */}
        {other.length > 0 && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setShowMore((prev) => !prev)}
              className="flex items-center gap-2 px-5 py-2 border border-brown-300 dark:border-brown-700 text-brown-500 dark:text-brown-400 hover:text-brown-800 dark:hover:text-cream hover:border-brown-500 dark:hover:border-brown-500 text-xs tracking-[0.1em] uppercase transition-all duration-200 rounded-[2px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {showMore ? (
                <>Show Less <ChevronUp className="w-3.5 h-3.5" /></>
              ) : (
                <>+ Show More Projects ({other.length}) <ChevronDown className="w-3.5 h-3.5" /></>
              )}
            </motion.button>
          </div>
        )}

        {/* Additional projects — animated expand */}
        <AnimatePresence>
          {showMore && other.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {other.map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    delay={i * 0.1}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                <h3 className="text-xl font-display font-normal text-brown-900 dark:text-cream">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-brown-400 dark:text-brown-400 hover:text-brown-800 dark:hover:text-cream transition-colors"
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
                  <p className="text-xs text-brown-500 dark:text-brown-400 uppercase tracking-[0.12em] mb-3">
                    Tech Stack
                  </p>
                  <TechBar techs={selectedProject.techStack} compact={false} />
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
