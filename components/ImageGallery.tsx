"use client";
import React from "react";

export type ImageItem = {
  src: string;
  alt?: string;
  colSpan?: number;
  rowSpan?: number;
};

export default function ImageGallery({ images }: { images: ImageItem[] }) {
  return (
    <div
      className="
        grid gap-2
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        auto-rows-[120px]
      "
    >
      {images.map((img, i) => {
        const colSpan = img.colSpan ?? 1;
        const rowSpan = img.rowSpan ?? 1;

        return (
          <div
            key={i}
            className="rounded-lg"
            style={{
              gridColumn: `span ${colSpan}`,
              gridRow: `span ${rowSpan}`,
            }}
          >
            <img
              src={img.src}
              alt={img.alt || ""}
              className="w-full h-auto block"
              style={{}}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
