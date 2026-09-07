export type Locale = "pt" | "en";

export interface ProjectCaseStudy {
  context: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string;
  results: string;
  learned: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  featured: boolean;
  collaborative?: boolean;
  github?: string;
  demo?: string;
  article?: { url: string; label?: string };
  caseStudy: ProjectCaseStudy;
}

export interface OtherProject {
  name: string;
  blurb: string;
  github?: string;
}

export interface TimelineYear {
  year: string;
  events: string[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    contact: string;
    brand: string;
  };
  hero: {
    greeting: string;
    headline: string;
    name: string;
    lastNameBefore: string;
    lastNameAccent: string;
    lastNameAfter: string;
    role: string;
    focus: string;
    ctaGithub: string;
    ctaLinkedin: string;
    ctaProjects: string;
  };
  bento: {
    featuredLabel: string;
    featuredTitle: string;
    featuredMeta: string;
    githubTitle: string;
    githubMeta: string;
    pythonTitle: string;
    engineeringTitle: string;
    engineeringMeta: string;
    buildingTitle: string;
    buildingMeta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    years: TimelineYear[];
  };
  experience: {
    eyebrow: string;
    title: string;
    role: string;
    company: string;
    summary: string;
    topics: string[];
    expand: string;
    collapse: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    featured: string;
    others: string;
    collaborative: string;
    viewCase: string;
    items: Project[];
    otherItems: OtherProject[];
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: { label: string; items: string[] }[];
  };
  howIWork: {
    eyebrow: string;
    title: string;
    steps: { number: string; title: string; body: string }[];
  };
  terminal: {
    eyebrow: string;
    title: string;
    hint: string;
    prompt: string;
    welcome: string[];
    help: string[];
    whoami: string;
    about: string[];
    cdUsage: string;
    cdMissing: string;
    cdOpening: string;
    notFound: string;
    ariaLabel: string;
    inputLabel: string;
  };
  github: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    email: string;
    linkedin: string;
    github: string;
  };
  projectPage: {
    back: string;
    sections: {
      context: string;
      problem: string;
      solution: string;
      architecture: string;
      technologies: string;
      results: string;
      learned: string;
    };
    github: string;
    demo: string;
    article: string;
  };
  footer: {
    note: string;
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
}
