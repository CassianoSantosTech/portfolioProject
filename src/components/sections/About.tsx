import { Section } from "@/components/ui/Section";
import type { SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["about"];
};

export function About({ content }: Props) {
  return (
    <Section
      id="about"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      <div className="space-y-5 max-w-[65ch] font-serif text-fg leading-[1.6] text-[clamp(17px,1.6vw,19px)]">
        {content.paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
