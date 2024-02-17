
import React, { FC } from "react";
import ThemeSwitch from "@/components/UI/theme-switch/theme-switch";
import SigninIcon from "../../../components/icons/signin-icon";
import MenuToggle from "@/components/UI/menu-toggle/menu-toggle";

const MobileAuthSegment: FC = () => {
  return (
    <div className="flex h-full items-center justify-between space-x-6">
            <div className="flex items-center">
        <ThemeSwitch />
      </div>
      <div className="flex items-center">
        <SigninIcon />
      </div>
      <div className="flex items-center">
        <MenuToggle />
      </div>
    </div>
  );
};

export default MobileAuthSegment;
