export const increaseHourByTwo = (time: string): string => {
  let [hours, minutes] = time.split(":").map((element) => parseInt(element));
  hours = (hours + 2) % 24;
  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  return `${hoursStr}:${minutesStr}`;
};
