import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DISCOVER, GET_NOW_PLAYING } from "../redux/actions";
import { CardMovie } from "./CardMovie";
import "./ContentCardMovie.css";
export const ContentCardMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(GET_DISCOVER()), []);

  const movies = useSelector((state) => state.discover);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
