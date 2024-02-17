import React, { FC } from "react";
import { OnClickComponentPropsType } from "@/types/component-props-types";
import HamburgerIcon from "../../icons/hamburger-icon";

const HamburgerButton: FC<OnClickComponentPropsType> = ({
  scale = 1,
  color = "currentColor",
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <HamburgerIcon scale={scale} color={color} />
    </div>
  );
};

export default HamburgerButton;
