import React from "react";
import Button from "./Button";
import Carousel from "./Carousel";
import Title from "./Title";

const LiveAuctions = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <Title text="Live Auctions" bgColor="bg-[#8613A5]" />
      <Carousel />
      <div className="auctions-blur-1" />
      <div className="mt-6">
        <Button text="View All" />
      </div>
    </div>
  );
};

export default LiveAuctions;
