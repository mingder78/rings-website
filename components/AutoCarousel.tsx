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
      setCurrent((v) => (v + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden rounded-box">
      {images.map((src, i) => (
        <div
          key={i}
          className={`
            absolute inset-0
            transition-all duration-1000 ease-in-out
            ${current === i ? "opacity-100 scale-100" : "opacity-0 scale-110"}
          `}
        >
          <div className="card h-full bg-base-100 shadow-xl">
            <figure className="h-full">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}
