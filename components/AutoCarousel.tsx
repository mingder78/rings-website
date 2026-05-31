"use client";

import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/400/200",
  "https://picsum.photos/200/201",
  "https://picsum.photos/400/802",
];

export default function AutoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-box">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full shrink-0 p-4">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="w-full h-64 object-contain"
                />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
