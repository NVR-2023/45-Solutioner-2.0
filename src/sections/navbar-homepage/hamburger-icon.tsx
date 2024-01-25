import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/componentpopstypes";

const HamburgerIcon: FC<basicComponentPropsType> = ({scale=1 , color = "black"}) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height={24*scale} viewBox="0 -960 960 960" width={24*scale} fill={color}>
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
};

export default HamburgerIcon;
