import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { ZiImages, ZiImages2, ZiLayouts, ZiLayouts2 } from "../constances";

export default function RingsPage() {
  return (
    <div className="font-ebgaramond flex min-h-screen bg-background text-foreground md:pl-60">
      {/* Main Content */}
      <main className="flex-1 sm:px-12 md:px-4">
        <div className="py-6 sm:py-12 px-8  space-y-12 bg-slate-0">
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
                  Zi Yuan, A Spring Stroll 字 園 遊 步
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="bg-yellow-0 col-span-1 row-span-1">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2">
                  <em>
                    A series of paper sculptures scattering in the garden,
                    responding to the regional climate issues & recalling our
                    awareness of seasonal relationships with nature
                    <br />
                    <br />
                    <br />
                  </em>
                </p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 gap-8">
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
                        paper sculpture, narrative poems, video{" "}
                      </span>
                    </div>
                    <div>
                      <span className="">Location</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        Schellingwouderpark, Amsterdam
                      </span>
                    </div>
                    <div>
                      <span className="">Material</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        paper, metal, moving elements in the wind
                      </span>
                    </div>
                    <div>
                      <span className="">Location</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        Merwe-Vierhavens (M4H), Rotterdam
                      </span>
                    </div>
                    <div>
                      <span className="">Collaboraiton</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        performer Nicolle van de Berg & cinematographer Nino
                        Kennis
                      </span>
                    </div>
                    <br></br>
                    <div>
                      <span className="">Screening</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        Motel Mozaïque Festival 2021
                        <br></br>
                        <p className="underline">TENT Online Cinema 2022</p>
                      </span>
                    </div>
                  </div>
                </section>
                {/* Exhibition Info */}
                <section className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    <br />
                    <br />
                    It is a site-specific project developed at Voedseltuin
                    Rotterdam, presented by MOMO Create & Perform. The research
                    is granted by NCAF National Culture and Arts Foundation
                    國藝會.
                    <br />
                    <br />
                  </p>
                  <p className="italic text-foreground">
                    落雨點滴化作詩 在風散盡前萌發 型態特別清晰 像肢體
                    更像造字的一筆一畫
                    <br></br>
                    <br></br>
                    It swings in the wind, especially perform like a figure, a
                    body, in forms of creation of Chinese characters
                    <br></br>
                    Breathe in, breathe out The rain comes with its endless
                    drops It waters the groves, refreshes our minds It loops in
                    the gardens and softens our city Absorbed, retained, and
                    given back to the needs of our plants and the planet
                    <br></br>
                    All breathe together, in and out
                    <br></br>
                    <br></br>— Rain 雨，一象天，冂象雲，水霝其間也。 —Rain Yu,
                    一 refers to the sky, 冂 refers to heavy clouds, and the
                    rain drops in between.
                    <br></br>
                    (extracted from chapter 2: Living with the Cloud, Rain & Air
                    雲雨气)
                  </p>
                </section>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 gap-4">
              {/* Item 4 */}
              <div>
                {" "}
                {/* Quote */}
                <section className="">
                  <p>
                    How do we form and perform in the air?
                    <br></br>
                    How do we read and breathe together in the spring?
                  </p>
                </section>
                {/* Main Description */}
                <section className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                  <p>
                    <br />
                    <br />A language could serve as a space for reading and
                    wandering. Resonating with the concepts in Voedseltuin
                    Rotterdam, Zì Yuán (字園, meaning ‘Hanzi Garden’) invites
                    the audience to immerse themselves in the narrative and the
                    performance among the Hanzi sculptures subtly introduced
                    into the harbor garden.
                  </p>
                  <br />
                  <br />
                  <br />
                  <p>
                    _Currently, video could be requested through a private link.
                    Please contact me via email if interested.
                  </p>
                  <br />
                  <br />
                  <br />
                </section>{" "}
                {/* Credits */}
                <section className="text-sm text-foreground space-y-1 italic">
                  <p>
                    With the study of Hanzi that indicates how the ancients
                    observed nature in order to understand the universe—the
                    time, the season, the weather, and the operation of the
                    world—the project consists of texts, sculptures, and body
                    movements that lead us to read nature. Through her
                    translating/transforming practice, Szu-Yi investigates how
                    the storytelling qualities of the language inspire our
                    imagination and the public awareness of the environment.
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0 gap-8 ">
              {/* Item 5 */}
              <div>
                {" "}
                {/* Credits */}
                <section className="text-sm text-muted-foreground space-y-1 italic">
                  <p></p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0  ">
              {/* Item 6 */}
              <div>
                {" "}
                {/* Video/Response Section */}
                <section className="space-y-8">
                  <p className="text-sm leading-relaxed text-muted-foreground italic"></p>
                </section>
              </div>
            </div>
          </div>

          <CarouselGallery images={ZiImages} layouts={ZiLayouts} />
          <p className="text-center">
            video stills, or see the{" "}
            <a
              href="https://www.instagram.com/p/CN26K8vJt_F/"
              className="text-blue-500 underline"
            >
              trailer
            </a>
          </p>
          <hr />

          <CarouselGallery images={ZiImages2} layouts={ZiLayouts2} />

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
