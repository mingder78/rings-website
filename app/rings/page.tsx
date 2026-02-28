import ImageLinksComponent from "@/components/ImageLinks";
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
                  Rings︎{" "}
                  <span className="text-muted-foreground">&infin; 環</span>
                </h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2">
                  <em>
                    While language serves as the connector as well as the
                    barrier;
                    <br />
                    While language serves as more the connector than the barrier
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
                      <span className="ml-2">2021</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">paper sculpture</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Material</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">paper in kinds</span>
                    </div>
                  </div>
                </section>
                {/* Exhibition Info */}
                <section className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <strong>
                      <br />
                      <br />
                      Presented in the exhibition 'Wat ik je nog wilde zeggen'
                      (What else I wanted to tell you) co-curated by Rianne
                      Zijderveld and city poet Dean Bowen at TENT Rotterdam.
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
                <section className="border-l-2 border-foreground pl-6 py-4 text-sm italic">
                  <p>
                    "A Hanzi is a poetry itself."
                    <br />
                    <span className="font-medium not-italic">—Anke Bangma</span>
                  </p>
                </section>
                {/* Main Description */}
                <section className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <strong>
                      <br />
                      <br />
                      Zi Xian, with a specific display unfolding the fragility
                      and timelessness of languages as our tools, is invited to
                      be part of the dialogues seeking the lost narrative and
                      found forms of our languages.
                    </strong>
                  </p>
                  <p>
                    <strong>More info will be updated soon.</strong>
                  </p>
                </section>
              </div>
            </div>

            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border content-end">
              {/* Item 5 */}
              <div>
                {" "}
                {/* Credits */}
                <section className="text-sm text-muted-foreground space-y-1">
                  <p>
                    Credit: Photo 1 by Szu-Yi Wang / Photo 2, 3, 5 by Aad
                    Hoogendoorn / Photo 4 (video still) by Elyssio Ramos
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
                      "This expo has
                      <em>
                        {" "}
                        questioned my answers and answered questions. I now
                        realize how fluid and transient language is..."
                      </em>
                    </strong>
                    <br />
                    <span className="not-italic font-medium">
                      —Amara van der Elst
                    </span>
                  </p>

                  <p className="text-sm leading-relaxed">
                    Below you could find one of the video series{" "}
                    <em>Dichters over de taal van de stad</em> responding to the
                    exhibition.
                  </p>

                  <div className="space-y-4 text-sm">
                    <div className="space-y-1">
                      <p>
                        <span className="font-medium">Gedicht:</span> Amara van
                        der Elst
                      </p>
                      <p>
                        <span className="font-medium">Organisatie:</span>{" "}
                        Paginagroots
                      </p>
                      <p>
                        <span className="font-medium">Beeld:</span> Elyssio
                        Ramos
                      </p>
                      <p>
                        <span className="font-medium">Muziek:</span> Eetieeetds
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div
            className="ytp-cued-thumbnail-overlay-image"
            style={{
              backgroundImage:
                'url("https://i.ytimg.com/vi/ryPogQsYzKY/maxresdefault.jpg")',
            }}
          />
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://www.youtube.com/embed/ryPogQsYzKY"
              title="YouTube video player"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p>
            More information at{" "}
            <a
              href="http://www.tentrotterdam.nl/artikelen/amara-van-der-elst-alfabetsoep/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-60 transition-opacity"
            >
              www.tentrotterdam.nl/artikelen/amara-van-der-elst-alfabetsoep/
            </a>
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
