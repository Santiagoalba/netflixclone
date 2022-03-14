import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import "../css/Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  const fetchUrl = requests.fetchActionMovies;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${requests.fetchImages}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h2 className="banner__title">{movie?.original_title}</h2>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h3 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h3>
      </div>
      <div className="banner--fade" />
    </header>
  );
}

export default Banner;
