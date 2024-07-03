export const lowercaseFirstLetter = (word: string): string => {
  return (word ?? "").charAt(0).toLowerCase() + (word ?? "").slice(1);
};
