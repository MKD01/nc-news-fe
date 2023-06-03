import React, { useState } from "react";

export const queryContext = React.createContext();

export const QueryProvider = ({ children }) => {
  const [sort_by, setSort_by] = useState("date");
  const [order_by, setOrder_by] = useState("desc");
  const [topic, setTopic] = useState("Topics");

  return (
    <queryContext.Provider
      value={{ sort_by, setSort_by, order_by, setOrder_by, topic, setTopic }}
    >
      {children}
    </queryContext.Provider>
  );
};
