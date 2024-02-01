import React, { FC, useState } from "react";
import { themeModeType } from "@/types/component-props-types";
import LightThemeIcon from "../../icons/light-theme-icon";
import DarkThemeIcon from "../../icons/dark-theme-icon";
import SystemThemeIcon from "../../icons/system-theme-icon";

import setThemeModeToLocalStorage from "@/utils/functions/setThemeToLocalStorage";

const ThemeSwitch: FC = () => {
  const [currentThemeMode, setCurrentThemeMode] = useState<themeModeType>("light");

  const handleSwitchTheme = () => {
    switch (currentThemeMode) {
      case "light":
        setThemeModeToLocalStorage("dark");
        setCurrentThemeMode("dark");
        break;
      case "dark":
        setThemeModeToLocalStorage("system");
        setCurrentThemeMode("system");
        break;
      case "system":
        setThemeModeToLocalStorage("light");
        setCurrentThemeMode("light");
        break;
    }
  };

  return (
    <div className="relative h-6 w-6">
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentThemeMode === "light" ? "0" : "180"
        } opacity-${currentThemeMode === "light" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchTheme}
        role="button"
        aria-label="Switch to Dark theme">
        <LightThemeIcon />
      </div>
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentThemeMode === "dark" ? "0" : "180"
        } opacity-${currentThemeMode === "dark" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchTheme}
        role="button"
        aria-label="Switch to System theme">
        <DarkThemeIcon />
      </div>
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentThemeMode === "system" ? "0" : "180"
        } opacity-${currentThemeMode === "system" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchTheme}
        role="button"
        aria-label="Switch to Light theme">
        <SystemThemeIcon />
      </div>
    </div>
  );
};

export default ThemeSwitch;
