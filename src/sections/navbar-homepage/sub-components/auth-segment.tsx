import React, { FC, use } from "react";
import ThemeSwitch from "@/components/UI/theme-switch/theme-switch";;
import SigninButton from "./signin-button";
import RegisterButton from "./register-button";
import { useThemeContext } from "@/contexts/theme-context";

const AuthSegment: FC = () => {
  const { isDarkThemeOn, setIsDarkThemeOn } = useThemeContext();
  return (
    <div className="flex items-center justify-between space-x-7">
      <div className="flex items-center">
        <ThemeSwitch />
      </div>
      <div className="hidden md:flex md:items-center">
        <SigninButton />
      </div>
      <div className="hidden md:flex md:items-center">
        <RegisterButton />
      </div>
    </div>
  );
};

export default AuthSegment;
