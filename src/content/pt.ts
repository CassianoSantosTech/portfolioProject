import type { SiteContent } from "./types";

/**
 * Português (BR) — fonte de verdade pra copy do site.
 *
 * Dados pessoais (trajetória, datas, recomendação, formação) vêm de
 * `Perfil-Cassiano.md` na raiz do repo. Diretrizes de tom e estrutura vêm
 * de `PLANNING.md` §5.
 */
export const ptContent: SiteContent = {
  hero: {
    eyebrow: "Desenvolvedor Full Stack · Fortaleza, CE",
    name: "Cassiano Santos",
    role: "full-stack engineer",
    lede: "Escrevo código em produção desde 2023. APIs em Java e Node, interfaces em React e Angular, integrações que precisam ser confiáveis antes de bonitas. Foco em decisões técnicas que sobrevivem ao próximo trimestre.",
    meta: [
      // §5 — Hero meta
      // Reativar ao ser promovido a Pleno:
      // { label: "Posição atual", value: "Pleno" },
      { label: "Experiência", value: "~3 anos" },
      { label: "Formação", value: "FIAP · 2025" },
      { label: "Idiomas", value: "PT · EN" },
    ],
    photoAlt: "Cassiano Santos, retrato",
    statusPill: "Aberto a conversas",
    ctas: [
      { label: "Manda um e-mail", href: "mailto:cassianosantosneto@gmail.com", primary: true },
      { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/cassiano-santos-14423921b/" },
    ],
  },

  about: {
    sectionNumber: "01",
    sectionTitle: "Sobre",
    paragraphs: [
      "Atuo com desenvolvimento full stack em entregas de produção. Trabalho em ambos os lados do produto, integrando APIs e interfaces com foco no que precisa ser confiável antes de bonito.",
      "No backend, Java/Spring e Node. No frontend, React e Angular. Bancos relacionais e NoSQL conforme a necessidade do projeto. Prefiro código direto, decisão técnica defensável e escolhas que envelheçam bem.",
      "Formação em ADS pela FIAP (2023 a 2025), com passagem anterior por engenharia mecânica na UFC e engenharia de produção na UNIFOR. O pivô pra software aconteceu cedo, e foi o que mais me ensinou sobre o tipo de problema que eu queria resolver.",
    ],
  },

  stack: {
    sectionNumber: "02",
    sectionTitle: "Stack",
    // §5 — Stack groups verbatim
    groups: [
      {
        key: "frontend",
        label: "Frontend",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "Tailwind", "Bootstrap"],
      },
      {
        key: "backend",
        label: "Backend",
        items: ["Java 21", "Spring Boot", "Node.js", "Express", "Python"],
      },
      {
        key: "data",
        label: "Data",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      {
        key: "tooling",
        label: "Tooling",
        items: ["Git", "Docker", "Insomnia", "Postman", "n8n", "LLMs", "Vercel"],
      },
    ],
  },

  experience: {
    sectionNumber: "03",
    sectionTitle: "Experiência",
    company: "Sunne · Fortaleza, CE",
    companyNote:
      "Trajetória contínua na empresa, com promoções a cada ciclo. Cada degrau ampliou stack, autonomia e escopo de entrega.",
    rows: [
      {
        period: "set 2025 — agora",
        isCurrent: true,
        role: "Desenvolvedor Júnior III",
        company: "Sunne",
        summary:
          "Manutenção e evolução de plataformas internas de suporte e gestão, com entregas full stack focadas em usabilidade e performance.",
        tags: ["Angular", "React", "TypeScript", "Node.js", "Java", "Spring Boot"],
      },
      {
        period: "jul 2024 — set 2025",
        role: "Desenvolvedor Júnior I",
        company: "Sunne",
        summary:
          "Mesmas plataformas internas, com escopo ampliado em features full stack e mais autonomia nas decisões técnicas do dia a dia.",
        tags: ["React", "TypeScript", "Angular", "Node.js", "Java", "Spring Boot"],
      },
      {
        period: "jan — jun 2024",
        role: "Trainee de Software I + II",
        company: "Sunne",
        summary:
          "Foco em front-end na plataforma de suporte: manutenção, novas telas e onboarding técnico no produto.",
        tags: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        period: "jul — dez 2023",
        role: "Estagiário de Tecnologia e Produto",
        company: "Sunne",
        summary:
          "Acompanhamento de radares do sistema de faturamento, scripts e otimizações para processos internos, análise de dados pra detecção de inconsistências, testes automatizados e colaboração próxima com o time de produto.",
        tags: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
    ],
  },

  recommendations: {
    sectionNumber: "04",
    sectionTitle: "Recomendação",
    cta: "Ver no LinkedIn ↗",
    items: [
      {
        quote:
          "Cassiano é um profissional sólido, com grande capacidade de aprendizado e iniciativa. Sabe fazer as perguntas certas nos momentos certos, o que ajuda a destravar projetos. Seu compromisso com a melhoria contínua é evidente, refletido na sua rápida evolução. Além das habilidades técnicas, se destaca pelo lado humano, o que o torna um forte candidato a posições de liderança em breve. É indispensável a qualquer time.",
        authorName: "Henrique Artur",
        authorRole: "Tech Lead",
        relation: "Supervisionava Cassiano diretamente",
        date: "6 de agosto de 2025",
        link: "https://www.linkedin.com/in/cassiano-santos-14423921b/details/recommendations/",
      },
    ],
  },

  projects: {
    sectionNumber: "05",
    sectionTitle: "Projetos",
    note:
      "Como entrei cedo no mercado de trabalho, nunca sobrou muito tempo pra projetos pessoais. Esses aqui foram, em sua maior parte, exercícios de estudo. Em breve passo a contribuir mais com o ecossistema open source.",
    items: [
      {
        slug: "greencycle-api",
        kind: "study",
        kindLabel: "Estudo · API",
        title: "Greencycle API",
        description: "API de gestão de resíduos sólidos construída em Java 21.",
        problem:
          "Projeto acadêmico FIAP/Greencycle: simular o backend de uma plataforma de coleta seletiva, com modelagem de domínio realista e endpoints REST consumíveis.",
        approach:
          "Spring Boot com camadas separadas (controller/service/repository), validações com Bean Validation, persistência via JPA e seed de dados pra demo.",
        stack: ["Java 21", "Spring Boot", "JPA", "PostgreSQL"],
        links: [{ label: "GitHub ↗", href: "https://github.com/CassianoSantosTech/greecycle-fiap" }],
      },
      {
        slug: "dev-task-tracker",
        kind: "extension",
        kindLabel: "Extensão Chrome",
        title: "Dev Task & Time Tracker",
        description: "Extensão pra organizar tarefas do dia e medir tempo gasto em cada uma.",
        problem:
          "Queria uma forma leve de marcar foco e tempo direto do navegador, sem app extra rodando. Algo que cabe num popup e persiste localmente.",
        approach:
          "Manifest V3, storage local da extensão, UI minimalista com timers por tarefa e exportação simples do log diário.",
        stack: ["TypeScript", "React", "Chrome APIs"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/CassianoSantosTech/dev-task-tracker" },
          {
            label: "Chrome Web Store ↗",
            href: "https://chromewebstore.google.com/detail/Dev%20Task%20%26%20Time%20Tracker/bjchfgehhcaeonecaopcmbaomdndmlca",
          },
        ],
      },
      {
        slug: "personal-portfolio",
        kind: "personal",
        kindLabel: "Site pessoal",
        title: "cassianosantos.dev",
        description: "Esta página. Bilíngue, com tema dark/light/mono.",
        problem:
          "Ter um espaço único onde recrutador, dev sênior e recrutador internacional encontrem o mesmo posicionamento, sem clichê e sem inflar.",
        approach:
          "Next.js App Router, next-intl pra PT/EN, conteúdo versionado em arquivos .ts, sem CMS. Theme via CSS variables + data-theme no html.",
        stack: ["Next.js", "TypeScript", "Tailwind", "next-intl"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/CassianoSantosTech/portfolioProject" },
        ],
      },
    ],
  },

  education: {
    sectionNumber: "06",
    sectionTitle: "Formação",
    cards: [
      {
        slug: "ufc-origem",
        kind: "Origem",
        title: "Engenharia Mecânica",
        institution: "UFC",
        period: "2019 a 2021",
        note:
          "Entrei na federal em engenharia, mas percebi cedo que o que me prendia eram os problemas de software. Pivotei pra ADS em 2023.",
        fullWidth: true,
      },
      {
        slug: "fiap",
        kind: "Graduação",
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "FIAP",
        period: "2023 a 2025",
      },
      {
        slug: "infinity",
        kind: "Bootcamp",
        title: "Full Stack",
        institution: "Infinity School",
        period: "2022",
        note: "Parceiros Microsoft e Google.",
      },
      {
        slug: "harvard-cs50",
        kind: "Curso",
        title: "CS50: Introduction to Computer Science",
        institution: "Harvard University",
        period: "2022",
      },
      {
        slug: "sql-alura",
        kind: "Certificação",
        title: "SQL: Banco de Dados Relacional",
        institution: "Alura",
        period: "2024",
      },
    ],
  },

  now: {
    sectionNumber: "07",
    sectionTitle: "Agora",
    items: [
      {
        kind: "Estudando",
        body: "Desenvolvimento usando LLMs no ecossistema Claude. Foco em integrar IA no fluxo de trabalho pra potencializar entregas em 3 a 7x.",
      },
      {
        kind: "Lendo",
        body: "Voltei ao Clean Code pra revisitar as bases. Por lazer, Flowers for Algernon, leitura em inglês pra manter o idioma afiado.",
      },
      {
        kind: "Construindo",
        body: "Próximos projetos pessoais focados em integrações com IA aplicada. Em breve nesta página.",
      },
    ],
  },

  humanNote: {
    body:
      "Fora do código, jogo basquete e surfo sempre que dá. Ajuda a manter a cabeça organizada. Bons commits costumam vir depois de um bom treino.",
  },

  contact: {
    sectionNumber: "08",
    sectionTitle: "Contato",
    line: "Quer falar comigo?",
    lineHighlight: "Manda um e-mail",
    lineSuffix: ", costumo responder no mesmo dia.",
    links: [
      {
        label: "E-mail",
        value: "cassianosantosneto@gmail.com",
        href: "mailto:cassianosantosneto@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "/in/cassiano-santos",
        href: "https://www.linkedin.com/in/cassiano-santos-14423921b/",
      },
      {
        label: "GitHub",
        value: "@CassianoSantosTech",
        href: "https://github.com/CassianoSantosTech",
      },
      {
        label: "Instagram",
        value: "@cassianosantos_300",
        href: "https://www.instagram.com/cassianosantos_300/",
      },
    ],
  },
};
