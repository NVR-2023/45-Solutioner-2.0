import React, { FC } from "react";
import MobileSigninIcon from "./mobile-signin-button";

const MobileAuthIcons: FC = () => {
  return (
    <div className="flex space-x-3">
      <div className="">
        <MobileSigninIcon color={"#15803d"} />
      </div>
    </div>
  );
};

export default MobileAuthIcons;
