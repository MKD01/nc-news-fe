import React from "react";
import { Link } from "react-router-dom";
import Topics from "./Topics";

const Nav = () => {
  return (
    <div id='nav-container'>
      <div id='links-container'>
        <Link id='articles-link' to='/articles'>
          Articles
          {/* <div className='link-buttons'></div> */}
        </Link>
      </div>

      <Topics />
    </div>
  );
};

export default Nav;
