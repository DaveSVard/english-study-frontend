"use client";

import { motion } from "framer-motion";

import { DesktopNavbar, MobileNavbar } from "./components";
import { navItems } from "@/app/contents/marketingPageData";

export const Header = () => {
  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: [0.6, 0.05, 0.1, 0.9],
        duration: 0.8,
      }}
      className="xxl-custom-container fixed z-[999] top-4 inset-x-0 w-full"
    >
      <div className="hidden lg:block w-full">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="flex h-full w-full items-center lg:hidden">
        <MobileNavbar navItems={navItems} />
      </div>
    </motion.nav>
  );
};
