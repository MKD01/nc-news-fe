export const capitalizeFirstLetter = (str) => {
  const firstLetterCap = str[0].toUpperCase();
  const remainingLetters = str.slice(1);

  return firstLetterCap + remainingLetters;
};

export const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  return today.toLocaleDateString("en-GB", options);
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
