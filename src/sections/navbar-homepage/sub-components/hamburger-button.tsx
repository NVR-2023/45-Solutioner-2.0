import React, { FC } from "react";
import { OnClickComponentPropsType } from "@/types/component-props-types";

const HamburgerButton: FC<OnClickComponentPropsType> = ({
  scale = 1,
  color = "black",
  onClick,
}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24 * scale}
        viewBox="0 -960 960 960"
        width={24 * scale}
        fill={color}
        onClick={onClick}>
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
};

export default HamburgerButton;
