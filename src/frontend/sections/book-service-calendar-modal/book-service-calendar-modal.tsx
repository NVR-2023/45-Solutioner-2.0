import { useRef, RefObject } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

const BookServiceCalendarModal = () => {
  const userDetails = useUserDetailsContext();

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
      <div className="flex flex-col">
        <p>{userDetails.userId}</p>
        <p>{userDetails.userName}</p>
        <p>{userDetails.userInitials}</p>
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
