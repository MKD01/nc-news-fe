import React from "react";
import { Link } from "react-router-dom";
import TopicsDropdown from "./TopicsDropdown";
import OrderDropdown from "./OrderDropdown";

const Nav = () => {
  return (
    <div id='nav-container'>
      <div id='links-container'>
        <Link id='articles-link' to='/articles'>
          All Articles
          {/* <div className='link-buttons'></div> */}
        </Link>
      </div>

      <TopicsDropdown />
      <OrderDropdown />
    </div>
  );
};

export default Nav;
