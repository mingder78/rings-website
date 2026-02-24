"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const works = [
    ["書寫身體 風動筆畫", "#"],
    ["Seeding Her Feet", "#"],
    ["Rings 環", "rings"],
    ["You House 遊居之間", "#"],
    ["Zi Yuan, A Spring Stroll 字園遊步", "#"],
    ["Zi Xian at TENT", "#"],
    ["Foreshore 漫步潮閒", "#"],
    ["Huai House 徊屋", "#"],
    ["Shan yu Shu", "#"],
    ["Ritual upon the Paper", "#"],
    ["In-between the Post Urban", "#"],
    ["Extension Park Vijversburg", "#"],
    ["Zi Xian 字閒", "#"],
    ["The Stage After", "#"],
    ["Moving Drawings", "#"],
    ["Narrative Theatre", "#"],
    ["Water, Air, Ambience", "#"],
    ["Narrative Rooms", "#"],
    ["Hanzi on the Table", "#"],
    ["The Shining Matter", "#"],
    ["(un)Folded Clusters", "#"],
    ["Meet the Mountains", "#"],
  ];

  const otherSections = [
    "Film",
    "Photo galleries",
    "Visual music",
    "News",
    "Information",
    "cv",
  ];

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
        className={`fixed left-0 top-0 h-screen w-48 border-r border-border bg-background overflow-y-auto p-6 z-40 transition-transform md:static md:translate-x-0 ${
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
                    href="#"
                    className="hover:opacity-60 transition-opacity text-foreground"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex gap-2 text-lg">
            <a href="#" className="hover:opacity-60 transition-opacity">
              ︎
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              ︎
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              ︎
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              ︎
            </a>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
