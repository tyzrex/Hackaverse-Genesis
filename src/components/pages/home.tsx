import About from "@/components/sections/about.section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import ThemeSection from "@/components/sections/theme-section";
import MaxWidthWrapper from "@/components/wrapper/maxwidth-wrapper";
import { highlightsData } from "@/lib/constants";
import HeroSection from "../sections/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <MaxWidthWrapper>
        <ThemeSection />
      </MaxWidthWrapper>
      <HighlightsSection
        products={highlightsData.map((highlight) => ({
          title: highlight.title,
          background: highlight.color,
          description: highlight.description,
        }))}
      />
      {/* <SpeakersSection /> */}
      {/* <MentorsSection /> */}
    </>
  );
}
