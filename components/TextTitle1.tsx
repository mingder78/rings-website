import Image from "next/image";
import AutoCarousel from "@/components/AutoCarousel";
import SomeImages from "@/components/SomeImages";
import { type TextProps, Text1Props } from "../app/types";

const TextTitle1 = ({ title, infos }: Text1Props) => {
  return (
    <div className="p-2">
      <p className="text-[#244d75]  text-xl leading-relaxed space-y-2">
        {title}
      </p>
      <br />

      {infos.map((info, index) => (
        <div>
          <small className="text-muted-foreground italic">{info}</small>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default TextTitle1;
