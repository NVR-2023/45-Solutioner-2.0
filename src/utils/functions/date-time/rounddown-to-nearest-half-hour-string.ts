export const rounddownToNearestHalfHour = (time: string): string => {
  let [hour, minutes] = time.split(":").map(Number);

  if (minutes > 0 && minutes < 30) {
    minutes = 0;
  }
  else if (minutes > 30 && minutes < 60) {
    minutes = 30;
  }

  const roundedDownHourString = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  return roundedDownHourString;
};
