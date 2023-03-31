import React from "react";

import "./css/style.css";

function CategoryProduct(props) {
  const { subCategories, hide } = props;
  return (
    <ul className="ul-attribute" style={{ display: hide ? "none" : "block" }}>
      {subCategories.map((ele) => (
        <li>
          <a href="#m">{ele}</a>
        </li>
      ))}
    </ul>
  );
}

export default CategoryProduct;
