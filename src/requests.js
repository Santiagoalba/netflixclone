const API_KEY = "5c3fa5c88eaf9c8e00cfaf0b3621115b";

const requests = {
  fetchImages: "https://image.tmdb.org/t/p/original",
  fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fecthTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1&limit=5`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
};

export default requests;
