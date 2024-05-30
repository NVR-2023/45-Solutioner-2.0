import { useRef, RefObject } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";
import SmallModalTitleWithoutLogo from "@/frontend/components/ui/modal-components/small-modal-title-without-logo";
const BookServiceCalendarModal = () => {
  const userDetails = useUserDetailsContext();

  const {
    bookServiceModalObject: {
      id,
      service,
      duration,
      price,
      isBookServiceModalOpen,
    },
    setBookServiceModalObject,
  } = useBookServiceModalContext();

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
        <SmallModalTitleWithoutLogo title={`Book ${service} `} />
        <p>{userDetails.userId}</p>
        <p>{userDetails.userName}</p>
        <p>{userDetails.userInitials}</p>
        <p>{service}</p>
        <p>id:{id}</p>
        <p>price:{price}</p>
        <p>duration:{duration}</p>
      </div>
    </AdvancedModalShell>
  );
};

export default BookServiceCalendarModal;
