import React from "react";
import Button from "./Button";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import axios from "axios";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

interface IUser {
  address: string;
  profileId: string;
  signature: string;
}

const ConnectWalletButton = () => {
  const { isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();
  const { data: session, status } = useSession();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url }: any = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

  const handleLogout = () => {
    signOut();
  };

  const textToRender = () => {
    if (session?.user) {
      const user = session.user as IUser;
      return user.address.slice(0, 5) + "..." + user.address.slice(-5);
    } else {
      return "Connect Wallet";
    }
  };

  return (
    <div>
      <Button
        text={textToRender()}
        handleClick={session?.user ? handleLogout : handleAuth}
      />
    </div>
  );
};

export default ConnectWalletButton;
