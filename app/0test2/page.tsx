// src/app/page.tsx
import Carousel from "@/components/Carousel";
import type { CarouselImage } from "@/components/Carousel";

export default function Home() {
  // If using external URLs, remember to configure remotePatterns in next.config.js
  const sampleImages: CarouselImage[] = [
    { src: "82B6A502-4FB6-4811-915D-A4CDAC7587AEa.jpg", alt: "Beach" },
    { src: "82B6A502-4FB6-4811-915D-A4CDAC7587AEa.jpg", alt: "Mountain" },
    { src: "82B6A502-4FB6-4811-915D-A4CDAC7587AEa.jpg", alt: "Forest" },
  ];

  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Next.js Responsive Carousel</h1>
      <Carousel images={sampleImages} />
    </main>
  );
}
