import React, { useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {GET_DETAIL, GET_KEYWORDS, GET_VIDEOS} from "../redux/actions/index.js";
import "./DetailMovie.css";
import {imgMovie} from "../utils/imgMovie.jsx";

export const TrailerMovie = () => {
  const { idMovie } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_DETAIL({ id: idMovie }));
    dispatch(GET_VIDEOS({ id: idMovie }));
    dispatch(GET_KEYWORDS({ id: idMovie }));
  }, [idMovie]);

  const movie = useSelector((state) => state.detailMovie);
  const keywords = useSelector((state) => state.detailMovie.keywords);
  const videos = useSelector((state) => state.detailMovie.videos);
  const isLoading = useSelector((state) => state.detailMovie.loading);

  const imgUrl = imgMovie(movie.poster_path, 500, isLoading);

  return (
    <>
      <div className="container containerMovie d-flex flex-wrap justify-content-center">
        <img src={imgUrl} alt={movie.title} className="imgDetailMovie" />

        <div className="detailMovie">
          <p className="titleMovie">
            <strong>Título: </strong> {movie.title}
          </p>

          <p className="paragraph">
            <strong>Resumen</strong><br/>
            {movie.overview}
          </p>

          <p className="paragraph">
            <strong>Keywords</strong><br/>
            {keywords.map(({ name }) => (
                <span key={name} className="badge bg-info mx-1">{name}</span>
            ))}
          </p>

          <p className="paragraph">
            <strong>Actores</strong><br/>
            <Link to={"/movie/" + movie.id} className="linkable">Ver Actores</Link>
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="actorsTitle">Trailers</h2>

        <div className="actorsMovie mt-4">
          {videos.map((video) => (
              <iframe
                key={video.key}
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + video.key}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="cardTrailer"
              ></iframe>
          ))}
        </div>
      </div>
    </>
  );
};
