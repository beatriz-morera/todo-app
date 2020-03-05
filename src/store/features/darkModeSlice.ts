import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

export interface State {
  darkMode: boolean;
}

export const slice = createSlice<State, SliceCaseReducers<State>>({
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

export const selectMode = (state: State) => state.darkMode;

export const { setMode } = slice.actions;

export const reducer = slice.reducer;
