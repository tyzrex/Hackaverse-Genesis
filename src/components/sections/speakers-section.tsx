import { speakerData } from "@/constants/speakers";
import SectionHeader from "../typography/section-header";
import SectionInfo from "../typography/section-info";
import PeopleCard from "../reusables/people-card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ReusableCarousel from "../reusables/reusable-carousel";

export default function MentorsSection() {
  return (
    <>
      <section className="py-10 md:py-20 flex flex-col items-center justify-center container">
        <SectionHeader headingText="OUR SPEAKERS" />
        <SectionInfo
          className="mt-4 mb-10"
          subheader="The themes of our Hackathon revolves around Sustainable Development Goals (SDGs), specifically focusing on four key goals:"
        />
        <ReusableCarousel
          data={speakerData}
          renderItem={(speaker) => (
            <CarouselItem
              key={speaker.id}
              className="basis-4/6 sm:basis-1/2 lg:basis-1/4"
            >
              <PeopleCard
                id={speaker.id}
                key={speaker.id}
                name={speaker.name}
                designation={speaker.designation}
                photo={speaker.image}
              />
            </CarouselItem>
          )}
        />
      </section>
    </>
  );
}
