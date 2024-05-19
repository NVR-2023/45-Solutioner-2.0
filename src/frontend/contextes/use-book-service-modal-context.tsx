"use client";
import { createContext, useContext, ReactNode, useState } from "react";

type BookServiceModalContextProps = {
  bookServiceModalObject: Record<string, string | number | boolean>;
  setBookServiceModalObject: (
    BookServiceModalObject: Record<string, string | number | boolean>,
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
    Record<string, string | number | boolean>
  >({});

  const value: BookServiceModalContextProps = {
    bookServiceModalObject,
    setBookServiceModalObject,
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
