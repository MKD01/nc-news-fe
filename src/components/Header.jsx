import { useContext } from "react";
import { Link } from "react-router-dom";
import { queryContext } from "../contexts/QueryContext";
import { userContext } from "../contexts/UserContext";

const Header = () => {
  const { setSort_by } = useContext(queryContext);
  const { user, isLoading } = useContext(userContext);

  return (
    <div id='header-container'>
      <Link id='header' to={`/articles`}>
        NC News
      </Link>
      {isLoading ? (
        <></>
      ) : (
        <Link to={`/user`} id='header-user-logo'>
          {user.username}
          <div className='header-profile'>
            <img src={user.avatar_url} alt={user.username} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
