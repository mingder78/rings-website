import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { ziImages, ziLayouts } from "../constances";
import { ziImages2, ziLayouts2 } from "../constances";
import { ziImages3, ziLayouts3 } from "../constances";
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
                  Zi Xian 字 閒 (The Hanzi Space)
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
                    A research on language culture & its spatial philosophy; a
                    representation of spatial-concept Han characters in space
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
                    <span className="ml-2">2017-18; 2019</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type</span>
                    <span className="ml-2">|</span>
                    <span className="ml-2">
                      paper sculpture, language miniature of spatial-cultural
                      research{" "}
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
                      paper in kinds, metal, light & shadow
                    </span>
                  </div>
                </div>
              </section>
              {/* Exhibition Info */}
              <section className="space-y-4 text-sm leading-relaxed">
                <p className="text-foreground">
                  <strong>
                    <br /> <br />
                    Invited exhibition under theme ‘Liquid’ in Motel Mozaïque
                    Festival 2019, Theatre Rotterdam Schouwburg
                  </strong>
                </p>
                <p className="text-muted-foreground">
                  Exhibited in MIARD 2018 Graduation Show, Rotterdam
                </p>
                <p className="text-foreground">
                  <br />
                  <br />
                  First exhibited in ‘What’s old, What’s new’ Exhibition EUMies
                  Award 2019, Palau Victòria Eugènia, Barcelona. (Followed by
                  traveling exhibitions in Europe during 2019-2020.)
                  <br />
                  <br />
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
                    “... It is both social and universal. The physical
                    experience brings back our awareness and sensibility [...] I
                    can imagine this work presents on a boulevard, extends
                    endlessly.”
                    <br />
                    <br />
                    _quoted review by Ka-Tjun Hau, Amsterdams Fonds voor de
                    Kunst.
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
                    The project is a research about the Han character xian 閒
                    (space, room, moment), related to both space and time.
                    Inspired by the spatial-visual formulating principles of
                    xian, it practices a new, universal architectural approach
                    to realizing ideas from visual culture to spatial
                    perception.
                    <br />
                    <br />
                    This delicately crafted space also investigates the intimate
                    relationships among maker, materials, space and visitors. It
                    realizes the sensibility of the author’s Asian culture in a
                    contemporary spatial project.
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
                <div className="flex items-center justify-center w-full">
                  <img
                    src="xian-03.png"
                    alt=""
                    className="
                      w-10
                      h-auto
                      sm:h-full
                      object-contain
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
                <section className=" text-muted-foreground space-y-1">
                  <p>
                    閒 xian (space, room, moment) consists of the sign 月 (moon)
                    in the middle of the sign 門 (door). It depicts the delicate
                    moment of moonlight streaming through a gap in between the
                    two-leaf door. Thus, a Han character is like a drawing. As
                    describing & expressing, this spatial language allows
                    visitors/readers to immerse themselves in 2D & 3D
                    perceptions of the imaginary culture behind.
                    <br />
                    <br />
                    Derived from the thesis research, the installation practices
                    the minimalist aesthetics of subtlety and immerses visitors
                    in a unique, poetic atmosphere—with the concept of xian
                    (space) streaming down through immaterial qualities of
                    light, shadow & time.
                  </p>
                </section>
                <section className="text-sm text-muted-foreground space-y-1">
                  <p></p>
                </section>
              </div>
            </div>
          </div>
          {/* Title Section */}
          <CarouselGallery images={ziImages} layouts={ziLayouts} />
          <p className="text-center">
            (above) the latest presentation in April during Motel Mozaique
            Festival 2019, Theatre Rotterdam Schouwburg.
          </p>
          <CarouselGallery images={ziImages2} layouts={ziLayouts2} />
          <p className="text-center">(below) research process</p>
          <CarouselGallery images={ziImages3} layouts={ziLayouts3} />
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
