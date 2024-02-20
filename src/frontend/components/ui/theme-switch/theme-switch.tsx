import {useState, useEffect } from "react";
import LightThemeIcon from "../../icons/light-theme-icon";
import DarkThemeIcon from "../../icons/dark-theme-icon";
import SystemThemeIcon from "../../icons/system-theme-icon";

import getThemeModeFromLocalStorage from "@/utils/functions/getThemeModeFromLocalStorage";
import getSystemThemePreference from "@/utils/functions/getSystemThemePreference";
import setThemeModeToLocalStorage from "@/utils/functions/setThemeToLocalStorage";

const ThemeSwitch = () => {
  
  type ThemeModeType = "light" | "dark" | "system";

  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeModeType>("light");

  useEffect(() => {
    const themeMode = getThemeModeFromLocalStorage();
    if (themeMode === null) {
      setCurrentThemeMode("light");
    } else {
      setCurrentThemeMode(themeMode);
    }
  }, []);

  useEffect(() => {
    const addClassDarkToHtml = (): void => {
      const htmlElement = document.documentElement;
      if (!htmlElement.classList.contains("dark")) {
        htmlElement.classList.add("dark");
      }
    };

    const removeClassDarkFromHtml = (): void => {
      const htmlElement = document.documentElement;
      if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
      }
    };

    if (
      currentThemeMode === "dark" ||
      (currentThemeMode === "system" && getSystemThemePreference() === "dark")
    ) {
      addClassDarkToHtml();
    } else if (
      currentThemeMode === "light" ||
      (currentThemeMode === "system" && getSystemThemePreference() === "light")
    ) {
      removeClassDarkFromHtml();
    }
  }, [currentThemeMode]);

  const handleSwitchTheme = () => {
    let newThemeMode: ThemeModeType;

    switch (currentThemeMode) {
      case "light":
        newThemeMode = "dark";
        break;
      case "dark":
        newThemeMode = "system";
        break;
      case "system":
        newThemeMode = "light";
        break;
    }
    setThemeModeToLocalStorage(newThemeMode);
    setCurrentThemeMode(newThemeMode);
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
