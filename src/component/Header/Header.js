import React, { useState } from "react";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import style from "./Header.module.css";

function Header({ movieName }) {
  const [name, setName] = useState("");

  const searchmovie = (e) => {
    if (e.key === "Enter") movieName(name);
  };

  return (
    <div className={style.header}>
      <img src={logo} alt="logo"></img>
      <div className={style.input}>
        <img src={search} alt="logo"></img>
        <input
          placeholder="Search for a movie"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => {
            searchmovie(e);
          }}
        ></input>
      </div>
    </div>
  );
}

export default Header;
