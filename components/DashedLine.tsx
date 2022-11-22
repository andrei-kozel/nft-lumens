import React from "react";

const DashedLine = () => (
  <div className="flex justify-center items-center rotate-90 md:rotate-0">
    <span className="border hidden xl:block w-3 mr-3 border-[#794187]" />
    <span className="border hidden xl:block w-3 mr-3 border-[#794187]" />
    <span className="border hidden xl:block w-3 mr-3 border-[#794187]" />
    <span className="border hidden xl:block w-3 mr-3 border-[#794187]" />
    <span className="border w-3 mr-3 border-[#794187]" />
    <span className="border w-3 mr-3 border-[#794187]" />
    <span className="border w-3 mr-3 border-[#794187]" />
    <div className="w-[10px] h-[10px] rotate-45 bg-[#794187]" />
  </div>
);

export default DashedLine;
