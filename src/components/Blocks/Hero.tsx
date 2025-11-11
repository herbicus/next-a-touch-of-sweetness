"use client";

import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import { useScrollContext } from "@/context/ScrollContext";

import { PortableText } from "@portabletext/react";

import SanityImage from "@/components/Blocks/SanityImage";
import { PortableTextContent } from "@/components/Blocks/PortableTextContent";

import Card from "@/components/Blocks/Card";
import Logo from "@/components/SVGs/Logo";

import type { TypedObject } from "@portabletext/types";
import type { PortableTextBlock } from "@portabletext/types";

interface HeroProps {
  title?: PortableTextBlock[] | PortableTextBlock;
  description?: TypedObject[] | TypedObject;
  image?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: Record<string, unknown>;
    };
    alt?: string;
  };
  mobileImage?: {
    asset?: {
      _id: string;
      url: string;
      metadata?: Record<string, unknown>;
    };
    alt?: string;
  };
}

// Expo Out easing function
// Cubic bezier approximation: cubic-bezier(0.19, 1, 0.22, 1)
const expoOut = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  image,
  mobileImage,
}) => {
  const { scrollY } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  // Calculate parallax offset based on scroll position
  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Calculate how much we've scrolled past the section start
    // When section is at top (scrollY = sectionTop), scrollOffset = 0
    const scrollOffset = Math.max(0, scrollY - sectionTop);

    // Maximum scroll distance within the section
    const maxScroll = sectionHeight + viewportHeight;

    // Normalize scroll progress (0 to 1)
    const scrollProgress = Math.min(1, scrollOffset / maxScroll);

    // Apply Expo Out easing
    const easedProgress = expoOut(scrollProgress);

    // Parallax speed factor - image moves slower than scroll (0.3 = 30% of scroll speed)
    // Positive value moves image down as we scroll down
    const parallaxSpeed = 0.4;
    // Calculate Y offset - positive values move image down
    const yOffset = easedProgress * scrollOffset * parallaxSpeed;

    setParallaxY(yOffset);
  }, [scrollY]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Background Image with Parallax Effect */}
      {image && (
        <div
          className={clsx(
            "absolute inset-0 z-0 h-full w-full overflow-hidden",
            {
              "hidden lg:block": mobileImage,
            }
          )}
          style={{
            transform: `translate3d(0, ${parallaxY}px, 0)`,
          }}
        >
          <SanityImage
            image={image}
            className="object-cover"
            alt={image.alt || "Hero background"}
            fill
          />
        </div>
      )}

      {mobileImage && (
        <div
          className={clsx(
            "absolute inset-0 z-0 h-full w-full overflow-hidden",
            {
              "lg:hidden": image,
            }
          )}
        >
          <SanityImage
            image={mobileImage}
            className="object-cover"
            alt={mobileImage.alt || "Hero background"}
            fill
          />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center pt-20 pb-10 lg:py-20">
        <div className="site-container site-max-w site-grid">
          <div className="col-span-4 grid w-full grid-cols-1 gap-4 lg:col-span-10 lg:col-start-2 lg:grid-cols-2 lg:items-center lg:gap-8">
            {/* Left: Text Box */}
            <Card
              elevation="lg"
              className="order-2 rounded-lg bg-white p-8 lg:order-1 lg:p-12"
              noPadding
            >
              {title && (
                <h1 className="mb-4">
                  <PortableText
                    value={title}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <h1 className="font-heading text-primary text-3xl font-normal sm:text-5xl">
                            {children}
                          </h1>
                        ),
                      },
                    }}
                  />
                </h1>
              )}

              {title && description && (
                <div className="bg-primary mb-6 h-px w-16" />
              )}

              {description && (
                <PortableTextContent
                  content={description}
                  className="*:text-primary *:font-light"
                />
              )}
            </Card>

            {/* Right: Logo */}
            <div className="order-1 flex items-center justify-center lg:order-2">
              <Logo className="lg:text-primary mx-auto h-auto w-full max-w-sm align-bottom text-white lg:max-w-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
