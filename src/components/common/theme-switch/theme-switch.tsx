import React, { FC, useState } from "react";
import LightThemeIcon from "../../icons/light-theme-icon";
import DarkThemeIcon from "../../icons/dark-theme-icon";
import SystemThemeIcon from "../../icons/system-theme-icon";

const ThemeSwitch: FC = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleSwitchTheme = () => {
    switch (currentTheme) {
      case "light":
        setCurrentTheme("dark");
        break;
      case "dark":
        setCurrentTheme("system");
        break;
      case "system":
        setCurrentTheme("light");
        break;
    }
  };

  return (
    <div className="relative h-6 w-6">
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentTheme === "light" ? "0" : "180"
        } opacity-${currentTheme === "light" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchTheme}
        role="button"
        aria-label="Switch to Dark theme">
        <LightThemeIcon />
      </div>
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentTheme === "dark" ? "0" : "180"
        } opacity-${currentTheme === "dark" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchTheme}
        role="button"
        aria-label="Switch to System theme">
        <DarkThemeIcon />
      </div>
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentTheme === "system" ? "0" : "180"
        } opacity-${currentTheme === "system" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchTheme}
        role="button"
        aria-label="Switch to Light theme">
        <SystemThemeIcon />
      </div>
    </div>
  );
};

export default ThemeSwitch;
