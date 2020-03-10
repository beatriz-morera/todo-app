import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import events from "@testing-library/user-event";
import configureStore from "redux-mock-store";

import Task from "../Task";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Task component tests", () => {
  let store = null;
  const task = {
    id: "1",
    text: "new todo",
    isCompleted: false,
    isImportant: false
  };
  beforeEach(() => {
    store = mockStore({
      todos: {
        list: [],
        showAllDone: false
      },
      mode: {
        darkMode: false
      }
    });
  });

  test("should render text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Task todo={task} />
      </Provider>
    );
    expect(getByText(task.text)).toBeInTheDocument();
  });

  test("should toggle todo on click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Task todo={task} />
      </Provider>
    );
    events.click(getByTestId("important"));
    expect(store.getActions()).toStrictEqual([
      {
        payload: task,
        type: "todos/important"
      }
    ]);
  });

  test("should complete todo on click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Task todo={task} />
      </Provider>
    );
    events.click(getByTestId("complete"));
    expect(store.getActions()).toStrictEqual([
      {
        payload: task,
        type: "todos/done"
      }
    ]);
  });

  test("should delete todo on click", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Task todo={task} />
      </Provider>
    );
    events.click(getByTestId("delete"));
    expect(store.getActions()).toStrictEqual([
      {
        payload: task,
        type: "todos/remove"
      }
    ]);
  });
});
