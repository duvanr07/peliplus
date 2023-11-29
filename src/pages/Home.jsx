import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_NOW_PLAYING } from "../redux/actions";
import { ContentCardMovie } from "../components/ContentCardMovie";

export const Home = () => {
  const dispatch = useDispatch();

  const fetchMovies = useCallback(async () => {
    console.log("ejecutar");
    dispatch(GET_NOW_PLAYING());
  }, []);

  return (
    <div>
      <header>
        <h2 className="title">📺</h2>
        <h2 className="title">Películas Chigüiro</h2>
      </header>

      <ContentCardMovie />
    </div>
  );
};
