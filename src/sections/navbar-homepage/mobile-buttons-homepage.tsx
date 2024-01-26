"use client";

import React, { FC } from "react";
import { useHomepageContext } from "@/contextes/homepage-context";
import HamburgerButton from "./hamburger-button";
import MobileSigninIcon from "./mobile-signin-icon";

const MobileButtonsHomepage: FC = () => {
  const { setHomepageContext } = useHomepageContext();
  
  const toggleHomepageSidemenu = () => {
    console.log("<<<<< Togglng >>>>>")
    setHomepageContext((current) => !current);
  }

  return (
    <div className="relative flex">
      <div className="flex justify-between space-x-4">
        <MobileSigninIcon color="#15803d" />
        <HamburgerButton onClick={toggleHomepageSidemenu} color="#15803d" />
      </div>
    </div>
  );
};

export default MobileButtonsHomepage;
