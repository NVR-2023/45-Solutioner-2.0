import React, { FC } from "react";
import ThemeSwitch from "@/frontend/components/ui/theme-switch/theme-switch";
import SigninButton from "./signin-button";
import RegisterButton from "./register-button";
import SigninIcon from "../../../components/icons/signin-icon";
import MenuToggle from "@/frontend/sections/navbar-homepage/sub-components/menu-toggle";

const AuthSegment: FC = () => {
  return (
    <div className="flex items-center justify-between space-x-6">
      <div className="flex items-center">
        <ThemeSwitch />
      </div>
      <div className="hidden md:flex md:items-center">
        <SigninButton />
      </div>
      <div className="hidden md:flex md:items-center">
        <RegisterButton />
      </div>
      <div className="md:hidden flex items-center">
        <SigninIcon />
      </div>
      <div className="md:hidden flex items-center">
        <MenuToggle />
      </div>
    </div>
  );
};

export default AuthSegment;
