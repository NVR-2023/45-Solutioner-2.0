import { useEffect, useRef, RefObject } from "react";
import ModalShell from "@/frontend/components/ui/form-components/modal-shell";
import { useBookServiceModalContext } from "@/frontend/contextes/use-book-service-modal-context";

const BookServiceCalendarModal = () => {
  const { bookServiceModalObject, setBookServiceModalObject } =
    useBookServiceModalContext();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  const handleOnCancel = () => {
    setBookServiceModalObject((previousObject) => ({
      ...previousObject,
      isBookServiceModalOpen: false,
    }));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleOnCancel();
      }
    };

    if (bookServiceModalObject.isBookServiceModalOpen) {
      // Disable pointer events globally
      document.body.style.pointerEvents = "none";

      // Re-enable pointer events for the modal
      if (modalRef.current) {
        modalRef.current.style.pointerEvents = "auto";
      }

      document.addEventListener("keydown", handleKeyDown);
    } else {
      // Re-enable pointer events globally when the modal is closed
      document.body.style.pointerEvents = "auto";
    }

    return () => {
      // Ensure pointer events are re-enabled if the component unmounts
      document.body.style.pointerEvents = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [bookServiceModalObject.isBookServiceModalOpen]);

  return (
    <ModalShell isModalOpen={bookServiceModalObject.isBookServiceModalOpen}>
      <div className=" z-50 flex flex-col" ref={modalRef}>
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
        <button onClick={handleOnCancel}>cancel</button>
      </div>
    </ModalShell>
  );
};

export default BookServiceCalendarModal;
