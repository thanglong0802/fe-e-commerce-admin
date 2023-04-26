import React from "react";
import "./css/style.css";

function CategoryCrud(props) {
  const { res } = props;
  return (
    <div className="name-crud">
      <div>
        <h2>{res.name}</h2>
        <hr />
      </div>
      <div className="crud">
        <a href="#m">
          <img
            className="img-crud"
            src={`${process.env.PUBLIC_URL}/assets/save.png`}
            alt=""
          />
          <span>Lưu</span>
        </a>
        <a href="#m">
          <img
            className="img-crud"
            src={`${process.env.PUBLIC_URL}/assets/add.png`}
            alt=""
          />
          <span>Thêm mới</span>
        </a>
        <a href="#m">
          <img
            className="img-crud"
            src={`${process.env.PUBLIC_URL}/assets/remove.png`}
            alt=""
          />
          <span>Xóa</span>
        </a>
      </div>
    </div>
  );
}

export default CategoryCrud;
