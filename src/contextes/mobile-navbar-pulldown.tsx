"use client";
import React, { createContext, useContext, useState, FC, Dispatch, SetStateAction } from "react";

import { basicChildrenType } from "@/types/component-props-types";

type MobileNavbarContextPropsType = {
  mobileNavbarContext: boolean;
  setMobileNavbarContext: Dispatch<SetStateAction<boolean>>;
};

const MobileNavbarContext = createContext<MobileNavbarContextPropsType | undefined>(undefined);

export const MobileNavbarContextProvider: FC<basicChildrenType> = ({ children }) => {
  const [mobileNavbarContext, setMobileNavbarContext] = useState(false);
  return (
    <MobileNavbarContext.Provider
      value={{
        mobileNavbarContext,
        setMobileNavbarContext
      }}>
      {children}
    </MobileNavbarContext.Provider>
  );
};

export const useMobileNavbarContext = (): MobileNavbarContextPropsType => {
  const context = useContext(MobileNavbarContext);
  if (!context) {
    throw new Error("useMobileNavbarContext must be used within a MobileNavbarContextProvider");
  }
  return context;
};
