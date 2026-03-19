import { carouselImages } from "../constances";
import FadeCarousel from "@/components/FadeCarousel";
import Link from "next/link";

const Page = () => {
  return (
    <div className="font-serifmix flex min-h-screen bg-background text-foreground pl-1 md:pl-60">
      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12">
        <p className="text-[clamp(12px,2vw,24px)]">
          Fluid text
          <a
            href="/"
            rel="history"
            className="hover:opacity-60 font-serifmix tracking-wider"
          >
            WANG, 王 SZU-YI 思 懿
          </a>
        </p>
      </main>
    </div>
  );
};

export default Page;
