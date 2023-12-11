import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { imgMovie } from "../utils/imgMovie";
import {
  GET_CREDITS,
  GET_DETAIL,
  GET_KEYWORDS,
  GET_VIDEOS,
} from "../redux/actions";
import "./DetailMovie.css";

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
  const characters = useSelector((state) => state.detailMovie.credits);
  const isLoading = useSelector((state) => state.detailMovie.loading);

  const imgUrl = imgMovie(movie.poster_path, 500, isLoading);

  return (
    <>
      {/* {isLoading && <Spin />} */}

      <div className="container containerMovie d-flex flex-wrap justify-content-center">
        <img src={imgUrl} alt={movie.title} className="imgDetailMovie" />

        <div className="detailMovie">
          <p className="titleMovie">
            <strong>Título: </strong> {movie.title}
          </p>

          <p className="paragraph">
            <strong>Resumen</strong>
            <br />
            {movie.overview}
          </p>

          <p className="paragraph">
            <strong>Keywords</strong>
            <br />
            {keywords.map(({ name }) => (
              <span key={name} className="badge bg-info mx-1">
                {name}
              </span>
            ))}
          </p>

          <p className="paragraph">
            <strong>Trailer</strong>
            <br />
            <Link to={"/movie/" + movie.id + "/videos"} className="linkable">
              Ver Trailers
            </Link>
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="actorsTitle">Actores</h2>

        <div className="row">
          {characters.map(
            ({ profile_path, character, original_name, id }) =>
              profile_path != null && (
                <div key={id} className="col-2">
                  <Link to={"/people/" + id} className="linkable">
                    <div className="card m-2">
                      <img
                        src={"https://image.tmdb.org/t/p/w300" + profile_path}
                        title={character}
                        className="card-img-top"
                      />

                      <div class="card-body">
                        <h5 class="card-title">{character}</h5>
                        <p class="card-text"> {original_name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};
