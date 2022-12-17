import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Search from "./component/Search/Search";
function App() {
  const [search, setSearch] = useState([]);
  const findSearch = (movie) => {
    console.log("movie", movie);
    setSearch(movie);
  };
  return (
    <div className="App">
      <Header movieName={findSearch} />
      <Search movieName={search} />
      <Home />
    </div>
  );
}

export default App;
