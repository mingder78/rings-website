import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { unImages, unLayouts } from "../constances";

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
                  (un)Folded Clusters
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="bg-yellow-0 col-span-1 row-span-1">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2 text-muted-foreground">
                  <em>
                    Crafted installations about a series of patterns—forms,
                    shapes, movments—of nature
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
                    <span className="ml-2">2013-14</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper sculpture, interactive coding matter{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      gestures in between coding, drawing & folding
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">paper, metal, seeds</span>
                  </div>
                </div>
                <br />
                <p className="text-muted-foreground"></p>
              </section>
              {/* Exhibition Info */}
              <section className="space-y-4 text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <strong></strong>
                </p>
                <p className="text-muted-foreground"></p>
                <p className="text-foreground"></p>
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
                    Every pattern has its ordinary and imaginary movements. The
                    series is derived from the exercise—the hybrids of digital
                    drawing & material paper, of logical coding & body movement.
                    <br />
                    <br />“ Folding is blooming. Paper captures the pattern of
                    gestures from both hands & flowers.”
                    <strong className="font-ebgaramond"></strong>
                  </p>
                </section>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 5 */}
              <div>
                <section className=" text-muted-foreground space-y-1">
                  <p>
                    Nature presents various kind of living & moving patterns.
                    <br />
                    <br />
                    Every pattern has its imaginary movement. I observe, imitate
                    and deliver the fascinating movements inspiring from nature.
                    Started from the idea of repetitive creating through coding
                    and folding, I made paper pieces with the inspiring
                    creatures.
                  </p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 6 */}
              <div>
                <section className=" text-muted-foreground space-y-1">
                  <p>
                    Both paper folding and Processing coding have qualities
                    related to regulation—in a sense of movement—with repetitive
                    patterns and logical disciplines.
                    <br />
                    <br />
                    The notion lead to the exercises of the folding & unfolding
                    origami pieces in following directions:
                    <br />
                    <br />
                    Folding is blooming. Paper captures the pattern of gestures
                    from both hands & flowers. Folding creates continuous
                    movements. To fold is to shape, to expand, to contain & to
                    sustain.
                  </p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>
          </div>
          <CarouselGallery images={unImages} layouts={unLayouts} />
          <p className="text-center"></p>
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>
          <div
            className="
             grid
             grid-cols-1
             md:grid-cols-[1fr_3fr_1fr]
             w-full
             gap-5"
          >
            <span>
              <section className=" text-muted-foreground space-y-1"></section>
            </span>
            <span>
              {" "}
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/122184412"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </span>
            <span>
              <section className=" text-muted-foreground space-y-1">
                Folding as Drawing (2014) by Szu-Yi Wang
                <br />
                <br />
                _Soundtrack | The Album Leaf - Into the Sea
              </section>
            </span>
          </div>
          {/* Title Section */}
          {/* Footer */}
          <ImageLinksComponent />
          <footer className="text-xs text-muted-foreground pt-12 border-t border-border">
            <p>©SZU-YI WANG. 2026</p>
          </footer>
        </div>
      </main>
      <style>
        {`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          width: 100%;
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
        }
        `}
      </style>
    </div>
  );
}
