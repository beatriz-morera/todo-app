import { createSelector } from "@reduxjs/toolkit";

import { selectStatus, DONE_STATE, TODO_STATE } from "./statusSlice";
import { selectTodos } from "./todosSlice";

export const selectActiveTodos = createSelector(
  selectTodos,
  selectStatus,
  (todos, status) => {
    switch (status) {
      case DONE_STATE:
        return todos.filter(todo => todo.isCompleted);
      case TODO_STATE:
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  }
);
