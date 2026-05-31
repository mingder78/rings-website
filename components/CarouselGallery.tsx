"use client";

import { useState, useRef } from "react";
import { type ImageData } from "../app/constances";

function Img({ src, alt }: { src: string; alt: string }) {
  const [isPortrait, setIsPortrait] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={(e) => {
        const img = e.currentTarget;
        console.log(img);
        setIsPortrait(img.naturalHeight > img.naturalWidth);
      }}
      className={
        isPortrait
          ? "sm:max-h-[50vh] w-auto object-contain"
          : "sm:max-w-[50vw] h-auto object-contain"
      }
    />
  );
}

export default function CarouselGallery({ images, layouts }) {
  let imageIndex = 0;
  let count = 0;
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
      <div className="space-y-5">
        {layouts.map((columns, rowIndex) => {
          imageIndex += count;
          // count columns in current row
          count = columns.split(" ").length;

          // get images for this row
          let rowImages = images.slice(imageIndex, imageIndex + count);

          // move image pointer

          return (
            <div
              key={rowIndex}
              className="grid gap-5"
              style={{
                gridTemplateColumns: columns,
              }}
            >
              {rowImages.map((img, index) => {
                let currentIndex = index + imageIndex;
                return (
                  <div
                    onClick={() => openModal(`${currentIndex}`)}
                    key={currentIndex}
                    className=" w-auto flex items-center justify-center overflow-hidden"
                  >
                    <Img src={img} alt="" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* 2. Zoom Modal with Carousel */}
      <dialog ref={modalRef} className="modal">
        <div className=" max-w-5xl p-0 bg-transparen overflow-visible">
          {/* Close Icon */}
          <form method="dialog">
            <button className="bg-white btn btn-sm btn-circle absolute right-4 top-4 z-50">
              ✕
            </button>
          </form>

          {/* daisyUI Carousel */}
          <p className="text-center text-white mt-4 text-sm">
            Swipe or scroll to browse images.
          </p>

          <div className="carousel w-full absolute top-0 left-0">
            {images.map((img, id) => (
              <div
                key={id}
                id={`slide-${id}`}
                className="carousel-item relative w-full"
              >
                <div className="bg-base-content w-screen h-screen flex items-center justify-center">
                  <div className="card bg-base-content shadow-2xl w-full h-full max-w-4xl max-h-[85vh] flex flex-col justify-center items-center p-4">
                    <figure className="w-full h-full flex justify-center items-center overflow-hidden">
                      <img
                        src={img}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backdrop to close on click outside */}
        <form method="dialog" className="modal-backdrop">
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
