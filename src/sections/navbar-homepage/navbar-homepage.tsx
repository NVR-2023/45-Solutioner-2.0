import React, { FC } from "react";
import LogoSegment from "./sub-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";
import MobileButtonsHomepage from "./sub-components/mobile-buttons-homepage";

import { TRANSPARENT_THEME_DEFAULT , DARK_THEME_DEFAULT as DARK_THEME_NAVBAR } from "@/app/global-text-styles";
import { useThemeContext } from "@/contexts/theme-context";


const NavbarHomepage: FC = () => {
  const { isDarkThemeOn } = useThemeContext();

  return (
    <header className={`relative z-50 w-full flex bg-blue-500 justify-center  ${isDarkThemeOn ? "dark" : "" }`}>
      <nav className={`fixed justify-center top-0 md:top-3 dark:bg-red-500 rounded`}>
        <div className="flex align-middle justify-between mx-3 py-3 dark:bg-green-500 ">
          <div className="">
            <LogoSegment />
          </div>
          <div className="hidden md:flex">
            <HomeSectionLinks />
          </div>
          <div className="flex justify-between">
            <AuthSegment />
          </div>
          <div className="flex items-center md:hidden">
            <MobileButtonsHomepage />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHomepage;
