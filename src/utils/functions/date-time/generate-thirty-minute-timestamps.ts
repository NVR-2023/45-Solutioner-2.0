export const generateThirtyMinuteTimestamps = (
  lowerLimit: string,
  upperLimit: string,
): string[] => {
  const lowerHoursIndex = parseInt(lowerLimit.split(":")[0]);
  const lowerMinutesIndex = parseInt(lowerLimit.split(":")[1]);
  const upperHoursIndex = parseInt(upperLimit.split(":")[0]);
  const upperMinutesIndex = parseInt(upperLimit.split(":")[1]);

  let thirtyMinuteTimeStampsArray: string[] = [];
  for (let i = lowerHoursIndex; i <= upperHoursIndex; i++) {
    if (i === lowerHoursIndex) {
      if (!lowerMinutesIndex) {
        thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
        thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
      } else {
        thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
      }
      continue;
    } else if (i === upperHoursIndex) {
      if (!upperMinutesIndex) {
        thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
      } else {
        thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
        thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
      }
      continue;
    }

    thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:00`);
    thirtyMinuteTimeStampsArray.push(`${i.toString().padStart(2, "0")}:30`);
  }

  return thirtyMinuteTimeStampsArray;
};
