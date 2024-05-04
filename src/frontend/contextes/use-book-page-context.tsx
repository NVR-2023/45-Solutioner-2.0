import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";

type BookPageContextProps = {
  services: Object[] | null;
  setServices: Dispatch<React.SetStateAction<Object[] | null>>;
};

const BookPageContext = createContext<BookPageContextProps | null>(null);

export const BookPageContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: Required<BookPageContextProps>;
}) => {
  return (
    <BookPageContext.Provider value={value}>
      {children}
    </BookPageContext.Provider>
  );
};

export const useBookPageContext = () => {
  const bookPageContext = useContext(BookPageContext);

  if (!bookPageContext) {
    throw new Error(
      "useBookPageContext must be used within a BookPageProvider",
    );
  }

  return bookPageContext;
};
