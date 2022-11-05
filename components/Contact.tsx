import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="py-10 md:pt-16 xl:py-20 container flex flex-col justify-center items-center m-auto">
      <Title text="Ready for Next NFT Drop?" bgColor="none" />
      <div className="flex flex-row items-center justify-center">
        <input
          placeholder="info@gmail.com"
          className="p-3 bg-transparent border-yellow border text-sm text-lightPink"
        />
        <button
          type="submit"
          className="p-3 border bg-yellow border-yellow text-primary font-bold text-sm"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
