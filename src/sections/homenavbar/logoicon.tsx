import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/componentpopstypes";

const LogoIcon: FC<basicComponentPropsType> = ({ scale = 1, color = "black" }) => {
  return (
    <svg width={8*scale} height={11*scale} viewBox="0 0 8 11" fill={color} xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.56667" cy="10.0833" r="0.916667" fill={color} />
      <circle cx="0.916667" cy="8.8" r="0.916667" fill={color} />
      <circle cx="2.56667" cy="5.5" r="0.916667" fill={color} />
      <circle cx="0.916667" cy="4.21667" r="0.916667" fill={color} />
      <circle cx="6.23333" cy="6.78333" r="0.916667" fill={color} />
      <circle cx="4.58333" cy="5.5" r="0.916667" fill={color} />
      <circle cx="6.23333" cy="2.38333" r="0.916667" fill={color} />
      <circle cx="4.58333" cy="1.1" r="0.916667" fill={color} />
      <circle
        cx="0.916667"
        cy="0.916667"
        r="0.916667"
        transform="matrix(1 0 0 -1 5.31667 9.71667)"
        fill={color}
      />
      <circle
        cx="0.916667"
        cy="0.916667"
        r="0.916667"
        transform="matrix(1 0 0 -1 3.66667 11)"
        fill={color}
      />
      <circle
        cx="0.916667"
        cy="0.916667"
        r="0.916667"
        transform="matrix(1 0 0 -1 1.65 1.83333)"
        fill={color}
      />
      <circle
        cx="0.916667"
        cy="0.916667"
        r="0.916667"
        transform="matrix(1 0 0 -1 0 3.11666)"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;
