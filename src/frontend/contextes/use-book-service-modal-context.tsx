"use client";
import { createContext, useContext, ReactNode, useState } from "react";

type BookServiceModalContextProps = {
  bookServiceModalObject: Record<string, string | number | boolean | null>;
  setBookServiceModalObject: (
    BookServiceModalObject: Record<string, string | number | boolean | null>,
  ) => void;
};

const BookServiceModalContext =
  createContext<BookServiceModalContextProps | null>(null);

export const BookServiceModalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bookServiceModalObject, setBookServiceModalObject] = useState<
    Record<string, string | number | boolean | null>
  >({
    serviceId: null,
    service: "service name",
    serviceDuration: null,
    servicePrice: null,
    isBookServiceModalShown: false,
  });

  return (
    <BookServiceModalContext.Provider
      value={{ bookServiceModalObject, setBookServiceModalObject }}
    >
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
