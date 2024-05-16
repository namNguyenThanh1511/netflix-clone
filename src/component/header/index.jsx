import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img width={80} src="https://seekvectors.com/files/download/Netflix-Logo-19.png" alt="" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link className="nav_item" to="/">
              Home
            </Link>{" "}
            {/*Link from React router dom , because <a>  will cause the page reload automatically => we not expect that in react*/}
          </li>
          <li>
            <Link className="nav_item" to="/">
              Movies
            </Link>
          </li>
          <li>
            <Link className="nav_item" to="/movie-management">
              Movie-management
            </Link>
          </li>
          <li>
            <SearchOutlined className="nav_item" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
