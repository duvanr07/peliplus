import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/about";


export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};
