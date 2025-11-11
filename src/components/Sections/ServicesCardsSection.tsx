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
    <section className="bg-[#D66054] py-16 lg:py-24">
      <div className="site-container site-max-w">
        <div className="flex flex-col gap-8">
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

