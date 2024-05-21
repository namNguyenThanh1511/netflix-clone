import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false);
  return (
    <div className="header">
      <div className={`header__search ${isShowSearch === true ? "active" : ""}`}>
        <input placeholder="Search movie..." type="text" />
        <CloseOutlined onClick={() => setIsShowSearch(false)} />
      </div>
      <div className="header__logo">
        <Link to="/">
          <img width={80} src="https://seekvectors.com/files/download/Netflix-Logo-19.png" alt="" />
        </Link>
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
              {/*dùng Link của ReactRouterDOM để web ko bị reload*/}
              Movie-management
            </Link>
          </li>
          <li>
            <SearchOutlined onClick={() => setIsShowSearch(true)} className="nav_item" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
