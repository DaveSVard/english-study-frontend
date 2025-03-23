"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

import { useWindowSize } from "@/app/lib/hooks";
import { opacityAnimation } from "@/app/lib/motions";
import { testimonialsData } from "@/app/contents/marketingPageData";
import { AnimatedText, InViewContainer, Marquee } from "@/app/components";

export const Testimonials = () => {
  const { width } = useWindowSize();
  const { heading, subheading, testimonials } = testimonialsData;

  const [testimonialsChunks, setTestimonialChunks] = useState<
    {
      id: number;
      review: string;
      name: string;
      profession: string;
    }[][]
  >([]);
  const [marqueeDurations, setMarqueeDurations] = useState<string[]>(["25s"]);

  useEffect(() => {
    if (width) {
      let chunkSize;
      if (width >= 968) {
        chunkSize = Math.ceil(testimonials.length / 3);
        setTestimonialChunks([
          testimonials.slice(0, chunkSize),
          testimonials.slice(chunkSize, 2 * chunkSize),
          testimonials.slice(2 * chunkSize),
        ]);
        setMarqueeDurations(["20s", "25s", "15s"]);
      } else if (width >= 640) {
        chunkSize = Math.ceil(testimonials.length / 2);
        setTestimonialChunks([
          testimonials.slice(0, chunkSize),
          testimonials.slice(chunkSize),
        ]);
        setMarqueeDurations(["30s", "30s"]);
      } else {
        setTestimonialChunks([testimonials]);
        setMarqueeDurations(["60s"]);
      }
    }
  }, [width, testimonials]);

  return (
    <InViewContainer
      amount={0.2}
      className="xl-custom-container py-16 md:py-20"
    >
      <AnimatedText as="h2" className="section-heading">
        <Balancer>{heading}</Balancer>
      </AnimatedText>

      <AnimatedText as="p" delay={0.25} className="section-subheading">
        <Balancer>{subheading}</Balancer>
      </AnimatedText>

      <motion.div
        variants={opacityAnimation({
          delay: 0.5,
          duration: 2,
        })}
        className="max-h-[950px] relative flex gap-4 items-center justify-center overflow-hidden mt-20 [mask-image:linear-gradient(to_bottom,transparent,white_5%,white_80%,transparent)]"
      >
        {testimonialsChunks.map((chunk, index) => (
          <Marquee
            key={index}
            pauseOnHover
            className="gap-4"
            style={{ "--duration": marqueeDurations[index] }}
          >
            {chunk.map((review, reviewIndex) => (
              <div
                key={reviewIndex}
                className="h-full p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] rounded-xl border light-border-color"
              >
                <div className="flex flex-col justify-between h-full gap-4">
                  <p className="h-full text-base font-semibold leading-6 text-black dark:text-white py-2">
                    {review.review}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-llet-600 flex items-center justify-center text-white text-lg font-bold">
                        {review.name
                          .split(" ")
                          .map((word: string) => word.charAt(0))
                          .join("")}
                      </div>
                      <div className="">
                        <h3 className="text-gray-45 dark:text-gray-30 text-sm font-medium capitalize">
                          {review.name}
                        </h3>
                        <p className="text-gray-45 dark:text-gray-30 text-sm font-medium capitalize">
                          {review.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        ))}
      </motion.div>
    </InViewContainer>
  );
};
