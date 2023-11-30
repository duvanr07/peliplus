import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./DetailMovie.css";

import { imgMovie } from "../utils/imgMovie";
import {GET_CREDITS, GET_DETAIL, GET_KEYWORDS, GET_VIDEOS} from "../redux/actions";

export const DetailMovie = () => {
  const { idMovie } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_DETAIL({ id: idMovie }));
    dispatch(GET_VIDEOS({ id: idMovie }));
    dispatch(GET_KEYWORDS({ id: idMovie }));
    dispatch(GET_CREDITS({ id: idMovie }));
  }, []);

  const movie = useSelector((state) => state.detailMovie);
  const keywords = useSelector((state) => state.detailMovie.keywords);
  const characters = useSelector((state) => state.detailMovie.credits)
  const isLoading = useSelector((state) => state.detailMovie.loading);

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
        <h1>Keywords</h1>

        {keywords.map(({ name }) => (
          <span key={name} className="badge bg-info m-1">{name}</span>
        ))}

        <h2>Actores</h2>
        {characters.map(({ profile_path, character }) => (
            <div>
              <img src={'https://image.tmdb.org/t/p/w300' + profile_path} alt=""/>
              <span key={character} className="badge bg-info m-1">{character}</span>
            </div>
        ))}
      </div>
    </div>
  );
};
