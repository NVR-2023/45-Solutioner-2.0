import React, { FC } from "react";
import LogoComponent from "../logocomponent";

const Navbar: FC = () => {
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-1.5 w-full">
        <div className="flex align-middle justify-between rounded mx-12 px-7 py-3 bg-zinc-300 ">
          <div>
            <LogoComponent />
          </div>
          <div
            style={{
              letterSpacing: 2.3,
              fontWeight: 1000,
              fontSize: 12,
              fontVariant: "small-caps",
            }}
            className=" font-medium font-aperçu ">
            {" "}
            aperçu: solutioner
          </div>
       
          <div style={{ letterSpacing: 0.9, fontSize: 12 }} className=" font-medium  font-aperçu ">
            {" "}
            Services
          </div>
          <div style={{ letterSpacing: 0.7, fontSize: 12 }} className=" font-bold  font-aperçu ">
            {" "}
            Services
          </div>

          <div className="font-aperçu" style={{ fontWeight: 500, fontSize: 12 }}>
            basis: secondary links
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
