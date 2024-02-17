import { ThemeModeType } from "@/types/component-props-types";

const validThemeModes: ThemeModeType[] = ["light", "dark", "system"];

const isValidThemeMode = (value: string) => {
  return validThemeModes.includes(value as ThemeModeType);
};

const getThemeModeFromLocalStorage = (): ThemeModeType | null => {
  const themeMode = localStorage.getItem("solutionerThemeMode");

  if (themeMode === null) return null;
  if (!isValidThemeMode(themeMode)) return validThemeModes[0];

  return themeMode as ThemeModeType;
};

export default getThemeModeFromLocalStorage;
