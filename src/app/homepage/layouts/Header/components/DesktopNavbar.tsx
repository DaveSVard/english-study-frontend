"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

import { AnimatedThemeToggle, Button, Logo } from "@/app/components";
import { cn } from "@/app/lib/utils";
import { INavItem } from "@/app/types";
import { NavBarItem } from "./NavbarItem";
import { useWindowSize } from "@/app/lib/hooks";

export const DesktopNavbar = ({ navItems }: { navItems: INavItem[] }) => {
  const { scrollY } = useScroll();
  const { width } = useWindowSize();
  const { resolvedTheme } = useTheme();

  const [showBackgroundOfNavbar, setShowBackgroundOfNavbar] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackgroundOfNavbar(true);
    } else {
      setShowBackgroundOfNavbar(false);
    }
  });

  return (
    <motion.div
      className={cn(
        "w-full flex relative justify-between px-4 py-3 rounded-md mx-auto"
      )}
      animate={{
        width: showBackgroundOfNavbar ? (width && width > 1024 ? "80%" : "90%") : "100%",
        background:
          showBackgroundOfNavbar && resolvedTheme === "dark"
            ? "#0f2027"
            : showBackgroundOfNavbar && resolvedTheme === "light"
            ? "#e0e0e0"
            : "transparent",
      }}
      transition={{
        duration: 0.4,
        type: "tween",
      }}
    >
      <AnimatePresence>
        {showBackgroundOfNavbar && (
          <motion.div
            key={String(showBackgroundOfNavbar)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="absolute inset-0 h-full w-full bg-trade-sentry-800 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-xl"
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row gap-3 xl:gap-5 items-center">
        <Logo />

        {/* Navbar Items */}
        <div className="flex items-center gap-1.5">
          {navItems.map((item) => (
            <NavBarItem key={item.id} linkItem={item} />
          ))}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        {/* Theme Toggle */}
        <AnimatedThemeToggle />

        {/* Actions */}
        <div className="flex gap-2 items-center">
          <Button
            className="border border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/10"
            size="xl"
          >
            Sign In
          </Button>
          <Button
            className="bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/90"
            size="xl"
          >
            Join Us
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
