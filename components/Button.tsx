import React from "react";

interface IProps {
  text: string;
  filled?: boolean;
  handleClick?: () => void;
}

const Button = ({ text, filled, handleClick }: IProps) => {
  return (
    <div
      className={`font-light py-2 px-4 border border-yellow ${
        filled
          ? "bg-yellow text-primary hover:bg-yellow/80 "
          : "bg-[#E9D7A7]/10 text-yellow hover:bg-[#E9D7A7]/20 "
      }   cursor-pointer transition-colorsz min-w-[155px] md:min-w-[150px] text-center flex justify-center items-center`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Button;
