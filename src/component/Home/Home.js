import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
import MovieCard from "../MovieCard/MovieCard";

function Home() {
  const [moviesList, setMoviesList] = useState([]);

  const getMovies = async () => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMoviesList(movies.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={style.home}>
      <h3>Most Recent Movies</h3>
      <div className={style.movie}>
        {moviesList.map((movie,index) => {
          return <MovieCard movie={movie} key={index}/>
        })}
      </div>
    </div>
  );
}

export default Home;
