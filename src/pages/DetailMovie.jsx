import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {httpApi} from "../data/httpApi.jsx";
import {imgMovie} from "../utils/imgMovie.jsx";
import "./DetailMovie.css";

export function DetailMovie() {
    const {idMovie} = useParams();
    const  [movie, setMovie] = useState([]);
    const  [genders, setGenders] = useState([]);

    useEffect(() => {
        httpApi("/movie/" + idMovie).then((data) => {
            setMovie(data);
            setGenders(data.genres[0]);
            console.log(data);
        });
    }, [idMovie]);

    const imgUrl = imgMovie(movie.poster_path, 500);

    return (
        <div className="containerMovie">
            <img
                src={imgUrl}
                alt={movie.title}
                className="col imgDetailMovie"
            />
            <div className="col detailMovie">
                <p className="titleMovie"><strong>Título: </strong> {movie.title}</p>
                <p className="paragraph"><strong>Género: </strong> {genders.name}</p>
                <p className="paragraph"><strong>Resumen: </strong> {movie.overview}</p>
            </div>
        </div>
    );
}