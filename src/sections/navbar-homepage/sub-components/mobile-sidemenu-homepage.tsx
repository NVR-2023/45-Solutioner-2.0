"use client";

import React, { FC } from "react";
import { useMobileNavbarContext } from "@/contextes/mobile-navbar-pulldown";
import homepageSections from "@/sections/navbar-homepage/sub-components/homepageSections";
import Link from "next/link";
import { getSectionFomString } from "@/utils/functions/getsectionfromurl";

import {
  HOME_NAVBAR_LINKS_TEXT,
  LIGHT_THEME_BACKGROUND,
  DARK_THEME_BACKGROUND,
} from "@/app/global-text-styles";

const MobileSidemenuHomepage: FC = () => {
  const { mobileNavbarContext, setMobileNavbarContext } = useMobileNavbarContext();

  const closeHomepageSideMenu = () => {
    setMobileNavbarContext(false);
  };
  return (
    <>
      {mobileNavbarContext && (
        <div className={`z-[999] absolute right-3 ${LIGHT_THEME_BACKGROUND}`}>
          <nav className="flex justify-start">
            <ul className="list-none flex flex-col space-y-1 mt-3 mx-3">
              {homepageSections &&
                homepageSections.map((section, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      closeHomepageSideMenu();
                    }}>
                    <Link className={HOME_NAVBAR_LINKS_TEXT} href={getSectionFomString(section)}>
                      {section}
                    </Link>
                  </li>
                ))}
              <br />
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileSidemenuHomepage;
