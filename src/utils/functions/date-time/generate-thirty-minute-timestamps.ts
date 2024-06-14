export const generateThirtyMinuteTimestamps = (
  lowerLimit: string,
  upperLimit: string,
): string[] => {
  const lowerHours = parseInt(lowerLimit.split(":")[0]);
  const lowerMinutes = parseInt(lowerLimit.split(":")[1]);
  const upperHours = parseInt(upperLimit.split(":")[0]);
  const upperMinutes = parseInt(upperLimit.split(":")[1]);

  let timeStampsArray: string[] = [];
  for (let i = lowerHours; i <= upperHours; i++) {
    if (i === lowerHours) {
      if (!lowerMinutes) {
        timeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
        timeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
      } else {
        timeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
      }
      continue;
    } else if (i === upperHours) {
      if (upperMinutes === 0) {
        timeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
      } else {
        timeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
        timeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
      }
      continue;
    }

    timeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
    timeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
  }

  return timeStampsArray;
};
