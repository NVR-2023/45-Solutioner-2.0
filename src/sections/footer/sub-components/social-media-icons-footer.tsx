import React, { FC } from "react";
import XIcon from "./x-icon";
import FacebookIcon from "./facebook-icon";
import LinkedinIcon from "./linkedin-icon";

const SocialMediaIcons: FC = () => {
  return (
    <div className="mt-2 flex space-x-5 h-42">
      <XIcon scale={0.7} />
      <FacebookIcon scale={0.7} />
      <LinkedinIcon scale={0.7} />
    </div>
  );
};

export default SocialMediaIcons;
