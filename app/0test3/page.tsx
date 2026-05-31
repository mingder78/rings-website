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
    <main>
      <div className="w-screen h-screen flex items-center justify-center bg-base-200 p-6">
        <div className="card bg-base-100 shadow-2xl w-full h-full max-w-4xl max-h-[85vh] flex flex-col justify-center items-center p-4">
          <figure className="w-full h-full flex justify-center items-center overflow-hidden">
            <img
              src="82B6A502-4FB6-4811-915D-A4CDAC7587AEa.jpg"
              alt="Description"
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </figure>
        </div>
      </div>
    </main>
  );
}
