import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopPlay from "./components/TopPlay";
import Player from "./components/Player";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useDispatch } from "react-redux";
import { fetchGenres } from "./slices/genreSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="app flex">
      <Sidebar />

      <div className="content">
        <div className="header">
          <h2>My Music App</h2>
          <TopPlay />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/song/:id" element={<Details />} />
        </Routes>
      </div>

      <Player />
    </div>
  );
}
