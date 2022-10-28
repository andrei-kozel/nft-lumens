import React from "react";

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Burger = ({ setIsOpen, isOpen }: IProps) => {
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  if (!isOpen) {
    return (
      <div
        className="space-y-2 cursor-pointer transition-all hover:bg-lightPink p-3 rounded-md burger z-40"
        onClick={handleToggle}
      >
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-8 h-0.5 bg-white"></span>
        <span className="block w-5 h-0.5 bg-white"></span>
      </div>
    );
  }

  return (
    <div
      className="space-y-2 cursor-pointer transition-all hover:bg-lightPink p-3 py-4 rounded-md burger z-40 "
      onClick={handleToggle}
    >
      <span className="block w-8 h-0.5 rotate-45 translate-y-[0.3rem] bg-white"></span>
      <span className="block w-8 h-0.5 -rotate-45 -translate-y-[0.3rem] bg-white"></span>
    </div>
  );
};

export default Burger;
