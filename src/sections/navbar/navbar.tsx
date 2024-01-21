import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <div className="w-24 bg-pink-400 shadow rounded">
        <p>Pink Navbar</p>
      </div>
      <div className="w-24 bg-blue-400 shadow rounded">
        <p>Navbar</p>
      </div>
      <div className="w-96 bg-amber-400 shadow rounded">
        <p>Navbar</p>
      </div>
      <div className="w-96 bg-black text-white shadow rounded">
        <p>Navbar</p>
      </div>
    </nav>
  );
};

export default Navbar;
