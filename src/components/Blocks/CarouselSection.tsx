"use client";

import React from "react";
import dynamic from "next/dynamic";

const LazyCarousel = dynamic(
  () => import("@/components/Interactive/Carousel"),
  { ssr: false }
);

interface CarouselImage {
  _key?: string;
  title?: string;
  image?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: Record<string, unknown>;
    };
    alt?: string;
  };
}

interface ImageCollection {
  title?: string;
  images?: CarouselImage[];
}

interface CarouselSectionProps {
  images?: ImageCollection;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ images }) => {
  if (!images || !images.images || images.images.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {images.title && (
        <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl">
          {images.title}
        </h2>
      )}

      <div className="absolute top-0 left-0 h-full w-16 bg-linear-to-r from-white to-transparent" />
      <LazyCarousel images={images.images} />

      <div className="top absolute right-0 h-full w-16 bg-linear-to-l from-white to-transparent" />
    </section>
  );
};

export default CarouselSection;
