import React, { useState } from "react";
import LightThemeTcon from "./light-theme-icon";
import DarkThemeIcon from "./dark-theme-icon";

const ThemeSwapper = () => {
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
        <LightThemeTcon />
      </div>
      <div
        className={`absolute w-5 h-5 flex items-center justify-center transform transition-transform ${
          isFirstDivVisible
            ? "rotate-180 opacity-0 duration-500"
            : "rotate-0 opacity-100 duration-500"
        }`}
        onClick={handleClick}>
        <DarkThemeIcon/>
      </div>
    </div>
  );
};

export default ThemeSwapper;
