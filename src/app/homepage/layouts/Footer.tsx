"use client"

import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) return null;

  return (
    <div>Footer</div>
  )
}
