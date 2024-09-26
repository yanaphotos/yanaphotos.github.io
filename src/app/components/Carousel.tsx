"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
  "https://placehold.co/400x300/000000/FFFFFF.png",
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Carousel image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Capturing Life&apos;s Moments | Yana Photography
          </h1>
          <p className="text-xl">
            With over a decade of experience, Yana brings your stories to life
            <br></br>
            through her lens. Based in Kyiv, Ukraine, she specializes in
            <br></br>
            portrait, event, and landscape photography.
          </p>
        </div>
      </div>
    </div>
  );
}
