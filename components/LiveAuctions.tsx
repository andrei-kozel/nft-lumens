import React from "react";
import Button from "./Button";
import Carousel from "./Carousel";
import Title from "./Title";

const LiveAuctions = () => {
  return (
    <div className="py-16 xl:py-20 relative flex flex-col justify-center items-center">
      <Title text="Live Auctions" bgColor="bg-[#8613A5]" />
      <Carousel />
      <div className="auctions-blur-1" />
      <div className="mt-10">
        <Button text="View All" />
      </div>
    </div>
  );
};

export default LiveAuctions;
