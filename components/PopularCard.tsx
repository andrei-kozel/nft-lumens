import Image from "next/image";
import React from "react";

interface IProps {
  card: {
    id: string;
    image: string;
    author: string;
    likes: string;
    currentBid: string;
    time: string;
  };
}

const PopularCard = ({ card }: IProps) => {
  return (
    <div className="bg-[#3D2942] p-6  my-12 m-auto">
      <div className="select-none pointer-events-none">
        <Image src={card.image} width={330} height={250} alt="as" />
      </div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 overflow-hidden">
            <Image
              src="/assets/avatar.jpg"
              alt="avatar"
              height={50}
              width={50}
              priority
            />
          </div>
          <p>@{card.author}</p>
        </div>
        <p className="text-sm text-lightPink">ERC-721</p>
      </div>
    </div>
  );
};

export default PopularCard;
