"use client";

import { useState, useRef } from "react";
import { type ImageData } from "../app/constances";

export default function CarouselGallery({ images }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (imgId: string) => {
    modalRef.current?.showModal();
    // Use the native scrollIntoView to jump to the clicked image in the carousel
    document
      .getElementById(`slide-${imgId}`)
      ?.scrollIntoView({ behavior: "auto", block: "nearest" });
  };

  return (
    <div className="gallery-wrapper">
      <div className="wrapper">
        {images.map((img, i) => (
          <section
            key={i}
            style={{
              gridRow: `span ${img.rowSpan || 1}`,
            }}
          >
            <div
              className="box box2 cursor-zoom-in overflow-hidden rounded-box"
              onClick={() => openModal(i)}
              style={{
                height: img.height || "100%",
              }}
            >
              <img src={img.src} alt={img.caption || `image-${i}`} />
            </div>

            {img.caption && <div className="caption">{img.caption}</div>}
          </section>
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
                id={`slide-${id}`}
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
      <style>
        {`
        .wrapper {
         display: grid;
          /* Creates three columns: one 200px wide and two that share remaining space equally */
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

          gap: 20px; /* Optional: adds space between items */
        }

        .box {
          border: 5px;
        }


        .box img {
          width: 100%;
          height: 100%;
        }

        .box1 img {
          object-fit: cover;
        }

        .box2 img {
          object-fit: contain;
        }

        .box3 img {
          object-fit: fill;
        }



        /* =========================
           Medium screen
        ========================= */
        @media (max-width: 1023px) {
          .wrapper {
            grid-template-columns: repeat(
              auto-fill,
              minmax(220px, 1fr)
            );

            gap: 16px;
          }

          .box {
            height: 240px;
          }
        }

        /* =========================
           Small screen
        ========================= */
        @media (max-width: 640px) {
          .gallery-wrapper {
            padding: 0px;
          }
          .wrapper {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .box {
            height: auto;
          }

          .box img {
            width: 100%;
            height: auto;
          }
        }
      `}
      </style>
    </div>
  );
}
