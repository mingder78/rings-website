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
          <div className="pl-1 md:pl-60">
            <ImageLinksComponent />
          </div>
          <footer className="text-xs text-muted-foreground pt-12 border-t border-border">
            <p>©SZU-YI WANG. 2026</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
