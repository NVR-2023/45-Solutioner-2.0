import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="relative z-50 w-full">
      <nav className="fixed top-0 w-full">
        <div className="flex justify-between rounded mx-5 px-3 py-1 bg-red-300 ">
            <div>Logo</div>
            <div>Primary links</div>
            <div>Secondary links</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
