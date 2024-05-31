import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import SectionHeader from "../typography/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import MaxWidthWrapper from "../wrapper/maxwidth-wrapper";
import { cn } from "@/lib/utils";

export const HighlightsSection = ({
  products,
}: {
  products: {
    title: string;
    description: string;
    background: string;
  }[];
}) => {
  console.log(products);
  const firstRow = products;
  const secondRow = products;
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -2000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 500]),
    springConfig
  );
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex items-center w-full justify-center">
          <SectionHeader headingText="HIGHLIGHTS" />
        </div>
      </MaxWidthWrapper>
      <div
        ref={ref}
        className="h-[210vh] sm:h-[210vh] md:h-[220vh] xl:h-[200vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row  mb-20 space-x-20 ">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    description: string;
    background: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-auto w-auto relative flex-shrink-0"
    >
      <Card
        className={cn(
          "px-[24px] pt-[24px] pb-[127px] w-[530px] rounded-none border-none h-[500px] text-white",
          product.background
        )}
      >
        <CardHeader>
          <CardTitle className="text-center">{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">{product.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
