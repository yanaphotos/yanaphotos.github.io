"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const portfolioImages = [
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
];

export default function Portfolio() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioImages.map((src, index) => (
            <div
              key={src}
              className="cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={src}
                alt={`Portfolio image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={portfolioImages[photoIndex]}
          nextSrc={portfolioImages[(photoIndex + 1) % portfolioImages.length]}
          prevSrc={
            portfolioImages[
              (photoIndex + portfolioImages.length - 1) % portfolioImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + portfolioImages.length - 1) % portfolioImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % portfolioImages.length)
          }
        />
      )}
    </section>
  );
}
