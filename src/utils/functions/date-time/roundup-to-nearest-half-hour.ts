export const roundToNearestHalfHour = (date: Date): Date => {
  let minutes = date.getMinutes();
  let roundedMinutes = Math.ceil(minutes / 30) * 30;

  if (roundedMinutes === 60) {
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
  } else {
    date.setMinutes(roundedMinutes);
  }

  return date;
}
