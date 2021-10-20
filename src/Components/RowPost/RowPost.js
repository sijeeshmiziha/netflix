import React, { useEffect, useState } from "react";
import Axios from "../../axios/axios";
import { imageUrl, baseUrl, API_KEY } from "../../constants/constants";
import close from "./red-x.svg";
import "./RowPost.css";
import ShowTrailer from "../ShowTrailer/ShowTrailer";

function RowPost({ title, isSmall, api }) {
  const [movies, setMovies] = useState([]);
  const [videoKey, setVideoKey] = useState();
  useEffect(() => {
    Axios.get(api)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [api]);

  const handleMovieClick = (item) => {
    Axios.get(`${baseUrl}/movie/${item.id}/videos?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        let videoData = response.data.results[0];
        console.log(videoData);
        setVideoKey(videoData.key);
      })
      .catch((err) => {
        alert("Video is not found..,Please choose another Movie...");
      });

    console.log(videoKey);
  };
  let display = movies.map((item, index) => {
    return (
      <img
        key={index}
        onClick={() => handleMovieClick(item)}
        className={isSmall ? "small-poster" : "poster"}
        src={imageUrl + item.backdrop_path}
        alt=""
      />
    );
  });
  const handleShow = () => {
    setVideoKey(undefined);
  };

  return (
    <>
      <div className="row" onClick={handleShow}>
        <h2>{title}</h2>

        <div className="posters" onClick={handleShow}>
          {movies && display}{" "}
        </div>
        <div
          className={videoKey ? "close-icon" : "hide-icon"}
          onClick={handleShow}
        >
          <img src={close} alt="close" />
        </div>
      </div>
      <div className="show-container">
        {videoKey && <ShowTrailer videoKey={videoKey} />}
      </div>
    </>
  );
}

export default RowPost;
