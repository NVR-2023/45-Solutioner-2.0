import React, { FC } from "react";
import LogoSegment from "./sub-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";

import {
  TRANSPARENT_THEME_DEFAULT,
  DARK_THEME_DEFAULT,
  DARK_THEME_NAVBAR,
} from "@/app/global-text-styles";
import { useThemeContext } from "@/contexts/theme-context";

const NavbarHomepage: FC = () => {
  const { isDarkThemeOn } = useThemeContext();

  return (
    <header className={`relative z-50 flex justify-center  ${isDarkThemeOn ? "dark" : ""}`}>
      <nav className={`fixed w-11/12 top-1 md:top-3 rounded dark:bg-red-400`}>
        <div className="flex align-middle justify-between p-3">
          <div className="">
            <LogoSegment />
          </div>
          <div className="hidden md:flex">
            <HomeSectionLinks />
          </div>
          <div className="">
            <AuthSegment />
          </div>       
        </div>
      </nav>
    </header>
  );
};

export default NavbarHomepage;
