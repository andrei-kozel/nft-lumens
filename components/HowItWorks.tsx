import React from "react";
import Title from "./Title";
import {
  BiWalletAlt,
  BiCollection,
  BiAddToQueue,
  BiBarChart,
} from "react-icons/bi";
import DashedLine from "./DashedLine";

const HowItWorks = () => {
  return (
    <div className="container py-16 xl:py-20 m-auto relative">
      <Title text="How it works" bgColor="bg-[#E03054]" />
      <div className="flex flex-col md:flex-row gap-[80px] md:gap-0 justify-around h-full mt-6 ">
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiWalletAlt />
          </span>
          <p className="text-yellow text-center">Set Up Your Wallet</p>
        </div>
        <DashedLine />
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiCollection />
          </span>
          <p className="text-yellow  text-center">Create your collection</p>
        </div>
        <DashedLine />
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiAddToQueue />
          </span>
          <p className="text-yellow text-center">Add your NFTs</p>
        </div>
        <DashedLine />
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiBarChart />
          </span>
          <p className="text-yellow text-center">List them for sale</p>
        </div>
      </div>
      <div className="hiw-blur" />
    </div>
  );
};

export default HowItWorks;
