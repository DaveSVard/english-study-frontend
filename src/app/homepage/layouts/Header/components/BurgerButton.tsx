import { motion } from "framer-motion";
import React from "react";

interface IBurgerButton {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const BurgerButton = ({ open, setOpen }: IBurgerButton) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex flex-col items-end gap-2 lg:hidden"
    >
      <motion.span
        className="block w-[45px] h-[2px] bg-black dark:bg-white"
        animate={
          open
            ? { width: "28px", rotate: 45, y: 5 }
            : { width: "45px", rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-10 h-[2px] bg-black dark:bg-white"
        animate={
          open
            ? { width: "28px", rotate: -45, y: -5 }
            : { width: "40px", rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};
