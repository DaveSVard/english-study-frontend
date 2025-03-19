import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "./providers/ThemeProvider";
import { TopLoader } from "./components";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LLET",
  description: "LLET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-white dark:bg-llet-950"
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <TopLoader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
