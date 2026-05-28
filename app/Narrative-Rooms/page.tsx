import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { roomImages, roomLayouts } from "../constances";

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
                  Narrative Rooms
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
                    A series of workspaces performing as human thoughts derived
                    from personal territories
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
                    <span className="ml-2">2016-17</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      film; coding visual of workspace{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      private/domestic workspace in the human mind
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      photograph, film, coding drawing, narrative voice
                    </span>
                  </div>
                </div>
                <br />
                <p className="text-muted-foreground">
                  RotterdamOnline showcase at ‘Theia’ during International Film
                  Festival Rotterdam (IFFR), 2018
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
                    “... [A] spatial proposal investigating the transposition of
                    ideas from a domestic to a public. You critically address
                    the performance of drawing/representation of a material
                    world.
                    <br />
                    <br />
                    You address the importance of the narrative qualities of
                    drawing and develop these into a spatial proposal [while]
                    measuring/evaluating the performance as a critical
                    design-research tool.
                    <br />
                    <br />
                    The notion of drawing levels of intimacy allows you to
                    reflect on your own being in space & more importantly your
                    practice as an interior architect.”
                    <br />
                    <br />
                    _Review by Dr. Arch. Ephraim Joris, thematic project tutor
                    at MIARD, Piet Zwart Institute.
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
                    Drawing is narrating. Taking narration as the inspiration
                    for production, the project investigates the qualities of
                    the private interior through various ways of
                    narrative—texts/poems, photographs and films.
                    <br />
                    <br />
                    It proposes a series of working scenarios derived from one’s
                    private daily territories.
                    <br />
                    <br />
                    The drawings aim to unfold new spatial qualities—ephemeral
                    but active like human thoughts—contributing to acts of
                    working, thinking, creating.
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
                    Coding—creating forms and patterns from private textures &
                    narrative techniques— becomes the drawing strategy.
                    <br />
                    <br />
                    Nowadays, boundaries between work and life, public and
                    private spaces merge. As technology allows us to work in
                    every personal room, between those cubes, there is a network
                    set up by signals.
                    <br />
                    <br />
                    The project investigates private workspaces through digital
                    drawings—coding messages.
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
                  src="https://player.vimeo.com/video/240275866"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </span>
            <span>
              <section className=" text-muted-foreground space-y-1">
                Narrative Rooms (2018) by Szu-Yi Wang.
                <br />
                <br />
                <br />
                _Visual drawing, narrating; editing | Szu-Yi Wang
                <br />
                <br />
                _Soundtrack | boynextdoor(soundcloud); remixed by Szu-Yi Wang
              </section>
            </span>
          </div>
          {/* Title Section */}
          <CarouselGallery images={roomImages} layouts={roomLayouts} />
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
