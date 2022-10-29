import type { NextPage } from "next";
import Clients from "../components/Clients";
import Header from "../components/Header";
import LiveAuctions from "../components/LiveAuctions";

const Home: NextPage = () => {
  return (
    <div className="bg-primary ">
      <Header />
      <Clients />
      <LiveAuctions />
    </div>
  );
};

export default Home;
