import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DISCOVER } from "../redux/actions";
import { CardMovie } from "./CardMovie";
import "./ContentCardMovie.css";
export const ContentCardMovie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.discover);
  useEffect(() => dispatch(GET_DISCOVER()), []);


  return (
    <ul className="container">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
