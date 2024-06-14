import { convertDateToHourString } from "./convert-date-to-hour-string";
import { roundupToNearestHalfHour } from "./roundup-to-nearest-half-hour-string";

export const getRoundedupEndOfServiceHourString = (
  time: string = "00:00",
  duration: string = "0",
): string => {
  const MINUTES_IN_HOUR = 60;
  const [hours, minutes] = time.split(":").map(Number);
  const durationNumber = parseFloat(duration);

  const minutesToAdd = durationNumber * MINUTES_IN_HOUR;

  const endOfServiceTime = new Date();
  endOfServiceTime.setHours(hours, minutes, 0, 0);
  endOfServiceTime.setMinutes(endOfServiceTime.getMinutes() + minutesToAdd);

  const endOfServiceTimeString = convertDateToHourString(endOfServiceTime);
  const roundedupEndOfServiceTimeString = roundupToNearestHalfHour(
    endOfServiceTimeString,
  );
  return roundedupEndOfServiceTimeString;
};
