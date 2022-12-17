import React, { useState } from "react";
import RecentMovie from "./RecentMovie/RecentMovie";
import Header from "./Header/Header";
import Search from "./Search/Search";

function Home() {
  const [search, setSearch] = useState([]);
  const findSearch = (movie) => {
    setSearch(movie);
  };
  return (
    <div className="App">
      <Header movieName={findSearch} />
      <Search movieName={search} />
      <RecentMovie />
    </div>
  );
}

export default Home;
