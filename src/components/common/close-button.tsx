import React, { FC } from "react";
import { basicComponentPropsType } from "@/types/componentpopstypes";

const CloseButton: FC<basicComponentPropsType> = ({ scale = 1, color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      viewBox="0 -960 960 960"
      width={24 * scale}
      fill={color}>
      <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
    </svg>
  );
};

export default CloseButton;
