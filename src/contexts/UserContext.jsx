import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/api";

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUsername] = useState("tickle122");
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    setIsUserLoading(true);
    getUserByUsername(userName).then((res) => {
      setUser(res);
      setIsUserLoading(false);
    });
  }, [userName]);

  return (
    <userContext.Provider
      value={{ user, userName, setUsername, isUserLoading }}
    >
      {children}
    </userContext.Provider>
  );
};
