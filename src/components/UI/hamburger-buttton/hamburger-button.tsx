import React, { FC } from "react";
import { onClickComponentPropsType } from "@/types/component-props-types";
import HamburgerIcon from "../../icons/hamburger-icon";

const HamburgerButton: FC<onClickComponentPropsType> = ({
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
