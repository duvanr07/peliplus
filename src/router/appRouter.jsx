import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { DetailMovie } from "../pages/DetailMovie";
import { TrailerMovie } from "../pages/TrailerMovie";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/movie/:idMovie" element={<DetailMovie />} />
        <Route exact path="/movie/:idMovie/videos" element={<TrailerMovie />} />
      </Routes>
    </>
  );
};
