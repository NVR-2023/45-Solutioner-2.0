import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";

import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

import ModalTitleWithoutLogo from "@/frontend/components/ui/modal-components/modal-title-without-logo";
import Calendar from "./sub-components/calendar";
import TimePicker from "./sub-components/time-picker";
import BookControls from "./sub-components/book-controls";

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

  return (
    <AdvancedModalShell
      isModalOpen={isBookServiceModalOpen}
      setIsModalOpen={setIsBookServiceModalOpen}
    >
      <div className="flex flex-col">
        <ModalTitleWithoutLogo title={service as string} />
        <Calendar />
        <TimePicker />
        <BookControls/>
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
