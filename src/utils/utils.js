export const capitalizeFirstLetter = (str) => {
  const firstLetterCap = str[0].toUpperCase();
  const remainingLetters = str.slice(1);

  return firstLetterCap + remainingLetters;
};
