import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { narrativeImages, narrativeLayouts } from "../constances";

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
                  Narrative Theatre
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
                    A speculative design of a consumer’s journey—for those who
                    are both object collectors & storytellers
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
                      venue design, speculative consumption space{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      {" "}
                      the cities, venues & human mind
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">digital collages, rendering</span>
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
                    “In those theatre venues, everyone is both consumer/audience
                    & storyteller/producer.” They make choices consciously while
                    establishing longer relationships with the objects &
                    extending their life periods.
                    <br />
                    <br />
                    Thus, the consumption space becomes a series of live venues
                    for collective sharing & expanding the images of the
                    products.
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
                    What if a theatre is a consumption place?
                    <br />
                    <br />
                    On the opposite of the effect of commercial
                    advertisements—which give the images of the ideal rather
                    than real lifestyles—the project adopts the idea of
                    storytelling which evokes every individual's desire in a
                    collective way based on the loyalty and user experience with
                    specific objects.
                    <br />
                    <br />
                    In other words, the audience here are the storytellers
                    themselves rather than those merely manipulated by
                    illusionary expectation.
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
                    In the project, consumers’ illusions are shaped by many of
                    the personal user experience shared among every traveling
                    theatre venues.
                    <br />
                    <br />
                    Those real experience become the storyline of the movies
                    with the 'customized' posters—which are designed with photo
                    collages and nostalgia posters of classic products such as
                    Olivetti’s typewriter.
                    <br />
                    <br />
                    The strategy transforms the functions and experience of a
                    (series of) commercial space and aims to provide a new,
                    sustainable consumer’s journey.
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
          <CarouselGallery
            images={narrativeImages}
            layouts={narrativeLayouts}
          />
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
