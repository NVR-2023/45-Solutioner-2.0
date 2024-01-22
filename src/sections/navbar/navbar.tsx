import React, { FC } from "react";
import LogoComponent from "../logocomponent";

const Navbar: FC = () => {
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-1.5 w-full">
        <div className="flex align-middle justify-between rounded mx-12 px-7 py-3 bg-zinc-300 ">
            <div><LogoComponent/></div>
            <div className=" font-medium font-interTight"> Inter: Primary links</div>
            <div className=" font-medium font-basis-">Basis: Primary links</div>
            <div className="tracking-wider " style={{fontWeight: 500, fontSize: 14}}>secondary links</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
