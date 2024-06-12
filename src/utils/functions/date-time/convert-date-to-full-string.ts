import { convertStringToDate } from "./convert-string-to-date";

export const convertDateToFullString = (dateString: string): string => {
  const convertedDate = convertStringToDate(dateString);

  if (convertedDate === null) {
    return "";
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  return convertedDate.toLocaleDateString("en-US", options);
};
