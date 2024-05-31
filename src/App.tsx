import Navbar from "./components/global/navbar";
import About from "./components/sections/about.section";
import HeroSection from "./components/sections/hero-section";
import { HighlightsSection } from "./components/sections/highlights-section";
import MentorsSection from "./components/sections/mentors-section";
import SpeakersSection from "./components/sections/speakers-section";
import ThemeSection from "./components/sections/theme-section";
import MaxWidthWrapper from "./components/wrapper/maxwidth-wrapper";

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
        products={Array.from({ length: 4 }, (_, i) => ({
          title: "test",
          background: generateRandomColor(),
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }))}
      />
      <SpeakersSection />

      <MentorsSection />
    </>
  );
}

export default App;
