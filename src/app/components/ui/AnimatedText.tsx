import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/motions";

interface AnimatedTextProps {
  className?: string;
  children: ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
  duration?: number;
  value?: number;
  type?: "tween" | "spring" | "inertia";
  ease?: "easeInOut" | "easeIn" | "easeOut" | "linear";
}

export const AnimatedText = ({
  children,
  className,
  as,
  delay,
  duration = 1,
  value = 25,
  type = "tween",
  ease = "easeInOut",
}: AnimatedTextProps) => {
  const Component = motion[as];

  return (
    <Component
      variants={fadeIn({
        direction: "up",
        delay,
        duration,
        value,
        type,
        ease,
      })}
      className={className}
    >
      {children}
    </Component>
  );
};
