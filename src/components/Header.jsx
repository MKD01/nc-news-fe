import { useContext } from "react";
import { Link } from "react-router-dom";
import { queryContext } from "../contexts/QueryContext";

const Header = () => {
  const { setSort_by } = useContext(queryContext);

  return (
    <Link id='header' to={`/articles`}>
      NC News
    </Link>
  );
};

export default Header;
