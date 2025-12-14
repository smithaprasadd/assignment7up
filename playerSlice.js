import { createSlice } from "@reduxjs/toolkit";
const initialState={
  activeSong:JSON.parse(localStorage.getItem("lastSong"))||null,isPlaying:false,
}
const playerSlice = createSlice({
  name: "player",
  initialState: {
    activeSong: null,
    isPlaying: false,
  },
  reducers: {
    setActiveSong(state, action) {
      state.activeSong = action.payload;
    },
    playSong(state) {
      state.isPlaying = true;
    },
    pauseSong(state) {
      state.isPlaying = false;
    },
  },
});

export const { setActiveSong, playSong, pauseSong } = playerSlice.actions;
export default playerSlice.reducer;
