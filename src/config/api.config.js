export const config = {
  host: "https://api.themoviedb.org/3",
  endpoints: {
    movies: {
      nowPlaying: "/movie/now_playing",
      discover: "/discover/movie",
    },
    movie: {
      detail: "/movie/${id}",
    },
  },
};
