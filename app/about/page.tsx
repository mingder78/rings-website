import React from "react";
import { imagesLinks } from "../constances";

const ImageLinksComponent = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 md:grid-cols-2 md:grid-rows-3 md:gap-4 lg:grid-cols- lg:grid-rows-3 lg:gap-6 place-items-center">
      {imagesLinks.map((img, i) => (
        <div className="col-span-1 row-span-1 bg-blue-100 p-4 rounded-lg border">
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
  );
};

export default ImageLinksComponent;
