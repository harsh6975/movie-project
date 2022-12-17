import React, { useEffect, useState } from "react";
import style from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const [imgUrl, setImgUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    setImgUrl(movie.poster_path);
  }, []);

  return (
    <div className={style.card}>
      <p>
        <small>{movie.vote_average}</small>
      </p>
      <img src={`${baseUrl}${imgUrl}`} alt={`poster${movie.title}`}></img>
      <div>{movie.title}</div>
    </div>
  );
}

export default MovieCard;
