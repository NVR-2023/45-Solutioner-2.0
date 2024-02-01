"use client";

import React, { FC } from "react";
import { useMobileNavbarPulldownContext } from "@/contextes/mobile-navbar-pulldown-context";
import SigninIcon from "../../../components/icons/signin-icon";
import MenuToggle from "@/components/UI/menu-toggle/menu-toggle";

const MobileButtonsHomepage: FC = () => {
  const { setIsMobileNavbarPulldownOpen: setHomepageContext } = useMobileNavbarPulldownContext();

  const openHomepageSidemenu = () => {
    setHomepageContext(true);
  };

  return (
    <div className="flex h-full items-center justify-between space-x-4">
      <div className="flex items-center">
        <SigninIcon />
      </div>
      <div className="flex items-center">
        <MenuToggle />
      </div>
    </div>
  );
};

export default MobileButtonsHomepage;
