import Link from "next/link";
import { Section } from "@/components/ui/Section";
import type { SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["recommendations"];
};

export function Recommendations({ content }: Props) {
  return (
    <Section
      id="recommendations"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      <div className="space-y-6">
        {content.items.map((item, idx) => (
          <figure
            key={idx}
            className="relative rounded-md border border-line bg-bg-soft px-7 pt-12 pb-7 md:px-10 md:pt-14 md:pb-9"
          >
            <span
              aria-hidden
              className="absolute left-5 top-0 font-serif text-accent leading-none text-[96px] md:text-[120px] -translate-y-3 select-none"
            >
              &ldquo;
            </span>

            <blockquote className="quote-italic font-serif italic text-fg-strong leading-[1.45] text-[clamp(18px,1.8vw,21px)] max-w-[60ch]">
              <p>{item.quote}</p>
            </blockquote>

            <figcaption className="mt-6 font-mono text-[12px] uppercase tracking-wider text-muted">
              <p className="text-fg">{item.authorName}</p>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{item.authorRole}</span>
                <span aria-hidden className="text-muted-2">·</span>
                <span>{item.relation}</span>
                <span aria-hidden className="text-muted-2">·</span>
                <span>{item.date}</span>
              </p>
            </figcaption>

            <div className="mt-6">
              <Link
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-line-strong px-3.5 py-2 font-mono text-[12px] uppercase tracking-wider text-fg hover:border-accent hover:text-fg-strong transition-colors duration-150"
              >
                {content.cta}
              </Link>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
}
