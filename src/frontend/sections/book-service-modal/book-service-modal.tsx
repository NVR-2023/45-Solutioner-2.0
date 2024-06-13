import { useState } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";

import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

import ModalTitleWithoutLogo from "@/frontend/components/ui/modal-components/modal-title-without-logo";

import Calendar from "./sub-components/calendar";
import BookServiceCalendar from "./sub-components/book-service-calendar";

import Details from "./sub-components/details";
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

  const setDate = (newDate: string) => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      date: newDate,
    }));
  };

  const setTime = (newTime: string) => {
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

  console.log("render")
  return (
    <AdvancedModalShell
      isModalOpen={bookServiceModalContext.isBookServiceModalOpen}
      setIsModalOpen={setIsBookServiceModalOpen}
    >
      <div className="flex w-full flex-col space-y-4">
        <ModalTitleWithoutLogo title="Book" />

        {/*        <Calendar
          date={bookServiceObject.date!}
          setDate={setDate}
          time={bookServiceObject.time!}
          setTime={setTime}
          isCalendarExpanded={isCalendarExpanded}
          setIsCalendarExpanded={setIsCalendarExpanded}
        /> */}
        <BookServiceCalendar
          date={bookServiceObject.date!}
          setDate={setDate}
          time={bookServiceObject.time!}
          setTime={setTime}
          isCalendarExpanded={isCalendarExpanded}
          setIsCalendarExpanded={setIsCalendarExpanded}
        />

        <div className="">
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
