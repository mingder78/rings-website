"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

export default function RingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const works = [
    "書寫身體 風動筆畫",
    "Seeding Her Feet",
    "Rings 環",
    "You House 遊居之間",
    "Zi Yuan, A Spring Stroll 字園遊步",
    "Zi Xian at TENT",
    "Foreshore 漫步潮閒",
    "Huai House 徊屋",
    "Shan yu Shu",
    "Ritual upon the Paper",
    "In-between the Post Urban",
    "Extension Park Vijversburg",
    "Zi Xian 字閒",
    "The Stage After",
    "Moving Drawings",
    "Narrative Theatre",
    "Water, Air, Ambience",
    "Narrative Rooms",
    "Hanzi on the Table",
    "The Shining Matter",
    "(un)Folded Clusters",
    "Meet the Mountains",
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
    <div className="flex min-h-screen bg-background text-foreground">
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
                    href="#"
                    className="hover:opacity-60 transition-opacity text-foreground"
                  >
                    {work}
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

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 py-12 space-y-12">
          {/* Title Section */}
          <section className="space-y-6">
            <h2 className="text-4xl font-light">
              Rings︎ <span className="text-muted-foreground">環</span>
            </h2>
            <p className="text-sm leading-relaxed space-y-2">
              <em>
                While language serves as the connector as well as the barrier;
                <br />
                While language serves as more the connector than the barrier
              </em>
            </p>
          </section>

          {/* Project Meta */}
          <section className="space-y-4 border-y border-border py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-sm">
              <div>
                <span className="text-muted-foreground">Year</span>
                <span className="ml-2">|</span>
                <span className="ml-2">2021</span>
              </div>
              <div>
                <span className="text-muted-foreground">Type</span>
                <span className="ml-2">|</span>
                <span className="ml-2">paper sculpture</span>
              </div>
              <div>
                <span className="text-muted-foreground">Material</span>
                <span className="ml-2">|</span>
                <span className="ml-2">paper in kinds</span>
              </div>
            </div>
          </section>

          {/* Exhibition Info */}
          <section className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>
                Presented in the exhibition 'Wat ik je nog wilde zeggen' (What
                else I wanted to tell you) co-curated by Rianne Zijderveld and
                city poet Dean Bowen at TENT Rotterdam.
              </strong>
            </p>
          </section>

          {/* Quote */}
          <section className="border-l-2 border-foreground pl-6 py-4 text-sm italic">
            <p>
              "A Hanzi is a poetry itself."
              <br />
              <span className="font-medium not-italic">—Anke Bangma</span>
            </p>
          </section>

          {/* Main Description */}
          <section className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>
                Zi Xian, with a specific display unfolding the fragility and
                timelessness of languages as our tools, is invited to be part of
                the dialogues seeking the lost narrative and found forms of our
                languages.
              </strong>
            </p>
            <p>
              <strong>More info will be updated soon.</strong>
            </p>
          </section>

          {/* Credits */}
          <section className="text-sm text-muted-foreground space-y-1">
            <p>
              Credit: Photo 1 by Szu-Yi Wang / Photo 2, 3, 5 by Aad Hoogendoorn
              / Photo 4 (video still) by Elyssio Ramos
            </p>
          </section>

          {/* Video/Response Section */}
          <section className="space-y-8 border-t border-border pt-8">
            <p className="text-sm leading-relaxed italic">
              <strong>
                "This expo has
                <em>
                  {" "}
                  questioned my answers and answered questions. I now realize
                  how fluid and transient language is..."
                </em>
              </strong>
              <br />
              <span className="not-italic font-medium">
                —Amara van der Elst
              </span>
            </p>

            <p className="text-sm leading-relaxed">
              Below you could find one of the video series{" "}
              <em>Dichters over de taal van de stad</em> responding to the
              exhibition.
            </p>

            <div className="space-y-4 text-sm">
              <div className="bg-muted rounded h-48 flex items-center justify-center">
                <span className="text-muted-foreground">[Embedded Video]</span>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="font-medium">Gedicht:</span> Amara van der
                  Elst
                </p>
                <p>
                  <span className="font-medium">Organisatie:</span> Paginagroots
                </p>
                <p>
                  <span className="font-medium">Beeld:</span> Elyssio Ramos
                </p>
                <p>
                  <span className="font-medium">Muziek:</span> Eetieeetds
                </p>
              </div>
              <p>
                More information at{" "}
                <a
                  href="http://www.tentrotterdam.nl/artikelen/amara-van-der-elst-alfabetsoep/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  www.tentrotterdam.nl/artikelen/amara-van-der-elst-alfabetsoep/
                </a>
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-xs text-muted-foreground pt-12 border-t border-border">
            <p>©SZU-YI WANG. 2022</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
