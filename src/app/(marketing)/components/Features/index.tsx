"use client";

import { InViewContainer } from "@/app/components/InViewContainer";
import { AnimatedText } from "@/app/components/ui/AnimatedText";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/BentoGrid";
import { featuresData } from "@/app/contents/marketingPageData";
import { opacityAnimation } from "@/app/lib/motions";
import { motion } from "framer-motion";

export const Features = () => {
  const { features, heading, subheading } = featuresData;

  return (
    <InViewContainer
      amount={0.2}
      className="xl-custom-container py-16 md:py-20"
    >
      <AnimatedText as="h2" className="section-heading">
        {heading}
      </AnimatedText>
      <AnimatedText as="p" delay={0.25} className="section-subheading">
        {subheading}
      </AnimatedText>
      <motion.div
        variants={opacityAnimation({
          delay: 0.25,
          duration: 0.5,
        })}
      >
        <BentoGrid className="md:auto-rows-[20rem] mt-10 sm:mt-15">
          {features.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </InViewContainer>
  );
};
