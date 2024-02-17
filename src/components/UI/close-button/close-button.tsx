import React, { FC } from "react";
import { OnClickComponentPropsType } from "@/types/component-props-types";
import CloseICon from "@/components/icons/close-icon";

const CloseButton: FC<OnClickComponentPropsType> = ({
  scale = 1,
  color = "currentColor",
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <CloseICon scale={scale} color={color} />
    </div>
  );
};

export default CloseButton;
