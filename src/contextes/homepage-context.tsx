"use client";
import React, { createContext, useContext, useState, FC, Dispatch, SetStateAction } from "react";

type HomePageContextPropsType = {
  homepageContext: boolean;
  setHomepageContext: Dispatch<SetStateAction<boolean>>;
};

const HomepageContext = createContext<HomePageContextPropsType | undefined>(undefined);

export const HomepageContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [homepageContextValue, setHomepageContextValue] = useState(false);
  return (
    <HomepageContext.Provider value={{ homepageContext: homepageContextValue, setHomepageContext: setHomepageContextValue}}>
      {children}
    </HomepageContext.Provider>
  );
};

export const useHomepageContext = (): HomePageContextPropsType => {
  const context = useContext(HomepageContext);

  if (!context) {
    throw new Error("useHomepageContext must be used within a HomepageContextProvider");
  }

  return context;
};
