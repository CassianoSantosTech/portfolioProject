"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";

export function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations("lang");
  const [pending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    // pathname comes in like "/pt/..." — swap the leading segment.
    const rest = pathname.replace(/^\/(pt|en)/, "") || "/";
    const target = `/${next}${rest === "/" ? "" : rest}` || `/${next}`;
    startTransition(() => {
      router.replace(target);
    });
  }

  return (
    <div
      role="group"
      aria-label={t("switchTo")}
      className="inline-flex items-center gap-0 border border-line rounded-full p-0.5 font-mono text-[11px] uppercase tracking-wider"
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            disabled={pending}
            onClick={() => switchTo(code)}
            className={
              "min-w-[34px] px-2.5 py-1.5 rounded-full transition-colors duration-150 " +
              (active
                ? "bg-accent-soft text-fg-strong"
                : "text-muted hover:text-fg")
            }
          >
            {t(code)}
          </button>
        );
      })}
    </div>
  );
}
