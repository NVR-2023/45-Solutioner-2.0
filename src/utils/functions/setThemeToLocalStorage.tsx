import { ThemeModeType } from "@/types/component-props-types";

const setThemeModeToLocalStorage = (themeMode: ThemeModeType): void => {
  localStorage.setItem("solutionerThemeMode", themeMode);
};

export default setThemeModeToLocalStorage;
