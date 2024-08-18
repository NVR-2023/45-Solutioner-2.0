const getRandomCapsCharacter = (): string => {
  const CAPS_CHARACTER_SET: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const randomIndex: number = Math.floor(
    CAPS_CHARACTER_SET.length * Math.random(),
  );
  const randomCharacter = CAPS_CHARACTER_SET[randomIndex];
  return randomCharacter;
};

export default getRandomCapsCharacter;
