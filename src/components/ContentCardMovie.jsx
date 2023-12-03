import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DISCOVER, GET_NOW_PLAYING, GET_POPULAR } from "../redux/actions";
import { CardMovie } from "./CardMovie";
import "./ContentCardMovie.css";
export const ContentCardMovie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.popular);
  useEffect(() => dispatch(GET_POPULAR()), []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
