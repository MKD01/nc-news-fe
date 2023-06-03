export const capitalizeFirstLetter = (str) => {
  const firstLetterCap = str[0].toUpperCase();
  const remainingLetters = str.slice(1);

  return firstLetterCap + remainingLetters;
};

export const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date(date);
  return today.toLocaleDateString("en-GB", options);
};
