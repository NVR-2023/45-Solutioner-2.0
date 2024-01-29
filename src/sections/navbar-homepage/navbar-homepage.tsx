import React, { FC } from "react";
import LogoComponent from "./sub-components/logo-component";
import HomeSectionLinks from "./sub-components/navbar-links-homepage";
import SigninSegment from "./sub-components/auth-segment";
import MobileButtonsHomepage from "./sub-components/mobile-buttons-homepage";
import MobileSidemenuHomepage from "./sub-components/mobile-sidemenu-homepage";
import { useMobileNavbarContext } from "@/contextes/mobile-navbar-pulldown";

const NavbarHomepage: FC = () => {
  const { mobileNavbarContext: homepageContext } = useMobileNavbarContext();
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-1.5 w-full">
        <div className="flex align-middle justify-between mx-4 md:mx-12 px-7 py-3">
          <div className="">
            <LogoComponent />
          </div>
          <div className="hidden md:flex">
            <HomeSectionLinks />
          </div>
          <div className="hidden md:flex md:justify-between">
            <SigninSegment />
          </div>
          <div className="md:hidden">
            <MobileButtonsHomepage />
          </div>
        </div>
        {homepageContext && (
          <div className="md:hidden">
            <MobileSidemenuHomepage />
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarHomepage;
