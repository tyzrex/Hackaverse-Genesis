import HeroHeader from "../typography/hero-header";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import Hand from "@/assets/hand.png";

export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col h-full overflow-hidden">
        <MaxWidthWrapper>
          <HeroHeader />
        </MaxWidthWrapper>
        <div>
          <img
            src={Hand}
            alt="Hand"
            className="2xl:max-w-[1568px] max-h-[767px] mt-[-6rem] sm:mt-[-8rem] lg:mt-[-18rem] mr-[-3rem] sm:mr-[-6rem] float-right"
          />
        </div>
      </section>
    </>
  );
}
