import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Bernardo Dorneles — Software Engineering",
    description:
      "Software Engineering student building systems, APIs, web apps, and AI-powered solutions.",
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
    role: "Software Engineering Student",
    focus: "Backend · AI · Systems",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaProjects: "View projects",
  },
  bento: {
    featuredLabel: "Featured",
    featuredTitle: "Phishing LLM",
    featuredMeta: "AI / Research · SBseg 2026",
    githubTitle: "GitHub",
    githubMeta: "10+ public repositories",
    pythonTitle: "Python",
    engineeringTitle: "Engineering",
    engineeringMeta: "UNIPAMPA",
    buildingTitle: "Currently building…",
    buildingMeta: "Systems, APIs, and LLM experiments",
  },
  about: {
    eyebrow: "About",
    title: "Who is Bernardo?",
    body: [
      "Software Engineering student at UNIPAMPA building systems, APIs, web applications, and AI solutions.",
      "The edge isn't a single stack — it's range: from academic foundations to enterprise systems, from data structures to LLM experiments.",
      "This site grows with the career. Today: Software Engineering Student. Next: whatever practice shapes.",
    ],
  },
  timeline: {
    eyebrow: "Timeline",
    title: "Evolution",
    years: [
      {
        year: "2025",
        events: [
          "Started Software Engineering at UNIPAMPA",
          "First academic projects and fundamentals",
        ],
      },
      {
        year: "2026",
        events: [
          "Building systems and APIs",
          "AI and LLM projects",
          "Professional software experience",
          "Phishing LLM — SBseg 2026",
          "This portfolio",
        ],
      },
      {
        year: "2027",
        events: ["…whatever comes next"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience",
    role: "Software Development",
    company: "eSaaS",
    summary:
      "Work on real enterprise systems — ERP, fiscal integrations, and module maintenance in production.",
    topics: [
      "ERP systems",
      "APIs",
      ".NET",
      "Angular",
      "Integrations",
      "NF-e / NFC-e",
      "Fiscal systems",
      "Bug investigation and fixes",
      "Module migration",
      "System maintenance",
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
        subtitle: "SBseg 2026",
        tags: ["AI", "Python", "LLMs", "Research"],
        summary:
          "A comparative methodology for evaluating LLMs on phishing detection.",
        featured: true,
        github: "https://github.com/bNDorneles/phishing-llm-sbseg2026",
        caseStudy: {
          context:
            "As language models spread, a natural question is how they behave on security tasks — especially identifying phishing messages.",
          problem:
            "How do different language models behave when identifying phishing messages? A controlled, reproducible comparison across providers was missing.",
          solution:
            "A comparative methodology with a dataset, controlled experiments, and evaluation of multiple LLMs (OpenAI, Gemini, Groq, DeepSeek) under the same protocol.",
          architecture:
            "Python pipeline: dataset prep → standardized prompts → model API calls → response collection → metrics and comparative analysis.",
          technologies:
            "Python · LLMs · OpenAI · Gemini · Groq · DeepSeek · APIs · data analysis",
          results:
            "A performance comparison of models on phishing detection, with evidence to discuss LLM limits and opportunities in security.",
          learned:
            "Experimental protocol matters as much as the model. Standardizing prompts, controlling variables, and documenting failures turns an experiment into useful research.",
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
        slug: "estrutura-de-dados",
        title: "Data Structures",
        subtitle: "Java & algorithms",
        tags: ["Java", "Algorithms", "Data Structures"],
        summary:
          "Implementations and study of data structures and algorithms in Java.",
        featured: true,
        github: "https://github.com/bNDorneles/Estrutura-de-dados",
        caseStudy: {
          context:
            "Essential academic foundation: classic structures and the reasoning behind efficiency and data organization.",
          problem:
            "Master lists, queues, stacks, trees, and graphs in practice — not only in lecture theory.",
          solution:
            "Java implementations focused on understanding operations, complexity, and typical use of each structure.",
          architecture:
            "Modules per structure/algorithm, with usage examples and verification exercises.",
          technologies: "Java · data structures · algorithms",
          results:
            "A foundation that shows up everywhere: domain modeling, performance, and design decisions.",
          learned:
            "The right structure changes the problem. Before optimizing code, ask whether the data structure is the right one.",
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
    otherItems: [
      {
        name: "Networks",
        blurb: "Computer networks projects and studies.",
        github: "https://github.com/bNDorneles/Redes-gp06",
      },
      {
        name: "NetChat",
        blurb: "Network communication experiment.",
      },
      {
        name: "Parish Website",
        blurb: "Institutional site / web presence.",
      },
    ],
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
        items: ["React", "Tailwind CSS"],
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
  },
  footer: {
    note: "Built to grow with the career.",
  },
  links: {
    github: "https://github.com/bNDorneles",
    linkedin: "https://www.linkedin.com/in/bernardo-dorneles",
    email: "mailto:bernardo.dorneles@example.com",
  },
};
