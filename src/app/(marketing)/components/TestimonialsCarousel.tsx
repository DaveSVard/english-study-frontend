"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

import { VideoDialog } from "@/app/components";
import { testimonialsData } from "@/app/contents/marketingPageData";
import { useMounted, useWindowSize } from "@/app/lib/hooks";
import { cn } from "@/app/lib/utils";

export const TestimonialsCarousel = ({
  autoplay = false,
}: {
  autoplay?: boolean;
}) => {
  const mounted = useMounted();

  const { width } = useWindowSize();
  const [active, setActive] = useState(0);
  const testimonials = testimonialsData.testimonials;

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto antialiased font-sans px-6 lg:px-10 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
        <div className="relative h-80 sm:h-[470px] w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index)
                    ? 1
                    : width && width < 640
                    ? 0.9
                    : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 999
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <VideoDialog
                  thumbnailSrc={testimonials[active].userImage}
                  videoSrc={testimonials[active].videoSrc}
                  thumbnailAlt={testimonials[active].name}
                  animationStyle="top-in-bottom-out"
                  containerClassName="h-80 sm:h-[470px]"
                  wrapperClassName="h-full"
                  imageClassName="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -10,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            <div className="w-full flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2.5 lg:gap-5">
                <div className="size-12 rounded-full bg-llet-600 flex items-center justify-center text-white text-lg font-bold">
                  {testimonials[active].name
                    .split(" ")
                    .map((word: string) => word.charAt(0))
                    .join("")}
                </div>
                <div>
                  <h3 className="text-2xl font-medium dark:text-white/50 text-black/50">
                    {testimonials[active].name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <img
                      src="/assets/stars.png"
                      alt="stars"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm dark:text-white/50 text-black/50 font-medium">
                {testimonials[active].date}
              </p>
            </div>
            <motion.p
              initial={{
                filter: "blur(10px)",
                opacity: 0,
                y: 5,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: 0.02,
              }}
              className="text-lg font-medium capitalize text-black dark:text-white mt-10 md:mt-14"
            >
              {testimonials[active].review}
            </motion.p>
          </motion.div>
          <div className="flex gap-2 pt-10 sm:pt-15">
            <button
              onClick={handlePrev}
              className={cn(
                "p-2.5 rounded-sm flex items-center justify-center group/button",
                active > 0
                  ? "cursor-pointer bg-accent"
                  : "bg-gray-30 dark:bg-gray-15"
              )}
              disabled={active === 0}
            >
              <HiArrowSmLeft
                className={cn(
                  "h-5 w-5 group-hover/button:rotate-12 transition-transform duration-300",
                  active > 0 ? "text-white" : ""
                )}
              />
            </button>
            <button
              onClick={handleNext}
              className={cn(
                "p-2.5 rounded-sm flex items-center justify-center group/button",
                active < testimonials.length - 1
                  ? "cursor-pointer bg-accent"
                  : "bg-gray-30 dark:bg-gray-15"
              )}
              disabled={active === testimonials.length - 1}
            >
              <HiArrowSmRight
                className={cn(
                  "h-5 w-5 group-hover/button:-rotate-12 transition-transform duration-300",
                  active < testimonials.length - 1 ? "text-white" : ""
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
