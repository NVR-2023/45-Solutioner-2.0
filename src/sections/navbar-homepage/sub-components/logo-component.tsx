import React, { FC } from "react";
import LogoIcon from "./logo-icon";
import { LOGO_TEXT } from "@/app/global-text-styles";
import Link from "next/link";

const LogoComponent: FC = () => {
  return (
    <div className="flex h-full items-center">
      <Link href={"/#services"} className="flex items-center">
        <div><LogoIcon /></div>
        <div className={LOGO_TEXT}>
          Solutioner
        </div>
      </Link>
    </div>
  );
};

export default LogoComponent;
