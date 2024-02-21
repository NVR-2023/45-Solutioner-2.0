import { ThemeMode } from "@/types/component-props-types";

const setThemeModeToLocalStorage = (themeMode: ThemeMode): void => {
  localStorage.setItem("solutionerThemeMode", themeMode);
};

export default setThemeModeToLocalStorage;
