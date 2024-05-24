"use client";
import { createContext, useContext, ReactNode } from "react";

export type UserDetailsObjectType = {
  userId: string | null;
  userName: string | null;
  userInitials: string | null;
};

const UserDetailsContext = createContext<UserDetailsObjectType | null>(null);

export const UserDetailsContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: UserDetailsObjectType;
}) => {
  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useUserDetailsContext = () => {
  const context = useContext(UserDetailsContext);

  if (!context) {
    throw new Error(
      "useUserDetailsContext must be used within a userDetailsContextProvider",
    );
  }

  return context;
};
