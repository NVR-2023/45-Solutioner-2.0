import React, { FC } from "react";
import XIcon from "../../../components/icons/x-icon";
import FacebookIcon from "../../../components/icons/facebook-icon";
import LinkedinIcon from "../../../components/icons/linkedin-icon";

const SocialMediaIcons: FC = () => {
  return (
    <nav className="flex space-x-5 h-42">
      <XIcon scale={0.7} />
      <FacebookIcon scale={0.7} />
      <LinkedinIcon scale={0.7} />
    </nav>
  );
};

export default SocialMediaIcons;
