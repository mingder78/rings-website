import React from "react";
import { imagesLinks } from "../app/constances";

const ImageLinksComponent = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 md:grid-cols-2 md:grid-rows-3 md:gap-4 lg:grid-cols-2 lg:grid-rows-3 lg:gap-6 place-items-center">
        {imagesLinks.map((img, idx) => (
          <div className="col-span-1 row-span-1 p-4" key={idx}>
            <a href={img[0]}>
              <img
                className="animate-fade-in"
                src={img[1]}
                alt="Writing-Body-Moving-Strokes"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLinksComponent;
