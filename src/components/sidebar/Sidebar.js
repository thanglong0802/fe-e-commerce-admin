import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListCategory,
  getListChildCate,
} from "../../app/actons/categoryAction";
import ChildCategory from "../childCategory/ChildCategory";
import "./css/style.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [parentIdSelect, setParentIdSelect] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const categoryList = useSelector((state) => state.category.category);

  const childCate = useSelector((state) => state.category.childCategory);

  const handleToggle = (id) => {
    setToggle(!toggle);
    setIsHidden(!isHidden);
    setParentIdSelect(id);
    dispatch(getListChildCate(id));
  };
  return (
    <>
      <h2 id="side-bar">Danh sách danh mục</h2>
      <div className="side-bar-cate">
        <ul className="ul-cate">
          {categoryList.map((parent) => (
            <li key={parent.id} className="li-cate">
              <div className="parent">
                <Link to={`/category/${parent.id}`}>{parent.name}</Link>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/down-arrow.png`}
                  alt=""
                  onClick={() => handleToggle(parent.id)}
                />
              </div>
              <div className="child">
                {toggle && parent.id === parentIdSelect ? (
                  <ChildCategory childCate={childCate} isHidden={isHidden} />
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
