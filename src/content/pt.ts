import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Bernardo Dorneles — Software Engineering",
    description:
      "Estudante de Engenharia de Software que constrói sistemas, APIs, aplicações web e soluções com IA.",
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
    role: "Software Engineering Student",
    focus: "Backend · AI · Systems",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaProjects: "Ver projetos",
  },
  bento: {
    featuredLabel: "Destaque",
    featuredTitle: "Phishing LLM",
    featuredMeta: "AI / Research · SBseg 2026",
    githubTitle: "GitHub",
    githubMeta: "10+ repositórios públicos",
    pythonTitle: "Python",
    engineeringTitle: "Engineering",
    engineeringMeta: "UNIPAMPA",
    buildingTitle: "Currently building…",
    buildingMeta: "Sistemas, APIs e experimentos com LLMs",
  },
  about: {
    eyebrow: "About",
    title: "Quem é Bernardo?",
    body: [
      "Estudante de Engenharia de Software na UNIPAMPA que constrói sistemas, APIs, aplicações web e soluções envolvendo IA.",
      "O diferencial não é uma única stack — é a variedade: da base acadêmica a sistemas empresariais, de estruturas de dados a experimentos com LLMs.",
      "Este site acompanha a carreira. Hoje: Software Engineering Student. Depois: o que a prática for moldando.",
    ],
  },
  timeline: {
    eyebrow: "Timeline",
    title: "Evolução",
    years: [
      {
        year: "2025",
        events: [
          "Início da Engenharia de Software na UNIPAMPA",
          "Primeiros projetos acadêmicos e fundamentos",
        ],
      },
      {
        year: "2026",
        events: [
          "Desenvolvimento de sistemas e APIs",
          "Projetos com IA e LLMs",
          "Experiência profissional em software",
          "Phishing LLM — SBseg 2026",
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
    role: "Desenvolvimento de Software",
    company: "eSaaS",
    summary:
      "Trabalho em sistemas empresariais reais — ERP, integrações fiscais e manutenção de módulos em produção.",
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
        subtitle: "SBseg 2026",
        tags: ["AI", "Python", "LLMs", "Research"],
        summary:
          "Uma metodologia comparativa para avaliação de LLMs na detecção de phishing.",
        featured: true,
        github: "https://github.com/bNDorneles/phishing-llm-sbseg2026",
        caseStudy: {
          context:
            "Com a popularização dos modelos de linguagem, surge a pergunta de como eles se comportam em tarefas de segurança — em especial na identificação de mensagens de phishing.",
          problem:
            "Como diferentes modelos de linguagem se comportam na identificação de mensagens de phishing? Faltava uma comparação controlada e reproduzível entre provedores.",
          solution:
            "Uma metodologia comparativa com dataset, experimentos controlados e avaliação de múltiplos LLMs (OpenAI, Gemini, Groq, DeepSeek) sob o mesmo protocolo.",
          architecture:
            "Pipeline em Python: preparação do dataset → prompts padronizados → chamadas às APIs dos modelos → coleta de respostas → métricas e análise comparativa.",
          technologies:
            "Python · LLMs · OpenAI · Gemini · Groq · DeepSeek · APIs · análise de dados",
          results:
            "Comparação do desempenho dos modelos na detecção de phishing, com evidências para discutir limites e oportunidades de LLMs em segurança.",
          learned:
            "Protocolo experimental importa tanto quanto o modelo. Padronizar prompts, controlar variáveis e documentar falhas é o que transforma um experimento em pesquisa útil.",
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
        slug: "estrutura-de-dados",
        title: "Estrutura de Dados",
        subtitle: "Java e algoritmos",
        tags: ["Java", "Algorithms", "Data Structures"],
        summary:
          "Implementações e estudos de estruturas de dados e algoritmos em Java.",
        featured: true,
        github: "https://github.com/bNDorneles/Estrutura-de-dados",
        caseStudy: {
          context:
            "Base acadêmica essencial: estruturas clássicas e o raciocínio por trás de eficiência e organização de dados.",
          problem:
            "Dominar listas, filas, pilhas, árvores e grafos na prática — não só na teoria da aula.",
          solution:
            "Implementações em Java com foco em compreensão das operações, complexidade e uso típico de cada estrutura.",
          architecture:
            "Módulos por estrutura/algoritmo, com exemplos de uso e exercícios de verificação.",
          technologies: "Java · estruturas de dados · algoritmos",
          results:
            "Fundamento que aparece em tudo: modelagem de domínio, performance e decisões de design.",
          learned:
            "Estrutura certa muda o problema. Antes de otimizar código, vale perguntar se a estrutura de dados é a adequada.",
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
    otherItems: [
      {
        name: "Redes",
        blurb: "Projetos e estudos de redes de computadores.",
        github: "https://github.com/bNDorneles/Redes-gp06",
      },
      {
        name: "NetChat",
        blurb: "Experimento de comunicação em rede.",
      },
      {
        name: "Site da Paróquia",
        blurb: "Site institucional / presença web.",
      },
    ],
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
  },
  footer: {
    note: "Construído para evoluir junto com a carreira.",
  },
  links: {
    github: "https://github.com/bNDorneles",
    linkedin: "https://www.linkedin.com/in/bernardo-dorneles",
    email: "mailto:bernardo.dorneles@example.com",
  },
};
