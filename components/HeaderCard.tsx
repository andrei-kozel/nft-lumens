import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "./Button";
import { useSpring, animated } from "react-spring";

interface IRect {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

const calc = (x: number, y: number, rect: IRect) => {
  return [
    -(y - rect.top - rect.height / 2) / 20,
    (x - rect.left - rect.width / 2) / 20,
    1,
  ];
};

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const HeaderCard = () => {
  const [xys, set] = useState([0, 0, 1]);

  const props = useSpring({ xys });

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full  md:w-fit bg-customGray/50 md:bg-transparent flex justify-center items-center py-10">
      <div ref={ref} className="z-10">
        <animated.div
          className="card "
          onMouseMove={(e) => {
            const rect = ref.current!.getBoundingClientRect();
            set(calc(e.clientX, e.clientY, rect));
          }}
          onMouseLeave={() => set([0, 0, 1])}
          style={{ transform: props.xys.to(trans) }}
        >
          <div className="bg-white w-[350px] h-[500px] m-auto relative flex flex-col cursor-pointer hover:scale-105 transition-all hover:shadow-lg">
            <div className="w-full h-full relative">
              <Image
                src="/assets/header_card.png"
                layout="fill"
                alt="nft"
                priority
              />
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
    </div>
  );
};

export default HeaderCard;
