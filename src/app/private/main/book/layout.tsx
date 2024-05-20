
import { BookServiceModalContextProvider } from "@/frontend/contextes/use-book-service-modal-context";

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
