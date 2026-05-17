import ScrollGallery2, { ImageItem } from "@/components/ScrollGallery2";

const images: ImageItem[] = [
  {
    src: "https://picsum.photos/id/1015/1600/1000",
    caption: "Morning light over quiet hills",
  },
  {
    src: "https://picsum.photos/id/1025/1600/1000",
    caption: "A slow walk through texture and space",
  },
  {
    src: "https://picsum.photos/id/1035/1600/1000",
    caption: "Soft movement in still air",
  },
];

export default function Page() {
  return <ScrollGallery2 images={images} />;
}
