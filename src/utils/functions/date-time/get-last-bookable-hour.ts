export const getLastBookableHour = (duration: string): string => {
  const LAST_SERVICE_HOUR = 23;
  const MINUTES_IN_HOUR = 60;

  const durationNumber = parseFloat(duration);

  let hours = LAST_SERVICE_HOUR - Math.floor(durationNumber);
  let minutes = Math.round((durationNumber - Math.floor(durationNumber)) * 60);

  if (minutes === MINUTES_IN_HOUR) {
    hours += 1;
    minutes = 0;
  }

  const lastBookableHour = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  return lastBookableHour;
};
