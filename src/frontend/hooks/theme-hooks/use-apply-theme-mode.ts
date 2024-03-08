import { useEffect } from "react";
import getSystemThemePreference from "@/utils/functions/getSystemThemePreference";
import { ThemeModeType } from "@/types/component-props-types";

const useApplyThemeMode = (currentThemeMode: ThemeModeType) => {
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
};

export default useApplyThemeMode;
