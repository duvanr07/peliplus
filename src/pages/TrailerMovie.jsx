import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {httpApi} from "../data/httpApi.jsx";
import YouTube from "react-youtube";

export function TrailerMovie() {
    const {idMovie} = useParams();
    const {trailer, setTrailer} = useState("");

    useEffect(() => {
        httpApi(`/movie/${idMovie}/videos`).then((data) => {

            data.results.forEach((video) =>{
                if (video.name === "Official Trailer") {
                    setTrailer(video.key)
                }
            });
        });
    }, [idMovie]);

    return(
        <>
            <YouTube
                videoId={trailer}
                opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                    },
                }}
            />
        </>
    );
}