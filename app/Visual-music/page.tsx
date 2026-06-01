"use client";

import ImageLinksComponent from "@/components/ImageLinks";
import Visual from "@/components/Visual";
import InfoType1 from "@/components/InfoType1";
import TextTitle1 from "@/components/TextTitle1";
import Note from "@/components/Note";
import React, { useState } from "react";

const images = ["musicscape-81.png", "musicscape-71.png", "musicscape-79.png"];

export default function RingsPage() {
  return (
    <div className="font-ebgaramond min-h-screen bg-background text-foreground md:pl-60">
      {/* Main Content */}

      <main className="">
        <div className="py-6 sm:py-12 px-8  space-y-12 bg-slate-0">
          <TextTitle1
            title="Interweave the languages between the rhythm & the visual, deliver the spirit of the dreamlike & the real."
            infos={[
              "In close collaborations with various musicians/sound artists, I work on visuals, album designs, music videos (moving images), portraits, and concert photography for their concepts.  I investigate the philosophy and personality of each artist and interpret the concept behind the music to achieve the musical narrative we’d like to communicate through (more than) visual elements.",
            ]}
          />
          <Visual
            title="In Between The Whispers, musicscapes - S’yo Fang"
            infos={[
              "A dreamy drawing series for S’yo’s exhibition for 2022 SONIC Award, at International Society of Jazz Composers and Arrangers.",
              "Colours were added to elaborate S’yo’s abundant imagination in the layers of his compositions while emphasizing the tensions and flow derived from the dialogues between music & poetry.",
              "The visuals are based on my artwork for the poetry collection «In between the Whispers», which will be released in late 2022.",
            ]}
            types={[
              "Artist | S’yo Fang",
              "Project title | «In Between The Whispers» musicscape (part of the poetry collection for the album «I Prefer»)",
              "Design | illustration, visual design by Szu-Yi Wang",
              "Year | 2022",
            ]}
            more="More information will be updated soon"
            link=""
            url=""
            image1="musicscape-55a.png"
            imagesLoop={["musicscape-26.png", "musicscape-85.png"]}
            images2={[
              "musicscape-70.png",
              "musicscape-30s.png",
              "musicscape-82.png",
            ]}
            imagesLoop2={[
              "musicscape-81.png",
              "musicscape-71.png",
              "musicscape-79.png",
            ]}
          />
          {/* Title Section */}
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>

          <Visual
            title="Sister - Sanne Rambags"
            infos={[
              "Listening, deeply, to the emotion of the sisterhood—which notion can be perceived in a broader sense of the word—in Sanne’s music, I developed the interplay between the pureness of the geometric forms, the textures, and the colours while delivering the soft strength embedded in her voice and lyrics. The visuals subtly respond to the concepts in each of her songs.",
              "A beautiful journey of learning from Sanne’s unique sensibility and energy through her music. I translated those vibes into the artwork and the organization of the texts—like a collection of her personal poetry.",
            ]}
            types={[
              "Artist | Sanne Rambags",
              "Album title | «Sister»",
              "Label | SONNA Records",
              "Illustration | Djenné Fila",
              "Design | album design (CD & LP), booklet, printing, EP images by Szu-Yi Wang",
              "Year | 2022",
            ]}
            more="Find more information of the release "
            link="here"
            url="https://linktr.ee/sannerambags"
            image1="Sister_cover.png"
            imagesLoop={["Screenshot-2022-11-06-at-20.09.00.png"]}
            images2={[
              "Screenshot-2022-11-06-at-20.09.14.png",
              "EPs-06.jpg",
              "EPs-01.jpg",
              "LP_12Inch-labelAB-03.jpg",
              "aaSister_LP_12Inch-Gatefold_4mm-spine_GD30OB2-N_insideaaaa.jpg",
            ]}
            imagesLoop2={[
              "Screenshot-2022-11-06-at-20.08.37.png",
              "Screenshot-2022-11-06-at-20.08.49.png",
            ]}
          />
          {/* Title Section */}
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>

          <Visual
            title="In Between The Whispers, musicscapes - S’yo Fang"
            infos={[
              "A dreamy drawing series for S’yo’s exhibition for 2022 SONIC Award, at International Society of Jazz Composers and Arrangers.",
              "Colours were added to elaborate S’yo’s abundant imagination in the layers of his compositions while emphasizing the tensions and flow derived from the dialogues between music & poetry.",
              "The visuals are based on my artwork for the poetry collection «In between the Whispers», which will be released in late 2022.",
            ]}
            types={[
              "Artist | S’yo Fang",
              "Project title | «In Between The Whispers» musicscape (part of the poetry collection for the album «I Prefer»)",
              "Design | illustration, visual design by Szu-Yi Wang",
              "Year | 2022",
            ]}
            more="More information will be updated soon"
            link=""
            url=""
            image1="musicscape-55a.png"
            imagesLoop={["musicscape-26.png", "musicscape-85.png"]}
            images2={["musicscape-26.png", "musicscape-85.png"]}
            imagesLoop2={["musicscape-26.png", "musicscape-85.png"]}
          />
          {/* Title Section */}
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>

          {/* Footer */}
          <ImageLinksComponent />
          <footer className="text-xs text-muted-foreground pt-12 border-t border-border">
            <p>©SZU-YI WANG. 2026</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
