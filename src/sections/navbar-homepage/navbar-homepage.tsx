import React, { FC } from "react";
import LogoComponent from "./logo-component";
import HomeSectionLinks from "./navbar-links-homepage";
import AuthButtons from "./auth-buttons";
import MobileButtonsHomepage from "./mobile-buttons-homepage";
import MobileSidemenuHomepage from "./mobile-sidemenu-homepage";
import { useMobileNavbarContext } from "@/contextes/mobile-navbar-pulldown";

const NavbarHomepage: FC = () => {
  const { mobileNavbarContext: homepageContext } = useMobileNavbarContext();
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-1.5 w-full">
        <div className="flex align-middle justify-between mx-0 md:mx-12 px-7 py-3">
          <div className="">
            <LogoComponent />
          </div>
          <div className="hidden md:flex">
            <HomeSectionLinks />
          </div>
          <div className="hidden md:flex">
            <AuthButtons />
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
