export const rounddownToNearestHalfHour = (hourToRoundDown: string): string => {
  let [hour, minutes] = hourToRoundDown.split(":").map(Number);

  if (minutes > 0 && minutes < 30) {
    minutes = 0;
  } else if (minutes >= 30) {
    minutes = 30;
  }

  const roundedDownHourString = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  return roundedDownHourString;
};
