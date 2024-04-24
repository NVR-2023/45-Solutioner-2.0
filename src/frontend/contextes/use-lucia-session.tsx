"use client";
import { Session, User } from "lucia";
import React, { createContext, useContext, ReactNode } from "react";

type LuciaSessionProviderProps = {
  user: User | null;
  session: Session | null;
};

const LuciaSessionContext = createContext<LuciaSessionProviderProps>(
  {} as LuciaSessionProviderProps,
);

export const LuciaSessionProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: LuciaSessionProviderProps;
}) => {
  return (
    <LuciaSessionContext.Provider value={value}>{children}</LuciaSessionContext.Provider>
  );
};

export const useLuciaSession = () => {
  const luciaSessionContext = useContext(LuciaSessionContext);

  if (!luciaSessionContext) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return luciaSessionContext;
};
