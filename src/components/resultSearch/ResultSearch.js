import React from "react";

import "./css/style.css";

function ResultSearch(props) {
  const { resultSearch } = props;
  return (
    <>
      <div className="result-search">
        <ul>
          {resultSearch.map((rs) => (
            <li key={rs.id} className="">
              {rs.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ResultSearch;
