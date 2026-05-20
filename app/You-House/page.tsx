import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery,  from "@/components/CarouselGallery";
import { youHouseImages } from "../constances";

export default function RingsPage() {
  return (
    <div className="font-ebgaramond flex min-h-screen bg-background text-foreground md:pl-60">
      {/* Main Content */}
      <main className="flex-1 sm:px-12 md:px-4">
        <div className="py-6 sm:py-12 px-8 space-y-12 bg-slate-0">
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
                  Yóu House 遊 居 之 間
                </p>
                <p className="text-muted-foreground">
                  (Wandering House: Strolling above, Living beneath, Wandering
                  in between)
                </p>
              </div>
            </div>
            <div className="bg-yellow-0 col-span-1 row-span-1">
              {/* Item 2 */}
              <div>
                <p className="text-muted-foreground text-sm leading-relaxed space-y-2">
                  <em>
                    A design proposal using the roof as the surface/membrane to
                    define the duality of an artist’s filming language and the
                    fragility of her philosophy concealed and revealed in
                    between.
                  </em>
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div>
              {/* Project Meta */}
              <section className="text-muted-foreground space-y-4 border-border py-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-1 sm:gap-1 text-sm">
                  <div>
                    <span className="">Year</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">2021</span>
                  </div>
                  <div>
                    <span className="">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      residential housing (working & living), conceptual{" "}
                    </span>
                  </div>
                  <div>
                    <span className="">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">Schellingwouderpark, Amsterdam</span>
                  </div>
                  <div>
                    <span className="">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      foam modeling; concrete & glass for structural proposal
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
            <div className="col-span-1 row-span-1 bg-blue-0 gap-4">
              {/* Item 4 */}
              <div>
                {" "}
                {/* Quote */}
                {/* Main Description */}
                <section className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <br />

                    <strong className="font-normal">
                      “ Its dual-centered form aims to trigger more fluid
                      movements in the owner’s life as well as, in the future,
                      really start moving as the theatre of life..”
                    </strong>
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0  ">
              {/* Item 6 */}
              <div>
                <p className="text-sm text-muted-foreground">
                  This house is designed for Melanie Bonajo, an artist with her
                  thinking-forward voice conceiving the fragility of humanity
                  and our human society. Her practices are often developed along
                  the sides of treads in between life and death. This
                  design—eventually—use the roof as the surface to define the
                  duality of her filming language, forms of media and her
                  philosophy regarding her art practice in a pure yet fragile
                  vibe.
                  <br />
                  <br />
                  The roof reflects the alternative ways we use the
                  space—strolling above the roof as parts of the daily routines,
                  co-living with wild plants and nature under it, and moving
                  between these two ‘worlds’. Meanwhile, responding to her films
                  and installation artworks breaking the notions of the ‘white
                  cubes’, the transparent glass walls serve as the main
                  architectural elements blurring boundaries between rooms and
                  introducing meandering corridors from three directions—a
                  number of the dynamic and balancing. Merely two partitional
                  walls are not transparent due to the functional needs of the
                  bathroom and toilet.
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 ">
              {/* Item 6 */}
              <div>
                {" "}
                {/* Video/Response Section */}
                <section className="">
                  <p className="text-sm text-muted-foreground">
                    Her unique approaches linking the relationships between
                    humans and nature challenge our common senses while recalls
                    an alternative playfulness. The spatial gestures are subtly
                    welcoming of the artists’ visitors as well as other living
                    creatures. There’re some intimate encounters between the
                    sciophilous plants living near the foundation of the roof
                    terrace and the person taking her/his bath, while that low
                    ‘gap/tunnel’ just allows small animals to pass by.
                    <br />
                    <br />
                    Besides the roof terrace showing a low yet welcoming
                    gesture, its dual-centered arrangements aim to trigger more
                    fluid movements in the owner’s life as well as in the future
                    really start moving as the theatre of life..
                  </p>
                </section>
              </div>
            </div>
          </div>
          <hr></hr>
          <CarouselGallery images={youHouseImages} />
          <hr></hr>
          <p className="text-center text-foreground">
            More drawings & architectural details will be updated later.
          </p>
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
