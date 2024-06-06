import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/global/footer";
import Navbar from "./components/global/navbar";
import HeroSection from "./components/sections/hero-section";
import MaxWidthWrapper from "./components/wrapper/maxwidth-wrapper";
import Home from "./components/pages/home";
import ComingSoon from "./components/pages/coming-soon";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>

      <MaxWidthWrapper>
        {/* <SponsorSection /> */}
        <Footer />
      </MaxWidthWrapper>
    </>
  );
}

export default App;
