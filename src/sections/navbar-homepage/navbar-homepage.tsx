import React, { FC } from "react";
import LogoSegment from "./sub-components/logo-segment";
import HomeSectionLinks from "./sub-components/home-section-links";
import AuthSegment from "./sub-components/auth-segment";

const NavbarHomepage: FC = () => {

  return (
    <header className="relative z-50 flex justify-center">
      <nav className="fixed w-11/12 top-1 md:top-3 rounded dark:bg-neutral-700 dark:bg-opacity-70 dark:text-white">
        <div className="flex align-middle justify-between py-3 px-5">
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
