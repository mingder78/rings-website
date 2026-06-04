// components/ImageObserver.tsx

"use client";

import { useEffect } from "react";

export default function ImageObserver() {
  useEffect(() => {
    const images = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return null;
}
