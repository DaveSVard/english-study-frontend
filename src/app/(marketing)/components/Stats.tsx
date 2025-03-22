"use client";

import {
  AnimatedText,
  IconContainer,
  InViewContainer,
  Squares,
} from "@/app/components";
import { statsData } from "@/app/contents/homepageData";
import { opacityAnimation } from "@/app/lib/motions";
import { cn } from "@/app/lib/utils";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Balancer } from "react-wrap-balancer";

export const Stats = () => {
  const { stats } = statsData;

  return (
    <InViewContainer amount={0.2} className="py-14 md:py-20">
      <AnimatedText as="h2" className="section-heading">
        <Balancer>{statsData.heading}</Balancer>
      </AnimatedText>

      <AnimatedText as="p" delay={0.25} className="section-subheading">
        <Balancer>{statsData.subHeading}</Balancer>
      </AnimatedText>

      <motion.div
        variants={opacityAnimation({
          delay: 0.5,
          duration: 1,
        })}
        className="mx-auto max-w-7xl border border-neutral-200/50 dark:border-neutral-700 mt-16 rounded-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={"card" + index}
              className={cn(
                "group/card relative overflow-hidden p-6 lg:p-10",
                index !== stats.length - 1 &&
                  "border-b border-neutral-200/50 dark:border-neutral-700 lg:border-b-0 lg:border-r"
              )}
            >
              <Squares size={20} />

              <div className="absolute right-0 top-0 h-10 w-10 overflow-hidden border-b border-l bg-white shadow-[-3px_4px_9px_0px_rgba(0,0,0,0.14)] transition duration-200 group-hover/card:-translate-y-14 group-hover/card:translate-x-14 border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-[-3px_4px_9px_0px_rgba(255,255,255,0.2)]">
                <div className="absolute left-0 top-0 h-[1px] w-[141%] origin-top-left rotate-45 bg-neutral-100 dark:bg-neutral-800" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <IconContainer>
                  <item.icon className="text-white h-full" />
                </IconContainer>

                <Stat
                  num={item.value}
                  nextSuffix={item.nextSuffix}
                  decimals={0}
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-black dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </InViewContainer>
  );
};

const Stat = ({
  num,
  prevSuffix,
  nextSuffix,
  decimals = 0,
}: {
  num: number;
  prevSuffix?: string;
  nextSuffix?: string;
  decimals?: number;
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });

    hasAnimated.current = true;
  }, [num, decimals, isInView]);

  return (
    <div className="w-auto flex flex-col lg:flex-row items-center gap-10 xl:gap-14">
      <div className="w-auto text-center">
        <p className="capitalize text-4xl lg:text-5xl font-bold text-black dark:text-white">
          <span className="text-black dark:text-white">{prevSuffix}</span>
          <span ref={ref}></span>
          <span className="text-black dark:text-white">{nextSuffix}</span>
        </p>
      </div>
    </div>
  );
};
