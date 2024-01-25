"use client";

import React, { FC, useState } from "react";
import HamburgerIcon from "./hamburger-icon";
import MobileSigninIcon from "./mobile-signin-icon";

const MobileHomeMenu: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const handleToggleSheet = () => {
    setIsSheetOpen((current) => !current);
  };

  return (
    <div className="h-full relative block">
      <div className="flex justify-between space-x-1.5">
        <MobileSigninIcon color="#15803d" />
        <span onClick={handleToggleSheet}>
          <HamburgerIcon color="#15803d" />
        </span>
      </div>
      {isSheetOpen && (
        <nav className="absolute top-0 h-screen w-32 px-1 bg-blue-500">
          <div className="text-sm">Services</div>
          <div>Security</div>
          <div>Pricing</div>
        </nav>
      )}
    </div>
  );
};

export default MobileHomeMenu;
