import Image from "next/image";
import React from "react";
import Button from "./Button";
import Tilt from "react-tilt";

const HeaderCard = () => {
  return (
    <div className="w-full md:w-[50%] bg-customGray/50 md:bg-transparent flex justify-center items-center py-10">
      <Tilt className="Tilt z-10" options={{ max: 25, scale: 1 }}>
        <div className="bg-white w-[350px] h-[500px] m-auto relative flex flex-col cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
          <div className="w-full h-full relative">
            <Image src="/assets/header_card.png" layout="fill" alt="nft" />
          </div>
          <div className="flex justify-between p-4 bg-white">
            <div>
              <p className="text-black">Artist</p>
              <p className="text-lightPink">@wzard</p>
            </div>
            <Button text="Start bid" filled />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default HeaderCard;
