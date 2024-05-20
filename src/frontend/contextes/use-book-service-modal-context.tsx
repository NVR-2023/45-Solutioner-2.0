"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type BookServiceModalObjectType = {
  serviceId: string | null;
  service: string | null;
  serviceDuration: number | null;
  servicePrice: number | null;
  isBookServiceModalShown: boolean;
};

export type BookServiceModalContextProps = {
  bookServiceModalObject: BookServiceModalObjectType;
  setBookServiceModalObject: Dispatch<
    SetStateAction<BookServiceModalObjectType>
  >;
};

const BookServiceModalContext =
  createContext<BookServiceModalContextProps | null>(null);

export const BookServiceModalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bookServiceModalObject, setBookServiceModalObject] =
    useState<BookServiceModalObjectType>({
      serviceId: null,
      service: "123X",
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
