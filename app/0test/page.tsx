import CarouselGallery from "@/components/CarouselGallery";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "Screen-Shot-2020-03-20-at-11.21.10-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.47.40-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.44.27-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.00.48-AM.png", alt: "x" },
  { src: "sketch_plancluster.jpg", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.24.32-AM.png", alt: "x" },
  { src: "diagram_nrcollage.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-10.58.54-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-10.58.28-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.22.58-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.00.32-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.00.13-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-10.59.59-AM.png", alt: "x" },
  { src: "Screen-Shot-2020-03-20-at-11.21.10-AM.png", alt: "x" },
];

const Page = () => {
  return <CarouselGallery />;
};

export default Page;
