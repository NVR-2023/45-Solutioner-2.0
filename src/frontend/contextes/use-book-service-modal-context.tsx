"use client";
import { createContext, useContext, ReactNode, useState } from "react";

type BookServiceModalContextProps = {
  serviceId: number;
  isBookServiceModalOpen: boolean;
  setServiceId: (id: number) => void;
  setIsBookServiceModalOpen: (isBookServiceModalOpen: boolean) => void;
};

const BookServiceModalContext =
  createContext<BookServiceModalContextProps | null>(null);

export const BookServiceModalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [serviceId, setServiceId] = useState<number>(0);
  const [isBookServiceModalOpen, setIsBookServiceModalOpen] =
    useState<boolean>(false);

  const value = {
    serviceId,
    isBookServiceModalOpen,
    setServiceId,
    setIsBookServiceModalOpen,
  };

  return (
    <BookServiceModalContext.Provider value={value}>
      {children}
    </BookServiceModalContext.Provider>
  );
};

export const useBookServiceModalContext = () => {
  const context = useContext(BookServiceModalContext);

  if (!context) {
    throw new Error(
      "useBookServiceModalContext must be used within a BookServiceModalProvider",
    );
  }

  return context;
};
