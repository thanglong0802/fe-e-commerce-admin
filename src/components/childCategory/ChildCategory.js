import React from "react";

import "./css/style.css";
import { Link } from "react-router-dom";

function ChildCategory(props) {
  const { childCate, isHidden } = props;

  return (
    <div
      className="ul-attribute"
      style={{ display: isHidden ? "none" : "block" }}
    >
      {childCate.map((child) => {
        if (child.parent_id) {
          return (
            <li key={child.id}>
              <Link to="/addCategory">{child.name}</Link>
            </li>
          );
        }
      })}
    </div>
  );
}

export default ChildCategory;
