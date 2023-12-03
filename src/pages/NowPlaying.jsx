import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardMovie } from "../components/CardMovie";
import { GET_NOW_PLAYING } from "../redux/actions";

export const NowPlaying = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.nowPlaying);
  useEffect(() => dispatch(GET_NOW_PLAYING()), []);

  return (
    <div className="container">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
