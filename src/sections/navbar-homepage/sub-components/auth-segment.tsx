import React, { FC } from "react";
import ThemeSwitch from "@/components/common/theme-switch/theme-switch";
import SigninButton from "./signin-button";
import RegisterButton from "./register-button";

const AuthSegment: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div><ThemeSwitch/></div>
      <div className="hidden md:flex"><SigninButton /></div>
      <div className="hidden md:flex"><RegisterButton /></div>
    </div>
  );
};

export default AuthSegment;
