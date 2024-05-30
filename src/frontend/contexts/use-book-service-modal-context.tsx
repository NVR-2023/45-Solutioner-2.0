"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  FC,
} from "react";

export type BookServiceModalObjectType = {
  id: number | null;
  service: string | null;
  duration: string | null;
  price: string | null;
  isBookServiceModalOpen: boolean;
};

export type BookServiceModalContextProps = {
  bookServiceModalObject: BookServiceModalObjectType;
  setBookServiceModalObject: Dispatch<
    SetStateAction<BookServiceModalObjectType>
  >;
};

const BookServiceModalContext =
  createContext<BookServiceModalContextProps | null>(null);

export const BookServiceModalContextProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bookServiceModalObject, setBookServiceModalObject] =
    useState<BookServiceModalObjectType>({
      id: null,
      service: "",
      duration: null,
      price: null,
      isBookServiceModalOpen: false,
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
