import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const active = "text-yellow border-b border-yellow";

  console.log(router.pathname);

  return (
    <div className="container m-auto w-full flex flex-row justify-between items-center p-4 fixed z-20 left-0 right-0">
      <Link href="/">
        <a className="cursor-pointer active:scale-95 transition-all">
          <Image src="/assets/logo.png" alt="logo" width={66} height={66} />
        </a>
      </Link>
      <div className="flex flex-row gap-3 items-center">
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
    </div>
  );
};

export default Navbar;
