import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <div className="bg-primary min-h-screen min-w-full text-white font-poppins overflow-hidden">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
