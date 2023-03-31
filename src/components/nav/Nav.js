import React from "react";
import Category from "../category/Category";
import Input from "../../common/input/Input";
import "./css/style.css";

function Nav() {
  return (
    <>
      <div className="nav-category">
        <Input />
        <Category />
      </div>
    </>
  );
}

export default Nav;
