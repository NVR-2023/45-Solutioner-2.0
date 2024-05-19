import { BookServiceModalContextProvider } from "@/frontend/contextes/use-book-service-modal-context";

export default function PrivateMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = {};

  return (
    <BookServiceModalContextProvider>
      {children}
    </BookServiceModalContextProvider>
  );
}
