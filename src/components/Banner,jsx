import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./banner.css";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.ceil(Math.random() * request.data.results.length - 1)
        ]
      );
      // console.log(request.data.results[Math.floor(Math.random()* request.data.results.length - 1)])
      return request;
    }
    fetchData();
  }, [requests.fetchNetflixOriginals]);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${BASE_URL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        {/* title  */}
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        {/* div >>2btn "play" add to watchlist  */}
        <div className="banner__buttons">
          <button>Play</button>
          <button>Add to List</button>
        </div>
        {/* descrpiton  */}
        <p>{movie.overview}</p>
      </div>
      <div className="fade-Bottom" />
    </header>
  );
}

export default Banner;
