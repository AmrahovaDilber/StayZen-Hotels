import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" height={60} width={150} alt="logo" />
    </Link>
  );
}
