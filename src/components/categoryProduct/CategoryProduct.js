import React, { useState } from "react";
import CategoryAttribute from "../categoryAttribute/CategoryAttribute";
import "./css/style.css";

function CategoryProduct() {
  const [show, setShow] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const categories = [
    {
      id: 1,
      name: "Danh mục sản phẩm cha 1",
      subCategories: ["Danh mục sản phẩm con 1a", "Danh mục sản phẩm con 1b"],
    },
    {
      id: 2,
      name: "Danh mục sản phẩm cha 2",
      subCategories: ["Danh mục sản phẩm con 2a", "Danh mục sản phẩm con 2b"],
    },
  ];
  const handleToggle = (element) => {
    setIsHidden(!isHidden);
    setShow(element);
  };
  return (
    <div className="product">
      <ul className="ul-menu">
        {categories.map((ele) => (
          <li key={ele.id} className="li-product">
            <a href="#m">
              <span>{ele.name}</span>
              <i
                className="fa-solid fa-caret-down"
                onClick={() => handleToggle(ele)}
              ></i>
            </a>

            {show?.id === ele.id && (
              <CategoryAttribute
                subCategories={ele.subCategories}
                hide={isHidden}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryProduct;
