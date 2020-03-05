import { createSelector } from "@reduxjs/toolkit";

import Todo from "../models/todo";

import * as status from "./features/statusSlice";
import * as todos from "./features/todosSlice";
import * as mode from "./features/darkModeSlice";
import { State } from "./store";

export const selectTodos = (state: State) => todos.selectTodos(state.todos);
export const selectAllDone = (state: State) => todos.selectAllDone(state.todos);

export const selectStatus = (state: State) => status.selectStatus(state.status);
export const selectStatusList = (state: State) =>
  status.selectStatusList(state.status);

export const selectMode = (state: State) => mode.selectMode(state.mode);

export const selectActiveTodos = createSelector(
  selectTodos,
  selectStatus,
  (todos: Todo[], st) => {
    switch (st) {
      case status.SegmentValue.Done:
        return todos.filter(todo => todo.isCompleted);
      case status.SegmentValue.Todo:
        return todos.filter(todo => !todo.isCompleted);
      case status.SegmentValue.Important:
        return todos.filter(todo => todo.isImportant && !todo.isCompleted);
      default:
        return todos;
    }
  }
);

export const selectNumOfTodos = createSelector(selectTodos, (todos: Todo[]) => {
  const numOfTodo = todos.filter(todo => !todo.isCompleted).length;
  const numOfDone = todos.filter(todo => todo.isCompleted).length;
  const numOfMain = todos.filter(todo => todo.isImportant && !todo.isCompleted)
    .length;
  return {
    [status.SegmentValue.Todo]: numOfTodo,
    [status.SegmentValue.Done]: numOfDone,
    [status.SegmentValue.Important]: numOfMain
  };
});
