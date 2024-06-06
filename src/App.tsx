import { useEffect } from "react";
import Footer from "./components/global/footer";
import Navbar from "./components/global/navbar";
import About from "./components/sections/about.section";
import HeroSection from "./components/sections/hero-section";
import { HighlightsSection } from "./components/sections/highlights-section";
import ThemeSection from "./components/sections/theme-section";
import MaxWidthWrapper from "./components/wrapper/maxwidth-wrapper";
import { highlightsData } from "./lib/constants";

function generateRandomColor() {
  const choices = [
    "bg-red-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
  ];
  return choices[Math.floor(Math.random() * choices.length)];
}

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
      </MaxWidthWrapper>
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
      <MaxWidthWrapper>
        {/* <SponsorSection /> */}
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}

export default App;
