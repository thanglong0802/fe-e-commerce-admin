import React from "react";
import "./css/style.css";

function Header() {
  return (
    <>
      <div className="header">
        <a className="a-logo" href="#logo">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/assets/logo-new.jpg`}
            alt="logo"
          />
        </a>
      </div>
    </>
  );
}

export default Header;
