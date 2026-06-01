"use client";

import ImageLinksComponent from "@/components/ImageLinks";
import ImagesCol from "@/components/ImagesCol";
import InfoType1 from "@/components/InfoType1";
import TextTitle1 from "@/components/TextTitle1";
import Note from "@/components/Note";
import React, { useState } from "react";

const imagesInLoop = [
  "musicscape-81.png",
  "musicscape-71.png",
  "musicscape-79.png",
];
const othersImages = [
  "musicscape-70.png",
  "musicscape-30s.png",
  "musicscape-82.png",
];
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
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 p-4">
            <InfoType1
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
            />
            <ImagesCol
              imagesLoop={imagesInLoop}
              image1=""
              images={othersImages}
            />
          </div>{" "}
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>
          {/* Title Section */}
          <div
            className="
             grid
             grid-cols-1
             md:grid-cols-[1fr_1fr_1fr]
             w-full
             gap-5"
          >
            <span>
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/424638316"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">Foreshore 漫步潮閒, 2020</p>
                <p className="text-sm text-muted-foreground no-underline">
                  music video for musician YenTing Lo
                </p>
              </p>
            </span>
            <span>
              {" "}
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/290275454"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">Moving Drawings, 2018</p>
                <p className="text-sm text-muted-foreground no-underline"></p>
              </p>
            </span>
            <span>
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/240275866"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">FNarrative Rooms, 2017</p>
                <p className="text-sm text-muted-foreground no-underline">
                  online screening on Theia during IFFR
                </p>
              </p>
            </span>
          </div>
          <div
            className="
             grid
             grid-cols-1
             md:grid-cols-[1fr_1fr_1fr]
             w-full
             gap-5"
          >
            <span>
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/290297506"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">
                  Yi, Er, San, Si (One, Two, Three, Four), 2018
                </p>
                <p className="text-sm text-muted-foreground no-underline">
                  screening in ‘Excavating Empathy’ at TENT Rotterdam
                </p>
              </p>
            </span>
            <span>
              {" "}
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/255352163"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">The Stage After, 2017</p>
                <p className="text-sm text-muted-foreground no-underline"></p>
              </p>
            </span>
            <span>
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/213960082"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">The Shining Matter, 2017</p>
                <p className="text-sm text-muted-foreground no-underline"></p>
              </p>
            </span>
          </div>
          <div
            className="
             grid
             grid-cols-1
             md:grid-cols-[1fr_1fr_1fr]
             w-full
             gap-5"
          >
            <span>
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/240457914"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">
                  Void Ambience #01 Dream_waves, 2017
                </p>
                <p className="text-sm text-muted-foreground no-underline"></p>
              </p>
            </span>
            <span>
              {" "}
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/106731461"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">
                  Meet the Mountains, Pinlin Taipei, 2014
                </p>
                <p className="text-sm text-muted-foreground no-underline">
                  a site-specific sensory tour/workshop by DesignAct in Taiwan
                </p>
              </p>
            </span>
            <span>
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/122184412"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center">
                <br />
                <p className="no-underline">Folding as Drawing, 2014</p>
                <p className="text-sm text-muted-foreground no-underline"></p>
              </p>
            </span>
          </div>
          {/* Title Section */}
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
