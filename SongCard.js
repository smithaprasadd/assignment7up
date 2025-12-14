import { useDispatch } from "react-redux";
import { setActiveSong, playSong } from "../slices/playerSlice";
import { Link } from "react-router-dom";

export default function SongCard({ song }) {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setActiveSong(song));
    dispatch(playSong());
  };

  return (
    <div className="song-card">
      <div
        className="flex-1 cursor-pointer"
        onClick={handlePlay}
      >
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>

      <div className="flex gap-3 items-center">
        {/* ▶ Play Button */}
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500"
        >
          Play
        </button>

        {/* ℹ️ Details Button */}
        <Link
          to={`/song/${song.id}`}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 details-btn"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
