import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <div className="flex items-center space-x-[18px] sm:space-x-[60px]">
      <Link className="font-normal text-[18px] sm:text-[22px] " href="/">
        Home
      </Link>

      <Link className="font-normal text-[18px] sm:text-[22px] " href="/about">
        About
      </Link>
      <Link className="font-normal text-[18px] sm:text-[22px] " href="/account">
        Account
      </Link>
      <Link className="font-normal text-[18px] sm:text-[22px] " href="/cabins">
        Cabins
      </Link>
    </div>
  );
}
