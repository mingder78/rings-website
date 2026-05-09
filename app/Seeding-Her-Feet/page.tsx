import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { seedingImages } from "../constances";

export default function RingsPage() {
  return (
    <div className="font-mixed flex min-h-screen bg-background text-foreground pl-1 md:pl-60">
      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12">
        <div className="px-4 sm:px-6 md:px-12 py-12 space-y-12 bg-slate-0">
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
                <p className="text-lg leading-relaxed space-y-2">
                  Seeding Her Feet
                </p>
              </div>
            </div>
            <div className="bg-yellow-0 col-span-1 row-span-1">
              {/* Item 2 */}
              <div>
                <p className="text-lg leading-relaxed space-y-2">
                  <em>
                    A spatial plan for artworks ‘Seeding my feets in the chant
                    of bells’ by Mehraneh Atashi.
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
                    <span className="ml-2">2021</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      exhibition concept development & fabrication plan{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      Exhibition date
                    </span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">11.09.2021 - 05.12.2021</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">TENT Rotterdam, Netherlands</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 gap-1 sm:gap-1 text-sm">
                  <div>
                    <span className="text-muted-foreground">
                      Concept & installations
                    </span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">Mehraneh Atashi </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      Spatial design development & fabrication plan
                    </span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">Szu-Yi Wang</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      Produciton team
                    </span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">TENT Rotterdam</span>
                  </div>
                </div>
              </section>
              {/* Exhibition Info */}
              <section className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>
                    <br />
                    <br />
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
                <section className="space-y-4 text-lg leading-relaxed">
                  <p>
                    <br />

                    <strong className="font-normal">
                      “There's resonating vibe among the pieces. All subtle
                      movements and narrative vibrations (either conceptually or
                      specifically) inhabit the gallerie room—the room for the
                      healing vibe and all healed minds. Lovely to see people
                      taking their time to immerse themselves in...” (Notes from
                      Szu)
                    </strong>
                  </p>
                </section>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 5 */}
              <div>
                <section className=" text-muted-foreground space-y-1">
                  <p>
                    This project is a spatial development for artist Mehraneh
                    Atashi. The design is developed along the philosophy of
                    Mehraneh’s works ‘Seeding my feets in the chant of bells’
                    (2021)—presented in the exhibition ‘Who Wants to Live in a
                    World Without Magic?’ curated by Katayoun Arian at TENT
                    Rotterdam.
                  </p>
                </section>
                <section className="text-lg text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 6 */}
              <div>
                <section className=" text-muted-foreground space-y-1">
                  <p></p>
                </section>
                <section className="text-lg text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0  ">
              {/* Item 6 */}
              <div>
                <p className="text-sm ">
                  The collaboration is a journey of thinking along with her
                  thoughts and developing the corresponding spatial gestures and
                  narrative practice. And the realization is the process of
                  knowing and learning from your artworks and spirit.
                  <br />
                  <br />
                  <br />
                  Credit: Photo 1, 3-5 by Szu-Yi Wang / Photo 2, 6-11 by Aad
                  Hoogendoorn
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 ">
              {/* Item 6 */}
              <div>
                {" "}
                {/* Video/Response Section */}
                <section className="">
                  <p className="text-sm ">
                    There're light, shadows, spatial elements and subtle rituals
                    as the languages we shared. The realization is the process
                    of knowing and learning from your artworks and spirit.
                    <br />
                    <br />
                    After the title, perhaps there’s no need for further words
                    to describe Mehr’s works, her concepts and her personality
                    involved in the projects. My mind is like one of the seeds
                    growing in the hexagon filled with soil; languages are
                    sunken in the meandering micro paces, re-rooted, and
                    gradually connected amid the chant of the bells.
                    <br />
                    <br />
                    _Notes from the designer
                  </p>
                </section>
              </div>
            </div>
          </div>
          <hr></hr>
          <CarouselGallery images={seedingImages} />
          <hr></hr>
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
