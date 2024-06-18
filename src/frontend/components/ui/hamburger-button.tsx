import { OnClickComponentProps } from "@/types/component-props-types";
import HamburgerIcon from "../icons/hamburger-icon";

const HamburgerButton = ({ scale = 1, color = "currentColor", onClick }: OnClickComponentProps) => {
  return (
    <div onClick={onClick}>
      <HamburgerIcon scale={scale} color={color} />
    </div>
  );
};

export default HamburgerButton;
