import Image from "next/image";
import AutoCarousel from "@/components/AutoCarousel";

function MyComponent() {
  return (
    <div className="w-full max-w-[500px]">
      {" "}
      {/* Parent controls max width */}
      <Image
        src="https://picsum.photos/700/800"
        alt="Responsive image"
        width={800} /* Intrinsic width (defines aspect ratio) */
        height={600} /* Intrinsic height (defines aspect ratio) */
        className="w-full h-auto" /* Tailwind: Fluid width, automatic height */
        sizes="(max-width: 768px) 100vw, 500px"
      />
    </div>
  );
}

const images = [
  "https://picsum.photos/400/200",
  "https://picsum.photos/200/201",
  "https://picsum.photos/400/402",
];

const MyCarousel = () => {
  return <AutoCarousel images={images} />;
};

type WelcomeProps = {
  name: string;
};

const App = ({ name }: WelcomeProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-10 gap-10">
        <div className="bg-red-200 flex justify-center items-center">
          <figure>
            <MyCarousel />
          </figure>
        </div>
        <div className="bg-blue-200 flex items-center">
          <figure>
            <img src="https://picsum.photos/400/200" alt="img" />
          </figure>
        </div>
        <div className="bg-yellow-200 flex justify-center items-center">
          <figure>
            <img src="https://picsum.photos/800/200" alt="img" />
          </figure>
        </div>
      </div>
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
    </>
  );
};

export default App;
