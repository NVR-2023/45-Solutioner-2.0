import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/componentpopstypes";

const XIcon: FC<basicComponentPropsType> = ({ scale = 1, color = "black" }) => {
  return (
    <a href="https://www.twitter.com" title="twitter.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 512"
        width={24 * scale}
        height={24 * scale}
        fill={color}>
        <path
          fillRule="nonzero"
          d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
        />
      </svg>
    </a>
  );
};

export default XIcon;
