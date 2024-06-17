import { rounddownToNearestHalfHour } from "./rounddown-to-nearest-half-hour-string";

export const getLastBookableHour = (duration: string): string => {
  const LAST_SERVICE_HOUR = 23 as const;
  const MINUTES_IN_HOUR = 60 as const;
  const durationInHours = parseFloat(duration);

  const hoursToDecrease = Math.ceil(durationInHours);
  const minutesToDecrease = Math.floor(
    (durationInHours - hoursToDecrease) * MINUTES_IN_HOUR,
  );

  let hours = LAST_SERVICE_HOUR - hoursToDecrease;

  const minutes = (MINUTES_IN_HOUR - minutesToDecrease) % 60;
  const lastBookableHour = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;


  const roundeddownLastBookableHour =
    rounddownToNearestHalfHour(lastBookableHour);


  return roundeddownLastBookableHour;
};
