import React , {FC} from "react"
import { basicComponentPropsType } from "@/types/componentpopstypes";

const CloseButton:FC<basicComponentPropsType> = ({scale=1 , color="black"}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24*scale}
        viewBox="0 -960 960 960"
        width={24*scale}
        fill={color}>
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
};

export default CloseButton;
