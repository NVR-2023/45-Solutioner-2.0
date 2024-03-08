import { useEffect, Dispatch, SetStateAction } from "react";
import { ThemeModeType } from "@/types/component-props-types";
import getThemeModeFromLocalStorage from "@/utils/functions/getThemeModeFromLocalStorage";

const useThemeModeLocalStorageSync = (
  setCurrentThemeMode: Dispatch<SetStateAction<ThemeModeType>>
): void => {
  useEffect(() => {
    const themeMode = getThemeModeFromLocalStorage();
    if (themeMode === null) {
      setCurrentThemeMode("light");
    } else {
      setCurrentThemeMode(themeMode);
    }
  }, []);
};

export default useThemeModeLocalStorageSync;
