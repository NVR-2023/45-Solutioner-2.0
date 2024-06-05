export const convertDurationToRoundedupHalfHourSlots = (
  duration: string,
): number => {
  const durationNumber = parseFloat(duration);
  const hours = Math.floor(durationNumber);
  let minutes = (durationNumber - hours) * 60;

  if (minutes > 0 && minutes <= 30) {
    minutes = 30;
  } else {
    minutes = 60;
  }

  const slots = hours * 2 + minutes / 30;

  return slots;
};
