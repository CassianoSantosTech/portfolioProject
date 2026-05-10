import type { ReactNode } from "react";

type Props = {
  id: string;
  number: string;
  title: string;
  /** Optional aside under the number/title in the left column. */
  aside?: ReactNode;
  /** Override accessible name when title isn't suitable. */
  ariaLabel?: string;
  children: ReactNode;
};

/**
 * Editorial section wrapper — grid 220px | 1fr per PLANNING.md §2.4.
 * Left column carries the "NN / Title" mono label; right column carries
 * the serif title (clamp 30–44px) and section body.
 *
 * Section spacing: 80px mobile / 120px desktop.
 */
export function Section({
  id,
  number,
  title,
  aside,
  ariaLabel,
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-label={ariaLabel ?? title}
      className="container-page py-20 md:py-[120px] scroll-mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-12">
        <aside className="font-mono text-[12px] uppercase tracking-wider text-muted-2 md:sticky md:top-20 md:self-start">
          <p>
            <span className="text-muted">{number}</span>
            <span className="mx-1.5">/</span>
            <span className="text-fg">{title}</span>
          </p>
          {aside ? <div className="mt-4">{aside}</div> : null}
        </aside>

        <div>
          <h2 className="font-serif text-fg-strong leading-[1.1] tracking-tight text-[clamp(30px,4vw,44px)]">
            {title}
          </h2>
          <div className="mt-8 md:mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
