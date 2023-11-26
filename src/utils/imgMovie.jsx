import loading from "../img/loading.webp";

export function imgMovie(path, width) {

    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : loading;

}