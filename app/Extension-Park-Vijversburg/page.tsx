import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { extImages, extLayouts } from "../constances";

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
                  Modeling for ‘Extension Park Vijversburg’
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
                    An architectural modeling project during the internship at
                    Studio MAKS, Rotterdam.
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
                      architecture model for exhibition, miniature{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      {" "}
                      futuristic space within Han characters{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      plastic in kinds, printing with subtle colours
                    </span>
                  </div>
                </div>
              </section>
              {/* Exhibition Info */}
              <section className="space-y-4 text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <strong>
                    <br /> <br />
                    Modeling for Studio MAKS’ project Extension Park Vijversburg
                    nominated in the shortlist of EU Prize for Contemporary
                    Architecture - Mies van der Rohe Award 2019.
                  </strong>
                </p>
                <p className="text-foreground">
                  <br />
                  <br />
                  First exhibited in ‘What’s old, What’s new’ Exhibition EUMies
                  Award 2019, Palau Victòria Eugènia, Barcelona. (Followed by
                  traveling exhibitions in Europe during 2019-2020.)
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
                    “We wanted to make the most subtle intervention. It was
                    designed & imagined as part of the landscape.”
                    <br />
                    <br />
                    The model expresses the tender gestures of the extension in
                    Park Vijversburg. It extracts the atmosphere of the location
                    & delivers the central notion of the project.
                    <br />
                    <br />
                    “... The building reflects the natural surroundings & makes
                    the pavilion and landscape blend into one another.”
                    <br />
                    <br />
                    With natural but delicate curves, dissolved colours & quiet
                    gypsum witness, it creates the atmosphere for immersing in
                    between the invisible glass facades & the abundant landscape
                    around.
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
                    It is a model for Rotterdam-based Studio MAKS’ project
                    ‘Extension Park Vijversburg’—a new visitor center located at
                    the historical Park Vijversburg established in the 19th
                    century with its rich nature & landscapes.
                    <br />
                    <br />
                    “Thin glass facades stretch into the park and follow the
                    existing natural elements: a pond, a tree line and the villa
                    garden...”
                    <br />
                    <br />
                    Following the narrative of the project, this exhibition
                    model aims to express the ‘atmosphere’ of the visitor center
                    in Park Vijversburg. Its subtlety and tenderness were
                    revealed through the materialization, the contemplating
                    craftmanship and patience of the model making process.
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
                    Regarding this project, below are more texts from Studio
                    MAKS’ official introduction:
                    <br />
                    <br />
                    “Park Vijversburg, situated in the north of the Netherlands,
                    is an 18th century estate that has been open to the public
                    since 1892. Throughout the year, the park hosts many events
                    such as international art exhibitions, musical performances,
                    church services and excursions.
                    <br />
                    <br />
                    In 2011 Studio Maks won the competition for a new visitor
                    center together with Junya Ishigami & Associates. To
                    accommodate the increasing number of visitors, the client
                    asked for a new extension to the historical villa to be used
                    as a meeting and exhibition space. The old villa and
                    surrounding park were to be treated with the utmost care, as
                    they are both national monuments.
                    <br />
                    <br />
                    [...]
                    <br />
                    <br />
                    The central space lies partially sunken into the landscape;
                    softly undulating slopes guide visitors from the large scale
                    exterior of the park into the heart of the building, one
                    meter below ground level. It thus reduces the impact of the
                    building on its surroundings, gives the interior a certain
                    intimacy and provides visitors with another perspective on
                    the landscape.”
                  </p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>
          </div>
          {/* Title Section */}
          <p className="text-xs text-muted-foreground pt-12 border-t border-border"></p>
          <CarouselGallery images={extImages} layouts={extLayouts} />
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
