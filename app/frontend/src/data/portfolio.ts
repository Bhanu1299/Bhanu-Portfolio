// ✏️ EDIT HERE — Splash / Hero Content
export const personalInfo = {
  name: "Bhanu Teja Veeramachaneni",
  statusBadge: "MS Computer Science • Software & AI Engineer",
  tagline:
    "MS Computer Science, University at Buffalo. I build production backends, GenAI pipelines, and multi-agent systems — most recently a loyalty platform serving 50K+ transactions a day at 100% uptime through launch.",
  craftLine: "I design systems for production, not for demos.",

  // ✏️ EDIT HERE — About Me Summary (each string is one paragraph, HTML tags supported)
  bio: [
    `Software engineer with an MS in Computer Science from the <strong>University at Buffalo</strong> and a B.Tech from <strong>VIT-AP</strong>. I work across the stack, but the centre of gravity is backend systems and applied AI — the part where design decisions show up as latency, cost, and uptime.`,
    `At <strong>Appetit</strong> I owned a loyalty platform end to end: a <strong>20-table ACID schema</strong> and the reward APIs on top of it, serving <strong>50K+ transactions per day at 100% uptime</strong> through launch, synchronised in real time across iOS, Android, web, and an admin portal. I containerised every backend service so local development matched AWS ECS exactly, and cut deployments from 40 minutes to 10 with GitHub Actions. At <strong>AppsTek</strong> I replaced nightly batch reporting with <strong>Spark/Kafka streaming pipelines</strong> over 100K+ records, and trained churn models (AUC 0.81) that gave retention campaigns a usable head start.`,
    `Now I build <strong>LangGraph agents, RAG pipelines, and multi-agent systems</strong>: a planner–executor–critic pipeline that grades its own output before returning it, a workflow platform holding sub-200ms vector retrieval under concurrent load, a fully local voice agent that keeps inference on-device. What I care about is the unglamorous half — latency-versus-cost tradeoffs, retry and backoff behaviour, and knowing what a system costs per call before it ships.`,
  ],

  // Contact & Social
  email: "bteja0519@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhanuteja1299/",
  github: "https://github.com/Bhanu1299",
  location: "Buffalo, NY • Open to Remote / Relocation",
  resumePath: `${import.meta.env.BASE_URL}docs/Bhanu_Teja_Resume.pdf`,
  footerCopyright: "© 2026 Bhanu Teja — written, designed, and built by hand.",
};


// ✏️ EDIT HERE — Marquee banner phrases (after hero, before projects)
export const marquees = {
  afterHero: [
    "Software Engineering",
    "GenAI Pipelines",
    "Full-Stack Development",
    "Multi-Agent Systems",
    "Machine Learning",
    "Production Backends",
    "Cloud Systems",
    "RAG & Retrieval",
    "Distributed Systems",
  ],
  beforeProjects: [
    "Selected Works",
    "Production Systems",
    "Multi-Agent Pipelines",
    "Backend Architecture",
    "RAG & Retrieval",
    "Applied Machine Learning",
    "Cloud Infrastructure",
    "Built to Ship",
  ],
};


// ✏️ EDIT HERE — Section headings & microcopy (titles, blurbs, small cards)
export const sectionCopy = {
  about: {
    label: "About Me",
    title: "Background & Focus",
  },
  experience: {
    label: "Experience",
    title: "Work Experience",
    blurb:
      "Two production teams, delivery owned end to end — schema design through deployment. Click any card to expand.",
  },
  education: {
    label: "Education",
    title: "Education",
    blurb:
      "VIT-AP through the University at Buffalo. Click a card for coursework and detail.",
  },
  projects: {
    label: "Portfolio",
    title: "My Projects",
    blurb:
      "Systems built against real constraints, with the architecture and tradeoffs written down. Tap any card for detail.",
  },
  contact: {
    label: "Contact",
    title: "Let's Work Together",
    blurb:
      "Open to software and AI/ML engineering roles. If you're building something substantial, I'd like to hear about it.",
    resumeCardTitle: "Prefer the formal version?",
    resumeCardBody: "The one-page edition, for your files.",
  },
};


// ✏️ EDIT HERE — About Stats
export const stats = [
  { value: "50K+", label: "Daily Transactions" },
  { value: "100%", label: "Launch Uptime" },
  { value: "100K+", label: "Records Streamed" },
  { value: "<200ms", label: "Vector Retrieval" },
  { value: "0.81", label: "Churn Model AUC" },
  { value: "4×", label: "Faster Deploys" },
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
      { name: "HTML", pct: 88 },
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
      { name: "Scikit-learn", pct: 84 },
      { name: "FAISS", pct: 76 },
      { name: "Predictive Analytics", pct: 79 },
      { name: "Computer Vision", pct: 68 },
      { name: "PyTorch", pct: 76 },
      { name: "Pinecone", pct: 80 },
      { name: "OpenCV", pct: 66 },
      { name: "TensorFlow", pct: 62 },
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
      { name: "Git", pct: 88 },
      { name: "GitHub", pct: 86 },
      { name: "OOP", pct: 82 },
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
      "Designed the 20-table ACID schema behind the loyalty program and the reward APIs on top of it — 50K+ transactions per day at 100% uptime through launch, with zero production incidents.",
      "Owned the program end to end across backend APIs, iOS, Android, web, and a rebuilt admin portal, with reward rules synchronising in real time across every surface.",
      "Cut deployment time from 40 minutes to 10 by replacing a manual checklist with GitHub Actions pipelines — one workflow covering every surface.",
      "Containerised all backend services with Docker so local environments matched AWS ECS production exactly, eliminating environment drift.",
      "Delivered two release cycles on schedule with no regressions, contributing to a 20% lift in user engagement.",
    ],
  },
  {
    company: "AppsTek Corp",
    role: "Software Engineer Intern",
    dateRange: "Sep 2023 – May 2024",
    location: "Hyderabad",
    bullets: [
      "Replaced slow nightly batch processing with Spark/Kafka streaming pipelines over 100K+ customer records, moving the business from next-day to same-day signals.",
      "Trained churn models on the streaming data (AUC 0.81, F1 0.74), flagging at-risk customers early enough for retention campaigns to reach them.",
      "Built the Power BI dashboards that became the org's primary decision tool, removing a 2-day reporting lag and the ad-hoc analyst queue with it.",
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
      "Built Aria, the GenAI Workflow Platform, and the Career Intelligence Agent alongside full coursework",
      "Interned at Appetit while enrolled full-time, shipping two release cycles",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "VIT-AP University, Amaravati",
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
      "Microsoft Student Chapter — President: ran a year of workshops, speaker sessions, and technical events for several hundred students, working directly with Microsoft India",
      "VITOPIA — one of five student coordinators picked from the whole student body for VIT-AP's largest annual festival; logistics, vendors, and volunteers, at scale",
      "VITAPP Technical Fest — Head of Relations & Promotions: sponsor outreach and the promotion strategy",
    ],
  },
];


// ✏️ EDIT HERE — Projects
export const projects = [
  {
    title: "Aria — macOS Voice AI Agent",
    shortDescription: "Local-first macOS voice agent — on-device inference, six-way intent routing, no cloud round-trip.",
    fullDescription:
      "A fully local voice agent for macOS, built so that core inference never leaves the machine. A local STT pipeline captures speech, a Groq-backed classifier routes it across six intent categories (knowledge, web search, system control, media, navigation, briefings), and structured JSON dispatches to isolated modular handlers. Core inference never leaves the machine. When a site hides behind logins or heavy JavaScript, Aria quietly screenshots it and reads the pixels with Llama-4-Scout vision — and persistent Playwright profiles keep Gmail and LinkedIn sessions alive across restarts. A single hotkey fetches weather, calendar, and inbox in parallel for a morning briefing. System control — volume, Do Not Disturb, app switching, Apple Music — runs through native AppleScript.",
    techStack: ["Python", "Groq", "Llama 4 Scout", "Playwright", "AppleScript", "Whisper STT", "LangChain"],
    techPercentages: [
      { name: "Python", pct: 40 },
      { name: "Groq / LLM", pct: 25 },
      { name: "Playwright", pct: 15 },
      { name: "AppleScript", pct: 12 },
      { name: "Whisper STT", pct: 8 },
    ],
    githubLink: "#",
    featured: true,
  },
  {
    title: "Autonomous Career Intelligence Agent",
    shortDescription: "Planner–executor–critic LangGraph pipeline that grades its own output before returning it.",
    fullDescription:
      "A planner–executor–critic LangGraph system scrapes 30+ listings across boards via Apify, decomposes each job description through three specialized agents, and ranks resume–JD alignment before generating a word. Then it grades its own output — cosine similarity, ATS keyword density, skill precision — and iterates until it clears a confidence threshold, with no human in the loop between job description and final draft. What used to be hours of manual tailoring per listing is now a single review-and-submit step; the full pipeline runs end-to-end in under 60 seconds.",
    techStack: ["LangGraph", "LangChain", "Python", "FastAPI", "Apify", "Prompt Engineering"],
    techPercentages: [
      { name: "LangGraph", pct: 35 },
      { name: "Python", pct: 30 },
      { name: "FastAPI", pct: 15 },
      { name: "Apify", pct: 12 },
      { name: "LangChain", pct: 8 },
    ],
    githubLink: "#",
    featured: true,
  },
  {
    title: "GenAI Workflow Automation Platform",
    shortDescription: "Visual pipeline builder for LLM orchestration — sub-200ms vector retrieval under concurrent load.",
    fullDescription:
      "A visual workflow builder that replaces per-task custom backend scripts, turning prompt orchestration, tool-calling, and vector retrieval into drag-and-drop pipelines. Pinecone handles contextual retrieval across steps and stays under 200ms even with concurrent load, thanks to tuned embedding indexing and query batching. Long-running workflows survive OpenAI rate limits and flaky networks with retries and exponential backoff — no silent drops mid-chain. It runs containerized on AWS ECS and Lambda, scaling without provisioned infrastructure, and a React dashboard shows per-step latency and token spend — because the difference between a demo and a product is whether you can see what it costs.",
    techStack: ["React.js", "Node.js", "LangChain", "OpenAI API", "Pinecone", "AWS ECS/Lambda", "Docker"],
    techPercentages: [
      { name: "React.js", pct: 30 },
      { name: "Node.js", pct: 25 },
      { name: "LangChain", pct: 20 },
      { name: "AWS", pct: 15 },
      { name: "Docker", pct: 10 },
    ],
    githubLink: "#",
    featured: true,
  },
  {
    title: "Multi-Modal AI Knowledge Assistant",
    shortDescription: "Ask one question across PDFs, scans, and tables — instead of digging through them by hand.",
    fullDescription:
      "Built to kill a specific chore: digging through folders of mixed-format documents — PDFs, scanned images, tables — hunting for one answer. This RAG system indexes all of it and answers questions across it. The 28% retrieval-accuracy gain over keyword baseline came from respecting structure: tables and paragraphs go through separate modality-specific chunking pipelines so their meaning survives indexing. FAISS, benchmarked and tuned, keeps vector retrieval under 200ms across 1K+ documents. And when confidence runs low, it says less instead of making things up — retrieval-constrained generation with thresholds and fallbacks, because a careful answer beats a complete-sounding one. Runs on AWS Lambda behind a React frontend.",
    techStack: ["Python", "LangChain", "RAG", "FAISS", "Pinecone", "OpenCV", "Tesseract", "React.js", "AWS Lambda"],
    techPercentages: [
      { name: "Python", pct: 35 },
      { name: "LangChain", pct: 25 },
      { name: "FAISS", pct: 15 },
      { name: "OpenCV", pct: 15 },
      { name: "Tesseract", pct: 10 },
    ],
    githubLink: "#",
    featured: true,
  },
  {
    title: "AI-Based Clinical Data System",
    shortDescription: "Patent-awarded healthcare AI — an NGS pipeline for early-stage clinical prediction at 92% accuracy.",
    fullDescription:
      "An AI-driven NGS (Next-Generation Sequencing) pipeline in Python and Java for early-stage clinical prediction, reaching 92% detection accuracy on high-throughput genomic data. I built it modular and object-oriented so the diagnostic system could grow past its first use case. The work contributed to a patent-awarded innovation in healthcare AI, recognized for practical clinical applicability.",
    techStack: ["Python", "Java", "Machine Learning", "Data Science", "OOP"],
    techPercentages: [
      { name: "Python", pct: 45 },
      { name: "Java", pct: 30 },
      { name: "ML Pipeline", pct: 15 },
      { name: "Data Science", pct: 10 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Face Mask Recognition System",
    shortDescription: "Real-time computer vision that spots unmasked faces in a live feed — built when it mattered most.",
    fullDescription:
      "A real-time system that watches a live video feed and flags unmasked faces — built for public spaces when that question mattered most. Transfer learning over optimized CNN architectures classifies every detected face, frame by frame, with low-latency inference, and alert hooks feed authorities and access-control systems. The design generalizes past COVID: any PPE or safety-compliance scenario works the same way.",
    techStack: ["Python", "PyTorch", "OpenCV", "Computer Vision", "TensorFlow"],
    techPercentages: [
      { name: "Python", pct: 35 },
      { name: "PyTorch", pct: 30 },
      { name: "OpenCV", pct: 25 },
      { name: "TensorFlow", pct: 10 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Smart Street Light System",
    shortDescription: "Streetlights that pay attention — motion-aware brightness for real urban energy savings.",
    fullDescription:
      "Streetlights that pay attention: motion and vehicle detection dim the lights when nobody's around and bring them up when someone is. Arduino sensor hardware feeds a lightweight ML model for vehicle classification, and the architecture plugs into wider smart-city systems — traffic management, parking. Test deployments showed measurable energy savings from adaptive dimming and predictive scheduling.",
    techStack: ["Arduino", "Python", "IoT", "Machine Learning", "TensorFlow", "Computer Vision"],
    techPercentages: [
      { name: "Python", pct: 40 },
      { name: "TensorFlow", pct: 30 },
      { name: "ML", pct: 20 },
      { name: "IoT", pct: 10 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Traffic Sign Recognition — CNN",
    shortDescription: "A CNN that reads traffic signs in real time — the perception piece of driver assistance.",
    fullDescription:
      "A convolutional neural network that reads traffic signs in real time — the perception piece of advanced driver-assistance systems. Stacked convolutional layers pull visual features from low-level edges up to sign-level shapes, feeding fully connected layers that classify across a diverse set of sign categories. Trained on real-world images, it holds up under bad lighting, odd angles, and partial occlusion. Inference speed was a hard constraint throughout — a sign recognized late is a sign missed.",
    techStack: ["Python", "PyTorch", "TensorFlow", "CNN", "Deep Learning", "OpenCV"],
    techPercentages: [
      { name: "Python", pct: 30 },
      { name: "PyTorch", pct: 30 },
      { name: "Deep Learning", pct: 25 },
      { name: "OpenCV", pct: 15 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    shortDescription: "Counts your fingers from live video and turns gestures into commands — no GPU required.",
    fullDescription:
      "Counts your fingers from a live video stream and turns gestures into commands — no GPU required. The OpenCV pipeline runs hand segmentation, contour extraction, convexity-defect analysis, and classification, all in real time. Built as a foundation for touchless interfaces: gesture control, accessibility tools, sign-language interpretation.",
    techStack: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "NumPy"],
    techPercentages: [
      { name: "OpenCV", pct: 45 },
      { name: "Python", pct: 35 },
      { name: "NumPy", pct: 12 },
      { name: "ML", pct: 8 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Day/Night Image Detection",
    shortDescription: "A small classifier with one honest job: tell day from night using nothing but the pixels.",
    fullDescription:
      "A small classifier with one honest job: tell day from night using nothing but the pixels. Luminance histograms, color-channel analysis, and brightness distribution make the call — no metadata shortcuts. Made to slot into bigger vision systems where lighting context changes the processing logic: adaptive exposure, headlight automation, surveillance pipelines.",
    techStack: ["Python", "OpenCV", "Computer Vision", "Scikit-learn", "NumPy"],
    techPercentages: [
      { name: "OpenCV", pct: 40 },
      { name: "Python", pct: 35 },
      { name: "Scikit-learn", pct: 15 },
      { name: "NumPy", pct: 10 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Enterprise Admin Portal",
    shortDescription: "A full-stack admin system built on one conviction: data integrity is non-negotiable.",
    fullDescription:
      "A full-stack admin portal built on one conviction: data integrity is non-negotiable. Strict ACID transaction boundaries guard every operation across a relational schema of users, roles, departments, and audit logs — proper foreign keys, cascading rules, no shortcuts. A role-based access control layer decides who sees and does what, and a clean admin UI handles CRUD, reporting, and configuration on top.",
    techStack: ["Java", "SQL", "PostgreSQL", "ACID Transactions", "REST APIs", "OOP"],
    techPercentages: [
      { name: "Java", pct: 40 },
      { name: "PostgreSQL", pct: 30 },
      { name: "REST APIs", pct: 20 },
      { name: "SQL", pct: 10 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Course Management System",
    shortDescription: "A full LMS — courses, assignments, quizzes, and analytics in one place for both sides of the classroom.",
    fullDescription:
      "A full course management system serving both sides of the classroom: instructors build courses, manage enrollments, publish assignments and quizzes, and watch learner progress on analytics dashboards; students access materials, submit work, get grades, and track their own performance — all in one interface. Secure authentication, clean instructor/student role separation, and a content hierarchy that keeps multi-module courses organized.",
    techStack: ["Java", "SQL", "HTML", "CSS", "JavaScript", "OOP"],
    techPercentages: [
      { name: "Java", pct: 35 },
      { name: "SQL", pct: 25 },
      { name: "JavaScript", pct: 20 },
      { name: "HTML/CSS", pct: 20 },
    ],
    githubLink: "#",
    featured: false,
  },
  {
    title: "Pintos Operating System",
    shortDescription: "Graduate OS coursework, the hard way — extending the Pintos kernel in C with no safety net.",
    fullDescription:
      "Graduate OS coursework, the hard way: extending Stanford's Pintos kernel in C — no standard library, manual memory management, hardware-level debugging. I built the thread scheduler with priority scheduling and priority donation to defuse priority inversion in the synchronization primitives, implemented virtual memory with demand paging, page-fault handling, and a supplemental page table, and added user program support: argument passing, system calls, process management. Kernel work teaches you what every abstraction above it actually costs.",
    techStack: ["C", "Operating Systems", "Kernel Development", "Virtual Memory", "Multithreading"],
    techPercentages: [
      { name: "C", pct: 55 },
      { name: "OS / Kernel", pct: 25 },
      { name: "Virtual Memory", pct: 12 },
      { name: "Threading", pct: 8 },
    ],
    githubLink: "#",
    featured: false,
  },
];