import CarouselGallery from "@/components/CarouselGallery";
import AutoCarousel from "@/components/AutoCarousel";
import { writingBodyLayouts2 } from "../app/constances";

import { type Images2Props } from "../app/types";

const ImagesCol = ({ imagesLoop2, images2 }: Images2Props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-red-200">
          <AutoCarousel images={imagesLoop2} />
        </div>
        <div className="bg-blue-0 sm:p-4">
          <CarouselGallery images={images2} layouts={writingBodyLayouts2} />
        </div>
      </div>
      <style>
        {`
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      width: 100%;
    }


    `}
      </style>
    </>
  );
};

export default ImagesCol;
