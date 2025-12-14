import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playSong, pauseSong } from "../slices/playerSlice";

export default function Player() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((s) => s.player);

  // If no song is active, don't show player
  if (!activeSong) return null;

  return (
    <div className="player">
      <div>
        <h4 className="font-semibold text-lg">{activeSong.title}</h4>
        <p className="text-gray-400 text-sm">{activeSong.artist}</p>
      </div>

      <button
        onClick={() =>
          dispatch(isPlaying ? pauseSong() : playSong())
        }
        className="px-5 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg shadow-lg transition"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
