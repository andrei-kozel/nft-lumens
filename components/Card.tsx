import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

const Card = ({ data }: any) => {
  const [isLiked, setIsLiked] = useState(false);

  const tokenData = JSON.parse(data.metadata);

  return (
    <div className="bg-[#3D2942] p-6  my-10 m-auto">
      <div className="">
        <Image
          src={tokenData.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
          width={330}
          height={250}
          alt="as"
        />
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
            <p>{tokenData.name}</p>
            <p className="text-lightPink text-sm">by 0x123123</p>
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
          <p>0</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="font-light">
          {tokenData.description.slice(0, 45) + "..."}
        </p>
      </div>

      <div className="mt-6">
        <Button
          text="Place a bid"
          link={`https://opensea.io/assets/ethereum/0x49adcc97404c197190a5866885018c558006974a/${tokenData.tokenId}`}
        />
      </div>
    </div>
  );
};

export default Card;
