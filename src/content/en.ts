import type { SiteContent } from "./types";

/**
 * English — same structure as pt.ts.
 *
 * Source: `Perfil-Cassiano.md` (LinkedIn export consolidated) + PLANNING.md §5
 * tone guidelines.
 */
export const enContent: SiteContent = {
  hero: {
    eyebrow: "Full Stack Developer · Fortaleza, Brazil",
    name: "Cassiano Santos",
    role: "full-stack engineer",
    // Translation of §5 hero lede — keep tone sober, direct, no clichés.
    lede:
      "I've been shipping production code since 2023. Java and Node APIs, React and Angular interfaces, integrations that need to be reliable before they're pretty. I focus on technical decisions that survive the next quarter.",
    meta: [
      { label: "Current role", value: "Junior III" },
      { label: "Experience", value: "~3 years" },
      { label: "Education", value: "FIAP · 2025" },
      { label: "Languages", value: "PT · EN" },
    ],
    photoAlt: "Cassiano Santos, portrait",
    statusPill: "Open to conversations",
    ctas: [
      { label: "Send me an email", href: "mailto:cassianosantosneto@gmail.com", primary: true },
      { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/cassiano-santos-14423921b/" },
    ],
  },

  about: {
    sectionNumber: "01",
    sectionTitle: "About",
    paragraphs: [
      "I work in full-stack development on production deliveries. I work on both sides of the product, integrating APIs and interfaces with a focus on what needs to be reliable before it looks good.",
      "On the backend, Java/Spring and Node. On the frontend, React and Angular. Relational and NoSQL databases as each project requires. I prefer direct code, defensible technical decisions, and choices that age well.",
      "Systems Analysis and Development at FIAP (2023 to 2025), with earlier stints in mechanical engineering at UFC and production engineering at UNIFOR. The pivot to software happened early, and it's what taught me the most about the kind of problems I actually wanted to solve.",
    ],
  },

  stack: {
    sectionNumber: "02",
    sectionTitle: "Stack",
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
    sectionTitle: "Experience",
    company: "Sunne · Fortaleza, Brazil",
    companyNote:
      "Continuous trajectory at the same company, climbing each cycle. Every step widened the stack, the autonomy and the delivery scope.",
    rows: [
      {
        period: "Sep 2025 — now",
        isCurrent: true,
        role: "Junior III Developer",
        company: "Sunne",
        summary:
          "Maintaining and evolving internal support and management platforms, with full-stack delivery focused on usability and performance.",
        tags: ["Angular", "React", "TypeScript", "Node.js", "Java", "Spring Boot"],
      },
      {
        period: "Jul 2024 — Sep 2025",
        role: "Junior I Developer",
        company: "Sunne",
        summary:
          "Same internal platforms, with expanded scope on full-stack features and more autonomy on day-to-day technical decisions.",
        tags: ["React", "TypeScript", "Angular", "Node.js", "Java", "Spring Boot"],
      },
      {
        period: "Jan — Jun 2024",
        role: "Software Trainee I + II",
        company: "Sunne",
        summary:
          "Front-end focus on the support platform: maintenance, new screens and technical onboarding on the product.",
        tags: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        period: "Jul — Dec 2023",
        role: "Technology & Product Intern",
        company: "Sunne",
        summary:
          "Monitoring billing-system radars, writing scripts and optimizations for internal processes, analyzing data for inconsistency detection, building automated tests and collaborating closely with the product team.",
        tags: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
    ],
  },

  recommendations: {
    sectionNumber: "04",
    sectionTitle: "Recommendation",
    cta: "View on LinkedIn ↗",
    items: [
      {
        quote:
          "Cassiano is a solid professional with great learning ability and initiative. He knows how to ask the right questions at the right moments, which helps move projects forward. His commitment to continuous improvement is evident, reflected in his rapid evolution. In addition to his technical skills, he stands out for his human side, making him a strong candidate for leadership positions soon. He is indispensable to any team.",
        authorName: "Henrique Artur",
        authorRole: "Tech Lead",
        relation: "Managed Cassiano directly",
        date: "August 6, 2025",
        link: "https://www.linkedin.com/in/cassiano-santos-14423921b/details/recommendations/",
      },
    ],
  },

  projects: {
    sectionNumber: "05",
    sectionTitle: "Projects",
    note:
      "Because I started working full-time early, I never had much room for personal projects. These are mostly study exercises. I'll start contributing more to open source soon.",
    items: [
      {
        slug: "greencycle-api",
        kind: "study",
        kindLabel: "Study · API",
        title: "Greencycle API",
        description: "Solid waste management API built in Java 21.",
        problem:
          "Academic project at FIAP/Greencycle: simulate the backend of a recycling collection platform with realistic domain modeling and consumable REST endpoints.",
        approach:
          "Spring Boot with separated layers (controller/service/repository), Bean Validation, JPA persistence and seeded demo data.",
        stack: ["Java 21", "Spring Boot", "JPA", "PostgreSQL"],
        links: [{ label: "GitHub ↗", href: "https://github.com/CassianoSantosTech/greecycle-fiap" }],
      },
      {
        slug: "dev-task-tracker",
        kind: "extension",
        kindLabel: "Chrome extension",
        title: "Dev Task & Time Tracker",
        description: "Browser extension to organize daily tasks and track time spent on each.",
        problem:
          "I wanted a lightweight way to mark focus and time straight from the browser. Something that fits in a popup and persists locally.",
        approach:
          "Manifest V3, extension storage, minimal UI with per-task timers and a simple daily log export.",
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
        kindLabel: "Personal site",
        title: "cassianosantos.dev",
        description: "This page. Bilingual, with dark/light/mono themes.",
        problem:
          "I wanted a single space where a technical recruiter, a senior dev and an international recruiter all find the same positioning, with no clichés and no inflation.",
        approach:
          "Next.js App Router, next-intl for PT/EN, content versioned in .ts files, no CMS. Theme via CSS variables + data-theme on the html.",
        stack: ["Next.js", "TypeScript", "Tailwind", "next-intl"],
        links: [
          { label: "GitHub ↗", href: "https://github.com/CassianoSantosTech/portfolioProject" },
        ],
      },
    ],
  },

  education: {
    sectionNumber: "06",
    sectionTitle: "Education",
    cards: [
      {
        slug: "ufc-origem",
        kind: "Origin",
        title: "Mechanical Engineering",
        institution: "UFC",
        period: "2019 to 2021",
        note:
          "I started at the federal university in engineering, but I noticed early that what really pulled me in were the software problems. I pivoted to ADS in 2023.",
        fullWidth: true,
      },
      {
        slug: "fiap",
        kind: "Degree",
        title: "Systems Analysis and Development",
        institution: "FIAP",
        period: "2023 to 2025",
      },
      {
        slug: "infinity",
        kind: "Bootcamp",
        title: "Full Stack",
        institution: "Infinity School",
        period: "2022",
        note: "Microsoft and Google partners.",
      },
      {
        slug: "harvard-cs50",
        kind: "Course",
        title: "CS50: Introduction to Computer Science",
        institution: "Harvard University",
        period: "2022",
      },
      {
        slug: "sql-alura",
        kind: "Certification",
        title: "SQL: Relational Database",
        institution: "Alura",
        period: "2024",
      },
    ],
  },

  now: {
    sectionNumber: "07",
    sectionTitle: "Now",
    items: [
      {
        kind: "Studying",
        body: "Building with LLMs in the Claude ecosystem. Focused on integrating AI into the workflow to amplify delivery 3 to 7x.",
      },
      {
        kind: "Reading",
        body: "Back to Clean Code to revisit the basics. For fun, Flowers for Algernon, reading in English to keep the language sharp.",
      },
      {
        kind: "Building",
        body: "Next personal projects focused on applied AI integrations. Coming soon to this page.",
      },
    ],
  },

  humanNote: {
    body:
      "Outside of code, I play basketball and surf whenever I can. It keeps my head organized. Good commits usually come right after a good workout.",
  },

  contact: {
    sectionNumber: "08",
    sectionTitle: "Contact",
    line: "Want to talk?",
    lineHighlight: "Send me an email",
    lineSuffix: ", I usually reply same day.",
    links: [
      {
        label: "Email",
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
        value: "@cassianosantos",
        href: "https://www.instagram.com/cassianosantos/",
      },
    ],
  },
};
