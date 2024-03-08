import LightThemeIcon from "../../icons/light-theme-icon";
import DarkThemeIcon from "../../icons/dark-theme-icon";
import SystemThemeIcon from "../../icons/system-theme-icon";
import setThemeModeToLocalStorage from "@/utils/functions/setThemeToLocalStorage";
import { ThemeModeType } from "@/types/component-props-types";

import useThemeModeSSetup from "@/frontend/hooks/theme-hooks/use-theme-mode-setup";
import useSyncThemeModeWithLocalStorage from "@/frontend/hooks/theme-hooks/use-symc-theme-mode-with-localstorage";
import useApplyThemeMode from "@/frontend/hooks/theme-hooks/use-apply-theme-mode";

const ThemeSwitch = () => {
  const { currentThemeMode, setCurrentThemeMode } = useThemeModeSSetup();
  useSyncThemeModeWithLocalStorage(setCurrentThemeMode);
  useApplyThemeMode(currentThemeMode);

  const handleSwitchThemeMode = () => {
    const themeModeArray: ThemeModeType[] = ["light", "dark", "system"];
    let currentThemeIndex: number = themeModeArray.indexOf(currentThemeMode);
    let newThemeMode: ThemeModeType =
      themeModeArray[(currentThemeIndex + 1) % themeModeArray.length];
    setThemeModeToLocalStorage(newThemeMode);
    setCurrentThemeMode(newThemeMode);
  };

  return (
    <div className="relative h-6 w-6">
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentThemeMode === "light" ? "0" : "180"
        } opacity-${currentThemeMode === "light" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchThemeMode}
        role="button"
        aria-label="Switch to Dark theme">
        <LightThemeIcon />
      </div>
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentThemeMode === "dark" ? "0" : "180"
        } opacity-${currentThemeMode === "dark" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchThemeMode}
        role="button"
        aria-label="Switch to System theme">
        <DarkThemeIcon />
      </div>
      <div
        className={`absolute flex items-center justify-center transform rotate-${
          currentThemeMode === "system" ? "0" : "180"
        } opacity-${currentThemeMode === "system" ? "100" : "0"} transition-all duration-500`}
        onClick={handleSwitchThemeMode}
        role="button"
        aria-label="Switch to Light theme">
        <SystemThemeIcon />
      </div>
    </div>
  );
};

export default ThemeSwitch;
