import { useContext, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { userContext } from "../../contexts/UserContext";
import { capitalizeFirstLetter } from "../../utils/utils";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../utils/api";
import DropDown from "../DropDown";

const LoggedInUser = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");
  const { user, setUsername, isUserLoading } = useContext(userContext);

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch(() => {
        setErr("Something went Wrong :(");
      });
  }, []);

  if (err) {
    return <p>Something went wrong {":("}</p>;
  }

  if (isUserLoading) {
    return (
      <div id='header-user-logo-loader'>
        <Skeleton
          sx={{
            bgcolor: "grey.700",
            height: "3.5rem",
            borderRadius: "50%",
          }}
          className='header-profile'
        />
        <Skeleton
          sx={{
            bgcolor: "grey.700",
            height: "1.5rem",
            width: "8rem",
          }}
          variant='rounded'
          className='header-profile'
        />
      </div>
    );
  }

  const handleClick = (selectedUser) => {
    setUsername(selectedUser);
  };

  return (
    <div>
      <DropDown
        buttonText={
          <div id='header-user-logo'>
            <div className='header-profile red-border'>
              <img src={user.avatar_url} alt={user.username} />
            </div>
            <p>{capitalizeFirstLetter(user.username)}</p>
          </div>
        }
        dropdownOptions={users.map((user) => {
          return {
            name: user.username,
            value: (
              <button
                onClick={() => handleClick(user.username)}
                key={user.username}
                id='header-user-logo-options'
              >
                <div className='header-profile red-border'>
                  <img src={user.avatar_url} alt={user.username} />
                </div>
                <p>{capitalizeFirstLetter(user.username)}</p>
              </button>
            ),
          };
        })}
      />
    </div>
  );
};

export default LoggedInUser;
