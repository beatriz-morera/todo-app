import { createSlice } from "@reduxjs/toolkit";

export const IMPORTANT_STATE = "main";
export const TODO_STATE = "todo";
export const DONE_STATE = "done";

export const slice = createSlice({
  name: "status",
  initialState: {
    list: [
      { value: IMPORTANT_STATE, title: "MAIN" },
      { value: TODO_STATE, title: "TODO" },
      { value: DONE_STATE, title: "DONE" }
    ],
    value: TODO_STATE
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const selectStatus = state => state.status.value;
export const selectStatusList = state => state.status.list;

export const { setStatus } = slice.actions;

export default slice.reducer;
