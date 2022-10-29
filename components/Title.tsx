import React from "react";

interface IProps {
  color: string;
  text: string;
}

const Title = ({ text, color }: IProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative">
        <p className="py-10 text-4xl font-bold relative z-10">{text}</p>
        <span
          className={`absolute w-[80px] h-[80px] rounded-full bg-[${color}] top-[20px] -left-[30px]`}
        />
      </div>
    </div>
  );
};

export default Title;
