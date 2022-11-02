import Image from "next/image";
import React from "react";

const CreatorCard = ({ data }: any) => {
  return (
    <div className="p-4 bg-[#302034] border-l-2 border-[#E03054] flex flex-row w-[300px] md:w-[400px] justify-between">
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
          <p>{data.name}</p>
          <p className="text-lightPink text-sm">{data.total}</p>
        </div>
      </div>
      <div className="border-l-2 border-[#908294] px-4 text-center flex flex-col items-center">
        <p className="font-bold">33</p>
        <p className="font-thin text-[#908294]">Items</p>
      </div>
    </div>
  );
};

export default CreatorCard;
