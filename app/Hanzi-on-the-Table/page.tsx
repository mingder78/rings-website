import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { hanziImages, hanziLayouts } from "../constances";

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
                  Hanzi on the Table
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
                    A research on the writing system ‘Hanzi’, its culture & the
                    principle of the visual formulation; object-photo collages
                    of the spatial-conceptual Hanzi
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
                    <span className="ml-2">object-photo collage </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">on the table & mirror glass</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      photograph, glass, printing, plants
                    </span>
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
                    <br />
                    Language is describing & being discribed; it is reflecting &
                    being reflected.
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
                    How do we perceive the language which reflects the way we
                    conceive the world and the understanding? How we materialize
                    our language?
                    <br />
                    <br />
                    This project aims to opens a different perspective to
                    perceive and conceive the language through social, universal
                    matters/objects.
                    <br />
                    <br />
                    The table becomes the canvas. The host places, arranges,
                    appropriates and displays the daily objects while engaging
                    with his/her intuition, feels and understanding of language
                    in the daily gestures and behaviours.
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
                    The black objects blur their solid shapes, dissolve in the
                    background and yet serve as the intangible language reflect
                    the host as well as the viewers’ inner world.
                    <br />
                    <br />
                    Language is describing & being described; it is reflecting &
                    being reflected.
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
          </div>
          {/* Title Section */}
          <CarouselGallery images={hanziImages} layouts={hanziLayouts} />
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
