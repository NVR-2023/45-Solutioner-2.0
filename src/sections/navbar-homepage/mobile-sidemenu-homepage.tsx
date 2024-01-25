"use client";

import React, { FC, useState } from "react";
import HamburgerIcon from "./hamburger-icon";
import MobileSigninIcon from "./mobile-signin-icon";
import sectionLinksArray from "./section-list-array.t";
import { getSectionFomString } from "@/utils/getsectionfromurl";
import Link from "next/link";
const MobileHomeMenu: FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const handleToggleSheet = () => {
    setIsSheetOpen((current) => !current);
  };

  return (
    <div className="h-full relative block">
      <div className="flex justify-between space-x-3">
        <MobileSigninIcon color="#15803d" />
        <span onClick={handleToggleSheet}>
          <HamburgerIcon color="#15803d" />
        </span>
      </div>
      {isSheetOpen && (
        <nav className="absolute top-0 h-screen w-32 px-1 bg-neutral-200 -translate-y-5">
          <ul>
            {sectionLinksArray &&
              sectionLinksArray.map((section, index) => (
                <li
                  key={index}
                  className="font-aperçu font-bold text-base text-green-700 tracking-wide" onClick={handleToggleSheet}>
                  <Link href={getSectionFomString(section)}>{section}</Link>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileHomeMenu;
