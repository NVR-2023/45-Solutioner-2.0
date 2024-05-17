type BookServiceCalendarModalProps = {
  isModalShown: boolean;
  closeBookServiceCalendarModal: () => void;
  serviceId: number;
};

const BookServiceCalendarModal = ({
  isModalShown,
  closeBookServiceCalendarModal,
  serviceId,
}: BookServiceCalendarModalProps) => {
  return;
  <div>
    Calendar
    <div>ServiceId: {serviceId}</div>;
  </div>;
};

export default BookServiceCalendarModal;
