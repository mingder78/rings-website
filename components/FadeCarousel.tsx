"use client";

import { useEffect, useState } from "react";

export default function FadeCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3秒切換一次
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 容器高度需固定，例如 h-64 或 h-[400px] */}
      <div className="relative">
        <div className="absolute inset-0 min-h-[600px] w-full md:w-3/4 bg-no-repeat bg-cover mx-auto my-2 rounded-md flex items-center justify-center">
          <div className="relative z-20 my-auto text-center">
            {" "}
            {/* 加上 z-20 */}
            <div className="font-baskervville text-custom-indigo-semi">
              — Unfold the sensibility between light and shadow, breathe beneath
              water and air, sink into tranquility and ambience, and wander
              along with architecture and poetry.
            </div>
          </div>
        </div>
      </div>
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <img
            src={img}
            className="w-full h-full object-cover"
            alt={`Slide ${i}`}
          />
        </div>
      ))}

      {/* 選擇性：加上指示點 (Dots)
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
      */}
    </div>
  );
}
