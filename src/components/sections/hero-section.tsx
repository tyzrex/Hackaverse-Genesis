import HeroHeader from "../typography/hero-header";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import Hand from "@/assets/hand.png";
import SectionWrapper from "../wrapper/section-wrapper";

export default function HeroSection() {
  return (
    <>
      <SectionWrapper className="overflow-hidden md:py-32">
        <MaxWidthWrapper>
          <HeroHeader />
        </MaxWidthWrapper>
        <div>
          <img
            src={Hand}
            alt="Hand"
            className="2xl:max-w-[1568px] max-h-[767px] mt-[-4rem] sm:mt-[-8rem]  mr-[-3rem] sm:mr-[-6rem] float-right 2xl:mr-[-25rem]"
          />
        </div>
      </SectionWrapper>
    </>
  );
}
