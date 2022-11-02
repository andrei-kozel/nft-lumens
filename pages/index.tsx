import type { NextPage } from "next";
import Clients from "../components/Clients";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import LiveAuctions from "../components/LiveAuctions";
import PopularCollections from "../components/PopularCollections";

const Home: NextPage = () => {
  return (
    <div className="bg-primary ">
      <Header />
      <Clients />
      <LiveAuctions />
      <HowItWorks />
      <PopularCollections />
    </div>
  );
};

export default Home;
