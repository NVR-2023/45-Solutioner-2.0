import React, { FC } from "react";
import LogoComponent from "./sub-components/logo-component";
import HomeSectionLinks from "./sub-components/navbar-links-homepage";
import AuthSegment from "./sub-components/auth-segment";
import MobileButtonsHomepage from "./sub-components/mobile-buttons-homepage";
import MobileSidemenuHomepage from "./sub-components/mobile-sidemenu-homepage";
import { useMobileNavbarContext } from "@/contextes/mobile-navbar-pulldown";

const NavbarHomepage: FC = () => {
  const { mobileNavbarContext } = useMobileNavbarContext();
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-0 md:top-3 w-full">
        <div className="flex align-middle justify-between mx-4 md:mx-12 px-7 py-3">
          <div className="">
            <LogoComponent />
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
