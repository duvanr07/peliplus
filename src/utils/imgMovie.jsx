import loading from "../assets/img/loading.webp";

export function imgMovie(path, width, isLoading = false) {
  return isLoading ? loading : `https://image.tmdb.org/t/p/w${width}${path}`;
}
