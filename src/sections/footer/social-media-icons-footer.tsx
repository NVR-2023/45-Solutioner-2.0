import React, { FC } from "react";
import XIcon from "./x-icon";
import FacebookIcon from "./facebook-icon";
import LinkedinIcon from "./linkedin-icon";

const SocialMediaIcons: FC = () => {
  return (
    <div className="flex space-x-3">
      <XIcon scale={0.5} color="yellow" />
      <FacebookIcon scale={0.5} color="yellow" />
      <LinkedinIcon scale={0.5} color="yellow" />
    </div>
  );
};

export default SocialMediaIcons;
