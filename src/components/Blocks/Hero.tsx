import React from "react";

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
}

const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Image */}
      {image?.asset?.url && (
        <div className="absolute inset-0 z-0">
          <SanityImage
            image={image}
            className="object-cover"
            alt={image.alt || "Hero background"}
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
                          <h1 className="font-heading text-primary text-3xl! font-normal sm:text-5xl!">
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
              <Logo className="text-primary mx-auto h-auto w-full max-w-sm align-bottom lg:max-w-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
