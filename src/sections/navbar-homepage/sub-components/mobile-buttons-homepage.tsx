"use client";

import React, { FC } from "react";
import SigninIcon from "../../../components/icons/signin-icon";
import MenuToggle from "@/components/ui/menu-toggle/menu-toggle";

const MobileButtonsHomepage: FC = () => {

  return (
    <div className="flex h-full items-center justify-between space-x-4">
      <div className="flex items-center">
        <SigninIcon />
      </div>
      <div className="flex items-center">
        <MenuToggle />
      </div>
    </div>
  );
};

export default MobileButtonsHomepage;
