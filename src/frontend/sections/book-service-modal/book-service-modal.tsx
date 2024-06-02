import { useState } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

import ModalTitleWithoutLogo from "@/frontend/components/ui/modal-components/modal-title-without-logo";
import BookServiceCalendar from "./sub-components/book-service-calendar";
import BookServiceDetails from "./sub-components/book-service-details";
import BookServiceSubmitSegment from "./sub-components/book-service-submit-segment";

type bookServiceModalObjectType = {
  userId: string | null;
  serviceId: number | null;
  date: string | null;
  time: string | null;
  addressId: number | null;
  quantity: number | null;
  recurrence: string | null;
};
const BookServiceModal = () => {
  const {
    bookServiceModalContext: bookServiceModalObject,
    setBookServiceModalContext: setBookServiceModalObject,
  } = useBookServiceModalContext();

  const userDetails = useUserDetailsContext();

  const [bookServiceObject, setBookServiceObject] =
    useState<bookServiceModalObjectType>({
      userId: userDetails.userId,
      serviceId: bookServiceModalObject.id,
      date: null,
      time: null,
      addressId: null,
      quantity: 1,
      recurrence: null,
    });

  const setBookServiceDate = (newDate: string) => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      date: newDate,
    }));
  };

  const setBookServiceTime = (newTime: string) => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      time: newTime,
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
      <div className="flex w-full flex-col space-y-3">
        <ModalTitleWithoutLogo
          title={`Book ${capitalizeFirstLetter(bookServiceModalObject.service!)}`}
        />
        <BookServiceCalendar
          bookServiceDate={bookServiceObject.date!}
          setBookServiceDate={setBookServiceDate}
          bookServiceTime={bookServiceObject.time!}
          setBookServiceTime={setBookServiceTime}
        />

        <div className=" px-4">
          <BookServiceDetails />
        </div>
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
