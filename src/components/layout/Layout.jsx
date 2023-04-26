import React from "react";
import Content from "../content/Content";
import Header from "../header/Header";
import Nav from "../nav/Nav";

import "./css/style.css";

function Layout() {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <div className="nav-content">
        <nav>
          <Nav />
        </nav>
        <main>
          <Content />
        </main>
      </div>
    </div>
  );
}

export default Layout;
