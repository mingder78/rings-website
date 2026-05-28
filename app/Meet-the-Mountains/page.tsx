import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { meetImages, meetLayouts } from "../constances";

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
                  Meet the Mountains 邂 逅 山 林
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
                    Open our senses and mind; explore the landscape and write a
                    nature-handcrafted letter to the mountains.
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
                    <span className="ml-2">2014</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      immersive workshop; ritual tour & practice{" "}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      mountain & tea hill areas in Pinglin, New Taipei City,
                      Taiwan
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      nature, senses & hands; personal & collective narrative
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Teams</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      {" "}
                      DesignAct 設計思 , local collaboration with Pumpkin no.3
                      金瓜三号
                    </span>
                  </div>
                </div>
                <br />
                <p className="text-muted-foreground">
                  * In this project, Szu-Yi was the event planner & guiding
                  tutor while as the photographer developing materials for
                  pre-event online communication.
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
                    The narrative practice we have in the mountains is personal
                    & social, human & natural.
                    <br />
                    <br />
                    We lead everyone to connect to the others & nature, create
                    their inner dialogues in various forms from a photograph to
                    small theatre stages, from tea hoster visiting to food
                    sharing, from touching the moss to crafting a love letter.
                  </p>
                </section>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 5 */}
              <div>
                <section className=" text-muted-foreground space-y-1">
                  <p>
                    The workshop explores connections between the human and
                    nature. We explore our desire and consciousness of nature
                    which is different from the urban.
                    <br />
                    <br />
                    We visited a mountain town Pinglin. We describe its nature
                    as the lover. This concept leads people to sense things
                    around, to feel the qualities of living. It provides
                    different viewpoints about relationships with nature, others
                    and ourselves.
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
                    For instance, tea culture—from planting to making, from
                    hosting to tasting—indicates relationships between human &
                    nature, environment & lifestyle are all about human.
                    <br />
                    This workshop tour leads people to perceive the surroundings
                    in a closer, more intimate distance. The ways of narrative
                    in different layers inspire new imagination & connections to
                    space/place.
                    <br />
                    <br />
                    In the end, everyone shares their understanding through this
                    exploration. We gathered on the stone-sand bank of the
                    river. The place becomes a natural theatre for all
                    narrators, the letter writers. As opening more senses &
                    mind, everyone explores the environment, talks to nature,
                    others as well as themselves.
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
             md:grid-cols-[1fr_4fr_1fr]
             w-full
             gap-5"
          >
            <span>
              <section className=" text-muted-foreground space-y-1"></section>
            </span>
            <span>
              {" "}
              <div className="w-full aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/106731461"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </span>
            <span>
              <section className=" text-muted-foreground space-y-1">
                Meeting the Mountains (2014), a nature-exploring workshop by
                DesignAct
                <br />
                <br />
                _Project team | DesignAct, including Nien-Hua Gu, Szu-Yi Wang,
                Yu-Heng Hong, Liang-Chi Chen, Zhi-Dian Gu
              </section>
            </span>
          </div>
          {/* Title Section */}
          <CarouselGallery images={meetImages} layouts={meetLayouts} />
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
