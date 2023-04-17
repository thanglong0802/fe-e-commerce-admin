import React from "react";
import Category from "../category/Category";
import Search from "../../common/search/Search";
import "./css/style.css";

function Nav() {
  return (
    <>
      <div className="nav-category">
        <Search />
        <Category />
      </div>
    </>
  );
}

export default Nav;
