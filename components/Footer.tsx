import React from "react";
import Image from "next/image";
import { BsYoutube, BsTwitter, BsFacebook, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex  items-center flex-col w-full bg-primary/50 backdrop-blur-xl">
      <div className="flex justify-around w-full items-center md:items-start flex-col md:flex-row py-2 md:py-6">
        <div className="flex flex-col md:flex-row">
          <div className="h-full flex justify-center items-center my-6">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={164}
              height={164}
            ></Image>
          </div>
          <div className=" flex flex-col m-auto md:ml-4 items-center md:items-start max-w-[350px]">
            <p className="text-lightPink text-center md:text-left text-sm font-light leading-6 w-full md:max-w-[350px]">
              Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
              pharetra gravida est.
            </p>
            <div className="py-8 flex gap-6  text-2xl text-customRed">
              <BsYoutube className="hover:text-iconHover transition-all cursor-pointer" />
              <BsTwitter className="hover:text-iconHover transition-all cursor-pointer" />
              <BsFacebook className="hover:text-iconHover transition-all cursor-pointer" />
              <BsTelegram className="hover:text-iconHover transition-all cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-around md:justify-between mt-6 md:w-[390px]">
          <div>
            <h2 className="mb-4">About Us</h2>
            <div className="text-lightPink leading-8 font-light">
              <p>About NFTs</p>
              <p>Live Auctions</p>
              <p>NFT Blog</p>
              <p>Activity</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4">Support</h2>
            <div className="text-lightPink leading-8 font-light">
              <p>Help & Support</p>
              <p>Item Details</p>
              <p>Author Profile</p>
              <p>ProfCollectionile</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lightPink text-sm font-light leading-6 my-4">
        All rights reserved @ {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
