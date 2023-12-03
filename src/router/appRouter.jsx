import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { DetailMovie } from "../pages/DetailMovie";
import { TrailerMovie } from "../pages/TrailerMovie";
import { NowPlaying } from "../pages/NowPlaying";
import { Upcoming } from "../pages/Upcoming";
import { Peoples } from "../pages/Peoples";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/now-playing" element={<NowPlaying />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
        <Route path="/peoples" element={<Peoples />}></Route>
        <Route exact path="/movie/:idMovie" element={<DetailMovie />} />
        <Route exact path="/movie/:idMovie/videos" element={<TrailerMovie />} />
      </Routes>
    </>
  );
};
