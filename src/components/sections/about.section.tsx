import React from "react";
import { SparklesCore } from "../ui/sparkles";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import SectionHeader from "../typography/section-header";
import SectionWrapper from "../wrapper/section-wrapper";

export default function About() {
  return (
    <SectionWrapper className="md:py-36 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#d13eF0"
        />
      </div>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center ">
          <SectionHeader headingText="ABOUT THE EVENT" />
          <h3 className="italic text-[18px] mt-4 sm:text-xl md:text-3xl md:not-italic lg:text-5xl font-semibold text-clip bg-clip-text text-transparent bg-gradient-to-r from-[#B45FBA] via-[#CC15D9] to-[#B45FBA]">
            "IGNITE IDEAS, IGNITE CHANGE"
          </h3>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-[Orbitron] mt-10 md:max-w-2xl text-left sm:text-center">
            Welcome to Hackaverse: Genesis where innovation intersects with
            impact.
          </h4>

          <p className="text-[14px] md:text-xl mt-5 max-w-xl text-left sm:text-center lg:max-w-2xl">
            With our motto, "Ignite Ideas, Ignite Change," we're dedicated to
            fostering creativity and catalyzing meaningful transformation. In a
            world marked by pressing societal issues, Hackaverse: Genesis stands
            as a beacon of collaboration and ingenuity. Our mission is clear: to
            unite diverse talents and empower them to forge solutions that not
            only tackle today's challenges but also pave the path for lasting
            change.
          </p>
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
