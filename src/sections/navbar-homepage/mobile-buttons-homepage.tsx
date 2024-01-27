"use client";

import React, { FC } from "react";
import { useMobileNavbarContext } from "@/contextes/mobile-navbar-pulldown";
import HamburgerButton from "./hamburger-button";
import MobileSigninIcon from "./mobile-signin-button";

const MobileButtonsHomepage: FC = () => {
  const { setMobileNavbarContext: setHomepageContext } = useMobileNavbarContext();

  const openHomepageSidemenu = () => {
    setHomepageContext(true);
  };

  return (
    <div className="relative flex">
      <div className="flex justify-between space-x-4">
        <MobileSigninIcon color="#15803d" />
        <HamburgerButton onClick={openHomepageSidemenu} color="#15803d" />
      </div>
    </div>
  );
};

export default MobileButtonsHomepage;
