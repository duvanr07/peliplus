export const config = {
  host: "https://api.themoviedb.org/3",
  endpoints: {
    movies: {
      nowPlaying: "/movie/now_playing",
      discover: "/discover/movie",
      search: "/search/movie",
      popular: "/movie/popular",
      upcoming: "/movie/upcoming",
    },
    movie: {
      detail: "/movie/${id}",
      keywords: "/movie/${id}/keywords",
      videos: "/movie/${id}/videos",
      credits: "/movie/${id}/credits",
    },
    peoples: {
      popularList: "/person/popular",
      detail: "/person/${personId}",
    },
  },
};
