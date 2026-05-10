import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import type { SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["stack"];
};

export function Stack({ content }: Props) {
  return (
    <Section
      id="stack"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      <div className="border-y border-line divide-y divide-line">
        {content.groups.map((group) => (
          <div
            key={group.key}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-8 py-5 md:py-6"
          >
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted self-center">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
