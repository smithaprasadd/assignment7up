import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSongsApi } from "../api/mockApi";

export const fetchSongs = createAsyncThunk("songs/fetch", async (genre) => {
  return await fetchSongsApi(genre);
});

const songsSlice = createSlice({
  name: "songs",
  initialState: { list: [], status: "idle", error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.pending, (s) => {
      s.status = "loading";
    });
    builder.addCase(fetchSongs.fulfilled, (s, a) => {
      s.status = "success";
      s.list = a.payload;
    });
    builder.addCase(fetchSongs.rejected, (s, a) => {
      s.status = "error";
      s.error = a.error.message;
    });
  },
});

export default songsSlice.reducer;
