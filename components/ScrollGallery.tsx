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
    <div className="gallery">
      {images.map((img, i) => (
        <section className="scene" key={i}>
          <div className="frame">
            <img src={img.src} alt={img.caption || `image-${i}`} />
          </div>

          {img.caption && <div className="caption">{img.caption}</div>}
        </section>
      ))}

      <style>{`
        .gallery {
          background: #fff;
          width: 100%;
        }

        /* each image becomes a "story scene" */
        .scene {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 100px 24px;
        }

        /* image container controls max width like art book */
        .frame {
          width: min(1100px, 92vw);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .frame img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain; /* critical: no crop */
        }

        .caption {
          margin-top: 18px;
          font-size: 14px;
          color: #666;
          text-align: center;
          max-width: 640px;
          line-height: 1.5;
        }

        /* subtle spacing rhythm like editorial design */
        .scene + .scene {
          border-top: 1px solid #f3f3f3;
        }
      `}</style>
    </div>
  );
}
