"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react"; // Install with: npm install lucide-react

interface ImageData {
  src: string;
  alt: string;
  description: string;
}

const images: ImageData[] = [
  {
    src: "IMG_6207.JPG",
    alt: "mountain",
    description: "A beautiful mountain view.",
  },
  {
    src: "IMG_6207.JPG",
    alt: "mountain",
    description: "A beautiful mountain view.",
  },
  {
    src: "IMG_6207.JPG",
    alt: "mountain",
    description: "A beautiful mountain view.",
  },
  {
    src: "IMG_6207.JPG",
    alt: "mountain",
    description: "A beautiful mountain view.",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (img: ImageData) => {
    setSelectedImage(img);
    modalRef.current?.showModal();
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, id) => (
          <div
            key={id}
            className="cursor-pointer overflow-hidden rounded-box hover:opacity-80 transition"
            onClick={() => openModal(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Detail View Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-4xl p-0 overflow-hidden relative">
          {/* 1. Close Icon Button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-base-100/50 hover:bg-base-100">
              ✕
            </button>
          </form>

          {selectedImage && (
            <>
              {/* 2. Wrap image in a form to close on click */}
              <form method="dialog">
                <button className="w-full cursor-zoom-out block border-none p-0 bg-transparent">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full"
                  />
                </button>
              </form>
            </>
          )}
        </div>

        {/* 3. Backdrop (Closes on clicking outside) */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
