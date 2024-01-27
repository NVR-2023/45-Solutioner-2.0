import React, { FC } from "react";
import { onClickComponentPropsType } from "@/types/component-props-types";

const CloseButton: FC<onClickComponentPropsType> = ({ scale = 1, color = "black", onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}
      onClick={onClick}>
      <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
    </svg>
  );
};

export default CloseButton;
