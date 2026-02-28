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
                  Writing Body, Moving Strokes 書寫身體，風動筆畫
                </h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 bg-blue-0 p-4 rounded-lg border">
              {/* Item 2 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2">
                  <em>
                    Beginning with Chi: An Exploration of Hanzi’s Spatiality and
                    Embodiment
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
                      <span className="ml-2">2023</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">
                        research, body language, performance{" "}
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
                      本期就計畫由 台灣 國藝會 贊助 荷蘭 iii Den Haag, PANT
                      台荷藝集 協力
                      <br />
                      <br />
                      在研究成果之交流展演中，王思懿與音樂家、舞者及口說表演者等不同領域之（表演）藝術家進行即興互動與交流，透過人與人（身體）、人與非人（語言／氣候自然）的共演實驗，交換對漢字之身體性、空間性與環境感知的理解。
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
                  <p>"由氣出發——探索漢字的空間性與身體性"</p>
                </section>
                {/* Main Description */}
                <section className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <strong>
                      <br />
                      <br />
                      Raw Dates Session, iii Den Haag
                    </strong>
                  </p>
                  <p>
                    <br />
                    <br />
                    <strong>
                      Simone Sacchi（電子音樂，義大利）
                      <br />
                      Marianne（身體行動，荷蘭）
                      <br />
                      Benjamin Janzen（表演與裝置藝術，德國）
                      <br />
                      Mar Fu Qi（視覺藝術、攝影、身體行動，中國）
                      <br />
                      Alessia Lombardi（舞蹈，義大利）
                      <br />
                      Valerio Conti（鋼琴、聲樂，義大利）
                      <br />
                      以及其他來自各種領域之創作者。
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
                    《書寫身體，風動筆畫》為主持藝術家王思懿長期創作研究「字築
                    Zi Zhu: Hanzi Building
                    Practice」之延伸實驗，以漢字作為空間與感知的媒介，聚焦漢字文化中潛藏的空間性與身體性，進一步探討身體、空間與氣候感知之間的交互關係。
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
                      計畫由「風、雲、雨、氣」等氣候漢字之研究出發，回溯其造字邏輯與天象觀察，並嘗試將文字所指涉的「氣」轉化為身體運動中的「氣」，發展一套以身體演繹文字、以空間承載感知的創作方法。作為多元藝術先導計畫，本計畫透過「空間詩學」、「空間譜記」與「身體的空間書寫」三個研究面向，進行文本研究、漢字結構之視覺分析、錄像探討與即興交流，測試漢字空間性轉化為身體語言與展演形式的可能性。
                    </strong>
                  </p>
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
              src="https://www.youtube.com/embed/uIal9Dqe3c4?si=XQpbfWr9N5Jx70yN"
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
          <p>書寫身體 過程筆記&研究錄像</p>
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
