"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import type { Project, SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["projects"];
};

export function Projects({ content }: Props) {
  const t = useTranslations("projects");

  // First project is open by default per §4.7.
  const [openSlug, setOpenSlug] = useState<string | null>(
    content.items[0]?.slug ?? null,
  );

  return (
    <Section
      id="projects"
      number={content.sectionNumber}
      title={content.sectionTitle}
    >
      <div className="border-l-2 border-accent bg-bg-soft pl-5 pr-4 py-4 mb-10">
        <p className="font-serif text-fg leading-[1.55] text-[clamp(15px,1.4vw,17px)] max-w-[60ch]">
          {content.note}
        </p>
      </div>

      <ol className="border-t border-line divide-y divide-line">
        {content.items.map((project, idx) => {
          const isOpen = openSlug === project.slug;
          const number = String(idx + 1).padStart(2, "0");
          return (
            <li key={project.slug}>
              <ProjectRow
                project={project}
                number={number}
                open={isOpen}
                onToggle={() => setOpenSlug(isOpen ? null : project.slug)}
                labels={{
                  problem: t("problem"),
                  approach: t("approach"),
                  stack: t("stack"),
                  links: t("links"),
                  expand: t("expand"),
                  collapse: t("collapse"),
                }}
              />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

type RowLabels = {
  problem: string;
  approach: string;
  stack: string;
  links: string;
  expand: string;
  collapse: string;
};

type RowProps = {
  project: Project;
  number: string;
  open: boolean;
  labels: RowLabels;
  onToggle: () => void;
};

function ProjectRow({ project, number, open, labels, onToggle }: RowProps) {
  const panelId = `project-panel-${project.slug}`;
  return (
    <div className="py-6 md:py-7">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full grid grid-cols-[28px_1fr_auto] md:grid-cols-[40px_1fr_auto] gap-3 md:gap-4 items-start text-left group"
      >
        <span className="font-mono text-[12px] uppercase tracking-wider text-muted-2 pt-1">
          {number}
        </span>

        <div className="min-w-0">
          <p className="font-mono text-[12px] uppercase tracking-wider text-accent">
            {project.kindLabel}
          </p>
          <h3 className="mt-1 font-serif text-fg-strong text-[clamp(20px,2vw,24px)] leading-tight tracking-tight group-hover:text-fg transition-colors duration-150">
            {project.title}
          </h3>
          <p className="mt-2 max-w-[62ch] text-fg leading-[1.55]">
            {project.description}
          </p>
        </div>

        <span
          aria-hidden
          className="self-start mt-1 inline-flex items-center justify-center rounded-full border border-line-strong w-9 h-9 md:w-auto md:h-auto md:px-3 md:py-1 font-mono text-[14px] md:text-[11px] uppercase tracking-wider text-muted group-hover:border-accent group-hover:text-fg transition-colors duration-150"
        >
          <span className="md:hidden leading-none">{open ? "−" : "+"}</span>
          <span className="hidden md:inline">
            {open ? labels.collapse : labels.expand}
          </span>
        </span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:pl-[56px]"
      >
        <CaseStudyField label={labels.problem} body={project.problem} />
        <CaseStudyField label={labels.approach} body={project.approach} />

        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
            {labels.stack}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
            {labels.links}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-line-strong px-3 py-1.5 font-mono text-[12px] uppercase tracking-wider text-fg hover:border-accent hover:text-fg-strong transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyField({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
        {label}
      </p>
      <p className="mt-3 max-w-[55ch] text-fg leading-[1.6]">{body}</p>
    </div>
  );
}
