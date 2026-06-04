import Image from "next/image";
import { type imageProps } from "../app/types";

export default function MyComponent({ image }: imageProps) {
  return (
    <div className="w-full max-w-[500px]">
      {" "}
      {/* Parent controls max width */}
      <img src={image} alt="" className="animate-fade-in" />
    </div>
  );
}
