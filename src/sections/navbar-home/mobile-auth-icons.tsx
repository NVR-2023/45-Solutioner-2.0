import React, { FC } from "react";
import MobileSigninIcon from "./mobile-signin-icon";
import MobileRegisterIcon from "./mobile-register-icon";

const MobileAuthIcons: FC = () => {
  return (
    <div className="flex space-x-3">
      <div className="">
        <MobileSigninIcon />
      </div>
      <div className="">
        <MobileRegisterIcon />
      </div>
    </div>
  );
};

export default MobileAuthIcons;
