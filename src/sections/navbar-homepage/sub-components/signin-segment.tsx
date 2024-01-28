import React, { FC } from "react";
import SigninButton from "./signin-button";
import ThemeSwitch from "@/components/common/theme-switch/theme-switch";

const SigninSegment: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <ThemeSwitch/>
      <SigninButton />
    </div>
  );
};

export default SigninSegment;
