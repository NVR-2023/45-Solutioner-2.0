import { useState } from "react";
import { ThemeModeType } from "@/types/component-props-types";

const useThemeModeSSetup = () => {
  const [currentThemeMode, setCurrentThemeMode] = useState<ThemeModeType>("light");
  return { currentThemeMode, setCurrentThemeMode };
};

export default useThemeModeSSetup;
