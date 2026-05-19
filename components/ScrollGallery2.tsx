"use client";
import React, { useEffect, useState } from "react";

export type ImageItem = {
  src: string;
  caption?: string;
  colSpan?: number;
  rowSpan?: number;
};

export default function Gallery({ images }: { images: ImageItem[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* SCROLL MODE */}
      <div className="w-64 h-64 overflow-hidden">
        {images.map((img, i) => (
          <section className="w-full h-full object-cover" key={i}>
            <img
              src={img.src}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          </section>
        ))}
      </div>

      {/* SIMPLE VIEWER (FULL SCREEN BUT CLEAN) */}
      {open && (
        <div className="viewer">
          <button className="close" onClick={() => setOpen(false)}>
            ✕
          </button>

          <button className="nav left" onClick={prev}>
            ‹
          </button>

          <img className="image" src={images[index].src} />

          <button className="nav right" onClick={next}>
            ›
          </button>
        </div>
      )}

      <style>{`
        .gallery .item {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery img {
          width: min(1000px, 92vw);
          cursor: zoom-in;
        }

        .viewer {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
        }

        /* BIG + SIMPLE ARROWS */
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 64px;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          padding: 20px;
        }

        .left { left: 20px; }
        .right { right: 20px; }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 24px;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
