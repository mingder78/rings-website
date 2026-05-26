import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { ritualImages, ritualLayouts } from "../constances";

export default function RingsPage() {
  return (
    <div className="font-ebgaramond flex min-h-screen bg-background text-foreground md:pl-60">
      {/* Main Content */}

      <main className="flex-1 sm:px-12 md:px-4">
        <div className="py-6 sm:py-12 px-8  space-y-12 bg-slate-0">
          {" "}
          {/* Title Section */}
          <div
            className="bg-orange-0 grid
           grid-cols-1
           gap-4
           sm:grid-cols-1 sm:gap-3
           md:grid-cols-2 md:gap-4
           lg:grid-cols-2 lg:gap-6
           auto-rows-min"
          >
            <div className="bg-red-0 col-span-1 row-span-1">
              {/* Item 1 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2">
                  Ritual upon the Paper 躍 然 紙 上 的 儀 典
                </p>
              </div>
            </div>
            <div className="bg-yellow-0 col-span-1 row-span-1">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2">
                  <em>
                    A research miniature series on the cultural landscape in
                    Taiwan. Derived from one of Taiwanese folding techniques
                    used in religious paper crafts, the folding pieces
                    interweave and present cultural flows/movements which
                    surround, merge and reflect the spatial scenes inspired by
                    Taiwanese local religion.
                    <br />
                    <br />
                    As folding a series of personal spatial narrative, Szu-Yi
                    aims to unfold the alternative imagination of the cultural
                    images from her home country.
                  </em>
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div>
              {/* Project Meta */}
              <section className="space-y-4 border-border py-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-1 sm:gap-1 text-sm">
                  <div>
                    <span className="text-muted-foreground">Year</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">2019</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">spatial miniature, sculpture </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      {" "}
                      imaginary cultural landscape upon the paper{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper in kinds, light & reflection
                    </span>
                  </div>
                </div>
              </section>
              {/* Exhibition Info */}
              <section className="space-y-4 text-sm leading-relaxed">
                <p>
                  <strong>
                    <br /> <br />
                    Presented in ‘HOW&WOW’ initiated by Crafts Council
                    Nederland, Dutch Design Week 2019, VEEM, Eindhoven.
                  </strong>
                </p>
              </section>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 gap-4">
              {/* Item 4 */}
              <div>
                {" "}
                {/* Quote */}
                {/* Main Description */}
                <section className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <br />
                    <br />
                    <strong className="font-ebgaramond"></strong>
                  </p>
                </section>
              </div>
            </div>
          </div>
          {/* Title Section */}
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>
          <CarouselGallery images={ritualImages} layouts={ritualLayouts} />
          <p>(More images are coming soon.)</p>
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>
          {/* Footer */}
          <ImageLinksComponent />
          <footer className="text-xs text-muted-foreground pt-12 border-t border-border">
            <p>©SZU-YI WANG. 2026</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
