export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey ="ccd2fb4b6c71b6649a8e1b8c8338a19e";
export const tmdbAPI = {
    getMovieList: (type, page = 1) =>
      `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) =>
      `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch: (query, page) =>
      `${tmdbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
  };