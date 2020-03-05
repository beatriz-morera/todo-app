import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import persistState from "redux-localstorage";

import * as todos from "./features/todosSlice";
import * as status from "./features/statusSlice";
import * as mode from "./features/darkModeSlice";

export interface State {
  todos: todos.State;
  status: status.State;
  mode: mode.State;
}

export default configureStore<State>({
  reducer: {
    todos: todos.reducer,
    status: status.reducer,
    mode: mode.reducer
  },
  enhancers: [persistState() as StoreEnhancer]
});
