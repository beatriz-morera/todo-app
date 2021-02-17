import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import Todo from "../../models/todo";

const newId = () =>
  Math.random()
    .toString()
    .replace(".", "");

const newTodo = (text: string): Todo => ({
  id: newId(),
  text,
  isCompleted: false,
  isImportant: false
});

export interface State {
  list: Todo[];
  showAllDone: boolean;
}

const slice = createSlice<State, SliceCaseReducers<State>>({
  name: "todos",
  initialState: {
    list: [],
    showAllDone: false
  },
  reducers: {
    addNew: (state, action) => {
      state.list.push(newTodo(action.payload));
    },
    edit: (state, action) => {
      const { todo, newText } = action.payload;
      const task = state.list.find(({id}) => id === todo.id);
      if (task) {
        task.text = newText;
      }
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter(t => t.id !== id);
    },
    done: (state, action) => {
      const { id } = action.payload;
      const task = state.list.find(t => t.id === id);
      if (task) {
        task.isCompleted = true;
      }
      state.showAllDone = state.list.every(task => task.isCompleted);
    },
    important: (state, action) => {
      const { id } = action.payload;
      const task = state.list.find(t => t.id === id);
      if (task) {
        task.isImportant = !task.isImportant;
      }
    },
    reorderList: (state, action) => {
      state.list = action.payload;
    },
    closeAllDone: state => {
      state.list = [];
      state.showAllDone = false;
    }
  }
});

export const selectTodos = (state: State) => state.list;
export const selectAllDone = (state: State) => state.showAllDone;

export const { addNew, edit, remove, done, important, reorderList, closeAllDone } = slice.actions;

export const reducer = slice.reducer;
