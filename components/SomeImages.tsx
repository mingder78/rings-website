"use client";
import { type ImagesProps } from "../app/types";
import { useEffect, useState } from "react";
import MyComponent from "@/components/MyComponent";

export default function SomeImages({ images }: ImagesProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {images.map((src, index) => (
        <div key={index} className="">
          <div className="bg-green-0 flex justify-center items-center">
            <MyComponent image={src} />
          </div>
        </div>
      ))}
    </div>
  );
}
