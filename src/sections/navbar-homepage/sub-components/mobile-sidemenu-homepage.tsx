"use client";

import React, { FC } from "react";
import { useMobileNavbarPulldownContext } from "@/contexts/mobile-navbar-pulldown-context";
import homepageSections from "@/sections/navbar-homepage/sub-components/homepageSections";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";

import {
  HOME_NAVBAR_LINKS_TEXT,
  LIGHT_THEME_BACKGROUND,
  DARK_THEME_BACKGROUND,
} from "@/app/global-text-styles";

const MobileSidemenuHomepage: FC = () => {
  const {
    isMobileNavbarPulldownOpen: mobileNavbarContext,
    setIsMobileNavbarPulldownOpen: setMobileNavbarContext,
  } = useMobileNavbarPulldownContext();

  const closeHomepageSideMenu = () => {
    setMobileNavbarContext(false);
  };
  return (
    <nav>
      {mobileNavbarContext && (
        <div className={`z-[999] absolute right-3 ${LIGHT_THEME_BACKGROUND}`}>
          <div className="flex justify-start">
            <ul className="list-none flex flex-col space-y-1 mt-3 mx-3">
              {homepageSections &&
                homepageSections.map((section, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      closeHomepageSideMenu();
                    }}>
                    <Link
                      className={`${HOME_NAVBAR_LINKS_TEXT} pb-[2px] border-b-[1px] border-solid border-transparent transition-all duration-300 hover:border-black`}
                      href={getSectionFomString(section)}>
                      {section}
                    </Link>
                  </li>
                ))}
              <br />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileSidemenuHomepage;
