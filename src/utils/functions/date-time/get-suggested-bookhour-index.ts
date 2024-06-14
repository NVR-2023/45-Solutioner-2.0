export const getSuggestedBookHourIndex = (bookableHours: string[]): number => {
  const ARRAY_OF_SUGGESTED_BOOKABLE_HOURS = [
    "09:00",
    "15:00",
    "21:00",
  ] as const;
  const firstBookableHour = bookableHours[0];

  for (const suggestedHour of ARRAY_OF_SUGGESTED_BOOKABLE_HOURS) {
    if (firstBookableHour < suggestedHour) {
      const suggestedBookableHourIndex = bookableHours.indexOf(suggestedHour);
      if (suggestedBookableHourIndex !== -1) {
        return suggestedBookableHourIndex;
      }
    }
  }

  return 0;
};
