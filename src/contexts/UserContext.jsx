import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../utils/api";

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    let userToFetch = username;

    if (!username) {
      userToFetch = localStorage.getItem("username");
    } else {
      localStorage.setItem("username", username);
    }

    setIsUserLoading(true);

    getUserByUsername(userToFetch).then((res) => {
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
