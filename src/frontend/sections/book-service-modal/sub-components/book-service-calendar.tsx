import { useBookServiceModalContext } from "@/frontend/contexts/use-book-service-modal-context";


type BookServiceCalendarProps = {
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  isCalendarExpanded: boolean;
  setIsCalendarExpanded: (isCalendarExpanded: boolean) => void;
};

const BookServiceCalendar = ({
  date,
  setDate,
  time,
  setTime,
  isCalendarExpanded,
  setIsCalendarExpanded,
}: BookServiceCalendarProps) => {
  const { bookServiceModalContext } = useBookServiceModalContext();

  const service = bookServiceModalContext.service;
  const duration = bookServiceModalContext.duration;

  console.log("re-render");

  return <div>bool service calendar</div>;
};

export default BookServiceCalendar;
