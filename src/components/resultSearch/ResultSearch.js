import React from "react";

function ResultSearch(props) {
  const { resultSearch } = props;
  return (
    <>
      <div className="">
        <ul className="">
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
