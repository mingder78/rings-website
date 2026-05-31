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
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel w-full rounded-box">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-item w-full transition-all duration-500 ${
            current === index ? "block" : "hidden"
          }`}
        >
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-64 object-cover"
              />
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}
