"use client";
import React, { createContext, useContext, useState, FC, Dispatch, SetStateAction } from "react";

import { basicChildrenType } from "@/types/component-props-types";

type ThemeContextPropsType = {
  isDarkThemeOn: boolean;
  setIsDarkThemeOn: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextPropsType | undefined>(undefined);

export const ThemeContextProvider: FC<basicChildrenType> = ({ children }) => {
  const [isDarkThemeOn, setIsDarkThemeOn] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        isDarkThemeOn: isDarkThemeOn,
        setIsDarkThemeOn: setIsDarkThemeOn,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextPropsType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
};
