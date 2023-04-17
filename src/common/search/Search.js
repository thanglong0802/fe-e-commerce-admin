import React from "react";
import "./css/style.css";

function Search() {
  const handlePreviewDefault = (event) => {
    event.preventDefault();
  };
  return (
    <div className="search">
      <form action="#" method="get" className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Tìm kiếm..."
        />
        <button
          type="submit"
          className="search-button"
          onClick={(event) => handlePreviewDefault(event)}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Search;
