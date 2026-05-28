import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { waterImages, waterLayouts } from "../constances";

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
                  Water, Air, Ambience (San Shui 山 水)
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
                    An architectual drawing research & an immersive drawing tool
                    investigating subtle environmental elements
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
                      coding visual of architectural drawing & ambience{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2"> Merwe-Vierhavens, Rotterdam</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      coding, ink in kinds, light & reflection
                    </span>
                  </div>
                </div>
                <br />
                <p className="text-muted-foreground">
                  Exhibited in Drawing Ambience: Drawing Out, deSingel, Antwerp,
                  2017.
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
                    It provides a chance to “describe the transitory quality of
                    space—which seems to complement the description of transient
                    spatial qualities...”
                    <br />
                    <br />
                    “You allow a particular viewing of interior atmospheres (a
                    word both denoting ‘air’ and ‘ambience’)”
                    <br />
                    <br />
                    _Review by Dr. Arch. Ephraim Joris, KU Leuven, following the
                    exhibition ‘Drawing Ambience: Drawing Out’, Antwerp.
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
                    “What I am drawing is a site made out of water. The building
                    is gone. Yet the water forms the new, soft sturcture”
                    <br />
                    <br />
                    The project investigates the ambience of architectural
                    drawings in a poetic and speculating approach. With the
                    site—the water in a bare basement—the author develops her
                    drawing tool to depict changing, reflecting conditions and
                    perception—of the place, the water, then its atmosphere. She
                    proposes a new way of perceiving and conceiving the
                    ever-changing qualities of space.
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
                    The ‘texture’ of our spatial, physical & emotional
                    perceptions—a representation of a site—inspires the idea of
                    invisible past & imaginative future. Hence, the drawing
                    research focuses on the reflecting qualities of the space,
                    the water. The non-existing architecture triggers a
                    perceiving act of the audience.
                    <br />
                    <br />
                    As considering layers of information—messages from the
                    enviromnent—the drawing tool has its potential to
                    investigate subtle, immaterial qualities of spatial
                    ambience. It results in the materialization of a coding
                    drawing language.
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
              <section className=" text-muted-foreground space-y-1"></section>
            </span>
          </div>
          {/* Title Section */}
          <CarouselGallery images={waterImages} layouts={waterLayouts} />
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
