import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../slices/songsSlice";
import { selectGenre } from "../slices/genreSlice";
import SongCard from "../components/SongCard";

export default function Home() {
  const dispatch = useDispatch();

  const { list: songs, status: songStatus } = useSelector((s) => s.songs);
  const { list: genres, selected, status: genreStatus } = useSelector(
    (s) => s.genres
  );

  useEffect(() => {
    dispatch(fetchSongs(selected));
  }, [dispatch, selected]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Discover</h2>

      {/* GENRE BUTTONS */}
      <div className="mb-6 flex flex-wrap gap-3">
        {genreStatus === "loading" && <p>Loading genres...</p>}

        {genres?.length > 0 &&
          genres.map((g) => (
            <button
              key={g}
              onClick={() => dispatch(selectGenre(g))}
              className={`genre-btn ${
                selected === g ? "genre-btn-active" : ""
              }`}
            >
              {g}
            </button>
          ))}

        {genres?.length === 0 && genreStatus !== "loading" && (
          <p>No genres available.</p>
        )}
      </div>

      {/* SONGS */}
      <div>
        {songStatus === "loading" && <p>Loading songs...</p>}

        {songs?.length > 0 &&
          songs.map((song) => <SongCard key={song.id} song={song} />)}

        {songs?.length === 0 && songStatus !== "loading" && (
          <p>No songs found.</p>
        )}
      </div>
    </div>
  );
}
