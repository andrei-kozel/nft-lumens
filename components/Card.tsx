import React from "react";
import Image from "next/image";
import Button from "./Button";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

const Card = ({ card }: any) => {
  return (
    <div className="bg-[#3D2942] p-6  my-10 m-auto">
      <div className="">
        <Image src={card.image} width={330} height={250} alt="as" />
      </div>

      <div className="flex flex-row justify-between items-center  mt-5">
        <div className="flex items-center gap-2">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400" />
          <div>
            <p>{card.author}</p>
            <p>by {card.author}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BsHeart />
          <p>{card.likes}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p>Current Bid</p>
        <p>{card.currentBid}</p>
      </div>

      <div className="mt-6">
        <Button text="Place a bid" />
      </div>
    </div>
  );
};

export default Card;
