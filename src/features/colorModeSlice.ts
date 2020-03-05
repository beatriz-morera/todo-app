import { createSlice } from "@reduxjs/toolkit";

export const IMPORTANT_STATE = "main";
export const TODO_STATE = "todo";
export const DONE_STATE = "done";

export const slice = createSlice({
  name: "mode",
  initialState: {
    darkMode: false
  },
  reducers: {
    setMode: state => {
      state.darkMode = !state.darkMode;
    }
  }
});

export const selectMode = state => state.mode.darkMode;

export const { setMode } = slice.actions;

export default slice.reducer;
