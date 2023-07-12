import React from "react";
import { Link } from "react-router-dom";
import TopicsDropdown from "./TopicsDropdown";
import SortDropdown from "./SortDropdown";

const Nav = () => {
  return (
    <div id='nav-container'>
      {/* <div id='links-container'>
        <Link id='articles-link' to='/articles'>
          All Articles
        </Link>
      </div> */}

      <TopicsDropdown />
      <SortDropdown />
    </div>
  );
};

export default Nav;
