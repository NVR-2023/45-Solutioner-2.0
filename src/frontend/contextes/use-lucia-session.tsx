"use client";
import { Session, User } from "lucia";
import React, { createContext, useContext, ReactNode } from "react";

type SessionProviderProps = {
  user: User | null;
  session: Session | null;
};

const SessionContext = createContext<SessionProviderProps>(
  {} as SessionProviderProps,
);

export const SessionProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: SessionProviderProps;
}) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useLuciaSession = () => {
  const sessionContext = useContext(SessionContext);

  if (!sessionContext) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return sessionContext;
};
