import { themeModeType } from "@/types/component-props-types";

const setThemeModeToLocalStorage = (themeMode: themeModeType): void => {
  localStorage.setItem("solutionerThemeMode", themeMode);
};

export default setThemeModeToLocalStorage;
