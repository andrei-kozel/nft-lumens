import React from "react";
import Button from "./Button";
import HeaderCard from "./HeaderCard";

const Header = () => {
  return (
    <div className="relative pt-24">
      <div className="container m-auto flex flex-col  py-10 md:px-0 md:flex-row w-full justify-around items-center">
        <div>
          <p className="text-5xl font-bold leading-[1.7] text-center md:text-left">
            Explore, Buy and <br />
            Sell the{" "}
            <span className="text-yellow">
              Best
              <br />
              NFTs!
            </span>
          </p>
          <div className="flex gap-4 my-10 mb-16 justify-center md:justify-start">
            <Button text="Explore" filled />
            <Button text="Create" />
          </div>
          <div className="px-4 md:px-0 flex w-full justify-between my-10">
            <div className="flex items-center flex-col">
              <p className="text-4xl font-bold">32k+</p>
              <p className="font-light text-lightPink">Artwork</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-4xl font-bold">20k+</p>
              <p className="font-light text-lightPink">Auctions</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-4xl font-bold">12k+</p>
              <p className="font-light text-lightPink">Creators</p>
            </div>
          </div>
        </div>

        <HeaderCard />
      </div>
      <div className="absolute hidden md:block w-full md:w-[50%] bg-customGray/50 h-full md:top-0 right-0 " />
      <div className="yellow-blur" />
      <div className="header-blur-1" />
      <div className="header-blur-2" />
      <div className="header-blur-3" />
      <div className="header-blur-4" />
    </div>
  );
};

export default Header;
