import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGenresApi } from "../api/mockApi";

/* ===============================
   Async thunk to fetch genres
================================ */
export const fetchGenres = createAsyncThunk(
  "genres/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchGenresApi();
    } catch (err) {
      return rejectWithValue("Failed to load genres");
    }
  }
);

/* ===============================
   Initial State (with persistence)
================================ */
const initialState = {
  list: [],
  selected: localStorage.getItem("genre") || "All",
  status: "idle", // idle | loading | success | error
  error: null,
};

/* ===============================
   Slice
================================ */
const genreSlice = createSlice({
  name: "genres",
  initialState,

  /* ---- Sync reducers ---- */
  reducers: {
    selectGenre(state, action) {
      state.selected = action.payload;
      localStorage.setItem("genre", action.payload);
    },
  },

  /* ---- Async reducers ---- */
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

/* ===============================
   Exports
================================ */
export const { selectGenre } = genreSlice.actions;
export default genreSlice.reducer;
