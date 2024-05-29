export const generateRandomPopularityValues = (): number[] => {
  const numbers = Array.from({ length: 54 }, () => {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  });

  const normalizedNumbers = numbers.map(
    (num) =>
      (num - Math.min(...numbers)) /
      (Math.max(...numbers) - Math.min(...numbers)),
  );
  const adjustedNumbers = normalizedNumbers.map(
    (num) => num / normalizedNumbers.reduce((acc, val) => acc + val, 0),
  );

  return adjustedNumbers;
};
