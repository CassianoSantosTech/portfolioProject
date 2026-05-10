/**
 * Content schema for the site. Both content/pt.ts and content/en.ts must
 * conform to `SiteContent`. Components consume this through useContent(locale).
 */

export type StackGroupKey = "frontend" | "backend" | "data" | "tooling";

export type StackGroup = {
  key: StackGroupKey;
  label: string;
  items: string[];
};

export type ExperienceRow = {
  period: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  summary: string;
  tags: string[];
};

export type Experience = {
  company: string;
  companyNote: string;
  rows: ExperienceRow[];
};

export type Recommendation = {
  quote: string;
  authorName: string;
  authorRole: string;
  relation: string;
  date: string;
  link: string;
};

export type ProjectKind =
  | "study"
  | "extension"
  | "personal"
  | "open-source"
  | "production";

export type Project = {
  slug: string;
  kind: ProjectKind;
  kindLabel: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export type EducationCard = {
  slug: string;
  kind: string;
  title: string;
  institution: string;
  period: string;
  note?: string;
  fullWidth?: boolean;
};

export type NowItem = {
  kind: string;
  body: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type SiteContent = {
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    lede: string;
    meta: { label: string; value: string }[];
    photoAlt: string;
    statusPill: string;
    ctas: { label: string; href: string; primary?: boolean }[];
  };
  about: {
    sectionNumber: string;
    sectionTitle: string;
    paragraphs: string[];
  };
  stack: {
    sectionNumber: string;
    sectionTitle: string;
    groups: StackGroup[];
  };
  experience: Experience & {
    sectionNumber: string;
    sectionTitle: string;
  };
  recommendations: {
    sectionNumber: string;
    sectionTitle: string;
    cta: string;
    items: Recommendation[];
  };
  projects: {
    sectionNumber: string;
    sectionTitle: string;
    note: string;
    items: Project[];
  };
  education: {
    sectionNumber: string;
    sectionTitle: string;
    cards: EducationCard[];
  };
  now: {
    sectionNumber: string;
    sectionTitle: string;
    items: NowItem[];
  };
  humanNote: {
    body: string;
  };
  contact: {
    sectionNumber: string;
    sectionTitle: string;
    line: string;
    lineHighlight: string;
    lineSuffix: string;
    links: ContactLink[];
  };
};
