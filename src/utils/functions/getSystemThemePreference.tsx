import { systemThemePreference } from "@/types/component-props-types";

const getSystemThemePreference = (): systemThemePreference => {
  const prefersDarkMode =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDarkMode) {
    return "dark";
  } else {
    return "light";
  }
};

export default getSystemThemePreference;;
