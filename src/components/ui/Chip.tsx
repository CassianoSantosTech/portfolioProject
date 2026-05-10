import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Mono chip per PLANNING.md §4.4 — 12.5px, padding 7×11, hover border accent. */
export function Chip({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-bg-soft py-[7px] px-[11px] font-mono text-[12.5px] leading-none text-fg transition-colors duration-150 hover:border-accent">
      {children}
    </span>
  );
}
