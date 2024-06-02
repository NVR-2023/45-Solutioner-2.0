const getCurrentYearSpan = (): string => {
  const currentYear: number = new Date().getFullYear();
  const startingYear = 2024

  if (currentYear !== startingYear) {
    return `${startingYear}-${currentYear}`;
  } else {
    return currentYear.toString();
  }
};

export default getCurrentYearSpan;
