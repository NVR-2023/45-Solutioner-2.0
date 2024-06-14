export const increaseHourByTwo = (time: string): string => {
  let [hours, minutes] = time.split(":").map((element) => parseInt(element));

  // purposefully don't use % to round to 24.
  // so that comparison with lastBookableHour works

  hours += 2;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};
