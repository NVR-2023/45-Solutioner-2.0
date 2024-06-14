import { convertDateToHourString } from "./convert-date-to-hour-string";
import { rounddownToNearestHalfHour } from "./rounddown-to-nearest-half-hour-string";

export const getLastBookableHour = (duration: string): string => {
  const LAST_SERVICE_HOUR = 23;
  const durationInHours = parseFloat(duration);

  const hoursToSubtract = Math.floor(durationInHours);
  const minutesToSubtract = Math.round(
    (durationInHours - hoursToSubtract) * 60,
  );

  const lastBookableHour = new Date();
  lastBookableHour.setHours(LAST_SERVICE_HOUR, 0, 0, 0);

  lastBookableHour.setHours(lastBookableHour.getHours() - hoursToSubtract);
  lastBookableHour.setMinutes(
    lastBookableHour.getMinutes() - minutesToSubtract,
  );

  let lastBookableHourString = convertDateToHourString(lastBookableHour);
  lastBookableHourString = rounddownToNearestHalfHour(lastBookableHourString);
  return lastBookableHourString;
};
