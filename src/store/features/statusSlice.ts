import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

export enum SegmentValue {
  Important = "main",
  Todo = "todo",
  Done = "done"
}

export interface Segment {
  value: SegmentValue;
  title: string;
}

export interface State {
  list: Segment[];
  value: SegmentValue;
}

export const slice = createSlice<State, SliceCaseReducers<State>>({
  name: "status",
  initialState: {
    list: [
      { value: SegmentValue.Important, title: "MAIN" },
      { value: SegmentValue.Todo, title: "TODO" },
      { value: SegmentValue.Done, title: "DONE" }
    ],
    value: SegmentValue.Todo
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const selectStatus = (state: State) => state.value;
export const selectStatusList = (state: State) => state.list;

export const { setStatus } = slice.actions;

export const reducer = slice.reducer;
