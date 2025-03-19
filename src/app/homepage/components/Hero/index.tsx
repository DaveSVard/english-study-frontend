"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { IHero } from "@/app/types";
import { hero } from "@/app/contents/homepageData";
import { Button, InViewContainer } from "@/app/components";
import { BackgroundGrids, CollisionMechanism } from "./components";
import { fadeIn } from "@/app/lib/motions";

export function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const { heading, subHeading, CTAs, image } = hero as IHero;

  const collisionElements = [
    {
      initialX: -300,
      translateX: 500,
      duration: 7,
      delay: 2.5,
      repeatDelay: 3,
    },
    {
      initialX: -200,
      translateX: 800,
      duration: 4,
      delay: 2.5,
      repeatDelay: 3,
    },
    {
      initialX: 200,
      translateX: 1200,
      duration: 5,
      delay: 2.5,
      repeatDelay: 3,
    },
    {
      initialX: 0,
      translateX: 1000,
      duration: 6,
      delay: 2.5,
      repeatDelay: 3,
    },
  ];

  return (
    <InViewContainer amount={0.15}>
      <div
        ref={parentRef}
        className="relative flex  flex-col items-center justify-center overflow-hidden py-36 md:py-40"
      >
        <BackgroundGrids />

        {collisionElements.map((element) => (
          <CollisionMechanism
            key={element.initialX}
            beamOptions={element}
            containerRef={containerRef}
            parentRef={parentRef}
          />
        ))}

        <motion.h2
          variants={fadeIn({
            direction: "up",
            delay: 0,
            duration: 1,
            value: 25,
            type: "tween",
            ease: "easeInOut",
          })}
          className="text-balance relative z-10 mx-auto mt-4 max-w-xl md:max-w-4xl text-center font-semibold tracking-tight text-black dark:text-white text-3xl xs:text-4xl md:text-6xl lg:text-7xl"
        >
          <Balancer>{heading}</Balancer>
        </motion.h2>
        <motion.p
          variants={fadeIn({
            direction: "up",
            delay: 0.25,
            duration: 1,
            value: 25,
            type: "tween",
            ease: "easeInOut",
          })}
          className="relative z-10 mx-auto mt-4 md:mt-8 max-w-md md:max-w-lg px-4 text-center text-sm xs:text-base text-gray-600 dark:text-gray-200"
        >
          {subHeading}
        </motion.p>

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
          className="relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4"
        >
          <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1024}
              className="rounded-[20px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </InViewContainer>
  );
}
