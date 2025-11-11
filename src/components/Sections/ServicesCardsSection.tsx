import React from "react";

import ServiceCard from "@/components/Blocks/ServiceCard";

import type { TypedObject } from "@portabletext/types";

interface ServiceCardData {
  _key?: string;
  title?: string;
  description?: TypedObject[] | TypedObject;
}

interface ServicesCardsSectionProps {
  cards?: ServiceCardData[];
}

const ServicesCardsSection: React.FC<ServicesCardsSectionProps> = ({
  cards,
}) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <section id="services" className="bg-primary py-10 lg:py-20">
      <div className="site-container site-max-w site-grid">
        <div className="col-span-full">
          <h2 className="text-white h100 mb-4 text-center uppercase">
            services
          </h2>
        </div>
        <div className="col-span-4 block w-full space-y-8 lg:col-span-10 lg:col-start-2">
          {cards.map((card, index) => (
            <ServiceCard
              key={card._key}
              title={card.title}
              description={card.description}
              layout={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;
