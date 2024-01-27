import React, { FC } from "react";
import Link from "next/link";

const LogoComponent: FC = () => {
  return (
    <div className="flex h-full items-center">
      <Link href={"/#services"} className="flex items-center">
        <div className=" font-aperçu font-bold text-green-700 text-lg tracking-wide">
          Solutioner
        </div>
      </Link>
    </div>
  );
};

export default LogoComponent;
