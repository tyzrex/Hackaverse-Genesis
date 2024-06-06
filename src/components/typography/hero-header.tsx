import HeroLogo from "@/assets/header.png";
import Globe from "../elements/globe";
import GlobeSection from "../sections/globe-section";
import CTAButton from "../reusables/cta-button";
import CTADiscordButton from "../reusables/cta-discord";
import { useEffect } from "react";

export default function HeroHeader() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <img
          src={HeroLogo}
          alt="Hero Header"
          className="sm:min-w-[388px] xl:max-w-[1172px] h-full object-cover object-center"
        />
        <h2
          className="italic text-[16px] mt-5
        w sm:text-xl md:text-3xl md:not-italic lg:text-5xl font-semibold text-clip bg-clip-text text-transparent bg-gradient-to-r from-[#B45FBA] via-[#CC15D9] to-[#B45FBA]"
        >
          "IGNITE IDEAS, IGNITE CHANGE"
        </h2>

        <div
          className="apply-button"
          data-hackathon-slug="hackaversev1"
          data-button-theme="dark"
          style={{
            height: "44px",
            width: "300px",
          }}
        ></div>
        <CTADiscordButton className="bg-[#5865F2] md:py-8 md:px-6 py-4 px-3 hover:bg-white hover:text-black transition-colors duration-300 text-white font-[Orbitron] mt-5 w-[300px] text-lg md:text-2xl" />
        <GlobeSection />
      </div>
    </>
  );
}
