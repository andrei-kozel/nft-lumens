import { useSpringCarousel } from "react-spring-carousel";
import Card from "./Card";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";

const dummyNFTs = [
  {
    id: 1,
    image: "/assets/NFTs/nft-1.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
  {
    id: 2,
    image: "/assets/NFTs/nft-2.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
  {
    id: 3,
    image: "/assets/NFTs/nft-3.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
  {
    id: 4,
    image: "/assets/NFTs/nft-3.png",
    author: "Virtual Art",
    likes: "92",
    currentBid: "4.89 ETH",
    time: "03:18:24",
  },
];

const Carousel = () => {
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
      itemsPerSlide: slidesAmount,
      withLoop: true,
      items: dummyNFTs.map((i) => ({
        id: i.id as number,
        renderItem: <Card card={i} />,
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
