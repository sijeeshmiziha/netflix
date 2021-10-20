import React, { useEffect, useState } from "react";
import "./Banner.css";
import Axios from "../../axios/axios";
import { API_KEY, imageUrl } from "../../constants/constants";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    let min = 0;
    let max = 20;
    function randomNumber() {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    Axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {
      setMovie(response.data.results[randomNumber()]);
    });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : ""} </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""} </h1>{" "}
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
