"use client";

import React, { FC, useState } from "react";
import HamburgerIcon from "./hamburger-icon";
import MobileSigninIcon from "./mobile-signin-icon";
import sectionLinksArray from "./section-list-array.t";
import { getSectionFomString } from "@/utils/getsectionfromurl";
import Link from "next/link";

import SigninButton from "./signin-button";
import RegisterButton from "./register-button";

const NobileIconsHomepage: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const handleToggleSheet = () => {
    setIsSheetOpen((current) => !current);
  };

  return (
    <div className="relative flex">
      <div className="flex justify-between space-x-4">
        <MobileSigninIcon color="#15803d" />
        <span onClick={handleToggleSheet}>
          <HamburgerIcon color="#15803d" />
        </span>
      </div>
    </div>
  );
};

export default NobileIconsHomepage;
