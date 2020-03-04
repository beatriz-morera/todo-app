import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import persistState from "redux-localstorage";

import todos from "./features/todosSlice";
import status from "./features/statusSlice";

export default configureStore({
  reducer: {
    todos,
    status
  },
  enhancers: [persistState() as StoreEnhancer]
});
