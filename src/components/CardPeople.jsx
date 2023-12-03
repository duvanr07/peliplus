import React from "react";
import PropTypes from "prop-types";
import "./CardMovie.css";
import { Link } from "react-router-dom";

export const CardPeople = ({people}) => {

  const { id, profile_path, original_name, popularity } = people;
  const imgUrl = `https://image.tmdb.org/t/p/w300${profile_path}`;

  return (
    <div>
      <Link to={"/people/" + id} className="linkable">
        <img
          width={230}
          height={345}
          src={imgUrl}
          alt={original_name}
          title={original_name}
          className="imgMovie"
        />
        <div></div>
      </Link>
    </div>
  );
};

CardPeople.propTypes = { people: PropTypes.any };
