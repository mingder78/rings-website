import React from "react";
import type { Metadata } from "next";
import SidebarLayout from "@/components/SidebarLayout";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { Baskervville } from "next/font/google";

import "./globals.css";

const baskervville = Baskervville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskervville", // 定義 CSS 變數以便 Tailwind 使用
});
const ebGaramond = localFont({
  src: [
    {
      path: "./fonts/EBGaramond-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EBGaramond-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-ebgaramond",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair", // 定義 CSS 變數以便 Tailwind 使用
});
export const metadata: Metadata = {
  title: "szu yi wang",
  description:
    "Rings: A paper sculpture project exploring language as both connector and barrier. Year 2021.",
  generator: "v0.app+ming",
  icons: {
    icon: "favicon.ico", // path to your icon file
    //  apple: "/images/apple-icon.png", // path to your apple touch icon file
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={ebGaramond.variable}>
        <SidebarLayout />
        <main className="h-full overflow-y-auto z-0">{children}</main>
      </body>
    </html>
  );
}
