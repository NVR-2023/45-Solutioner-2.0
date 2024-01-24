import React, { FC } from "react";
import Link from "next/link";
import LogoIcon from "./logoicon";

const LogoComponent: FC = () => {
  return (
    <div className="flex h-full items-center">
      <Link href={"/#services"} className="h-full flex items-center space-x-.5">
        <LogoIcon size={1.5} />
        <span className=" font-aperçu font-bold text-black text-base tracking-wide">olutioner</span>
      </Link>
    </div>
  );
};

export default LogoComponent;
