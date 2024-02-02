import React, { FC } from "react";
import LogoSegment from "./sub-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";
import MobileButtonsHomepage from "./sub-components/mobile-buttons-homepage";
import MobileSidemenuHomepage from "./sub-components/mobile-sidemenu-homepage";
import { useMobileNavbarPulldownContext } from "@/contexts/mobile-navbar-pulldown-context";

const NavbarHomepage: FC = () => {
  const { isMobileNavbarPulldownOpen: mobileNavbarContext } = useMobileNavbarPulldownContext();
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-0 md:top-3 w-full">
        <div className="flex align-middle justify-between mx-4 md:mx-12 px-7 py-3">
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
        {mobileNavbarContext && (
          <div className="md:hidden">
            <MobileSidemenuHomepage />
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarHomepage;
