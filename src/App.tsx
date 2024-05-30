import Navbar from "./components/global/navbar";
import HeroSection from "./components/sections/hero-section";
import MaxWidthWrapper from "./components/wrapper/maxwidth-wrapper";

function App() {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
      </MaxWidthWrapper>
      <HeroSection />
      <MaxWidthWrapper></MaxWidthWrapper>
    </>
  );
}

export default App;
