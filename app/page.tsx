// app/about/page.tsx
import FadeCarousel from "@/components/FadeCarousel";

const myImages = [
  "IMG_6562_bbg_crpoed.jpg",
  "000023.jpg",
  "PXL_20210621_062035140.jpg",
  "IMG_6162a.jpg",
  "Screen-Shot-2020-04-16-at-5.32.35-PM.png",
  "IMG_6207.JPG",
  "drawinga.jpg",
  "IMG_6510.jpg",
  "kites00578.png",
  "IMG_6562_bbg_crpoed.jpg",
  "kites01719.png",
  "IMG_6771.JPG",
  "matrix.png",
  "IMG_7036.JPG",
  "musicscape-81.png",
  "PXL_20210415_172701758.jpg",
];

export default function AboutPage() {
  return <FadeCarousel images={myImages} />;
}
