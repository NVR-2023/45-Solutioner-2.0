import React, { FC, useState, useEffect } from "react";
import { themeModeType } from "@/types/component-props-types";
import LightThemeIcon from "../../icons/light-theme-icon";
import DarkThemeIcon from "../../icons/dark-theme-icon";
import SystemThemeIcon from "../../icons/system-theme-icon";

import getThemeModeFromLocalStorage from "@/utils/functions/getThemeModeFromLocalStorage";
import getSystemThemePreference from "@/utils/functions/getSystemThemePreference";
import setThemeModeToLocalStorage from "@/utils/functions/setThemeToLocalStorage";

import { useThemeContext } from "@/contextes/theme-context";

const ThemeSwitch: FC = () => {
  const [currentThemeMode, setCurrentThemeMode] = useState<themeModeType>("light");
  const { isDarkThemeOn, setIsDarkThemeOn } = useThemeContext();

  useEffect(() => {
    const themeMode = getThemeModeFromLocalStorage();
    switch (themeMode) {
      case null:
        setCurrentThemeMode("light");
        setIsDarkThemeOn(false);
        break;
      case "light":
        setCurrentThemeMode("light");
        setIsDarkThemeOn(false);
        break;
      case "dark":
        setCurrentThemeMode("dark");
        setIsDarkThemeOn(true);
        break;
      case "system":
        setCurrentThemeMode("system");
        if (getSystemThemePreference()==="dark") 
        {
        setIsDarkThemeOn(true);
        }
        else {setIsDarkThemeOn(false);}
        break;
    }
  }, []);

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
