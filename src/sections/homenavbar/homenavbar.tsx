import React, { FC } from "react";
import LogoComponent from "./logocomponent";
import HomeSectionLinks from "./homelinks";
import AuthButtons from "./authbuttons";
import MobileHomeMenu from "./mobilehomemenu";
import MobileAuthIcons from "./mobileauthicons";

const HomeNavbar: FC = () => {
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
          <div className="flex md:hidden">
            <MobileAuthIcons />
          </div>
          <div className="md:hidden">
            <MobileHomeMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
