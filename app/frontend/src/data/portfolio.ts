// ✏️ EDIT HERE — Splash / Hero Content
export const personalInfo = {
  name: "Bhanu Teja Veeramachaneni",
  statusBadge: "MS Computer Science • Software & AI Engineer",
  tagline:
    "A kid in Eluru once wondered how a machine could understand us — any language, any command. The question never left. These days it looks like production backends, GenAI pipelines, and agents that make tedious work disappear.",
  craftLine: "I automate the tedious until it disappears.",

  // ✏️ EDIT HERE — About Me Summary (each string is one paragraph, HTML tags supported)
  bio: [
    `It started in <strong>Eluru</strong> with a question: how does a machine understand us — any language, any command? That question carried me through <strong>VIT-AP in Amaravati</strong>, where I built my first real systems; to Hyderabad, where my code first met production and real stakes; and to the <strong>University at Buffalo</strong>, where the leap went global. I still haven't stopped answering it.`,
    `Along the way I figured out what I actually love: making tedious work disappear. At <strong>Appetit</strong> I owned a loyalty program end to end — a 20-table schema and APIs holding 50K+ daily transactions at 100% uptime — shipped through sleepless nights and unknowns. At <strong>AppsTek</strong> I turned nightly batch reports into Spark/Kafka streams over 100K+ records and trained churn models (AUC 0.81) that gave retention campaigns a real head start — learning mid-flight, finishing anyway.`,
    `These days the obsession looks like <strong>LangGraph agents, RAG pipelines, and multi-agent systems</strong> built for real friction, not résumé optics: Aria, a fully local voice agent that runs my Mac; a career agent born mid-job-search; a workflow platform that kills pipeline busywork; a multimodal assistant that ended document-digging. I care about production-mindedness and latency-versus-cost tradeoffs — systems that hold up. Off the clock: basketball, psychological horror films, and travel with no plan.`,
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
    "Automation That Sticks",
  ],
  beforeProjects: [
    "Selected Works",
    "Built to Ship",
    "Crafted with Care",
    "Born from Real Friction",
    "Tedious Work, Made Extinct",
    "Thirteen Chapters",
    "First Edition",
    "Read Cover to Cover",
  ],
};


// ✏️ EDIT HERE — Section headings & microcopy (titles, blurbs, small cards)
export const sectionCopy = {
  about: {
    label: "About Me",
    title: "Turning Questions Into Systems",
  },
  experience: {
    label: "Experience",
    title: "Work Experience",
    blurb:
      "Two teams trusted me with production. Both times: unknowns going in, shipped anyway. Click any card to expand.",
  },
  education: {
    label: "Education",
    title: "Education",
    blurb:
      "Eluru to Amaravati to Buffalo — the classroom half of the story. Click a card to see details.",
  },
  projects: {
    label: "Portfolio",
    title: "My Projects",
    blurb:
      "Every one of these started as something tedious I refused to do twice. Tap any card for the full story.",
  },
  contact: {
    label: "Contact",
    title: "Let's Work Together",
    blurb:
      "Open to strong engineering roles — GenAI and AI/ML leaning. If you're building something real, I'd like to hear about it.",
    resumeCardTitle: "Prefer the formal version?",
    resumeCardBody: "Same facts, fewer stories — the one-page edition for your files.",
  },
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
      "I designed the 20-table schema behind the loyalty program — full ACID guarantees — and the reward APIs on top of it. 50K+ transactions a day, 100% uptime through launch, zero incident calls.",
      "The program was mine end to end: backend APIs, iOS, Android, web, and a rebuilt admin portal — with reward rules syncing in real time across every surface at once.",
      "Deployments took 40 minutes and a checklist. I got them to 10 with GitHub Actions pipelines — one workflow, every surface, no manual steps.",
      "I put every backend service in Docker so local development matched AWS ECS production exactly — 'works on my machine' stopped being a sentence anyone said.",
      "Two release cycles, on time, no regressions — and a 20% lift in user engagement to show for it.",
    ],
  },
  {
    company: "AppsTek Corp",
    role: "Software Engineer Intern",
    dateRange: "Sep 2023 – May 2024",
    location: "Hyderabad",
    bullets: [
      "Customer data arrived as slow nightly batches. I rebuilt the flow as Spark/Kafka streaming pipelines over 100K+ records — and the business went from acting on yesterday's signals to acting the same day.",
      "On top of that stream I trained churn models (AUC 0.81, F1 0.74) that flagged at-risk customers early enough for retention campaigns to actually reach them.",
      "The Power BI dashboards I built became the org's primary decision tool — a 2-day reporting lag gone, and the ad-hoc analyst requests gone with it.",
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
      "Built Aria, the GenAI Workflow Platform, and the Career Intelligence Agent on nights and weekends, alongside full coursework",
      "Interned at Appetit while enrolled full-time — both got shipped",
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
    shortDescription: "A second brain for my Mac — hotkey, speak, done. Fully local, no cloud, no waiting.",
    fullDescription:
      "Aria exists because I wanted a second brain that just handles things — hotkey, speak, done. It listens, decides what I meant, and does it: a local STT pipeline captures speech, a Groq-backed classifier routes it across six intent categories (knowledge, web search, system control, media, navigation, briefings), and structured JSON dispatches to isolated modular handlers. Core inference never leaves the machine. When a site hides behind logins or heavy JavaScript, Aria quietly screenshots it and reads the pixels with Llama-4-Scout vision — and persistent Playwright profiles keep Gmail and LinkedIn sessions alive across restarts. One hotkey in the morning fetches weather, calendar, and inbox in parallel and reads me the day. Volume, Do Not Disturb, app switching, Apple Music — all native AppleScript. The name fits: responsive, present, quietly capable.",
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
    shortDescription: "Born mid-job-search: a multi-agent pipeline that tailors every application, so I could save my judgment for interviews.",
    fullDescription:
      "This one was born mid-job-search, decision fatigue and all. Too many listings, not enough bandwidth to tailor each application honestly — so instead of trusting shaky judgment under pressure, I built the agent. A planner–executor–critic LangGraph system scrapes 30+ listings across boards via Apify, decomposes each job description through three specialized agents, and ranks resume–JD alignment before generating a word. Then it grades its own output — cosine similarity, ATS keyword density, skill precision — and iterates until it clears a confidence threshold, with no human in the loop between job description and final draft. What used to be hours of manual tailoring per listing is now a single review-and-submit step; the full pipeline runs end-to-end in under 60 seconds.",
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
    shortDescription: "A drag-and-drop builder that kills LLM pipeline busywork — sub-200ms retrieval, even under load.",
    fullDescription:
      "Same instinct as everything I build: find the repeated manual step and remove it. Here, the step was writing yet another custom backend script for every LLM task — summarize this, classify that, enrich the other. So I built a visual workflow builder that turns prompt orchestration, tool-calling, and vector retrieval into drag-and-drop pipelines. Pinecone handles contextual retrieval across steps and stays under 200ms even with concurrent load, thanks to tuned embedding indexing and query batching. Long-running workflows survive OpenAI rate limits and flaky networks with retries and exponential backoff — no silent drops mid-chain. It runs containerized on AWS ECS and Lambda, scaling without provisioned infrastructure, and a React dashboard shows per-step latency and token spend — because the difference between a demo and a product is whether you can see what it costs.",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
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
    liveLink: "#",
    featured: false,
  },
];