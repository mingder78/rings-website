import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarLayout from "@/components/SidebarLayout";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Rings — Szu-Yi Wang",
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
    <html>
      <body>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
