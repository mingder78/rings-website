import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarLayout from "@/components/SidebarLayout";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair", // 定義 CSS 變數以便 Tailwind 使用
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Szu-Yi Wang",
  description:
    "Rings: A paper sculpture project exploring language as both connector and barrier. Year 2021.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={playfair.variable}>
      <body>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
