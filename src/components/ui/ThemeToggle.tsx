"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/components/layout/ThemeProvider";
import { THEMES, type Theme } from "@/lib/theme";

const ICON: Record<Theme, string> = {
  dark: "◐",
  light: "○",
  mono: "▲",
};

export function ThemeToggle() {
  const { theme, setTheme, cycleTheme } = useTheme();
  const t = useTranslations("theme");

  return (
    <>
      {/* Mobile: single icon-only cycle button */}
      <button
        type="button"
        aria-label={`${t("label")}: ${t(theme)}`}
        onClick={cycleTheme}
        className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-fg hover:border-accent transition-colors duration-150"
      >
        <span aria-hidden className="text-[14px] leading-none">
          {ICON[theme]}
        </span>
      </button>

      {/* Desktop: full segmented pill */}
      <div
        role="group"
        aria-label={t("label")}
        className="hidden md:inline-flex items-center border border-line rounded-full p-0.5 font-mono text-[11px] uppercase tracking-wider"
      >
        {(THEMES as readonly Theme[]).map((value) => {
          const active = value === theme;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => setTheme(value)}
              className={
                "px-2.5 py-1 rounded-full transition-colors duration-150 " +
                (active
                  ? "bg-accent-soft text-fg-strong"
                  : "text-muted hover:text-fg")
              }
            >
              {t(value)}
            </button>
          );
        })}
      </div>
    </>
  );
}
