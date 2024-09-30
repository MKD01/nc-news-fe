export const capitalizeFirstLetter = (str) => {
  const firstLetterCap = str[0].toUpperCase();
  const remainingLetters = str.slice(1);

  return firstLetterCap + remainingLetters;
};

export const formatDate = (date) => {
  const formattedDate = new Date(date);
  const today = new Date();

  const secondsDif = (today - formattedDate) / 1000;

  const createTimeMessage = (time, dusation) => {
    return time === 1 ? `${time} ${dusation} ago` : `${time} ${dusation}s ago`;
  };

  const minsDif = Math.floor(secondsDif / 60);
  if (minsDif === 0) return `A few moments ago`;

  const hoursDif = Math.floor(minsDif / 60);
  if (hoursDif === 0) return createTimeMessage(minsDif, "Min");

  const daysDif = Math.floor(hoursDif / 24);
  if (daysDif === 0) return createTimeMessage(hoursDif, "Hour");

  const yearDif = Math.floor(daysDif / 365);

  if (yearDif === 0) return createTimeMessage(daysDif, "Day");

  return ycreateTimeMessage(yearDif, "Year");
};

export const createParams = (topic, sort_by) => {
  const params = { limit: 20 };

  if (topic !== "Topics") {
    params.topic = topic;
  }

  if (sort_by === "Latest") {
    params.sort_by = "created_at";
    params.order_by = "desc";
  }

  if (sort_by === "Oldest") {
    params.sort_by = "created_at";
    params.order_by = "asc";
  }

  if (sort_by === "Popular") {
    params.sort_by = "votes";
    params.order_by = "desc";
  }

  if (sort_by === "Unpopular") {
    params.sort_by = "votes";
    params.order_by = "asc";
  }

  return params;
};
