import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { foreshoreImages, foreshoreLayouts } from "../constances";

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
                  Foreshore 漫 步 潮 閒
                </p>
              </div>
            </div>
            <div className="bg-yellow-0 col-span-1 row-span-1">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2">
                  <em>
                    A series of paper miniatures presenting the research on
                    narrative with light, shadow and their movements.
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
                    <span className="ml-2">2020</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">paper sculpture, music video </span>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper in kinds, light & shadow in movements
                    </span>
                  </div>
                </div>
              </section>
              {/* Exhibition Info */}
              <section className="space-y-4 text-sm leading-relaxed">
                <p>
                  <strong></strong>
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
                    <br />
                    <strong className="font-ebgaramond">
                      "There is a crack, a crack in everything. That's how the
                      light gets in."
                    </strong>
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0">
              {/* Item 5 */}
              <div>
                {" "}
                {/* Credits */}
                <section className="text-sm text-foreground space-y-1">
                  <p>
                    Official music video for the song ‘Foreshore’ from YenTing
                    Lo’s album ‘Epiphyllum’
                    <br />
                    <br />
                    <br />
                    <br />
                    弦聲響起時，光掠過、劃開了第四個維度
                    <br />
                    掌握那股動能是這一連串探討的起點
                    <br />
                    猶如舞於縫隙裏、穿梭，從紙間透出的光影流動
                    <br />
                    當潮汐躍然於紙上
                    <br />
                    <br />
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0  ">
              {/* Item 6 */}
              <div>
                {/* Video/Response Section */}
                <p className="text-sm leading-relaxed">
                  One splits into a new dimension as the strings start
                  vibrating... It is a process of investigating the abstract
                  momentum. As if streaming through every splits, they dance,
                  wander, seep from a surface into the space of tides.
                </p>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0   content-end">
              {/* Item 5 */}
              <div>
                {/* Credits */}
                <section className="text-sm text-muted-foreground space-y-1">
                  <p>
                    Developed with subtle gestures upon the minimal paper
                    sculptures, this video interweaves a series of
                    interpretations about the phenomenon among the moon and the
                    tides, the strings and the vibration, the light and the
                    shadow.
                    <br />
                    <br />
                    Among the melody and the movements, the lyrics and the
                    performance, it's all about the narrative.
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0  ">
              {/* Item 6 */}
              <div className="italic">
                {" "}
                {/* Video/Response Section */}
                <section className="space-y-8 border-t border-border pt-8">
                  <p className="text-sm leading-relaxed italic">
                    Concept Creation / Photography | SzuYi Wang
                    <br />
                    Editing | YenTing Lo
                    <br />
                    Production & Performance | SzuYi Wang & YenTing Lo
                    <br />
                    Special thanks to Ferran Bertomeu Castells
                    <br />
                  </p>

                  <br />
                  <br />

                  <div className="space-y-4 text-sm">
                    <div className="space-y-1">
                      <p>
                        <span className="font-ebgaramond">
                          Music / Lyrics / Arrangement | YenTing Lo
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Vocal | YenTing Lo
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Guitar | Davor Stehlik
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Double Bass | William Barrett
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Drums | Roope Kantonen
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Violin | HuiWen Cheng, WanRu Cheng
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Viola | ShihHsien Tsai
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Cello | ShengChiun Lin
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Recording Engineer | Lex Tanger
                        </span>
                      </p>
                      <p>
                        <span className="font-ebgaramond">
                          Mixing/Mastering | Attie Bauw
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          {/* Title Section */}
          <div className="w-full aspect-video">
            <iframe
              src="https://player.vimeo.com/video/424638316"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <CarouselGallery
            images={foreshoreImages}
            layouts={foreshoreLayouts}
          />
          <p className="text-xs text-muted-foreground pt-12 border-t border-border">
            <hr />
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
