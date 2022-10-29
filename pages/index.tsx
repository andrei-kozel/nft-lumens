import type { NextPage } from "next";
import Clients from "../components/Clients";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-primary ">
      <Header />
      <Clients />
    </div>
  );
};

export default Home;
