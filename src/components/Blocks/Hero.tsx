import React from "react";

import { PortableText } from "@portabletext/react";

import SanityImage from "@/components/Blocks/SanityImage";
import { PortableTextContent } from "@/components/Blocks/PortableTextContent";

import Card from "@/components/Blocks/Card";

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
}

const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Image */}
      {image?.asset?.url && (
        <div className="absolute inset-0 z-0">
          <SanityImage
            image={image}
            alt={image.alt || "Hero background"}
            fill
            className="object-cover opacity-30"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20 lg:px-8">
        <div className="site-container site-max-w grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Box */}
          <Card
            elevation="md"
            className="order-2 rounded-lg border-0 bg-white p-8 lg:order-1 lg:p-12"
            noPadding={true}
          >
            {title && (
              <h1 className="mb-4">
                <PortableText
                  value={title}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <h1 className="font-heading font-normal text-3xl text-primary lg:text-4xl">
                          {children}
                        </h1>
                      ),
                    },
                  }}
                />
              </h1>
            )}

            {title && description && (
              <div className="mb-6 h-px w-16 bg-primary" />
            )}

            {description && (
              <div className="prose prose-base max-w-none text-primary">
                <PortableTextContent content={description} />
              </div>
            )}
          </Card>

          {/* Right: Logo */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative text-center">
              {/* Top curved line */}
              <svg
                className="absolute -top-8 left-1/2 w-48 -translate-x-1/2 lg:w-64"
                viewBox="0 0 200 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10 25 Q 100 5, 190 25"
                  stroke="#B23E32"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              <div className="text-[#B23E32]">
                <div className="text-xl font-bold tracking-wide uppercase lg:text-2xl">
                  A
                </div>
                <div
                  className="font-serif text-4xl italic lg:text-6xl"
                  style={{ fontFamily: "serif", fontStyle: "italic" }}
                >
                  Touch
                </div>
                <div className="text-sm font-bold tracking-wide uppercase lg:text-lg">
                  OF
                </div>
                <div
                  className="text-3xl font-bold tracking-tight uppercase lg:text-5xl"
                  style={{ transform: "translateY(-2px)" }}
                >
                  SWEETNESS
                </div>
              </div>

              {/* Bottom curved line */}
              <svg
                className="absolute -bottom-8 left-1/2 w-48 -translate-x-1/2 lg:w-64"
                viewBox="0 0 200 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10 25 Q 100 45, 190 25"
                  stroke="#B23E32"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Asterisk with curved line */}
              <div className="mt-4 flex items-center justify-center">
                <span className="text-2xl text-primary lg:text-3xl">*</span>
                <svg
                  className="ml-2 h-4 w-16 lg:h-5 lg:w-20"
                  viewBox="0 0 80 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0 10 Q 20 5, 40 10 Q 60 15, 80 10"
                    stroke="#B23E32"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
