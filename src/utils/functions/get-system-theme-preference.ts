type SystemThemePreference = "light" | "dark" | "no-preference";

const getSystemThemePreference = (): SystemThemePreference => {
  const prefersDarkMode =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDarkMode) {
    return "dark";
  } else {
    return "light";
  }
};

export default getSystemThemePreference;
