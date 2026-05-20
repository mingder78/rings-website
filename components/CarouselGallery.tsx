"use client";

import { useState, useRef } from "react";
import { type ImageData } from "../app/constances";

export default function CarouselGallery({ images, layouts }) {
  let imageIndex = 0;
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (imgId: string) => {
    console.log(imgId);
    modalRef.current?.showModal();
    // Use the native scrollIntoView to jump to the clicked image in the carousel
    document
      .getElementById(`slide-${imgId}`)
      ?.scrollIntoView({ behavior: "auto", block: "nearest" });
  };

  return (
    <div className="gallery-wrapper">
      <div className="space-y-20">
        {layouts.map((columns, rowIndex) => {
          // count columns in current row
          const count = columns.split(" ").length;

          // get images for this row
          const rowImages = images.slice(imageIndex, imageIndex + count);

          // move image pointer
          imageIndex += count;

          return (
            <div
              key={rowIndex}
              className="grid gap-20 box box2"
              style={{
                gridTemplateColumns: columns,
              }}
              onClick={() => openModal(`${rowIndex}`)}
            >
              {rowImages.map((img, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="
                        w-full
                        h-[220px]
                        md:h-[320px]
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                      "
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {/* 2. Zoom Modal with Carousel */}
      <dialog ref={modalRef} className="modal">
        <div className=" max-w-5xl p-0 bg-transparent overflow-visible">
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
                    <img src={img} className="w-full" alt={img} />
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
          .break {
            grid-column: 1 / -1;
          }
          .item-a { grid-column: span 2; } /* takes 2 columns */
          .item-b { grid-column: span 4; } /* takes 4 columns */
          .item-c { grid-column: span 4; } /* takes 4 columns */
          .w2 { grid-column: span 2; }
          .w4 { grid-column: span 4; }
          .w5 { grid-column: span 5; }
          .w20 { grid-column: span 2; } /* 20% */
          .w40 { grid-column: span 4; } /* 40% */
          .w50 { grid-column: span 5; } /* 50% */
          .grid2 {
            display: grid;

          }
          .item {
            padding: 0px;
            background: #ff0;
            border: 5px solid #999;
          }
          .t-1 img {
            padding: 0px;
            background: #fff;
            border: 10px solid #0f0;
          }
        .wrapper {
         display: grid;
          /* Creates three columns: one 200px wide and two that share remaining space equally */
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

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
        .grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-wrapper {
            padding: 0px;
          }
          .wrapper {
            grid-template-columns: 2fr;
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
