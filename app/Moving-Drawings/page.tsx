import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { movingImages, movingLayouts } from "../constances";

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
                  Moving Drawings
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
                    A spatial miniature series tracing light & shadow, time &
                    in-between space through paper drawing - cutting - crafting
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
                    <span className="ml-2">2018</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper sculpture, drawing language miniature{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2"> each piece of paper </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">paper, light, shadow, time</span>
                  </div>
                </div>
                <br />
                <p className="text-muted-foreground">
                  Exhibited in MIARD 2018 Graduation Show, Rotterdam
                </p>
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
                    <br />
                    “Not only draw on the paper
                    <br />
                    but
                    <br />
                    <br />
                    CUT through the paper.”
                    <br />
                    <br />
                    _Review by Dr. Arch. Ephraim Joris, KU Leuven, during the
                    research process of the drawing methodology.
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
                    The project followed the research on the Hanzi xian 閒 (the
                    origin of 間: pronounced as ‘jian’ in Chinese and as ‘ma’ in
                    Japanese), which can be interpreted as space 空間, room
                    房間, moment 瞬間, and time 時間.
                    <br />
                    <br />
                    While related to both space and time, the concept of xian 閒
                    inspired this drawing practice for the development of a
                    spatial approach to the materialization of this Hanzi.
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
                    Paper is the canvas. In the film below, each piece is the
                    drawing of the concept of Hanzi xian. Then, the multiple
                    meaning, imagination and interpretation of xian are
                    presented through light and shadow released among the
                    surface, curves, shapes and cuts on the paper.
                    <br />
                    <br />
                    “It is the light coming with shadow. Then the senses of time
                    and space emerge in between moments and places on every
                    piece of paper.”
                    <br />
                    <br />
                    It realizes the minimalism and sensibility from the author’s
                    Asian culture in a contemporary approach.
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
             md:grid-cols-[1fr 8fr 1fr]
             w-full
             gap-5"
          >
            <span>
              <section className=" text-muted-foreground space-y-1">
                <br />
                <br />
              </section>
            </span>
            <span>
              {" "}
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/290275454"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </span>
            <span>
              <section className=" text-muted-foreground space-y-1"></section>
            </span>
          </div>
          {/* Title Section */}
          <CarouselGallery images={movingImages} layouts={movingLayouts} />
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
