export const rounddownToNearestHalfHour = (hourToRoundUp: string): string => {
  let [hour, minutes] = hourToRoundUp.split(":").map(Number);

  minutes = minutes > 30 ? 30 : 0;
  const roundedDownHourString = `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  return roundedDownHourString;
};
