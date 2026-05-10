import type { SiteContent } from "@/content/types";

type Props = {
  content: SiteContent["humanNote"];
};

export function HumanNote({ content }: Props) {
  return (
    <section
      aria-label="Personal note"
      className="container-page py-10 md:py-14"
    >
      <div className="border border-dashed border-line-strong rounded-md px-6 py-5 md:px-8 md:py-7 max-w-[750px] mx-auto">
        <p className="quote-italic font-serif italic text-muted leading-[1.6] text-[clamp(15px,1.4vw,17px)] text-center">
          {content.body}
        </p>
      </div>
    </section>
  );
}
