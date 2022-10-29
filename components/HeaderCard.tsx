import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useSpring, animated } from "react-spring";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.02,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const HeaderCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div className="w-full  md:w-fit bg-customGray/50 md:bg-transparent flex justify-center items-center py-10">
      <animated.div
        className="card z-10"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        <div className="bg-white w-[350px] h-[500px] m-auto relative flex flex-col cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
          <div className="w-full h-full relative">
            <Image src="/assets/header_card.png" layout="fill" alt="nft" />
          </div>
          <div className="flex justify-between p-4 bg-white">
            <div>
              <p className="text-black">Artist</p>
              <p className="text-lightPink">@wzard</p>
            </div>
            <Button text="Start bid" filled />
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default HeaderCard;
