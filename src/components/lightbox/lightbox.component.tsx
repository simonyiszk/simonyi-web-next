"use client";
import Image from "next/image";
import { useState } from "react";
import { default as Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type ImageType = {
  url: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

function LightBox({ images }: { images: ImageType[] }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index = 0) => {
    setIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="mb-4 grid">
      <div className="-mx-4 flex justify-start gap-4 overflow-x-auto md:mx-0 md:flex-wrap md:justify-center md:overflow-x-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[72px] w-[128px] flex-shrink-0 bg-black hover:cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image src={image.url} alt={image.alt} fill style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
        <Lightbox
          open={isOpen}
          slides={images.map((image) => {
            return {
              src: image.url,
              alt: image.alt,
              title: image.title,
              description: image.description,
              width: image.width,
              height: image.height,
            };
          })}
          index={index}
          close={() => closeLightbox()}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        />
      </div>
    </div>
  );
}

export { LightBox };
