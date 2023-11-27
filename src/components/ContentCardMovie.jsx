import {useEffect, useState} from "react";
import {httpApi} from "../data/httpApi.jsx";
import {CardMovie} from "./CardMovie.jsx";
import "./ContentCardMovie.css";

export function ContentCardMovie() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        httpApi("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);

    return(
        <ul className="container">
            {movies.map((movie) => (
                <CardMovie key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}
