import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/api";

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    let usernameToFetch = username;

    if (!username) {
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) usernameToFetch = savedUsername;
      else usernameToFetch = "tickle122";
    } else {
      localStorage.setItem("username", username);
    }

    setIsUserLoading(true);

    getUserByUsername(usernameToFetch).then((res) => {
      setUser(res);
      setIsUserLoading(false);
    });
  }, [username]);

  return (
    <userContext.Provider
      value={{ user, username, setUsername, isUserLoading }}
    >
      {children}
    </userContext.Provider>
  );
};
