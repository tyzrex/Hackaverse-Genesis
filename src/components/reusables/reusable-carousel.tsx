import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselNextCustom,
  CarouselPrevious,
  CarouselPreviousCustom,
} from "../ui/carousel";
import React from "react";

export default function ReusableCarousel<T>({
  data,
  renderItem,
}: {
  data: T[];
  renderItem: (item: T) => JSX.Element;
}) {
  return (
    <>
      <Carousel className="w-full">
        <div className="relative lg:absolute lg:right-0 lg:-top-14 h-[40px] mb-5 flex items-center justify-end ">
          <CarouselPreviousCustom className="top-0 right-10 hover:text-green-500" />
          <CarouselNextCustom className="top-0  hover:text-green-500" />
        </div>
        <CarouselContent>
          {data.map((item, index) => (
            <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
