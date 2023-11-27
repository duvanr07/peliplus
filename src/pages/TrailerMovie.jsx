import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {httpApi} from "../data/httpApi.jsx";

export function TrailerMovie() {
    const {idMovie} = useParams();
    const {trailer, setTrailer} = useState([]);

    useEffect(() => {
        httpApi(`/movie/${idMovie}/videos`).then((data) => {
            //setTrailer(data.results[0]);
            console.log(data);
        });
    }, [idMovie]);

    return(
        <>
            <h1>Trailer de Películas</h1>
        </>
    );
}