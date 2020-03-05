import { createSlice } from "@reduxjs/toolkit";

const newId = () =>
  Math.random()
    .toString()
    .replace(".", "");

const newTodo = text => ({
  id: newId(),
  text,
  isCompleted: false,
  isImportant: false
});

export const slice = createSlice({
  name: "todos",
  initialState: {
    list: [newTodo("First task of the day")],
    showAllDone: false
  },
  reducers: {
    addNew: (state, action) => {
      state.list.push(newTodo(action.payload));
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
    closeAllDone: state => {
      state.list = [];
      state.showAllDone = false;
    }
  }
});

export const selectTodos = state => state.todos.list;
export const selectAllDone = state => state.todos.showAllDone;
export const { addNew, remove, done, important, closeAllDone } = slice.actions;

export default slice.reducer;
