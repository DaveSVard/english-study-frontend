"use client"

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { AnimatedThemeToggle } from '../components/AnimatedThemeToggle';

export const Header = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  if (isAuthPage) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: visible ? 0 : '-100%',
        }}
        animate={{
          y: visible ? 0 : '-100%',
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "tween",
        }}
        className="sticky top-0 z-[999] py-6 lg:px-10"> {/* bg-black/5 dark:bg-white/5 backdrop-blur-3xl */}

        <div className="w-full max-w-8xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-6xl font-bold leading-none">
              LLET
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Button className='border border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/10' size="xl">
                  Sign In
                </Button>
                <Button className='bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/90' size="xl">
                  Join Us
                </Button>
              </div>

              {/* Theme Toggle */}
              <AnimatedThemeToggle />
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
