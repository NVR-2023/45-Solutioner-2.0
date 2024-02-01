import React, { FC } from "react";
import { onClickComponentPropsType } from "@/types/component-props-types";
import CloseICon from "../../icons/close-icon";
const CloseButton: FC<onClickComponentPropsType> = ({
  scale = 1,
  color = "currentColor",
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <CloseButton scale={scale} color={color} />
    </div>
  );
};

export default CloseButton;
