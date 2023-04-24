import React from "react";
import { Outlet } from "react-router-dom";
import Crud from "../../common/crud/Crud";
import Search from "../../common/search/Search";
import "./css/style.css";

function Content() {
  return (
    <>
      <div className="content">
        <Crud />
        <div className="data-product">
          <Search />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Content;
