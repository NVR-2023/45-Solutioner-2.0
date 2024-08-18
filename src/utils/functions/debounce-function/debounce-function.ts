const debounceFunction = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default debounceFunction;
