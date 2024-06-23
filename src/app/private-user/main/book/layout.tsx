import { BookServiceModalContextProvider } from "@/frontend/contexts/use-book-service-modal-context";

export default function PrivateMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookServiceModalContextProvider>
      {children}
    </BookServiceModalContextProvider>
  );
}
