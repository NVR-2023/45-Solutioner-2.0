import { parseStringToDate } from "../parse-string-to-date";

export const formatDateToFullString = (dateString: string): string => {
  const parsedDate = parseStringToDate(dateString);

  if (parsedDate === null) {
    return "";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return parsedDate.toLocaleDateString("en-US", options);
};
