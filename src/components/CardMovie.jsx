import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./CardMovie.css";

export const CardMovie = (props) => {
  const {
    movie: { id, poster_path, title },
  } = props;
  const imgUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <div className="cardMovie">
      <Link to={"/movie/" + id} className="linkable">
        <img
          src={imgUrl}
          alt={title}
          className="imgMovie"
        />
        <div>{title}</div>
      </Link>

    </div>
  );
};
CardMovie.propTypes = { movie: PropTypes.any };
