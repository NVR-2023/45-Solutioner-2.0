export const getLastBookableHour = (duration: string): string => {
  const durationNumber = parseFloat(duration);
  let hours = 23 - Math.floor(durationNumber);
  let minutes = Math.round((durationNumber - Math.floor(durationNumber)) * 60);

  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  const lastBookableHour = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  return lastBookableHour;
}