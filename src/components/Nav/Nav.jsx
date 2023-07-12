import React from "react";
import TopicsDropdown from "./TopicsDropdown";
import SortDropdown from "./SortDropdown";

const Nav = () => {
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
