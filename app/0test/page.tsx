"use client";
import AnimImage from "@/components/AnimImage";
import ImageLinksComponent from "@/components/ImageLinks";
import Note from "@/components/Note";
import React, { useState } from "react";

export default function RingsPage() {
  const [notes, setNotes] = useState([
    { id: 1, content: "Learn React", important: true },
    { id: 2, content: "Build Next.js app", important: false },
  ]);

  const [newNote, setNewNote] = useState("");

  // Add note
  const addNote = (e) => {
    e.preventDefault();

    if (!newNote.trim()) return;

    const noteObject = {
      id: Date.now(),
      content: newNote,
      important: false,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  // Toggle importance
  const toggleImportance = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, important: !note.important } : note,
      ),
    );
  };

  return (
    <div className="font-ebgaramond min-h-screen bg-background text-foreground md:pl-60">
      {/* Main Content */}
      <h1>Notes</h1>
      <AnimImage name="" />
      {/* Form */}
      <form onSubmit={addNote} style={{ marginBottom: 20 }}>
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a note..."
        />
        <button type="submit">Add</button>
      </form>

      {/* Notes list */}
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} toggleImportance={toggleImportance} />
        ))}
      </ul>
      <main className="flex-auto sm:px-12 md:px-4">
        <div className="py-6 sm:py-12 px-8  space-y-12 bg-slate-0">
          {" "}
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
      <style>
        {`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          width: 100%;
          bg-color
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
        }
        `}
      </style>
    </div>
  );
}
