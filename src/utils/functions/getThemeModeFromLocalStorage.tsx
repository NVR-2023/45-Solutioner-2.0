type ThemeMode = "light" | "dark" | "system";

const validThemeModes: ThemeMode[] = ["light", "dark", "system"];

const isValidThemeMode = (value: string): value is ThemeMode => {
  return validThemeModes.includes(value as ThemeMode);
};

const getThemeModeFromLocalStorage = (): ThemeMode | null => {
  const themeMode = localStorage.getItem("solutionerThemeMode");

  if (themeMode === null) return null;
  if (!isValidThemeMode(themeMode)) return validThemeModes[0];

  return themeMode as ThemeMode;
};

export default getThemeModeFromLocalStorage;
