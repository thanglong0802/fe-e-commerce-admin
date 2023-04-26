import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Crud from "../../common/crud/Crud";
import Search from "../../common/search/Search";
import "./css/style.css";
import api from "../../api/api";

function Content() {
  const { id } = useParams();

  const [res, setRes] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`/category/detail/${id}`);
        setRes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);
  return (
    <>
      <div className="content">
        <Crud res={res} />
        <div className="data-product">
          <Search />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Content;
