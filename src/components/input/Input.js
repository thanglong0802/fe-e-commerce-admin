import React from "react";
import "./css/style.css";

function Input() {
  return (
    <div className="search">
      <form action="#" method="get" className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Tìm kiếm..."
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Input;
