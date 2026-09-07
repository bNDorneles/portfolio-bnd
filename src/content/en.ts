import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Bernardo Dorneles — Software Engineering",
    description:
      "Software Engineering student and full-stack developer building systems, APIs, web apps, and AI-powered solutions.",
  },
  nav: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    brand: "BND",
  },
  hero: {
    greeting: "Hi, I'm",
    headline: "Software, systems, and a few ideas that started as code.",
    name: "BERNARDO",
    lastNameBefore: "DORN",
    lastNameAccent: "E",
    lastNameAfter: "LES",
    role: "Software Engineering Student · Full Stack Developer",
    focus: "Backend · AI · Systems",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaProjects: "View projects",
  },
  bento: {
    featuredLabel: "Featured",
    featuredTitle: "Phishing LLM",
    featuredMeta: "Paper · SBseg 2026 · SBC",
    githubTitle: "GitHub",
    githubMeta: "10+ public repositories",
    pythonTitle: "Python",
    engineeringTitle: "Engineering",
    engineeringMeta: "UNIPAMPA Alegrete",
    buildingTitle: "Currently building…",
    buildingMeta: "Systems, APIs, and LLM experiments",
  },
  about: {
    eyebrow: "About",
    title: "Who is Bernardo?",
    body: [
      "From São Borja/RS. IT Technician from Instituto Federal Farroupilha (2021–2023) and Software Engineering student at UNIPAMPA — Alegrete campus.",
      "In 2024 I served in the Brazilian Army in the IT sector, maintaining servers, computers, and networks. In 2026 I worked as a full-stack developer at eSaaS on ERP systems and enterprise software.",
      "I build APIs, web applications, and AI solutions. This site grows with the career.",
    ],
  },
  timeline: {
    eyebrow: "Timeline",
    title: "Evolution",
    years: [
      {
        year: "2021–2023",
        events: ["IT Technician — IF Farroupilha (São Borja)"],
      },
      {
        year: "2024",
        events: [
          "Brazilian Army — IT sector (servers, PCs, and networks)",
        ],
      },
      {
        year: "2025",
        events: [
          "Started Software Engineering at UNIPAMPA (Alegrete campus)",
          "First academic projects and fundamentals",
        ],
      },
      {
        year: "2026",
        events: [
          "Full-stack developer at eSaaS",
          "AI and LLM projects",
          "Paper published at SBseg 2026 (SBC)",
          "This portfolio",
        ],
      },
      {
        year: "2027",
        events: [
          "Go deeper into backend, architecture, and software engineering in practice",
          "Keep building applied AI and real systems",
          "New professional challenges and projects that matter",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience",
    role: "Full-stack developer",
    company: "eSaaS",
    summary:
      "Worked in 2026 in Alegrete/RS on white-label ERP solutions and enterprise software — full-stack development, integrations, and production bug fixes.",
    topics: [
      "ERP systems",
      "APIs",
      ".NET",
      "Angular",
      "Integrations",
      "Bug investigation and fixes",
    ],
    expand: "View full experience",
    collapse: "Collapse",
  },
  projects: {
    eyebrow: "Work",
    title: "Projects",
    featured: "Featured",
    others: "Other projects",
    collaborative: "Collaborative team contribution",
    viewCase: "View case study",
    items: [
      {
        slug: "phishing-llm",
        title: "Phishing LLM",
        subtitle: "SBseg 2026 · Published paper",
        tags: ["AI", "Python", "LLMs", "Research", "Cybersecurity"],
        summary:
          "LLMs for phishing email detection: a controlled comparison with TF-IDF baselines and auditable red flags — paper at SBseg 2026 (SBC).",
        featured: true,
        github: "https://github.com/bNDorneles/phishing-llm-sbseg2026",
        article: {
          url: "https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/44508",
        },
        caseStudy: {
          context:
            "Undergraduate research with Silvio Quincozes (UNIPAMPA), published in the Extended Proceedings of SBseg 2026. We evaluate LLMs for phishing email detection under a reproducible, security-oriented protocol.",
          problem:
            "A controlled comparison between recent LLMs and classic TF-IDF baselines on the same evaluation set was missing — with reproducibility and auditable justifications, not only raw metrics.",
          solution:
            "A protocol with calibration (10 messages) and evaluation (90 messages), four LLMs under the same conditions, TF-IDF baselines without evaluation-set leakage, and analysis of red flags / structured justifications.",
          architecture:
            "Python experimental pipeline: dataset prep → standardized prompts → model calls → response collection → metrics (precision, recall, F1) → TF-IDF comparison and qualitative justification analysis.",
          technologies:
            "Python · LLMs (Qwen3 32B, Llama 3.3 70B and others) · TF-IDF · APIs · experimental analysis · cybersecurity",
          results:
            "Among LLMs, Qwen3 32B achieved the best performance and perfect phishing recall; Llama 3.3 70B had the most balanced profile. TF-IDF baselines reached higher raw F1 on this slice. The contribution is analyzing when LLMs add operational value via auditable red flags — not claiming overall superiority.",
          learned:
            "Experimental protocol and baselines matter as much as the model. In security, explainability (red flags) can outweigh a point F1 without justification.",
        },
      },
      {
        slug: "bolao-copa",
        title: "World Cup Pool 2026",
        subtitle: "Collaborative full-stack",
        tags: ["React", "Tailwind", "Node", "Supabase"],
        summary:
          "Web app for World Cup predictions and tracking — built as a team.",
        featured: true,
        collaborative: true,
        github: "https://github.com/bNDorneles",
        caseStudy: {
          context:
            "Collaborative project to organize World Cup 2026 predictions with a modern web experience.",
          problem:
            "Centralize predictions, scoring, and match tracking for a group — without manual spreadsheets.",
          solution:
            "React app with Tailwind, Node backend, and Supabase for auth, data, and scoring rules.",
          architecture:
            "React frontend → Node API → Supabase (auth + database). Scoreboard, predictions, and ranking components.",
          technologies: "React · Tailwind CSS · Node.js · Supabase",
          results:
            "A usable product for a real group, with prediction flow and ranking — plus hands-on teamwork experience.",
          learned:
            "Collaboration forces clear ownership, PRs, and communication. Individual code only scales when the team is aligned.",
        },
      },
      {
        slug: "site-paroquia",
        title: "Parish Website",
        subtitle: "Institutional web presence",
        tags: ["Web", "Frontend", "Institutional"],
        summary:
          "Institutional website for a parish — clear information, content structure, and a real delivery for the community.",
        featured: true,
        caseStudy: {
          context:
            "Digital presence project for a religious institution: the community needed a simple web channel for schedules, notices, and essential information.",
          problem:
            "Communicate masses, events, and pastoral content without relying only on social media or posters — with a stable, easy-to-update web base.",
          solution:
            "Institutional site focused on clarity: information pages, organized sections, and a responsive experience for mobile visitors.",
          architecture:
            "Static/institutional page structure with content hierarchy (home, schedules, notices, contact) and a layout built for fast reading.",
          technologies: "HTML/CSS · JavaScript · responsive design · web publishing",
          results:
            "A usable official channel for the community — software serving a real context, not just a class exercise.",
          learned:
            "Institutional projects demand empathy with the audience and priority on content. Polish without useful information doesn’t solve the parish’s problem.",
        },
      },
      {
        slug: "agenti-ai",
        title: "Agenti-AI",
        subtitle: "Agents & AI",
        tags: ["Python", "AI", "Agents"],
        summary:
          "Experiments with AI agents — orchestration, tools, and decision loops.",
        featured: true,
        github: "https://github.com/bNDorneles/Agenti-AI",
        caseStudy: {
          context:
            "Hands-on exploration of language agents: how an LLM can plan, use tools, and execute tasks in steps.",
          problem:
            "LLMs alone are limited; agents need structure to act with context, memory, and external tools.",
          solution:
            "Python prototype that organizes prompts, tools, and a reason/act loop for concrete tasks.",
          architecture:
            "Agent loop: observation → planning → tool call → state update → response.",
          technologies: "Python · LLMs · agents · APIs",
          results:
            "An experimental base for understanding agent limits and patterns — useful for future applied AI work.",
          learned:
            "Agents fail in interesting ways. Loop observability and clear tool boundaries matter as much as the prompt.",
        },
      },
      {
        slug: "sistema-pedidos",
        title: "HTTP Orders System",
        subtitle: "Backend & APIs",
        tags: ["APIs", "Backend", "HTTP"],
        summary:
          "Orders system focused on REST APIs, HTTP contracts, and backend architecture.",
        featured: true,
        github: "https://github.com/bNDorneles/sistema-pedidos-http",
        caseStudy: {
          context:
            "Project aimed at modeling an order flow with clear HTTP communication and well-defined responsibilities.",
          problem:
            "How to structure endpoints, resources, and order flows coherently without mixing layers.",
          solution:
            "REST API with order resources, statuses, and well-defined HTTP operations — focus on contract and behavior.",
          architecture:
            "HTTP layer → domain services → persistence. Separation between transport and business rules.",
          technologies: "HTTP · REST · Backend · architecture",
          results:
            "A solid base for understanding real APIs: verbs, status codes, resources, and model evolution.",
          learned:
            "A good API is a stable contract. Naming resources and thinking about order states avoids rework later.",
        },
      },
      {
        slug: "conselho-tutelar",
        title: "Conselho Tutelar",
        subtitle: "Practical web system",
        tags: ["Web", "Systems"],
        summary:
          "Web system with practical application — organizing real workflows and demands.",
        featured: true,
        github: "https://github.com/bNDorneles/conselho-tutelar",
        caseStudy: {
          context:
            "Web system project oriented to an institutional context: organizing information and service workflows.",
          problem:
            "Digitize and structure processes that previously relied on manual or fragmented controls.",
          solution:
            "Web application with registration, lookup, and tracking flows aligned to the problem domain.",
          architecture:
            "Interface, business rules, and data layers — prioritizing operational clarity for users.",
          technologies: "Web · systems · practical application",
          results:
            "Delivery with concrete impact: software serving a real process, not just an exercise.",
          learned:
            "Domain requirements matter. Listening to the problem before designing screens avoids building the wrong system.",
        },
      },
    ],
    otherItems: [],
  },
  stack: {
    eyebrow: "Stack",
    title: "Technologies",
    groups: [
      {
        label: "Languages",
        items: ["Python", "Java", "C#", "JavaScript", "TypeScript"],
      },
      {
        label: "Backend",
        items: [".NET", "Node.js", "FastAPI", "REST APIs"],
      },
      {
        label: "Frontend",
        items: ["React", "Tailwind CSS", "Angular"],
      },
      {
        label: "Data",
        items: ["PostgreSQL", "MongoDB", "SQLite"],
      },
      {
        label: "Tools",
        items: ["Git", "GitHub", "Docker"],
      },
      {
        label: "AI",
        items: ["LLMs", "OpenAI", "Gemini", "Groq", "DeepSeek"],
      },
    ],
  },
  howIWork: {
    eyebrow: "Process",
    title: "How I work",
    steps: [
      {
        number: "01",
        title: "Investigate",
        body: "I understand the problem before writing code.",
      },
      {
        number: "02",
        title: "Design",
        body: "I think about architecture and responsibilities.",
      },
      {
        number: "03",
        title: "Build",
        body: "I turn the solution into code.",
      },
      {
        number: "04",
        title: "Test",
        body: "I validate behavior and edge cases.",
      },
      {
        number: "05",
        title: "Improve",
        body: "I refactor and evolve the solution.",
      },
    ],
  },
  terminal: {
    eyebrow: "Playground",
    title: "Terminal",
    hint: "Try: whoami · ./about · ls projects · cd phishing-llm",
    prompt: "bernardo@portfolio:~$",
    welcome: [
      "Portfolio terminal. Type help to see commands.",
      "This site evolves with the career.",
    ],
  },
  github: {
    eyebrow: "GitHub",
    title: "Code in public",
    body: "10+ public repositories · Projects · Experiments · University",
    cta: "Explore my GitHub",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's connect",
    body: "Got an interesting project? Want to talk about technology?",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  projectPage: {
    back: "Back to projects",
    sections: {
      context: "Context",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      technologies: "Technologies",
      results: "Results",
      learned: "What I learned",
    },
    github: "GitHub",
    demo: "Demo",
    article: "Paper",
  },
  footer: {
    note: "Built to grow with the career.",
  },
  links: {
    github: "https://github.com/bNDorneles",
    linkedin: "https://www.linkedin.com/in/bernardo-dorneles-6b6a9322a/",
    email: "mailto:bernardogomesdorneles13@gmail.com",
  },
};
