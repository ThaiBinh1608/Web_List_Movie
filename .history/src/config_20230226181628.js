export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey ="ccd2fb4b6c71b6649a8e1b8c8338a19e";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
    getMovieList: (type) =>` https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}`
     
  };