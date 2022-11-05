import React from "react";
import Button from "./Button";
import CreatorCard from "./CreatorCard";
import Title from "./Title";

const creatorsData = [
  { id: "1", name: "Wzard Dee", items: "33", total: "4.89 ETH" },
  { id: "2", name: "Wzard Dee", items: "33", total: "4.89 ETH" },
  { id: "3", name: "Wzard Dee", items: "33", total: "4.89 ETH" },
  { id: "4", name: "Wzard Dee", items: "33", total: "4.89 ETH" },
];

const TopCreators = () => {
  return (
    <div className="container m-auto py-16 xl:py-20 flex flex-col items-center justify-center">
      <Title text="Top Creators" bgColor="bg-[#8613A5]" />
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-7 my-10">
        {creatorsData.map((data) => (
          <CreatorCard data={data} key={data.id} />
        ))}
      </div>
      <div className="mt-10">
        <Button text="View All" />
      </div>
    </div>
  );
};

export default TopCreators;
