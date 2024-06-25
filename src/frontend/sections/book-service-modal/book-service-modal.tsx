import { useState, useEffect } from "react";
import AdvancedModalShell from "@/frontend/components/ui/modal-components/advanced-modal-shell";

import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";
import { useUserDetailsContext } from "@/frontend/contexts/use-user-details";

import ModalTitleWithoutLogo from "@/frontend/components/ui/modal-components/modal-title-without-logo";
import ContentAreaForCalendarAndTimePicker from "./sub-components/content-area-for-calendar-and-time-picker";
import Details from "./sub-components/details";
import SubmitWithoutFeedbackSegment from "@/frontend/components/ui/modal-components/submit-without-feedback-segment";

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
      userId: null,
      serviceId: null,
      date: null,
      time: null,
      addressId: null,
      quantity: null,
      recurrence: null,
    });

  useEffect(() => {
    setBookServiceObject((previousBookServiceObject) => ({
      ...previousBookServiceObject,
      userId: userDetails.userId,
      serviceId: bookServiceModalContext.id,
    }));
  }, [bookServiceModalContext.id, userDetails.userId]);

  const [isCalendarExpanded, setIsCalendarExpanded] = useState<boolean>(true);

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

  const setRecurrence = (newRecurrence: string) => {
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

  const handleOnCancel = () => {
    setIsBookServiceModalOpen(false);
    setIsCalendarExpanded(true);
  };

  const handleOnSubmit = () => {
    alert(JSON.stringify(bookServiceObject));
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
          setAddress={setAddress}
        />
        <div className="">
          <SubmitWithoutFeedbackSegment
            label="book"
            onCancel={handleOnCancel}
            onSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </AdvancedModalShell>
  );
};

export default BookServiceModal;
