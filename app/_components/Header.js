import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-0">
      <div className="flex py-4 items-center justify-between">
        <Logo></Logo>
        <Navigation></Navigation>
      </div>
    </div>
  );
}
