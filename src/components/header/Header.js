import React from "react";

function Header(props) {
  return (
    <header>
      <div className="menu">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <a class="navbar-brand" href="#a">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#a">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#a">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#a"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#a">
                    Action
                  </a>
                  <a class="dropdown-item" href="#a">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#a">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#a">
                  Disabled
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
