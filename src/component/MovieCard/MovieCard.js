import React, { useEffect, useState } from "react";
import style from "./MovieCard.module.css";
import { Modal } from "react-bootstrap";
import cancel from "../../images/cancel.png";

function MovieCard({ movie }) {
  const [imgUrl, setImgUrl] = useState("");
  const [open, setopen] = useState(false);
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const convertDate = (date) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    setYear(year);
    setDay(day);
    setMonth(months[month-1]);
  };

  useEffect(() => {
    setImgUrl(movie.poster_path);
    convertDate(movie.release_date);
  }, []);

  return (
    <>
      <div className={style.card} onClick={() => setopen(true)}>
        <p>
          <small>{movie.vote_average}</small>
        </p>
        <img src={`${baseUrl}${imgUrl}`} alt={`poster${movie.title}`}></img>
        <div>{movie.title}</div>
      </div>
      <Modal
        show={open}
        onHide={() => setopen(false)}
        centered
        dialogClassName={style.modal}
        backdrop="static"
      >
        <div className={style.heading}>
          <div>{movie.title}</div>
          <img
            src={cancel}
            alt="cancel"
            height="40px"
            onClick={() => setopen(false)}
          />
        </div>
        <div className={style.content}>
          <img src={`${baseUrl}${imgUrl}`} alt={`poster${movie.title}`}></img>
          <div>
            <p>
              <strong>Release date</strong>: {month} {day}, {year}
            </p>
            <p>{movie.overview} </p>
            <p>
              <strong>{movie.vote_average}</strong> / 10 ( {movie.vote_count}{" "}
              total votes )
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default MovieCard;
