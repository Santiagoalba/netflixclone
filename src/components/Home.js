import React from "react";
import Movierow from "./Movierow";
import axios from "../axios";
import requests from "../requests";
import Banner from "./Banner";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Movierow
        title={"Top Rated"}
        fetchUrl={requests.fecthTopRated}
        isLargeRow
      />
      <Movierow title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Movierow title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Movierow title={"HorrorMovies"} fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default Home;
