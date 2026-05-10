import Link from "next/link";
import { Section } from "@/components/ui/Section";
import type { ContactLink, SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["contact"];
};

const HIGHLIGHT_HREF = "mailto:cassianosantosneto@gmail.com";

function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

export function Contact({ content }: Props) {
  return (
    <Section
      id="contact"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      <p className="font-serif text-fg-strong leading-[1.05] tracking-tight text-[clamp(36px,6vw,72px)]">
        {content.line}{" "}
        <Link
          href={HIGHLIGHT_HREF}
          className="text-accent underline decoration-accent/60 underline-offset-[6px] decoration-2 hover:decoration-accent transition-colors duration-150"
        >
          {content.lineHighlight}
        </Link>{" "}
        {content.lineSuffix}
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {content.links.map((link) => (
          <ContactCard key={link.label} link={link} />
        ))}
      </div>
    </Section>
  );
}

function ContactCard({ link }: { link: ContactLink }) {
  const external = isExternal(link.href);
  return (
    <Link
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group block rounded-md border border-line bg-bg-soft px-5 py-5 hover:border-accent transition-colors duration-150"
    >
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-2 group-hover:text-accent transition-colors duration-150">
        {link.label}
      </p>
      <p className="mt-2 font-mono text-[13px] text-fg-strong break-all">
        {link.value}
      </p>
    </Link>
  );
}
