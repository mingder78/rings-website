"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";
import { works, otherSections } from "../app/constances";
import SocialIcons from "@/components/SocialMediaIcons";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 right-4 z-50 md:hidden p-2 hover:opacity-60 transition-opacity"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X size={24} /> : <Plus size={24} />}
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar Navigation */}
      <aside
        className={`min-w-[240px] fixed left-0 top-0 h-screen w-48 border-r border-border bg-background overflow-y-auto p-6 z-40 transition-transform md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-sm font-medium">
              <span className="block">WANG, 王</span>
              <span className="block">SZU-YI 思懿</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Work
            </div>
            <ul className="space-y-2 text-sm">
              {works.map((work, idx) => (
                <li key={idx}>
                  <a
                    href={work[1]}
                    className="hover:opacity-60 transition-opacity text-foreground"
                  >
                    {work[0]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Other Sections */}
          <nav className="space-y-1">
            <ul className="space-y-2 text-sm">
              {otherSections.map((section, idx) => (
                <li key={idx}>
                  <a
                    href={section[1]}
                    className="hover:opacity-60 transition-opacity text-foreground"
                  >
                    {section[0]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <SocialIcons />
        </div>
      </aside>

      {/* Content */}
      <div className="flex">
        <main>{children}</main>
      </div>
    </div>
  );
}
