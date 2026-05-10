import Link from "next/link";
import { useTranslations } from "next-intl";
import { LangToggle } from "@/components/ui/LangToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function TopBar() {
  const t = useTranslations();

  const navItems: { key: string; href: string }[] = [
    { key: "about", href: "#about" },
    { key: "stack", href: "#stack" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur border-b border-line">
      <div className="container-page h-[52px] flex items-center justify-between gap-3 md:gap-6">
        <Link
          href="#top"
          className="inline-flex items-center gap-2 font-mono text-[13px] text-fg-strong"
        >
          <span className="status-dot" aria-hidden />
          <span>{t("topbar.brand")}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6 font-mono text-[12px] uppercase tracking-wider text-muted"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="relative py-1 hover:text-fg transition-colors duration-150 group"
            >
              {t(`nav.${item.key}`)}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-[width] duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <LangToggle />
        </div>
      </div>
    </header>
  );
}
