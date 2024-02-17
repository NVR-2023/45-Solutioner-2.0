import React, { FC } from "react";
import LogoIcon from "../../../components/icons/logo-icon";
import { LOGO_TEXT } from "@/app/global-text-styles";
import Link from "next/link";

const LogoSegment: FC = () => {
  return (
    <div className="flex h-full items-center">
      <Link href={"/#services"} className="flex items-center">
        <div>
          <LogoIcon />
        </div>
        <div className={`hidden md:flex ${LOGO_TEXT}`}>Solutioner</div>
      </Link>
    </div>
  );
};

export default LogoSegment;
