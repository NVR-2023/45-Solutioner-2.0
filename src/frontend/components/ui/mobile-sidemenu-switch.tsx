import { useState } from "react";
import { BasicComponentProps } from "@/types/component-props-types";
import LightThemeIcon from "../icons/light-theme-icon";
import DarkThemeIcon from "../icons/dark-theme-icon";

const MobileSidemenuSwitch = ({ scale = 1, color = "currentColor" }: BasicComponentProps) => {
  const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);

  const handleClick = () => {
    setIsFirstDivVisible(!isFirstDivVisible);
  };

  return (
    <div className="relative">
      <div
        className={`absolute w-5 h-5 flex items-center justify-center transform transition-transform ${
          isFirstDivVisible
            ? "rotate-0 opacity-100 duration-500"
            : "rotate-180 opacity-0 duration-500"
        }`}
        onClick={handleClick}>
        <LightThemeIcon scale={scale} color={color} />
      </div>
      <div
        className={`absolute w-5 h-5 flex items-center justify-center transform transition-transform ${
          isFirstDivVisible
            ? "rotate-180 opacity-0 duration-500"
            : "rotate-0 opacity-100 duration-500"
        }`}
        onClick={handleClick}>
        <DarkThemeIcon scale={scale} color={color} />
      </div>
    </div>
  );
};

export default MobileSidemenuSwitch;
