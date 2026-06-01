"use client";

import { useEffect, useState } from "react";

type ImagesProps = {
  images: string[];
};

export default function AutoCarousel({ images }: ImagesProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full shrink-0">
            <div className="bg-base-100 shadow-xl">
              <figure>
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="w-full h-audo object-contain"
                />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
