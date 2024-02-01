"use client";
import React, { createContext, useContext, useState, FC, Dispatch, SetStateAction } from "react";

import { basicChildrenType } from "@/types/component-props-types";

type MobileNavbarPulldownContextPropsType = {
  isMobileNavbarPulldownOpen: boolean;
  setIsMobileNavbarPulldownOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNavbarPulldownContext = createContext<MobileNavbarPulldownContextPropsType | undefined>(
  undefined
);

export const MobileNavbarContextProvider: FC<basicChildrenType> = ({ children }) => {
  const [isMobileNavbarPulldownOpen, setIsMobileNavbarPulldownOpen] = useState(false);
  return (
    <MobileNavbarPulldownContext.Provider
      value={{
        isMobileNavbarPulldownOpen: isMobileNavbarPulldownOpen,
        setIsMobileNavbarPulldownOpen: setIsMobileNavbarPulldownOpen,
      }}>
      {children}
    </MobileNavbarPulldownContext.Provider>
  );
};

export const useMobileNavbarPulldownContext = (): MobileNavbarPulldownContextPropsType => {
  const context = useContext(MobileNavbarPulldownContext);
  if (!context) {
    throw new Error(
      "useMobileNavbarPulldownContext must be used within a MobileNavbarContextProvider"
    );
  }
  return context;
};
