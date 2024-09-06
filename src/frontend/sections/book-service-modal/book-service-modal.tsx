import { useState, useEffect } from "react";
import AdvancedModalShell from "@/frontend/components/ui/animated-components/advanced-modal-shell";

import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

import ModalTitleWithoutLogo from "@/frontend/components/ui/form-components/modal-title-without-logo";
import ContentAreaForCalendarAndTimePicker from "./sub-components/content-area-for-calendar-and-time-picker";
import Details from "./sub-components/details";
import SubmitWithoutFeedbackSegment from "@/frontend/components/ui/form-components/submit-without-feedback-segment";

import { createServiceRequestInDb } from "@/backend/server-actions/services/create-service-request-in-db";
import { wait } from "@/utils/functions/wait";

export type RecurrenceType = "once" | "daily" | "weekly" | "monthly";
export type BookServiceModalObjectType = {
  userId: string | null;
  serviceId: number | null;
  date: string | null;
  time: string | null;
  addressId: number | null;
  quantity: number | null;
  recurrence: RecurrenceType;
};

type BookServiceModalProps = {
  openFeedbackModal: () => void;
};
const BookServiceModal = ({ openFeedbackModal }: BookServiceModalProps) => {
  const { bookServiceModalContext, setBookServiceModalContext } =
    useBookServiceModalContext();
  const { userId } = useUserDetailsContext();

  const [bookServiceObject, setBookServiceObject] =
    useState<BookServiceModalObjectType>({
      userId: null,
      serviceId: null,
      date: null,
      time: null,
      addressId: null,
      quantity: null,
      recurrence: "once",
    });

  const [isCalendarExpanded, setIsCalendarExpanded] = useState<boolean>(true);

  useEffect(() => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      userId: userId,
      serviceId: bookServiceModalContext.id,
    }));
  }, []);

  useEffect(() => {
    if (bookServiceModalContext.isBookServiceModalOpen) {
      setIsCalendarExpanded(true);
    }
  }, [bookServiceModalContext.isBookServiceModalOpen]);

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

  const setQuantity = (newQuantity: number) => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      quantity: newQuantity,
    }));
  };

  const setRecurrence = (newRecurrence: RecurrenceType) => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      recurrence: newRecurrence,
    }));
  };

  const setAddress = (serviceAddressId: number) => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      addressId: serviceAddressId,
    }));
  };

  const setIsBookServiceModalOpen = (isModalOpen: boolean) => {
    setBookServiceModalContext((previousObject) => ({
      ...previousObject,
      isBookServiceModalOpen: isModalOpen,
    }));
  };

  const handleOnCloseBookModal = () => {
    setIsBookServiceModalOpen(false);
    setIsCalendarExpanded(true);
  };

  const handleOnSubmit = async () => {
    console.log(bookServiceObject);
    


/*    const result = await createServiceRequestInDb(bookServiceObject);
    if (result) {
      handleOnCloseBookModal();
      await wait(500);
      openFeedbackModal();
    }  */



  };

  return (
    <AdvancedModalShell
      isModalOpen={bookServiceModalContext.isBookServiceModalOpen}
      setIsModalOpen={setIsBookServiceModalOpen}
    >
      <div className="flex  w-full flex-col space-y-4 overflow-hidden ">
        <div className="space-y-2">
          <ModalTitleWithoutLogo
            title={bookServiceModalContext.service as string}
          />
          <ContentAreaForCalendarAndTimePicker
            date={bookServiceObject.date!}
            setDate={setDate}
            setTime={setTime}
            isCalendarExpanded={isCalendarExpanded}
            setIsCalendarExpanded={setIsCalendarExpanded}
          />
        </div>

        <Details
          isCalendarExpanded={isCalendarExpanded}
          setIsCalendarExpanded={setIsCalendarExpanded}
          setQuantity={setQuantity}
          setRecurrence={setRecurrence}
          setAddressId={setAddress}
        />
        <div className="">
          <SubmitWithoutFeedbackSegment
            label="book"
            onCancel={handleOnCloseBookModal}
            onSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </AdvancedModalShell>
  );
};

export default BookServiceModal;
