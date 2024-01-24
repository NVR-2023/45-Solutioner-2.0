import React, { FC } from "react";
import MobileSigninIcon from "./MobileSigninIcon";
import MobileRegisterIcon from "./mobileregistericon";

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
