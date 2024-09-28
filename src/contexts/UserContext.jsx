import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/api";

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserByUsername("tickle122").then((res) => {
      setUser(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <userContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </userContext.Provider>
  );
};
