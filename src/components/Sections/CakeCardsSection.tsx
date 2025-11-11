import React from "react";
import CakeCard from "@/components/Blocks/CakeCard";
import type { TypedObject } from "@portabletext/types";

interface CakeCardData {
  _key?: string;
  title?: string;
  description?: TypedObject[] | TypedObject;
}

interface CakeCardsSectionProps {
  cards?: CakeCardData[];
}

const CakeCardsSection: React.FC<CakeCardsSectionProps> = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <section className="bg-primary relative z-1 py-16 shadow-xl lg:py-24">
      <div className="site-container site-max-w">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <CakeCard
              key={card._key}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeCardsSection;
