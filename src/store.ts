import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import persistState from "redux-localstorage";

import todos from "./features/todosSlice";
import status from "./features/statusSlice";
import mode from "./features/colorModeSlice";

export default configureStore({
  reducer: {
    todos,
    status,
    mode
  },
  enhancers: [persistState() as StoreEnhancer]
});
