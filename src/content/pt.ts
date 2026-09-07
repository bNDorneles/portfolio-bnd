import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Bernardo Dorneles — Software Engineering",
    description:
      "Estudante de Engenharia de Software e desenvolvedor full stack que constrói sistemas, APIs, aplicações web e soluções com IA.",
  },
  nav: {
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    brand: "BND",
  },
  hero: {
    greeting: "Olá, eu sou",
    headline: "Software, sistemas e algumas ideias que começaram como código.",
    name: "BERNARDO",
    lastNameBefore: "DORN",
    lastNameAccent: "E",
    lastNameAfter: "LES",
    role: "Software Engineering Student · Full Stack Developer",
    focus: "Backend · AI · Systems",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaProjects: "Ver projetos",
  },
  bento: {
    featuredLabel: "Destaque",
    featuredTitle: "Phishing LLM",
    featuredMeta: "Paper · SBseg 2026 · SBC",
    githubTitle: "GitHub",
    githubMeta: "10+ repositórios públicos",
    pythonTitle: "Python",
    engineeringTitle: "Engineering",
    engineeringMeta: "UNIPAMPA Alegrete",
    buildingTitle: "Currently building…",
    buildingMeta: "Sistemas, APIs e experimentos com LLMs",
  },
  about: {
    eyebrow: "About",
    title: "Quem é Bernardo?",
    body: [
      "Natural de São Borja/RS. Formado Técnico em Informática pelo Instituto Federal Farroupilha e estudante de Engenharia de Software na UNIPAMPA — Campus Alegrete.",
      "Em 2024 atuei no Exército Brasileiro no setor de informática, com manutenção de servidores, computadores e redes. Desde 2026 trabalho como desenvolvedor full stack na eSaaS, em sistemas ERP e software empresarial.",
      "Construo APIs, aplicações web e soluções envolvendo IA. Este site acompanha a carreira — e evolui junto com ela.",
    ],
  },
  timeline: {
    eyebrow: "Timeline",
    title: "Evolução",
    years: [
      {
        year: "Antes",
        events: [
          "Técnico em Informática — IF Farroupilha (São Borja)",
        ],
      },
      {
        year: "2024",
        events: [
          "Exército Brasileiro — setor de informática (servidores, PCs e redes)",
        ],
      },
      {
        year: "2025",
        events: [
          "Início da Engenharia de Software na UNIPAMPA (Campus Alegrete)",
          "Primeiros projetos acadêmicos e fundamentos",
        ],
      },
      {
        year: "2026",
        events: [
          "Desenvolvedor full stack na eSaaS",
          "Projetos com IA e LLMs",
          "Artigo publicado no SBSeg 2026 (SBC)",
          "Este portfólio",
        ],
      },
      {
        year: "2027",
        events: ["…o que vier a seguir"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Experiência",
    role: "Desenvolvedor full stack",
    company: "eSaaS",
    summary:
      "Desde fevereiro de 2026 em Alegrete/RS. Atuo em soluções ERP white-label e software empresarial — desenvolvimento full stack, integrações e manutenção de módulos em produção.",
    topics: [
      "Sistemas ERP",
      "APIs",
      ".NET",
      "Angular",
      "Integrações",
      "NF-e / NFC-e",
      "Sistemas fiscais",
      "Investigação e correção de bugs",
      "Migração de módulos",
      "Manutenção de sistemas",
    ],
    expand: "Ver experiência completa",
    collapse: "Recolher",
  },
  projects: {
    eyebrow: "Work",
    title: "Projetos",
    featured: "Destaques",
    others: "Outros projetos",
    collaborative: "Contribuição em projeto colaborativo",
    viewCase: "Ver case study",
    items: [
      {
        slug: "phishing-llm",
        title: "Phishing LLM",
        subtitle: "SBseg 2026 · Artigo publicado",
        tags: ["AI", "Python", "LLMs", "Research", "Cybersecurity"],
        summary:
          "LLMs para detecção de phishing em e-mails: comparação controlada com baselines TF-IDF e red flags auditáveis — artigo no SBSeg 2026 (SBC).",
        featured: true,
        github: "https://github.com/bNDorneles/phishing-llm-sbseg2026",
        article: {
          url: "https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/44508",
        },
        caseStudy: {
          context:
            "Trabalho de iniciação científica com Silvio Quincozes (UNIPAMPA), publicado nos Anais Estendidos do SBSeg 2026. Avaliamos LLMs na detecção de phishing em e-mails sob um protocolo reprodutível e orientado à cibersegurança.",
          problem:
            "Faltava uma comparação controlada entre LLMs recentes e baselines clássicas (TF-IDF) no mesmo conjunto avaliativo, com foco em reprodutibilidade e em justificativas auditáveis — não apenas em métricas brutas.",
          solution:
            "Protocolo com calibração (10 mensagens) e avaliação (90 mensagens), quatro LLMs sob as mesmas condições, baselines TF-IDF sem vazamento do conjunto de teste, e análise de red flags / justificativas estruturadas.",
          architecture:
            "Pipeline experimental em Python: preparação do dataset → prompts padronizados → chamadas aos modelos → coleta de respostas → métricas (precisão, revocação, F1) → comparação com TF-IDF e análise qualitativa das justificativas.",
          technologies:
            "Python · LLMs (Qwen3 32B, Llama 3.3 70B e outros) · TF-IDF · APIs · análise experimental · cibersegurança",
          results:
            "Entre os LLMs, Qwen3 32B obteve o melhor desempenho e revocação perfeita para phishing; Llama 3.3 70B teve o perfil mais equilibrado. As baselines TF-IDF alcançaram maior F1-score bruto neste recorte. A contribuição é analisar quando LLMs agregam valor operacional via red flags auditáveis — não afirmar superioridade geral.",
          learned:
            "Protocolo experimental e baselines importam tanto quanto o modelo. Em segurança, explicabilidade (red flags) pode valer mais do que um F1 pontual sem justificativa.",
        },
      },
      {
        slug: "bolao-copa",
        title: "Bolão da Copa 2026",
        subtitle: "Full-stack colaborativo",
        tags: ["React", "Tailwind", "Node", "Supabase"],
        summary:
          "Aplicação web para palpites e acompanhamento da Copa — construída em equipe.",
        featured: true,
        collaborative: true,
        github: "https://github.com/bNDorneles",
        caseStudy: {
          context:
            "Projeto colaborativo para organizar palpites da Copa do Mundo 2026 com uma experiência web moderna.",
          problem:
            "Centralizar palpites, pontuação e acompanhamento de jogos de forma simples para um grupo de pessoas, sem planilhas manuais.",
          solution:
            "App React com Tailwind, backend Node e Supabase para autenticação, dados e regras de pontuação.",
          architecture:
            "Frontend React → API/Node → Supabase (auth + banco). Componentes de placar, palpites e ranking.",
          technologies: "React · Tailwind CSS · Node.js · Supabase",
          results:
            "Produto usável por um grupo real, com fluxo de palpites e ranking — e experiência prática de trabalho em equipe.",
          learned:
            "Colaboração força clareza de responsabilidades, PRs e comunicação. O código individual só escala quando o time alinhado.",
        },
      },
      {
        slug: "site-paroquia",
        title: "Site da Paróquia",
        subtitle: "Presença web institucional",
        tags: ["Web", "Frontend", "Institucional"],
        summary:
          "Site institucional para uma paróquia — informação clara, organização de conteúdo e entrega real para a comunidade.",
        featured: true,
        caseStudy: {
          context:
            "Projeto de presença digital para uma instituição religiosa: a comunidade precisava de um canal web simples para horários, avisos e informações essenciais.",
          problem:
            "Comunicar missas, eventos e conteúdos pastorais sem depender só de redes sociais ou cartazes — com uma base web estável e fácil de atualizar.",
          solution:
            "Site institucional focado em clareza: páginas de informação, organização de seções e experiência responsiva para quem acessa pelo celular.",
          architecture:
            "Estrutura de páginas estáticas/institucionais com hierarquia de conteúdo (início, horários, avisos, contato) e layout pensado para leitura rápida.",
          technologies: "HTML/CSS · JavaScript · design responsivo · publicação web",
          results:
            "Canal oficial utilizável pela comunidade — software a serviço de um contexto real, não apenas de um exercício de aula.",
          learned:
            "Projetos institucionais exigem empatia com o público e prioridade no conteúdo. Beleza sem informação útil não resolve o problema da paróquia.",
        },
      },
      {
        slug: "agenti-ai",
        title: "Agenti-AI",
        subtitle: "Agentes e IA",
        tags: ["Python", "AI", "Agents"],
        summary:
          "Experimentos com agentes de IA — orquestração, ferramentas e fluxo de decisão.",
        featured: true,
        github: "https://github.com/bNDorneles/Agenti-AI",
        caseStudy: {
          context:
            "Exploração prática de agentes de linguagem: como um LLM pode planejar, usar ferramentas e executar tarefas em etapas.",
          problem:
            "LLMs sozinhos são limitados; agentes precisam de estrutura para agir com contexto, memória e ferramentas externas.",
          solution:
            "Protótipo em Python que organiza prompts, ferramentas e um ciclo de raciocínio/ação para tarefas concretas.",
          architecture:
            "Loop agente: observação → planejamento → chamada de ferramenta → atualização de estado → resposta.",
          technologies: "Python · LLMs · agentes · APIs",
          results:
            "Base experimental para entender limites e padrões de agentes — útil para projetos futuros com IA aplicada.",
          learned:
            "Agentes falham de formas interessantes. Observabilidade do loop e limites claros de ferramentas são tão importantes quanto o prompt.",
        },
      },
      {
        slug: "sistema-pedidos",
        title: "Sistema de Pedidos HTTP",
        subtitle: "Backend e APIs",
        tags: ["APIs", "Backend", "HTTP"],
        summary:
          "Sistema de pedidos focado em APIs REST, contratos HTTP e arquitetura de backend.",
        featured: true,
        github: "https://github.com/bNDorneles/sistema-pedidos-http",
        caseStudy: {
          context:
            "Projeto voltado a modelar um fluxo de pedidos com comunicação HTTP clara e responsabilidades bem definidas.",
          problem:
            "Como estruturar endpoints, recursos e fluxos de pedido de forma coerente, sem misturar camadas.",
          solution:
            "API REST com recursos de pedidos, status e operações HTTP bem definidas — foco em contrato e comportamento.",
          architecture:
            "Camada HTTP → serviços de domínio → persistência. Separação entre transporte e regras de negócio.",
          technologies: "HTTP · REST · Backend · arquitetura",
          results:
            "Base sólida para entender APIs de verdade: verbos, status codes, recursos e evolução do modelo.",
          learned:
            "API boa é contrato estável. Nomear recursos e pensar em estados do pedido evita retrabalho depois.",
        },
      },
      {
        slug: "conselho-tutelar",
        title: "Conselho Tutelar",
        subtitle: "Sistema web prático",
        tags: ["Web", "Systems"],
        summary:
          "Sistema web com aplicação prática — organização de fluxos e demandas reais.",
        featured: true,
        github: "https://github.com/bNDorneles/conselho-tutelar",
        caseStudy: {
          context:
            "Projeto de sistema web orientado a um contexto institucional: organização de informações e fluxos de atendimento.",
          problem:
            "Digitalizar e estruturar processos que antes dependiam de controles manuais ou fragmentados.",
          solution:
            "Aplicação web com fluxos de cadastro, consulta e acompanhamento alinhados ao domínio do problema.",
          architecture:
            "Camadas de interface, regras de negócio e dados — priorizando clareza operacional para quem usa o sistema.",
          technologies: "Web · sistemas · aplicação prática",
          results:
            "Entrega com impacto concreto: software a serviço de um processo real, não apenas de um exercício.",
          learned:
            "Requisitos de domínio importam. Ouvir o problema antes de desenhar telas evita construir o sistema errado.",
        },
      },
    ],
    otherItems: [],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tecnologias",
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
    title: "Como eu trabalho",
    steps: [
      {
        number: "01",
        title: "Investigo",
        body: "Entendo o problema antes de sair codando.",
      },
      {
        number: "02",
        title: "Projeto",
        body: "Penso na arquitetura e nas responsabilidades.",
      },
      {
        number: "03",
        title: "Desenvolvo",
        body: "Transformo a solução em código.",
      },
      {
        number: "04",
        title: "Testo",
        body: "Valido comportamento e casos de erro.",
      },
      {
        number: "05",
        title: "Melhoro",
        body: "Refatoro e evoluo a solução.",
      },
    ],
  },
  terminal: {
    eyebrow: "Playground",
    title: "Terminal",
    hint: "Tente: whoami · ./about · ls projects · cd phishing-llm",
    prompt: "bernardo@portfolio:~$",
    welcome: [
      "Terminal do portfólio. Digite help para ver comandos.",
      "Este site evolui junto com a carreira.",
    ],
  },
  github: {
    eyebrow: "GitHub",
    title: "Código em público",
    body: "10+ repositórios públicos · Projects · Experiments · University",
    cta: "Explorar meu GitHub",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's connect",
    body: "Tem um projeto interessante? Quer conversar sobre tecnologia?",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  projectPage: {
    back: "Voltar para projetos",
    sections: {
      context: "Contexto",
      problem: "Problema",
      solution: "Solução",
      architecture: "Arquitetura",
      technologies: "Tecnologias",
      results: "Resultados",
      learned: "O que aprendi",
    },
    github: "GitHub",
    demo: "Demo",
    article: "Artigo",
  },
  footer: {
    note: "Construído para evoluir junto com a carreira.",
  },
  links: {
    github: "https://github.com/bNDorneles",
    linkedin: "https://www.linkedin.com/in/bernardo-dorneles-6b6a9322a/",
    email: "mailto:bernardogomesdorneles13@gmail.com",
  },
};
