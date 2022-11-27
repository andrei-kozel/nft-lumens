import { useSpringCarousel } from "react-spring-carousel";
import Card from "./Card";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import { ReactSpringCarouselItem } from "react-spring-carousel/dist/types/types";
import { useLumensStore } from "../store/store";

const Carousel = () => {
  const [slidesAmount, setSlidesAmount] = useState(4);
  const { lumens } = useLumensStore((state) => state);
  const nfts = lumens.slice(0, 10);

  const changeSlidesAmount = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 800) {
      setSlidesAmount(1);
    } else if (windowWidth <= 1180) {
      setSlidesAmount(2);
    } else if (windowWidth <= 1580) {
      setSlidesAmount(3);
    } else if (windowWidth <= 1980) {
      setSlidesAmount(4);
    }
  };

  useEffect(() => {
    changeSlidesAmount();
    addEventListener("resize", changeSlidesAmount);
  }, []);

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fixed",
      itemsPerSlide: slidesAmount,
      withLoop: true,
      items: nfts.map((token) => ({
        id: Math.random().toString(),
        renderItem: <Card data={token} />,
      })),
    });

  return (
    <div className="w-full">
      <div className="container flex flex-row justify-end items-end w-full gap-4 px-3 ">
        <p className="text-4xl transition-all cursor-pointer text-white/30 hover:text-white">
          <BsFillArrowLeftCircleFill onClick={slideToPrevItem} />
        </p>
        <p className="text-4xl transition-all cursor-pointer text-white/30 hover:text-white">
          <BsFillArrowRightCircleFill onClick={slideToNextItem} />
        </p>
      </div>
      {carouselFragment}
    </div>
  );
};

export default Carousel;
