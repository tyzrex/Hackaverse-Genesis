import GlobeSection from "../sections/globe-section";
import CTAButton from "../reusables/cta-button";
import CTADiscordButton from "../reusables/cta-discord";

export default function ComingSoon() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1
          className="italic text-[16px] mt-10 font-[Orbitron]
        w sm:text-xl md:text-5xl md:not-italic lg:text-7xl font-semibold text-clip bg-clip-text text-white"
        >
          Coming Soon
        </h1>

        <GlobeSection />
      </div>
    </>
  );
}
