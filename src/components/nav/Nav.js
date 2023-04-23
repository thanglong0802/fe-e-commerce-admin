import React, { useEffect, useState } from "react";
import api from "../../api/api";
import "./css/style.css";
import Sidebar from "../sidebar/Sidebar";
import ResultSearch from "../resultSearch/ResultSearch";

function Nav() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(null);
  const [resultSearch, setResultSearch] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`/category/search`);
        setSearch(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const handlePreviewDefault = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const list = search.data.filter((s) => {
        return s.name.toLowerCase().includes(input.toLowerCase());
      });
      setResultSearch(list);
    } else {
      setResultSearch(false);
    }
  };
  return (
    <div className="nav-category">
      <div className="search">
        <form action="#" method="get" className="search-form">
          <input
            type="search"
            className="search-input"
            placeholder="Tìm kiếm..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="search-button"
            onClick={(e) => handlePreviewDefault(e)}
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {resultSearch ? (
        <ResultSearch resultSearch={resultSearch} />
      ) : (
        <Sidebar />
      )}
    </div>
  );
}

export default Nav;
