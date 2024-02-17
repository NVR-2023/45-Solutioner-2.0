const getCurrentYear = (): string => {
  const currentYear: number = new Date().getFullYear();
  return currentYear.toString();
};

export default getCurrentYear;
