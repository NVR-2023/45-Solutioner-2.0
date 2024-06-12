export const convertStringToDate = (dateString: string): Date | null => {
  if (!dateString) {
    return null;
  }
  const [year, month, day] = dateString.split("-").map(Number);
  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return null;
  }
  const parsedDate = new Date(year, month - 1, day);
  parsedDate.setHours(0, 0, 0, 0);
  return parsedDate;
};
