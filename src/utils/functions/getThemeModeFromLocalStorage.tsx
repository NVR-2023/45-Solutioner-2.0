import { themeModeType } from "@/types/component-props-types";

const validThemeModes: themeModeType[] = ["light", "dark", "system"];

const isValidThemeMode = (value: string) => {
  return validThemeModes.includes(value as themeModeType);
};

const getThemeModeFromLocalStorage = (): themeModeType | null => {
  const themeMode = localStorage.getItem("solutionerThemeMode");

  if (themeMode === null) return null;
  if (!isValidThemeMode(themeMode)) return validThemeModes[0];

  return themeMode as themeModeType;
};

export default getThemeModeFromLocalStorage;
