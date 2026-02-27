import React from "react";
import type { Metadata } from "next";
import SidebarLayout from "@/components/SidebarLayout";
import { Playfair_Display } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

const font = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
  variable: "--font-cormorant", // 定義 CSS 變數以便 Tailwind 使用
});

import "./globals.css";

const playfair = Cormorant_Garamond({
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
      <body className={font.variable}>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
