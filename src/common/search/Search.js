import React, { useEffect, useState } from "react";
import api from "../../api/api";
import "./css/style.css";

function Search() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(null);

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
    const list = search.data.filter((s) => {
      return s.name.toLowerCase().includes(input.toLowerCase());
    });
    console.log(list);
  };
  return (
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
  );
}

export default Search;
