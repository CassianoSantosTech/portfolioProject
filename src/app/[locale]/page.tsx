import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { HumanNote } from "@/components/sections/HumanNote";
import { NowBlock } from "@/components/sections/NowBlock";
import { Projects } from "@/components/sections/Projects";
import { Recommendations } from "@/components/sections/Recommendations";
import { Stack } from "@/components/sections/Stack";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getContent(locale as Locale);

  return (
    <>
      <Hero content={content.hero} />
      <About content={content.about} />
      <Stack content={content.stack} />
      <Experience content={content.experience} />
      <Recommendations content={content.recommendations} />
      <Projects content={content.projects} />
      <Education content={content.education} />
      <NowBlock content={content.now} />
      <HumanNote content={content.humanNote} />
      <Contact content={content.contact} />
    </>
  );
}
