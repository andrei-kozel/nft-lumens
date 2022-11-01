import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

const Card = ({ card }: any) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-[#3D2942] p-6  my-10 m-auto">
      <div className="">
        <Image src={card.image} width={330} height={250} alt="as" />
      </div>

      <div className="flex flex-row justify-between items-center  mt-5">
        <div className="flex items-center gap-2">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 overflow-hidden">
            <Image
              src="/assets/avatar.jpg"
              alt="avatar"
              height={50}
              width={50}
              priority
            />
          </div>
          <div>
            <p>{card.author}</p>
            <p className="text-lightPink text-sm">by {card.author}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-lightPink">
          {isLiked ? (
            <p className="cursor-pointer text-red-500">
              <BsFillHeartFill />
            </p>
          ) : (
            <p className="cursor-pointer">
              <BsHeart />
            </p>
          )}
          <p>{card.likes}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="font-light">Current Bid</p>
        <p className="font-bold">{card.currentBid}</p>
      </div>

      <div className="mt-6">
        <Button text="Place a bid" />
      </div>
    </div>
  );
};

export default Card;
