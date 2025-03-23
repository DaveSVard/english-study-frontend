"use client";

import Link from "next/link";
import { Logo } from "@/app/components";
import { socials } from "@/app/contents/marketingPageData";

export const Footer = () => {
  return (
    <div className="xxl-custom-container">
      <div className="border-t border-llet-200 dark:border-llet-800 py-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-6 gap-x-10 w-full">
          <Logo />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 LLET. All rights reserved.
          </p>
          <div className="flex items-center gap-x-3.5 text-2xl">
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                className="hover:text-llet-200 hover:mb-1.5 transition-all duration-200"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};