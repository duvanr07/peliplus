import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_VIDEOS } from "../redux/actions/index.js";

export const TrailerMovie = () => {
  const { idMovie } = useParams();
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.detailMovie.videos);

  useEffect(() => {
    dispatch(GET_VIDEOS({ id: idMovie }));
  }, [idMovie]);

  return (
    <>
      {videos.map((video) => (
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + video.key}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ))}
    </>
  );
};
