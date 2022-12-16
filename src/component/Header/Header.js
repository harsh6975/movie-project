import React from "react";
import logo from "../../images/logo.png";
import search from "../../images/search.png";

import style from "./Header.module.css";
function Header() {
  return (
    <div className={style.header}>
      <img src={logo} alt="logo"></img>
      <div className={style.input}>
        <img src={search} alt="logo"></img>
        <input placeholder="Search for a movie"></input>
      </div>
    </div>
  );
}

export default Header;
