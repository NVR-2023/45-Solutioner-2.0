import React, { FC } from "react";
import ThemeSwitch from "@/components/common/theme-switch/theme-switch";
import SigninButton from "./signin-button";
import RegisterButton from "./register-button";

const SigninSegment: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <ThemeSwitch/>
      <SigninButton />
      <RegisterButton/>
    </div>
  );
};

export default SigninSegment;
