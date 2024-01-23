import React, { FC } from "react";
import LogoComponent from "./logocomponent";
import HomeLinks from "./homelinks";
import AuthButtons from "./authbuttons";

const HomeNavbar: FC = () => {
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-1.5 w-full">
        <div className="flex align-middle justify-between mx-12 px-7 py-3">
          <div><LogoComponent /></div>
          <div><HomeLinks /></div>
          <div><AuthButtons /></div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
