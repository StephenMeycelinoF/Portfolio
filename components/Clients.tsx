import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { tehcstack, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {tehcstack.map(({ id, img, name }) => (
            <div className="flex items-center md:max-w-60 max-w-32 gap-2" key={id}>
              <img src={img} alt={name} className="md:w-10 w-5" />
              <p className="font-semibold">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
