// app/about/page.tsx
import FadeCarousel from "@/components/FadeCarousel";
import { carouselImages } from "./constances";
import ImageLinksComponent from "@/components/ImageLinks";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1">
        <div className="relative w-full h-full overflow-hidden">
          <FadeCarousel images={carouselImages} />
          <ImageLinksComponent />
        </div>
      </main>
    </div>
  );
}
