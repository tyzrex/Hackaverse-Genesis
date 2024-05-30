import HeroLogo from "@/assets/header.png";
import Globe from "../elements/globe";
import GlobeSection from "../sections/globe-section";

export default function HeroHeader() {
  return (
    <>
      <div className="flex flex-col items-center py-8 md:py-16 lg:py-32">
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
        <h2
          className="italic text-[16px] mt-5 hidden md:block
          w sm:text-lg md:text-3xl md:not-italic lg:text-5xl font-semibold text-bottom"
        >
          "IGNITE IDEAS, IGNITE CHANGE"
        </h2>
        <GlobeSection />
      </div>
    </>
  );
}
