import { createContext, useState } from "react";

export const queryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [sort_by, setSort_by] = useState("latest");
  const [topic, setTopic] = useState("Topics");

  return (
    <queryContext.Provider value={{ sort_by, setSort_by, topic, setTopic }}>
      {children}
    </queryContext.Provider>
  );
};
