import Image from "next/image";
import AutoCarousel from "@/components/AutoCarousel";
import SomeImages from "@/components/SomeImages";
import MyComponent from "@/components/MyComponent";
import TextTitle from "@/components/TextTitle";
import { type Type1Props } from "../app/types";

export default function InfoType1({
  title,
  infos,
  types,
  more,
  link,
  url,
  image1,
  imagesLoop,
}: Type1Props) {
  return (
    <div className="flex flex-col">
      <TextTitle
        title={title}
        infos={infos}
        types={types}
        more={more}
        link={link}
        url={url}
      />

      <div className="bg-blue-0 flex justify-center  items-center">
        <MyComponent image={image1} />
      </div>
      <br></br>
      <br></br>
      <div className="bg-red-0 flex justify-center items-center">
        <AutoCarousel images={imagesLoop} />
      </div>
    </div>
  );
}
