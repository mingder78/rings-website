import AutoCarousel from "@/components/AutoCarousel";
import SomeImages from "@/components/SomeImages";

import { type Images2Props } from "../app/types";

const ImagesCol = ({ images, image1, imagesLoop }: Images2Props) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-red-0">
          <AutoCarousel images={imagesLoop} />
        </div>
        <div className="bg-blue-0 ">
          <SomeImages images={images} />
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
