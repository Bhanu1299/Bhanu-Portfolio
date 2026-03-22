// ✏️ EDIT HERE — Splash / Hero Content
export const personalInfo = {
  name: "Bhanu Teja Veeramachaneni",
  statusBadge: "MS Computer Science • Software & AI Engineer",
  tagline:
    "I build things that ship — backend systems, GenAI pipelines, and full-stack solutions. LangGraph • RAG • Node.js • AWS.",

  // ✏️ EDIT HERE — About Me Summary (each string is one paragraph, HTML tags supported)
  bio: [
    `I'm a <strong>CS Master's graduate from the University at Buffalo</strong> with production experience in full-stack engineering, distributed systems, and GenAI applications. I shipped backend APIs, ML pipelines, and cloud infrastructure at scale—comfortable owning projects end to end.`,
    `At <strong>Appetit</strong>, I designed a 20+ table loyalty rewards schema and built APIs handling 50K+ daily transactions with zero-error processing. I shipped across mobile, web, and admin surfaces on AWS ECS, cut deployment time 75% with automated CI/CD, and drove a 20% lift in user engagement.`,
    `On the AI/ML side, I build with <strong>LangGraph, LangChain, and RAG pipelines</strong>. Recent work includes a multi-agent career intelligence system, a GenAI workflow automation platform with sub-200ms retrieval latency, and a multimodal knowledge assistant that improved retrieval accuracy 28% over keyword baseline.`,
  ],

  // Contact & Social
  email: "bteja0519@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhanuteja1299/",
  github: "https://github.com/Bhanu1299",
  location: "Buffalo, NY • Open to Remote / Relocation",
  resumePath: "/docs/Bhanu_Teja_Resume.pdf",
  footerCopyright: "© 2026 Bhanu Teja. Built with React.",
};


// ✏️ EDIT HERE — About Stats
export const stats = [
  { value: "6+", label: "Projects Built" },
  { value: "3+", label: "Full-Stack Applications" },
  { value: "3+", label: "ML/AI Systems" },
  { value: "20+", label: "APIs Developed" },
  { value: "5+", label: "Years Coding" },
  { value: "2", label: "Internships" },
];


// ✏️ EDIT HERE — Skills
export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "HTML", "CSS", "UI/UX"],
    color: "from-violet-500 to-purple-500",
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "FastAPI", "Microservices", "REST APIs", "Authentication", "Async Programming"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (Lambda, ECS)", "Docker", "CI/CD (GitHub Actions)", "Cloud Computing", "Linux"],
    color: "from-emerald-500 to-green-500",
  },
  {
    category: "GenAI & LLMs",
    items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "OpenAI API", "Hugging Face"],
    color: "from-pink-500 to-rose-500",
  },
  {
    category: "ML & Data",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "FAISS", "Pinecone", "OpenCV", "Computer Vision", "Predictive Analytics"],
    color: "from-amber-500 to-orange-500",
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Spark", "Kafka", "ACID Transactions"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "n8n", "Power BI", "Tesseract", "Android Studio", "OOP"],
    color: "from-purple-500 to-pink-500",
  },
];


// ✏️ EDIT HERE — Work Experience
export const experience = [
  {
    company: "Appetit",
    role: "Software Engineer Intern",
    dateRange: "Jan 2025 – May 2025",
    location: "Buffalo, NY",
    bullets: [
      "Designed a 20+ table relational schema with full ACID transaction support and built loyalty reward APIs handling 50K+ daily transactions with 100% uptime at launch.",
      "Redesigned the admin portal and shipped loyalty features across mobile and web applications, connecting all APIs to enable real-time sync of rewards rules and configurations across all surfaces.",
      "Containerized backend services using Docker for local development and pre-PR testing, ensuring environment consistency across the team before deployment to AWS ECS.",
      "Reduced deployment time 75% (40 min → 10 min) by engineering automated CI/CD pipelines via GitHub Actions, enabling the team to ship faster across all surfaces.",
      "Drove a 20% lift in user engagement across two release cycles by delivering the full loyalty program end-to-end—from backend APIs to mobile, web, and admin surfaces on AWS ECS.",
    ],
  },
  {
    company: "AppsTek Corp",
    role: "Software Engineer Intern",
    dateRange: "Sep 2023 – May 2024",
    location: "Hyderabad",
    bullets: [
      "Engineered distributed Spark/Kafka event-streaming pipelines and Python/SQL data infrastructure processing 100K+ customer records, improving data freshness from daily batch to near-real-time (hourly).",
      "Designed and trained churn prediction models (AUC 0.81, F1 0.74) on top of the pipeline, identifying at-risk segments and directly informing retention campaigns.",
      "Built Power BI dashboards surfacing churn and retention KPIs, adopted as the primary decision-making tool—eliminating a 2-day reporting lag entirely.",
    ],
  },
];


// ✏️ EDIT HERE — Education
export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University at Buffalo, SUNY",
    year: "2025",
    coursework: [
      "Distributed Systems",
      "Machine Learning",
      "Algorithms & Complexity",
      "Database Systems",
      "Cloud Computing",
      "Natural Language Processing",
    ],
    activities: [
      "Graduate Teaching Assistant",
      "CS Research",
      "GenAI Projects",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Vellore Institute of Technology",
    year: "2024",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Object-Oriented Programming",
    ],
    activities: [
      "Hackathon Participant",
      "Technical Projects",
      "Open Source Contributions",
    ],
  },
];


// ✏️ EDIT HERE — Projects
export const projects = [
  {
    title: "Autonomous Career Intelligence Agent",
    shortDescription: "Multi-agent job search automation system using LangGraph for resume-JD alignment.",
    fullDescription:
      "Building a multi-agent system using LangGraph that decomposes job descriptions into structured workflows. Features a planner–executor–critic architecture that iteratively refines resume-JD alignment using cosine similarity and keyword scoring. Implemented tool-calling and scoring loops that reduce manual resume tailoring to a single prompt, automating cover letter generation and feedback refinement end-to-end.",
    techStack: ["LangGraph", "LangChain", "Python", "FastAPI", "Prompt Engineering"],
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "GenAI Workflow Automation Platform",
    shortDescription: "Visual workflow builder for LLM-powered automation with sub-200ms latency.",
    fullDescription:
      "Designed a visual workflow builder abstracting LLM prompt orchestration, tool-calling, and vector retrieval into configurable pipelines. Improved reliability of long-running workflows by implementing retry logic and exponential backoff to gracefully handle OpenAI rate limits and network failures. Deployed containerized services on AWS ECS/Lambda, achieving scalable and cost-efficient execution without provisioned infrastructure.",
    techStack: ["React.js", "Node.js", "LangChain", "OpenAI API", "AWS ECS/Lambda", "Docker"],
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "Multi-Modal AI Knowledge Assistant",
    shortDescription: "RAG system for PDFs, images, and tables with 28% improved retrieval accuracy.",
    fullDescription:
      "Built a multimodal RAG system capable of indexing PDFs, scanned images, and tables across 1K+ documents. Improved retrieval accuracy approximately 28% over baseline keyword search. Achieved sub-200ms vector retrieval latency on 1K+ indexed documents by benchmarking and tuning FAISS index configuration locally before cloud deployment. Enforced retrieval-constrained generation with confidence thresholds and fallback logic, prioritizing factual reliability over response completeness.",
    techStack: ["Python", "LangChain", "RAG", "FAISS", "Pinecone", "OpenCV", "Tesseract"],
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "Face Mask Recognition System",
    shortDescription: "Computer vision ML system for mask detection in public spaces.",
    fullDescription:
      "A face mask detection system using machine learning as an effective solution for enforcing face mask policies in public spaces. Analyzes real-time video feed and alerts authorities or denies entry to non-compliant individuals. Built with transfer learning and optimized CNN architectures for edge deployment. Can be adapted for other safety applications and public health monitoring.",
    techStack: ["Python", "PyTorch", "OpenCV", "Computer Vision", "Machine Learning", "TensorFlow"],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Smart Street Light System",
    shortDescription: "IoT-enabled intelligent lighting infrastructure for urban energy efficiency.",
    fullDescription:
      "An intelligent lighting infrastructure designed for outdoor illumination in urban areas. Utilizes advanced technologies and automation to improve energy efficiency, reduce costs, and enhance overall functionality. Integrates with smart city systems for traffic management, parking, and security. Features adaptive brightness control, motion sensing, and predictive maintenance. Enables cohesive and interconnected urban infrastructure promoting sustainable city development.",
    techStack: ["Machine Learning", "TensorFlow", "IoT", "Python", "Data Analytics"],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "AI-Based Clinical Data System",
    shortDescription: "NGS pipeline for early-stage clinical prediction with 92% detection accuracy.",
    fullDescription:
      "Built an AI-driven NGS (Next-Generation Sequencing) pipeline in Python and Java for early-stage clinical prediction, achieving 92% detection accuracy. Applied object-oriented design principles to build a scalable diagnostic system. Contributed to a patent-awarded innovation in healthcare AI.",
    techStack: ["Python", "Java", "Machine Learning", "Data Science", "OOP"],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
];
