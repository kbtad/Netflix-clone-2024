// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = "42d0a3dc0d034bac92dec60aef06fe1b";
// const API_KEY = "c0e3762b784c812cf82758b2f5ccd8b8;";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, // Fixed typo in URL (`monvie` -> `movie`)
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // Fixed typo in 'with_ngeners'
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // Fixed typo in 'with_ngeners'
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // Fixed typo in 'with_ngeners'
  fetchTVshow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
