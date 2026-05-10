import { useTranslations } from "next-intl";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import type { SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["experience"];
};

export function Experience({ content }: Props) {
  const t = useTranslations("common");

  return (
    <Section
      id="experience"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      {/* Company card */}
      <div className="rounded-md border border-line bg-bg-soft p-6 md:p-7">
        <p className="font-mono text-[12px] uppercase tracking-wider text-accent">
          {content.company}
        </p>
        <p className="mt-3 max-w-[60ch] font-serif text-fg leading-[1.55] text-[clamp(17px,1.5vw,19px)]">
          {content.companyNote}
        </p>
      </div>

      {/* Timeline */}
      <ol className="mt-10 border-t border-line divide-y divide-line">
        {content.rows.map((row, idx) => (
          <li
            key={idx}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-6 md:py-7"
          >
            <div className="flex items-start gap-2 font-mono text-[12px] uppercase tracking-wider text-muted">
              <span>{row.period}</span>
              {row.isCurrent ? (
                <span className="inline-flex items-center rounded-full border border-accent px-2 py-[2px] text-[10px] text-accent leading-none">
                  {t("now")}
                </span>
              ) : null}
            </div>

            <div>
              <h3 className="font-serif text-fg-strong text-[clamp(20px,2vw,24px)] leading-tight tracking-tight">
                {row.role}
              </h3>
              <p className="mt-1 font-mono text-[12px] uppercase tracking-wider text-accent">
                {row.company}
              </p>
              <p className="mt-3 max-w-[62ch] text-fg leading-[1.6]">
                {row.summary}
              </p>
              {row.tags.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {row.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
