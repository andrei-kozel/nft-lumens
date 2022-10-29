import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-10 md:flex-row justify-around items-center  py-10 xl:py-20">
      <Image
        src="/assets/clients/binance.png"
        width={204}
        height={41}
        alt="binance"
      />
      <Image
        src="/assets/clients/blockchain.png"
        width={309}
        height={24}
        alt="binance"
      />
      <Image
        src="/assets/clients/coinbase.png"
        width={149}
        height={33}
        alt="binance"
      />
      <Image
        src="/assets/clients/bitmex.png"
        width={177}
        height={28}
        alt="binance"
      />
    </div>
  );
};

export default Clients;
