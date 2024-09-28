import { useContext } from "react";
import TopicsDropdown from "./TopicsDropdown";
import SortDropdown from "./SortDropdown";
import { queryContext } from "../../contexts/QueryContext";

const Nav = () => {
  const { setTopic } = useContext(queryContext);

  const handleClick = () => {
    setTopic("Topics");
  };

  return (
    <div id='nav-container'>
      <div id='filter-container'>
        <TopicsDropdown />
        <SortDropdown />
      </div>
    </div>
  );
};

export default Nav;
