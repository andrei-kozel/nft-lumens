import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import Burger from "./Burger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const active = "text-yellow border-b border-yellow";

  const closeMenu = () => {
    console.log("closed");

    if (isOpen) setIsOpen(false);
  };

  return (
    <div className="container m-auto w-full flex flex-row justify-between items-center p-4 fixed z-20 left-0 right-0 ">
      <Link href="/">
        <a className="z-40 cursor-pointer active:scale-95 transition-all">
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
        <Button text="Connect Wallet" />
      </div>
      <div className="flex md:hidden">
        <Burger setIsOpen={setIsOpen} isOpen={isOpen} />

        <div
          className={`transition-all  duration-300 backdrop-blur-md absolute top-0 right-0  h-screen bg-primary/90 ${
            isOpen ? "w-screen" : "w-0"
          }`}
        >
          <div
            className={`flex duration-150 flex-col h-full gap-10 justify-center items-center ${
              isOpen ? "opacity-100 delay-[250ms]" : "opacity-0 "
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
            <Button text="Connect Wallet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
