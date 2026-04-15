// ✏️ EDIT HERE — Splash / Hero Content
export const personalInfo = {
  name: "Bhanu Teja Veeramachaneni",
  statusBadge: "MS Computer Science • Software & AI Engineer",
  tagline:
    "I build things that ship — backend systems, GenAI pipelines, and full-stack solutions. LangGraph • RAG • LangChain • Node.js • FastAPI • AWS.",

  // ✏️ EDIT HERE — About Me Summary (each string is one paragraph, HTML tags supported)
  bio: [
    `I'm a <strong>CS Master's graduate from the University at Buffalo</strong> with production experience in full-stack engineering, distributed systems, and GenAI applications. I shipped backend APIs, ML pipelines, and cloud infrastructure at scale — comfortable owning projects end to end, from schema design to CI/CD to live deployment.`,
    `At <strong>Appetit</strong>, I designed a 20+ table loyalty rewards schema and built APIs handling 50K+ daily transactions with 100% uptime at launch. I owned the full loyalty program end-to-end — backend, mobile, web, and admin — on AWS ECS, cut deployment time 75% with automated CI/CD pipelines, and drove a 20% lift in user engagement across two release cycles. At <strong>AppsTek Corp</strong>, I engineered Spark/Kafka streaming pipelines processing 100K+ customer records, trained churn models hitting AUC 0.81, and built dashboards that eliminated a 2-day reporting lag entirely.`,
    `On the AI/ML side, I build production-grade systems with <strong>LangGraph, LangChain, RAG pipelines, and multi-agent architectures</strong>. Recent work includes a fully autonomous career intelligence agent that scrapes, analyzes, and tailors applications end-to-end; a GenAI workflow automation platform maintaining sub-200ms retrieval latency under concurrent load; a multimodal knowledge assistant that improved retrieval accuracy 28% over keyword baseline; and Aria, a fully local macOS voice AI agent with LLM intent routing, vision fallback, and native OS control.`,
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
  { value: "13+", label: "Projects Built" },
  { value: "3+", label: "Full-Stack Applications" },
  { value: "5+", label: "ML/AI Systems" },
  { value: "50K+", label: "Daily Transactions Handled" },
  { value: "5+", label: "Years Coding" },
  { value: "2", label: "Internships" },
];


// ✏️ EDIT HERE — Skills
export const skills = [
  {
    category: "Languages",
    color: "from-indigo-500 to-blue-500",
    items: [
      { name: "Python", pct: 93 },
      { name: "JavaScript", pct: 87 },
      { name: "TypeScript", pct: 81 },
      { name: "SQL", pct: 84 },
      { name: "Java", pct: 62 },
      { name: "C++", pct: 48 },
    ],
  },
  {
    category: "Frontend",
    color: "from-violet-500 to-purple-500",
    items: [
      { name: "React.js", pct: 87 },
      { name: "HTML", pct: 91 },
      { name: "CSS", pct: 86 },
      { name: "Tailwind CSS", pct: 83 },
      { name: "React Native", pct: 71 },
      { name: "Next.js", pct: 65 },
      { name: "UI/UX", pct: 63 },
    ],
  },
  {
    category: "Backend & APIs",
    color: "from-cyan-500 to-teal-500",
    items: [
      { name: "REST APIs", pct: 92 },
      { name: "FastAPI", pct: 89 },
      { name: "Node.js", pct: 83 },
      { name: "Async Programming", pct: 80 },
      { name: "Authentication", pct: 76 },
      { name: "Microservices", pct: 71 },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-emerald-500 to-green-500",
    items: [
      { name: "Docker", pct: 86 },
      { name: "AWS (Lambda, ECS)", pct: 81 },
      { name: "CI/CD (GitHub Actions)", pct: 84 },
      { name: "Cloud Computing", pct: 74 },
      { name: "Linux", pct: 69 },
    ],
  },
  {
    category: "GenAI & LLMs",
    color: "from-pink-500 to-rose-500",
    items: [
      { name: "RAG", pct: 91 },
      { name: "LangChain", pct: 89 },
      { name: "LangGraph", pct: 87 },
      { name: "OpenAI API", pct: 90 },
      { name: "Prompt Engineering", pct: 86 },
      { name: "Groq", pct: 76 },
      { name: "Llama", pct: 72 },
      { name: "Hugging Face", pct: 68 },
    ],
  },
  {
    category: "ML & Data",
    color: "from-amber-500 to-orange-500",
    items: [
      { name: "Scikit-learn", pct: 92 },
      { name: "FAISS", pct: 79 },
      { name: "Predictive Analytics", pct: 88 },
      { name: "Computer Vision", pct: 74 },
      { name: "PyTorch", pct: 71 },
      { name: "Pinecone", pct: 76 },
      { name: "OpenCV", pct: 90 },
      { name: "TensorFlow", pct: 95 },
    ],
  },
  {
    category: "Databases",
    color: "from-blue-500 to-indigo-500",
    items: [
      { name: "PostgreSQL", pct: 88 },
      { name: "ACID Transactions", pct: 84 },
      { name: "MongoDB", pct: 77 },
      { name: "Spark", pct: 73 },
      { name: "Kafka", pct: 69 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Git", pct: 93 },
      { name: "GitHub", pct: 91 },
      { name: "OOP", pct: 86 },
      { name: "Playwright", pct: 83 },
      { name: "n8n", pct: 68 },
      { name: "Apify", pct: 64 },
      { name: "Power BI", pct: 67 },
      { name: "Tesseract", pct: 59 },
      { name: "Android Studio", pct: 78 },
    ],
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
      "Architected a 20+ table relational schema with full ACID transaction guarantees, powering loyalty reward APIs that sustained 50K+ daily transactions with 100% uptime through launch — zero incident response required.",
      "Owned the end-to-end loyalty program: designed backend APIs, integrated them across iOS, Android, and web surfaces, and rebuilt the admin portal — enabling real-time sync of reward rules and configurations across all platforms simultaneously.",
      "Cut deployment time by 75% (40 min → 10 min) by building automated CI/CD pipelines with GitHub Actions, eliminating manual deployment steps and letting the team ship across all surfaces in a single workflow.",
      "Containerized all backend services with Docker, standardizing local development and pre-PR testing environments — eliminating environment inconsistencies and ensuring deployment parity with AWS ECS production.",
      "Drove a 20% lift in user engagement across two release cycles by delivering the full loyalty program — from data layer to mobile and web UI — consistently on time and without regression.",
    ],
  },
  {
    company: "AppsTek Corp",
    role: "Software Engineer Intern",
    dateRange: "Sep 2023 – May 2024",
    location: "Hyderabad",
    bullets: [
      "Engineered distributed Spark/Kafka event-streaming pipelines processing 100K+ customer records, transforming data freshness from slow nightly batches to near-real-time hourly updates — enabling the business to act on customer signals same-day.",
      "Designed, trained, and deployed churn prediction models achieving AUC 0.81 and F1 0.74, layered directly on top of the streaming pipeline — identifying at-risk customer segments and feeding actionable insights into targeted retention campaigns.",
      "Built Power BI dashboards surfacing churn rates, retention KPIs, and at-risk cohort trends; adopted org-wide as the primary decision-making tool, eliminating a 2-day reporting lag and replacing ad-hoc analyst requests entirely.",
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
      "Built Aria, GenAI Workflow Platform, and Career Intelligence Agent independently alongside coursework",
      "Completed full-time internship at Appetit while enrolled full-time",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Vellore Institute of Technology",
    year: "2024",
    gpaLabel: "8.7/10 — First Class with Distinction",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Object-Oriented Programming",
      "Artificial Intelligence",
    ],
    activities: [
      "Microsoft Student Chapter — President: Led annual programme of workshops, speaker sessions, and technical events for a chapter of several hundred students; coordinated with Microsoft India",
      "VITOPIA Student Event Coordinator — One of five coordinators selected from the full student body for VIT's largest annual festival; managed logistics, vendors, and volunteers at scale",
      "VITAPP Technical Fest — Head of Relations & Promotions: Owned external communications, sponsor outreach, and promotion strategy",
    ],
  },
];


// ✏️ EDIT HERE — Projects
export const projects = [
  {
    title: "Aria — macOS Voice AI Agent",
    shortDescription: "Fully local macOS voice assistant with LLM intent routing, vision fallback, and native OS control.",
    fullDescription:
      "Built a fully local voice assistant from scratch: a hotkey-triggered STT pipeline captures speech, routes it through a Groq LLM intent classifier across 6 intent categories (knowledge, web search, system control, media, navigation, briefings), and dispatches structured JSON to isolated modular handlers — zero cloud dependency for core inference. Solved auth-walled and JS-heavy site access with a silent screenshot + Llama-4-Scout vision fallback; persistent Playwright browser profiles maintain authenticated Gmail and LinkedIn sessions across restarts. Engineered an on-demand morning briefing pipeline that fetches live weather, Apple Calendar events, and Gmail inbox in parallel, synthesizes a spoken summary, and reads it aloud — all triggered with a single hotkey. Implemented native macOS system control via AppleScript: volume adjustment, Do Not Disturb toggling, app switching, and Apple Music playback.",
    techStack: ["Python", "Groq", "Llama 4 Scout", "Playwright", "AppleScript", "Whisper STT", "LangChain"],
    techPercentages: [
      { name: "Python", pct: 40 },
      { name: "Groq / LLM", pct: 25 },
      { name: "Playwright", pct: 15 },
      { name: "AppleScript", pct: 12 },
      { name: "Whisper STT", pct: 8 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "Autonomous Career Intelligence Agent",
    shortDescription: "Multi-agent LangGraph pipeline that scrapes, analyzes, and tailors job applications end-to-end.",
    fullDescription:
      "Built a multi-agent LangGraph system using a planner–executor–critic architecture to fully automate the job search workflow: scrapes 30+ listings across multiple boards via Apify, decomposes each JD through three specialized agents to extract required skills, and ranks resume–JD alignment before any output is generated. Implemented a self-evaluation loop that scores each generated resume using cosine similarity, ATS keyword density, and skill precision — iterating automatically until a confidence threshold is met, with no human intervention between job description input and final output. Generates tailored resume variants and role-specific cover letters per listing, reducing the job application process from hours of manual tailoring to a single review-and-submit step — full pipeline runs end-to-end in under 60 seconds.",
    techStack: ["LangGraph", "LangChain", "Python", "FastAPI", "Apify", "Prompt Engineering"],
    techPercentages: [
      { name: "LangGraph", pct: 35 },
      { name: "Python", pct: 30 },
      { name: "FastAPI", pct: 15 },
      { name: "Apify", pct: 12 },
      { name: "LangChain", pct: 8 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "GenAI Workflow Automation Platform",
    shortDescription: "Visual workflow builder for LLM-powered automation with sub-200ms retrieval latency.",
    fullDescription:
      "Designed a visual workflow builder that abstracts LLM prompt orchestration, tool-calling, and vector retrieval into drag-and-drop configurable pipelines — eliminating the need for custom backend scripts for common tasks like summarization, classification, and data enrichment. Integrated Pinecone vector storage for contextual retrieval across workflow steps, maintaining sub-200ms retrieval latency under concurrent load through optimized embedding indexing and query batching. Built resilient long-running workflow execution with retry logic and exponential backoff to handle OpenAI rate limits and transient network failures gracefully — preventing silent drops in multi-step chains. Deployed containerized services on AWS ECS and Lambda, achieving cost-efficient auto-scaling without provisioned infrastructure; shipped a React dashboard surfacing per-step latency and token usage metrics for full pipeline observability.",
    techStack: ["React.js", "Node.js", "LangChain", "OpenAI API", "Pinecone", "AWS ECS/Lambda", "Docker"],
    techPercentages: [
      { name: "React.js", pct: 30 },
      { name: "Node.js", pct: 25 },
      { name: "LangChain", pct: 20 },
      { name: "AWS", pct: 15 },
      { name: "Docker", pct: 10 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "Multi-Modal AI Knowledge Assistant",
    shortDescription: "RAG system for PDFs, images, and tables with 28% improved retrieval accuracy.",
    fullDescription:
      "Built a multimodal RAG system capable of indexing and querying across PDFs, scanned images, and structured tables. Improved retrieval accuracy 28% over keyword baseline by implementing modality-specific chunking strategies — tables and paragraphs processed through separate pipelines to preserve semantic structure before indexing. Achieved sub-200ms vector retrieval latency on 1K+ indexed documents by benchmarking and tuning FAISS index configuration. Enforced retrieval-constrained generation with confidence thresholds and fallback logic, prioritizing factual reliability over response completeness. Deployed on AWS Lambda with a React frontend.",
    techStack: ["Python", "LangChain", "RAG", "FAISS", "Pinecone", "OpenCV", "Tesseract", "React.js", "AWS Lambda"],
    techPercentages: [
      { name: "Python", pct: 35 },
      { name: "LangChain", pct: 25 },
      { name: "FAISS", pct: 15 },
      { name: "OpenCV", pct: 15 },
      { name: "Tesseract", pct: 10 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "AI-Based Clinical Data System",
    shortDescription: "NGS pipeline for early-stage clinical prediction — 92% detection accuracy, patent-awarded.",
    fullDescription:
      "Built an AI-driven NGS (Next-Generation Sequencing) pipeline in Python and Java for early-stage clinical prediction, achieving 92% detection accuracy. Applied object-oriented design principles to build a scalable, modular diagnostic system capable of processing high-throughput genomic data. Contributed to a patent-awarded innovation in healthcare AI — recognized for practical clinical applicability and pipeline design.",
    techStack: ["Python", "Java", "Machine Learning", "Data Science", "OOP"],
    techPercentages: [
      { name: "Python", pct: 45 },
      { name: "Java", pct: 30 },
      { name: "ML Pipeline", pct: 15 },
      { name: "Data Science", pct: 10 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Face Mask Recognition System",
    shortDescription: "Real-time CV system for mask detection — built for public health enforcement.",
    fullDescription:
      "Built a real-time face mask detection system using transfer learning and optimized CNN architectures, designed for deployment in public spaces to enforce mask compliance. Analyzes live video feed frame-by-frame, classifying each detected face as masked or unmasked with low-latency inference. Integrated alert logic for authorities and access control systems. Designed to generalize beyond COVID-19 — adaptable to other PPE or safety compliance scenarios.",
    techStack: ["Python", "PyTorch", "OpenCV", "Computer Vision", "TensorFlow"],
    techPercentages: [
      { name: "Python", pct: 35 },
      { name: "PyTorch", pct: 30 },
      { name: "OpenCV", pct: 25 },
      { name: "TensorFlow", pct: 10 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Smart Street Light System",
    shortDescription: "IoT-enabled adaptive lighting with motion detection for urban energy savings.",
    fullDescription:
      "Designed and built an intelligent street lighting system that uses motion and vehicle detection to adaptively control brightness — turning lights on only when needed, reducing energy consumption in low-traffic periods. Integrated with Arduino-based sensor hardware and a lightweight ML model for vehicle classification. Architected for integration with broader smart city infrastructure including traffic management and parking systems. Demonstrated measurable energy savings in test deployments through adaptive dimming and predictive scheduling.",
    techStack: ["Arduino", "Python", "IoT", "Machine Learning", "TensorFlow", "Computer Vision"],
    techPercentages: [
      { name: "Python", pct: 40 },
      { name: "TensorFlow", pct: 30 },
      { name: "ML", pct: 20 },
      { name: "IoT", pct: 10 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Traffic Sign Recognition — CNN",
    shortDescription: "Deep learning CNN for real-time traffic sign classification, built for ADAS applications.",
    fullDescription:
      "Built a convolutional neural network for traffic sign recognition (TSR) — a core component of advanced driver-assistance systems (ADAS) and autonomous vehicles. The architecture uses multiple convolutional layers to progressively extract low- and high-level visual features, feeding into fully connected layers for final classification across a diverse set of traffic sign categories. Trained on a large labeled dataset of real-world sign images, achieving robust performance under varying lighting, angle, and occlusion conditions. Designed with inference speed as a constraint — suitable for real-time integration in vehicle perception pipelines.",
    techStack: ["Python", "PyTorch", "TensorFlow", "CNN", "Deep Learning", "OpenCV"],
    techPercentages: [
      { name: "Python", pct: 30 },
      { name: "PyTorch", pct: 30 },
      { name: "Deep Learning", pct: 25 },
      { name: "OpenCV", pct: 15 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    shortDescription: "OpenCV + ML system classifying hand gestures from live video by finger count.",
    fullDescription:
      "Built a real-time hand gesture recognition system using OpenCV and Python that classifies gestures from a live video stream by detecting and counting extended fingers. Implemented a computer vision pipeline covering hand segmentation, contour extraction, convexity defect analysis, and gesture classification — all running in real time without requiring a GPU. Designed as a foundation for touchless HCI applications: gesture-controlled interfaces, accessibility tools, and sign language interpretation systems.",
    techStack: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "NumPy"],
    techPercentages: [
      { name: "OpenCV", pct: 45 },
      { name: "Python", pct: 35 },
      { name: "NumPy", pct: 12 },
      { name: "ML", pct: 8 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Day/Night Image Detection",
    shortDescription: "Computer vision classifier distinguishing day vs. night conditions from raw images.",
    fullDescription:
      "Built a binary image classifier that determines lighting conditions (day vs. night) from raw input images using computer vision techniques. Implemented feature extraction based on luminance histograms, color channel analysis, and brightness distribution to distinguish conditions without relying on metadata. Designed for integration into downstream vision systems — such as adaptive exposure control, headlight automation, or surveillance pipelines — where lighting context affects processing logic.",
    techStack: ["Python", "OpenCV", "Computer Vision", "Scikit-learn", "NumPy"],
    techPercentages: [
      { name: "OpenCV", pct: 40 },
      { name: "Python", pct: 35 },
      { name: "Scikit-learn", pct: 15 },
      { name: "NumPy", pct: 10 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Enterprise Admin Portal",
    shortDescription: "Full-stack company admin system with ACID-compliant database and role-based access.",
    fullDescription:
      "Designed and built a full-stack admin portal for enterprise company management, built around strict ACID transaction compliance to guarantee data integrity across all operations. Implemented a relational database schema supporting complex business entities — users, roles, departments, audit logs — with proper foreign key constraints, cascading rules, and transaction boundaries. Built a role-based access control (RBAC) layer restricting portal views and actions by user privilege. Delivered a clean admin UI for CRUD operations, reporting, and configuration management.",
    techStack: ["Java", "SQL", "PostgreSQL", "ACID Transactions", "REST APIs", "OOP"],
    techPercentages: [
      { name: "Java", pct: 40 },
      { name: "PostgreSQL", pct: 30 },
      { name: "REST APIs", pct: 20 },
      { name: "SQL", pct: 10 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Course Management System",
    shortDescription: "Full-featured LMS with content delivery, assignments, quizzes, and analytics.",
    fullDescription:
      "Built a full-stack Course Management System (CMS/LMS) enabling instructors to create and organize course content, manage student enrollments, publish assignments and quizzes, and track learner progress through analytics dashboards. Students can access materials, submit work, receive grades, and monitor their own performance — all through a unified interface. Implemented secure authentication, role-based access for instructors vs. students, and a clean content hierarchy for multi-module courses. Designed with accessibility and scalability in mind.",
    techStack: ["Java", "SQL", "HTML", "CSS", "JavaScript", "OOP"],
    techPercentages: [
      { name: "Java", pct: 35 },
      { name: "SQL", pct: 25 },
      { name: "JavaScript", pct: 20 },
      { name: "HTML/CSS", pct: 20 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
  {
    title: "Pintos Operating System",
    shortDescription: "Extended Stanford Pintos OS kernel — threads, virtual memory, and user programs.",
    fullDescription:
      "Extended the Stanford Pintos educational OS kernel as part of graduate OS coursework, implementing core operating system subsystems from scratch in C. Built a thread scheduler supporting priority scheduling and priority donation to resolve priority inversion in synchronization primitives. Implemented virtual memory with demand paging, page fault handling, and a supplemental page table. Added user program support including argument passing, system call handling, and process management. Developed under tight constraints typical of real kernel development — no standard library, manual memory management, and hardware-level debugging.",
    techStack: ["C", "Operating Systems", "Kernel Development", "Virtual Memory", "Multithreading"],
    techPercentages: [
      { name: "C", pct: 55 },
      { name: "OS / Kernel", pct: 25 },
      { name: "Virtual Memory", pct: 12 },
      { name: "Threading", pct: 8 },
    ],
    githubLink: "#",
    liveLink: "#",
    featured: false,
  },
];