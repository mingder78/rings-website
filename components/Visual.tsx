"use client";
import ImagesCol from "@/components/ImagesCol";
import InfoType1 from "@/components/InfoType1";
import { type Type2Props } from "../app/types";

const imagesInLoop = [
  "musicscape-81.png",
  "musicscape-71.png",
  "musicscape-79.png",
];
const others = ["musicscape-70.png", "musicscape-30s.png", "musicscape-82.png"];

export default function Visual({
  title,
  infos,
  types,
  more,
  link,
  url,
  image1,
  imagesLoop,
  images2,
  imagesLoop2,
}: Type2Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 p-4">
      <InfoType1
        title={title}
        infos={infos}
        types={types}
        more={more}
        link={link}
        url={url}
        image1={image1}
        imagesLoop={imagesLoop}
      />
      <ImagesCol imagesLoop2={imagesLoop2} images2={images2} />
    </div>
  );
}
