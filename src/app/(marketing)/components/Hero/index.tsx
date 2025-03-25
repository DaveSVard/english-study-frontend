"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { AnimatedText, Button, InViewContainer } from "@/app/components";
import { BackgroundGrids, CollisionMechanism } from "./components";
import { heroData } from "@/app/contents/marketingPageData";
import { useWindowSize } from "@/app/lib/hooks";
import { fadeIn } from "@/app/lib/motions";
import { IHero } from "@/app/types";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowSize();

  const { heading, subHeading, CTAs, image } = heroData as IHero;

  const getCollisionElement = (
    initialXValues: number[],
    translateXValues: number[],
    duration: number
  ) => ({
    initialX:
      width && width > 768
        ? initialXValues[0]
        : width && width > 600
        ? initialXValues[1]
        : initialXValues[2],
    translateX:
      width && width > 768
        ? translateXValues[0]
        : width && width > 600
        ? translateXValues[1]
        : translateXValues[2],
    duration,
    delay: 2.5,
    repeatDelay: 3,
  });

  const collisionElements = [
    getCollisionElement([-300, -100, -500], [500, 700, 200], 7),
    getCollisionElement([-200, -100, -600], [800, 1000, 400], 4),
    getCollisionElement([200, -100, -400], [1200, 1000, 600], 5),
    getCollisionElement([0, -100, -200], [1000, 1000, 800], 6),
  ];

  return (
    <InViewContainer amount={0.15}>
      <div
        ref={parentRef}
        className="relative flex flex-col items-center justify-center overflow-hidden pt-36 md:pt-40 pb-14 md:pb-20"
      >
        <BackgroundGrids />

        {collisionElements.map((element, index) => (
          <CollisionMechanism
            key={index}
            beamOptions={element}
            containerRef={containerRef}
            parentRef={parentRef}
          />
        ))}

        <div className="xxl-custom-container w-full">
          <AnimatedText
            as="h1"
            className="text-balance relative z-10 mx-auto mt-4 max-w-xl md:max-w-4xl text-center font-semibold tracking-tight text-black dark:text-white text-3xl xs:text-4xl md:text-6xl lg:text-7xl"
          >
            <Balancer>{heading}</Balancer>
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.25}
            className="text-balance relative z-10 mx-auto mt-4 md:mt-8 max-w-md md:max-w-lg px-4 text-center text-sm xs:text-base text-gray-600 dark:text-gray-200"
          >
            <Balancer>{subHeading}</Balancer>
          </AnimatedText>

          <motion.div
            variants={fadeIn({
              direction: "up",
              delay: 0.5,
              duration: 1,
              value: 25,
              type: "tween",
              ease: "easeInOut",
            })}
            className="relative w-full z-10 mb-10 mt-8 flex flex-col xs:flex-row items-center justify-center gap-4 px-4 xxs:px-8 md:mb-20"
          >
            {CTAs.map((CTA) => (
              <Button
                asChild
                key={CTA.id}
                size="xl"
                variant={CTA.variant}
                className="w-full xs:w-auto"
              >
                <Link href={CTA.link}>{CTA.title}</Link>
              </Button>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn({
              direction: "up",
              delay: 0.75,
              duration: 1,
              value: 50,
              type: "tween",
              ease: "easeInOut",
            })}
            ref={containerRef}
            className="relative w-full h-auto rounded-[32px] border light-border-color bg-neutral-100 p-2 backdrop-blur-lg dark:bg-neutral-800/50 md:p-4"
          >
            <div className="rounded-[24px] w-full h-auto border light-border-color bg-white p-2 dark:bg-black">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-[20px] object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </InViewContainer>
  );
}
