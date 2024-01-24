import React, { FC } from "react";
import Link from "next/link";
import LogoIcon from "./logoicon";

const LogoComponent: FC = () => {
  return (
    <div className="flex h-full items-center">
      <Link href={"/#services"} className="h-full flex items-center space-x-0.5">
        <LogoIcon scale={2} color={"#15803d"} />
        <span className=" font-aperçu font-bold text-green-700 text-lg tracking-wide">
          olutioner
        </span>
      </Link>
    </div>
  );
};

export default LogoComponent;
