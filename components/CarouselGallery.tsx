"use client";

import { useState, useRef } from "react";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "Screen-Shot-2020-03-20-at-11.21.10-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.47.40-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.44.27-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.00.48-AM.png", alt: "x" },
  { src: "sketch_plancluster.jpg", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.24.32-AM.png", alt: "x" },
  { src: "diagram_nrcollage.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-10.58.54-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-10.58.28-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.22.58-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.00.32-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.00.13-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-10.59.59-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.21.10-AM.png", alt: "x" },
];

export default function CarouselGallery() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (imgId: string) => {
    modalRef.current?.showModal();
    // Use the native scrollIntoView to jump to the clicked image in the carousel
    document
      .getElementById(`slide-${imgId}`)
      ?.scrollIntoView({ behavior: "auto", block: "nearest" });
  };

  return (
    <div className="p-10">
      {/* 1. Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, id) => (
          <div
            key={id}
            className="cursor-zoom-in overflow-hidden"
            onClick={() => openModal(img.id)}
          >
            <img src={img.src} alt={img.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* 2. Zoom Modal with Carousel */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-5xl p-0 bg-transparent overflow-visible">
          {/* Close Icon */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle absolute right-4 top-4 z-50">
              ✕
            </button>
          </form>

          {/* daisyUI Carousel */}
          <div className="carousel w-full rounded-box shadow-2xl">
            {images.map((img, id) => (
              <div
                key={id}
                id={`slide-${img.id}`}
                className="carousel-item relative w-full"
              >
                {/* Clicking image closes the modal */}
                <form method="dialog" className="w-full">
                  <button className="w-full p-0 border-none bg-transparent cursor-zoom-out block">
                    <img src={img.src} className="w-full" alt={img.alt} />
                  </button>
                </form>
              </div>
            ))}
          </div>

          <p className="text-center text-white mt-4 text-sm">
            Swipe or scroll to browse
          </p>
        </div>

        {/* Backdrop to close on click outside */}
        <form method="dialog" className="modal-backdrop bg-black/80">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
