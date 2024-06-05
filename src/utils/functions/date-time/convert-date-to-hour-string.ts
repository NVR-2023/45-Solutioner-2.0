export const convertDateToHourString = ( date: Date): string => {
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return`${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}