import ScrollGallery, { ImageItem } from "@/components/ScrollGallery";

const images: ImageItem[] = [
  {
    src: "82B6A502-4FB6-4811-915D-A4CDAC7587AEa.jpg",
    caption: "Morning light over quiet hills",
  },
  {
    src: "PXL_20210621_062035140.jpg",
    caption: "Morning light over quiet hills",
  },
  {
    src: "IMG_6562_bbg_crpoed.jpg",
    caption: "A slow walk through texture and space",
  },
  {
    src: "matrix.png",
    caption: "Soft movement in still air",
  },
];

export default function Page() {
  return (
    <>
      <ScrollGallery images={images} />
    </>
  );
}
