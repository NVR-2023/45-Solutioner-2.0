import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <header>
      <nav className="relative z-[999]">
        <div className="">
          <div className="">
            <div>Logo</div>
            <div>Primary links</div>
            <div>Secondary links</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
