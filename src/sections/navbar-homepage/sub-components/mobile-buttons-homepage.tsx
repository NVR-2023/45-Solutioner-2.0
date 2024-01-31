"use client";

import React, { FC } from "react";
import { useMobileNavbarContext } from "@/contextes/mobile-navbar-pulldown";
import SigninIcon from "../../../components/icons/signin-icon";
import MenuToggle from "@/components/common/menu-toggle/menu-toggle";

const MobileButtonsHomepage: FC = () => {
  const { setMobileNavbarContext: setHomepageContext } = useMobileNavbarContext();

  const openHomepageSidemenu = () => {
    setHomepageContext(true);
  };

  return (
    <div className="relative flex">
      <div className="flex justify-between space-x-4">
        <SigninIcon />
        <MenuToggle />
      </div>
    </div>
  );
};

export default MobileButtonsHomepage;
