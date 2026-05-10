import { Section } from "@/components/ui/Section";
import type { EducationCard, SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["education"];
};

export function Education({ content }: Props) {
  const standard = content.cards.filter((card) => !card.fullWidth);
  const wide = content.cards.filter((card) => card.fullWidth);

  return (
    <Section
      id="education"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      {wide.length > 0 ? (
        <div className="space-y-4 mb-4">
          {wide.map((card) => (
            <EduCard key={card.slug} card={card} fullWidth />
          ))}
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {standard.map((card) => (
          <EduCard key={card.slug} card={card} />
        ))}
      </div>
    </Section>
  );
}

function EduCard({
  card,
  fullWidth = false,
}: {
  card: EducationCard;
  fullWidth?: boolean;
}) {
  return (
    <article className="rounded-md border border-line bg-bg-soft p-6 md:p-7 h-full">
      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
        {card.kind}
      </p>
      <h3 className="mt-2 font-serif text-fg-strong text-[clamp(19px,1.8vw,22px)] leading-tight">
        {card.title}
      </h3>
      <p className="mt-1 font-mono text-[12px] text-muted">
        {card.institution} · {card.period}
      </p>
      {card.note ? (
        <p
          className={
            "mt-4 font-serif text-fg leading-[1.55] " +
            (fullWidth
              ? "text-[clamp(16px,1.5vw,18px)] max-w-[65ch]"
              : "text-[15px] max-w-[50ch]")
          }
        >
          {card.note}
        </p>
      ) : null}
    </article>
  );
}
