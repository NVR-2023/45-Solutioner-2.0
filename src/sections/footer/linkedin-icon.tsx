import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/componentpopstypes";

const LinkedinIcon: FC<basicComponentPropsType> = ({ scale = 1, color = "white" }) => {
  return (
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    
    </a>
  );
};

export default LinkedinIcon;
