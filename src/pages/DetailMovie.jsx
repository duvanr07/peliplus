import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./DetailMovie.css";

import { GET_DETAIL } from "../redux/actions";
import { imgMovie } from "../utils/imgMovie";
import { Spin } from "antd";

export const DetailMovie = () => {
  const { idMovie } = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(GET_DETAIL({ id: idMovie })), []);
  const movie = useSelector((state) => state.detailMovie);
  const isLoading = useSelector((state) => state.loadingDetail);
  console.log(isLoading);

  const imgUrl = imgMovie(movie.poster_path, 500, isLoading);

  return (
    <div className="containerMovie">
      {/* {isLoading && <Spin />} */}

      <img src={imgUrl} alt={movie.title} className="col imgDetailMovie" />
      <div className="col detailMovie">
        <p className="titleMovie">
          <strong>Título: </strong> {movie.title}
        </p>
        {/* <p className="paragraph">
          <strong>Género: </strong> {genders.name}
        </p> */}
        <p className="paragraph">
          <strong>Resumen: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
};
