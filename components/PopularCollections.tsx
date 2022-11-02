import React from "react";
import Title from "./Title";
import { useSpringCarousel } from "react-spring-carousel";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import { ReactSpringCarouselItem } from "react-spring-carousel/dist/types/types";
import PopularCard from "./PopularCard";
import Button from "./Button";

const dummyNFTs = [
  {
    id: "1",
    image: "/assets/NFTs/nft-1.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
  {
    id: "2",
    image: "/assets/NFTs/nft-2.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
  {
    id: "3",
    image: "/assets/NFTs/nft-3.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
  {
    id: "4",
    image: "/assets/NFTs/nft-3.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
];

const PopularCollections = () => {
  const [slidesAmount, setSlidesAmount] = useState(4);

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
      items: dummyNFTs.map(
        (i): ReactSpringCarouselItem => ({
          id: i.id as string,
          renderItem: <PopularCard card={i} />,
        })
      ),
    });

  return (
    <div className="py-10 flex flex-col justify-center items-center ">
      <Title text="Popular Collections" bgColor="bg-[#E03054] relative" />
      <div className="w-full flex items-center justify-between relative">
        <p className="text-4xl transition-all cursor-pointer text-white/30 hover:text-white absolute left-2 z-10">
          <BsFillArrowLeftCircleFill onClick={slideToPrevItem} />
        </p>
        {carouselFragment}
        <p className="text-4xl transition-all cursor-pointer text-white/30 hover:text-white absolute right-2 z-10">
          <BsFillArrowRightCircleFill onClick={slideToNextItem} />
        </p>
        <div className="popular-collections-blur" />
      </div>
      <Button text="View All" />
    </div>
  );
};

export default PopularCollections;
