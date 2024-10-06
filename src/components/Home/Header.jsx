import { Link } from "react-router-dom";
import LoggedInUser from "../Users/LoggedInUser";

const Header = () => {
  return (
    <div id='header-container'>
      <Link id='header' to={`/`}>
        NC News
      </Link>
      <LoggedInUser />
    </div>
  );
};

export default Header;
