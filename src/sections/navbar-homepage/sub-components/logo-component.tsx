import React, { FC } from "react";
import LogoIcon from "./logo-icon";
import Link from "next/link";

const LogoComponent: FC = () => {
  return (
    <div className="flex h-full items-center">
      <Link href={"/#services"} className="flex items-center">
        <div><LogoIcon /></div>
        <div className=" font-aperçu font-bold text-lg -tracking-wide">
          Solutioner
        </div>
      </Link>
    </div>
  );
};

export default LogoComponent;
