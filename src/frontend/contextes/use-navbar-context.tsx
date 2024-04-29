"use client";
import React, {
  Dispatch,
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
} from "react";

type NavbarContextProviderProps = {
  areNavbarsExpanded: boolean;
  setAreNavbarsExpanded: Dispatch<SetStateAction<boolean>>;
};

const NavbarContext = createContext<NavbarContextProviderProps>(
  {} as NavbarContextProviderProps,
);

export const NavbarContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: NavbarContextProviderProps;
}) => {
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const luciaSessionContext = useContext(NavbarContext);

  if (!luciaSessionContext) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return luciaSessionContext;
};
