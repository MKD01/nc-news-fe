import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/UserContext";
import { capitalizeFirstLetter } from "../utils/utils";

const Header = () => {
  const { user, isUserLoading } = useContext(userContext);

  return (
    <div id='header-container'>
      <Link id='header' to={`/articles`}>
        NC News
      </Link>
      {isUserLoading ? (
        <></>
      ) : (
        <Link to={`/user`} id='header-user-logo'>
          <div className='header-profile red-border'>
            <img src={user.avatar_url} alt={user.username} />
          </div>
          {capitalizeFirstLetter(user.username)}
        </Link>
      )}
    </div>
  );
};

export default Header;
