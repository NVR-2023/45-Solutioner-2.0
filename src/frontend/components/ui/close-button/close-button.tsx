import { OnClickComponentProps } from "@/types/component-props-types";

import CloseICon from "../../icons/close-icon";
const CloseButton = ({ scale = 1, color = "currentColor", onClick }: OnClickComponentProps) => {
  return (
    <div onClick={onClick}>
      <CloseICon scale={scale} color={color} />
    </div>
  );
};

export default CloseButton;
