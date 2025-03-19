import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IMotionContainer {
  amount: number;
  once?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
}

export const InViewContainer = ({
  amount,
  children,
  className,
  once = true,
  id,
}: IMotionContainer) => {
  return (
    <motion.div
      id={id}
      initial="hidden"
      exit="hidden"
      whileInView="show"
      viewport={{ amount: amount, once: once }}
      className={className}
    >
      {children}
    </motion.div>
  );
};