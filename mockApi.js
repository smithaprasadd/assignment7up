const GENRES = ["All", "Pop", "Rock", "Hip-Hop", "Jazz"];

const SONGS = [
  { id: "1", title: "Neon Lights", artist: "Aurora", genre: "Pop" },
  { id: "2", title: "Sky Dreams", artist: "Luna", genre: "Rock" },
  { id: "3", title: "Bass Flow", artist: "Rico", genre: "Hip-Hop" },
];

export function fetchGenresApi() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(GENRES), 500)
  );
}

export function fetchSongsApi(genre) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(genre === "All" ? SONGS : SONGS.filter((s) => s.genre === genre));
    }, 800)
  );
}

export function fetchSongByIdApi(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(SONGS.find((s) => s.id === id)), 500)
  );
}
