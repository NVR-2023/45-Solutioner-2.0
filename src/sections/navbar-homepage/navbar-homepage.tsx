import React, { FC } from "react";
import LogoSegment from "./sub-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";

const NavbarHomepage: FC = () => {

  return (
    <header className="relative z-50 flex justify-center">
      <nav className="fixed w-11/12 top-1 md:top-3 rounded bg-blue-400  dark:bg-red-400">
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
