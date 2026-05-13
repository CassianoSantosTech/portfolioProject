import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["hero"];
};

function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href);
}

export function Hero({ content }: Props) {
  return (
    <section
      id="top"
      aria-label={content.name}
      className="container-page pt-12 pb-24 md:pt-20 md:pb-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-10 md:gap-16 items-start">
        {/* Photo + status pill */}
        <div className="relative aspect-[4/5] w-full max-w-[280px] md:max-w-none mx-auto md:mx-0 overflow-hidden rounded-md border border-line bg-bg-soft">
          <Image
            src="/me-in-vatican.jpeg"
            alt={content.photoAlt}
            fill
            sizes="(min-width: 768px) 400px, 280px"
            priority
            className="object-cover"
          />
          <div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 backdrop-blur px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white">
            <span className="status-dot" aria-hidden />
            <span>{content.statusPill}</span>
          </div>
        </div>

        {/* Right column */}
        <div>
          <p className="font-mono text-[12px] uppercase tracking-wider text-muted">
            {content.eyebrow}
          </p>

          <h1 className="font-serif text-fg-strong mt-4 leading-[1.02] tracking-tight text-[clamp(40px,7vw,78px)]">
            {content.name}
          </h1>

          <p className="font-mono text-accent mt-2 text-[14px]">
            {content.role}
          </p>

          <p className="font-serif text-fg mt-8 max-w-[55ch] leading-[1.45] text-[clamp(20px,2.2vw,26px)]">
            {content.lede}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 max-w-[480px]">
            {content.meta.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
                  {item.label}
                </dt>
                <dd className="mt-1 font-mono text-[13px] text-fg">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            {content.ctas.map((cta) => {
              const external = isExternal(cta.href);
              const base =
                "inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-[12px] uppercase tracking-wider transition-colors duration-150";
              const variant = cta.primary
                ? "bg-accent text-bg hover:opacity-90"
                : "border border-line-strong text-fg hover:border-accent hover:text-fg-strong";
              return (
                <Link
                  key={cta.label}
                  href={cta.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className={`${base} ${variant}`}
                >
                  {cta.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
