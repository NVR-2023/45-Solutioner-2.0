import React, { FC } from "react";
import Link from "next/link";
import LogoIcon from "./logoicon";

const LogoComponent: FC = () => {
  return (
      <Link
        href={"/"}
        className="flex items-center space-x-.5 font-aperçu font-bold text-black mix-blend-screen text-base tracking-wide">
        <LogoIcon size={1.5} />
        <span>olutioner</span>
      </Link>
  );
};

export default LogoComponent;
