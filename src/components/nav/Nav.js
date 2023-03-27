import React from "react";
import CategoryProduct from "../categoryProduct/CategoryProduct";
import Input from "../input/Input";
import "./css/style.css";

function Nav() {
  return (
    <>
      <div className="nav-category">
        <Input />
        <CategoryProduct />
      </div>
    </>
  );
}

export default Nav;
