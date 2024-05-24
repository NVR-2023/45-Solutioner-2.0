import { useEffect, useRef, RefObject } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";
import { useBookServiceModalContext } from "@/frontend/contextes/use-book-service-modal-context";

const BookServiceCalendarModal = () => {
  const { bookServiceModalObject, setBookServiceModalObject } =
    useBookServiceModalContext();

  const isBookServiceModalOpen = bookServiceModalObject.isBookServiceModalOpen;
  const setIsBookServiceModalOpen = (isModalOpen: boolean) => {
    setBookServiceModalObject((previousObject) => ({
      ...previousObject,
      isBookServiceModalOpen: isModalOpen,
    }));
  };

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  return (
    <AdvancedModalShell
      isModalOpen={isBookServiceModalOpen}
      setIsModalOpen={setIsBookServiceModalOpen}
    >
      <div>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </div>
    </AdvancedModalShell>
  );
};

export default BookServiceCalendarModal;
