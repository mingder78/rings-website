import Image from "next/image";
import AutoCarousel from "@/components/AutoCarousel";
import SomeImages from "@/components/SomeImages";
import { type TextProps } from "../app/types";

const images = [
  "https://picsum.photos/400/200",
  "https://picsum.photos/200/201",
  "https://picsum.photos/400/402",
];

const MyCarousel = () => {
  return <AutoCarousel images={images} />;
};

const TextTitle = ({ title, infos, types, more, link, url }: TextProps) => {
  return (
    <div className="p-2">
      <p className="text-lg leading-relaxed space-y-2">{title}</p>
      <br />

      {infos.map((info, index) => (
        <>
          <small className="text-muted-foreground italic">{info}</small>
          <br />
          <br />
        </>
      ))}

      <section className="space-y-4 border-border py-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-1 sm:gap-1 text-sm">
          {types.map((type, index) => (
            <>
              <span className="text-foreground">
                <p>{type}</p>
              </span>
            </>
          ))}
        </div>
      </section>
      {/* Exhibition Info */}
      <p className="text-muted-foreground italic">
        {more}
        <a className="underline" href={url}>
          {link}
        </a>
      </p>
      <style>
        {`
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      width: 100%;
    }


    `}
      </style>
    </div>
  );
};

export default TextTitle;
