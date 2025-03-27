"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { cn } from "@/app/lib/utils";
import { AnimatedText, InViewContainer } from "@/app/components";
import Balancer from "react-wrap-balancer";
import { faqData } from "@/app/contents/marketingPageData";
import { fadeIn } from "@/app/lib/motions";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);
  const { heading, faqs } = faqData;

  return (
    <InViewContainer
      amount={0.15}
      id="faq"
      className="xxl-custom-container w-full px-4 py-20 md:px-8 md:py-40"
    >
      <AnimatedText as="h2" className="section-heading">
        <Balancer>{heading}</Balancer>
      </AnimatedText>

      <div className="mx-auto w-full max-w-3xl mt-20">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </InViewContainer>
  );
}

const FAQItem = ({
  index,
  question,
  answer,
  setOpen,
  open,
}: {
  index: number;
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      variants={fadeIn({
        direction: "up",
        type: "tween",
        delay: 0.2 + index * 0.1,
        duration: 1,
        value: 20,
      })}
      className="mb-8 w-full cursor-pointer rounded-lg bg-gray-100 p-4 shadow-input dark:bg-llet-700"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200 mb-2">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                {answer.split("").map((line, index) => (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: index * 0.005,
                    }}
                    key={index}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <HiChevronUp
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-black transition-all duration-200 dark:text-white",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <HiChevronDown
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-black transition-all duration-200 dark:text-white",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};
