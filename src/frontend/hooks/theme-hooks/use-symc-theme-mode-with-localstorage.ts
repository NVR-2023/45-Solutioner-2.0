import { useEffect, Dispatch, SetStateAction } from "react";
import { ThemeModeType } from "@/types/component-props-types";
import getThemeModeFromLocalStorage from "@/utils/functions/get-theme-mode-from-localstorage";

const useSyncThemeModeWithLocalStorage = (
  setCurrentThemeMode: Dispatch<SetStateAction<ThemeModeType>>
): void => {
  useEffect(() => {
    const themeMode = getThemeModeFromLocalStorage();
    if (themeMode === null) {
      setCurrentThemeMode("light");
    } else {
      setCurrentThemeMode(themeMode);
    }
  }, [setCurrentThemeMode]);
};

export default useSyncThemeModeWithLocalStorage;
