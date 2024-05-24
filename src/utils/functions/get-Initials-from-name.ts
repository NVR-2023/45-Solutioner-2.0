export const getInitialsFromName = (name: string): string => {
  const words = name.split(" ");
  const initials = words[0][0] + (words.length > 1 ? words[1][0] : words[0][1]);
  return initials;
};
