import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LandingPage} from "../pages/LandingPage.jsx";
import {DetailMovie} from "../pages/DetailMovie.jsx";
import {TrailerMovie} from "../pages/TrailerMovie.jsx";

export function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/movie/:idMovie" element={<DetailMovie />} />
                <Route exact path="/movie/:idMovie/videos" element={<TrailerMovie />} />
            </Routes>
        </Router>
    )
}
