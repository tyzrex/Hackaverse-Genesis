import Navbar from "./components/global/navbar";
import About from "./components/sections/about.section";
import HeroSection from "./components/sections/hero-section";
import ThemeSection from "./components/sections/theme-section";
import MaxWidthWrapper from "./components/wrapper/maxwidth-wrapper";

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
    </>
  );
}

export default App;
