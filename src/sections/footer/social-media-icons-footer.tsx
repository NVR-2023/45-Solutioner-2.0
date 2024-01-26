import React, { FC } from "react";
import XIcon from "./x-icon";
import FacebookIcon from "./facebook-icon";
import LinkedinIcon from "./linkedin-icon";

const SocialMediaIcons: FC = () => {
  return (
    <div className="flex space-x-4 h-4 mb-2">
      <XIcon scale={.7} color="#d4d4d4" />
      <FacebookIcon scale={.7} color="#d4d4d4" />
      <LinkedinIcon scale={.7} color="#d4d4d4" />
    </div>
  );
};

export default SocialMediaIcons;
