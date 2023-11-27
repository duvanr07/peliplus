import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LandingPage} from "../pages/LandingPage.jsx";
import {DetailMovie} from "../pages/DetailMovie.jsx";

export function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/movie/:idMovie" element={<DetailMovie />} />
            </Routes>
        </Router>
    )
}
