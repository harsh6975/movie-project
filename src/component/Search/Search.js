import React, { useEffect, useState } from "react";
import style from "../Home/Home.module.css";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";

function Search({ movieName }) {
  const [moviesList, setMoviesList] = useState([]);

  const getMovie = async (name) => {
    console.log("name", name);
    if (name.length === 0) return;
    const movies = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    setMoviesList(movies.data.results);
    console.log(movies.data.results);
  };
  useEffect(() => {
    console.log(movieName);
    getMovie(movieName);
  }, [movieName]);

  return (
    <div className={style.home}>
      {moviesList && moviesList.length > 0 && (
        <>
          <h3>Search Results</h3>
          <div className={style.movie}>
            {moviesList.map((movie, index) => {
              return <MovieCard movie={movie} key={index} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Search;