import { createSelector } from "@reduxjs/toolkit";

import {
  selectStatus,
  DONE_STATE,
  TODO_STATE,
  IMPORTANT_STATE
} from "./statusSlice";
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
      case IMPORTANT_STATE:
        return todos.filter(todo => todo.isImportant);
      default:
        return todos;
    }
  }
);

export const selectNumOfTodos = createSelector(selectTodos, todos => {
  const numOfTodo = todos.filter(todo => !todo.isCompleted).length;
  const numOfDone = todos.filter(todo => todo.isCompleted).length;
  const numOfMain = todos.filter(todo => todo.isImportant).length;
  return {
    [TODO_STATE]: numOfTodo,
    [DONE_STATE]: numOfDone,
    [IMPORTANT_STATE]: numOfMain
  };
});
