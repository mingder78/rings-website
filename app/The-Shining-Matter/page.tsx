import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { shiningImages, shiningLayouts } from "../constances";

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
                  The Shining Matter
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
                    An informing ritual which recalls our natural awareness of
                    time through folding dialogues with the Sun
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
                    <span className="ml-2">2017</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper sulpture, sundial object as informed matter{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">interior spaces with sunlight</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper, copper, metal, plastic, rock, acrylic paint,
                      sunlight
                    </span>
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
                    It invites one to use, to shape, and to inform. As a time
                    matter, it aims to turn the sun drawing into a dialogue
                    between the human the Sun, time and matter.
                    <br />
                    <br />
                    Drawing with the Sun thus becomes the daily practice. As
                    introducing the sunshine to the interior, we inform the time
                    matter in colours & patterns, bring consciousness of seasons
                    into our life.
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
                    Nowadays, since our life is calculated by clocks, measured
                    by numbers on calendars, We miss the knowing of time and
                    senses about days, seasons and years.
                    <br />
                    <br />
                    Derived from the astronomical observation of the Sun path,
                    the project focuses on connecting individual daily practice
                    with nature. The design develops a sculpture—informed with
                    patterns and colors—that reflects the yearly time path with
                    the projection of the Sun.
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
                    Information—regarding how human achieve it—is social &
                    cultural. Matter carries the heaviest concern or the
                    opposite, the information & the act of informing.
                    <br />
                    <br />
                    In East Asian religious tradition, a specific paper folding
                    is a way of sending/informing messages to God & nature. Here
                    paper material is informed by colours & patterns in a
                    specific order indicating the messages from seasons & the
                    Sun.
                    <br />
                    <br />
                    Inspired by the lunisolar calendar—a system of encoding and
                    decoding knowledge from East Asian culture, the project
                    includes three phases: to perceive the Sun path, to encode &
                    decode through handcrafting, to engage with Sun drawings as
                    visualized dialogues.
                  </p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>
          </div>
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
                  src="https://player.vimeo.com/video/213960082"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </span>
            <span>
              <section className=" text-muted-foreground space-y-1">
                The Shining Matter (2017), a research project by Szu-Yi Wang
                <br />
                <br />
                _Soundtrack | The Album Leaf - Windows
              </section>
            </span>
          </div>
          {/* Title Section */}
          <CarouselGallery images={shiningImages} layouts={shiningLayouts} />
          <p className="text-center"></p>
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>
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
