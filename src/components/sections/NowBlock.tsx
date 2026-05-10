import { Section } from "@/components/ui/Section";
import type { SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["now"];
};

export function NowBlock({ content }: Props) {
  return (
    <Section
      id="now"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {content.items.map((item, idx) => (
          <article
            key={idx}
            className="rounded-md border border-line bg-bg-soft p-6 md:p-7 h-full"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
              {item.kind}
            </p>
            <p className="mt-3 font-serif text-fg leading-[1.55] text-[clamp(15px,1.4vw,17px)]">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
