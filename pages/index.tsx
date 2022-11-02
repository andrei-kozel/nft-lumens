import type { NextPage } from "next";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import LiveAuctions from "../components/LiveAuctions";
import PopularCollections from "../components/PopularCollections";
import TopCreators from "../components/TopCreators";

const Home: NextPage = () => {
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
