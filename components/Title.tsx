import React from "react";

interface IProps {
  bgColor: string;
  text: string;
}

const Title = ({ text, bgColor }: IProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative">
        <p className="mb-10 text-4xl font-bold relative z-10">{text}</p>
        <span
          className={`absolute w-[80px] h-[80px] rounded-full ${bgColor} -top-[20px] -left-[30px]`}
        />
      </div>
    </div>
  );
};

export default Title;
