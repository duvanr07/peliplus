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
    <li className="cardMovie">
      <Link to={"/movie/" + id} className="linkable">
        <img
          width={230}
          height={345}
          src={imgUrl}
          alt={title}
          title={title}
          className="imgMovie"
        />
        <div>

          {/* <Link to={"/movie/" + id + "/videos"} className="linkable">
            {title}
          </Link> */}
        </div>
      </Link>
    </li>
  );
};
CardMovie.propTypes = { movie: PropTypes.any };
