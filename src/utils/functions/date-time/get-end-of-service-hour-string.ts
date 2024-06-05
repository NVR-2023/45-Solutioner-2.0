export const getEndOfServiceHourString = (
  start: string,
  duration: string,
): string => {
  const durationNumber = parseFloat(duration);
  const durationHours = Math.floor(durationNumber);
  const durationRemainingMinutes = (durationNumber - durationHours) * 60;

  const [startHour, startMinutes] = start.split(":").map(Number);

  let endHour = startHour + durationHours;
  let endMinutes = startMinutes + durationRemainingMinutes;
  const doMinutesOverflow = endMinutes >= 60;

  if (doMinutesOverflow) {
    endHour++;
    endMinutes %= 60;
  }

  endHour %= 24;

  return `${endHour.toString().padStart(2, "0")}:${Math.round(endMinutes).toString().padStart(2, "0")}`;
};
