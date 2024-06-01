import { useState } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

import ModalTitleWithoutLogo from "@/frontend/components/ui/modal-components/modal-title-without-logo";
import BookServiceCalendar from "./sub-components/book-service-calendar";
import BookServiceTimePicker from "./sub-components/book-service-time-picker";
import BookServiceAdditionalControls from "./sub-components/book-service-additional-controls";
import BookServiceSummary from "./sub-components/book-service-summary";
import BookServiceSubmitSegment from "./sub-components/book-service-submit-segment";

type bookServiceObject = {
  userId: string | null;
  serviceId: number | null;
  date: Date | null;
  time: string | null;
  addressId: number | null;
  quantity: number | null;
  recurrence: string | null;
};
const BookServiceModal = () => {
  const { bookServiceModalObject, setBookServiceModalObject } =
    useBookServiceModalContext();

  const userDetails = useUserDetailsContext();

  const [bookServiceObject, setBookServiceObject] = useState<bookServiceObject>(
    {
      userId: userDetails.userId,
      serviceId: bookServiceModalObject.id,
      date: null,
      time: null,
      addressId: null,
      quantity: 1,
      recurrence: null,
    },
  );

  const setBookServiceDate = (newDate: Date) => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      date: newDate,
    }));
  };

  const setIsBookServiceModalOpen = (isModalOpen: boolean) => {
    setBookServiceModalObject((previousObject) => ({
      ...previousObject,
      isBookServiceModalOpen: isModalOpen,
    }));
  };

  return (
    <AdvancedModalShell
      isModalOpen={bookServiceModalObject.isBookServiceModalOpen}
      setIsModalOpen={setIsBookServiceModalOpen}
    >
      <div className="flex w-full flex-col space-y-2">
        <ModalTitleWithoutLogo
          title={`Book ${capitalizeFirstLetter(bookServiceModalObject.service!)}`}
        />
        <BookServiceCalendar
          bookServiceDate={bookServiceObject.date!}
          setBookServiceDate={setBookServiceDate}
        />
        <BookServiceTimePicker />
        <BookServiceAdditionalControls />
        <BookServiceSummary selectedBookDate={bookServiceObject.date!} />
        <BookServiceSubmitSegment />
      </div>
    </AdvancedModalShell>
  );
};

export default BookServiceModal;

{
  /*       <p>{userDetails.userId}</p>
        <p>{userDetails.userName}</p>
        <p>{userDetails.userInitials}</p>
        <p>{service}</p>
        <p>id:{id}</p>
        <p>price:{price}</p>
        <p>duration:{duration}</p> */
}
