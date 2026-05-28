import ImageLinksComponent from "@/components/ImageLinks";
import CarouselGallery from "@/components/CarouselGallery";
import { photoImages, photoLayouts } from "../constances";

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
           md:grid-cols-1 md:gap-4
           lg:grid-cols-1 lg:gap-6

           "
          >
            <div className="bg-red-0 col-span-1 row-span-1">
              {/* Item 1 */}
              <div>
                <p className="text-sm leading-relaxed space-y-2 text-blue-900">
                  a klaproos; a yellow stone / above the water; into the dunes
                  <br />
                  —selection 2016 - 2019
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
                    A series of urban drifting from my homeland Taiwan to the
                    Netherlands—from a garden to a harbor; from an alley to a
                    rooftop; from downtown to suburban landscapes / from street
                    ceremony to a residential round corridor; from a neighbor
                    tree to the surrounding mountains.
                  </em>
                </p>
              </div>
            </div>
          </div>
          {/* Title Section */}
          <CarouselGallery images={photoImages} layouts={photoLayouts} />
          <p className="text-center text-foreground p-10">
            (updating)
            <br />
            <br />
            Please visit my instagram for other ‘urban narrative’, or check my
            facebook with photgraphy for concerts and activities.
          </p>
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
