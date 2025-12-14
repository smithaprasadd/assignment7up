import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSongByIdApi } from "../api/mockApi";
import { useDispatch } from "react-redux";
import { playSong } from "../slices/playerSlice";

export default function Details() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSongByIdApi(id).then((s) => setSong(s));
  }, [id]);

  if (!song) return <p>Loading...</p>;

  return (
    <div>
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
      <p>Genre: {song.genre}</p>

      <button onClick={() => dispatch(playSong(song))}>Play</button>
    </div>
  );
}
