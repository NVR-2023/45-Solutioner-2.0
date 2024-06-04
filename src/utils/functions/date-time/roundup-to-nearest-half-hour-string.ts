export const roundToNearestHalfHour = (hourToRoundUp: string): string => {
  let [hour, minutes] = hourToRoundUp.split(":").map(Number);

  if (minutes > 30) {
    minutes = 0;
    hour = (hour + 1) % 24;
  } else {
    minutes = 30;
  }

  const roundedUpHourString = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  return roundedUpHourString;
};
