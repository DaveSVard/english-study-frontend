"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";

import { AnimatedThemeToggle, Button, Logo } from "@/app/components";
import { cn } from "@/app/lib/utils";
import { INavItem } from "@/app/types";
import { BurgerButton } from "./BurgerButton";
export const MobileNavbar = ({ navItems }: { navItems: INavItem[] }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string
  ) => {
    if (link.includes("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "flex justify-between bg-transparent items-center w-full rounded-md transition px-2.5 py-1.5 duration-200",
        showBackground &&
          "dark:bg-llet-800 bg-[#e0e0e0] shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
      )}
    >
      <Logo />
      <BurgerButton open={open} setOpen={setOpen} />

      {open && (
        <div className="fixed inset-0 bg-white dark:bg-llet-950 z-50 flex flex-col items-start justify-start gap-y-5 pt-4 text-xl px-6">
          <div className="flex items-center justify-between w-full px-2.5 py-1.5">
            <Logo />
            <BurgerButton open={open} setOpen={setOpen} />
          </div>

          <div className="flex flex-col items-start gap-y-5 pl-2.5">
            {/* Navbar Items */}
            <div className="w-full flex flex-col items-start justify-start gap-[14px] my-5">
              {navItems.map((navItem: INavItem, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  onClick={(e) => handleClick(e, navItem.link)}
                  target={navItem.external ? "_blank" : undefined}
                  className="relative"
                >
                  <span className="block text-[26px] text-black dark:text-white">
                    {navItem.title}
                  </span>
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <AnimatedThemeToggle />

            {/* Actions */}
            <div className="flex flex-row w-full items-start gap-2.5">
              <Button asChild variant="accent" size="xl">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
