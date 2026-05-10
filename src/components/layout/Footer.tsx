import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line mt-20 md:mt-32">
      <div className="container-page py-8 flex items-center justify-between font-mono text-[11px] text-muted-2 uppercase tracking-wider">
        <span>{t("copyright", { year })}</span>
        <span>{t("version")}</span>
      </div>
    </footer>
  );
}
