import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.INFURA_GOERLY_API_KEY,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
