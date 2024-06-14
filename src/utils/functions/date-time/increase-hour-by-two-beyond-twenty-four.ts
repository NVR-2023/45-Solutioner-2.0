export const increaseHourByTwoBeyondTwentyFour = (time: string): string => {
  let [hours, minutes] = time.split(":").map((element) => parseInt(element));
  hours += 2;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};
