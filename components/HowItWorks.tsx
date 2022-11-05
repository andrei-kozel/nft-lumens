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
    <div className="container py-10 md:pt-16 xl:py-20 m-auto relative">
      <Title text="How it works" bgColor="bg-[#E03054]" />
      <div className="flex flex-col-reverse md:flex-row gap-[80px] md:gap-0 justify-around h-full mt-6 ">
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiWalletAlt />
          </span>
          <p className="text-yellow">Set Up Your Wallet</p>
        </div>
        <DashedLine />
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiWalletAlt />
          </span>
          <p className="text-yellow">Set Up Your Wallet</p>
        </div>
        <DashedLine />
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiWalletAlt />
          </span>
          <p className="text-yellow">Set Up Your Wallet</p>
        </div>
        <DashedLine />
        <div className="flex flex-col justify-center items-center">
          <span className="text-lightPink text-4xl bg-[#372839] w-[65px] rounded-full h-[65px] flex justify-center items-center mb-4">
            <BiWalletAlt />
          </span>
          <p className="text-yellow">Set Up Your Wallet</p>
        </div>
      </div>
      <div className="hiw-blur" />
    </div>
  );
};

export default HowItWorks;
