import type { NextPage } from "next";
import { useEffect } from "react";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import LiveAuctions from "../components/LiveAuctions";
import PopularCollections from "../components/PopularCollections";
import TopCreators from "../components/TopCreators";
import { useLumensStore } from "../store/store";

const Home: NextPage = () => {
  const { fetch } = useLumensStore((state) => state);

  useEffect(() => {
    const loadNft = async (address: string) => {
      const options = {
        method: "GET",
        url: `https://deep-index.moralis.io/api/v2/nft/${address}`,
        params: {
          chain: "eth",
          format: "decimal",
          normalizeMetadata: "false",
        },
        headers: {
          accept: "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API,
        },
      };

      await fetch(options);
    };
    loadNft("0x49adcC97404c197190a5866885018c558006974a");
  });

  return (
    <div className="bg-primary ">
      <Header />
      <Clients />
      <LiveAuctions />
      <HowItWorks />
      <PopularCollections />
      <TopCreators />
      <Contact />
    </div>
  );
};

export default Home;
