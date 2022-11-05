import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import Burger from "./Burger";
import ConnectWalletButton from "./ConnectWalletButton";

const active = "text-yellow border-b border-yellow";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);

  const router = useRouter();

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  const changeBackgroundColor = () => {
    if (window.scrollY >= 60) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <div
      className={`transition-all fixed z-20 left-0 right-0 p-4 ${
        backgroundColor ? "bg-primary/80 backdrop-blur-xl md:py-2" : ""
      }`}
    >
      <div className="container m-auto w-full flex flex-row justify-between items-center">
        <Link href="/">
          <a className="z-40 cursor-pointer active:scale-95 transition-all flex justify-center items-center">
            <Image src="/assets/logo.png" alt="logo" width={66} height={66} />
          </a>
        </Link>
        <div className="gap-3 items-center hidden md:flex ">
          <Link href="/">
            <a
              className={`${
                router.pathname === "/" ? active : ""
              } font-light px-2 py-1 hover:text-yellow transition-colors `}
            >
              Explore
            </a>
          </Link>
          <Link href="/creators">
            <a
              className={`${
                router.pathname === "/creators" ? active : ""
              } font-light px-2 py-1 hover:text-yellow transition-colors`}
            >
              Creators
            </a>
          </Link>
          <Link href="/community">
            <a
              className={`${
                router.pathname === "/community" ? active : ""
              } font-light px-2 py-1 hover:text-yellow transition-colors`}
            >
              Community
            </a>
          </Link>
          <ConnectWalletButton />
        </div>
        <div className="flex md:hidden">
          <Burger setIsOpen={setIsOpen} isOpen={isOpen} />

          <div
            className={`transition-all duration-300 backdrop-blur-xl absolute top-0 right-0  h-screen bg-primary ${
              isOpen ? "w-screen" : "w-0"
            }`}
          >
            <div
              className={`flex duration-150 flex-col h-full gap-10 justify-center items-center ${
                isOpen ? "opacity-100 delay-[200ms]" : "opacity-0 "
              }`}
            >
              <Link href="/">
                <a
                  onClick={closeMenu}
                  className={`${
                    router.pathname === "/" ? active : ""
                  } font-light px-2 py-1 hover:text-yellow text-xl transition-colors `}
                >
                  Explore
                </a>
              </Link>
              <Link href="/creators">
                <a
                  onClick={closeMenu}
                  className={`${
                    router.pathname === "/creators" ? active : ""
                  } font-light px-2 py-1 hover:text-yellow text-xl transition-colors`}
                >
                  Creators
                </a>
              </Link>
              <Link href="/community">
                <a
                  onClick={closeMenu}
                  className={`${
                    router.pathname === "/community" ? active : ""
                  } font-light px-2 py-1 hover:text-yellow text-xl transition-colors`}
                >
                  Community
                </a>
              </Link>
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
