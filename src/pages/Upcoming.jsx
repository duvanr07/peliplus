import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardMovie } from "../components/CardMovie";
import { GET_UPCOMING } from "../redux/actions";

export const Upcoming = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.upcoming);
  useEffect(() => dispatch(GET_UPCOMING()), []);

  return (
    <div className="container contentMovie">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
