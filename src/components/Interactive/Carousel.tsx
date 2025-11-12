"use client";

import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";
import clsx from "clsx";

import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Pagination } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import SanityImage from "@/components/Blocks/SanityImage";
import Card from "@/components/Blocks/Card";

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

interface CarouselProps {
  images?: CarouselImage[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, className }) => {
  const swiperRef = useRef<SwiperRef>(null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={clsx("relative w-full", className)}>
      {/* Left gradient overlay */}
      <div className="pointer-events-none absolute top-0 z-10 h-full w-16 bg-linear-to-r from-white to-transparent sm:left-0" />

      {/* Right gradient overlay */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent" />

      {/* Custom Navigation Buttons */}
      <button
        type="button"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className="text-primary absolute top-[42.5%] left-2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/30 p-3 shadow-lg transition-all hover:bg-white hover:shadow-xl sm:left-4"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <span className="sr-only">Previous slide</span>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="size-6!"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className="text-primary absolute top-[42.5%] right-2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/30 p-3 shadow-lg transition-all hover:bg-white hover:shadow-xl sm:right-4"
        aria-label="Next slide"
        title="Next slide"
      >
        <span className="sr-only">Next slide</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="size-6!"
          aria-hidden="true"
        />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        pagination={{ dynamicBullets: true }}
        initialSlide={2}
        spaceBetween={24}
        slidesPerView="auto"
        className={clsx(
          "[&_.swiper-pagination]:relative! [&_.swiper-pagination]:mt-10!",
          //   "[&_.swiper-pagination]:bottom-2! lg:[&_.swiper-pagination]:bottom-4!",
          "[&_.swiper-pagination-bullet]:bg-primary/40! [&_.swiper-pagination-bullet]:h-2.5! [&_.swiper-pagination-bullet]:w-2.5! [&_.swiper-pagination-bullet]:opacity-100!",
          "[&_.swiper-pagination-bullet-active]:bg-primary!"
        )}
        centeredSlides
        loop
      >
        {images.map((item) => {
          if (!item.image) return null;

          return (
            <SwiperSlide
              key={item._key || item.title}
              style={{ width: "288px" }}
            >
              <Card className="relative aspect-square w-72" noPadding>
                <SanityImage
                  image={item.image}
                  alt={item.image.alt || item.title || "Carousel image"}
                  fill
                  className="object-cover"
                />
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
