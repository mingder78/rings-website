import { carouselImages } from "../constances";
import FadeCarousel from "@/components/FadeCarousel";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground md:pl-60">
      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12">
        <p className="text-[clamp(12px,2vw,24px)]">
          <a href="/" rel="history" className="hover:opacity-60 tracking-wider">
            WANG, 王 SZU-YI 思 懿
          </a>
        </p>

        <p className="text-xs text-muted-foreground pt-12 border-t border-border">
          <hr />
        </p>
        {/* Footer */}

        <div
          className="ytp-cued-thumbnail-overlay-image"
          style={{
            backgroundImage:
              'url("https://i.ytimg.com/vi/ryPogQsYzKY/maxresdefault.jpg")',
          }}
        />
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src="https://www.youtube.com/embed/uIal9Dqe3c4?si=XQpbfWr9N5Jx70yN"
            title="YouTube video player"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <p className="text-muted-foreground italic">
          書寫身體 過程筆記 & 研究錄像
        </p>

        <div className="w-full aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1150630068"
            className="w-full h-full rounded-xl"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="w-full aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1150640244"
            className="w-full h-full rounded-xl"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-[1fr_3fr_1fr]
          w-full
        "
        >
          {/* hidden on mobile */}
          <div className="hidden md:block"></div>

          <img src="image.jpg" alt="" className="w-full h-auto block" />

          {/* hidden on mobile */}
          <div className="hidden md:block"></div>
        </div>

        <div>
          <br />
          <i>
            本研究由台灣國藝會 贊助
            <br />
            荷蘭 iii Den Haag, PANT 台荷藝集 協力
          </i>
        </div>
      </main>
    </div>
  );
};

export default Page;
