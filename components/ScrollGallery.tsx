import React from "react";

export type ImageItem = {
  src: string;
  caption?: string;
};

type Props = {
  images: ImageItem[];
};

export default function ScrollGallery({ images }: Props) {
  return (
    <div className="wrapper">
      {images.map((img, i) => (
        <section className="scene" key={i}>
          <div className="box box2">
            <img src={img.src} alt={img.caption || `image-${i}`} />
          </div>

          {img.caption && <div className="caption">{img.caption}</div>}
        </section>
      ))}

      <style>{`
        .wrapper {
         display: grid;
          /* Creates three columns: one 200px wide and two that share remaining space equally */
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

          gap: 20px; /* Optional: adds space between items */
        }

        .box {
          border: 5px;
        }


        .box img {
          width: 100%;
          height: 100%;
        }

        .box1 img {
          object-fit: cover;
        }

        .box2 img {
          object-fit: contain;
        }

        .box3 img {
          object-fit: fill;
        }

        /* =========================
           Large screen
        ========================= */
        @media (min-width: 1024px) {
          .wrapper {
            grid-template-columns: repeat(
              auto-fill,
              minmax(100px, 1fr)
            );

            gap: 24px;
          }

          .box {
            height: 320px;
          }
        }

        /* =========================
           Medium screen
        ========================= */
        @media (max-width: 1023px) {
          .wrapper {
            grid-template-columns: repeat(
              auto-fill,
              minmax(220px, 1fr)
            );

            gap: 16px;
          }

          .box {
            height: 240px;
          }
        }

        /* =========================
           Small screen
        ========================= */
        @media (max-width: 640px) {
          .wrapper {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .box {
            height: auto;
          }

          .box img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
