import React, { FC, useState } from "react";
import { basicComponentPropsType } from "@/types/component-props-types";
import LightThemeIcon from "./sub-components/light-theme-icon";
import DarkThemeIcon from "./sub-components/dark-theme-icon";

const ThemeSwitch: FC<basicComponentPropsType> = ({ scale = 1, color = "black" }) => {
  const [isFirstIconVisible, setIsFirstIconVisible] = useState(true);

  const handleClick = () => {
    setIsFirstIconVisible(!isFirstIconVisible);
  };

  return (
    <div className="relative h-6 w-6">
      <div
        className={`absolute flex items-center justify-center transform transition-transform ${
          isFirstIconVisible
            ? "rotate-0 opacity-100 duration-500"
            : "rotate-180 opacity-0 duration-500"
        }`}
        onClick={handleClick}>
        <LightThemeIcon scale={scale} color={color} />
      </div>
      <div
        className={`absolute flex items-center justify-center transform transition-transform ${
          isFirstIconVisible
            ? "rotate-180 opacity-0 duration-500"
            : "rotate-0 opacity-100 duration-500"
        }`}
        onClick={handleClick}>
        <DarkThemeIcon scale={scale} color={color} />
      </div>
    </div>
  );
};

export default ThemeSwitch;
