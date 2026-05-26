import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { writingImages, writingLayouts } from "../constances";

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
                  Writing In-between the Post Urban 後 都 市 ‘間’ 的 書 寫
                  <br />
                  <br />
                </p>
                <p className="text-muted-foreground">
                  (research project in progress)
                </p>
              </div>
            </div>
            <div className="bg-yellow-0 col-span-1 row-span-1">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2 text-muted-foreground">
                  <em>
                    A speculative research on the typology of the post-urban
                    landscape in Rotterdam. Combined with the developing
                    research methods of Hanzi—its formulation principles & the
                    intuitive visual-conceptual elements regarding spatial
                    narrative.
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
                    <span className="ml-2">
                      spatial poetry & speculative urban miniature{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      {" "}
                      Rotterdam urban/suburban areas{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper in kinds, reflective matter, light & shadow
                    </span>
                  </div>
                </div>
              </section>
              {/* Exhibition Info */}
              <section className="space-y-4 text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <strong>
                    <br /> <br />
                    The research process was first presented under the theme
                    ‘Liquid’ at Motel Mozaïque Festival 2019, Theatre Rotterdam
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
                    “Now I see your model, I can make a work out of it.”
                    <br />
                    <br />
                    During the Festival I met broeder Dieleman, a
                    performer/artist working with poetry, songs, sound and
                    objects. He once developed a project with music, photograph
                    and a book about Kleinpolderplein.
                    <br />
                    <br />
                    “I was there... walked around the water... I am always
                    inspired by the nature.”
                    <br />
                    <br />
                    _diary during MOMO Festival, 2019.
                    <br />
                    <strong className="font-ebgaramond"></strong>
                  </p>
                </section>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 5 */}
              <div>
                <section className=" text-foreground space-y-1">
                  <p></p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p>
                    Below are images of the research in progress & some first
                    phase miniatures.
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 6 */}
              <div>
                <section className=" text-muted-foreground space-y-1">
                  <p></p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>
          </div>
          {/* Title Section */}
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>
          <CarouselGallery images={writingImages} layouts={writingLayouts} />
          <p>(images above) research site #1: kleinpolderplein, Rotterdam</p>
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
