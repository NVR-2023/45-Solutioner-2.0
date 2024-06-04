import { useState } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";
import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";
import { capitalizeFirstLetter } from "@/utils/functions/capitalize-first-letter";

import ModalTitleWithoutLogo from "@/frontend/components/ui/modal-components/modal-title-without-logo";
import BookServiceCalendar from "./sub-components/book-service-calendar";

import Calendar from "./sub-components/calendar";
import Details from "./sub-components/details";

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
  const { bookServiceModalContext, setBookServiceModalContext } =
    useBookServiceModalContext();
  const userDetails = useUserDetailsContext();

  const [bookServiceObject, setBookServiceObject] =
    useState<bookServiceModalObjectType>({
      userId: userDetails.userId,
      serviceId: bookServiceModalContext.id,
      date: null,
      time: null,
      addressId: null,
      quantity: 1,
      recurrence: null,
    });

  const [isCalendarExpanded, setIsCalendarExpanded] = useState<boolean>(true);

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
    setBookServiceModalContext((previousObject) => ({
      ...previousObject,
      isBookServiceModalOpen: isModalOpen,
    }));
  };
  return (
    <AdvancedModalShell
      isModalOpen={bookServiceModalContext.isBookServiceModalOpen}
      setIsModalOpen={setIsBookServiceModalOpen}
    >
      <div className="flex w-full flex-col space-y-4">
        <ModalTitleWithoutLogo
          title="Book"        />
        {/*    <BookServiceCalendar
          bookServiceDate={bookServiceObject.date!}
          setBookServiceDate={setBookServiceDate}
          bookServiceTime={bookServiceObject.time!}
          setBookServiceTime={setBookServiceTime}
          isCalendarExpanded={isCalendarExpanded}
          setIsCalendarExpanded={setIsCalendarExpanded}
        /> */}
        <Calendar
          bookServiceDate={bookServiceObject.date!}
          setBookServiceDate={setBookServiceDate}
          bookServiceTime={bookServiceObject.time!}
          setBookServiceTime={setBookServiceTime}
          isCalendarExpanded={isCalendarExpanded}
          setIsCalendarExpanded={setIsCalendarExpanded}
        />

        <div className="">
          {/*  <BookServiceDetails
            isCalendarExpanded={isCalendarExpanded}
            setIsCalendarExpanded={setIsCalendarExpanded}
          /> */}
          <Details
            isCalendarExpanded={isCalendarExpanded}
            setIsCalendarExpanded={setIsCalendarExpanded}
          />
        </div>
        <BookServiceSubmitSegment />
      </div>
    </AdvancedModalShell>
  );
};

export default BookServiceModal;
