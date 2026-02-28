import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { huaiImages } from "../constances";

export default function RingsPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground pl-1 md:pl-60">
      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12">
        <div className="mx-auto px-4 sm:px-6 md:px-12 py-12 space-y-12">
          {/* Title Section */}
          <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-1 sm:grid-rows-3 sm:gap-3 md:grid-cols-2 md:grid-rows-3 md:gap-4 lg:grid-cols-2 lg:grid-rows-3 lg:gap-6">
            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border">
              {/* Item 1 */}
              <div>
                <h2 className="text-4xl font-light">
                  Huai House 徊 屋 (Strolling House)
                </h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2">
                  <em>
                    An interior renovation for wandering in a Taiwanese street
                    house—a gallery + shared workspace derived from its previous
                    notion of home
                  </em>
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border gap-8">
              {/* Item 3 */}
              <div>
                {/* Project Meta */}
                <section className="space-y-4 border-y border-border py-6">
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-8 text-sm">
                    <div>
                      <span className="text-muted-foreground">Year</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">2019-2020</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        renovation project, concept design for
                        workspace+gallery{" "}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Location</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">Tainan, Taiwan (conceptual)</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Material</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        coding of light, digital collages, rendering
                      </span>
                    </div>
                  </div>
                </section>
                {/* Exhibition Info */}
                <section className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <strong>
                      <br />
                      <br />
                    </strong>
                  </p>
                </section>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border gap-4">
              {/* Item 4 */}
              <div>
                {" "}
                {/* Quote */}
                {/* Main Description */}
                <section className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <br />
                    <br />
                    <strong>
                      While tracing and reflecting the previous experience as a
                      private residential place, Huai Wu focuses on the
                      rearrangement of interior elements, routes, and natural
                      light sources for a sharing gallery and creative
                      workspace.
                    </strong>
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border">
              {/* Item 5 */}
              <div>
                {" "}
                {/* Credits */}
                <section className="text-sm text-muted-foreground space-y-1">
                  <p>
                    This project “Huai House (徊屋 Huai Wu)” is a further
                    development after the artistic research “Narrative Rooms”
                    which exploring potential qualities of personal privat
                    realms speculated to serve as workspaces.
                  </p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <br />* In “Narrative Rooms” (2017), tracing the spatial
                    monologue narrating some specific details of the interior,
                    the research leads people to imagine the dreamy atmosphere
                    in which privacy and intimacy become the source of the
                    mindset for working.{" "}
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border">
              {/* Item 6 */}
              <div>
                {" "}
                {/* Video/Response Section */}
                <section className="space-y-8 border-t border-border pt-8">
                  <p className="text-sm leading-relaxed italic">
                    <strong>
                      Then, in “Huai House”, based on the context of the
                      Taiwanese street house—as many renovation projects of it
                      take place nowadays—the author realized the concept of
                      “narrative rooms” into the renovation of a typical street
                      house and turns it into a small sharing studio for
                      creative workers.{" "}
                    </strong>
                  </p>
                </section>
              </div>
            </div>
          </div>

          <CarouselGallery images={huaiImages} />

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
